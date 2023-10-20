const COL = {
  INFO     :  0,
  IMG      :  1,
  MODEL    :  2,
  TYPE     :  3,
  MAKE     :  4,
  YEAR     :  5,
  NOTES    :  6,
  CAT      :  7,
  FEAT     :  8,
  NOTER    :  9,
  NMINE    : 10,
  HIDE     : 11,
  DETAILS  : 12,
  MANUALS  : 13,
}

const columns = [COL.INFO, COL.IMG, COL.MODEL, COL.TYPE, COL.MAKE, COL.YEAR];
// can do this once we make CAT an int
// const columnOrder = [[ COL.CAT, 'desc' ], [ COL.TYPE, 'asc' ], [ COL.MAKE, 'asc' ], [ COL.MODEL, 'asc' ]];
const columnOrder = [[ COL.TYPE, 'asc' ], [ COL.MAKE, 'asc' ], [ COL.MODEL, 'asc' ]];
var columnMap = {};
columnMap[COL.MODEL] = COL.CAT;
var anchorText;
var equipmentOrig = {};
var currentImgRow = null;

// link handling

function linkHtml(text) {
  return links[text] ? makeLink(text, links[text]) : text;
}

function makeLink(text, link) {
  return '<a href="'+link+'">'+text+'<\/a>';
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
      newData.push( linkHtml(equipment_data[x] ? linkShow(x) : x) );
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

function linkItManuals(oData) {
  if (oData['manuals'] == null) {
    return '<div class="manuals" />';
  }

  return '<div class="manuals">' + Object.keys(oData['manuals']).map(
      x => `<div class="manual_row"><a target="_blank" href="manuals/${fixModelName(oData['model'])}/${oData['manuals'][x]}"><i class="far fa-file fa-fw"></i>&nbsp;${x}</a></div>`
    ).join('') + '</div>';
}

function clipIt(model) {
  return '<i class="far fa-clipboard fa-fw" onclick="clipInfo(this, \'' + model + '\')" title="copy info"></i>';
}

function imgIt(oData) {
  var text = '<i class="fas fa-fw"></i>'
  if (oData['image']) {
    var alt = [oData['make'], oData['model'], oData['type']].join(' ');
    var name = fixModelName(oData['model']);
    if (oData['image'] === true) {
      oData['image'] = './images/' + name + '.png';
      oData['image_sm'] = './images/sm/' + name + '-sm.png';
    }
    text = '<a id="pic_' + name + '" class="pic_modalize" alt="' + alt + '" href="'+ oData['image'] + '?' + CTOKEN + '">' + '<img class="imgsmall" src="'+ oData['image_sm'] + '?' + CTOKEN + '" /></a>';
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
    x['notes'] = linkItNotes(x);
    x['model'] = linkHtml(x['model']);
    x['make'] = linkHtml(x['make']);
  });

  // remove hidden elements
  var uri = window.location.href;
  var query_idx = uri.indexOf('?');
  var anchor_idx = uri.indexOf('#');
  var query = query_idx === -1 ? null : anchor_idx === -1 ? uri.substring(query_idx+1) : uri.substring(query_idx+1, anchor_idx);
  anchorText = anchor_idx === -1 ? 'featured' : unescape(uri.substring(anchor_idx+1));
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
      { responsivePriority: 20, data: 'x', title: '<i class="fas fa-circle-info fa-fw"></i>', defaultContent: '', orderable: false },
      { responsivePriority: 25, data: 'img', title: '<i class="fas fa-image fa-fw"></i>', className: 'dt-center', orderable: false },
      { responsivePriority: 10, data: 'model', title: 'Model' },
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
    ],
    scrollX: true,
    order: columnOrder,
    data: equipment,

    paging: false,
    search: { search: anchorText },
    language: { search: "" },
    dom: 'fti',

    initComplete: function () {
      var month = {
        0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr',  4: 'May',  5: 'Jun',
        6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
      };
      var lastModMonth = month[ lastModified.getMonth() ];
      var lastModDay   = lastModified.getDate();
      var lastModYear  = lastModified.getFullYear();
      $('#lastModified').html(
        lastModDay + ' ' + lastModMonth + ' ' + lastModYear
      );

      // create dropdown filters
      var table = this.api().table();
      table.columns(columns).every(function (i) {
        if (i != COL.INFO && i != COL.IMG) {
          var column = this;
          var column_d = table.column(columnMap[i] || i);
          var select = $('<select id="sel_' + i + '"></select><br>')
            .prependTo( $(column.header()) )
            .on( 'change', function () {
              var val = $.fn.dataTable.util.escapeRegex(
                  $(this).val()
              );
              column_d
                .search( val ? '^'+val+'$' : '', true, false )
                .draw();
              //drawDropdowns(i);
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
  column.data().unique().sort().each( function ( d, j ) {
    if (d !== null) {
      x = d.replace(/<.+?>/g, '');
      select.append( '<option value="'+x+'">'+x+'</option>' );
    }
  });
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
          sibling = currentImgRow.nextSibling;
        }
        else if (e.which == 38 || e.which == 37) { // up or left
          sibling = currentImgRow.previousSibling;
        }
        if (sibling) {
          close_modal();
          picClick(sibling.children[1].children[0]);
        }
      }
    }
  });

  $('#pic_img').on('load', function() {
    image.css('width', 'auto');
    image.css('height', 'auto');

    var win_height = $(window).height() - 150;
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


$(document).ready(function() {
  equipmentInit();
  clearSearchInit();
  modalInit();
  redrawTable();
  window.addEventListener('resize', redrawTable);
  window.addEventListener('orientationchange', redrawTable);
});
