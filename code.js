const COL = {
  INFO     :  0,
  IMG      :  1,
  MODEL    :  2,
  FINDVAL  :  3,
  TYPE     :  4,
  MAKE     :  5,
  YEAR     :  6,
  NOTES    :  7,
  CAT      :  8,
  FEAT     :  9,
  NOTER    : 10,
  NMINE    : 11,
  HIDE     : 12,
  MANUALS  : 13,
  DETAILS  : 14,
  CAT_SORT : 15,
  INST     : 16,
}

const CAT = {
  "Instruments":              1,
  "Hardware":                 2,
  "Accessories":              3,
  "Percussion Instruments":   4,
  "Stands etc.":              5,
}

const columns = [COL.INFO, COL.IMG, COL.MODEL, COL.FINDVAL, COL.TYPE, COL.MAKE, COL.YEAR];
const columnOrder = [
  [ COL.FEAT,     'desc' ],
  [ COL.CAT_SORT, 'asc'  ],
  [ COL.TYPE,     'asc'  ],
  [ COL.INST,     'asc'  ],
  [ COL.MAKE,     'asc'  ],
  [ COL.MODEL,    'asc'  ],
];
var columnMap = {};
columnMap[COL.MODEL] = COL.CAT;
var anchorText;
var equipmentOrig = {};
var currentImgRow = null;
var touchstartX, touchstartY, touchendX, touchendY;

// link handling

function linkHtml(text) {
  return links[text] ? makeLink(text, links[text]) : text;
}

function makeLink(text, link) {
  return '<a target="_blank" href="'+link+'">'+text+'<\/a>';
}

function linkShow(acc, text, other) {
  if (!text) {
    text = [acc, equipment_data[acc]['type']].join(' ');
  }
  else if (!acc && other) {
    return '<span title="' + other + '">' + text + '</span>';
  }
  return '<a href="#" onclick="doShow(\''+ acc + '\'); return false">' + text + '</a>';
}

function linkItNotes(oData) {
  var thisData = Array.isArray(oData['notes']) ? oData['notes'] : [oData['notes']].filter(x => x);
  if (oData['not_mine']) {
    thisData.push('NOTMINE');
  }
  else if (oData['hide']) {
    thisData.push('HIDDEN');
  }

  var icons = [ clipIt( fixModelName(oData['model']) ) ];
  var newData = [];
  thisData.forEach(x => {
    if (x === 'LINKME' || x === 'LINKEDME' || x === 'NOTMINE' || x === 'HIDDEN') {
      icons.push(
        x === 'LINKME'
          ? linkShow(oData['model'], '\u{1F517}')
        : x === 'LINKEDME'
          ? linkShow(oData['model'], '\u{1F578}')
        : x === 'NOTMINE'
          ? linkShow('', '\u{1F91D}', 'holding for a friend')
        : x === 'HIDDEN'
          ? linkShow('', '\u{1F977}', 'hidden')
          : ''
      );
    }
    else {
      var text = x;
      var matches = text.match(/^(.+?)( \(\d\d\d\d-\d\d-\d\d\))$/);
      if (matches && matches[2]) {
        text = matches[1];
      }
      var link = linkHtml(equipment_data[text] ? linkShow(text) : text);
      if (matches && matches[2]) {
        link += matches[2];
      }
      newData.push(link);
    }
  });

  return icons.join('') + '&nbsp;' + newData.join(', ');
}

function linkItDetail(oData) {
  if (oData['detail'] == null) {
    return '<div class="detail" />';
  }

  return '<div class="detail">' + Object.keys(oData['detail']).map(
      x => `<div class="detail_row"><span class="detail_head">${x}</span>: <span class="detail_body">${oData['detail'][x]}</span></div>`
    ).join('') + '</div>';
}

function linkItFindValue(oData) {
  var link = 'https://reverb.com/marketplace?query='
    + escape([oData['make'], oData['model'], oData['type']].join(' '))
    // + '&condition=used'
  return `<a target="_blank" href="${link}"><img class="findvalue" src="/reverb.webp" /></a>`
}

