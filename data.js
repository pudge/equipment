var lastModified = new Date("2023-10-05T12:00:00+0000")
var equipment_data = {}
var equipment = [
   {
      "category" : "Instruments",
      "featured" : true,
      "image" : true,
      "link" : "https://www.martinguitar.com/guitars/discontinued/HD-28E-Retro.html",
      "location" : "Nazareth, Pennsylvania, USA",
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
      "production_year" : "October 2012",
      "serial" : "1633689",
      "strings" : "AA Lifespan 2.0 MA550T",
      "type" : "Acoustic Guitar",
      "year" : "2012"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "location" : "Nazareth, Pennsylvania, USA",
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
      "production_year" : "February 2000",
      "serial" : "728931",
      "strings" : "AA Lifespan 2.0 MA550T",
      "type" : "Acoustic Guitar",
      "year" : "2000"
   },
   {
      "category" : "Instruments",
      "featured" : true,
      "image" : true,
      "link" : "https://travelerguitar.com/products/escape-mark-3-mahogany",
      "make" : "Traveler",
      "model" : "Escape Mark III",
      "notes" : [
         "AA Lifespan 2.0 MA530T",
         "Acetal Standard",
         "S1",
         "C1K",
         "Mahogany"
      ],
      "serial" : "M3-02910",
      "strings" : "AA Lifespan 2.0 MA530T",
      "type" : "Acoustic Guitar",
      "year" : "2018"
   },
   {
      "category" : "Instruments",
      "hide" : true,
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/guitars_basses/ac_guitars/fg_fgx/index.html",
      "location" : "Tenryu/Wada Factory, Japan",
      "make" : "Yamaha",
      "model" : "FG-230",
      "notes" : [
         "12-string",
         "Nippon Gakki"
      ],
      "production_year" : "November 1967",
      "serial" : "726838",
      "type" : "Acoustic Guitar",
      "year" : "1967"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/Acoustic-Guitar/EPIKWM803/Ebony",
      "make" : "Epiphone",
      "model" : "Songmaker DR-100",
      "not_mine" : true,
      "notes" : [
         "AA Lifespan 2.0 MA550T",
         "Ebony"
      ],
      "serial" : "TBD",
      "strings" : "AA Lifespan 2.0 MA550T",
      "type" : "Acoustic Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://www.fender.com/en-US/acoustic-guitars/",
      "make" : "Fender",
      "model" : "MA-1",
      "not_mine" : true,
      "notes" : [
         "AA Lifespan 2.0 MA540T"
      ],
      "serial" : "OI14087311",
      "strings" : "AA Lifespan 2.0 MA540T",
      "type" : "Acoustic Guitar",
      "year" : "2014"
   },
   {
      "category" : "Instruments",
      "featured" : true,
      "image" : true,
      "link" : "https://line6.com/legacy/variax500",
      "location" : "Korea",
      "make" : "Line 6",
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
      "serial" : "3058431",
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2003"
   },
   {
      "category" : "Instruments",
      "featured" : true,
      "image" : true,
      "location" : "Samick, Korea",
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
      "serial" : "1103087",
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "1987"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/Electric-Guitar/EPINA3562/Ebony",
      "local_serial" : "27363",
      "location" : "Qingdao (electric), China",
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
      "production_year" : "February 2021",
      "serial" : "21021527363",
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://www.epiphone.com/en-US/Electric-Guitar/EPIJ1X839/Heritage-Cherry",
      "local_serial" : "30731",
      "location" : "Qingdao (electric), China",
      "make" : "Epiphone",
      "model" : "SG Standard",
      "not_mine" : true,
      "notes" : [
         "EXL110",
         "Heritage Cherry"
      ],
      "production_year" : "May 2023",
      "serial" : "23051530731",
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2023"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://www.washburn.com/instrument-style/double-cut-solid-body/",
      "location" : "Korea",
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
      "serial" : "2110103",
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2002"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "make" : "Daisy Rock",
      "model" : "Daisy Short-Scale",
      "not_mine" : true,
      "notes" : [
         "EXL110",
         "22 1/2\" scale",
         "Awesome Blue"
      ],
      "serial" : "207757",
      "strings" : "EXL110",
      "type" : "Electric Guitar",
      "year" : "2004"
   },
   {
      "category" : "Instruments",
      "featured" : true,
      "image" : true,
      "link" : "https://line6.com/legacy/variaxbass700",
      "location" : "Korea",
      "make" : "Line 6",
      "model" : "Variax 700",
      "notes" : [
         "EXL170",
         "Tortex Standard",
         "MSS3-BRN",
         "Straplok"
      ],
      "serial" : "4101739",
      "strings" : "EXL170",
      "type" : "Bass Guitar",
      "year" : "2004"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://www.ibanez.com/usa/products/category/electric_basses/",
      "local_serial" : "5503",
      "location" : "FujiGen Gakki, Japan",
      "make" : "Ibanez",
      "model" : "Roadstar II RB650",
      "notes" : [
         "EXL170",
         "Tortex Standard",
         "MSS3-BRN",
         "Straplok"
      ],
      "production_year" : "January 1986",
      "serial" : "A865503",
      "strings" : "EXL170",
      "type" : "Bass Guitar",
      "year" : "1986"
   },
   {
      "category" : "Instruments",
      "featured" : true,
      "image" : true,
      "link" : "https://www.schecterguitars.com/Hellraiser-Extreme-5?quantity=1&custitem_color_master_list=438",
      "location" : "South Korea",
      "make" : "Schecter",
      "model" : "Hellraiser Extreme-5",
      "notes" : [
         "ECB81-5SL",
         "Tortex Standard",
         "MSS2-4-BLK",
         "Straplok",
         "SGR-6B"
      ],
      "production_year" : "2021",
      "serial" : "W21052189",
      "strings" : "ECB81-5SL",
      "type" : "Bass Guitar",
      "year" : "2021"
   },
   {
      "category" : "Instruments",
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
         "Mandolin Twin"
      ],
      "serial" : "FT180030",
      "strings" : "EFW74",
      "type" : "Mandolin",
      "year" : "2018"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "location" : "Camden, NJ, USA",
      "make" : "Wm. Schmick",
      "model" : "Lyric Banjo",
      "notes" : [
         "EJ74"
      ],
      "production_year" : "Patented Sept. 23, 1914",
      "serial" : "unnumbered",
      "strings" : "EJ74",
      "type" : "Mandolin",
      "year" : "1920s?"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "make" : "Framus",
      "model" : "Tenor Banjo",
      "notes" : [
         "EXL110",
         "Nylon Standard",
         "C5-R",
         "C5K",
         "PM14-DBR",
         "C-3770 Trailpak II",
         "Irish Tenor tuning: 13/17/26/36"
      ],
      "serial" : "27726-680",
      "strings" : "EXL110",
      "type" : "Banjo",
      "year" : "1968",
      "year_uncertain" : true
   },
   {
      "category" : "Instruments",
      "featured" : true,
      "image" : true,
      "link" : "https://kamoaukuleles.myshopify.com/collections/kamoa-e3-s/products/kamoa-e3-s-soprano-red",
      "location" : "China",
      "make" : "Kamoa",
      "model" : "E3-S",
      "notes" : [
         "EJ99SC",
         "Soprano",
         "GBE-UKE-SOP"
      ],
      "serial" : "12060058",
      "strings" : "EJ99SC",
      "type" : "Ukulele",
      "year" : "2015",
      "year_uncertain" : true
   },
   {
      "category" : "Instruments",
      "image" : true,
      "location" : "China",
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
      "model" : "YDP-223",
      "type" : "Keyboard",
      "year" : "2006"
   },
   {
      "category" : "Instruments",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/keyboards/portable_keyboards/",
      "make" : "Yamaha",
      "model" : "YPT-300",
      "type" : "Keyboard",
      "year" : "2007"
   },
   {
      "category" : "Percussion Instruments",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/musical_instruments/drums/el_drums/digital_percussion/",
      "make" : "Yamaha",
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
      "model" : "POD X3 Live",
      "type" : "Pedal",
      "year" : "2010"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.boss.info/us/products/rc-2/",
      "make" : "BOSS",
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
      "image" : true,
      "link" : "https://www.ehx.com/products/nano-big-muff-pi",
      "make" : "Electro-Harmonix",
      "model" : "Nano Big Muff Pi",
      "type" : "Pedal",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.ehx.com/products/metal-muff",
      "make" : "Electro-Harmonix",
      "model" : "Metal Muff",
      "type" : "Pedal",
      "year" : "2020"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.ehx.com/products/deluxe-bass-big-muff-pi",
      "make" : "Electro-Harmonix",
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
      "model" : "FBV Express",
      "type" : "Controller",
      "year" : "2015"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "M-Audio",
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
      "model" : "B1",
      "type" : "Microphone",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.akg.com/Microphones/Condenser%20Microphones/P220.html",
      "make" : "AKG",
      "model" : "P220",
      "type" : "Microphone",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://en-us.sennheiser.com/live-performance-microphone-vocal-stage-e-835",
      "make" : "Sennheiser",
      "model" : "e 835",
      "type" : "Microphone",
      "year" : "2011"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.shure.com/en-US/products/microphones/sm58",
      "make" : "Shure",
      "model" : "SM-58",
      "type" : "Microphone",
      "year" : "2007"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "make" : "Edirol",
      "model" : "MA-20D",
      "type" : "Monitors",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.audio-technica.com/en-us/ath-m40fs",
      "make" : "Audio Technica",
      "model" : "ATH-M40fs",
      "type" : "Headphones",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.sony.com/electronics/headphones/t/headband-headphones",
      "make" : "Sony",
      "model" : "MDR-V600",
      "type" : "Headphones",
      "year" : "1999"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.shure.com/en-US/products/earphones/se215cl",
      "make" : "Shure",
      "model" : "SE215-CL",
      "type" : "Headphones",
      "year" : "2021"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://mackie.com/products/big-knob-series-monitor-controllers-interfaces",
      "make" : "Mackie",
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
      "model" : "PV 6",
      "type" : "Mixer",
      "year" : "2006"
   },
   {
      "category" : "Hardware",
      "hide" : true,
      "image" : true,
      "make" : "Tapco",
      "model" : "Mix.50",
      "type" : "Mixer",
      "year" : "2008"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://usa.yamaha.com/products/proaudio/pa_systems/",
      "make" : "Yamaha",
      "model" : "STAGEPAS 500",
      "type" : "PA",
      "year" : "2011"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://focusrite.com/en/usb-audio-interface/scarlett/scarlett-2i2",
      "make" : "Focusrite",
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
      "image" : true,
      "link" : "https://shop.fender.com/en-US/parts/stratocaster-parts/custom-shop-fat-50s-stratocaster-pickups/0992113000.html",
      "make" : "Fender",
      "model" : "Fat 50’s",
      "type" : "Pickup",
      "year" : "2004"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.fishman.com/product-series-matrix-pickup-systems/",
      "make" : "Fishman",
      "model" : "Ellipse Matrix Blend",
      "type" : "Pickup",
      "year" : "2000s"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://www.fishman.com/product-series-aura-imaging/",
      "make" : "Fishman",
      "model" : "F1 Aura+",
      "type" : "Pickup",
      "year" : "2012"
   },
   {
      "category" : "Hardware",
      "image" : true,
      "link" : "https://kksound.com/products/mandolintwin.php",
      "make" : "K&K",
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
