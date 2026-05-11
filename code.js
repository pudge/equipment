const IMAGE_TYPE = 'webp'
const IMAGE_PATH = '/images/'

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
  NOTER    :  9,
  NMINE    : 10,
  HIDE     : 11,
  MAIN     : 12,
  CRACK    : 13,
  CPEDAL   : 14,
  KPEDAL   : 15,
  MANUALS  : 16,
  DETAILS  : 17,
  CAT_SORT : 18,
  INST     : 19,
  CUSTOM   : 20,
  NEXT     : 21,
//   FEAT     : 20,
}

const CAT = {
  "Stringed Instruments":     1,
  "Other Instruments":        2,
  "Hardware":                 3,
  "Accessories":              4,
  "Percussion Instruments":   5,
  "Stands etc.":              6,
}

const columns = [COL.INFO, COL.IMG, COL.MODEL, COL.FINDVAL, COL.TYPE, COL.MAKE, COL.YEAR]
const columnOrder = [
//  [ COL.FEAT,     'desc' ],
  [ COL.CAT_SORT, 'asc'  ],
  [ COL.TYPE,     'asc'  ],
  [ COL.INST,     'asc'  ],
  [ COL.MAKE,     'asc'  ],
  [ COL.MODEL,    'asc'  ],
]
var columnMap = {}
columnMap[COL.MODEL] = COL.CAT
var anchorText
var equipmentOrig = {}
var touchstartX, touchstartY, touchendX, touchendY

var imageVariants = {}
var manualsByName = {}
var imageSequence = []
var currentIndex = -1
var currentVariant = null
var currentSequenceKey = null

// link handling

function linkHtml(text) {
  return links[text] ? makeLink(text, links[text]) : text
}

function makeLink(text, link) {
  return '<a href="'+link+'">'+text+'<\/a>'
}

function linkShow(acc, text, other) {
  if (!text) {
    text = [acc, equipment_data[acc]['type']].join(' ')
  }
  else if (!acc && other) {
    return '<span title="' + other + '">' + text + '</span>'
  }
  else if (other) {
    return '<a href="#" onclick="doShow(\''+ acc + '\'); return false" title="' + other + '">' + text + '</a>'
  }
  return '<a href="#" onclick="doShow(\''+ acc + '\'); return false">' + text + '</a>'
}

function linkItNotes(oData) {
  var thisData = Array.isArray(oData['notes']) ? oData['notes'] : [oData['notes']].filter(x => x)

  if (oData['not_mine']) {
    thisData.push('NOTMINE')
  }
  if (oData['hide']) {
    thisData.push('HIDDEN')
  }
  if (oData['current_rack']) {
    thisData.push('CURRENT_RACK')
  }
  if (oData['current_pedal']) {
    thisData.push('CURRENT_PEDAL')
  }
  if (oData['kids_pedal']) {
    thisData.push('KIDS_PEDAL')
  }

  var icons = [ clipIt( fixModelName(oData['model']) ) ]
  var newData = []
  thisData.forEach(x => {
    if (x === 'LINKME' || x === 'LINKEDME' || x === 'NOTMINE' || x === 'HIDDEN' || x === 'CURRENT_RACK' || x === 'CURRENT_PEDAL' || x === 'KIDS_PEDAL') {
      icons.push(
        x === 'LINKME'
          ? linkShow(oData['model'], '\u{1F517}')
        : x === 'LINKEDME'
          ? linkShow(oData['model'], '\u{1F578}')
        : x === 'NOTMINE'
          ? linkShow('', '\u{1F91D}', 'holding for a friend')
        : x === 'HIDDEN'
          ? linkShow('', '\u{1F977}', 'hidden')
        : x === 'CURRENT_RACK'
          ? linkShow('current_rack', '\u{1F5C4}\u{FE0F}', 'in rack')
        : x === 'CURRENT_PEDAL'
          ? linkShow('current_pedal', '\u{1F9B6}', 'in pedalboard')
        : x === 'KIDS_PEDAL'
          ? linkShow('kids_pedal', '\u{1F9B6}\u{1F3FB}', 'in pedalboard')
          : ''
      )
    }
    else {
      var text = x
      var matches = text.match(/^(.+?)( \(\d\d\d\d-\d\d-\d\d\))$/)
      if (matches && matches[2]) {
        text = matches[1]
      }
      var link = linkHtml(equipment_data[text] ? linkShow(text) : text)
      if (matches && matches[2]) {
        link += matches[2]
      }
      newData.push(link)
    }
  })

  return icons.join('') + '&nbsp;' + newData.join(', ')
}