function linkItManuals(oData) {
  if (oData['manuals'] == null) {
    return '<div class="manuals" />';
  }

  var modelName = fixModelName(oData['model']);
  return '<div class="manuals">' + Object.keys(oData['manuals']).map((x) => {
      var file = `./manuals/${modelName}/${oData['manuals'][x]}`;
      var md5 = (md5s[file] || '').substr(0, 5);
      return `<div class="manual_row"><a target="_blank" href="${file}?${md5}"><i class="far fa-file fa-fw"></i>&nbsp;${x}</a></div>`;
    }).join('') + '</div>';
}

function clipIt(model) {
  return '<i class="far fa-clipboard fa-fw" onclick="clipInfo(this, \'' + model + '\')" title="copy info"></i>';
}

function imgIt(oData) {
  //console.log(oData)
  var text = '<i class="fas fa-fw"></i>'
  if (oData['image']) {
    var alt = [oData['make'], oData['model'], oData['type']].join(' ');
    var name = fixModelName(oData['model']);
    if (oData['image'] === true) {
      oData['image'] = './images/' + name + '.png';
      oData['image_sm'] = './images/sm/' + name + '-sm.png';
    }
    text = '<a id="pic_' + name + '" class="pic_modalize" alt="' + alt + '" href="'+ oData['image'] + '?' + (md5s[oData['image']] || '').substr(0, 5) + '">' + '<img class="imgsmall" src="'+ oData['image_sm'] + '?' + (md5s[oData['image_sm']] || '').substr(0, 5) + '" /></a>';
  }
  return text;
}


// do the table

function equipmentInit() {
  var removeElements = [];
  var foundNote = {};
  equipment.forEach(function(x, index, object) {
    equipmentOrig[ fixModelName(x['model']) ] = structuredClone(x);
    x['reverse_notes'] = [];
    x['not_mine'] = x['not_mine'] ? 'not mine' : '';
    x['hide'] = x['hide'] ? 'hidden' : '';
    x['featured'] = x['featured'] ? 'featured' : '';
    x['instrument'] = x['instrument'] || '';
    x['category_sort'] = CAT[x['category']] || 99;
    if (x['model']) {
      equipment_data[x['model']] = x;
      if (x['link']) {
        links[x['model']] = x['link'];
        links[x['make'] + ' ' + x['model'] + ' ' + x['type']] = x['link'];
      }
    }

    if (x['hide']) { // || x['not_mine']) {
      removeElements.push(index);
    }
  });

  equipment.forEach(function(x, index, object) {
    if (x['notes']) {
      var thisData = Array.isArray(x['notes']) ? x['notes'] : [x['notes']];
      var found = false;
      thisData.forEach(y => {
        var matches = y.match(/^(.+?)( \(\d\d\d\d-\d\d-\d\d\))$/);
        if (matches && matches[2]) {
          y = matches[1];
        }
        if (equipment_data[y]) {
          foundNote[y] = true;
          found = true;
          equipment_data[y]['reverse_notes'].push(x['model']);
        }
      });
      if (found === true) {
        thisData.unshift('LINKEDME');
      }
    }
  });

  equipment.forEach(function(x, index, object) {
    if (foundNote[x['model']]) {
      var thisData = x['notes']
        ? Array.isArray(x['notes'])
          ? x['notes']
          : [x['notes']]
        : [];
      thisData.unshift('LINKME');
      x['notes'] = thisData;
    }

    x['idx'] = index-1;
    x['img'] = imgIt(x);
    x['manuals'] = linkItManuals(x);
    x['detail'] = linkItDetail(x);
    x['findvalue'] = linkItFindValue(x);
    x['notes'] = linkItNotes(x);
    x['model'] = linkItFindValue(x) + ' ' + linkHtml(x['model']);
    if (x['featured']) {
      x['x'] = ' <i class="fa-solid fa-star featured"></i>';
    }
    x['make'] = linkHtml(x['make']);
  });

  // remove hidden elements
  var uri = window.location.href;
  var query_idx = uri.indexOf('?');
  var anchor_idx = uri.indexOf('#');
  var query = query_idx === -1 ? null : anchor_idx === -1 ? uri.substring(query_idx+1) : uri.substring(query_idx+1, anchor_idx);
//   anchorText = anchor_idx === -1 ? 'featured' : unescape(uri.substring(anchor_idx+1));
  anchorText = anchor_idx === -1 ? '' : unescape(uri.substring(anchor_idx+1));
  if (query != 'hidden') {
    removeElements.reverse().forEach(x => equipment.splice(x, 1));
  }

  var table = $('#equipment').DataTable( {
    responsive: {
      details: {
        renderer: $.fn.dataTable.Responsive.renderer.listHidden(),
        // display: $.fn.dataTable.Responsive.display.childRowImmediate,
      }
    },
    columns: [
      { responsivePriority: 20, data: 'x', title: '<i class="fas fa-circle-info fa-fw"></i>', className: 'dt-center', defaultContent: '', orderable: false },
      { responsivePriority: 25, data: 'img', title: '<i class="fas fa-image fa-fw"></i>', className: 'dt-center', orderable: false },
      { responsivePriority: 10, data: 'model', title: 'Model' },
      { responsivePriority: 95, data: 'findvalue', title: '$', orderable: false, visible: false },
      { responsivePriority: 30, data: 'type', title: 'Type', type: 'numeric' },
      { responsivePriority: 40, data: 'make', title: 'Make' },
      { responsivePriority: 80, data: 'year', title: 'Year', defaultContent: '-' },
      { responsivePriority: 90, data: 'notes', title: 'Notes', className: 'none', defaultContent: '', orderable: false },
      { responsivePriority: 98, data: 'category', visible: false },
      { responsivePriority: 99, data: 'featured', visible: false },
      { responsivePriority: 99, data: 'reverse_notes', title: 'Reverse Notes', className: 'none', visible: false },
      { responsivePriority: 99, data: 'not_mine', visible: false },
      { responsivePriority: 99, data: 'hide', visible: false },
      { responsivePriority: 99, data: 'manuals', title: 'Manuals', defaultContent: '', className: 'none' },
      { responsivePriority: 99, data: 'detail', title: 'Detail', defaultContent: '', className: 'none' },
      { responsivePriority: 99, data: 'category_sort', visible: false },
      { responsivePriority: 99, data: 'instrument', visible: false },
    ],
    scrollX: true,
    order: columnOrder,
    data: equipment,

    paging: false,
    search: { search: anchorText },
    language: { search: "" },
    dom: 'fti',

    initComplete: function () {
      // create dropdown filters
      var table = this.api().table();
      table.columns(columns).every(function (i) {
        if (i != COL.INFO && i != COL.IMG && i != COL.FINDVAL) {
          var column = this;
          var column_d = table.column(columnMap[i] || i);
          var select = $('<select id="sel_' + i + '"></select><br>')
            .prependTo( $(column.header()) )
            .on( 'click', function (event) {
              event.stopPropagation();
            })
            .on( 'change', function () {
              var val = $.fn.dataTable.util.escapeRegex(
                  $(this).val()
              );
              column_d
                .search( val ? '^'+val+'$' : '', true, false )
                .draw();
              columns.filter(j => i != j).forEach(j => drawDropdowns(j));
            });
          drawDropdowns(i);
        }
      });
    },
    drawCallback: picInit,
  });

  table.on('responsive-display', childRowCleanUp);
}

