var lastModified = new Date("2025-06-24T12:00:00+0000")
var equipment_data = {}
var equipment = [
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
      "link" : "https://shubb.com/product/shubb-reversible-guitar-slide/",
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
      "detail" : {
         "Battery Compartment" : "9 V"
      },
      "image" : true,
      "link" : "https://ebow.com/",
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
      "link" : "https://www.thaliacapos.com/collections/pick-pucks/products/old-glory-pick-puck-2-0",
      "make" : "Thalia",
      "model" : "Pick Puck",
      "type" : "Guitar Accessory",
      "year" : "2022"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.thaliacapos.com/products/u-s-coast-guard-pick-tin",
      "make" : "Thalia",
      "model" : "Pick Tin",
      "type" : "Guitar Accessory",
      "year" : "2023"
   },
   {
      "category" : "Accessories",
      "current_pedal" : true,
      "detail" : {
         "Analog Outputs" : "XLR balanced, 1/4” unbalanced",
         "Serial" : "W100M7038017336, W1ROM7244018777"
      },
      "image" : true,
      "link" : "https://line6.com/relay-wireless/g10-g10s/",
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Guide" : "Relay G10TII - G10 - G10S Pilot's Guide - English .pdf"
      },
      "model" : "Relay G10",
      "notes" : [
         "G10TII transmitter"
      ],
      "type" : "Guitar Accessory",
      "year" : "2023"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "acoustic guitar, electric guitar",
      "link" : "https://www.steveclayton.com/acetal.php",
      "make" : "Clayton",
      "model" : "Acetal Standard",
      "notes" : [
         "acoustic guitar",
         "electric guitar",
         ".50mm/acoustic",
         ".80mm/electric"
      ],
      "type" : "Pick"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "banjo",
      "link" : "https://www.jimdunlop.com/nylon-standard-pick-60mm/",
      "make" : "Dunlop",
      "model" : "Nylon Standard",
      "notes" : [
         "banjo",
         ".6mm"
      ],
      "type" : "Pick"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.jimdunlop.com/big-stubby-pick-2-00mm/",
      "make" : "Dunlop",
      "model" : "Big Stubby",
      "notes" : [
         "bass guitar",
         "2.0mm"
      ],
      "type" : "Pick"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.jimdunlop.com/tortex-standard-pick-1-14mm/",
      "make" : "Dunlop",
      "model" : "Tortex Standard",
      "notes" : [
         "bass guitar",
         "1.14mm"
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
      "instrument" : "acoustic guitar",
      "link" : "https://levysleathers.com/products/the-ebony-series?variant=47870343938364",
      "make" : "Levys",
      "model" : "M17SS-DBR",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strap",
      "year" : "2013"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://levysleathers.com/collections/leather-guitar-straps/products/holly-deluxe-series?variant=47870207066428",
      "make" : "Levys",
      "model" : "M25-DBR",
      "notes" : [
         "acoustic guitar",
         "Flex Lock Strap Blocks"
      ],
      "type" : "Strap",
      "year" : "2024"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://levysleathers.com/products/signature-legacy-series?variant=47870206279996",
      "make" : "Levys",
      "model" : "MSS2-4-BLK",
      "notes" : [
         "bass guitar",
         "Straplok"
      ],
      "type" : "Strap",
      "year" : "2021"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://levysleathers.com/products/signature-suede-series?variant=47870205034812",
      "make" : "Levys",
      "model" : "MSS3-BRN",
      "notes" : [
         "bass guitar",
         "Straplok"
      ],
      "type" : "Strap",
      "year" : "2010"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "electric guitar",
      "link" : "https://levysleathers.com/products/the-ebony-series?variant=47870343938364",
      "make" : "Levys",
      "model" : "M17SS-BLK",
      "notes" : [
         "electric guitar",
         "S-Locks"
      ],
      "type" : "Strap",
      "year" : "2013"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://levysleathers.com/collections/poly-print-straps/products/3-wide-poly-series",
      "make" : "Levys",
      "model" : "M8P3-BLK",
      "notes" : [
         "guitar",
         "Flex Lock Strap Blocks"
      ],
      "type" : "Strap",
      "year" : "2024"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://www.ernieball.com/guitar-accessories/guitar-straps/polypro-guitar-straps#P04037",
      "make" : "Ernie Ball",
      "model" : "Polypro (black)",
      "notes" : [
         "guitar",
         "Flex Lock Strap Blocks"
      ],
      "type" : "Strap",
      "year" : "2000s"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://levysleathers.com/products/mandolin-series?variant=47870295703868",
      "make" : "Levys",
      "model" : "M19PR-TAN",
      "notes" : [
         "mandolin"
      ],
      "type" : "Strap",
      "year" : "2019"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://levysleathers.com/products/banjo-master-series?variant=47870295212348",
      "make" : "Levys",
      "model" : "PM14-DBR",
      "type" : "Strap",
      "year" : "2020"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.daddario.com/products/accessories/strap-accessories/strap-locks/flex-lock-strap-blocks/",
      "make" : "D’Addario",
      "model" : "Flex Lock Strap Blocks",
      "type" : "Strap Retainers"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://schaller.info/en/slocks/",
      "make" : "Schaller",
      "model" : "S-Locks",
      "type" : "Strap Retainers"
   },
   {
      "category" : "Accessories",
      "image" : true,
      "link" : "https://www.jimdunlop.com/straplok-strap-retainers-original-nickel/",
      "make" : "Dunlop",
      "model" : "Straplok",
      "type" : "Strap Retainers"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "Steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".010, .014, .023, .030, .039, .047",
         "Gauge Name" : "Extra Light",
         "Material" : "92/8 Phosphor Bronze",
         "String Count" : "6",
         "Treatment" : "Anti-Corrosion"
      },
      "hide" : true,
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.martinguitar.com/strings/authentic-acoustic/martin-authentic-acoustic-lifespan-2.0-guitar-strings-92-8-phosphor-bronze.html",
      "make" : "Martin",
      "model" : "AA Lifespan 2.0 MA530T",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "Steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".012, .016, .025, .032, .042, .054",
         "Gauge Name" : "Light",
         "Material" : "92/8 Phosphor Bronze",
         "String Count" : "6",
         "Treatment" : "Anti-Corrosion"
      },
      "hide" : true,
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.martinguitar.com/strings/authentic-acoustic/martin-authentic-acoustic-lifespan-2.0-guitar-strings-92-8-phosphor-bronze.html",
      "make" : "Martin",
      "model" : "AA Lifespan 2.0 MA540T",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "Steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".013, .017, .026, .035, .045, .056",
         "Gauge Name" : "Medium",
         "Material" : "92/8 Phosphor Bronze",
         "String Count" : "6",
         "Treatment" : "Anti-Corrosion"
      },
      "hide" : true,
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.martinguitar.com/strings/authentic-acoustic/martin-authentic-acoustic-lifespan-2.0-guitar-strings-92-8-phosphor-bronze.html",
      "make" : "Martin",
      "model" : "AA Lifespan 2.0 MA550T",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".010, .014, .023, .030, .039, .047",
         "Gauge Name" : "Extra Light",
         "Material" : "Phosphor Bronze",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.daddario.com/products/guitar/acoustic-guitar/phosphor-bronze/ej15-phosphor-bronze-acoustic-guitar-strings-extra-light-10-47/item/daddario-ej15-phosphor-bronze-acoustic-guitar-strings-extra-light-10-47-733/",
      "make" : "D’Addario",
      "model" : "EJ15",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".012, .016, .024, .032, .042, .053",
         "Gauge Name" : "Light",
         "Material" : "Phosphor Bronze",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.daddario.com/products/guitar/acoustic-guitar/phosphor-bronze/ej16-phosphor-bronze-acoustic-guitar-strings-light-12-53/",
      "make" : "D’Addario",
      "model" : "EJ16",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".013, .017, .026, .035, .045, .056",
         "Gauge Name" : "Medium",
         "Material" : "Phosphor Bronze",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.daddario.com/products/guitar/acoustic-guitar/phosphor-bronze/ej17-phosphor-bronze-acoustic-guitar-strings-medium-13-56/",
      "make" : "D’Addario",
      "model" : "EJ17",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Coating" : "XT",
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".010, .014, .023, .030, .039, .047",
         "Gauge Name" : "Extra Light",
         "Material" : "Phosphor Bronze",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.daddario.com/products/guitar/acoustic-guitar/xt-phosphor-bronze/xtapb1047-xt-acoustic-phosphor-bronze-extra-light-10-47/",
      "make" : "D’Addario",
      "model" : "XTAPB1047",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Coating" : "XT",
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".012, .016, .024, .032, .042, .053",
         "Gauge Name" : "Light",
         "Material" : "Phosphor Bronze",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.daddario.com/products/guitar/acoustic-guitar/xt-phosphor-bronze/xtapb1253-xt-acoustic-phosphor-bronze-light-12-532/",
      "make" : "D’Addario",
      "model" : "XTAPB1253",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Coating" : "XT",
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".013, .017, .026, .035, .045, .056",
         "Gauge Name" : "Medium",
         "Material" : "Phosphor Bronze",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "acoustic guitar",
      "link" : "https://www.daddario.com/products/guitar/acoustic-guitar/xt-phosphor-bronze/xtapb1356-xt-acoustic-phosphor-bronze-medium-13-562/",
      "make" : "D’Addario",
      "model" : "XTAPB1356",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "End" : "Ball",
         "Gauge" : ".010",
         "Material" : "Steel",
         "String Count" : "1"
      },
      "image" : true,
      "instrument" : "acoustic guitar, electric guitar",
      "link" : "https://www.daddario.com/products/guitar/single-strings/plain-steel-singles/plain-steel-singles/item/daddario-pl010-plain-steel-guitar-single-string-.010-428/",
      "make" : "D’Addario",
      "model" : "PL010",
      "notes" : [
         "acoustic guitar",
         "electric guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".045, .065, .080, .100, .132",
         "Gauge Name" : "Regular Light",
         "Material" : "Stainless Steel, Flatwound",
         "Scale" : "Super Long",
         "String Count" : "5"
      },
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.daddario.com/products/guitar/bass-guitar/xl-chromes-bass/ecb81-5sl-chromes-bass-5-string-light-45-132-super-long-scale/",
      "make" : "D’Addario",
      "model" : "ECB81-5SL",
      "notes" : [
         "bass guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".045, .065, .080, .100",
         "Gauge Name" : "Regular Light",
         "Material" : "Nickel",
         "Scale" : "Long",
         "String Count" : "4"
      },
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.daddario.com/products/guitar/bass-guitar/xl-nickel-bass/exl170-nickel-wound-bass-light-45-100-long-scale/",
      "make" : "D’Addario",
      "model" : "EXL170",
      "notes" : [
         "bass guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "Steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".045, .065, .080, .100, .130",
         "Material" : "Nickel",
         "Scale Length" : "Long",
         "String Count" : "5"
      },
      "hide" : true,
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.ernieball.com/guitar-strings/bass-strings/slinky-nickel-wound-electric-bass-strings/long-scale#P02850",
      "make" : "Ernie Ball",
      "model" : "Slinky Bass 2850",
      "notes" : [
         "bass guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Coating" : "K3™ black coating",
         "Core Wire" : "Steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".010, .013, .017, .026, .036, .046",
         "Gauge Name" : "Medium",
         "Material" : "Nickel-Plated Steel",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "electric guitar",
      "link" : "https://www.drstrings.com/product-page/black-beauties-black-colored-electric-guitar-strings-medium-10-46",
      "make" : "DR Strings",
      "model" : "Black Beauties 10-46",
      "notes" : [
         "electric guitar"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".010, .013, .017, .026, .036, .046",
         "Gauge Name" : "Regular Light",
         "Material" : "Nickel",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "electric guitar, banjo",
      "link" : "https://www.daddario.com/products/guitar/electric-guitar/xl-nickel/exl110-nickel-wound-regular-light-10-46/",
      "make" : "D’Addario",
      "model" : "EXL110",
      "notes" : [
         "electric guitar",
         "banjo"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Coating" : "XT",
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Ball",
         "Gauge" : ".010, .013, .017, .026, .036, .046",
         "Gauge Name" : "Regular Light",
         "Material" : "Nickel",
         "String Count" : "6"
      },
      "image" : true,
      "instrument" : "electric guitar, banjo",
      "link" : "https://www.daddario.com/products/guitar/electric-guitar/xt-nickel/xte1046-xt-electric-nickel-plated-steel-regular-light-10-462/item/daddario-xte1046-xt-electric-nickel-plated-steel-regular-light-electric-guitar-strings-10-46-8959/",
      "make" : "D’Addario",
      "model" : "XTE1046",
      "notes" : [
         "electric guitar",
         "banjo"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "End" : "Loop",
         "Gauge" : ".010, .015, .024, .036",
         "Gauge Name" : "Light",
         "Material" : "Phosphor Bronze",
         "String Count" : "8"
      },
      "hide" : true,
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://www.ghsstrings.com/products/11374-phosphor-bronze-mandolin/options/12146-loop-end-light",
      "make" : "GHS",
      "model" : "A250",
      "notes" : [
         "mandolin"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "End" : "Loop",
         "Gauge" : ".011, .016, .026, .040",
         "Gauge Name" : "Medium",
         "Material" : "Phosphor Bronze",
         "String Count" : "8"
      },
      "hide" : true,
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://www.ghsstrings.com/products/11374-phosphor-bronze-mandolin/options/12150-loop-end-medium",
      "make" : "GHS",
      "model" : "A270",
      "notes" : [
         "mandolin"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Loop",
         "Gauge" : ".011, .015, .026, .036",
         "Gauge Name" : "Medium",
         "Material" : "Stainless Steel, Flatwound",
         "String Count" : "8"
      },
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://www.daddario.com/products/guitar/mandolin/flatwound-mandolin/efw74-mandolin-flat-wound-medium-11-36/",
      "make" : "D’Addario",
      "model" : "EFW74",
      "notes" : [
         "mandolin"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Core Wire" : "High-carbon steel, hexagonal",
         "End" : "Loop",
         "Gauge" : ".011, .015, .026, .040",
         "Gauge Name" : "Medium",
         "Material" : "Phosphor Bronze",
         "String Count" : "8"
      },
      "image" : true,
      "instrument" : "mandolin",
      "link" : "https://www.daddario.com/products/guitar/mandolin/phosphor-bronze-mandolin/ej74-mandolin-phosphor-bronze-medium-11-40/",
      "make" : "D’Addario",
      "model" : "EJ74",
      "notes" : [
         "mandolin"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "End" : "Tie",
         "Gauge" : ".024, .030, .036, .026",
         "Material" : "Nyltech",
         "Size" : "Concert/Soprano",
         "String Count" : "4",
         "Tuning" : "AECG"
      },
      "image" : true,
      "instrument" : "soprano ukulele",
      "link" : "https://www.daddario.com/products/guitar/ukulele/nyltech-ukulele/ej88s-nyltech-ukulele-soprano/item/daddario-ej88s-nyltech-ukulele-strings-soprano-1244/",
      "make" : "D’Addario",
      "model" : "EJ88S",
      "notes" : [
         "soprano ukulele"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "End" : "Tie",
         "Gauge" : ".0205, .026, .0319, .0224",
         "Material" : "Fluorocarbon",
         "Size" : "Concert/Soprano",
         "String Count" : "4",
         "Tuning" : "AECG"
      },
      "image" : true,
      "instrument" : "soprano ukulele",
      "link" : "https://www.daddario.com/products/guitar/ukulele/pro-arte-carbon-ukulele/ej99sc-pro-arte-carbon-ukulele-soprano-concert/",
      "make" : "D’Addario",
      "model" : "EJ99SC",
      "notes" : [
         "soprano ukulele"
      ],
      "type" : "Strings"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "40 W",
         "Analog Inputs" : "1/4\", 1/8\"",
         "Analog Outputs" : "XLR balanced, 1/8\"",
         "Dimensions" : "16.5\" x 16.5\" x 12\"",
         "Input Impedance" : "1 MΩ",
         "Output Impedance" : "3.3 kΩ",
         "Serial" : "",
         "Speaker" : "10\"",
         "Weight" : "18 lbs"
      },
      "hide" : true,
      "image" : true,
      "instrument" : "bass guitar",
      "link" : "https://www.fender.com/products/rumble-40",
      "main_rig" : true,
      "make" : "Fender",
      "manuals" : {
         "Manual" : "237030_bamp_manual_all_revA.pdf"
      },
      "model" : "Rumble 40",
      "not_yet" : true,
      "notes" : [
         "bass guitar"
      ],
      "type" : "Amplifier",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "5 W",
         "Battery Compartment" : "AA x 6",
         "Dimensions" : "6-1/4\" x 5\" x 9-1/2\"",
         "Guitar Input" : "1/4\"",
         "Serial" : "03/04183",
         "Speaker" : "6\"",
         "Weight" : "6 lbs"
      },
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://pignoseamps.com/product/legendary-7-100/",
      "make" : "Pignose",
      "model" : "7-100",
      "notes" : [
         "guitar"
      ],
      "type" : "Amplifier",
      "year" : "2000s"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Battery Compartment" : "AAA x 2",
         "Battery Life" : "27 hours",
         "Dimensions" : "86 mm x 80 mm x 31 mm (3.39\" x 3.15\" x 1.22”)",
         "Line In" : "1/8\" stereo",
         "Phones" : "1/8\" stereo",
         "Weight" : "40 g (1.41 oz)"
      },
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://voxamps.com/product/amplug/",
      "make" : "VOX",
      "manuals" : {
         "Owner’s Manual" : "amPlug_30_CR_Metal.pdf"
      },
      "model" : "amPlug AC30",
      "notes" : [
         "guitar"
      ],
      "type" : "Amplifier",
      "year" : "2009"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "3 W",
         "Guitar Input" : "1/4\"",
         "Line In" : "1/8\" stereo",
         "Phones" : "1/8\" stereo",
         "Serial" : "UZA200408593",
         "Speaker" : "3\""
      },
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://www.blackstaramps.com/uk/products/fly-3",
      "make" : "Blackstar",
      "manuals" : {
         "Owner’s Manual" : "fly-handbook.pdf"
      },
      "model" : "Fly 3",
      "notes" : [
         "guitar"
      ],
      "type" : "Amplifier",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "5W",
         "Battery" : "Rechargable (USB-C)",
         "Dimensions" : "6\" x 3.75\" x 3\"",
         "Guitar Input" : "1/4\"",
         "Line In" : "1/8\" stereo",
         "Phones" : "1/8\" stereo",
         "Power" : "5 V 1 A",
         "Speakers" : "2 x 2\"",
         "Weight" : "12 oz"
      },
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://travelerguitar.com/products/ma-5-micro-amp",
      "make" : "Traveler",
      "model" : "MA-5 Micro Amp",
      "notes" : [
         "guitar"
      ],
      "type" : "Amplifier",
      "year" : "2024"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "15 W",
         "Dimensions" : "16” x 15\" x 8.5\" (406.4 mm x 381 mm x 215.9 mm)",
         "Guitar Input" : "1/4\"",
         "Line In" : "1/8\" stereo",
         "Output" : "1/4\"",
         "Serial" : "SF11L6420006862",
         "Speaker" : "8\"",
         "Weight" : "17 lbs (7.7 kg)"
      },
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://line6.com/legacy/spideriv15",
      "main_rig" : true,
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Handbook" : "Spider IV 15 Pilot's Guide - English ( Rev F ).pdf"
      },
      "model" : "Spider IV 15",
      "notes" : [
         "guitar",
         "MkI",
         "FBV Express"
      ],
      "type" : "Amplifier",
      "year" : "2015",
      "year_uncertain" : true
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "15 W x 2; battery operation 7.5 W x 2",
         "Dimensions" : "420 mm x 195 mm x 155 mm (16.5\" × 7.7\" × 6.1\")",
         "Guitar Input" : "1/4\"",
         "Line In" : "1/8\" stereo",
         "Output" : "1/4\" balanced",
         "Phones" : "1/8\" stereo",
         "Power Consumption" : "22 W",
         "Serial" : "T219990XZ",
         "Speaker" : "3.5\" (9 cm) x 2",
         "Weight" : "4.3 kg (9 lbs 8 oz)"
      },
      "featured" : true,
      "image" : true,
      "instrument" : "guitar",
      "link" : "https://usa.yamaha.com/products/musical_instruments/guitars_basses/amps_accessories/thr-ii/",
      "main_rig" : true,
      "make" : "Yamaha",
      "manuals" : {
         "Reference Manual" : "thr30ii_en_rm_c0.pdf"
      },
      "model" : "THR30II Wireless",
      "notes" : [
         "guitar",
         "Relay G10"
      ],
      "type" : "Amplifier",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.guyker.com/products/1-piece-metal-pure-copper-potentiometer-knob-inner-diameter-6mm-for-electric-guitar-or-bass-in-five-colors?variant=43538741166258",
      "make" : "Guyker",
      "model" : "CKB005",
      "notes" : [
         "volume/tone knobs"
      ],
      "type" : "Guitar Accessory",
      "year" : "2024"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "link" : "https://kahlerusa.com/product/stringlock-pro/",
      "make" : "Kahler",
      "model" : "Deluxe Stringlock",
      "notes" : [
         "string lock",
         "black krome",
         "Killer 2710",
         "broke"
      ],
      "type" : "Guitar Accessory",
      "year" : "1991"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://kahlerusa.com/product/2700-series-fulcrum-tremolo-system/",
      "make" : "Kahler",
      "manuals" : {
         "Brochure" : "Fulcrum-Systems.jpg",
         "Installation Guide" : "Double locking tremolo installation instructions.pdf"
      },
      "model" : "Killer 2710",
      "notes" : [
         "locking tremolo",
         "not a Spyder",
         "Standard Stringlock"
      ],
      "type" : "Guitar Accessory",
      "year" : "1991"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://kahlerusa.com/product/standard-stringlock/",
      "make" : "Kahler",
      "manuals" : {
         "Brochure" : "stringlocks-locknuts.jpg",
         "Installation Guide" : "X-5513-5514W.gif"
      },
      "model" : "Standard Stringlock",
      "notes" : [
         "string lock",
         "black krome",
         "Killer 2710"
      ],
      "type" : "Guitar Accessory",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Connector" : "1/4\" stereo",
         "Cord" : "11' (3.4 m) (OFC litz wire, left-side exit)",
         "Driver Diameter" : "40 mm",
         "Frequency Response" : "5 - 28000 Hz",
         "Impedance" : "60 Ω",
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
         "Connector" : "1/8\" stereo (gold-plated)",
         "Cord" : "Coiled 1-3 m long single-sided OFC litz cord",
         "Driver Diameter" : "40 mm",
         "Frequency Range" : "5 - 30000 Hz",
         "Impedance" : "45 Ω at 1 kHz",
         "Power handling capacity" : "1,000 mW",
         "Sensitivity" : "106 dB",
         "Type" : "Closed-back dynamic",
         "Weight" : "Approx. 260 g (9 3/16 oz) (without cord)"
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
         "Frequency Range" : "22 - 17500 Hz",
         "Impedance" : "17 Ω at 1 kHz",
         "Net Weight" : "30 g (1 oz)",
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
      "current_rack" : true,
      "detail" : {
         "Analog Inputs" : "1/4\" TRS x 8, XLR/TRS combo x 2",
         "Analog Outputs" : "1/4\" TRS x 8, 1/4\" TRS main x 2, 1/4\" TRS monitor x 2",
         "Computer Interface" : "FireWire 400 x 2",
         "Converters" : "24-bit",
         "Digital Inputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Digital Outputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Dimensions" : "1U",
         "MIDI" : "In/Out",
         "Phones" : "1/4\" stereo",
         "Sample Rates" : "44.1, 48, 88.2, 96 kHz",
         "Serial" : "8282153750",
         "Sync" : "In/Out, Word clock, ADAT sync, SMPTE I/O"
      },
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
      "detail" : {
         "Analog Inputs" : "1/4\"",
         "Analog Outputs" : "1/8\" stereo"
      },
      "image" : true,
      "link" : "https://www.ikmultimedia.com/products/irig/",
      "make" : "IK Multimedia",
      "model" : "iRig",
      "type" : "Interface",
      "year" : "2011"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "detail" : {
         "Computer Interface" : "USB-B",
         "Dimensions" : "11 cm x 7 cm x 4.4 cm (4.3\" x 2.7\" x 1.73\")",
         "MIDI" : "In/Out x 4",
         "Serial" : "MPU04150700109",
         "Weight" : "0.323 kg (0.71 lbs)"
      },
      "image" : true,
      "link" : "https://www.midiplus.com.tw/en/product-detail/MIDI4X4/",
      "make" : "MIDIPLUS",
      "manuals" : {
         "Owner’s Manual" : "MIDIPLUS_Manual_MIDI4x4_EN_V1.0.pdf"
      },
      "model" : "MIDI 4X4",
      "notes" : [
         "MIDI interface"
      ],
      "type" : "Interface",
      "year" : "2016"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "detail" : {
         "Computer Interface" : "USB-B",
         "MIDI" : "Out x 2",
         "Serial" : "2105084"
      },
      "image" : true,
      "link" : "https://www.m-audio.com/products/browse/category/keyboards-and-controllers",
      "make" : "M-Audio",
      "manuals" : {
         "Manual" : "Oxygen8.pdf"
      },
      "model" : "Oxygen8",
      "notes" : [
         "USB"
      ],
      "type" : "Interface",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "detail" : {
         "Analog Inputs" : "XLR/TRS combo x 8",
         "Analog Outputs" : "1/4\" TRS x 10",
         "Computer Interface" : "USB-B",
         "Converters" : "24-bit",
         "Digital Inputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Digital Outputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Dimensions" : "482 mm x 45 mm (1U) x 286 mm (19\" x 1.73\" (1U) x 11.26”)",
         "MIDI" : "In/Out",
         "Phones" : "1/4\" stereo",
         "Sample Rates" : "44.1, 48, 88.2, 96, 176.4, 192 kHz",
         "Serial" : "V96613100879",
         "Sync" : "Out, Word clock",
         "Weight" : "3.27kg (7.21lbs)"
      },
      "image" : true,
      "link" : "https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-18i20",
      "main_rig" : true,
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
      "detail" : {
         "Analog Inputs" : "XLR/TRS combo x 2",
         "Analog Outputs" : "1/4\" TRS x 2",
         "Computer Interface" : "USB-C",
         "Converters" : "24-bit",
         "Dimensions" : "175 mm x 47.5 mm x 99 mm (6.89\" x 1.87\" x 3.89”)",
         "Phones" : "1/4\" stereo",
         "Sample Rates" : "44.1, 48, 88.2, 96, 176.4, 192 kHz",
         "Serial" : "Y8Y8R4X0CAB486",
         "Weight" : "470g (1.04lbs)"
      },
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
      "current_rack" : true,
      "detail" : {
         "Analog Inputs" : "Stereo 1/4\" TRS balanced x 4, stereo RCA phono",
         "Analog Outputs" : "Stereo 1/4\" TRS balanced x 8",
         "Dimensions" : "3.2” x 13.5” x 5.9” (81 mm x 343 mm x 150 mm)",
         "Phones" : "1/4\" stereo x 2",
         "Serial" : "2034070CWFU0456",
         "Weight" : "3.5 lbs (1.6 kg)"
      },
      "image" : true,
      "link" : "https://mackie.com/products/big-knob-series-monitor-controllers-interfaces",
      "main_rig" : true,
      "make" : "Mackie",
      "manuals" : {
         "Operation Guide" : "big_knob_studio_command_system.pdf",
         "Quick Start Guide" : "big_knob.pdf"
      },
      "model" : "Big Knob",
      "type" : "Live Audio",
      "year" : "2014"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "detail" : {
         "Amplifier" : "20W x 2",
         "Analog Inputs" : "Stereo 1/4\", stereo RCA phono",
         "Converters" : "24-bit",
         "Digital Inputs" : "optical, coax",
         "Dimensions" : "170 mm x 261 mm x 280 mm (6 3/4\" x 10 5/16\" x 11 1/16”) x 2",
         "Frequency Range" : "50 - 22000 Hz",
         "Input Impedance" : "18 MΩ",
         "Phones" : "1/4\" stereo",
         "Sample Rates" : "32, 44.1, 48, 96 kHz",
         "Serial" : "ZR32193",
         "Speaker" : "12 cm (4 3/4”), 4 cm (1 5/8”)",
         "Weight" : "4.5 kg (9 lbs 15 oz) x 2"
      },
      "image" : true,
      "make" : "Edirol",
      "manuals" : {
         "Owner’s Manual" : "MA-20D_egfis2.pdf"
      },
      "model" : "MA-20D",
      "type" : "Live Audio",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "link" : "https://mackie.com/en/products/mixers/mix-series",
      "make" : "Tapco",
      "manuals" : {
         "Manual" : "MixSeries_OM.pdf"
      },
      "model" : "Mix.50",
      "type" : "Live Audio",
      "year" : "2008"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "link" : "https://peavey.com/product-category/pro-audio/mixers/compact-mixers/",
      "make" : "Peavey",
      "manuals" : {
         "Operations Guide" : "pv6_manual.pdf"
      },
      "model" : "PV 6",
      "type" : "Live Audio",
      "year" : "2006"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "250 W x 2",
         "Analog Inputs" : "XLR/TS combo x 4, stereo 1/4\" x 2, stereo RCA x 2",
         "Analog Outputs" : "Stereo 1/4\" x 2, stereo RCA",
         "Serial" : "HH01636",
         "Speaker" : "10\" (25 cm)"
      },
      "image" : true,
      "link" : "https://usa.yamaha.com/products/proaudio/pa_systems/",
      "main_rig" : true,
      "make" : "Yamaha",
      "manuals" : {
         "Owner’s Manual" : "stagepas500_en_om_d0.pdf"
      },
      "model" : "STAGEPAS 500",
      "type" : "Live Audio",
      "year" : "2011"
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
         "Connector" : "XLR-3",
         "Dimensions" : "Ø 48 x 180 mm",
         "Frequency Response" : "40 - 16000 Hz",
         "Min. Terminating Impedance" : "1 MΩ",
         "Nominal Impedance" : "350 Ω",
         "Sensitivity in free field, no load (1kHz)" : "2.7 mV/Pa",
         "Weight" : "330 g"
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
      "detail" : {
         "Adjacent Channel Rejection" : "≥ 65 dB",
         "Battery Compartment" : "AA x 2",
         "Blocking" : "≥ 70 dB",
         "Dimensions" : "82 mm x 64 mm x 24 mm",
         "Frequency Range" : "518 - 544 MHz (A)",
         "Frequency Response" : "40 - 18000 Hz",
         "Frequency Stability" : "≤±15 ppm",
         "Intermodulation Attenuation" : "≥ 65 dB",
         "Maximum SPL" : "120 dB SPL",
         "Modulation" : "Wideband FM",
         "Nominal Deviation" : "± 24 kHz",
         "Operating Time" : "> 8 h",
         "Peak Deviation" : "± 48 kHz",
         "Polar Pattern" : "Super Cardioid",
         "Power Consumption" : "~130 mA (EK 100), ≤ 170 mA (SK 100)",
         "S/N Ratio (at 1mV and peak deviation)" : "≥ 110 dB",
         "Sensitivity" : "<2.5 μV at 52 dBA (rms) S/N ratio (EK 100), 40 mV/Pa (ME-4)",
         "Serial" : "Transmitter: 163351, Receiver: 135282",
         "Squelch" : "OFF, LO: 5 dBμV, MID: 15 dBμV, HI: 25 dBμV",
         "Switching Bandwidth" : "36 MHz",
         "THD (at nominal deviation and 1 kHz)" : "≤ 0.9%",
         "Temperature Range" : "-10C - 55C",
         "Transducer Type" : "Condenser",
         "Weight" : "158 g (EK 100)"
      },
      "image" : true,
      "link" : "https://www.sennheiser.com/en-us/catalog/products/wireless-systems",
      "make" : "Sennheiser",
      "manuals" : {
         "Instructions" : "Sennheiser_Ew100_ENGG2.pdf"
      },
      "model" : "ew 122-p G2",
      "type" : "Microphone",
      "year" : "2022",
      "year_uncertain" : true
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Diaphragm" : "Makrofol",
         "Dimensions" : "Ø 23 x 260 mm",
         "Frequency Response" : "40 - 20000 Hz",
         "Load Impedance" : "≥ 200 Ω",
         "Nominal Impedance" : "200 Ω",
         "Open Circuit Voltage at 1kHz" : "1.3 mV/Pa",
         "Operating Principle" : "Pressure",
         "Output Level" : "-57 dBm",
         "Polar Pattern" : "Omnidirectional",
         "Sensitivity" : "-149 dBm",
         "Transducer Type" : "Dynamic moving coil",
         "Weight" : "256g"
      },
      "image" : true,
      "link" : "https://north-america.beyerdynamic.com/microphones.html",
      "make" : "Beyer Dynamic",
      "manuals" : {
         "Datasheet" : "Beyer M58 datasheet.pdf"
      },
      "model" : "M 58",
      "type" : "Microphone",
      "year" : "2022",
      "year_uncertain" : true
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Audio frequency Bandwidth" : "20 - 20000 Hz",
         "Bass Cut Filter" : "300 Hz -12 dB/octave",
         "Current" : "≤ 3 mA",
         "Diameter" : "54 mm",
         "Electrical Impedance" : "≤ 200 Ω",
         "Equivalent Noise Level" : "16 dB-A",
         "Gender" : "Male",
         "Length" : "165 mm",
         "Net Weight" : "530 g",
         "Polar Pattern" : "Cardioid",
         "Preattenuation Pad" : "-20 dB",
         "Recommended load impedance" : "≥ 1 MΩ",
         "Sensitivity" : "20 mV/Pa",
         "Signal to Noise" : "78 dB-A",
         "Type" : "Balanced XLR",
         "Voltage" : "44 - 52 V"
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
      "current_pedal" : true,
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "Buffered",
         "Circuit" : "Analog",
         "Controls" : "Level, Gain, Tone",
         "Dimensions" : "73 mm x 129 mm x 59 mm (2 7/8\" x 5 1/8\" x 2 3/8\")",
         "Input Impedance" : "1 MΩ",
         "Nominal Input Level" : "-20 dB",
         "Nominal Output Level" : "-20 dB",
         "Output Impedance" : "1 kΩ",
         "Power Consumption" : "20 mA",
         "Power Supply" : "9 V",
         "Serial" : "",
         "Weight" : "360 g (13 oz)"
      },
      "hide" : true,
      "image" : true,
      "link" : "https://www.boss.info/us/products/bd-2/",
      "make" : "BOSS",
      "model" : "Blues Driver BD-2",
      "not_yet" : true,
      "notes" : [
         "overdrive"
      ],
      "type" : "Pedal",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "Buffered",
         "Circuit" : "Analog",
         "DI Output" : "XLR balanced",
         "Dimensions" : "5.75\" x 4.75\" x 2.5\"",
         "Direct Output" : "1/4\"",
         "Input Impedance" : "2 MΩ",
         "Output Impedance" : "600 Ω",
         "Power Consumption" : "15 mA",
         "Power Supply" : "9 V"
      },
      "image" : true,
      "link" : "https://www.ehx.com/products/deluxe-bass-big-muff-pi",
      "make" : "Electro-Harmonix",
      "manuals" : {
         "Manual" : "deluxe-bass-big-muff-pi.pdf"
      },
      "model" : "Deluxe Bass Big Muff Pi",
      "notes" : [
         "bass fuzz"
      ],
      "type" : "Pedal",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Serial" : "X110P5604007958"
      },
      "image" : true,
      "link" : "https://line6.com/legacy/fbve",
      "make" : "Line 6",
      "manuals" : {
         "User Manual" : "FBV User Manual - English.pdf"
      },
      "model" : "FBV Express",
      "type" : "Pedal",
      "year" : "2015"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Depth" : "90 mm (3 9/16”)",
         "Height" : "43 mm (1 3/4”)",
         "Serial" : "GU 97541, ET 31580, HV 22318, GU 97537",
         "Weight" : "240 g / 9 oz",
         "Width" : "96 mm (3 13/16”)"
      },
      "image" : true,
      "link" : "https://www.boss.info/us/products/fs-5u_5l/",
      "make" : "BOSS",
      "model" : "FS-5U",
      "notes" : [
         "non-latching switch"
      ],
      "type" : "Pedal",
      "year" : "2007"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "Buffered",
         "Circuit" : "Analog",
         "Controls" : "Tone (Hi, Mid, Lo), Volume, Gain, OD/Boost",
         "Dimensions" : "2.25\" x 4.25\" x 1.25\"",
         "Distortion Gain" : "34 dB - 67 dB",
         "Gain Range" : "20 dB - 57 dB",
         "Input Impedance" : "2.4 MΩ",
         "Model Number" : "CSP033G",
         "Noise Floor" : "-100 dB",
         "Nominal Output Level" : "-17 dB",
         "Output Impedance" : "24 kΩ",
         "Power Consumption" : "4.7 mA",
         "Power Supply" : "9 V",
         "Serial" : "",
         "Weight" : "10.6 oz"
      },
      "hide" : true,
      "image" : true,
      "link" : "https://www.jimdunlop.com/mxr-gran-torino-boost-overdrive/",
      "make" : "MXR",
      "model" : "Gran Torino",
      "not_yet" : true,
      "notes" : [
         "boost overdrive"
      ],
      "type" : "Pedal",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Analog Inputs" : "1/4\" x 2, XLR, 1/4\" return x 4",
         "Analog Outputs" : "1/4\" x 2, XLR x 2, 1/4\" send x4",
         "Computer Interface" : "USB-C, USB-A, NEXUS",
         "Dimensions" : "19.4\" x 10.1\" x 3\"",
         "Expression" : "TRS x 2",
         "MIDI" : "In/Out+Thru",
         "Phones" : "1/4\" stereo",
         "Power Consumption" : "",
         "Power Supply" : "",
         "S/PDIF" : "In/Out",
         "Serial" : "",
         "Storage" : "Micro SD",
         "Weight" : ""
      },
      "featured" : true,
      "hide" : true,
      "image" : true,
      "link" : "https://line6.com/helix-stadium/",
      "main_rig" : true,
      "make" : "Line 6",
      "model" : "Helix Stadium XL",
      "not_yet" : true,
      "notes" : [
         "multi-effects"
      ],
      "type" : "Pedal",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "True",
         "Circuit" : "Analog",
         "Dimensions" : "4.5\" x 2.75\" x 2.1\"",
         "Input Impedance" : "130 kΩ",
         "Power Consumption" : "5 mA",
         "Power Supply" : "9 V"
      },
      "image" : true,
      "link" : "https://www.ehx.com/products/lizard-queen/",
      "make" : "Electro-Harmonix",
      "manuals" : {
         "Manual" : "lizard-queen-manual.pdf"
      },
      "model" : "Lizard Queen",
      "notes" : [
         "octave fuzz",
         "JHS"
      ],
      "type" : "Pedal",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "Buffered",
         "Dimensions" : "73mm x 129mm x 59mm (2 7/8\" x 5 1/8\" x 2 3/8\")",
         "Input Impedance" : "1 MΩ",
         "Loop Time" : "16 minutes",
         "Output Impedance" : "1 kΩ",
         "Power Consumption" : "50 mA",
         "Power Supply" : "9 V",
         "Serial" : "AV 20887",
         "Weight" : "420 g (15 oz)"
      },
      "image" : true,
      "link" : "https://www.boss.info/us/products/rc-2/",
      "make" : "BOSS",
      "manuals" : {
         "Owner’s Manual" : "RC-2_e2.pdf"
      },
      "model" : "Loop Station RC-2",
      "notes" : [
         "looper"
      ],
      "type" : "Pedal",
      "year" : "2006"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "Buffered",
         "Circuit" : "Analog",
         "Dimensions" : "5.75\" x 4.75\" x 2.5\"",
         "Input Impedance" : "1 MΩ",
         "Output Impedance" : "600 Ω",
         "Power Consumption" : "25 mA",
         "Power Supply" : "9 V"
      },
      "image" : true,
      "link" : "https://www.ehx.com/products/metal-muff",
      "make" : "Electro-Harmonix",
      "manuals" : {
         "Manual" : "metal-muff-manual.pdf"
      },
      "model" : "Metal Muff",
      "notes" : [
         "fuzz"
      ],
      "type" : "Pedal",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "True",
         "Circuit" : "Analog",
         "Dimensions" : "4.5\" x 2.75\" x 2.1\"",
         "Input Impedance" : "130 kΩ",
         "Power Consumption" : "3 mA",
         "Power Supply" : "9 V"
      },
      "image" : true,
      "link" : "https://www.ehx.com/products/nano-big-muff-pi",
      "make" : "Electro-Harmonix",
      "manuals" : {
         "Manual" : "nano-big-muff-pi-manual.pdf"
      },
      "model" : "Nano Big Muff Pi",
      "notes" : [
         "fuzz"
      ],
      "type" : "Pedal",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Analog Inputs" : "1/4”, XLR, 1/4” return x 2",
         "Analog Outputs" : "Stereo 1/4\" x 2, stereo XLR, 1/4\" send",
         "Computer Interface" : "USB-B",
         "Digital Outputs" : "S/PDIF RCA coaxial",
         "Dimensions" : "21.5\" x 10\" x 4.75\"",
         "Guitar Input" : "1/4\", Variax",
         "Line In" : "1/8\" stereo",
         "MIDI" : "In/Out+Thru",
         "Phones" : "1/4\" stereo",
         "Power Consumption" : "2 A",
         "Power Supply" : "9 V",
         "Serial" : "X3L1S5937000703",
         "Weight" : "8.4 lbs"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://line6.com/legacy/podx3live",
      "main_rig" : true,
      "make" : "Line 6",
      "manuals" : {
         "Advanced Guide" : "POD X3 Advanced Guide - English ( Rev E ).pdf",
         "Model Gallery" : "POD X3 Model Gallery - English ( Rev B ).pdf"
      },
      "model" : "POD X3 Live",
      "notes" : [
         "multi-effects"
      ],
      "type" : "Pedal",
      "year" : "2010"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Analog Inputs" : "1/4\"",
         "Analog Outputs" : "1/4\"",
         "Audio Channels" : "Mono",
         "Bypass" : "True",
         "Circuit" : "Analog",
         "Controls" : "Distortion, Filter, Volume",
         "Dimensions" : "3.5\" x 4\" x 2.5\"",
         "Power Consumption" : "1.6 mA",
         "Power Supply" : "9 V",
         "Serial" : "",
         "Weight" : "2 lbs"
      },
      "hide" : true,
      "image" : true,
      "link" : "https://actentertainment.com/rat-2-distortion-pedal/",
      "make" : "ProCo",
      "model" : "Rat 2",
      "not_yet" : true,
      "notes" : [
         "distortion"
      ],
      "type" : "Pedal",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "hide" : true,
      "link" : "https://sweetfootpedals-com.3dcartstores.com/Power-Manager-for-Line6-Variax-Line6-XPS--Handmade-USA_p_19.html",
      "make" : "Sweet Foot",
      "model" : "SchwartzPower",
      "not_yet" : true,
      "notes" : [
         "Variax power",
         "custom with additional A/B switch"
      ],
      "type" : "Pedal",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Dimensions" : "9.25\" x 2.76\" x 3.94\""
      },
      "image" : true,
      "link" : "https://www.quiklok.com/product/vp-2611-mono-volume-pedal/",
      "make" : "Quick-Lok",
      "model" : "VP-2611",
      "notes" : [
         "volume"
      ],
      "type" : "Pedal",
      "year" : "2016"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Battery Life" : "1500 Hours",
         "Current @9 V" : "160 µA",
         "Magnet" : "Ceramic and Steel",
         "Maximum Supply" : "27V DC",
         "Output Impedance" : "10 MΩ",
         "Output Noise (60 Hz)" : "-107 (single-coil), -109 (dual-coil)",
         "Output Voltage (finger, thumb)" : "finger, thumb: 1.00 V (single-coil), 2.00 V (dual-coil); thump: 3.00 V (single-coil), 4.50 V (dual-coil)",
         "Resonant Frequency" : "5.40 kHz (single-coil), 2.50 kHz (dual-coil)"
      },
      "image" : true,
      "link" : "https://www.emgpickups.com/40tw.html",
      "make" : "EMG",
      "model" : "40TW",
      "type" : "Pickup",
      "year" : "2021"
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
      "detail" : {
         "Bobbin Material" : "Fiber",
         "DC Resistance" : "Neck: 6.26 kΩ, Middle: 6.34 kΩ, Bridge: 6.43 kΩ",
         "Inductance" : "Neck: 2.4 H, Middle: 2.5 H, Bridge: 2.63 H",
         "Lead Wire" : "Cloth-covered",
         "Magnet" : "Alnico 5",
         "Magnet Wire" : "Formvar-coated",
         "Output" : "Moderate (3 out of 5)",
         "Pickup Configuration" : "SSS",
         "Pole Pieces" : "Staggered hand-beveled",
         "Style" : "Custom Shop"
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
      "category" : "Hardware",
      "image" : true,
      "link" : "https://shadowelectronics.com/products/shadow-nanoflex-undersaddle-pickup",
      "make" : "Shadow",
      "model" : "Nanoflex",
      "notes" : [
         "undersaddle pickup"
      ],
      "type" : "Pickup",
      "year" : "2018"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Dimensions" : "12.28\" x 2.12\" x 1\" (5.74\" x 2.24\" x 1.24\" power supply)",
         "Outputs" : "9V 500mA (7); 9V 500mA/12V 375 mA/18V 250mA; 9V/12V 3A (2); USB-C 5V 1.5A (1); 24V thru, center-positive (1)",
         "Power Supply" : "24V 4A / 96W",
         "Serial" : "",
         "Weight" : "0.93lbs"
      },
      "hide" : true,
      "image" : true,
      "link" : "https://www.walrusaudio.com/collections/canvas-power-supplies/products/canvas-power-hp-plus?variant=46372434149611",
      "make" : "Walrus Audio",
      "manuals" : {
         "Manual" : "Canvas_Power_HP_Plus_Digital_Manual.pdf"
      },
      "model" : "Canvas Power HP+",
      "not_yet" : true,
      "notes" : [
         "pedal power"
      ],
      "type" : "Power",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_pedal" : true,
      "detail" : {
         "Dimensions" : "6.5\" x 1.97\" x 1.5\"",
         "Outputs" : "11 isolated: (6) 9 V 100 mA; (2) 9 V 400 mA; (1) 12 V 100 mA; (1) 18 V 100 mA; (1) 5 V 2 A (USB)",
         "Power Supply" : "240 V 400 mA",
         "Weight" : "1.18 lbs"
      },
      "image" : true,
      "make" : "Godtone",
      "model" : "GD-02",
      "notes" : [
         "pedal power"
      ],
      "type" : "Power",
      "year" : "2024"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "image" : true,
      "link" : "https://furmanpower.com/pro-av-power/",
      "make" : "Furman",
      "manuals" : {
         "Owner’s Manual" : "SERIES_II_15AMP_manual.pdf"
      },
      "model" : "PM-8 II",
      "notes" : [
         "power conditioner",
         "GN-LED"
      ],
      "type" : "Power",
      "year" : "2005"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Analog Inputs" : "1/4\"",
         "Analog Outputs" : "1/4\", XLR balanced",
         "Power Consumption" : "2 A",
         "Power Supply" : "9 V"
      },
      "image" : true,
      "link" : "https://line6.com/support/page/kb/legacy-products/variax-guitars-bass-workbench/variax-xps-amp-vdi-cable-faqs-r511/",
      "make" : "Line 6",
      "model" : "XPS-AB",
      "type" : "Power",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Analog Inputs" : "1/4\"",
         "Analog Outputs" : "1/4\"",
         "Power Consumption" : "2 A",
         "Power Supply" : "9 V"
      },
      "image" : true,
      "link" : "https://line6.com/support/page/kb/legacy-products/variax-guitars-bass-workbench/variax-xps-amp-vdi-cable-faqs-r511/",
      "make" : "Line 6",
      "model" : "XPS-DI",
      "type" : "Power",
      "year" : "2003"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "image" : true,
      "link" : "https://furmanpower.com/product/led-rear-rack-gooseneck-lamp/",
      "make" : "Furman",
      "model" : "GN-LED",
      "type" : "Rack Hardware",
      "year" : "2006"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
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
      "current_pedal" : true,
      "detail" : {
         "Attachments" : "Dual Lock",
         "Dimensions" : "34\" x 12.5\" x 1.5\" (front), 2.5\" (back)",
         "Material" : "Aluminum",
         "Mods" : "IEC MOD, SUM MOD2, 4X MOD",
         "Serial" : ""
      },
      "hide" : true,
      "image" : true,
      "link" : "https://www.templeaudio.com/templeboards",
      "make" : "Temple Audio",
      "manuals" : {
         "4X MOD Setup Guide" : "4X_Mod_Setup_Guide.pdf",
         "SUM MOD Setup Guide" : "Sum_Mod_Setup_Guide.pdf"
      },
      "model" : "Templeboard TRIO 43",
      "not_yet" : true,
      "notes" : [
         "temple red"
      ],
      "type" : "Rack Hardware",
      "year" : "2025"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "image" : true,
      "link" : "https://www.korg.com/us/products/tuners/cm_300/index.php",
      "make" : "Korg",
      "model" : "CM-300",
      "notes" : [
         "DTR-2000",
         "clip-on"
      ],
      "type" : "Tuner",
      "year" : "2023"
   },
   {
      "category" : "Hardware",
      "current_rack" : true,
      "detail" : {
         "Analog Inputs" : "1/4\" x 3 (two channels)",
         "Analog Outputs" : "1/4\"",
         "Detection Accuracy" : "±0.1 cent",
         "Detection Range" : "A0 (27.5 Hz)–C8 (4186 Hz)",
         "Dimensions" : "18.94\" x 4.45\" x 1.81\"",
         "Power Consumption" : "75 mA",
         "Reference Pitch" : "A4=438-455 Hz",
         "Scale" : "12-note equal temperament",
         "Serial" : "13751",
         "Weight" : "3.09 lbs"
      },
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
      "detail" : {
         "Battery" : "CR2032",
         "Detection Accuracy" : "±0.1 cent",
         "Detection Range" : "A0 (27.5 Hz)–C8 (4186 Hz)",
         "Reference Pitch" : "A4=436-445 Hz",
         "Scale" : "12-note equal temperament",
         "Weight" : "0.99 oz"
      },
      "image" : true,
      "link" : "https://www.korg.com/us/products/tuners/sledgehammer_pro/",
      "make" : "Korg",
      "manuals" : {
         "Owner’s Manual" : "SledgehammerPro_OM_EFGSJ2.pdf"
      },
      "model" : "Sledgehammer Pro",
      "notes" : [
         "clip-on"
      ],
      "type" : "Tuner",
      "year" : "2019"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Back Material" : "High Pressure Laminate",
         "Battery Compartment" : "9 V",
         "Body Size" : "D-14 Fret",
         "Finish Top" : "Satin",
         "Fret Count" : "20",
         "Location" : "Nazareth, Pennsylvania, USA",
         "Neck Joins Body At" : "14th Fret",
         "Neck Material" : "Plywood",
         "Nut Material" : "Corian",
         "Pickups" : "Fishman Ellipse Matrix Blend",
         "Production Year" : "February 2000",
         "Scale Length" : "25.4\"",
         "Serial" : "728931",
         "Side Material" : "High Pressure Laminate",
         "Top Color" : "Natural",
         "Top Material" : "Sitka Spruce",
         "Truss Rod" : "Adjustable, 5 mm Allen Nut"
      },
      "image" : true,
      "link" : "https://www.martinguitar.com/series-x-series.html",
      "make" : "Martin",
      "model" : "DX1",
      "notes" : [
         "XTAPB1356 (2023-10-19)",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-DBR",
         "Ellipse Matrix Blend"
      ],
      "strings" : "XTAPB1356",
      "type" : "Acoustic Guitar",
      "year" : "2000"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Battery Compartment" : "2 x AAA",
         "Body Depth" : "1.75\"",
         "Body Material" : "Mahogany",
         "Body Width" : "10.75\"",
         "Color" : "Mahogany",
         "Electronics" : "Active preamp, volume/treble/bass, 1/8\" aux in, 1/8\" headphone out, tuner",
         "Fingerboard Material" : "Black Walnut",
         "Finish" : "Satin",
         "Fret Count" : "22",
         "Frets" : "Medium Profile",
         "Inputs" : "1/8\" stereo",
         "Neck Material" : "Mahogany",
         "Neck Radius" : "9.5\"",
         "Neck Width at Nut" : "1.75\"",
         "Pickups" : "Shadow Nanoflex",
         "Scale Length" : "25.5\"",
         "Serial" : "M3-02910",
         "Total Depth" : "2.13\"",
         "Total Length" : "30\"",
         "Truss Rod" : "Adjustable",
         "Tuning Machines" : "Black Anodized Closed Gear",
         "Weight" : "4 lbs 3 oz",
         "dB at 1'" : "Peak: 93 db, Average: 80 db"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://travelerguitar.com/products/escape-mark-iii?variant=39754219192405",
      "main_rig" : true,
      "make" : "Traveler",
      "manuals" : {
         "Manual" : "Escape_Mark_3_Manual.pdf"
      },
      "model" : "Escape Mark III",
      "notes" : [
         "XTAPB1047 (2024-08-15)",
         "Acetal Standard",
         "S1",
         "C1K",
         "Polypro (black)",
         "Nanoflex"
      ],
      "strings" : "XTAPB1047",
      "type" : "Acoustic Guitar",
      "year" : "2018"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Battery Compartment" : "2 x AAA",
         "Body Depth" : "1.75\"",
         "Body Material" : "Mahogany",
         "Body Width" : "10.75\"",
         "Color" : "Black Satin",
         "Electronics" : "Active preamp, volume/treble/bass, 1/8\" aux in, 1/8\" headphone out, tuner",
         "Fingerboard Material" : "Black Walnut",
         "Finish" : "Satin",
         "Fret Count" : "22",
         "Frets" : "Medium Profile",
         "Inputs" : "1/8\" stereo",
         "Neck Material" : "Mahogany",
         "Neck Radius" : "9.5\"",
         "Neck Width at Nut" : "1.75\"",
         "Pickups" : "Shadow Nanoflex",
         "Scale Length" : "25.5\"",
         "Serial" : "M3-07576",
         "Total Depth" : "2.13\"",
         "Total Length" : "30\"",
         "Truss Rod" : "Adjustable",
         "Tuning Machines" : "Black Anodized Closed Gear",
         "Weight" : "4 lbs 3 oz",
         "dB at 1'" : "Peak: 93 db, Average: 80 db"
      },
      "image" : true,
      "link" : "https://travelerguitar.com/products/escape-mark-iii?variant=40446336335957",
      "make" : "Traveler",
      "manuals" : {
         "Manual" : "Escape_Mark_3_Manual.pdf"
      },
      "model" : "Escape Mark III (black)",
      "not_mine" : true,
      "notes" : [
         "XTAPB1047",
         "Nanoflex"
      ],
      "strings" : "XTAPB1047",
      "type" : "Acoustic Guitar",
      "year" : "2024"
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
         "Back / Side Finish" : "Gloss",
         "Back Inlay Material" : "Multi-Stripe",
         "Back Material" : "East Indian Rosewood",
         "Back Purfling/Strip" : "Zig-Zag",
         "Battery Compartment" : "9 V",
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
         "Fingerboard Inlays" : "Diamonds and Squares Long Pattern",
         "Fingerboard Width at 12th Fret" : "2 1/8\"",
         "Fingerboard Width at Nut" : "1 3/4\"",
         "Finish Neck" : "Satin",
         "Finish Top" : "Gloss",
         "Fret Count" : "20",
         "Headplate Logo Style" : "Script Old Style Overlay",
         "Headplate Material" : "East Indian Rosewood",
         "Headstock Shape" : "Solid with Square Taper and Diamond",
         "Heelcap" : "Grained Ivoroid",
         "Location" : "Nazareth, Pennsylvania, USA",
         "Neck Color" : "Dark Mahogany",
         "Neck Joins Body At" : "14th Fret",
         "Neck Material" : "Select Hardwood",
         "Neck Shape" : "Modified Low Oval",
         "Neck Taper" : "High-Performance Taper",
         "Nut Material" : "Bone",
         "Pickguard" : "Tortoise Pattern",
         "Production Year" : "October 2012",
         "Rosette" : "Style 28 Multi-Stripe",
         "Saddle Material" : "Compensated White Tusq",
         "Saddle Radius" : "16\"",
         "Scale Length" : "25.4\"",
         "Serial" : "1633689",
         "Side Dots" : "White",
         "Side Material" : "East Indian Rosewood",
         "Top Color" : "Aging Toner",
         "Top Inlay Material" : "Bold Herringbone",
         "Top Material" : "Spruce",
         "Truss Rod" : "Adjustable, 5mm Allen Nut",
         "Tuning Knobs" : "Butterbean",
         "Tuning Machines" : "Nickel Open Gear"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.martinguitar.com/guitars/discontinued/HD-28E-Retro.html",
      "main_rig" : true,
      "make" : "Martin",
      "model" : "HD-28E Retro",
      "notes" : [
         "XTAPB1356 (2023-10-19)",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-DBR",
         "445",
         "F1 Aura+"
      ],
      "strings" : "XTAPB1356",
      "type" : "Acoustic Guitar",
      "year" : "2012"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Back Material" : "Laminated Sapele",
         "Binding" : "Aged White",
         "Body Depth" : "3.75\" (95 mm)",
         "Body Finish" : "Semi-Gloss",
         "Body Length" : "17.8\" (45.2 cm)",
         "Body Material" : "Sapele",
         "Body Style" : "Parlor",
         "Bracing Pattern" : "X Bracing",
         "Bridge" : "Walnut with Compensated Saddle",
         "Color" : "Frontier Stain",
         "Fingerboard Inlays" : "White Pearloid Dot",
         "Fingerboard Material" : "Walnut",
         "Fingerboard Radius" : "12\"",
         "Fret Count" : "18",
         "Frets" : "Vintage",
         "Headstock Shape" : "1950’s Gretsch 3x3",
         "Model Number" : "2711020579",
         "Neck Finish" : "Semi-Gloss",
         "Neck Material" : "Nato",
         "Neck Shape" : "“C” Shape",
         "Nut Material" : "Synthetic Bone",
         "Nut Width" : "1.69\" (43 mm)",
         "Pickguard" : "1-Ply Aged White with Black “G”",
         "Rosette" : "White/Black Rings",
         "Scale Length" : "24\"",
         "Serial" : "IWA2425089",
         "Side Material" : "Laminated Sapele",
         "Top Material" : "Laminated Sapele",
         "Truss Rod" : "Adjustable, 4mm Allen Nut",
         "Tuning Machines" : "Open-Gear Die-Cast"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.gretschguitars.com/gear/build/acoustic/jim-dandy-parlor/2711020579",
      "main_rig" : true,
      "make" : "Gretsch",
      "model" : "Jim Dandy Parlor",
      "notes" : [
         "XTAPB1253",
         "Acetal Standard",
         "S1",
         "C1K",
         "M25-DBR",
         "Mini Acoustic Guitar Gig Bag"
      ],
      "strings" : "XTAPB1253",
      "type" : "Acoustic Guitar",
      "year" : "2024"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Finish" : "Satin Body Finish",
         "Body Material" : "Laminated Sapele",
         "Body Style" : "3/4 size",
         "Bracing Pattern" : "X Bracing",
         "Bridge" : "Rosewood with Compensated Saddle",
         "Fret Count" : "18",
         "Neck Finish" : "Satin Neck Finish",
         "Neck Material" : "Nato",
         "Nut Material" : "Synthetic Bone",
         "Nut Width" : "1.69\" (43 mm)",
         "Scale Length" : "23.3\" (592 mm)",
         "Serial" : "OI14087311",
         "Top Material" : "Laminated Agathis",
         "Truss Rod" : "Adjustable",
         "Tuning Machines" : "Die-Cast Machine Heads"
      },
      "image" : true,
      "link" : "https://www.fender.com/en-US/acoustic-guitars/",
      "make" : "Fender",
      "model" : "MA-1",
      "not_mine" : true,
      "notes" : [
         "XTAPB1253 (2023-10-16)"
      ],
      "strings" : "XTAPB1253",
      "type" : "Acoustic Guitar",
      "year" : "2014"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Finish" : "Gloss",
         "Body Material" : "Mahogany",
         "Color" : "Ebony",
         "Fingerboard Inlays" : "Dot",
         "Fret Count" : "20",
         "Frets" : "Medium Jumbo",
         "Model Number" : "DR-100 EB",
         "Neck Joint" : "Dovetail; Glued-in",
         "Neck Profile" : "SlimTaper C-profile",
         "Nut Width" : "43.0 mm (1.692”)",
         "Pickguard" : "1-Ply Black PVC",
         "Scale Length" : "647.7 mm (25.5”)",
         "Serial" : "20121301028",
         "Top Material" : "Select Spruce",
         "Truss Rod" : "2-Way Adjustable",
         "Tuning Machines" : "Premium Die Cast"
      },
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/p/Acoustic-Guitar/EPIKWM803/Ebony",
      "make" : "Epiphone",
      "model" : "Songmaker DR-100",
      "not_mine" : true,
      "notes" : [
         "XTAPB1356 (2024-03-16)"
      ],
      "strings" : "XTAPB1356",
      "type" : "Acoustic Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Fret Count" : "19",
         "Serial" : "27726-680"
      },
      "image" : true,
      "link" : "https://www.framus-vintage.de/en/Other/Banjos/",
      "make" : "Framus",
      "model" : "Tenor Banjo",
      "notes" : [
         "EXL110 (2021-09-03)",
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
         "Battery Compartment" : "2 x 9 V w/Screw Plate",
         "Binding" : "MOP Multi-Ply Black/White/Black",
         "Body Material" : "Mahogany",
         "Bridge" : "Schecter Custom Bass String Thru",
         "Bridge Pickup" : "EMG 40TW",
         "Color" : "See-Thru Black Satin (STBLS)",
         "Construction" : "Neck-Thru w/Ultra Access",
         "Controls" : "2 Volume (Push-Pull), Active EMG 3-Band EQ",
         "Fingerboard Inlays" : "MOP Gothic Crosses",
         "Fingerboard Material" : "Ebony",
         "Fingerboard Radius" : "16\" (406mm)",
         "Fret Count" : "24",
         "Frets" : "X-Jumbo",
         "Hardware Color" : "Black Chrome",
         "Item Number" : "1918",
         "Knobs" : "Metal Knurled w/ Set Screw",
         "Location" : "South Korea",
         "Neck @ 12th Fret" : ".866\" (22 mm)",
         "Neck @ 1st Fret" : ".787\" (20 mm)",
         "Neck Material" : "Multi-Ply Maple/Walnut",
         "Neck Pickup" : "EMG 40TW",
         "Neck Shape" : "Thin “C”",
         "Nut Material" : "Graph Tech XL Black Tusq",
         "Nut Width" : "1.771\" (45 mm)",
         "Production Year" : "2021",
         "Scale Length" : "35\" (889 mm)",
         "Serial" : "W21052189",
         "Strings" : "Ernie Ball 5 String Super Long #2850 (.045-.130)",
         "Top Contour" : "Arched Top",
         "Top Material" : "Quilted Maple",
         "Truss Rod" : "2-Way Adjustable, 5/32\" (4mm) Allen Nut",
         "Tuners" : "Grover"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.schecterguitars.com/Hellraiser-Extreme-5?quantity=1&custitem_color_master_list=438",
      "main_rig" : true,
      "make" : "Schecter",
      "model" : "Hellraiser Extreme-5",
      "notes" : [
         "ECB81-5SL (2023-10-03)",
         "Tortex Standard",
         "MSS2-4-BLK",
         "Straplok",
         "SGR-6B",
         "40TW"
      ],
      "strings" : "ECB81-5SL",
      "type" : "Bass Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Basswood",
         "Bridge" : "Standard (19 mm string spacing)",
         "Bridge Pickup" : "P4",
         "Controls" : "Tone, Volume, Balancer",
         "Fingerboard Inlays" : "Pearl dot and side dots",
         "Fingerboard Material" : "Rosewood",
         "Fret Count" : "22",
         "Frets" : "Medium",
         "Hardware Color" : "Chrome",
         "Knobs" : "Sure Grip II",
         "Local Serial" : "5503",
         "Location" : "FujiGen Gakki, Japan",
         "Neck Joint" : "AANJ",
         "Neck Material" : "1-Piece Maple",
         "Neck Pickup" : "J4",
         "Neck Type" : "D shape",
         "Nut Material" : "Plastic",
         "Nut Width" : "41 mm",
         "Pickup Configuration" : "PJ",
         "Production Year" : "January 1986",
         "Scale Length" : "864 mm (34”)",
         "Serial" : "A865503",
         "Truss Rod" : "Adjustable",
         "Tuning Machines" : "Hercules B"
      },
      "image" : true,
      "link" : "https://www.ibanez.com/usa/products/category/electric_basses/",
      "main_rig" : true,
      "make" : "Ibanez",
      "manuals" : {
         "Catalog (1986 model)" : "1986_Catalog_p16-17.webp",
         "Owner’s Manual (1983 model)" : "1983RoadstarII_Manual.pdf"
      },
      "model" : "Roadstar II RB650",
      "notes" : [
         "EXL170 (2023-09-30)",
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
         "Battery Compartment" : "6 x AA or 1 x 9 V",
         "Body Material" : "Alder",
         "Color" : "Sunburst",
         "Fingerboard Material" : "Rosewood",
         "Fingerboard Radius" : "10\"",
         "Fret Count" : "21",
         "Frets" : "Medium Profile",
         "Location" : "Korea",
         "Neck Material" : "Maple",
         "Nut Width" : "1.5\"",
         "Power Consumption" : "500 mA",
         "Power Supply" : "7 V",
         "Scale Length" : "34\"",
         "Serial" : "4101739",
         "Truss Rod" : "Adjustable, 4 mm Allen Nut"
      },
      "image" : true,
      "link" : "https://line6.com/legacy/variaxbass700",
      "main_rig" : true,
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Handbook" : "Variax Bass Manual - English ( Rev A ).pdf"
      },
      "model" : "Variax 700",
      "notes" : [
         "EXL170 (2023-10-18)",
         "Tortex Standard",
         "MSS3-BRN",
         "Straplok",
         "XPS-AB"
      ],
      "strings" : "EXL170",
      "type" : "Bass Guitar",
      "year" : "2004"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Solid Basswood",
         "Body Style" : "3/4 size",
         "Color" : "Awesome Blue",
         "Fingerboard Material" : "Rosewood",
         "Fret Count" : "22",
         "Neck Material" : "Hard Rock Maple",
         "Neck Style" : "Slim",
         "Pickups" : "Seymour Duncan open coil humbucker, and lipstick-style single coil",
         "Scale Length" : "22 1/2\"",
         "Serial" : "207757",
         "Truss Rod" : "Adjustable",
         "Tuners" : "Grover"
      },
      "image" : true,
      "link" : "https://www.daisyrock.com/collections/",
      "make" : "Daisy Rock",
      "model" : "Daisy Short-Scale",
      "not_mine" : true,
      "notes" : [
         "EXL110 (2023-09-30)"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2004"
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
         "Controls" : "2 Volume, 2 Tone, CTS® Potentiometers",
         "Fingerboard Inlays" : "Pearloid Trapezoid",
         "Fingerboard Material" : "Laurel",
         "Fingerboard Radius" : "304.8 mm / 12\"",
         "Finish" : "Nickel",
         "Fret Count" : "22",
         "Frets" : "Medium Jumbo",
         "Joint" : "Glued in",
         "Local Serial" : "27363",
         "Location" : "Qingdao (electric), China",
         "Neck Pickup" : "ProBucker™ 2",
         "Neck Profile" : "SlimTaper™ 60s C",
         "Nut Material" : "Graph Tech®",
         "Nut Width" : "43.0 mm (1.692”)",
         "Pickguard" : "Cream",
         "Pickup Covers" : "Nickel",
         "Pickup Selector" : "3-way Epiphone toggle",
         "Production Year" : "February 2021",
         "Scale Length" : "628.65 mm (24.75”)",
         "Serial" : "21021527363",
         "Tailpiece" : "Stopbar",
         "Top Material" : "AA Flame Maple",
         "Truss Rod" : "Adjustable, 4 mm Allen Nut",
         "Truss Rod Cover" : "“Bell Shaped”; 2-layer (Black/White); 60s-era E",
         "Tuning Machines" : "Grover® Rotomatic® 18:1"
      },
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/p/Electric-Guitar/EPINA3562/Ebony",
      "make" : "Epiphone",
      "model" : "Les Paul Standard",
      "notes" : [
         "EXL110 (2021-08-09)",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-BLK",
         "S-Locks",
         "Standard ’60s Quilt Top"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Battery Compartment" : "2 x AAA, 1 x 9 V",
         "Binding" : "6-Ply Cream/Black",
         "Body Depth" : "1.63\"",
         "Body Material" : "Carved Top Mahogany",
         "Body Width" : "10.5\"",
         "Color" : "Black",
         "Electronics" : "Active preamp, volume/tone, 1/8\" aux in, 1/8\" headphone out, clean/boost/overdrive/distortion",
         "Fingerboard Material" : "Black Walnut",
         "Finish" : "Vintage Black Matte",
         "Fret Count" : "22",
         "Frets" : "Jumbo Profile",
         "Inputs" : "1/8\" stereo",
         "Neck Material" : "Mahogany",
         "Neck Radius" : "15.75\"",
         "Neck Width at Nut" : "1.63\"",
         "Pickups" : "ESP ALH-200B Active Humbucker",
         "Scale Length" : "24.75\"",
         "Serial" : "LTD02455",
         "Total Depth" : "2.75\"",
         "Total Length" : "30\"",
         "Truss Rod" : "Adjustable",
         "Tuning Machines" : "Gold Locking",
         "Weight" : "5lbs 4oz"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://travelerguitar.com/products/ltd-ec-1?variant=39665627136085",
      "main_rig" : true,
      "make" : "Traveler",
      "manuals" : {
         "Manual" : "EC-1_Manual.pdf"
      },
      "model" : "LTD EC-1",
      "notes" : [
         "EXL110",
         "Acetal Standard",
         "S1",
         "C1K",
         "Polypro (black)"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2024"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Finish" : "Gloss",
         "Body Material" : "Mahogany",
         "Bridge" : "Epiphone LockTone™ Tune-O-Matic",
         "Bridge Pickup" : "Epiphone Alnico Classic PRO™ Bridge",
         "Color" : "Heritage Cherry",
         "Control Knobs" : "Black Top Hats with Inserts",
         "Controls" : "2 Volume, 2 Tone, CTS® Potentiometers",
         "Fingerboard Inlays" : "Trapezoid",
         "Fingerboard Material" : "Laurel",
         "Fingerboard Radius" : "304.8 mm / 12\"",
         "Finish" : "Nickel",
         "Fret Count" : "22",
         "Frets" : "Medium Jumbo",
         "Joint" : "Glued in; Set Neck",
         "Local Serial" : "30731",
         "Location" : "Qingdao (electric), China",
         "Neck Pickup" : "Epiphone Alnico Classic PRO™ Neck",
         "Neck Profile" : "60s SlimTaper™",
         "Nut Material" : "Graph Tech NuBone®",
         "Nut Width" : "43.0 mm (1.692”)",
         "Pickguard" : "5-Ply Black",
         "Pickup Selector" : "3-way Epiphone toggle",
         "Production Year" : "May 2023",
         "Scale Length" : "628.65 mm (24.75”)",
         "Serial" : "23051530731",
         "Tailpiece" : "Epiphone LockTone™ Stop Bar",
         "Truss Rod" : "Adjustable, 4 mm Allen Nut",
         "Tuning Machines" : "Epiphone Deluxe Tuners 18:1 ratio"
      },
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/p/Electric-Guitar/EPIJ1X839/Heritage-Cherry",
      "make" : "Epiphone",
      "model" : "SG Standard",
      "not_mine" : true,
      "notes" : [
         "EXL110 (2023-10-01)"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2023"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Finish" : "Gloss",
         "Bridge" : "Kahler Killer 2710 Double-Locking Tremolo w/Standard Stringlock*",
         "Color" : "Black",
         "Control Knobs" : "Guyker CKB005 Revolver Cylinders*",
         "Controls" : "Fender 250 K Potentiometers (1 Volume, 1 Push/Pull Neck Tone, 1 Middle/Bridge Tone); .022 µF capacitor*",
         "Fingerboard Inlays" : "Black Dots",
         "Fingerboard Material" : "Maple",
         "Fret Count" : "21",
         "Frets" : "Medium Jumbo (Plek’d)",
         "Jack" : "Pure Tone Multi-Contact, Black Nickel*",
         "Jack Plate" : "Black*",
         "Joint" : "Bolt-on",
         "Location" : "Samick, Korea",
         "Model Number" : "S-310B",
         "Neck Material" : "Maple",
         "Neck Plate" : "Black*",
         "Nut Dimensions" : "41.85 mm W x 8.54 mm H x 5.87 mm D, 34.01 mm E-to-E",
         "Nut Material" : "Graph Tech XL Black Tusq (model 6060-00)*",
         "Pickguard" : "3-Ply Matte Yellow/Black/Yellow*",
         "Pickup Covers" : "Solid Black Plastic*",
         "Pickup Selector" : "Fender 5-way Selector Switch, Blacked, w/Black Metal Tip; Neck Tone “pull” adds neck pickup*",
         "Pickups" : "Fender Fat 50’s*",
         "Production Year" : "1991",
         "Rear Cover" : "1-Ply Black*",
         "Scale Length" : "25.5\"",
         "Serial" : "1103087",
         "Truss Rod" : "Adjustable, 5 mm Allen Nut",
         "Truss Rod Cover" : "“Bell Shaped”; 2-Ply Black/White*",
         "Tuning Machines" : "Locking, 15:1*"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://pudge.substack.com/p/theseia-the-guitar-of-theseus",
      "main_rig" : true,
      "make" : "Epiphone",
      "model" : "Theseia",
      "no_reverb" : true,
      "notes" : [
         "EXL110 (2024-10-06)",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-BLK",
         "S-Locks",
         "GC-ELECTRIC-A",
         "Killer 2710",
         "Standard Stringlock",
         "Fat 50’s",
         "CKB005"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "1991"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Battery Compartment" : "6 x AA or 1 x 9 V",
         "Body Material" : "Basswood",
         "Color" : "Black",
         "Fingerboard Material" : "Rosewood",
         "Fingerboard Radius" : "10\"",
         "Fret Count" : "22",
         "Frets" : "Medium Profile",
         "Location" : "Korea",
         "Neck Material" : "Maple",
         "Nut Width" : "1.5\"",
         "Power Consumption" : "500 mA",
         "Power Supply" : "7V",
         "Scale Length" : "25.5”",
         "Serial" : "3058431",
         "Truss Rod" : "Adjustable, 4 mm Allen Nut"
      },
      "image" : true,
      "link" : "https://line6.com/legacy/variax500",
      "main_rig" : true,
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Handbook" : "Variax 500.pdf"
      },
      "model" : "Variax 500",
      "notes" : [
         "EXL110 (2023-11-12)",
         "Acetal Standard",
         "S1",
         "C1K",
         "M17SS-BLK",
         "S-Locks",
         "GC-ELECTRIC-A",
         "XPS-DI"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2003"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Mahogany",
         "Bridge" : "Schaller Floyd Rose Tremolo",
         "Fingerboard Material" : "Maple",
         "Fret Count" : "24",
         "Frets" : "Jumbo",
         "Location" : "Korea",
         "Neck Material" : "Rosewood",
         "Pickup Configuration" : "HSH",
         "Scale Length" : "25.5\"",
         "Serial" : "2110103",
         "Truss Rod" : "Adjustable"
      },
      "image" : true,
      "link" : "https://www.washburn.com/instrument-style/double-cut-solid-body/",
      "make" : "Washburn",
      "model" : "X40",
      "notes" : [
         "EXL110 (2023-09-30)",
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
         "Comb (color)" : "Brown",
         "Comb (finish)" : "Triple Lacquered",
         "Comb (material)" : "Pearwood",
         "Cover Plates" : "Stainless Steel",
         "Keys" : "G, Ab, A, Bb, B, C, Db, D, Eb, E, F",
         "Length" : "3.9\" (10cm)",
         "Mouthpiece (surface)" : "Pearwood",
         "Number of Holes" : "10",
         "Reed Count" : "20",
         "Reed Material" : "Brass",
         "Reed Plates (material)" : "Brass",
         "Reed Plates (surface)" : "Brass",
         "Reed Plates (thickness)" : "0.9 mm",
         "Tonal range" : "3 octaves",
         "Tuning" : "Richter",
         "Type" : "Diatonic"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.hohner.de/en/instruments/harmonicas/diatonic/marine-band/marine-band-deluxe",
      "main_rig" : true,
      "make" : "Hohner",
      "manuals" : {
         "Diatonic Tuning Charts" : "Diatonic Tuning Charts.pdf"
      },
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
         "Comb (color)" : "Black",
         "Comb (finish)" : "ABS",
         "Comb (material)" : "ABS",
         "Cover Plates" : "Stainless Steel",
         "Keys" : "G, Ab, A, Bb, B, C, Db, D, Eb, E, F, F#, HG",
         "Length" : "4.0\" (10.2 cm)",
         "Mouthpiece (surface)" : "ABS",
         "Number of Holes" : "10",
         "Reed Count" : "20",
         "Reed Material" : "Brass",
         "Reed Plates (material)" : "Brass",
         "Reed Plates (surface)" : "Brass",
         "Reed Plates (thickness)" : "0.9 mm",
         "Tonal range" : "3 octaves",
         "Tuning" : "Richter",
         "Type" : "Diatonic"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.hohner.de/en/instruments/harmonicas/diatonic/progressive/special-20",
      "main_rig" : true,
      "make" : "Hohner",
      "manuals" : {
         "Diatonic Tuning Charts" : "Diatonic Tuning Charts.pdf"
      },
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
      "detail" : {
         "Amplifier" : "20 W x 2",
         "Analog Inputs" : "1/4\" x 2",
         "Analog Outputs" : "1/4” x 2, RCA line-level x2",
         "Dimensions" : "1370 mm x 518 mm x 850 mm (53 15/16\" x 20 3/8\" x 33 7/16\")",
         "Keys" : "88 (A1 - C7)",
         "MIDI" : "In/Out/Thru",
         "Phones" : "1/4\" stereo x 2",
         "Polyphony" : "64 notes",
         "Serial" : "0606872",
         "Sound Source" : "AWM Stereo Sampling",
         "Speaker" : "16 cm x 2",
         "Weight" : "51 kg (112 lbs 7 oz)"
      },
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/pianos/arius/",
      "main_rig" : true,
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
      "detail" : {
         "Amplifier" : "2.5 W x 2",
         "Dimensions" : "945 mm x 370 mm x 128 mm (37-1/4\" x 14-5/8\" x 5-1/16”)",
         "Keys" : "66 (C1 - C6)",
         "MIDI" : "In/Out",
         "Phones" : "1/4\" stereo",
         "Polyphony" : "32 notes",
         "Power Consumption" : "10 W",
         "Serial" : "UBMJ03785",
         "Sound Source" : "XGlite, AWM Stereo Sampling (Grand Piano)",
         "Speaker" : "12 cm x 2",
         "Weight" : "4.9 kg (10 lbs 13 oz)"
      },
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
      "category" : "Instruments",
      "detail" : {
         "Armrest Dimensions" : "3 5/8\" x 11/16\" x 3/8\" (9.2 cm x 1.8 cm x 1 cm)",
         "Armrest Material" : "Michigan Koa (Silver Maple)",
         "Back / Neck / Sides Material" : "Figured Maple",
         "Binding" : "None",
         "Bridge / Fingerboard Material" : "Black Walnut",
         "Color" : "Natural Amber",
         "Depth of Body" : "1.7\" (43 mm)",
         "Fingerboard Radius" : "15.5\" (394 mm)",
         "Finish" : "Spirit Varnish",
         "Fret Count" : "19",
         "Length of Body (w/ heel)" : "12.5\" (318 mm)",
         "Location" : "Michigan, USA",
         "Nut Width" : "1 1/8\" (28 mm)",
         "Pickguard" : "Adhered Maple",
         "Pickups" : "K&K Sound Mandolin Twin",
         "Serial" : "FT180030",
         "Strings" : "Northfield LITE, Phosphor Bronze, Loop end: E (.010), A (.015), D (.024), G (.036)",
         "Tailpiece" : "Cast",
         "Top Material" : "Spruce",
         "Total Length" : "25.5\" (648 mm)",
         "Tuners" : "Gotoh",
         "Width of Body" : "10\" (254 mm)"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://www.northfieldinstruments.com/thecalhoun",
      "main_rig" : true,
      "make" : "Northfield",
      "model" : "Calhoun",
      "notes" : [
         "EFW74 (2023-10-14)",
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
         "Body" : "Resonator",
         "Fingerboard Inlay Material" : "MOP",
         "Fret Material" : "Nickel-Silver",
         "Fretboard" : "Ebony",
         "Headplate Material" : "Rosewood",
         "Location" : "Camden, NJ, USA",
         "Manufacturer" : "Vega",
         "Neck Material" : "Maple",
         "Production Year" : "Patented Sept. 23, 1914",
         "Serial" : "unnumbered"
      },
      "image" : true,
      "make" : "Wm. Schmick",
      "model" : "Lyric Banjo",
      "notes" : [
         "EJ74 (2023-10-10)"
      ],
      "strings" : "EJ74",
      "type" : "Mandolin",
      "year" : "1920s?"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Fret Count" : "16",
         "Location" : "China",
         "Serial" : "12060058"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://kamoaukuleles.myshopify.com/collections/kamoa-e3-s/products/kamoa-e3-s-soprano-red",
      "main_rig" : true,
      "make" : "Kamoa",
      "model" : "E3-S",
      "notes" : [
         "EJ99SC (2023-10-16)",
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
         "Back / Sides Material" : "Poplar",
         "Body Depth" : "2.0\"",
         "Body Length" : "9.0625\"",
         "Fingerboard Material" : "Rosewood",
         "Fingerboard Width at Neck/Body Joint" : "1.75\"",
         "Fingerboard Width at Nut" : "1.4375\"",
         "Finish" : "Matte",
         "Fret Count" : "12",
         "Length" : "20.625\"",
         "Neck Material" : "Pine",
         "Nut Material" : "Plastic",
         "Saddle Material" : "Plastic",
         "Scale Length" : "13.5\"",
         "Strap Button" : "Black x 1",
         "Strings" : "Aquila Super Nylgut®",
         "Top Material" : "Poplar",
         "Width at Lower Bout" : "7.0\"",
         "Width at Upper Bout" : "5.4375\"",
         "Width at Waist" : "4.75\""
      },
      "image" : true,
      "link" : "https://kalabrand.com/collections/graphic-top-ukadelic/products/uk-happycamper?variant=31294286659654",
      "make" : "Kala",
      "model" : "Happy Camper",
      "not_mine" : true,
      "notes" : [
         "EJ88S",
         "Soprano",
         "Ukadelic",
         "GBE-UKE-SOP"
      ],
      "strings" : "EJ88S",
      "type" : "Ukulele",
      "year" : "2024"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Back / Sides Material" : "Composite",
         "Body Depth" : "2.375\"",
         "Body Length" : "9.3125\"",
         "Color" : "Red Burst",
         "Fingerboard Material" : "Rosewood",
         "Fingerboard Width at Neck/Body Joint" : "1.6875\"",
         "Fingerboard Width at Nut" : "1.375\"",
         "Finish" : "Gloss",
         "Fret Count" : "12",
         "Neck Material" : "Mahogany",
         "Nut Material" : "Plastic",
         "Saddle Material" : "Plastic",
         "Scale Length" : "13.5\"",
         "Style" : "Dolphin",
         "Top Material" : "Philippine Mahogany",
         "Total Length" : "20.875\"",
         "Width at Lower Bout" : "6.8125\"",
         "Width at Upper Bout" : "5.0625\"",
         "Width at Waist" : "4.4375\""
      },
      "image" : true,
      "link" : "https://kalabrand.com/products/mk-sd-rdburst?_pos=5&_sid=e7e1bb13e&_ss=r",
      "make" : "Kala",
      "model" : "MK-SD/RDBURST",
      "not_mine" : true,
      "notes" : [
         "EJ88S",
         "Soprano",
         "Makala",
         "GBE-UKE-SOP"
      ],
      "strings" : "EJ88S",
      "type" : "Ukulele",
      "year" : "2000s"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Sengon",
         "Bridge Material" : "Mahogany",
         "Fingerboard Material" : "Mahogany",
         "Finish" : "High Gloss",
         "Fret Count" : "12",
         "Fret Material" : "Nickel",
         "Location" : "China",
         "Neck Material" : "Jabon",
         "Nut Material" : "ABS, White",
         "Saddle Material" : "Graph Tech NuBone XB",
         "Scale Length" : "346 mm",
         "Tuning Machines" : "Dolphin, Gold Plated"
      },
      "image" : true,
      "link" : "https://mahaloukuleles.com/instrument-types/soprano/",
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
      "category" : "Percussion Instruments",
      "detail" : {
         "Size" : "6\", 7.25\""
      },
      "image" : true,
      "main_rig" : true,
      "make" : "Adam",
      "model" : "Bongos",
      "type" : "Bongos",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "detail" : {
         "Material" : "Baltic Birch, Almond Birch",
         "String" : "Dual internal fixed snare wires"
      },
      "image" : true,
      "link" : "https://meinlpercussion.com/en/products/jc50ab-b-m5746.html",
      "main_rig" : true,
      "make" : "Meinl",
      "model" : "JC50AB-B",
      "notes" : [
         "Snare Cajon 50"
      ],
      "type" : "Cajon",
      "year" : "2022"
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://meinlcymbals.com/en/products/hcs14c-m3486.html",
      "make" : "Meinl",
      "model" : "HCS 14\" Crash",
      "type" : "Cymbal",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://zildjian.com/products/planet-z-hihats?variant=45264675406116",
      "make" : "Zildjian",
      "model" : "Planet Z 13\" Hi-Hat",
      "type" : "Cymbal",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://zildjian.com/products/18-planet-z-crash-ride",
      "make" : "Zildjian",
      "model" : "Planet Z 18\" Crash Ride",
      "type" : "Cymbal",
      "year" : "2013",
      "year_uncertain" : true
   },
   {
      "category" : "Percussion Instruments",
      "detail" : {
         "Amplifier" : "5 W x 2",
         "Dimensions" : "558 mm x 355 mm x 174 mm (22\" x 14\" x 6 7/8\")",
         "MIDI" : "In/Out",
         "Output" : "1/4\"",
         "Power" : "12 V",
         "Serial" : "UZMK02847",
         "Speaker" : "8 cm x 2",
         "Weight" : "3.9 kg (8Ibs 10oz)"
      },
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
      "detail" : {
         "Bass Drum" : "20\"",
         "Color" : "Burgundy Glitter"
      },
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/drums/ac_drums/drum_sets/rydeen/",
      "main_rig" : true,
      "make" : "Yamaha",
      "model" : "Rydeen",
      "type" : "Drums",
      "year" : "2013",
      "year_uncertain" : true
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
      "instrument" : "acoustic guitar",
      "link" : "https://gatorco.com/product/mini-acoustic-guitar-gig-bag-gbe-mini-acou/",
      "make" : "Gator",
      "model" : "Mini Acoustic Guitar Gig Bag",
      "notes" : [
         "acoustic guitar"
      ],
      "type" : "Instrument Case",
      "year" : "2024"
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
      "instrument" : "mandolin",
      "link" : "https://www.sagamusic.com/shop/cases-and-bags/superior-c-3770-trailpak-ii-a-or-f-model-mandolin-gig-bag/",
      "make" : "Saga",
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
      "instrument" : "guitar, banjo, mandolin",
      "link" : "https://www.stringswing.com/product/cc01k-hardwood-home-studio-guitar-keeper-wall-mounted-guitar-hanger",
      "make" : "String Swing",
      "model" : "CC01K",
      "notes" : [
         "guitar",
         "banjo",
         "mandolin"
      ],
      "type" : "Instrument Stand"
   },
   {
      "category" : "Stands etc.",
      "image" : true,
      "instrument" : "guitar, banjo, mandolin",
      "link" : "https://en.guittochina.com/Details/20.html",
      "make" : "Guitto",
      "model" : "GGS-01",
      "notes" : [
         "guitar",
         "banjo",
         "mandolin"
      ],
      "type" : "Instrument Stand",
      "year" : "2024"
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
      "link" : "https://www.tama.com/usa/products/hardware/snare_stands/",
      "make" : "Tama",
      "model" : "HS10 Swingstar",
      "type" : "Instrument Stand",
      "year" : "2007"
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
      "link" : "https://herculesstands.us/product/ms531b/",
      "make" : "Hercules",
      "model" : "MS531B",
      "type" : "Microphone Stand",
      "year" : "2017"
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
      "current_rack" : true,
      "image" : true,
      "link" : "https://www.skbcases.com/music/products/proddetail.php?f=&id=819&o=&offset=4&c=80&s=80",
      "make" : "SKB",
      "model" : "SKB-R8",
      "type" : "Rack Hardware",
      "year" : "2005"
   }
]