function linkItDetail(oData) {
  if (oData['detail'] == null) {
    return '<div class="detail" />'
  }

  return '<div class="detail">' + Object.keys(oData['detail']).map(
      x => `<div class="detail_row"><span class="detail_head">${x}</span>: <span class="detail_body">${oData['detail'][x]}</span></div>`
    ).join('') + '</div>'
}

function linkItFindValue(oData) {
  if (oData['no_reverb']) {
    return ''
  }
  var link = 'https://reverb.com/marketplace?query='
    + escape([oData['make'], oData['model'], oData['type']].join(' ').replace(/[^\x00-\x7F]/g, ''))
    // + '&condition=used'
  return `<a href="${link}"><img class="findvalue" src="./reverb.webp" /></a>`
}

function linkItCustom(oData) {
  if (!oData['custom']) {
    return ''
  }
  return `<span class="custom" />†</span>`
}

function linkItManuals(oData) {
  var modelName = fixModelName(oData['model'])
  var rows = []
  var seen = {}

  if (oData['manuals']) {
    Object.keys(oData['manuals']).forEach(function(label) {
      var val = oData['manuals'][label]
      if (/^https?:\/\//.test(val)) {
        rows.push(`<div class="manual_row"><a href="${val}"><i class="far fa-file fa-fw"></i>&nbsp;${label}</a></div>`)
      } else {
        var file = `./manuals/${modelName}/${val}`
        var md5 = (md5s[file] || '').substr(0, 5)
        rows.push(`<div class="manual_row"><a href="${file}?${md5}"><i class="far fa-file fa-fw"></i>&nbsp;${label}</a></div>`)
        seen[file] = true
      }
    })
  }

  var files = manualsByName[modelName] || []
  files.forEach(function(file) {
    if (seen[file]) return
    var md5 = (md5s[file] || '').substr(0, 5)
    var label = file.replace(/^\.\/manuals\/[^/]+\//, '').replace(/\.[^.]+$/, '')
    rows.push(`<div class="manual_row"><a href="${file}?${md5}"><i class="far fa-file fa-fw"></i>&nbsp;${label}</a></div>`)
  })

  if (!rows.length) return '<div class="manuals" />'
  return '<div class="manuals">' + rows.join('') + '</div>'
}

function clipIt(model) {
  return '<i class="far fa-clipboard fa-fw" onclick="clipInfo(this, \'' + model + '\')" title="copy info"></i>'
}

function imgIt(oData) {
  var text = '<i class="fas fa-fw"></i>'
  if (oData['image']) {
    var alt = [oData['make'], oData['model'], oData['type']].join(' ')
    var name = fixModelName(oData['model'])
    var main = '.' + IMAGE_PATH + name + '/main.' + IMAGE_TYPE
    var sm   = '.' + IMAGE_PATH + name + '/sm.'   + IMAGE_TYPE
    oData['image'] = main
    oData['image_sm'] = sm
    text = '<a id="pic_' + name + '" class="pic_modalize" data-collection="gear" data-name="' + name + '" alt="' + alt + '" href="'+ main + '?' + (md5s[main] || '').substr(0, 5) + '">' + '<img class="imgsmall" src="'+ sm + '?' + (md5s[sm] || '').substr(0, 5) + '" /></a>'
  }
  return text
}

function buildImageMaps() {
  imageVariants = {}
  manualsByName = {}
  for (var k in md5s) {
    var m = k.match(/^\.\/(?:images|pic)\/([^/]+)\/([^/]+)\.webp$/)
    if (m && m[2] !== 'sm') {
      if (!imageVariants[m[1]]) imageVariants[m[1]] = []
      imageVariants[m[1]].push(m[2])
      continue
    }
    var mm = k.match(/^\.\/manuals\/([^/]+)\/.+$/)
    if (mm) {
      if (!manualsByName[mm[1]]) manualsByName[mm[1]] = []
      manualsByName[mm[1]].push(k)
    }
  }
  var pref = ['main', 'front', 'rear', 'side', 'top', 'bottom', 'detail']
  for (var n in imageVariants) {
    imageVariants[n].sort(function(a, b) {
      var ai = pref.indexOf(a), bi = pref.indexOf(b)
      if (ai !== -1 && bi !== -1) return ai - bi
      if (ai !== -1) return -1
      if (bi !== -1) return 1
      return a.localeCompare(b)
    })
  }
}


// do the table

function equipmentInit() {
  buildImageMaps()

//   // custom search
//   $.fn.dataTable.ext.search = []
//   
//   $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
//     const searchInput = $('#equipment_filter input[type=search]').val().trim().toLowerCase()
//     if (!searchInput) return true
//   
//     const terms = searchInput.split(/\s+/)
//   
//     return terms.some(term =>
//       data.some(cell =>
//         (cell || '').toString().toLowerCase().includes(term)
//       )
//     )
//   })

  var removeElements = []
  var foundNote = {}
  equipment.forEach(function(x, index, object) {
    equipmentOrig[ fixModelName(x['model']) ] = structuredClone(x)
    x['reverse_notes'] = []
    x['not_mine'] = x['not_mine'] ? 'not_mine' : ''
    x['hide'] = x['hide'] ? 'hidden' : ''
    x['main_rig'] = x['main_rig'] ? 'main_rig' : ''
    x['current_rack'] = x['current_rack'] ? 'current_rack' : ''
    x['current_pedal'] = x['current_pedal'] ? 'current_pedal' : ''
    x['kids_pedal'] = x['kids_pedal'] ? 'kids_pedal' : ''
//     x['featured'] = x['featured'] ? 'featured' : ''
    x['custom'] = x['custom'] ? 'custom' : ''
    x['next'] = x['next'] ? 'next' : ''
    x['main_rig'] = (x['featured'] || x['main_rig']) ? 'main_rig' : ''
    x['instrument'] = x['instrument'] || ''
    x['category_sort'] = CAT[x['category']] || 99
    if (x['model']) {
      equipment_data[x['model']] = x
      if (x['link']) {
        links[x['model']] = x['link']
        links[x['make'] + ' ' + x['model'] + ' ' + x['type']] = x['link']
      }
    }

    if (x['hide']) { // || x['not_mine']) {
      removeElements.push(index)
    }
  })

  equipment.forEach(function(x, index, object) {
    if (x['notes']) {
      var thisData = Array.isArray(x['notes']) ? x['notes'] : [x['notes']]
      var found = false
      thisData.forEach(y => {
        var matches = y.match(/^(.+?)( \(\d\d\d\d-\d\d-\d\d\))$/)
        if (matches && matches[2]) {
          y = matches[1]
        }
        if (equipment_data[y]) {
          foundNote[y] = true
          found = true
          equipment_data[y]['reverse_notes'].push(x['model'])
        }
      })
      if (found === true) {
        thisData.unshift('LINKEDME')
      }
    }
  })

  equipment.forEach(function(x, index, object) {
    if (foundNote[x['model']]) {
      var thisData = x['notes']
        ? Array.isArray(x['notes'])
          ? x['notes']
          : [x['notes']]
        : []
      thisData.unshift('LINKME')
      x['notes'] = thisData
    }

    x['idx'] = index-1
    x['img'] = imgIt(x)
    x['manuals'] = linkItManuals(x)
    x['detail'] = linkItDetail(x)
    x['findvalue'] = linkItFindValue(x)
    x['notes'] = linkItNotes(x)
    custom = linkItCustom(x)
    x['model'] = linkItFindValue(x) + linkItCustom(x) + linkHtml(x['model'])
/* 
    if (x['featured']) {
      x['x'] = ' <i class="fa-solid fa-star featured"></i>'
    }
 */
    x['make'] = linkHtml(x['make'])
  })

  // remove hidden elements
  var uri = window.location.href
  var query_idx = uri.indexOf('?')
  var anchor_idx = uri.indexOf('#')
  var query = query_idx === -1 ? null : anchor_idx === -1 ? uri.substring(query_idx+1) : uri.substring(query_idx+1, anchor_idx)
  anchorText = anchor_idx === -1 ? 'main_rig' : unescape(uri.substring(anchor_idx+1))
  if (query != 'hidden') {
    removeElements.reverse().forEach(x => equipment.splice(x, 1))
  }

  var table = $('#equipment').DataTable( {
    responsive: {
      details: {
        renderer: $.fn.dataTable.Responsive.renderer.listHidden(),
        // display: $.fn.dataTable.Responsive.display.childRowImmediate,
      }
    },
    columns: [
      { responsivePriority: 20, data: 'x', title: '<i class="fas fa-circle-info fa-fw"></i>', className: 'dt-center all', defaultContent: '', orderable: false },
      { responsivePriority: 25, data: 'img', title: '<i class="fas fa-image fa-fw"></i>', className: 'dt-center all', orderable: false },
      { responsivePriority: 10, data: 'model', title: 'Model', className: 'all', },
      { responsivePriority: 95, data: 'findvalue', title: '$', orderable: false, visible: false },
      { responsivePriority: 30, data: 'type', title: 'Type', type: 'numeric' },
      { responsivePriority: 40, data: 'make', title: 'Make' },
      { responsivePriority: 80, data: 'year', title: 'Year', defaultContent: '-' },
      { responsivePriority: 90, data: 'notes', title: 'Notes', className: 'none', defaultContent: '', orderable: false },
      { responsivePriority: 98, data: 'category', visible: false },
      { responsivePriority: 99, data: 'reverse_notes', title: 'Reverse Notes', className: 'none', visible: false },
      { responsivePriority: 99, data: 'not_mine', visible: false },
      { responsivePriority: 99, data: 'hide', visible: false },
      { responsivePriority: 99, data: 'main_rig', visible: false },
      { responsivePriority: 99, data: 'current_rack', visible: false },
      { responsivePriority: 99, data: 'current_pedal', visible: false },
      { responsivePriority: 99, data: 'kids_pedal', visible: false },
      { responsivePriority: 99, data: 'manuals', title: 'Manuals', defaultContent: '', className: 'none' },
      { responsivePriority: 99, data: 'detail', title: 'Detail', defaultContent: '', className: 'none' },
      { responsivePriority: 99, data: 'category_sort', visible: false, orderable: true },
      { responsivePriority: 99, data: 'instrument', visible: false, orderable: true },
      { responsivePriority: 99, data: 'custom', visible: false },
      { responsivePriority: 99, data: 'next', visible: false },
//       { responsivePriority: 99, data: 'featured', visible: false },
    ],
    // scrollX: true,
    autoWidth: false,
    order: columnOrder,
    data: equipment,

    paging: false,
    // search: { smart: false, regex: false, search: anchorText },
    search: { search: anchorText },
    language: {
      search: "",
      info: "_START_ to _END_ of _TOTAL_ entries",
      infoFiltered: " (of _MAX_ total)",
    },
    dom: 'fti',

    initComplete: function () {
      // create dropdown filters
      var table = this.api().table()
      table.columns(columns).every(function (i) {
        if (i != COL.INFO && i != COL.IMG && i != COL.FINDVAL) {
          var column = this
          var column_d = table.column(columnMap[i] || i)
          var select = $('<select id="sel_' + i + '"></select><br>')
            .prependTo( $(column.header()) )
            .on( 'click', function (event) {
              event.stopPropagation()
            })
            .on( 'change', function () {
              var val = $.fn.dataTable.util.escapeRegex(
                  $(this).val()
              )
              column_d
                .search( val ? '^'+val+'$' : '', true, false )
                .draw()
              columns.filter(j => i != j).forEach(j => drawDropdowns(j))
            })
          drawDropdowns(i)
        }
      })
    },
    drawCallback: picInit,
  })

//   $('#equipment_filter input[type=search]').off().on('input', function () {
//     table.draw()
//   })

  table.on('responsive-display', childRowCleanUp)
}

function drawDropdowns(i) {
  var table = $('#equipment').dataTable().api().table()

  var column = table.column(columnMap[i] || i, {filter: 'applied'})
  var select = $('#sel_' + i)
  var val = select.val()
  select.html('<option value=""></option>')
  var data = []
  column.data().unique().sort().each( function ( d, j ) {
    if (d !== null) {
      x = d.replace(/<.+?>/g, '')
      data.push(x)
    }
  })

  data.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      .forEach(x => select.append('<option value="'+x+'">'+x+'</option>'))

  select.val(val)
}


// misc events

function doShow(item) {
  var table = $('#equipment').dataTable().api().table()
  table.search(item).draw()
  table.columns().search('').draw()
  columns.forEach(j => drawDropdowns(j))
  columns.forEach(function (i) { $('#sel_' + i).val('') })
  // collapse child rows
  table.rows('.parent').nodes().to$().find('td:first-child').trigger('click')
}

function variantLabel(v) {
  return v.charAt(0).toUpperCase() + v.slice(1)
}

function buildGearSequence() {
  var seq = []
  $('#equipment tbody tr').each(function() {
    if (this.classList.contains('child')) return
    var a = $(this).find('a.pic_modalize[data-collection="gear"]')[0]
    if (!a) return
    var name = a.getAttribute('data-name')
    var alt  = a.getAttribute('alt')
    var vs   = imageVariants[name] || ['main']
    var labels = vs.map(variantLabel)
    seq.push({ name: name, alt: alt, dir: 'images', variants: vs, labels: labels })
  })
  return seq
}

function buildStaticSequenceItem(collection, variants, labels, alt) {
  return [{
    name: collection,
    alt: alt,
    dir: 'pic',
    variants: variants,
    labels: variants.map(function(v, i) { return (labels && labels[i]) || variantLabel(v) }),
  }]
}

function srcFor(entry, variant) {
  var path = './' + entry.dir + '/' + entry.name + '/' + variant + '.' + IMAGE_TYPE
  var md5  = (md5s[path] || '').substr(0, 5)
  return path + (md5 ? '?' + md5 : '')
}

function preloadAround(idx) {
  [idx - 1, idx + 1].forEach(function(i) {
    if (i < 0 || i >= imageSequence.length) return
    var e = imageSequence[i]
    var img = new Image()
    img.src = srcFor(e, e.variants[0])
  })
}

function renderCurrent() {
  if (currentIndex < 0 || currentIndex >= imageSequence.length) return
  var entry = imageSequence[currentIndex]
  var variant = currentVariant || entry.variants[0]
  $('#pic_img').attr('src', srcFor(entry, variant))
  $('#pic_title').text(entry.alt)

  var strip = $('#pic_variants').empty()
  if (entry.variants.length > 1) {
    entry.variants.forEach(function(v, i) {
      if (i > 0) strip.append(document.createTextNode(' | '))
      var a = $('<a href="#"></a>').text(entry.labels[i])
      if (v === variant) a.addClass('active')
      a.on('click', function(ev) {
        ev.preventDefault()
        ev.stopPropagation()
        currentVariant = v
        renderCurrent()
        return false
      })
      strip.append(a)
    })
  }
}

function openModalWithSequence(key, seq, startIndex) {
  if (!seq.length) return
  currentSequenceKey = key
  imageSequence = seq
  currentIndex = Math.max(0, Math.min(startIndex || 0, seq.length - 1))
  currentVariant = null
  $('#pic_modal').css('display', 'block')
  renderCurrent()
  preloadAround(currentIndex)
}

function picClick(t, e) {
  if (t == null) return
  if (e) e.preventDefault()

  var collection = $(t).attr('data-collection')
  if (collection === 'gear') {
    var name = $(t).attr('data-name')
    var seq = buildGearSequence()
    var start = seq.findIndex(function(x) { return x.name === name })
    openModalWithSequence('gear', seq, start < 0 ? 0 : start)
  }
  else if (collection) {
    var variants = ($(t).attr('data-variants') || '').split(',').map(function(s) { return s.trim() }).filter(Boolean)
    var labels   = ($(t).attr('data-labels')   || '').split(',').map(function(s) { return s.trim() })
    var alt = $(t).attr('alt') || ''
    openModalWithSequence(collection, buildStaticSequenceItem(collection, variants, labels, alt), 0)
  }
  return false
}

function modalInit() {
  var modal = $('#pic_modal')
  var image = $('#pic_img')

  var close_modal = function() {
    modal.css('display', 'none')
    currentSequenceKey = null
    currentIndex = -1
    currentVariant = null
    imageSequence = []
  }
  $('#pic_close').click(close_modal)
  $('#pic_modal').click(close_modal)
  $('#pic_img').click(function() { return false })
  $('#pic_caption').click(function(e) { e.stopPropagation() })
  $(document).keydown(function(e) {
    if (modal.css('display') == 'none') return
    if (e.key === 'Escape') {
      close_modal()
      return
    }
    if (e.which == 40 || e.which == 39) swapPic('right')
    else if (e.which == 38 || e.which == 37) swapPic('left')
  })
  .on('touchstart', function(event) {
    var t = event.originalEvent && event.originalEvent.touches
    if (modal.css('display') != 'none' && t && t.length === 1) {
      touchstartX = t[0].pageX
      touchstartY = t[0].pageY
    } else {
      touchstartX = null
    }
  })
  .on('touchmove', function(event) {
    var t = event.originalEvent && event.originalEvent.touches
    if (t && t.length > 1) touchstartX = null
  })
  .on('touchend', function(event) {
    if (touchstartX == null) return
    if (modal.css('display') != 'none') {
      var t = event.originalEvent && event.originalEvent.changedTouches
      if (!t || t.length !== 1) return
      touchendX = t[0].pageX
      touchendY = t[0].pageY
      var horiz = touchstartX - touchendX
      var vert  = touchstartY - touchendY

      if (Math.abs(horiz) > Math.abs(vert)) {
        if (horiz > 0) swapPic('right')
        else           swapPic('left')
      }
    }
  })

  $('#pic_img').on('load', function() {
    image.css('width', 'auto')
    image.css('height', 'auto')

    var win_height = $(window).height() - 50
    var win_width  = $(window).width() - 25

    var img_height = image.height()
    var img_width = image.width()

    var scale = 1
    if (img_height > win_height) {
      scale = win_height / img_height
      img_width *= scale
      image.css('width', img_width)

      if (img_width > win_width) {
        img_height *= scale
        image.css('height', img_height)
      }
    }
    else if (img_width > win_width) {
      scale = win_width / img_width
      img_height *= scale
      image.css('height', img_height)

      if (img_height > win_height) {
        img_width *= scale
        image.css('width', img_width)
      }
    }
  })
}

function swapPic(direction) {
  if (currentIndex < 0) return
  var next = currentIndex + (direction === 'right' ? 1 : -1)
  if (next < 0 || next >= imageSequence.length) return
  currentIndex = next
  currentVariant = null
  renderCurrent()
  preloadAround(currentIndex)
}

function picInit() {
  $('.pic_modalize:not([data-linked="1"])').each(function() {
    $(this).click(function(ev) { return picClick(this, ev) })
    $(this).attr('data-linked', 1)
  })
}

function clipInfo(el, model) {
  navigator.clipboard.writeText(JSON.stringify(equipmentOrig[model]))
  el.classList.add('copying')
  setTimeout(() => { el.classList.remove('copying') }, 500)
}

function clearSearchInit() {
  $('#equipment_filter').append('<i id="clear_search" class="fas fa-circle-xmark fa-fw" onclick="$(\'#filter_tags\').val(\'\').trigger(\'change\'); return false"></i>')
}

function redrawTable() {
  $('#equipment').DataTable().draw()
}

function childRowCleanUp() {
  $('.dtr-data .manuals:empty').parent().parent().hide()
  $('.dtr-data .detail:empty').parent().parent().hide()
  picInit()
}

function fixModelName(str) {
  return str.replace(/&\w+?;/g, '').replace(/\W+/g, '').toLowerCase()
}

function initListeners() {
  window.addEventListener('resize', redrawTable)
  window.addEventListener('orientationchange', redrawTable)
}

function initCache() {
  if (!('serviceWorker' in navigator)) return

  const isStandalone =
    window.navigator.standalone ||
    window.matchMedia('(display-mode: standalone)').matches

  if (!isStandalone) {
    navigator.serviceWorker.getRegistrations().then(regs => {
      regs.forEach(r => r.unregister())
    })
    return
  }

  navigator.serviceWorker.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'cache-progress') renderCacheStatus(e.data)
  })

  navigator.serviceWorker
    .register('./sw.js', { updateViaCache: 'none' })
    .then(reg => {
      reg.update()
      askCacheStatus()
    })
    .catch(err => console.warn('SW registration failed', err))
}

function askCacheStatus() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage('cache-status')
  } else {
    navigator.serviceWorker.ready.then(reg => {
      const sw = reg.active || reg.waiting || reg.installing
      sw && sw.postMessage('cache-status')
    })
  }
}

function renderCacheStatus(p) {
  const el = $('#cacheStatus')
  if (!el.length) return
  if (p.complete || (p.total > 0 && p.done >= p.total)) {
    el.html('&nbsp;✓').addClass('checkit')
  } else if (p.total > 0) {
    const pct = Math.floor((p.done / p.total) * 100)
    el.html('&nbsp;' + String(pct).padStart(2, '0') + '%').removeClass('checkit')
  } else {
    el.html('')
  }
}

$(document).ready(function() {
  setLastMod('#lastModified')
  $('#MANIFEST_REV').html(md5s['MANIFEST_REV'])
  equipmentInit()
  clearSearchInit()
  modalInit()
  redrawTable()
  initListeners()
  initCache()
})
