// Configuration for the gear table.
//
// equipment_schema is the single source of truth for what columns exist and
// how DataTables renders them. Adding a new column means one entry here — no
// edits to code.js or export_gear.plx's per-field list.
//
// Per-entry keys:
//   name        field name in the emitted JSON record and DataTables `data:`
//   synthetic   1 if computed in code.js (img, manuals, detail, etc.)
//   kind        str | bool | bool_marker | list
//                 bool_marker: truthy becomes the field name as a string so
//                 the global DataTables search matches the field
//   title       DataTables column title
//   priority    responsivePriority
//   visible     false to hide
//   searchable  false to exclude from search
//   orderable   false to make non-sortable
//   classname   DataTables className
//   sort_type   DataTables column `type` (e.g., 'numeric')
//   default     DataTables defaultContent
//
// export_gear.plx reads only `name`, `kind`, and (for non-synthetic fields)
// the CSV header, which is derived by converting the field name: it's the
// matching column in `field_csv_map` in export_gear.plx.

const equipment_schema = [
  { name: 'x',              priority: 20,   synthetic: true,    classname: 'dt-center all', default: '',  orderable: false, title: '<i class="fas fa-circle-info fa-fw"></i>' },
  { name: 'img',            priority: 25,   synthetic: true,    classname: 'dt-center all',               orderable: false, title: '<i class="fas fa-image fa-fw"></i>' },
  { name: 'model',          priority: 10,   kind: 'str',        classname: 'all',                                           title: 'Model' },
  { name: 'findvalue',      visible: false, synthetic: true,                                              orderable: false, title: '$' },
  { name: 'type',           priority: 30,   kind: 'str',        sort_type: 'numeric',                                       title: 'Type' },
  { name: 'make',           priority: 40,   kind: 'str',                                                                    title: 'Make' },
  { name: 'year',           priority: 80,   kind: 'str',                                    default: '-',                   title: 'Year' },
  { name: 'notes',          priority: 90,   kind: 'list',       classname: 'none',          default: '',  orderable: false, title: 'Notes' },
  { name: 'category',       visible: false, kind: 'str' },
  { name: 'reverse_notes',  visible: false, synthetic: true,    classname: 'none',                                          title: 'Reverse Notes' },
  { name: 'not_mine',       visible: false, kind: 'bool_marker' },
  { name: 'hide',           visible: false, kind: 'bool_marker' },
  { name: 'main_rig',       visible: false, kind: 'bool_marker' },
  { name: 'current_rack',   visible: false, kind: 'bool_marker' },
  { name: 'current_pedal',  visible: false, kind: 'bool_marker' },
  { name: 'kids_pedal',     visible: false, kind: 'bool_marker' },
  { name: 'manuals',        priority: 99,   synthetic: true,    classname: 'none',          default: '',                    title: 'Manuals' },
  { name: 'detail',         priority: 99,   synthetic: true,    classname: 'none',          default: '',                    title: 'Detail'  },
  { name: 'category_sort',  visible: false, synthetic: true,                                              orderable: true },
  { name: 'instrument',     visible: false, kind: 'str',                                                  orderable: true },
  { name: 'custom',         visible: false, kind: 'bool_marker' },
  { name: 'next',           visible: false, kind: 'bool_marker' },
  { name: 'featured',       visible: false, kind: 'bool' },
  { name: 'image',          visible: false, kind: 'bool' },
  { name: 'year_uncertain', visible: false, kind: 'bool' },
  { name: 'no_reverb',      visible: false, kind: 'bool' },
  { name: 'inactive',       visible: false, kind: 'bool' },
  { name: 'strings',        visible: false, kind: 'str' },
  { name: 'link',           visible: false, kind: 'str' },
]

// Category sort priorities.
const CAT = {
  'Stringed Instruments':   1,
  'Other Instruments':      2,
  'Hardware':               3,
  'Accessories':            4,
  'Percussion Instruments': 5,
  'Stands etc.':            6,
}

const IMAGE_TYPE = 'webp'
const IMAGE_PATH = '/images/'

// Derive COL.<FIELD_NAME> => column index from equipment_schema so column
// references below (and in code.js) never need hand-numbering.
const COL = {}
equipment_schema.forEach(function(f, i) { COL[f.name.toUpperCase()] = i })

const columns = [COL.X, COL.IMG, COL.MODEL, COL.FINDVALUE, COL.TYPE, COL.MAKE, COL.YEAR]
const columnOrder = [
  [ COL.CATEGORY_SORT, 'asc'  ],
  [ COL.TYPE,          'asc'  ],
  [ COL.INSTRUMENT,    'asc'  ],
  [ COL.MAKE,          'asc'  ],
  [ COL.MODEL,         'asc'  ],
]
