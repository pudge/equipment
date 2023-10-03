var columns = [0, 1, 2, 3, 4];
var columnMap = { "1": "6" };
var columnOrder = [[ 2, 'asc' ], [ 3, 'asc' ], [ 1, 'asc' ]];
const equipmentOrig = structuredClone(equipment);

var anchorText;

function linkIt(nTd, sData, oData, iRow, iCol, img) {
  var data = Array.isArray(sData) ? sData : [sData];
  if (typeof img === 'undefined') {
    img = '';
  }

  $(nTd).html(data.map(function(x) {
    return clipIt(iRow, iCol) + img + faCat(oData['category'], iCol) + linkHtml(x);
  }).join(', '));
}

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

function doShow(item) {
  var table = $('#equipment').dataTable().api().table();
  table.search(item).draw();
  table.columns().search('').draw();
  columns.forEach(j => drawDropdowns(j))
  columns.forEach(function (i) { $('#sel_' + i).val('') });
  // collapse child rows
  table.rows('.parent').nodes().to$().find('td:first-child').trigger('click');
}

function linkItNotes(nTd, sData, oData, iRow, iCol) {
  var thisData = Array.isArray(sData) ? sData : [sData].filter(x => x);
  if (oData['not_mine']) {
    thisData.push('NOTMINE');
  }
  else if (oData['hide']) {
    thisData.push('HIDDEN');
  }
  $(nTd).html(oData['notes'] = thisData.map(x => {
    var subData =
      x === 'LINKME'
        ? linkShow(oData['model'], '\u{1F517}')
      : x === 'LINKEDME'
        ? linkShow(oData['model'], '\u{1F578}')
      : x === 'NOTMINE'
        ? linkShow('', '\u{1F91D}', 'holding for a friend')
      : x === 'HIDDEN'
        ? linkShow('', '\u{1F977}', 'hidden')
      : equipment_data[x]
        ? linkShow(x)
      : x;
      //? [equipment_data[x]['make'], x, equipment_data[x]['type']].map(y => linkHtml(y)).join(' ')
    return linkHtml(subData);
  }).join(', '));
}

function clipInfo(el, iRow) {
  navigator.clipboard.writeText(JSON.stringify(equipmentOrig[iRow]));
  el.classList.add('copying');
  setTimeout(() => { el.classList.remove('copying') }, 500);
}

function clipIt(iRow, iCol) {
  if (iCol != 1)
    return '';
  return '<i class="far fa-clipboard fa-fw" onclick="clipInfo(this, ' + iRow + ')" title="copy info"></i>';
}

function faCat(cat, iCol) {
  if (iCol != 1)
    return '';
  var faImg =
    cat == 'Instruments'
      ? 'guitar'
      : cat == 'Accessories'
        ? 'record-vinyl'
        : cat == 'Percussion Instruments'
          ? 'drum'
          : cat == 'Hardware'
            ? 'headphones'
            : cat == 'Stands etc.'
              ? 'suitcase'
              : 'circle-question';
  return '<i class="fas fa-' + faImg + ' fa-fw" title="' + cat + '">&nbsp;</i>'
}

function linkItModel(nTd, sData, oData, iRow, iCol) {
  var img = imgIt(nTd, sData, oData, iRow, iCol);
  if (img.length) { img = img + '&nbsp;'  }
  if (oData['link']) {
    $(nTd).html(clipIt(iRow, iCol) + img + faCat(oData['category'], iCol) + makeLink(sData, oData['link']));
  }
  else {
    linkIt(nTd, sData, oData, iRow, iCol, img);
  }
}

function imgIt(nTd, sData, oData, iRow, iCol) {
  if (oData['image']) {
    var alt = [oData['make'], oData['model'], oData['type']].join(' ');
    var name = oData['model'].replace(/&\w+?;/g, '').replace(/\W+/g, '').toLowerCase();
    if (oData['image'] === true) {
      oData['image'] = name + '.jpg';
    }
    return '<a id="pic_' + name + '" class="pic_modalize" alt="' + alt + '" href="'+ './images/' + oData['image'] + '">' + '<i class="fas fa-image fa-fw" title="picture"></i></a>';
  }
  return '<i class="fas fa-fw"></i>';
}

function equipmentInit() {
  var removeElements = [];
  var foundNote = {};
  equipment.forEach(function(x, index, object) {
    x['x'] = '';
    x['reverse_notes'] = [];
    x['featured'] = x['featured'] ? 'featured' : '';
    if (x['model']) {
      equipment_data[x['model']] = x;
      if (x['link']) {
        links[x['model']] = x['link'];
        links[x['make'] + ' ' + x['model'] + ' ' + x['type']] = x['link'];
      }
    }

    if (x['hide'] || x['not_mine']) {
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

  $('#equipment').DataTable( {
//      fixedHeader: true,
//      responsive: { details: { type: 'inline' } },
//      responsive: true,
    responsive: {
      details: {
        renderer: $.fn.dataTable.Responsive.renderer.listHidden()
        //$.fn.dataTable.Responsive.renderer.tableAll()
      }
    },
    columns: [
      { responsivePriority: 20, data: 'x', title: '<i class="fas fa-circle-info fa-fw">', createdCell: clipIt, orderable: false },
      { responsivePriority: 10, data: 'model', title: 'Model', createdCell: linkItModel },
      { responsivePriority: 30, data: 'type', title: 'Type', type: 'numeric' },
      { responsivePriority: 40, data: 'make', title: 'Make', createdCell: linkIt },
      { responsivePriority: 80, data: 'year', title: 'Year', defaultContent: '-' },
      { responsivePriority: 90, data: 'notes', title: 'Notes', className: 'none', createdCell: linkItNotes, defaultContent: '', orderable: false },
      { responsivePriority: 98, data: 'category', title: 'Category', visible: false },
      { responsivePriority: 99, data: 'featured', title: 'Featured', visible: false },
      { responsivePriority: 91, data: 'reverse_notes', title: 'Reverse Notes', className: 'none', visible: false },
    ],
    //bStateSave: true,
    scrollX: true,
    order: columnOrder,
    //aaSorting: [],
    data: equipment,

    paging: false,
    search: { search: anchorText },
    language: { search: "" },
    dom: 'fti',

//     paging: false,
//     pageLength: 200,
//     search: { search: anchorText },
//     dom: "'<'dataTables_filter text-right'B>frtip",
//     buttons: [
//       {
//         text: 'clear search',
//         action: function ( e, dt, node, config ) { doShow('') },
//       }
//     ],

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
        if (i != 0) {
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
}

function drawDropdowns(i) {
  var table = $('#equipment').dataTable().api().table();

  var column = table.column(columnMap[i] || i, {filter: 'applied'});
  var select = $('#sel_' + i);
  var val = select.val();
  select.html('<option value=""></option>');
  column.data().unique().sort().each( function ( d, j ) {
    if (d !== null) {
      select.append( '<option value="'+d+'">'+d+'</option>' )
    }
  });
  select.val(val);
}

function picClick(t, e) {
  var modal = $('#pic_modal');
  var image = $('#pic_img');
  var caption = $('#pic_caption');

  e.preventDefault();
  modal.css('display', 'block');
  caption.html( $(t).attr('alt') );
  image.attr('src', $(t).attr('href') );
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
    if (e.key === 'Escape') {
      close_modal();
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

function clearSearchInit() {
  $('#equipment_filter').append('<i id="clear_search" class="fas fa-circle-xmark fa-fw" onclick="doShow(\'\')"></i>');
}

$(document).ready(function() {
  equipmentInit();
  clearSearchInit();
  modalInit();
  //picInit();
});