function drawDropdowns(i) {
  var table = $('#equipment').dataTable().api().table();

  var column = table.column(columnMap[i] || i, {filter: 'applied'});
  var select = $('#sel_' + i);
  var val = select.val();
  select.html('<option value=""></option>');
  var data = [];
  column.data().unique().sort().each( function ( d, j ) {
    if (d !== null) {
      x = d.replace(/<.+?>/g, '');
      data.push(x);
    }
  });
  data.sort().forEach( x => select.append( '<option value="'+x+'">'+x+'</option>' ) );
  select.val(val);
}


// misc events

function doShow(item) {
  var table = $('#equipment').dataTable().api().table();
  table.search(item).draw();
  table.columns().search('').draw();
  columns.forEach(j => drawDropdowns(j))
  columns.forEach(function (i) { $('#sel_' + i).val('') });
  // collapse child rows
  table.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
}

function picClick(t, e) {
  if (t == null) {
    return;
  }
  var modal = $('#pic_modal');
  var image = $('#pic_img');
  var caption = $('#pic_caption');

  if (e) {
    e.preventDefault();
  }
  modal.css('display', 'block');
  caption.html( $(t).attr('alt') );
  image.attr('src', $(t).attr('href') );
  currentImgRow = $(t).parents()[1];
  return false;
}

