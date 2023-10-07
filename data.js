var lastModified = new Date("2023-10-07T12:00:00+0000")
var equipment_data = {}
var equipment = [
   {
      "category" : "Instruments",
      "detail" : {
         "Back Inlay Material" : "Multi-Stripe",
         "Back Material" : "East Indian Rosewood",
         "Back Purfling/Strip" : "Zig-Zag",
         "Back and Side Finish" : "Gloss",
         "Binding" : "Grained Ivoroid",
         "Body Size" : "D-14 Fret",
         "Brace Material" : "Spruce",
         "Brace Shape" : "Scalloped",
         "Brace Size" : "5/16\"",
         "Bracing Pattern" : "Forward-Shifted X-Brace",
         "Bridge Material" : "Ebony",
         "Bridge Pin Dots" : "Faux Tortoise",
         "Bridge Pin Material" : "White Plastic",
         "Bridge String Spacing" : "2 5/32\"",
         "Bridge Style" : "Modern Belly - Drop in Saddle",
         "Construction" : "Dovetail Neck Joint",
         "Electronics" : "Fishman Aura F1+",
         "Fingerboard Inlay Material" : "Abalone",
         "Fingerboard Inlay Style" : "Diamonds and Squares Long Pattern",
         "Fingerboard Width at 12th Fret" : "2 1/8\"",
         "Fingerboard Width at Nut" : "1 3/4\"",
         "Finish Neck" : "Satin",
         "Finish Top" : "Gloss",
         "Headplate Logo Style" : "Script Old Style Overlay",
         "Headplate Material" : "East Indian Rosewood",
         "Headstock Shape" : "Solid with Square Taper and Diamond",
         "Heelcap" : "Grained Ivoroid",
         "Knob" : "Butterbean",
         "Location" : "Nazareth, Pennsylvania, USA",
         "Neck Color" : "Dark Mahogany",
         "Neck Joins Body At" : "14th Fret",
         "Neck Material" : "Select Hardwood",
         "Neck Shape" : "Modified Low Oval",
         "Neck Taper" : "High-Performance Taper",
         "Number of Frets Total" : "20",
         "Nut Material" : "Bone",
         "Pickguard" : "Tortoise Pattern",
         "Production Year" : "October 2012",
         "Rosette" : "Style 28 Multi-Stripe",
         "Saddle" : "Compensated White Tusq",
         "Saddle Radius" : "16\"",
         "Scale Length" : "25.4\"",
         "Serial" : "1633689",
         "Side Dots" : "White",
         "Side Material" : "East Indian Rosewood",
         "Top Color" : "Aging Toner",
         "Top Inlay Material" : "Bold Herringbone",
         "Top Material" : "Spruce",
         "Tuning Machines" : "Nickel Open Gear"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.martinguitar.com/guitars/discontinued/HD-28E-Retro.html",
      "make" : "Martin",
      "model" : "HD-28E Retro",
      "notes" : [
         "AA Lifespan 2.0 MA550T",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-DBR",
         "445",
         "F1 Aura+"
      ],
      "strings" : "AA Lifespan 2.0 MA550T",
      "type" : "Acoustic Guitar",
      "year" : "2012"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Back Material" : "High Pressure Laminate",
         "Body Size" : "D-14 Fret",
         "Finish Top" : "Satin",
         "Location" : "Nazareth, Pennsylvania, USA",
         "Neck Joins Body At" : "14th Fret",
         "Neck Material" : "Plywood",
         "Number of Frets Total" : "20",
         "Nut Material" : "Corian",
         "Production Year" : "February 2000",
         "Scale Length" : "25.4\"",
         "Serial" : "728931",
         "Side Material" : "High Pressure Laminate",
         "Top Color" : "Natural",
         "Top Material" : "Sitka Price"
      },
      "image" : true,
      "make" : "Martin",
      "model" : "DX1",
      "notes" : [
         "AA Lifespan 2.0 MA550T",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-DBR",
         "Ellipse Matrix Blend"
      ],
      "strings" : "AA Lifespan 2.0 MA550T",
      "type" : "Acoustic Guitar",
      "year" : "2000"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Mahogany",
         "Body Thickness" : "1.75\"",
         "Body Width" : "10.75\"",
         "Fingerboard" : "Black Walnut",
         "Finish" : "Satin",
         "Fret Count" : "22",
         "Frets" : "Medium Profile",
         "Neck" : "Mahogany",
         "Neck Radius" : "9.5\"",
         "Neck Width at Nut" : "1.75\"",
         "Overall Depth" : "2.13\"",
         "Overall Length" : "30\"",
         "Pickup(s)" : "Shadow Nanoflex",
         "Scale Length" : "25.5\"",
         "Serial" : "M3-02910",
         "Tuning Hardware" : "Black Anodized Closed Gear",
         "Weight" : "4 lbs 4 oz",
         "dB at 1'" : "Peak: 93db, Average: 80db"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://travelerguitar.com/products/escape-mark-3-mahogany",
      "make" : "Traveler",
      "manuals" : {
         "Manual" : "Escape_Mark_3_Manual.pdf"
      },
      "model" : "Escape Mark III",
      "notes" : [
         "AA Lifespan 2.0 MA530T",
         "Acetal Standard",
         "S1",
         "C1K",
         "Mahogany"
      ],
      "strings" : "AA Lifespan 2.0 MA530T",
      "type" : "Acoustic Guitar",
      "year" : "2018"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Location" : "Tenryu/Wada Factory, Japan",
         "Production Year" : "November 1967",
         "Serial" : "726838",
         "Year Lost" : "2014"
      },
      "hide" : true,
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/guitars_basses/ac_guitars/fg_fgx/index.html",
      "make" : "Yamaha",
      "model" : "FG-230",
      "notes" : [
         "12-string",
         "Nippon Gakki"
      ],
      "type" : "Acoustic Guitar",
      "year" : "1967"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Finish" : "Gloss",
         "Body Material" : "Mahogany",
         "Fret Count" : "20",
         "Frets" : "Medium Jumbo",
         "Inlays" : "Dot",
         "Neck Joint" : "Dovetail; Glued-in",
         "Neck Profile" : "SlimTaper C-profile",
         "Nut Width" : "43.0 mm / 1.692 in",
         "Pickguard" : "1-Ply; Black PVC",
         "Scale Length" : "647.7 mm / 25.5 in",
         "Serial" : "TBD",
         "Top" : "Select Spruce",
         "Truss Rod" : "2-way Adjustable",
         "Tuning Machines" : "Premium Die Cast"
      },
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/Acoustic-Guitar/EPIKWM803/Ebony",
      "make" : "Epiphone",
      "model" : "Songmaker DR-100",
      "not_mine" : true,
      "notes" : [
         "AA Lifespan 2.0 MA550T",
         "Ebony"
      ],
      "strings" : "AA Lifespan 2.0 MA550T",
      "type" : "Acoustic Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Finish" : "Satin Body Finish",
         "Body Material" : "Laminated Sapele",
         "Body Style" : "3/4 scale",
         "Bracing" : "X Bracing",
         "Bridge" : "Rosewood with Compensated Saddle",
         "Fret Count" : "18",
         "Neck Finish" : "Satin Neck Finish",
         "Neck Material" : "Nato",
         "Nut Material" : "Synthetic Bone",
         "Nut Width" : "1.69 in. (43 mm)",
         "Scale Length" : "23.3 in. (592 mm)",
         "Serial" : "OI14087311",
         "Top" : "Laminated Agathis",
         "Tuning Machines" : "Die-Cast Machine Heads"
      },
      "image" : true,
      "link" : "https://www.fender.com/en-US/acoustic-guitars/",
      "make" : "Fender",
      "model" : "MA-1",
      "not_mine" : true,
      "notes" : [
         "AA Lifespan 2.0 MA540T"
      ],
      "strings" : "AA Lifespan 2.0 MA540T",
      "type" : "Acoustic Guitar",
      "year" : "2014"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Basswood",
         "Color" : "Black",
         "Fingerboard Radius" : "10\"",
         "Fingerboard material" : "Rosewood",
         "Fret Count" : "22",
         "Frets" : "Medium Profile",
         "Location" : "Korea",
         "Neck Material" : "Maple",
         "Nut width" : "1.5\"",
         "Scale length" : "25.5”",
         "Serial" : "3058431"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://line6.com/legacy/variax500",
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Handbook" : "Variax 500.pdf"
      },
      "model" : "Variax 500",
      "notes" : [
         "EXL110",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-BLK",
         "S-Locks",
         "GC-ELECTRIC-A"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2003"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Location" : "Samick, Korea",
         "Serial" : "1103087"
      },
      "featured" : true,
      "image" : true,
      "make" : "Epiphone",
      "model" : "S-310B",
      "notes" : [
         "EXL110",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-BLK",
         "S-Locks",
         "GC-ELECTRIC-A",
         "Spyder 2700",
         "Fat 50’s"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "1987"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Binding" : "Cream",
         "Body Finish" : "Gloss",
         "Body Material" : "Mahogany",
         "Bridge" : "LockTone™ ABR Tune-o-matic™",
         "Bridge Pickup" : "ProBucker™ 3",
         "Color" : "Translucent Blue",
         "Control Knobs" : "Gold insert knobs with nickel plated dial pointers",
         "Controls" : "2 Volume, 2 Tone, CTS® potentiometers",
         "Fingerboard Material" : "Laurel",
         "Fingerboard Radius" : "304.8 mm / 12 in",
         "Finish" : "Nickel",
         "Fret Count" : "22",
         "Frets" : "Medium Jumbo",
         "Inlays" : "Pearloid Trapezoid",
         "Joint" : "Glued in",
         "Local Serial" : "27363",
         "Location" : "Qingdao (electric), China",
         "Neck Pickup" : "ProBucker™ 2",
         "Nut Material" : "Graph Tech®",
         "Nut Width" : "43.0 mm / 1.692 in",
         "Pickguard" : "Cream",
         "Pickup Covers" : "Nickel",
         "Pickup Selector" : "3-way Epiphone toggle",
         "Production Year" : "February 2021",
         "Profile" : "SlimTaper™ 60s C",
         "Scale Length" : "628.65 mm / 24.75 in",
         "Serial" : "21021527363",
         "Tailpiece" : "Stopbar",
         "Top" : "AA Flame Maple",
         "Truss Rod" : "Adjustable",
         "Truss Rod Cover" : "\"Bell Shaped\"; 2-layer (Black/White); 60s era E",
         "Tuning Machines" : "Grover® Rotomatic® 18:1"
      },
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/Electric-Guitar/EPINA3562/Ebony",
      "make" : "Epiphone",
      "model" : "Les Paul Standard",
      "notes" : [
         "EXL110",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-BLK",
         "S-Locks",
         "Standard ’60s Quilt Top",
         "Translucent Blue"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Finish" : "Gloss",
         "Body Material" : "Mahogany",
         "Bridge" : "Epiphone LockTone™ Tune-O-Matic",
         "Bridge Pickup" : "Epiphone Alnico Classic PRO™ Bridge",
         "Control Knobs" : "Black Top Hats with Inserts",
         "Controls" : "2- Volume, 2- Tone CTS pots",
         "Fingerboard Material" : "Laurel",
         "Fingerboard Radius" : "304.8 mm / 12 in",
         "Finish" : "Nickel",
         "Fret Count" : "22",
         "Frets" : "Medium Jumbo",
         "Inlays" : "Trapezoid",
         "Joint" : "Glued in; Set Neck",
         "Local Serial" : "30731",
         "Location" : "Qingdao (electric), China",
         "Neck Pickup" : "Epiphone Alnico Classic PRO™ Neck",
         "Nut Material" : "Graph Tech NuBone®",
         "Nut Width" : "43.0 mm / 1.692 in",
         "Pickguard" : "5-Ply, Black",
         "Pickup Selector" : "3-way Epiphone toggle",
         "Production Year" : "May 2023",
         "Profile" : "60s SlimTaper™",
         "Scale Length" : "628.65 mm / 24.75 in",
         "Serial" : "23051530731",
         "Strap Buttons" : "2 - bottom and heel",
         "Tailpiece" : "Epiphone LockTone™ Stop Bar",
         "Truss Rod" : "Adjustable",
         "Tuning Machines" : "Epiphone Deluxe Tuners 18:1 ratio"
      },
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/Electric-Guitar/EPIJ1X839/Heritage-Cherry",
      "make" : "Epiphone",
      "model" : "SG Standard",
      "not_mine" : true,
      "notes" : [
         "EXL110",
         "Heritage Cherry"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2023"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body material" : "Mahogany",
         "Bridge" : "Schaller Floyd Rose tremolo",
         "Fingerboaerd material" : "Maple",
         "Fret count" : "24",
         "Frets" : "Jumbo",
         "Location" : "Korea",
         "Neck material" : "Rosewood",
         "Pickup configuration" : "H-H",
         "Scale Length" : "25.5\"",
         "Serial" : "2110103"
      },
      "image" : true,
      "link" : "https://www.washburn.com/instrument-style/double-cut-solid-body/",
      "make" : "Washburn",
      "model" : "X40",
      "notes" : [
         "EXL110",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-BLK",
         "S-Locks",
         "GC-ELECTRIC-A"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2002"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body material" : "solid basswood",
         "Body style" : "3/4 size",
         "Fingerboard material" : "Rosewood",
         "Fret count" : "22",
         "Neck material" : "Hard Rock Maple",
         "Neck style" : "slim",
         "Pickups" : "Seymour Duncan open coil humbucker, and lipstick-style single coil",
         "Scale length" : "24 3/4″",
         "Serial" : "207757",
         "Tuning hardware" : "Grover"
      },
      "image" : true,
      "make" : "Daisy Rock",
      "model" : "Daisy Short-Scale",
      "not_mine" : true,
      "notes" : [
         "EXL110",
         "22 1/2\" scale",
         "Awesome Blue"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2004"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Alder",
         "Color" : "Sunburst",
         "Fingerboard Radius" : "10\"",
         "Fingerboard material" : "Rosewood",
         "Fret Count" : "21",
         "Frets" : "Medium Profile",
         "Location" : "Korea",
         "Neck Material" : "Maple",
         "Nut width" : "1.5\"",
         "Scale length" : "34\"",
         "Serial" : "4101739"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://line6.com/legacy/variaxbass700",
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Handbook" : "Variax Bass Manual - English ( Rev A ).pdf"
      },
      "model" : "Variax 700",
      "notes" : [
         "EXL170",
         "Tortex Standard",
         "MSS3-BRN",
         "Straplok"
      ],
      "strings" : "EXL170",
      "type" : "Bass Guitar",
      "year" : "2004"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body material" : "Basswood and birch",
         "Body type" : "Solid body",
         "Bridge" : "Standard (19mm string spacing)",
         "Bridge pickup" : "Super P4",
         "Controls" : "Master volume / Master tone / Balancer",
         "Electronics/ Strings" : "",
         "Fingerboard inlays" : "Pearl dot and side dots",
         "Fingerboard material" : "Rosewood",
         "Fret count" : "22",
         "Frets" : "medium",
         "Hardware color" : "Chrome",
         "Knob style" : "Sure Grip II",
         "Local Serial" : "5503",
         "Location" : "FujiGen Gakki, Japan",
         "Machine heads" : "Hercules B",
         "Neck joint" : "AANJ",
         "Neck material" : "1-piece maple",
         "Neck pickup" : "Super J4",
         "Neck type" : "D shape",
         "Nut" : "Plastic",
         "Nut width" : "41mm",
         "Pickup configuration" : "PJ",
         "Production Year" : "January 1986",
         "Scale length" : "864mm / 34\"",
         "Serial" : "A865503"
      },
      "image" : true,
      "link" : "https://www.ibanez.com/usa/products/category/electric_basses/",
      "make" : "Ibanez",
      "model" : "Roadstar II RB650",
      "notes" : [
         "EXL170",
         "Tortex Standard",
         "MSS3-BRN",
         "Straplok"
      ],
      "strings" : "EXL170",
      "type" : "Bass Guitar",
      "year" : "1986"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Battery Compartment" : "18-volt w/Screw Plate",
         "Binding" : "MOP w/ BLK/WHT/BLK Multi-ply",
         "Body Material" : "Mahogany",
         "Bridge" : "Schecter Custom Bass String Thru",
         "Bridge Pickup" : "EMG 40TW",
         "Color" : "See-Thru Black Satin (STBLS)",
         "Construction" : "Neck-Thru w/Ultra Access",
         "Controls" : "Volume (Push-Pull)/Volume (Push-Pull)/ Active EMG 3-Band EQ",
         "Fret Count" : "24",
         "Fretboard Material" : "Ebony",
         "Fretboard Radius" : "16\" (406mm)",
         "Frets" : "X-Jumbo",
         "Hardware Color" : "Black Chrome",
         "Inlays" : "MOP Gothic Crosses",
         "Item Number" : "1918",
         "Knobs" : "Metal Knurled w/ Set Screw",
         "Location" : "South Korea",
         "Neck @ 12th Fret" : ".866\" (22mm)",
         "Neck Material" : "Maple/Walnut Multi-ply",
         "Neck Pickup" : "EMG 40TW",
         "Neck Shape" : "Thin \"C\"",
         "Next @ 1st Fret" : ".787\" (20mm)",
         "Nut" : "Graph Tech XL Black Tusq",
         "Nut Width" : "1.771\" (45mm)",
         "Production Year" : "2021",
         "Scale" : "35\" (889mm)",
         "Serial" : "W21052189",
         "Strings" : "Ernie Ball 5 String Super Long #2850 (.045-.130)",
         "Top Contour" : "Arched Top",
         "Top Material" : "Quilted Maple",
         "Truss Rod" : "2-Way Adjustable Rod w/ 5/32\" (4mm) Allen Nut",
         "Tuners" : "Grover"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.schecterguitars.com/Hellraiser-Extreme-5?quantity=1&custitem_color_master_list=438",
      "make" : "Schecter",
      "model" : "Hellraiser Extreme-5",
      "notes" : [
         "ECB81-5SL",
         "Tortex Standard",
         "MSS2-4-BLK",
         "Straplok",
         "SGR-6B"
      ],
      "strings" : "ECB81-5SL",
      "type" : "Bass Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Back / Neck / Sides" : "Figured Maple",
         "Binding" : "None",
         "Bridge / Fingerboard" : "Black Walnut",
         "Color" : "Natural Amber",
         "Depth of Body" : "1.7\" (43mm)",
         "Fingerboard Radius" : "15.5” (394mm)",
         "Finish" : "Spirit Varnish",
         "Length of Body (w/ heel)" : "12.5\" (318mm)",
         "Location" : "Qingdao, China?",
         "Nut Width" : "1 - 1/8\" (28mm)",
         "Pickguard" : "Adhered Maple",
         "Serial" : "FT180030",
         "Strings" : "Northfield LITE, Phosphor Bronze, Loop end: G (.036), D (.024), A (.015), E (.010)",
         "Tailpiece" : "Cast",
         "Top" : "Spruce",
         "Total Length" : "25.5\" (648mm)",
         "Tuners" : "Gotoh",
         "Width of Body" : "10\" (254mm)"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.northfieldinstruments.com/thecalhoun",
      "make" : "Northfield",
      "model" : "Calhoun",
      "notes" : [
         "EFW74",
         "Golden Gate MP-12",
         "C5-R",
         "C5K",
         "M19PR-TAN",
         "C-3770 Trailpak II",
         "Mandolin Twin"
      ],
      "strings" : "EFW74",
      "type" : "Mandolin",
      "year" : "2018"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Location" : "Camden, NJ, USA",
         "Production Year" : "Patented Sept. 23, 1914",
         "Serial" : "unnumbered"
      },
      "image" : true,
      "make" : "Wm. Schmick",
      "model" : "Lyric Banjo",
      "notes" : [
         "EJ74"
      ],
      "strings" : "EJ74",
      "type" : "Mandolin",
      "year" : "1920s?"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Serial" : "27726-680"
      },
      "image" : true,
      "make" : "Framus",
      "model" : "Tenor Banjo",
      "notes" : [
         "EXL110",
         "Nylon Standard",
         "C5-R",
         "C5K",
         "PM14-DBR",
         "Irish Tenor tuning: 13/17/26/36"
      ],
      "strings" : "EXL110",
      "type" : "Banjo",
      "year" : "1968",
      "year_uncertain" : true
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Location" : "China",
         "Serial" : "12060058"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://kamoaukuleles.myshopify.com/collections/kamoa-e3-s/products/kamoa-e3-s-soprano-red",
      "make" : "Kamoa",
      "model" : "E3-S",
      "notes" : [
         "EJ99SC",
         "Soprano",
         "GBE-UKE-SOP"
      ],
      "strings" : "EJ99SC",
      "type" : "Ukulele",
      "year" : "2015",
      "year_uncertain" : true
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body material" : "Sengon",
         "Bridge material" : "Mahogany",
         "Fingerboard material" : "Mahogany",
         "Finish" : "High Gloss",
         "Fret count" : "12",
         "Fret material" : "Nickel",
         "Location" : "China",
         "Machine heads" : "Dolphin, Gold Plated",
         "Neck material" : "Jabon",
         "Nut" : "ABS, White",
         "Saddle" : "Graph Tech NuBone XB",
         "Scale length" : "346mm"
      },
      "image" : true,
      "make" : "Mahalo",
      "model" : "U/USA",
      "not_mine" : true,
      "notes" : [
         "EJ88S",
         "Soprano",
         "GBE-UKE-SOP"
      ],
      "strings" : "EJ88S",
      "type" : "Ukulele",
      "year" : "2015"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Back and Sides" : "Composite",
         "Body Depth" : "2.375\"",
         "Body Length" : "9.3125\"",
         "Fingerboard" : "Rosewood",
         "Fingerboard Width at Nut" : "1.375\"",
         "Fingerboard width at neck/body joint" : "1.6875\"",
         "Finish" : "Gloss",
         "Neck" : "Mahogany",
         "Number of Frets" : "12",
         "Nut" : "Plastic",
         "Overall Instrument Length" : "20.875\"",
         "Saddle" : "Plastic",
         "Scale Length" : "13.5\"",
         "Top" : "Philippine Mahogany",
         "Width at Lower Bout" : "6.8125\"",
         "Width at Upper Bout" : "5.0625\"",
         "Width at Waist" : "4.4375\""
      },
      "image" : true,
      "link" : "https://kalabrand.com/products/mk-sd-rdburst?_pos=5&_sid=e7e1bb13e&_ss=r",
      "make" : "Makala",
      "model" : "MK-SD/RDBURST",
      "not_mine" : true,
      "notes" : [
         "EJ88S",
         "Soprano",
         "GBE-UKE-SOP",
         "Dolphin",
         "Red Burst"
      ],
      "strings" : "EJ88S",
      "type" : "Ukulele",
      "year" : "2000s"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Comb (finish)" : "triple lacquered",
         "Comb (material, color)" : "pearwood, brown",
         "Cover plates" : "stainless steel",
         "Keys" : "F, E, Eb, D, Db, C, B(H), Bb, A, Ab, G",
         "Length" : "3.9\" (10 cm)",
         "Mouthpiece (surface)" : "pearwood",
         "Number of holes" : "10",
         "Reed plates (material, thickness)" : "brass, 0.9 mm",
         "Reed plates (surface)" : "brass",
         "Reeds (number, material)" : "20, brass",
         "Tonal range" : "3 octaves",
         "Tuning" : "Richter",
         "Type" : "diatonic"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.hohner.de/en/instruments/harmonicas/diatonic/marine-band/marine-band-deluxe",
      "make" : "Hohner",
      "model" : "Marine Band Deluxe",
      "notes" : [
         "G",
         "FlexRack",
         "C12"
      ],
      "type" : "Harmonica",
      "year" : "2020"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Comb (finish)" : "ABS",
         "Comb (material, color)" : "ABS, black",
         "Cover plates" : "stainless steel",
         "Keys" : "HG, F#, F, E, Eb, D, Db, C, B(H), Bb, A, Ab, G",
         "Length" : "4.0\" (10.2 cm)",
         "Mouthpiece (surface)" : "ABS",
         "Number of holes" : "10",
         "Reed plates (material, thickness)" : "brass, 0.9 mm",
         "Reed plates (surface)" : "brass",
         "Reeds (number, material)" : "20, brass",
         "Tonal range" : "3 octaves",
         "Tuning" : "Richter/Country (Country just in F#, F, E, Eb, D, Db, C, B(H), Bb, A, Ab, G)",
         "Type" : "diatonic"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.hohner.de/en/instruments/harmonicas/diatonic/progressive/special-20",
      "make" : "Hohner",
      "model" : "Special 20",
      "notes" : [
         "A",
         "C",
         "D",
         "E",
         "F",
         "G",
         "FlexRack",
         "C12"
      ],
      "type" : "Harmonica",
      "year" : "various"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/pianos/arius/",
      "make" : "Yamaha",
      "manuals" : {
         "Manual" : "YDP223.pdf"
      },
      "model" : "YDP-223",
      "type" : "Keyboard",
      "year" : "2006"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/keyboards/portable_keyboards/",
      "make" : "Yamaha",
      "manuals" : {
         "Manual" : "YPT300_1.pdf"
      },
      "model" : "YPT-300",
      "type" : "Keyboard",
      "year" : "2007"
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/drums/el_drums/digital_percussion/",
      "make" : "Yamaha",
      "manuals" : {
         "Manual" : "dd55.pdf"
      },
      "model" : "DD-55C",
      "type" : "Drums",
      "year" : "2007"
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/drums/ac_drums/drum_sets/rydeen/",
      "make" : "Yamaha",
      "model" : "Rydeen",
      "notes" : [
         "20” bass",
         "burgundy glitter"
      ],
      "type" : "Drums",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://meinlcymbals.com/en/products/hcs14c-m3486.html",
      "make" : "Meinl",
      "model" : "HCS 14” Crash",
      "type" : "Cymbal",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://zildjian.com/products/18-planet-z-crash-ride",
      "make" : "Zildjian",
      "model" : "Planet Z 18” Crash Ride",
      "type" : "Cymbal",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://zildjian.com/products/planet-z-hihats?variant=45264675406116",
      "make" : "Zildjian",
      "model" : "Planet Z 13” Hi-Hat",
      "type" : "Cymbal",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "make" : "Adam",
      "model" : "Bongos",
      "notes" : [
         "6”",
         "7.25”"
      ],
      "type" : "Bongos",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "detail" : {
         "Material" : "Baltic Birch",
         "String" : "Dual internal fixed snare wires"
      },
      "image" : true,
      "link" : "https://meinlpercussion.com/en/products/jc50ab-b-m5746.html",
      "make" : "Meinl",
      "model" : "JC50AB-B",
      "notes" : [
         "Snare Cajon 50",
         "Baltic Birch",
         "Almond Birch"
      ],
      "type" : "Cajon",
      "year" : "2022"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "link" : "https://www.ocwhite.com/broadcast-arms/proboom.html",
      "make" : "O.C. White",
      "model" : "ProBoom Deluxe",
      "type" : "Microphone Stand",
      "year" : "2006"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "link" : "http://herculesstands.com/us/products/microphone/boom/ms531b/",
      "make" : "Hercules",
      "model" : "MS531B",
      "type" : "Microphone Stand",
      "year" : "2017"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "link" : "https://gatorco.com/product/telescoping-boom-podcast-bass-drum-and-amp-mic-stand-gfw-mic-0822/",
      "make" : "Gator",
      "model" : "GFW-MIC-0822",
      "type" : "Microphone Stand",
      "year" : "2021"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "link" : "https://www.skbcases.com/music/products/proddetail.php?f=&id=819&o=&offset=4&c=80&s=80",
      "make" : "SKB",
      "model" : "SKB-R8",
      "type" : "Rack",
      "year" : "2005"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.schecterguitars.com/sgr-6b-c-shape-bass-hardcase",
      "make" : "Schecter",
      "model" : "SGR-6B",
      "notes" : [
         "bass guitar"
      ],
      "type" : "Instrument Case",
      "year" : "2021"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "electric guitar",
      "link" : "https://gatorco.com/product/electric-guitar-case-gc-electric-a/",
      "make" : "Gator",
      "model" : "GC-ELECTRIC-A",
      "notes" : [
         "electric guitar"
      ],
      "type" : "Instrument Case",
      "year" : "2005"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "ukulele",
      "link" : "https://gatorco.com/product/soprano-ukulele-gig-bag-gbe-uke-sop/",
      "make" : "Gator",
      "model" : "GBE-UKE-SOP",
      "notes" : [
         "ukulele"
      ],
      "type" : "Instrument Case",
      "year" : "2015"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "electric guitar",
      "link" : "https://roadrunnercases.com/rr3eg-electric-guitar-gig-bag/",
      "make" : "Road Runner",
      "model" : "RR3EG",
      "notes" : [
         "electric guitar"
      ],
      "type" : "Instrument Case",
      "year" : "2021"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "acoustic guitar",
      "make" : "Martin",
      "model" : "445",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Instrument Case",
      "year" : "2012"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "mandolin",
      "make" : "Superior",
      "model" : "C-3770 Trailpak II",
      "notes" : [
         "mandolin"
      ],
      "type" : "Instrument Case",
      "year" : "2018"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "harmonica",
      "link" : "https://www.hohner.de/en/instruments/harmonicas/accessories/harmonica-case",
      "make" : "Hohner",
      "model" : "C12",
      "notes" : [
         "harmonica"
      ],
      "type" : "Instrument Case",
      "year" : "2000"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "link" : "https://www.rocnsoc.com/products/",
      "make" : "Roc-N-Soc",
      "model" : "Nitro",
      "type" : "Furniture",
      "year" : "2000s"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://www.stringswing.com/product/cc01k-hardwood-home-studio-guitar-keeper-wall-mounted-guitar-hanger",
      "make" : "String Swing",
      "model" : "CC01K",
      "notes" : [
         "guitar"
      ],
      "type" : "Instrument Stand"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://shopwmusicdistributionusa.com/collections/rockstand/products/rockstand-multiple-guitar-rack-flat-packs?variant=40798720196760",
      "make" : "Warwick",
      "model" : "RS 20861",
      "notes" : [
         "guitar"
      ],
      "type" : "Instrument Stand",
      "year" : "2007"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://staggmusic.com/en/products/view/SUVMA100BK-foldable-a-stand-for-ukuleles-mandolins-and-violins/",
      "make" : "Stagg",
      "model" : "SUVM-A100BK",
      "notes" : [
         "mandolin"
      ],
      "type" : "Instrument Stand",
      "year" : "2019"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "harmonica",
      "link" : "https://www.hohner.de/en/instruments/harmonicas/accessories/flexrack",
      "make" : "Hohner",
      "model" : "FlexRack",
      "notes" : [
         "harmonica"
      ],
      "type" : "Instrument Stand",
      "year" : "2016"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://www.stagelinestands.com/product/gs550a-acoustic-guitar-stand/",
      "make" : "Stageline",
      "model" : "GS550A",
      "notes" : [
         "guitar"
      ],
      "type" : "Instrument Stand",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://www.ultimatesupport.com/products/gs-102",
      "make" : "Ultimate Support",
      "model" : "GS-102",
      "not_mine" : true,
      "notes" : [
         "guitar"
      ],
      "type" : "Instrument Stand",
      "year" : "2023"
   },
   {
      "category" : "Hardware",
      "featured" : true,
      "image" : true,
      "link" : "https://line6.com/legacy/podx3live",
      "make" : "Line 6",
      "manuals" : {
         "Advanced Guide" : "POD X3 Advanced Guide - English ( Rev E ).pdf",
         "Model Gallery" : "POD X3 Model Gallery - English ( Rev B ).pdf",
         "Quick Start" : "POD X3 Quick Start - English ( Rev F ).pdf"
      },
      "model" : "POD X3 Live",
      "type" : "Pedal",
      "year" : "2010"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.boss.info/us/products/rc-2/",
      "make" : "BOSS",
      "manuals" : {
         "Owner’s Manual" : "RC-2_e2.pdf"
      },
      "model" : "RC-2 Loop Station",
      "type" : "Pedal",
      "year" : "2006"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.quiklok.com/product/vp-2611-mono-volume-pedal/",
      "make" : "Quick-Lok",
      "model" : "VP-2611",
      "type" : "Pedal",
      "year" : "2016"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Audio" : "Mono",
         "Bypass" : "True Bypass",
         "Circuit" : "Analog",
         "Current Draw" : "3mA",
         "Dimensions" : "4.5\" x 2.75\" x 2.1\"",
         "Power Supply" : "9V"
      },
      "image" : true,
      "link" : "https://www.ehx.com/products/nano-big-muff-pi",
      "make" : "Electro-Harmonix",
      "manuals" : {
         "Manual" : "nano-big-muff-pi-manual.pdf"
      },
      "model" : "Nano Big Muff Pi",
      "type" : "Pedal",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Audio" : "Mono",
         "Bypass" : "Buffered Bypass",
         "Circuit" : "Analog",
         "Current Draw" : "25 mA",
         "Dimensions" : "5.75\" x 4.75\" x 2.5\"",
         "Power Supply" : "9V"
      },
      "image" : true,
      "link" : "https://www.ehx.com/products/metal-muff",
      "make" : "Electro-Harmonix",
      "manuals" : {
         "Manual" : "metal-muff-manual.pdf"
      },
      "model" : "Metal Muff",
      "type" : "Pedal",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Audio" : "Mono",
         "Bypass" : "Buffered Bypass",
         "Circuit" : "Analog",
         "Current Draw" : "15mA",
         "Dimensions" : "5.75\" x 4.75\" x 2.5\"",
         "Power Supply" : "9V"
      },
      "image" : true,
      "link" : "https://www.ehx.com/products/deluxe-bass-big-muff-pi",
      "make" : "Electro-Harmonix",
      "manuals" : {
         "Manual" : "deluxe-bass-big-muff-pi.pdf"
      },
      "model" : "Deluxe Bass Big Muff Pi",
      "type" : "Pedal",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "Pignose",
      "model" : "7-100",
      "type" : "Amplifier",
      "year" : "2000s"
   },
   {
      "category" : "Hardware",
      "featured" : true,
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/guitars_basses/amps_accessories/thr-ii/",
      "make" : "Yamaha",
      "manuals" : {
         "Reference Manual" : "thr30ii_en_rm_c0.pdf"
      },
      "model" : "THR30II Wireless",
      "notes" : [
         "G10"
      ],
      "type" : "Amplifier",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://line6.com/spider-guitar-amp/amps/",
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Handbook" : "Spider IV 15 Pilot's Guide - English ( Rev F ).pdf"
      },
      "model" : "Spider IV 15",
      "notes" : [
         "MkI"
      ],
      "type" : "Amplifier",
      "year" : "2015",
      "year_uncertain" : true
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.blackstaramps.com/uk/products/fly-3",
      "make" : "Blackstar",
      "manuals" : {
         "Owner’s Manual" : "fly-handbook.pdf"
      },
      "model" : "Fly 3",
      "type" : "Amplifier",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://line6.com/relay-wireless/g10-g10s/",
      "make" : "Line 6",
      "model" : "G10",
      "notes" : [
         "wireless"
      ],
      "type" : "Guitar Accessory",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.kahlerusa.com",
      "make" : "Kahler",
      "model" : "Spyder 2700",
      "notes" : [
         "locking tremolo"
      ],
      "type" : "Guitar Accessory",
      "year" : "1987"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://line6.com/legacy/fbve",
      "make" : "Line 6",
      "manuals" : {
         "User Manual" : "FBV User Manual - English.pdf"
      },
      "model" : "FBV Express",
      "type" : "Controller",
      "year" : "2015"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "M-Audio",
      "manuals" : {
         "Manual" : "Oxygen8.pdf"
      },
      "model" : "Oxygen8",
      "notes" : [
         "USB"
      ],
      "type" : "Controller",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "IK Multimedia",
      "model" : "iRig",
      "type" : "Interface",
      "year" : "2011"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Depth" : "90 mm / 3-9/16 inches",
         "Height" : "43 mm / 1-3/4 inches",
         "Weight" : "240 g / 0 lbs. 9 oz.",
         "Width" : "96 mm / 3-13/16 inches"
      },
      "image" : true,
      "link" : "https://www.boss.info/us/products/fs-5u_5l/",
      "make" : "BOSS",
      "model" : "FS-5U",
      "type" : "Controller",
      "year" : "2007"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "http://www.studioprojects.com/b1.html",
      "make" : "Studio Projects",
      "manuals" : {
         "Manual" : "studio_projects_b_series_manual.pdf",
         "Pattern" : "studio_projects_b1.pdf"
      },
      "model" : "B1",
      "type" : "Microphone",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Audio frequency bandwidth" : "20 - 20000 Hz",
         "Bass cut filter" : "300 Hz - 12 dB/octave",
         "Contacts" : "3-pin",
         "Current" : "<= 3 mA",
         "Diameter" : "54 mm",
         "Electrical impedance" : "<= 200 Ohms",
         "Equivalent noise level" : "16 dB-A",
         "Gender" : "Male",
         "Length" : "165 mm",
         "Net Weight" : "530 g",
         "Polar Pattern" : "Cardioid",
         "Preattenuation Pad" : "-20 dB",
         "Recommended load impedance" : ">= 1000 Ohms",
         "Sensitivity" : "20 mV/Pa",
         "Signal to Noise" : "78 dB-A",
         "Type" : "Balanced XLR",
         "Voltage" : "44 to 52 V"
      },
      "image" : true,
      "link" : "https://www.akg.com/Microphones/Condenser%20Microphones/P220.html",
      "make" : "AKG",
      "manuals" : {
         "User Instructions" : "585203.pdf"
      },
      "model" : "P220",
      "type" : "Microphone",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Connector" : "XLR-3",
         "Dimensions" : "Ø 48 x 180 mm",
         "Frequency response (Microphone)" : "40 - 16000 Hz",
         "Min. terminating impedance" : "1000 Ω",
         "Nominal impedance" : "350 Ω",
         "Sensitivity in free field, no load (1kHz)" : "2,7 mV/Pa",
         "Weight" : "330 g",
         "Weight w/o cable" : "330 g"
      },
      "image" : true,
      "link" : "https://en-us.sennheiser.com/live-performance-microphone-vocal-stage-e-835",
      "make" : "Sennheiser",
      "manuals" : {
         "Manual" : "e835_Manual_01_2019_EN.pdf",
         "Product Specification" : "SP_1209_v1.0_e_835_e_835-S_Product_Specification_EN.pdf",
         "Quick Guide" : "e835_Quick_Guide_09_2023.pdf"
      },
      "model" : "e 835",
      "type" : "Microphone",
      "year" : "2011"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.shure.com/en-US/products/microphones/sm58",
      "make" : "Shure",
      "manuals" : {
         "User Guide" : "us_pro_sm58_ug.pdf"
      },
      "model" : "SM-58",
      "type" : "Microphone",
      "year" : "2007"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "Edirol",
      "manuals" : {
         "Owner’s Manual" : "MA-20D_egfis2.pdf"
      },
      "model" : "MA-20D",
      "type" : "Monitors",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Cable" : "11' (3.4 m) (OFC litz wire, left-side exit)",
         "Connector" : "1/4\" (6.3 mm) phone plug",
         "Driver Diameter" : "40 mm",
         "Frequency Response" : "5-28,000 Hz",
         "Impedance" : "60 ohms",
         "Magnet" : "Neodymium",
         "Maximum Input Power" : "1,600 mW at 1 kHz",
         "Sensitivity" : "100 dB",
         "Type" : "Closed-back dynamic",
         "Voice Coil" : "Copper-clad aluminum wire",
         "Weight" : "8.8 oz (250 g) without cable"
      },
      "image" : true,
      "link" : "https://www.audio-technica.com/en-us/ath-m40fs",
      "make" : "Audio Technica",
      "model" : "ATH-M40fs",
      "type" : "Headphones",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Cord" : "Coiled 1-3m long single-sided OFC litz cord with gold plated stereo unimatch plug",
         "Driver Diameter" : "40 mm",
         "Frequency Range" : "5-30,000 Hz",
         "Impedance" : "45Ω at 1 kHz",
         "Mass" : "Approx. 260g (9 3/16 oz) (without cord)",
         "Power handling capacity" : "1,000 mW",
         "Sensitivity" : "106 dB",
         "Type" : "Closed-back dynamic"
      },
      "image" : true,
      "link" : "https://www.sony.com/electronics/headphones/t/headband-headphones",
      "make" : "Sony",
      "manuals" : {
         "Operating Instructions" : "26673061M.pdf"
      },
      "model" : "MDR-V600",
      "type" : "Headphones",
      "year" : "1999"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Frequency Range" : "SE215 22 Hz–17.5 kHz",
         "Impedance at 1 kHz" : "17 Ω",
         "Net Weight" : "30 g (1 oz.)",
         "Sensitivity at 1 kHz" : "107 dB SPL/mW",
         "Transducer Type" : "Single High-Definition MicroDriver"
      },
      "image" : true,
      "link" : "https://www.shure.com/en-US/products/earphones/se215cl",
      "make" : "Shure",
      "manuals" : {
         "Earphone Resource Center" : "Earphone-Resource-Center_guide_en-US.pdf",
         "Exploded View" : "SE215_Exploded_View.pdf",
         "User Guide" : "SE215M_guide_en-US.pdf"
      },
      "model" : "SE215-CL",
      "type" : "Headphones",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://mackie.com/products/big-knob-series-monitor-controllers-interfaces",
      "make" : "Mackie",
      "manuals" : {
         "Operation Guide" : "big_knob_studio_command_system.pdf",
         "Quick Start Guide" : "big_knob.pdf"
      },
      "model" : "Big Knob",
      "type" : "Mixer",
      "year" : "2014"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "link" : "https://peavey.com/products/mixers.cfm",
      "make" : "Peavey",
      "manuals" : {
         "Operations Guide" : "pv6_manual.pdf"
      },
      "model" : "PV 6",
      "type" : "Mixer",
      "year" : "2006"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "make" : "Tapco",
      "manuals" : {
         "Manual" : "MixSeries_OM.pdf"
      },
      "model" : "Mix.50",
      "type" : "Mixer",
      "year" : "2008"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/proaudio/pa_systems/",
      "make" : "Yamaha",
      "manuals" : {
         "Owner’s Manual" : "stagepas500_en_om_d0.pdf"
      },
      "model" : "STAGEPAS 500",
      "type" : "PA",
      "year" : "2011"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-2i2",
      "make" : "Focusrite",
      "manuals" : {
         "Focusrite Control User Guide" : "Focusrite Control Scarlett 3rd Gen User Guide_EN_0.pdf",
         "User Guide" : "516658.pdf"
      },
      "model" : "Scarlett 2i2",
      "notes" : [
         "Gen3",
         "USB"
      ],
      "type" : "Interface",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-18i20",
      "make" : "Focusrite",
      "manuals" : {
         "Focusrite Control User Guide" : "Focusrite Control Scarlett 2nd Gen User Guide - EN.pdf",
         "User Guide" : "374164.pdf"
      },
      "model" : "Scarlett 18i20",
      "notes" : [
         "Gen2",
         "USB"
      ],
      "type" : "Interface",
      "year" : "2016"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.motu.com/products/motuaudio/828/",
      "make" : "MOTU",
      "manuals" : {
         "User Guide" : "828mkII_Manual_Mac.pdf"
      },
      "model" : "828mkII",
      "notes" : [
         "FireWire"
      ],
      "type" : "Interface",
      "year" : "2005"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.korg.com/us/products/tuners/",
      "make" : "Korg",
      "manuals" : {
         "Owner’s Manual" : "DTR2000_1000_EFG2.pdf"
      },
      "model" : "DTR-2000",
      "notes" : [
         "rackmount"
      ],
      "type" : "Tuner",
      "year" : "2005"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.korg.com/us/products/tuners/sledgehammer_pro/",
      "make" : "Korg",
      "manuals" : {
         "Owner’s Manual" : "SledgehammerPro_OM_EFGSJ2.pdf"
      },
      "model" : "Sledgehammer Pro",
      "notes" : [
         "Clip-on"
      ],
      "type" : "Tuner",
      "year" : "2019"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "Furman",
      "manuals" : {
         "Owner’s Manual" : "SERIES_II_15AMP_manual.pdf"
      },
      "model" : "PM-8 II",
      "notes" : [
         "power conditioner"
      ],
      "type" : "Rack Hardware",
      "year" : "2005"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "Furman",
      "manuals" : {
         "Owner’s Manual" : "PB-48_PB-48D_manual.pdf"
      },
      "model" : "PB-48",
      "notes" : [
         "patch bay"
      ],
      "type" : "Rack Hardware",
      "year" : "2005"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://wittner-gmbh.de/wittner_metronome_maelzel_wooden_casing.html",
      "make" : "Wittner",
      "manuals" : {
         "Manual" : "maelzel_gebrauchsanleitung.pdf"
      },
      "model" : "801m",
      "type" : "Metronome",
      "year" : "2007"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "link" : "https://www.apple.com/macbook-pro/",
      "make" : "Apple",
      "model" : "MacBook Pro",
      "type" : "Computer",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "link" : "https://www.apple.com/ipad-pro/",
      "make" : "Apple",
      "model" : "iPad Pro",
      "type" : "Computer",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Bobbin Material" : "Fiber",
         "Configuration" : "SSS",
         "DC Resistance" : "Neck: 6.26K, Middle: 6.34K, Bridge: 6.43K",
         "Inductance" : "Neck: 2.49 Henries, Middle: 2.5 Henries, Bridge: 2.63 Henries",
         "Lead Wire" : "Cloth-covered",
         "Magnet Type" : "Alnico 5",
         "Magnet Wire" : "Formvar-coated",
         "Output" : "Moderate (3 out of 5)",
         "Pole Pieces" : "Staggered hand-beveled",
         "Style" : "Custom Shop",
         "Tone" : "Modern"
      },
      "image" : true,
      "link" : "https://shop.fender.com/en-US/parts/stratocaster-parts/custom-shop-fat-50s-stratocaster-pickups/0992113000.html",
      "make" : "Fender",
      "manuals" : {
         "Wiring Diagram" : "0992113000_custom_shop_fat_50s_strat_pickups.pdf"
      },
      "model" : "Fat 50’s",
      "type" : "Pickup",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Battery Life" : "220 hours",
         "Pickup Length" : "2.65\" (67.3 mm)",
         "Soundhole" : "Round soundholes from 3 7/8\" (98 mm) to 4 1/8\" (105 mm) in diameter"
      },
      "image" : true,
      "link" : "https://www.fishman.com/portfolio/ellipse-matrix-blend-pickup-preamp-system/",
      "make" : "Fishman",
      "manuals" : {
         "Installation Guide" : "ellipse_matrix_blend_installation_guide.pdf",
         "User Guide" : "ellipse_matrix_blend_user_guide.pdf"
      },
      "model" : "Ellipse Matrix Blend",
      "type" : "Pickup",
      "year" : "2000s"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.fishman.com/product-series-aura-imaging/",
      "make" : "Fishman",
      "manuals" : {
         "User Guide" : "f1-aura-plus.pdf"
      },
      "model" : "F1 Aura+",
      "type" : "Pickup",
      "year" : "2012"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://kksound.com/products/mandolintwin.php",
      "make" : "K&K",
      "manuals" : {
         "Installation Guide" : "mandolintwin-internal-new.pdf"
      },
      "model" : "Mandolin Twin",
      "type" : "Pickup",
      "year" : "2019"
   },
   {
      "category" : "Accessories",
      "gauge" : ".50mm/acoustic, .80mm/electric",
      "image" : true,
      "instrument" : "acoustic guitar, electric guitar",
      "link" : "https://www.steveclayton.com/acetal.php",
      "make" : "Clayton",
      "model" : "Acetal Standard",
      "notes" : [
         ".50mm/acoustic",
         ".80mm/electric",
         "acoustic guitar",
         "electric guitar"
      ],
      "type" : "Pick"
   },
   {
      "category" : "Accessories",
      "gauge" : "1.14mm",
      "image" : true,
      "instrument" : "bass",
      "link" : "https://www.jimdunlop.com/tortex-standard-pick-1-14mm/",
      "make" : "Dunlop",
      "model" : "Tortex Standard",
      "notes" : [
         "1.14mm",
         "bass"
      ],
      "type" : "Pick"
   },
   {
      "category" : "Accessories",
      "gauge" : ".6mm",
      "image" : true,
      "instrument" : "banjo",
      "link" : "https://www.jimdunlop.com/nylon-standard-pick-60mm/",
      "make" : "Dunlop",
      "model" : "Nylon Standard",
      "notes" : [
         ".6mm",
         "banjo"
      ],
      "type" : "Pick"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://www.sagamusic.com/shop/fretted-instrument-accessories/golden-gate-accessories/golden-gate-mp-12-deluxe-tortoise-style-flat-pick-rounded-triangle-extra-stiff-dozen/",
      "make" : "Saga",
      "model" : "Golden Gate MP-12",
      "notes" : [
         "mandolin"
      ],
      "type" : "Pick"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.thaliacapos.com/collections/pick-pucks",
      "make" : "Thalia",
      "model" : "Pick Puck",
      "type" : "Guitar Accessory",
      "year" : "2022"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "make" : "Shubb",
      "model" : "Axys",
      "notes" : [
         "slide"
      ],
      "type" : "Guitar Accessory",
      "year" : "2007"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "make" : "EBow",
      "manuals" : {
         "Player’s Guide" : "EBowPlayersGuide.pdf"
      },
      "model" : "EBow",
      "notes" : [
         "ebow"
      ],
      "type" : "Guitar Accessory",
      "year" : "2000"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://shubb.com/product/deluxe-capo-s1/",
      "make" : "Shubb",
      "model" : "S1",
      "notes" : [
         "guitar"
      ],
      "type" : "Capo",
      "year" : "2000"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://shubb.com/product/capo-noir-c1k/",
      "make" : "Shubb",
      "model" : "C1K",
      "notes" : [
         "guitar"
      ],
      "type" : "Capo",
      "year" : "2021"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "banjo, mandolin",
      "link" : "https://shubb.com/product/standard-capo-c5/",
      "make" : "Shubb",
      "model" : "C5-R",
      "notes" : [
         "banjo",
         "mandolin"
      ],
      "type" : "Capo",
      "year" : "2019"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "banjo, mandolin",
      "link" : "https://shubb.com/product/capo-noir-c5k/",
      "make" : "Shubb",
      "model" : "C5K",
      "notes" : [
         "banjo",
         "mandolin"
      ],
      "type" : "Capo",
      "year" : "2021"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.levysleathers.com/product/guitar-strap-m17ss/",
      "make" : "Levys",
      "model" : "M17SS-DBR",
      "type" : "Strap",
      "year" : "2013"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.levysleathers.com/product/guitar-strap-m17ss-blk/",
      "make" : "Levys",
      "model" : "M17SS-BLK",
      "notes" : [
         "S-Locks"
      ],
      "type" : "Strap",
      "year" : "2013"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.levysleathers.com/product/mandolin-strap-m19pr/",
      "make" : "Levys",
      "model" : "M19PR-TAN",
      "type" : "Strap",
      "year" : "2019"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.levysleathers.com/product/guitar-strap-mss3-brn/",
      "make" : "Levys",
      "model" : "MSS3-BRN",
      "notes" : [
         "Straplok"
      ],
      "type" : "Strap",
      "year" : "2010"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.levysleathers.com/product/guitar-strap-mss2-4-blk/",
      "make" : "Levys",
      "model" : "MSS2-4-BLK",
      "notes" : [
         "Straplok"
      ],
      "type" : "Strap",
      "year" : "2021"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.levysleathers.com/product/banjo-strap-pm14-dbr/",
      "make" : "Levys",
      "model" : "PM14-DBR",
      "type" : "Strap",
      "year" : "2020"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.jimdunlop.com/straplok-strap-retainers-original-nickel/",
      "make" : "Dunlop",
      "model" : "Straplok",
      "type" : "Strap Retainers",
      "year" : "2020"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://schaller.info/en/slocks/",
      "make" : "Schaller",
      "model" : "S-Locks",
      "type" : "Strap Retainers",
      "year" : "2000"
   },
   {
      "category" : "Accessories",
      "gauge" : ".013-.056",
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.martinguitar.com/strings/authentic-acoustic/martin-authentic-acoustic-lifespan-2.0-guitar-strings-92-8-phosphor-bronze.html",
      "make" : "Martin",
      "model" : "AA Lifespan 2.0 MA550T",
      "notes" : [
         ".013-.056",
         "acoustic guitar",
         "medium",
         "92/8 phosphor bronze"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".012-.054",
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.martinguitar.com/strings/authentic-acoustic/martin-authentic-acoustic-lifespan-2.0-guitar-strings-92-8-phosphor-bronze.html",
      "make" : "Martin",
      "model" : "AA Lifespan 2.0 MA540T",
      "notes" : [
         ".012-.054",
         "acoustic guitar",
         "light",
         "92/8 phosphor bronze"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".010-.047",
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.martinguitar.com/strings/authentic-acoustic/martin-authentic-acoustic-lifespan-2.0-guitar-strings-92-8-phosphor-bronze.html",
      "make" : "Martin",
      "model" : "AA Lifespan 2.0 MA530T",
      "notes" : [
         ".010-.047",
         "acoustic guitar",
         "extra light",
         "92/8 phosphor bronze"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".024, .030, .036, .026",
      "image" : true,
      "instrument" : "soprano ukulele",
      "link" : "https://www.daddario.com/products/guitar/ukulele/nyltech-ukulele/ej88s-nyltech-ukulele-soprano/item/daddario-ej88s-nyltech-ukulele-strings-soprano-1244/",
      "make" : "D’Addario",
      "model" : "EJ88S",
      "notes" : [
         ".024",
         ".030",
         ".036",
         ".026",
         "soprano ukulele",
         "nyltech"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".0205, .026, .0319, .0224",
      "image" : true,
      "instrument" : "soprano ukulele",
      "link" : "https://www.daddario.com/products/guitar/ukulele/pro-arte-carbon-ukulele/ej99sc-pro-arte-carbon-ukulele-soprano-concert/",
      "make" : "D’Addario",
      "model" : "EJ99SC",
      "notes" : [
         ".0205",
         ".026",
         ".0319",
         ".0224",
         "soprano ukulele",
         "fluorocarbon"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".011-.040",
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://www.daddario.com/products/guitar/mandolin/phosphor-bronze-mandolin/ej74-mandolin-phosphor-bronze-medium-11-40/",
      "make" : "D’Addario",
      "model" : "EJ74",
      "notes" : [
         ".011-.040",
         "mandolin",
         "medium",
         "phosphor bronze"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".011-.036",
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://www.daddario.com/products/guitar/mandolin/flatwound-mandolin/efw74-mandolin-flat-wound-medium-11-36/",
      "make" : "D’Addario",
      "model" : "EFW74",
      "notes" : [
         ".011-.036",
         "mandolin",
         "medium",
         "flatwound"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".010-.046",
      "image" : true,
      "instrument" : "electric guitar, banjo",
      "link" : "https://www.daddario.com/products/guitar/electric-guitar/xl-nickel/exl110-nickel-wound-regular-light-10-46/",
      "make" : "D’Addario",
      "model" : "EXL110",
      "notes" : [
         ".010-.046",
         "electric guitar",
         "banjo",
         "light",
         "nickel"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".045-.100",
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.daddario.com/products/guitar/bass-guitar/xl-nickel-bass/exl170-nickel-wound-bass-light-45-100-long-scale/",
      "make" : "D’Addario",
      "model" : "EXL170",
      "notes" : [
         ".045-.100",
         "bass guitar",
         "long",
         "nickel",
         "roundwound"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "gauge" : ".045-.132",
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.daddario.com/products/guitar/bass-guitar/xl-chromes-bass/ecb81-5sl-chromes-bass-5-string-light-45-132-super-long-scale/",
      "make" : "D’Addario",
      "model" : "ECB81-5SL",
      "notes" : [
         ".045-.132",
         "bass guitar",
         "bass",
         "super long",
         "chrome",
         "flatwound",
         "5-string"
      ],
      "type" : "Strings"
   }
]

var links = {
   "AKG" : "https://www.akg.com/",
   "Apple" : "https://www.apple.com/",
   "Audio Technica" : "https://www.audio-technica.com/",
   "BOSS" : "https://www.boss.info/us/",
   "Blackstar" : "https://www.blackstaramps.com/",
   "Clayton" : "https://www.steveclayton.com/",
   "Daisy Rock" : "https://www.daisyrock.com/",
   "Digitech" : "https://www.digitech.com/",
   "Dunlop" : "https://www.jimdunlop.com/",
   "D’Addario" : "https://www.daddario.com/",
   "EBow" : "https://www.ebow.com/",
   "Edirol" : "https://www.roland.com/",
   "Electro-Harmonix" : "https://www.ehx.com/",
   "Epiphone" : "https://www.epiphone.com/",
   "Ernie Ball" : "https://www.ernieball.com/",
   "Fender" : "https://www.fender.com/",
   "Fishman" : "https://www.fishman.com/",
   "Focusrite" : "https://focusrite.com/",
   "Framus" : "https://www.framus-vintage.de/en/Other/Banjos/",
   "Furman" : "https://www.furmanpower.com/",
   "GHS" : "https://www.ghsstrings.com/",
   "Gator" : "https://www.gatorcases.com/",
   "Hercules" : "http://herculesstands.com/",
   "Hohner" : "https://www.hohner.de/",
   "IK Multimedia" : "https://www.ikmultimedia.com/",
   "Ibanez" : "https://www.ibanez.com/",
   "K&K" : "https://kksound.com/",
   "Kahler" : "https://www.kahlerusa.com/",
   "Kamoa" : "https://kamoaukuleles.myshopify.com/",
   "Korg" : "https://www.korg.com/",
   "Levys" : "https://www.levysleathers.com/",
   "Line 6" : "https://line6.com/",
   "M-Audio" : "https://www.m-audio.com/",
   "MOTU" : "https://www.motu.com/",
   "Mackie" : "https://www.mackie.com/",
   "Mahalo" : "https://mahaloukuleles.com/",
   "Makala" : "https://kalabrand.com/",
   "Martin" : "https://www.martinguitar.com/",
   "Meinl" : "https://meinlcymbals.com/",
   "Northfield" : "https://www.northfieldinstruments.com/",
   "O.C. White" : "https://www.ocwhite.com/",
   "Peavey" : "https://peavey.com/",
   "Pignose" : "https://pignoseamps.com/",
   "Quick-Lok" : "https://www.quiklok.com/",
   "Road Runner" : "https://roadrunnercases.com/",
   "Roc-N-Soc" : "https://rocnsoc.com/",
   "SKB" : "https://www.skbcases.com/",
   "Saga" : "https://www.sagamusic.com/",
   "Schaller" : "https://schaller.info/",
   "Schecter" : "https://www.schecterguitars.com/",
   "Sennheiser" : "https://en-us.sennheiser.com/",
   "Shubb" : "https://www.shubb.com/",
   "Shure" : "https://www.shure.com/",
   "Sony" : "https://www.sony.com/",
   "Stageline" : "https://www.stagelinestands.com/",
   "Stagg" : "https://staggmusic.com/",
   "String Swing" : "https://www.stringswing.com/",
   "Studio Projects" : "http://www.studioprojects.com/",
   "Tapco" : "https://www.mackie.com/",
   "Thalia" : "https://www.thaliacapos.com/collections/pick-pucks",
   "Traveler" : "https://travelerguitar.com/",
   "Ultimate Support" : "https://www.ultimatesupport.com/",
   "Warwick" : "https://www.warwick.de/en/Warwick-.html",
   "Washburn" : "https://www.washburn.com/",
   "Wittner" : "https://www.wittner-gmbh.de/",
   "Yamaha" : "https://usa.yamaha.com/",
   "Zildjian" : "https://zildjian.com/"
}