var links = {
   "AKG" : "https://www.akg.com/",
   "Apple" : "https://www.apple.com/",
   "Audio Technica" : "https://www.audio-technica.com/en-us/",
   "BOSS" : "https://www.boss.info/us/",
   "Beyer Dynamic" : "https://north-america.beyerdynamic.com/",
   "Blackstar" : "https://www.blackstaramps.com/",
   "Clayton" : "https://www.steveclayton.com/",
   "DR Strings" : "https://www.drstrings.com/",
   "Daisy Rock" : "https://www.daisyrock.com/",
   "Digitech" : "https://www.digitech.com/",
   "Dunlop" : "https://www.jimdunlop.com/",
   "D’Addario" : "https://www.daddario.com/",
   "EBow" : "https://www.ebow.com/",
   "EMG" : "https://www.emgpickups.com/",
   "ESP" : "https://www.espguitars.com/",
   "Edirol" : "https://www.roland.com/us/",
   "Electro-Harmonix" : "https://www.ehx.com/",
   "Empress" : "https://empresseffects.com/",
   "Epiphone" : "https://www.epiphone.com/",
   "Ernie Ball" : "https://www.ernieball.com/",
   "Fender" : "https://www.fender.com/",
   "Fishman" : "https://www.fishman.com/",
   "Focusrite" : "https://focusrite.com/",
   "Framus" : "https://www.framus-vintage.de/en/",
   "Furman" : "https://www.furmanpower.com/",
   "GHS" : "https://www.ghsstrings.com/",
   "Gator" : "https://www.gatorcases.com/",
   "Godtone" : "",
   "Gretsch" : "https://www.gretschguitars.com/",
   "Guitto" : "https://en.guittochina.com/",
   "Guyker" : "https://www.guyker.com/",
   "Hercules" : "http://herculesstands.com/",
   "Hohner" : "https://www.hohner.de/",
   "IK Multimedia" : "https://www.ikmultimedia.com/",
   "Ibanez" : "https://www.ibanez.com/",
   "JHS" : "https://jhspedals.info/",
   "K&K" : "https://kksound.com/",
   "Kahler" : "https://www.kahlerusa.com/",
   "Kala" : "https://kalabrand.com/",
   "Kamoa" : "https://kamoaukuleles.myshopify.com/",
   "Korg" : "https://www.korg.com/",
   "Levys" : "https://www.levysleathers.com/",
   "Line 6" : "https://line6.com/",
   "M-Audio" : "https://www.m-audio.com/",
   "MIDIPLUS" : "https://www.midiplus.com.tw/en/",
   "MOTU" : "https://www.motu.com/",
   "MXR" : "https://www.jimdunlop.com/products/electronics/mxr/",
   "Mackie" : "https://www.mackie.com/",
   "Mahalo" : "https://mahaloukuleles.com/",
   "Martin" : "https://www.martinguitar.com/",
   "Meinl" : "https://meinlcymbals.com/",
   "Mission Engineering" : "https://missionengineering.com/",
   "Northfield" : "https://www.northfieldinstruments.com/",
   "O.C. White" : "https://www.ocwhite.com/",
   "Peavey" : "https://peavey.com/",
   "Peterson" : "https://www.petersontuners.com/",
   "Pignose" : "https://pignoseamps.com/",
   "ProCo" : "https://actentertainment.com/products/?brand=68",
   "Quick-Lok" : "https://www.quiklok.com/",
   "Road Runner" : "https://roadrunnercases.com/",
   "Roc-N-Soc" : "https://rocnsoc.com/",
   "SKB" : "https://www.skbcases.com/",
   "Saga" : "https://www.sagamusic.com/",
   "Schaller" : "https://schaller.info/",
   "Schecter" : "https://www.schecterguitars.com/",
   "Sennheiser" : "https://en-us.sennheiser.com/",
   "Shadow" : "https://shadowelectronics.com/",
   "Shubb" : "https://www.shubb.com/",
   "Shure" : "https://www.shure.com/",
   "Sony" : "https://www.sony.com/",
   "Stageline" : "https://www.stagelinestands.com/",
   "Stagg" : "https://staggmusic.com/",
   "String Swing" : "https://www.stringswing.com/",
   "Strymon" : "https://www.strymon.net/",
   "Studio Projects" : "http://www.studioprojects.com/",
   "Sweet Foot" : "https://www.sweetfootpedals.com/",
   "Tama" : "https://www.tama.com/",
   "Tapco" : "https://www.mackie.com/",
   "Temple Audio" : "https://www.templeaudio.com/",
   "Thalia" : "https://www.thaliacapos.com/",
   "Traveler" : "https://travelerguitar.com/",
   "Ultimate Support" : "https://www.ultimatesupport.com/",
   "VOX" : "https://voxamps.com/",
   "Walrus Audio" : "https://www.walrusaudio.com/",
   "Wampler" : "https://www.wamplerpedals.com/",
   "Warwick" : "https://www.warwick.de/en/Warwick-.html",
   "Washburn" : "https://www.washburn.com/",
   "Wittner" : "https://www.wittner-gmbh.de/",
   "Yamaha" : "https://usa.yamaha.com/",
   "Zildjian" : "https://zildjian.com/",
   "tc electronic" : "https://www.tcelectronic.com/"
}