function modalInit() {
  var modal = $('#pic_modal');
  var image = $('#pic_img');
  var caption = $('#pic_caption');

  var close_modal = function() { modal.css('display', 'none') }
  $('#pic_close').click(close_modal);
  $('#pic_modal').click(close_modal);
  $('#pic_img').click(function() { return false });
  $(document).keydown(function(e) {
    if (modal.css('display') != 'none') {
      if (e.key === 'Escape') {
        close_modal();
      }
      if (currentImgRow != null) {
        var sibling;
        if (e.which == 40 || e.which == 39) { // down or right
          swapPic('right');
        }
        else if (e.which == 38 || e.which == 37) { // up or left
          swapPic('left');
        }
      }
    }
  })
  .on('touchstart', function(event) {
    if (modal.css('display') != 'none' && currentImgRow != null) {
      touchstartX = event.pageX;
      touchstartY = event.pageY;
    }
  })
  .on('touchend', function(event) {
    if (modal.css('display') != 'none' && currentImgRow != null) {
      touchendX = event.pageX;
      touchendY = event.pageY;
      var horiz = touchstartX - touchendX;
      var vert  = touchstartY - touchendY;

      if (Math.abs(horiz) > Math.abs(vert)) { // swipe horizontally
        if (horiz > 0) {
          swapPic('right');
        }
        else {
          swapPic('left');
        }
      }
    }
  });

  $('#pic_img').on('load', function() {
    image.css('width', 'auto');
    image.css('height', 'auto');

    var win_height = $(window).height() - 50;
    var win_width  = $(window).width() - 25;

    var img_height = image.height();
    var img_width = image.width();

    var scale = 1;
    if (img_height > win_height) {
      scale = win_height / img_height;
      img_width *= scale;
      image.css('width', img_width);

      if (img_width > win_width) {
        img_height *= scale;
        image.css('height', img_height);
      }
    }
    else if (img_width > win_width) {
      scale = win_width / img_width;
      img_height *= scale;
      image.css('height', img_height);

      if (img_height > win_height) {
        img_width *= scale;
        image.css('width', img_width);
      }
    }
  });
}

function swapPic(direction) {
  var sibling;
  if (direction == 'right') { // down or right
    sibling = currentImgRow.nextSibling;
    if (sibling != null && sibling.classList.contains('child')) {
      sibling = sibling.nextSibling;
    }
  }
  else if (direction == 'left') { // up or left
    sibling = currentImgRow.previousSibling;
    if (sibling != null && sibling.classList.contains('child')) {
      sibling = sibling.previousSibling;
    }
  }
  if (sibling) {
    event.preventDefault();
    $('#pic_modal').click;
    picClick(sibling.children[1].children[0]);
  }
}

function picInit() {
  $('.pic_modalize:not([data-linked="1"]').each(function() {
    $(this).click(function() { return picClick(this, event) });
    $(this).attr('data-linked', 1);
  });
}

function clipInfo(el, model) {
  navigator.clipboard.writeText(JSON.stringify(equipmentOrig[model]));
  el.classList.add('copying');
  setTimeout(() => { el.classList.remove('copying') }, 500);
}

function clearSearchInit() {
  $('#equipment_filter').append('<i id="clear_search" class="fas fa-circle-xmark fa-fw" onclick="doShow(\'\')"></i>');
}

function redrawTable() {
  $('#equipment').DataTable().draw();
}

function childRowCleanUp() {
  $('.dtr-data .manuals:empty').parent().parent().hide();
  $('.dtr-data .detail:empty').parent().parent().hide();
  picInit();
}

function fixModelName(str) {
  return str.replace(/&\w+?;/g, '').replace(/\W+/g, '').toLowerCase();
}

function initListeners() {
  window.addEventListener('resize', redrawTable);
  window.addEventListener('orientationchange', redrawTable);
}

function initCache() {
  if (window.navigator.standalone) {
    caches.has('v1.0.3').then((e) => {
      if (e === false) {
        // only cache images for now
        var files = Object.keys(md5s).filter(k => k.match(/\.png$/)).map(k => `${k}?${(md5s[k] || '').substr(0,5)}`)
        caches
          .open('v1.0.3')
          .then((cache) => {
              cache.addAll(files);
            }
          )
      }
    })
  }
}

$(document).ready(function() {
  setLastMod('#lastModified');
  equipmentInit();
  clearSearchInit();
  modalInit();
  redrawTable();
  initListeners();
  initCache();
});
