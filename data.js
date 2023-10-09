var lastModified = new Date("2023-10-08T12:00:00+0000")
var equipment_data = {}
var equipment = [
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
         "Battery Compartment" : "9V"
      },
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
      "link" : "https://www.thaliacapos.com/collections/pick-pucks",
      "make" : "Thalia",
      "model" : "Pick Puck",
      "type" : "Guitar Accessory",
      "year" : "2022"
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
      "instrument" : "bass",
      "link" : "https://www.jimdunlop.com/tortex-standard-pick-1-14mm/",
      "make" : "Dunlop",
      "model" : "Tortex Standard",
      "notes" : [
         "bass",
         "1.14mm"
      ],
      "type" : "Pick"
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
      "link" : "https://www.levysleathers.com/product/guitar-strap-m17ss/",
      "make" : "Levys",
      "model" : "M17SS-DBR",
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
      "link" : "https://www.levysleathers.com/product/banjo-strap-pm14-dbr/",
      "make" : "Levys",
      "model" : "PM14-DBR",
      "type" : "Strap",
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
      "image" : true,
      "link" : "https://www.jimdunlop.com/straplok-strap-retainers-original-nickel/",
      "make" : "Dunlop",
      "model" : "Straplok",
      "type" : "Strap Retainers",
      "year" : "2020"
   },
   {
      "category" : "Accessories",
      "detail" : {
         "Gauge" : ".010, .014, .023, .030, .039, .047",
         "Gauge Name" : "Extra Light",
         "Material" : "92/8 Phosphor Bronze"
      },
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
         "Gauge" : ".012, .016, .025, .032, .042, .054",
         "Gauge Name" : "Light",
         "Material" : "92/8 Phosphor Bronze"
      },
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
         "Gauge" : ".013, .017, .026, .035, .045, .056",
         "Gauge Name" : "Medium",
         "Material" : "92/8 Phosphor Bronze"
      },
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
         "Gauge" : ".045, .065, .080, .100, .132",
         "Gauge Name" : "Regular Light",
         "Material" : "Stainless Steel, Flatwound",
         "Scale Length" : "Super Long",
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
         "Gauge" : ".011, .015, .026, .036",
         "Gauge Name" : "Medium",
         "Material" : "Stainless Steel, Flatwound"
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
         "Gauge" : ".011, .015, .026, .040",
         "Gauge Name" : "Medium",
         "Material" : "Phosphor Bronze"
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
         "Gauge" : ".024, .030, .036, .026",
         "Material" : "Nyltech",
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
         "Gauge" : ".0205, .026, .0319, .0224",
         "Material" : "Fluorocarbon",
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
      "category" : "Accessories",
      "detail" : {
         "Gauge" : ".010, .013, .017, .026, .036, .046",
         "Gauge Name" : "Regular Light",
         "Material" : "Nickel"
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
         "Gauge" : ".045, .065, .080, .100",
         "Gauge Name" : "Regular Light",
         "Material" : "Nickel",
         "Scale Length" : "Long"
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
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "5W",
         "Battery Compartment" : "AA x 6",
         "Dimensions" : "6-1/4\" x 5\" x 9-1/2\"",
         "Guitar Input" : "1/4\"",
         "Serial" : "03/04183",
         "Speaker" : "6\"",
         "Weight" : "6lbs"
      },
      "image" : true,
      "make" : "Pignose",
      "model" : "7-100",
      "type" : "Amplifier",
      "year" : "2000s"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Amplifier" : "3W",
         "Guitar Input" : "1/4\"",
         "Line In" : "1/8\" stereo",
         "Phones" : "1/8\" stereo",
         "Serial" : "UZA200408593",
         "Speaker" : "3\""
      },
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
      "detail" : {
         "Amplifier" : "15W",
         "Dimensions" : "16” x 15\" x 8.5\" (406.4mm x 381mm x 215.9mm)",
         "Guitar Input" : "1/4\"",
         "Line In" : "1/8\" stereo",
         "Output" : "1/4\"",
         "Serial" : "SF11L6420006862",
         "Speaker" : "8\"",
         "Weight" : "17lbs (7.7kg)"
      },
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
      "detail" : {
         "Amplifier" : "15W x 2; battery operation 7.5W x 2",
         "Dimensions" : "420mm x 195mm x 155mm (16.5\" × 7.7\" × 6.1\")",
         "Guitar Input" : "1/4\"",
         "Line In" : "1/8\" stereo",
         "Output" : "1/4\" balanced",
         "Phones" : "1/8\" stereo",
         "Power Consumption" : "22W",
         "Serial" : "T219990XZ",
         "Speaker" : "3.5\" (9cm) x 2",
         "Weight" : "4.3kg (9lbs 8oz)"
      },
      "featured" : true,
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/guitars_basses/amps_accessories/thr-ii/",
      "make" : "Yamaha",
      "manuals" : {
         "Reference Manual" : "thr30ii_en_rm_c0.pdf"
      },
      "model" : "THR30II Wireless",
      "notes" : [
         "Relay G10"
      ],
      "type" : "Amplifier",
      "year" : "2021"
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
      "type" : "Controller",
      "year" : "2015"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Depth" : "90mm (3 9/16”)",
         "Height" : "43mm (1 3/4”)",
         "Serial" : "GU 97541, ET 31580, HV 22318",
         "Weight" : "240g / 9oz",
         "Width" : "96mm (3 13/16”)"
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
      "detail" : {
         "Computer Interface" : "USB-B",
         "MIDI" : "Out x 2",
         "Serial" : "2105084"
      },
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
      "detail" : {
         "Analog Outputs" : "XLR balanced, 1/4” unbalanced",
         "Serial" : "W100M7038017336-1"
      },
      "image" : true,
      "link" : "https://line6.com/relay-wireless/g10-g10s/",
      "make" : "Line 6",
      "manuals" : {
         "Pilot’s Guide" : "Relay G10 Pilot's Guide - English .pdf",
         "Pilot’s Guide Addendum" : "Relay G10T G10 G10S Pilot's Guide Addendum - English .pdf"
      },
      "model" : "Relay G10",
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
      "detail" : {
         "Connector" : "1/4\" (6.3 mm) Phone Plug",
         "Cord" : "11' (3.4m) (OFC litz wire, left-side exit)",
         "Driver Diameter" : "40mm",
         "Frequency Response" : "5 - 28000 Hz",
         "Impedance" : "60Ω",
         "Magnet" : "Neodymium",
         "Maximum Input Power" : "1,600 mW at 1 kHz",
         "Sensitivity" : "100dB",
         "Type" : "Closed-back dynamic",
         "Voice Coil" : "Copper-clad aluminum wire",
         "Weight" : "8.8oz (250g) without cable"
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
         "Driver Diameter" : "40mm",
         "Frequency Range" : "5 - 30000 Hz",
         "Impedance" : "45Ω at 1 kHz",
         "Mass" : "Approx. 260g (9 3/16 oz) (without cord)",
         "Power handling capacity" : "1,000 mW",
         "Sensitivity" : "106dB",
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
         "Frequency Range" : "22 - 17500 Hz",
         "Impedance" : "17Ω at 1 kHz",
         "Net Weight" : "30g (1oz)",
         "Sensitivity at 1 kHz" : "107dB SPL/mW",
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
      "detail" : {
         "Analog Inputs" : "1/4\" TRS x 8, XLR/TRS combo x 2",
         "Analog Outputs" : "1/4\" TRS x 8, 1/4\" TRS main x 2, 1/4\" TRS monitor x 2",
         "Computer Interface" : "FireWire 400 x 2",
         "Converters" : "24-bit",
         "Digital Inputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Digital Outputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Dimensions" : "1U",
         "MIDI" : "In/Out",
         "Phones" : "1/4\"",
         "Sample Rates" : "44.1kHz, 48kHz, 88.2kHz, 96kHz",
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
      "make" : "IK Multimedia",
      "model" : "iRig",
      "type" : "Interface",
      "year" : "2011"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Computer Interface" : "USB-B",
         "Dimensions" : "11cm x 7cm x 4.4cm (4.3\" x 2.7\" x 1.73\")",
         "MIDI" : "In/Out x 4",
         "Weight" : "0.323kg (0.71lbs)"
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
      "detail" : {
         "Analog Inputs" : "XLR/TRS combo x 8",
         "Analog Outputs" : "1/4\" TRS x 10",
         "Computer Interface" : "USB-B",
         "Converters" : "24-bit",
         "Digital Inputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Digital Outputs" : "TOSLINK, S/PDIF RCA coaxial",
         "Dimensions" : "482mm x 45mm (1U) x 286mm (19\" x 1.73\" (1U) x 11.26”)",
         "MIDI" : "In/Out",
         "Phones" : "1/4\"",
         "Sample Rates" : "44.1kHz, 48kHz, 88.2kHz, 96kHz, 176.4kHz, 192kHz",
         "Serial" : "V96613100879",
         "Sync" : "Out, Word clock",
         "Weight" : "3.27kg (7.21lbs)"
      },
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
      "detail" : {
         "Analog Inputs" : "XLR/TRS combo x 2",
         "Analog Outputs" : "1/4\" TRS x 2",
         "Computer Interface" : "USB-C",
         "Converters" : "24-bit",
         "Dimensions" : "175mm x 47.5mm x 99mm (6.89\" x 1.87\" x 3.89”)",
         "Phones" : "1/4\"",
         "Sample Rates" : "44.1kHz, 48kHz, 88.2kHz, 96kHz, 176.4kHz, 192kHz",
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
         "Min. terminating impedance" : "1000Ω",
         "Nominal impedance" : "350Ω",
         "Sensitivity in free field, no load (1kHz)" : "2,7 mV/Pa",
         "Weight" : "330g"
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
         "Audio frequency Bandwidth" : "20 - 20000 Hz",
         "Bass Cut Filter" : "300Hz - 12dB/octave",
         "Current" : "<= 3mA",
         "Diameter" : "54mm",
         "Electrical impedance" : "<= 200Ω",
         "Equivalent noise level" : "16dB-A",
         "Gender" : "Male",
         "Length" : "165mm",
         "Net Weight" : "530g",
         "Polar Pattern" : "Cardioid",
         "Preattenuation Pad" : "-20dB",
         "Recommended load impedance" : ">= 1000Ω",
         "Sensitivity" : "20 mV/Pa",
         "Signal to Noise" : "78dB-A",
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
      "detail" : {
         "Analog Inputs" : "Stereo 1/4\" TRS balanced x 4, stereo RCA phono",
         "Analog Outputs" : "Stereo 1/4\" TRS balanced x 8",
         "Dimensions" : "3.2” x 13.5” x 5.9” (81mm x 343mm x 150mm)",
         "Phones" : "1/4\" x 2",
         "Serial" : "2034070CWFU0456",
         "Weight" : "3.5lbs (1.6kg)"
      },
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
      "detail" : {
         "Amplifier" : "20W x 2",
         "Analog Inputs" : "Stereo 1/4\", stereo RCA phono",
         "Converters" : "24-bit",
         "Digital Inputs" : "optical, coax",
         "Dimensions" : "170mm x 261mm x 280mm (6 3/4\" x 10 5/16\" x 11 1/16”) x 2",
         "Frequency Range" : "50 - 22000 Hz",
         "Input Impedance" : "18000Ω",
         "Phones" : "1/4\"",
         "Sample Rates" : "32, 44.1, 48, 96kHz",
         "Serial" : "ZR32193",
         "Speaker" : "12cm (4 3/4”), 4cm (1 5/8”)",
         "Weight" : "4.5kg (9lbs 15oz) x 2"
      },
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
         "Amplifier" : "250W x 2",
         "Analog Inputs" : "XLR/TS combo x 4, stereo 1/4\" x 2, stereo RCA x 2",
         "Analog Outputs" : "Stereo 1/4\" x 2, stereo RCA",
         "Serial" : "",
         "Speaker" : "10\" (25cm)"
      },
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
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "Buffered Bypass",
         "Circuit" : "Analog",
         "Current Draw" : "15mA",
         "DI Output" : "XLR balanced",
         "Dimensions" : "5.75\" x 4.75\" x 2.5\"",
         "Direct Output" : "1/4\"",
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
      "detail" : {
         "Audio Channels" : "Mono",
         "Bypass" : "Buffered Bypass",
         "Circuit" : "Analog",
         "Current Draw" : "25mA",
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
         "Audio Channels" : "Mono",
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
         "Analog Inputs" : "1/4”, XLR, 1/4” return x 2",
         "Analog Outputs" : "Stereo 1/4\" x 2, stereo XLR, 1/4\" send",
         "Computer Interface" : "USB-B",
         "Digital Outputs" : "S/PDIF RCA coaxial",
         "Dimensions" : "21.5\" x 10\" x 4.75\"",
         "Guitar Input" : "1/4”, Variax",
         "Line In" : "1/8\" stereo",
         "MIDI" : "In/Out+Thru",
         "Phones" : "1/4\"",
         "Serial" : "X3L1S5937000703",
         "Weight" : "8.4lbs"
      },
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
      "detail" : {
         "Audio Channels" : "Mono",
         "Current Draw" : "50mA",
         "Dimensions" : "73mm x 129mm x 59mm (2 7/8\" x 5 1/8\" x 2 3/8\")",
         "Power Supply" : "9V",
         "Serial" : "AV 20887",
         "Weight" : "420g (15oz)"
      },
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
         "Battery Life" : "220 hours",
         "Pickup Length" : "2.65\" (67.3 mm)",
         "Soundhole" : "Round soundholes from 3 7/8\" (98mm) to 4 1/8\" (105mm) in diameter"
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
         "DC Resistance" : "Neck: 6.26K, Middle: 6.34K, Bridge: 6.43K",
         "Inductance" : "Neck: 2.49 Henries, Middle: 2.5 Henries, Bridge: 2.63 Henries",
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
      "detail" : {
         "Analog Inputs" : "1/4\" x 3 (two channels)",
         "Analog Outputs" : "1/4\"",
         "Serial" : "13751"
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
         "Serial" : ""
      },
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
      "category" : "Instruments",
      "detail" : {
         "Back Material" : "High Pressure Laminate",
         "Body Size" : "D-14 Fret",
         "Finish Top" : "Satin",
         "Fret Count" : "20",
         "Location" : "Nazareth, Pennsylvania, USA",
         "Neck Joins Body At" : "14th Fret",
         "Neck Material" : "Plywood",
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
         "Body Depth" : "1.75\"",
         "Body Material" : "Mahogany",
         "Body Width" : "10.75\"",
         "Color" : "Mahogany",
         "Fingerboard Material" : "Black Walnut",
         "Finish" : "Satin",
         "Fret Count" : "22",
         "Frets" : "Medium Profile",
         "Neck" : "Mahogany",
         "Neck Radius" : "9.5\"",
         "Neck Width at Nut" : "1.75\"",
         "Pickups" : "Shadow Nanoflex",
         "Scale Length" : "25.5\"",
         "Serial" : "M3-02910",
         "Total Depth" : "2.13\"",
         "Total Length" : "30\"",
         "Tuning Machines" : "Black Anodized Closed Gear",
         "Weight" : "4lbs, 4oz",
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
         "C1K"
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
         "Back / Side Finish" : "Gloss",
         "Back Inlay Material" : "Multi-Stripe",
         "Back Material" : "East Indian Rosewood",
         "Back Purfling/Strip" : "Zig-Zag",
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
         "Saddle" : "Compensated White Tusq",
         "Saddle Radius" : "16\"",
         "Scale Length" : "25.4\"",
         "Serial" : "1633689",
         "Side Dots" : "White",
         "Side Material" : "East Indian Rosewood",
         "Top Color" : "Aging Toner",
         "Top Inlay Material" : "Bold Herringbone",
         "Top Material" : "Spruce",
         "Tuning Knobs" : "Butterbean",
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
         "Body Finish" : "Satin Body Finish",
         "Body Material" : "Laminated Sapele",
         "Body Style" : "3/4 size",
         "Bracing Pattern" : "X Bracing",
         "Bridge" : "Rosewood with Compensated Saddle",
         "Fret Count" : "18",
         "Neck Finish" : "Satin Neck Finish",
         "Neck Material" : "Nato",
         "Nut Material" : "Synthetic Bone",
         "Nut Width" : "1.69\" (43mm)",
         "Scale Length" : "23.3\" (592mm)",
         "Serial" : "OI14087311",
         "Top Material" : "Laminated Agathis",
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
         "Body Finish" : "Gloss",
         "Body Material" : "Mahogany",
         "Color" : "Ebony",
         "Fingerboard Inlays" : "Dot",
         "Fret Count" : "20",
         "Frets" : "Medium Jumbo",
         "Neck Joint" : "Dovetail; Glued-in",
         "Neck Profile" : "SlimTaper C-profile",
         "Nut Width" : "43.0mm (1.692”)",
         "Pickguard" : "1-Ply; Black PVC",
         "Scale Length" : "647.7mm (25.5”)",
         "Serial" : "",
         "Top Material" : "Select Spruce",
         "Truss Rod" : "2-Way Adjustable",
         "Tuning Machines" : "Premium Die Cast"
      },
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/Acoustic-Guitar/EPIKWM803/Ebony",
      "make" : "Epiphone",
      "model" : "Songmaker DR-100",
      "not_mine" : true,
      "notes" : [
         "AA Lifespan 2.0 MA550T"
      ],
      "strings" : "AA Lifespan 2.0 MA550T",
      "type" : "Acoustic Guitar",
      "year" : "2021"
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
         "Battery Compartment" : "18V w/Screw Plate",
         "Binding" : "MOP w/ BLK/WHT/BLK Multi-ply",
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
         "Neck @ 12th Fret" : ".866\" (22mm)",
         "Neck @ 1st Fret" : ".787\" (20mm)",
         "Neck Material" : "Maple/Walnut Multi-ply",
         "Neck Pickup" : "EMG 40TW",
         "Neck Shape" : "Thin “C”",
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
         "Body Material" : "Basswood and Birch",
         "Bridge" : "Standard (19mm string spacing)",
         "Bridge Pickup" : "Super P4",
         "Controls" : "Volume, Tone, Balancer",
         "Fingerboard Inlay Style" : "Pearl dot and side dots",
         "Fingerboard Material" : "Rosewood",
         "Fret Count" : "22",
         "Frets" : "Medium",
         "Hardware Color" : "Chrome",
         "Knobs" : "Sure Grip II",
         "Local Serial" : "5503",
         "Location" : "FujiGen Gakki, Japan",
         "Neck Joint" : "AANJ",
         "Neck Material" : "1-Piece Maple",
         "Neck Pickup" : "Super J4",
         "Neck Type" : "D shape",
         "Nut" : "Plastic",
         "Nut Width" : "41mm",
         "Pickup Configuration" : "PJ",
         "Production Year" : "January 1986",
         "Scale Length" : "864mm (34”)",
         "Serial" : "A865503",
         "Tuning Machines" : "Hercules B"
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
         "Body Material" : "Alder",
         "Color" : "Sunburst",
         "Fingerboard Material" : "Rosewood",
         "Fingerboard Radius" : "10\"",
         "Fret Count" : "21",
         "Frets" : "Medium Profile",
         "Location" : "Korea",
         "Neck Material" : "Maple",
         "Nut Width" : "1.5\"",
         "Scale Length" : "34\"",
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
         "Body Material" : "Solid Basswood",
         "Body Style" : "3/4 size",
         "Color" : "Awesome Blue",
         "Fingerboard Material" : "Rosewood",
         "Fret Count" : "22",
         "Neck Material" : "Hard Rock Maple",
         "Neck Style" : "Slim",
         "Pickups" : "Seymour Duncan open coil humbucker, and lipstick-style single coil",
         "Scale Length" : "22 1/2\" scale",
         "Serial" : "207757",
         "Tuners" : "Grover"
      },
      "image" : true,
      "make" : "Daisy Rock",
      "model" : "Daisy Short-Scale",
      "not_mine" : true,
      "notes" : [
         "EXL110"
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
         "Fingerboard Radius" : "304.8mm / 12\"",
         "Finish" : "Nickel",
         "Fret Count" : "22",
         "Frets" : "Medium Jumbo",
         "Joint" : "Glued in",
         "Local Serial" : "27363",
         "Location" : "Qingdao (electric), China",
         "Neck Pickup" : "ProBucker™ 2",
         "Neck Profile" : "SlimTaper™ 60s C",
         "Nut Material" : "Graph Tech®",
         "Nut Width" : "43.0mm (1.692”)",
         "Pickguard" : "Cream",
         "Pickup Covers" : "Nickel",
         "Pickup Selector" : "3-way Epiphone toggle",
         "Production Year" : "February 2021",
         "Scale Length" : "628.65mm (24.75”)",
         "Serial" : "21021527363",
         "Tailpiece" : "Stopbar",
         "Top Material" : "AA Flame Maple",
         "Truss Rod" : "Adjustable",
         "Truss Rod Cover" : "“Bell Shaped”; 2-layer (Black/White); 60s-era E",
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
         "Standard ’60s Quilt Top"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2021"
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
         "Body Finish" : "Gloss",
         "Body Material" : "Mahogany",
         "Bridge" : "Epiphone LockTone™ Tune-O-Matic",
         "Bridge Pickup" : "Epiphone Alnico Classic PRO™ Bridge",
         "Color" : "Heritage Cherry",
         "Control Knobs" : "Black Top Hats with Inserts",
         "Controls" : "2 Volume, 2 Tone, CTS® Potentiometers",
         "Fingerboard Inlays" : "Trapezoid",
         "Fingerboard Material" : "Laurel",
         "Fingerboard Radius" : "304.8mm / 12\"",
         "Finish" : "Nickel",
         "Fret Count" : "22",
         "Frets" : "Medium Jumbo",
         "Joint" : "Glued in; Set Neck",
         "Local Serial" : "30731",
         "Location" : "Qingdao (electric), China",
         "Neck Pickup" : "Epiphone Alnico Classic PRO™ Neck",
         "Neck Profile" : "60s SlimTaper™",
         "Nut Material" : "Graph Tech NuBone®",
         "Nut Width" : "43.0mm (1.692”)",
         "Pickguard" : "5-Ply, Black",
         "Pickup Selector" : "3-way Epiphone toggle",
         "Production Year" : "May 2023",
         "Scale Length" : "628.65mm (24.75”)",
         "Serial" : "23051530731",
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
         "EXL110"
      ],
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2023"
   },
   {
      "category" : "Instruments",
      "detail" : {
         "Body Material" : "Basswood",
         "Color" : "Black",
         "Fingerboard Material" : "Rosewood",
         "Fingerboard Radius" : "10\"",
         "Fret Count" : "22",
         "Frets" : "Medium Profile",
         "Location" : "Korea",
         "Neck Material" : "Maple",
         "Nut Width" : "1.5\"",
         "Scale Length" : "25.5”",
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
         "Body Material" : "Mahogany",
         "Bridge" : "Schaller Floyd Rose Tremolo",
         "Fingerboaerd material" : "Maple",
         "Fret Count" : "24",
         "Frets" : "Jumbo",
         "Location" : "Korea",
         "Neck Material" : "Rosewood",
         "Pickup Configuration" : "HH",
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
         "Comb (color)" : "Brown",
         "Comb (finish)" : "Triple Lacquered",
         "Comb (material)" : "Pearwood",
         "Cover Plates" : "Stainless Steel",
         "Keys" : "F, E, Eb, D, Db, C, B(H), Bb, A, Ab, G",
         "Length" : "3.9\" (10cm)",
         "Mouthpiece (surface)" : "Pearwood",
         "Number of Holes" : "10",
         "Reed Count" : "20",
         "Reed Material" : "Brass",
         "Reed Plates (material)" : "Brass",
         "Reed Plates (surface)" : "Brass",
         "Reed Plates (thickness)" : "0.9mm",
         "Tonal range" : "3 octaves",
         "Tuning" : "Richter",
         "Type" : "Diatonic"
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
         "Comb (color)" : "Black",
         "Comb (finish)" : "ABS",
         "Comb (material)" : "ABS",
         "Cover Plates" : "Stainless Steel",
         "Keys" : "HG, F#, F, E, Eb, D, Db, C, B(H), Bb, A, Ab, G",
         "Length" : "4.0\" (10.2cm)",
         "Mouthpiece (surface)" : "ABS",
         "Number of Holes" : "10",
         "Reed Count" : "20",
         "Reed Material" : "Brass",
         "Reed Plates (material)" : "Brass",
         "Reed Plates (surface)" : "Brass",
         "Reed Plates (thickness)" : "0.9mm",
         "Tonal range" : "3 octaves",
         "Tuning" : "Richter/Country (Country just in F#, F, E, Eb, D, Db, C, B(H), Bb, A, Ab, G)",
         "Type" : "Diatonic"
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
      "detail" : {
         "Amplifier" : "20W x 2",
         "Analog Inputs" : "1/4\" x 2",
         "Analog Outputs" : "1/4” x 2, RCA line-level x2",
         "Dimensions" : "1370mm x 518mm x 850mm (53 15/16\" x 20 3/8\" x 33 7/16\")",
         "Keys" : "88 (A1 - C7)",
         "MIDI" : "In/Out/Thru",
         "Phones" : "1/4\" x 2",
         "Polyphony" : "64 notes",
         "Serial" : "0606872",
         "Sound Source" : "AWM Stereo Sampling",
         "Speaker" : "16cm x 2",
         "Weight" : "51kg (112lbs 7oz)"
      },
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
      "detail" : {
         "Amplifier" : "2.5W x 2",
         "Dimensions" : "945mm x 370mm x 128mm (37-1/4\" x 14-5/8\" x 5-1/16”)",
         "Keys" : "66 (C1 - C6)",
         "MIDI" : "In/Out",
         "Phones" : "1/4\"",
         "Polyphony" : "32 notes",
         "Power Consumption" : "10W",
         "Serial" : "UBMJ03785",
         "Sound Source" : "XGlite, AWM Stereo Sampling (Grand Piano)",
         "Speaker" : "12cm x 2",
         "Weight" : "4.9kg (10lbs 13oz)"
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
         "Back / Neck / Sides Material" : "Figured Maple",
         "Binding" : "None",
         "Bridge / Fingerboard Material" : "Black Walnut",
         "Color" : "Natural Amber",
         "Depth of Body" : "1.7\" (43mm)",
         "Fingerboard Radius" : "15.5\" (394mm)",
         "Finish" : "Spirit Varnish",
         "Length of Body (w/ heel)" : "12.5\" (318mm)",
         "Location" : "Qingdao, China?",
         "Nut Width" : "1 1/8\" (28mm)",
         "Pickguard" : "Adhered Maple",
         "Serial" : "FT180030",
         "Strings" : "Northfield LITE, Phosphor Bronze, Loop end: G (.036), D (.024), A (.015), E (.010)",
         "Tailpiece" : "Cast",
         "Top Material" : "Spruce",
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
         "Back / Sides Material" : "Composite",
         "Body Depth" : "2.375\"",
         "Body Length" : "9.3125\"",
         "Color" : "Red Burst",
         "Fingerboard Material" : "Rosewood",
         "Fingerboard Width at Neck/Body Joint" : "1.6875\"",
         "Fingerboard Width at Nut" : "1.375\"",
         "Finish" : "Gloss",
         "Fret Count" : "12",
         "Neck" : "Mahogany",
         "Nut" : "Plastic",
         "Saddle" : "Plastic",
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
      "make" : "Makala",
      "model" : "MK-SD/RDBURST",
      "not_mine" : true,
      "notes" : [
         "EJ88S",
         "Soprano",
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
         "Nut" : "ABS, White",
         "Saddle" : "Graph Tech NuBone XB",
         "Scale Length" : "346mm",
         "Tuning Machines" : "Dolphin, Gold Plated"
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
      "category" : "Percussion Instruments",
      "detail" : {
         "Size" : "6\", 7.25\""
      },
      "image" : true,
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
         "Amplifier" : "5W x 2",
         "Dimensions" : "558mm x 355mm x 174mm (22\" x 14\" x 6 7/8\")",
         "MIDI" : "In/Out",
         "Output" : "1/4\"",
         "Power" : "12V",
         "Serial" : "UZMK02847",
         "Speaker" : "8cm x 2",
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
      "link" : "https://gatorco.com/product/telescoping-boom-podcast-bass-drum-and-amp-mic-stand-gfw-mic-0822/",
      "make" : "Gator",
      "model" : "GFW-MIC-0822",
      "type" : "Microphone Stand",
      "year" : "2021"
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
      "link" : "https://www.ocwhite.com/broadcast-arms/proboom.html",
      "make" : "O.C. White",
      "model" : "ProBoom Deluxe",
      "type" : "Microphone Stand",
      "year" : "2006"
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
      "link" : "https://www.tama.com/usa/products/category/hardware/",
      "make" : "Tama",
      "model" : "HS10 Swingstar",
      "type" : "Snare Drum Stand",
      "year" : "2007"
   },
   {
      "category" : "Hardware",
      "detail" : {
         "Battery Compartment" : "AAA x 2",
         "Battery Life" : "27 hours",
         "Dimensions" : "86mm x 80mm x 31mm (3.39\" x 3.15\" x 1.22”)",
         "Line In" : "1/8\" stereo",
         "Phones" : "1/8\"",
         "Weight" : "40g (1.41oz)"
      },
      "image" : true,
      "link" : "https://voxamps.com/product/amplug/",
      "make" : "VOX",
      "manuals" : {
         "Owner’s Manual" : "amPlug_30_CR_Metal.pdf"
      },
      "model" : "amPlug AC30",
      "type" : "Amplifier",
      "year" : "2009"
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
   "MIDIPLUS" : "https://www.midiplus.com.tw/",
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
   "Tama" : "https://www.tama.com/",
   "Tapco" : "https://www.mackie.com/",
   "Thalia" : "https://www.thaliacapos.com/collections/pick-pucks",
   "Traveler" : "https://travelerguitar.com/",
   "Ultimate Support" : "https://www.ultimatesupport.com/",
   "VOX" : "https://voxamps.com/",
   "Warwick" : "https://www.warwick.de/en/Warwick-.html",
   "Washburn" : "https://www.washburn.com/",
   "Wittner" : "https://www.wittner-gmbh.de/",
   "Yamaha" : "https://usa.yamaha.com/",
   "Zildjian" : "https://zildjian.com/"
}
