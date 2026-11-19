
const resep = [
  {
    id: 1,
    nama: "Ayam Taliwang",
    daerah: "Nusa Tenggara Barat",
    kabupaten:"kota Mataram", 
    gambar: "images/ayam taliwang.jpg",
    deskripsi: "Ayam bakar berbumbu pedas khas Lombok.",
    bahan: [
      "1 ekor ayam, belah sesuai kebutuhan",
      "8 cabai merah",
      "5 siung bawang merah",
      "4 siung bawang putih",
      "1 buah tomat",
      "1 sendok teh terasi",
      "Garam dan gula secukupnya",
      "Minyak untuk menumis"
    ],
    cara: [
      "Bersihkan ayam dan tiriskan.",
      "Haluskan cabai, bawang merah, bawang putih, tomat, dan terasi.",
      "Tumis bumbu hingga harum.",
      "Lumuri ayam dengan bumbu secara merata.",
      "Panggang atau bakar ayam sambil diolesi bumbu hingga matang."
    ]
  },
  {
    id: 2,
    nama: "Pempek",
    daerah: "Sumatera Selatan",
    gambar: "images/pempek.jpg",
    deskripsi: "Olahan ikan dengan kuah cuko khas Palembang.",
    bahan: [
      "500 gram ikan giling",
      "250 gram tepung tapioka",
      "150–200 ml air, sesuaikan adonan",
      "2 siung bawang putih",
      "Garam secukupnya",
      "Gula merah untuk cuko",
      "Asam jawa",
      "Cabai dan air untuk cuko"
    ],
    cara: [
      "Campurkan ikan giling, air, bawang putih halus, dan garam.",
      "Tambahkan tepung tapioka sedikit demi sedikit hingga bisa dibentuk.",
      "Bentuk adonan sesuai selera.",
      "Rebus dalam air mendidih hingga pempek mengapung dan matang.",
      "Rebus gula merah, asam jawa, cabai, bawang putih, dan air untuk membuat cuko.",
      "Tiriskan pempek dan sajikan dengan kuah cuko."
    ]
  },
  {
    id: 3,
    nama: "Rendang",
    daerah: "Sumatera Barat",
    gambar: "images/rendang.jpg",
    deskripsi: "Daging sapi berbumbu rempah dan santan.",
    bahan: [
      "500 gram daging sapi",
      "500 ml santan kental",
      "8 siung bawang merah",
      "4 siung bawang putih",
      "8 cabai merah",
      "2 cm jahe",
      "3 cm lengkuas",
      "2 batang serai",
      "Daun jeruk dan daun salam",
      "Garam secukupnya"
    ],
    cara: [
      "Potong daging sapi sesuai selera.",
      "Haluskan bawang merah, bawang putih, cabai, dan jahe.",
      "Masukkan santan, bumbu halus, serai, lengkuas, serta daun aromatik ke dalam panci.",
      "Masukkan daging dan masak dengan api kecil sambil diaduk berkala.",
      "Lanjutkan memasak hingga daging empuk dan bumbu mengental.",
      "Pastikan daging matang sebelum disajikan."
    ]
  },
  {
    id: 4,
    nama: "Sate Ayam",
    daerah: "Jawa",
    gambar: "images/sate ayam.jpg",
    deskripsi: "Potongan ayam bakar dengan saus kacang.",
     bahan: [
      "500 gram daging ayam tanpa tulang",
      "Tusuk sate secukupnya",
      "150 gram kacang tanah",
      "3 siung bawang putih",
      "3 butir bawang merah",
      "Kecap manis",
      "Garam secukupnya",
      "Air secukupnya"
    ],
    cara: [
      "Potong ayam menjadi ukuran kecil.",
      "Tusukkan potongan ayam ke tusuk sate.",
      "Goreng kacang tanah lalu haluskan bersama bawang.",
      "Masak bumbu kacang dengan air, kecap, dan garam hingga mengental.",
      "Bakar sate sambil diolesi kecap hingga matang merata.",
      "Sajikan sate dengan saus kacang."
    ]
  },
  {
    id: 5,
    nama: "Gudeg",
    daerah: "DI Yogyakarta",
    gambar: "images/gudeg.jpg",
    deskripsi: "Nangka muda yang dimasak dengan santan dan rempah.",
    bahan: [
      "500 gram nangka muda",
      "400 ml santan",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 lembar daun salam",
      "2 cm lengkuas",
      "50 gram gula merah",
      "Garam secukupnya"
    ],
    cara: [
      "Potong nangka muda dan rebus hingga agak empuk.",
      "Haluskan bawang merah dan bawang putih.",
      "Masukkan nangka, santan, bumbu halus, daun salam, dan lengkuas ke panci.",
      "Tambahkan gula merah dan garam.",
      "Masak dengan api kecil hingga nangka empuk dan bumbu meresap.",
      "Aduk sesekali agar bagian bawah tidak gosong."
    ]
  },
  {
    id: 6,
    nama: "Rawon",
    daerah: "Jawa Timur",
    gambar: "images/rawon.jpg",
    deskripsi: "Sup daging sapi dengan kuah hitam dari kluwek.",
    bahan: [
      "500 gram daging sapi",
      "2 buah kluwek siap olah",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "2 batang serai",
      "3 lembar daun jeruk",
      "2 cm jahe",
      "1,5 liter air",
      "Garam secukupnya"
    ],
    cara: [
      "Rebus daging hingga empuk, kemudian potong-potong.",
      "Ambil isi kluwek dan pastikan kondisinya baik.",
      "Haluskan kluwek bersama bawang merah, bawang putih, dan jahe.",
      "Tumis bumbu bersama serai dan daun jeruk hingga harum.",
      "Masukkan bumbu ke dalam kaldu dan tambahkan daging.",
      "Masak hingga kuah berwarna gelap dan bumbu meresap."
    ]
  },
  {
    id: 7,
    nama: "Soto Betawi",
    daerah: "DKI Jakarta",
    gambar: "images/soto betawi.jpg",
    deskripsi: "Soto daging dengan kuah gurih khas Betawi.",
    bahan: [
      "500 gram daging sapi",
      "500 ml air kaldu",
      "300 ml santan",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 cm jahe",
      "1 batang serai",
      "Daun salam",
      "Garam dan merica secukupnya"
    ],
    cara: [
      "Rebus daging sampai empuk dan potong sesuai selera.",
      "Haluskan bawang merah, bawang putih, dan jahe.",
      "Tumis bumbu halus bersama serai dan daun salam.",
      "Masukkan bumbu ke dalam kaldu.",
      "Tambahkan daging dan santan sambil diaduk perlahan.",
      "Masak hingga matang dan sajikan hangat."
    ]
  },
  {
    id: 8,
    nama: "Papeda",
    daerah: "Papua dan Maluku",
    gambar: "images/papeda.jpg",
    deskripsi: "Bubur sagu yang biasa disajikan dengan ikan kuah kuning.",
    bahan: [
      "200 gram tepung sagu",
      "Air secukupnya",
      "500 gram ikan",
      "2 siung bawang putih",
      "3 siung bawang merah",
      "2 cm kunyit",
      "Jeruk nipis",
      "Garam secukupnya"
    ],
    cara: [
      "Larutkan tepung sagu dengan sedikit air dingin.",
      "Tuangkan air mendidih secara bertahap sambil diaduk hingga bening dan kental.",
      "Bersihkan ikan lalu lumuri dengan jeruk nipis dan garam.",
      "Haluskan bawang merah, bawang putih, dan kunyit.",
      "Tumis bumbu, tambahkan air, lalu masukkan ikan.",
      "Masak hingga ikan matang dan sajikan bersama papeda."
    ]
  },
  {
    id: 9,
    nama: "Bika Ambon",
    daerah: "Sumatera Utara",
    gambar: "images/bika ambon.jpg",
    deskripsi: "Kue bertekstur bersarang dengan aroma pandan.",
    bahan: [
      "200 gram tepung tapioka",
      "50 gram tepung terigu",
      "150 gram gula pasir",
      "200 ml santan",
      "2 butir telur",
      "1 sendok teh ragi instan",
      "Daun pandan atau pasta pandan",
      "Sejumput garam"
    ],
    cara: [
      "Hangatkan santan bersama pandan, lalu dinginkan hingga suam-suam kuku.",
      "Campurkan tepung tapioka, tepung terigu, gula, dan ragi.",
      "Tambahkan telur dan santan sedikit demi sedikit sambil diaduk.",
      "Diamkan adonan hingga mengembang.",
      "Tuangkan adonan ke loyang yang telah disiapkan.",
      "Panggang dengan suhu dan durasi sesuai resep hingga matang."
    ]
  },
  {
    id: 10,
    nama: "Coto Makassar",
    daerah: "Sulawesi Selatan",
    gambar: "images/coto makasar.jpg",
    deskripsi: "Sup daging dengan kuah rempah khas Makassar.",
    bahan: [
      "500 gram daging sapi",
      "1,5 liter air",
      "5 siung bawang merah",
      "4 siung bawang putih",
      "2 sendok teh ketumbar",
      "2 batang serai",
      "100 gram kacang tanah sangrai",
      "Garam secukupnya"
    ],
    cara: [
      "Rebus daging hingga empuk dan potong-potong.",
      "Haluskan bawang merah, bawang putih, dan ketumbar.",
      "Tumis bumbu bersama serai hingga harum.",
      "Haluskan kacang tanah sangrai.",
      "Masukkan bumbu dan kacang ke dalam kaldu.",
      "Tambahkan daging dan masak hingga kuah beraroma serta bumbu meresap."
    ]
  }, 
  {
    id: 11,
    nama: "Soto Banjar",
    daerah: "Kalimantan Selatan",
    gambar: "images/soto banjar.jpg",
    deskripsi: "Sup ayam beraroma rempah khas Kalimantan Selatan.",
    bahan: [
      "500 gram ayam",
      "1,5 liter air",
      "4 siung bawang merah",
      "3 siung bawang putih",
      "1 sendok teh merica",
      "Kayu manis dan cengkeh secukupnya",
      "Garam secukupnya",
      "Daun bawang dan seledri"
    ],
    cara: [
      "Rebus ayam hingga matang, lalu suwir dagingnya.",
      "Haluskan bawang merah, bawang putih, dan merica.",
      "Tumis bumbu bersama kayu manis dan cengkeh hingga harum.",
      "Masukkan bumbu ke dalam kaldu ayam.",
      "Masak kembali hingga kuah beraroma dan bumbunya meresap.",
      "Sajikan dengan ayam suwir, daun bawang, dan seledri."
    ]
  },
  {
    id: 12,
    nama: "Ayam Cincane",
    daerah: "Kalimantan Timur",
    gambar: "images/ayam cincane.jpg",
    deskripsi: "Hidangan ayam berbumbu merah khas Kalimantan Timur.",
    bahan: [
      "1 ekor ayam, potong menjadi beberapa bagian",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "5 buah cabai merah",
      "2 cm jahe",
      "2 batang serai",
      "2 sendok makan kecap manis",
      "Garam secukupnya",
      "Minyak untuk menumis"
    ],
    cara: [
      "Haluskan bawang merah, bawang putih, cabai, dan jahe.",
      "Tumis bumbu halus bersama serai hingga harum.",
      "Masukkan potongan ayam dan aduk hingga terbalut bumbu.",
      "Tambahkan kecap manis, garam, dan sedikit air.",
      "Masak hingga ayam matang dan bumbu meresap.",
      "Panggang ayam sebentar jika diinginkan, lalu sajikan."
    ]
  },

  {
    id: 13,
    nama: "Kerak Telor",
    daerah: "DKI Jakarta",
    gambar: "images/kerak telor.jpg",
    deskripsi: "Makanan khas Betawi dari telur, beras ketan, dan kelapa sangrai.",
    bahan: [
      "100 gram beras ketan putih",
      "2 butir telur bebek atau ayam",
      "50 gram kelapa parut",
      "2 sendok makan ebi",
      "1 siung bawang putih",
      "2 siung bawang merah",
      "Garam dan merica secukupnya",
      "Bawang goreng secukupnya"
    ],
    cara: [
      "Rendam beras ketan, lalu tiriskan.",
      "Sangrai kelapa parut hingga kecokelatan.",
      "Haluskan bawang merah, bawang putih, ebi, garam, dan merica.",
      "Panaskan sedikit ketan dalam wajan dengan sedikit air.",
      "Tambahkan telur dan bumbu halus, lalu aduk rata.",
      "Masak hingga matang, kemudian taburi kelapa sangrai dan bawang goreng."
    ]
  },
  {
    id: 14,
    nama: "Serabi Solo",
    daerah: "Jawa Tengah",
    gambar: "images/serabi solo.jpg",
    deskripsi: "Kue tradisional Solo yang lembut dengan aroma santan.",
    bahan: [
      "150 gram tepung beras",
      "25 gram tepung terigu",
      "400 ml santan",
      "50 gram gula pasir",
      "1/2 sendok teh ragi instan",
      "1/4 sendok teh garam",
      "Daun pandan secukupnya"
    ],
    cara: [
      "Hangatkan santan bersama daun pandan, lalu dinginkan hingga hangat.",
      "Campurkan tepung beras, tepung terigu, gula, ragi, dan garam.",
      "Tuangkan santan sedikit demi sedikit sambil diaduk hingga halus.",
      "Diamkan adonan sekitar 30–45 menit.",
      "Tuangkan adonan ke wajan kecil yang sudah dipanaskan.",
      "Masak dengan api kecil hingga serabi matang."
    ]
  },
  {
    id: 15,
    nama: "Ikan Woku",
    daerah: "Sulawesi Utara",
    gambar: "images/ikan woku.jpg",
    deskripsi: "Hidangan ikan berbumbu rempah segar khas Manado.",
    bahan: [
      "500 gram ikan, potong sesuai selera",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "4 buah cabai merah",
      "2 cm kunyit",
      "2 cm jahe",
      "2 batang serai",
      "2 lembar daun jeruk",
      "1 buah tomat",
      "Daun kemangi secukupnya",
      "Garam dan air secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan lumuri dengan sedikit garam.",
      "Haluskan bawang merah, bawang putih, cabai, kunyit, dan jahe.",
      "Tumis bumbu halus bersama serai dan daun jeruk hingga harum.",
      "Tambahkan air dan tomat, lalu masak hingga mendidih.",
      "Masukkan ikan dan masak sampai matang serta bumbu meresap.",
      "Tambahkan daun kemangi menjelang matang, lalu sajikan."
    ]
  }, 

  {
    id: 16,
    nama: "Gudangan",
    daerah: "Jawa Tengah",
    gambar: "images/gudangan.jpg",
    deskripsi: "Sayuran rebus dengan kelapa berbumbu khas Jawa Tengah.",
    bahan: [
      "100 gram bayam",
      "100 gram kacang panjang",
      "100 gram tauge",
      "1/2 butir kelapa parut",
      "3 siung bawang merah",
      "2 siung bawang putih",
      "2 buah cabai merah",
      "1 cm kencur",
      "Garam dan gula secukupnya"
    ],
    cara: [
      "Rebus bayam, kacang panjang, dan tauge hingga matang.",
      "Haluskan bawang merah, bawang putih, cabai, kencur, garam, dan gula.",
      "Campurkan bumbu dengan kelapa parut.",
      "Kukus campuran kelapa berbumbu hingga matang.",
      "Sajikan sayuran rebus bersama kelapa berbumbu."
    ]
  },
  {
    id: 17,
    nama: "Ayam Betutu",
    daerah: "Bali",
    gambar: "images/ayam betutu.jpg",
    deskripsi: "Ayam berbumbu rempah khas Bali yang kaya rasa.",
    bahan: [
      "1 ekor ayam",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "4 buah cabai merah",
      "3 cm kunyit",
      "2 cm jahe",
      "2 cm lengkuas",
      "2 batang serai",
      "Daun jeruk secukupnya",
      "Garam dan minyak secukupnya"
    ],
    cara: [
      "Haluskan bawang merah, bawang putih, cabai, kunyit, jahe, dan lengkuas.",
      "Tumis bumbu bersama serai dan daun jeruk hingga harum.",
      "Lumuri ayam dengan bumbu secara merata.",
      "Tambahkan sedikit air dan masak dengan api kecil hingga ayam matang.",
      "Panggang sebentar jika ingin aroma lebih harum, lalu sajikan."
    ]
  },
  
{
 
  id: 18,
  nama: "Pelecing Kangkung",
  daerah: "Nusa Tenggara Barat",
  kabupaten:"lombok timur", 
  gambar: "images/pelecing kangkung.jpg",
  deskripsi: "Pelecing kangkung adalah makanan khas Lombok yang terdiri dari kangku ng rebus dengan sambal tomat pedas, terasi, dan perasan jeruk limau.",
  bahan: [
    "2 ikat kangkung",
    "2 buah tomat",
    "5 cabai rawit atau sesuai selera",
    "1 siung bawang putih",
    "1 sendok teh terasi bakar",
    "1 buah jeruk limau",
    "Garam secukupnya",
    "Gula secukupnya"
  ],
  cara: [
    "Petik dan cuci bersih kangkung.",
    "Rebus kangkung hingga matang, lalu tiriskan.",
    "Haluskan cabai, tomat, bawang putih, terasi, garam, dan gula.",
    "Tambahkan perasan jeruk limau ke dalam sambal.",
    "Sajikan kangkung dengan sambal di atasnya."
  ]
},


  {
    id: 19,
    nama: "Lempah Kuning",
    daerah: "Bangka Belitung",
    gambar: "images/lempah kuning.jpg",
    deskripsi: "Sup ikan berkuah kuning dengan rasa segar khas Bangka Belitung.",
    bahan: [
      "500 gram ikan",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "3 cm kunyit",
      "2 buah cabai merah",
      "1 batang serai",
      "1 buah nanas kecil",
      "Air secukupnya",
      "Garam dan jeruk nipis secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan lumuri dengan jeruk nipis.",
      "Haluskan bawang merah, bawang putih, kunyit, dan cabai.",
      "Rebus bumbu bersama serai dan air hingga mendidih.",
      "Masukkan ikan dan potongan nanas.",
      "Masak hingga ikan matang, lalu tambahkan garam secukupnya.",
      "Sajikan selagi hangat."
    ]
  },
  {
    id: 20,
    nama: "Binte Biluhuta",
    daerah: "Gorontalo",
    gambar: "images/binte biluhuta.jpg",
    deskripsi: "Sup jagung khas Gorontalo dengan ikan atau udang dan kelapa.",
    bahan: [
      "2 buah jagung manis",
      "150 gram ikan suwir atau udang",
      "1/2 butir kelapa parut",
      "3 siung bawang merah",
      "1 buah cabai merah",
      "Daun kemangi secukupnya",
      "Jeruk nipis secukupnya",
      "Garam dan air secukupnya"
    ],
    cara: [
      "Pipil jagung manis dari tongkolnya.",
      "Rebus jagung bersama air hingga mulai empuk.",
      "Tambahkan ikan suwir atau udang dan bawang merah iris.",
      "Masukkan kelapa parut dan cabai sesuai selera.",
      "Masak hingga semua bahan matang.",
      "Tambahkan kemangi dan perasan jeruk nipis sebelum disajikan."
    ]
  },
  {
 id: 21,
    nama: "Nasi Goreng Jawa",
    daerah: "Jawa Tengah",
    gambar: "images/nasi-goreng-jawa.jpg",
    deskripsi: "Nasi goreng khas Jawa dengan bumbu kecap manis, terasi, dan taburan kerupuk.",
    bahan: [
      "3 piring nasi putih dingin",
      "4 siung bawang merah",
      "2 siung bawang putih",
      "3 buah cabai rawit",
      "2 sendok makan kecap manis",
      "1 sendok teh terasi bakar",
      "2 butir telur ayam",
      "Garam dan penyedap secukupnya",
      "Minyak goreng untuk menumis"
    ],
    cara: [
      "Haluskan bawang merah, bawang putih, cabai rawit, dan terasi.",
      "Panaskan minyak, tumis bumbu halus hingga harum dan matang.",
      "Masukkan telur, orak-arik hingga setengah matang.",
      "Tambahkan nasi putih dan kecap manis, aduk rata dengan api besar.",
      "Bumbui dengan garam dan penyedap, masak hingga nasi berwarna cokelat merata.",
      "Sajikan hangat dengan kerupuk dan acar timun."
    ]
    }, 
{ 
  id: 22,
    nama: "Bubur Manado (Tinutuan)",
    daerah: "Sulawesi Utara",
    gambar: "images/bubur-manado.jpg",
    deskripsi: "Bubur nasi dengan campuran berbagai sayuran seperti labu, jagung, dan kangkung.",
    bahan: [
      "150 gram beras, masak jadi bubur",
      "200 gram labu kuning, potong dadu",
      "1 buah jagung manis, pipil",
      "1 ikat kangkung, iris kasar",
      "1 ikat bayam, petik daunnya",
      "3 batang daun bawang, iris",
      "Kemangi secukupnya",
      "Garam dan kaldu jamur secukupnya"
    ],
    cara: [
      "Masak beras dengan air banyak hingga menjadi bubur encer.",
      "Masukkan labu kuning dan jagung pipil, masak hingga setengah empuk.",
      "Tambahkan kangkung dan bayam, aduk rata hingga layu.",
      "Bumbui dengan garam dan kaldu jamur, koreksi rasa.",
      "Matikan api, masukkan daun bawang dan kemangi, aduk sebentar.",
      "Sajikan hangat dengan ikan asar, sambal roa, dan perasan jeruk nipis."
    ]
 }, 
 {
   id: 23,
    nama: "Klepon",
    daerah: "Jawa",
    gambar: "images/klepon.jpg",
    deskripsi: "Kue tradisional bola-bola ketan hijau berisi gula merah yang meleleh saat digigit.",
    bahan: [
      "200 gram tepung ketan",
      "100 ml air pandan suji",
      "100 gram gula merah, sisir halus",
      "100 gram kelapa parut setengah tua",
      "½ sendok teh garam",
      "Daun pandan untuk merebus"
    ],
    cara: [
      "Campurkan tepung ketan dengan air pandan, uleni hingga kalis dan bisa dibentuk.",
      "Ambil sedikit adonan, pipihkan, isi dengan gula merah sisir, bulatkan kembali.",
      "Rebus klepon dalam air mendidih yang diberi daun pandan hingga mengapung.",
      "Angkat dan langsung gulingkan ke dalam kelapa parut yang sudah dicampur garam.",
      "Pastikan kelapa menempel rata di seluruh permukaan klepon.",
      "Sajikan segera agar gula merah di dalamnya masih cair dan lumer."
    ]
 },
 {
 id: 24,
    nama: "Sop Buntut",
    daerah: "Jakarta / Jawa Barat",
    gambar: "images/sop-buntut.jpg",
    deskripsi: "Sup ekor sapi empuk dengan kuah kaldu bening berbumbu pala dan cengkeh.",
    bahan: [
      "1 kg buntut sapi, potong per ruas",
      "2 liter air",
      "5 siung bawang merah",
      "4 siung bawang putih",
      "3 buah cengkeh",
      "1 butir pala, memarkan",
      "2 batang wortel, potong serong",
      "2 buah kentang, potong dadu",
      "Daun bawang dan seledri secukupnya",
      "Garam, merica, dan gula pasir secukupnya"
    ]
}, 
{

id: 25,
    nama: "Ikan Bakar Jimbaran",
    daerah: "Bali",
    gambar: "images/ikan-bakar-jimbaran.jpg",
    deskripsi: "Ikan bakar khas Bali dengan bumbu basa genep yang kaya rempah dan pedas.",
    bahan: [
      "2 ekor ikan kakap atau nila, bersihkan",
      "10 butir bawang merah",
      "6 siung bawang putih",
      "8 buah cabai merah keriting",
      "5 buah cabai rawit",
      "3 cm kencur",
      "3 cm kunyit",
      "2 cm jahe",
      "2 batang serai, memarkan",
      "Minyak kelapa untuk menumis dan membakar"
    ],
    cara: [
      "Haluskan semua bumbu kecuali serai dan minyak kelapa.",
      "Tumis bumbu halus bersama serai hingga matang dan wangi.",
      "Lumuri ikan dengan bumbu tumis, diamkan 30 menit agar meresap.",
      "Bakar ikan di atas arang sambil diolesi sisa bumbu dan minyak kelapa.",
      "Balik ikan secara berkala agar matang merata dan tidak gosong.",
      "Sajikan hangat dengan plecing kangkung dan sambal terasi."
    ]
},
{
id: 26,
    nama: "Mie Aceh",
    daerah: "Aceh",
    gambar: "images/mie-aceh.jpg",
    deskripsi: "Mie kuning tebal bertekstur kenyal dengan kuah kari rempah yang kuat dan gurih.",
    bahan: [
      "300 gram mie kuning basah",
      "200 gram daging sapi, iris tipis",
      "500 ml air kaldu sapi",
      "4 siung bawang merah",
      "3 siung bawang putih",
      "3 buah cabai merah",
      "1 sendok makan bubuk kari",
      "1 sendok teh jintan",
      "1 batang kayu manis",
      "Acara timun dan bawang merah untuk pelengkap"
    ],
    cara: [
      "Haluskan bawang merah, bawang putih, cabai, jintan, dan bubuk kari.",
      "Tumis bumbu halus hingga harum, masukkan daging sapi hingga berubah warna.",
      "Tuangkan air kaldu sapi dan kayu manis, masak hingga mendidih.",
      "Masukkan mie kuning, aduk rata dan masak hingga kuah menyusut setengahnya.",
      "Bumbui dengan garam dan gula pasir, koreksi kekentalan kuah.",
      "Sajikan panas dengan acar, emping, dan irisan jeruk nipis."
    ]
}, 
{
 id: 27,
    nama: "Pallubasa",
    daerah: "Sulawesi Selatan",
    gambar: "images/pallubasa.jpg",
    deskripsi: "Sup jeroan dan daging sapi dengan kuah santan encer berbumbu rempah Makassar.",
    bahan: [
      "500 gram daging sapi dan jeroan",
      "1 liter santan encer",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "3 cm jahe",
      "3 cm lengkuas",
      "2 batang serai, memarkan",
      "5 lembar daun jeruk",
      "Ebi sangrai secukupnya",
      "Garam dan gula merah secukupnya"
    ],
    cara: [
      "Rebus daging dan jeroan hingga empuk, sisihkan kaldunya.",
      "Haluskan bawang, jahe, lengkuas, dan ebi sangrai.",
      "Tumis bumbu halus bersama serai dan daun jeruk hingga harum.",
      "Masukkan tumisan bumbu ke dalam kaldu, tuangkan santan encer.",
      "Tambahkan daging dan jeroan, masak dengan api kecil hingga santan menyatu.",
      "Sajikan panas dengan ketupat, telur rebus, dan sambal hijau."
    ]
}, 
{
    id: 28,
    nama: "Sate Bandeng",
    daerah: "Banten",
    gambar: "images/sate-bandeng.jpg",
    deskripsi: "Olahan ikan bandeng tanpa duri yang dibumbui rempah dan dipanggang.",
    bahan: [
      "1 ekor ikan bandeng",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "3 buah cabai merah",
      "100 ml santan",
      "1 butir telur",
      "Ketumbar secukupnya",
      "Garam dan gula secukupnya"
    ],
    cara: [
      "Bersihkan ikan bandeng dan keluarkan dagingnya dengan hati-hati.",
      "Pisahkan daging ikan dari durinya.",
      "Haluskan bawang merah, bawang putih, cabai, dan ketumbar.",
      "Campurkan daging ikan dengan bumbu, santan, telur, garam, dan gula.",
      "Masukkan kembali adonan ke kulit ikan.",
      "Panggang hingga matang dan berwarna kecokelatan."
    ]
  },
  {
    id: 29,
    nama: "Seruit",
    daerah: "Lampung",
    gambar: "images/seruit.jpg",
    deskripsi: "Ikan bakar yang disajikan bersama sambal terasi dan campuran tempoyak.",
    bahan: [
      "500 gram ikan nila atau ikan mas",
      "5 buah cabai merah",
      "5 buah cabai rawit",
      "1 buah tomat",
      "1 sendok teh terasi bakar",
      "2 sendok makan tempoyak",
      "1 buah jeruk limau",
      "Garam secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan lumuri dengan garam serta jeruk limau.",
      "Bakar ikan hingga matang.",
      "Haluskan cabai, tomat, dan terasi bakar.",
      "Campurkan sambal dengan tempoyak.",
      "Tambahkan garam dan perasan jeruk limau.",
      "Sajikan ikan bakar bersama sambal seruit."
    ]
  },
  {
    id: 30,
    nama: "Gulai Ikan Patin",
    daerah: "Riau",
    gambar: "images/gulai-ikan-patin.jpg",
    deskripsi: "Hidangan ikan patin berkuah santan dengan rempah yang gurih.",
    bahan: [
      "500 gram ikan patin",
      "500 ml santan",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "3 cm kunyit",
      "2 cm jahe",
      "2 batang serai",
      "2 lembar daun jeruk",
      "Garam secukupnya"
    ],
    cara: [
      "Bersihkan ikan patin dan potong sesuai selera.",
      "Haluskan bawang merah, bawang putih, kunyit, dan jahe.",
      "Tumis bumbu bersama serai dan daun jeruk hingga harum.",
      "Tuangkan santan dan aduk perlahan.",
      "Masukkan ikan patin dan masak hingga matang.",
      "Tambahkan garam lalu sajikan hangat."
    ]
  },
  {
    id: 31,
    nama: "Tempoyak Ikan Patin",
    daerah: "Jambi",
    gambar: "images/tempoyak-ikan-patin.jpg",
    deskripsi: "Masakan ikan patin dengan bumbu tempoyak dari durian fermentasi.",
    bahan: [
      "500 gram ikan patin",
      "3 sendok makan tempoyak",
      "5 buah cabai merah",
      "5 buah cabai rawit",
      "2 cm kunyit",
      "1 batang serai",
      "2 lembar daun kunyit",
      "500 ml air",
      "Garam secukupnya"
    ],
    cara: [
      "Bersihkan ikan patin dan potong menjadi beberapa bagian.",
      "Haluskan cabai dan kunyit.",
      "Campurkan bumbu halus dengan tempoyak dan air.",
      "Masukkan serai dan daun kunyit.",
      "Masukkan ikan patin lalu masak hingga matang.",
      "Tambahkan garam dan sajikan selagi hangat."
    ]
  },
  {
    id: 32,
    nama: "Pendap",
    daerah: "Bengkulu",
    gambar: "images/pendap.jpg",
    deskripsi: "Olahan ikan berbumbu rempah yang dibungkus daun talas.",
    bahan: [
      "500 gram ikan",
      "Daun talas secukupnya",
      "6 siung bawang merah",
      "4 siung bawang putih",
      "4 buah cabai merah",
      "2 cm kunyit",
      "2 cm jahe",
      "1 batang serai",
      "Kelapa parut secukupnya",
      "Garam secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan siapkan daun talas.",
      "Haluskan bawang merah, bawang putih, cabai, kunyit, dan jahe.",
      "Campurkan bumbu dengan kelapa parut dan garam.",
      "Lumuri ikan dengan campuran bumbu.",
      "Bungkus ikan menggunakan daun talas dengan rapat.",
      "Kukus hingga ikan matang dan bumbu meresap."
    ]
  },
  {
    id: 33,
    nama: "Gonggong Rebus",
    daerah: "Kepulauan Riau",
    gambar: "images/gonggong-rebus.jpg",
    deskripsi: "Hidangan siput laut gonggong yang direbus dan disajikan dengan sambal.",
    bahan: [
      "500 gram siput gonggong",
      "2 batang serai",
      "2 lembar daun salam",
      "2 cm jahe",
      "1 liter air",
      "Garam secukupnya",
      "Jeruk limau secukupnya",
      "Cabai untuk sambal"
    ],
    cara: [
      "Cuci gonggong hingga bersih.",
      "Didihkan air bersama serai, daun salam, jahe, dan garam.",
      "Masukkan gonggong ke dalam air mendidih.",
      "Rebus hingga gonggong matang.",
      "Angkat dan tiriskan.",
      "Sajikan dengan sambal dan jeruk limau."
    ]
  },
  {
    id: 34,
    nama: "Se'i Sapi",
    daerah: "Nusa Tenggara Timur",
    gambar: "images/sei-sapi.jpg",
    deskripsi: "Daging sapi asap khas Nusa Tenggara Timur.",
    bahan: [
      "500 gram daging sapi",
      "3 siung bawang putih",
      "1 sendok teh ketumbar",
      "1 sendok teh garam",
      "1/2 sendok teh merica",
      "Daun pepaya secukupnya"
    ],
    cara: [
      "Iris daging sapi memanjang.",
      "Haluskan bawang putih, ketumbar, garam, dan merica.",
      "Lumuri daging dengan bumbu hingga merata.",
      "Diamkan agar bumbu meresap.",
      "Masak dengan teknik pengasapan hingga matang.",
      "Iris tipis dan sajikan."
    ]
  },
  {
    id: 35,
    nama: "Kolo",
    daerah: "Nusa Tenggara Timur",
    gambar: "images/kolo.jpg",
    deskripsi: "Nasi bambu tradisional khas masyarakat Manggarai.",
    bahan: [
      "500 gram beras",
      "500 ml santan encer",
      "2 siung bawang putih",
      "2 siung bawang merah",
      "Garam secukupnya",
      "Daun pisang secukupnya",
      "Bambu bersih untuk memasak"
    ],
    cara: [
      "Cuci beras hingga bersih.",
      "Haluskan bawang merah dan bawang putih.",
      "Campurkan beras dengan santan, bumbu, dan garam.",
      "Lapisi bagian dalam bambu dengan daun pisang.",
      "Masukkan campuran beras ke dalam bambu.",
      "Masak hingga nasi matang dan beraroma harum."
    ]
  },
  {
    id: 36,
    nama: "Bubur Pedas Sambas",
    daerah: "Kalimantan Barat",
    gambar: "images/bubur-pedas-sambas.jpg",
    deskripsi: "Bubur khas Sambas dengan sayuran dan aneka rempah.",
    bahan: [
      "150 gram beras",
      "100 gram kangkung",
      "100 gram pakis",
      "100 gram wortel",
      "50 gram kacang tanah",
      "2 siung bawang putih",
      "3 siung bawang merah",
      "Daun kesum secukupnya",
      "Garam dan air secukupnya"
    ],
    cara: [
      "Sangrai beras hingga harum lalu tumbuk kasar.",
      "Rebus beras dengan air hingga menjadi bubur.",
      "Haluskan bawang merah dan bawang putih.",
      "Masukkan bumbu ke dalam bubur.",
      "Tambahkan sayuran dan kacang tanah.",
      "Masak hingga semua bahan matang dan sajikan."
    ]
  },
  {
    id: 37,
    nama: "Juhu Singkah",
    daerah: "Kalimantan Tengah",
    gambar: "images/juhu-singkah.jpg",
    deskripsi: "Sayur rotan muda khas Dayak dengan kuah berbumbu.",
    bahan: [
      "300 gram rotan muda yang sudah dibersihkan",
      "200 gram ikan",
      "4 siung bawang merah",
      "3 siung bawang putih",
      "2 cm kunyit",
      "2 batang serai",
      "Garam secukupnya",
      "Air secukupnya"
    ],
    cara: [
      "Bersihkan rotan muda dan potong kecil.",
      "Haluskan bawang merah, bawang putih, dan kunyit.",
      "Tumis bumbu bersama serai hingga harum.",
      "Tambahkan air dan masukkan rotan muda.",
      "Masukkan ikan dan masak hingga matang.",
      "Tambahkan garam lalu sajikan."
    ]
  },
  {
    id: 38,
    nama: "Kepiting Soka",
    daerah: "Kalimantan Utara",
    gambar: "images/kepiting-soka.jpg",
    deskripsi: "Kepiting bercangkang lunak yang diolah dengan bumbu gurih.",
    bahan: [
      "500 gram kepiting soka",
      "4 siung bawang putih",
      "3 siung bawang merah",
      "2 buah cabai merah",
      "2 sendok makan tepung maizena",
      "1 sendok makan saus tiram",
      "Garam dan merica secukupnya",
      "Minyak untuk memasak"
    ],
    cara: [
      "Bersihkan kepiting soka.",
      "Haluskan bawang merah, bawang putih, dan cabai.",
      "Tumis bumbu hingga harum.",
      "Masukkan kepiting dan saus tiram.",
      "Tambahkan sedikit air dan bumbui secukupnya.",
      "Masak hingga kepiting matang."
    ]
  },
  {
    id: 39,
    nama: "Lawa Ikan",
    daerah: "Sulawesi Tenggara",
    gambar: "images/lawa-ikan.jpg",
    deskripsi: "Olahan ikan khas Buton dengan kelapa dan bumbu segar.",
    bahan: [
      "300 gram ikan segar",
      "100 gram kelapa parut",
      "3 buah jeruk nipis",
      "5 buah cabai rawit",
      "3 siung bawang merah",
      "Garam secukupnya",
      "Daun kemangi secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan pastikan menggunakan ikan yang aman untuk olahan tersebut.",
      "Siapkan ikan melalui proses pengolahan yang higienis dan sesuai resep tradisional.",
      "Sangrai kelapa parut hingga harum.",
      "Iris bawang merah dan cabai.",
      "Campurkan kelapa, bumbu, dan air jeruk nipis.",
      "Sajikan bersama ikan yang telah diolah dengan aman."
    ]
  },
  {
    id: 40,
    nama: "Kaledo",
    daerah: "Sulawesi Tengah",
    gambar: "images/kaledo.jpg",
    deskripsi: "Sup tulang kaki sapi khas Donggala dengan kuah asam segar.",
    bahan: [
      "1 kg tulang kaki sapi",
      "2 liter air",
      "5 buah cabai rawit",
      "2 buah asam jawa",
      "2 siung bawang putih",
      "Garam secukupnya",
      "Jeruk nipis secukupnya"
    ],
    cara: [
      "Bersihkan tulang kaki sapi.",
      "Rebus hingga daging dan tulang empuk.",
      "Haluskan cabai dan bawang putih.",
      "Masukkan bumbu ke dalam kuah rebusan.",
      "Tambahkan asam jawa dan garam.",
      "Masak hingga bumbu meresap dan sajikan hangat."
    ]
  },
  {
    id: 41,
    nama: "Ikan Kuah Pala Banda",
    daerah: "Maluku",
    gambar: "images/ikan-kuah-pala.jpg",
    deskripsi: "Sup ikan khas Banda dengan aroma pala yang khas.",
    bahan: [
      "500 gram ikan laut",
      "1 buah pala",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 cm jahe",
      "2 buah tomat",
      "1 batang serai",
      "Air dan garam secukupnya"
    ],
    cara: [
      "Bersihkan ikan dan potong sesuai selera.",
      "Haluskan bawang merah, bawang putih, dan jahe.",
      "Tumis bumbu bersama serai hingga harum.",
      "Tambahkan air dan pala.",
      "Masukkan ikan dan tomat.",
      "Masak hingga ikan matang dan sajikan."
    ]
  },
  {
    id: 42,
    nama: "Gohu Ikan",
    daerah: "Maluku Utara",
    gambar: "images/gohu-ikan.jpg",
    deskripsi: "Hidangan ikan tuna khas Ternate dengan jeruk dan rempah.",
    bahan: [
      "300 gram ikan tuna",
      "3 buah jeruk nipis",
      "5 siung bawang merah",
      "5 buah cabai rawit",
      "100 gram kacang tanah",
      "Daun kemangi secukupnya",
      "Garam secukupnya"
    ],
    cara: [
      "Gunakan ikan tuna berkualitas baik yang aman untuk dikonsumsi tanpa dimasak.",
      "Siapkan ikan dengan penanganan higienis dan sesuai standar keamanan pangan.",
      "Iris bawang merah dan cabai.",
      "Sangrai kacang tanah lalu tumbuk kasar.",
      "Campurkan bahan pelengkap dengan ikan yang telah disiapkan secara aman.",
      "Tambahkan jeruk nipis dan sajikan segera."
    ]
  },
  {
    id: 43,
    nama: "Jagung Bose",
    daerah: "Nusa Tenggara Timur",
    gambar: "images/jagung-bose.jpg",
    deskripsi: "Hidangan jagung dan kacang-kacangan khas masyarakat Timor.",
    bahan: [
      "250 gram jagung pipil kering",
      "100 gram kacang merah",
      "100 gram kacang tanah",
      "500 ml santan",
      "1 liter air",
      "Garam secukupnya"
    ],
    cara: [
      "Rendam jagung dan kacang hingga lebih lunak.",
      "Rebus jagung hingga mulai empuk.",
      "Tambahkan kacang merah dan kacang tanah.",
      "Masak hingga semua bahan lunak.",
      "Tuangkan santan dan tambahkan garam.",
      "Aduk hingga matang dan sajikan."
    ]
  },
  {
    id: 44,
    nama: "Ayam Rica-Rica",
    daerah: "Sulawesi Utara",
    gambar: "images/ayam-rica-rica.jpg",
    deskripsi: "Ayam berbumbu cabai dan rempah khas Manado.",
    bahan: [
      "500 gram ayam",
      "8 buah cabai merah",
      "5 buah cabai rawit",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 cm jahe",
      "2 batang serai",
      "Daun jeruk secukupnya",
      "Garam dan minyak secukupnya"
    ],
    cara: [
      "Potong ayam dan bersihkan.",
      "Haluskan cabai, bawang merah, bawang putih, dan jahe.",
      "Tumis bumbu bersama serai dan daun jeruk.",
      "Masukkan ayam dan aduk hingga tercampur.",
      "Tambahkan sedikit air dan garam.",
      "Masak hingga ayam matang dan bumbu meresap."
    ]
  },
  {
    id: 45,
    nama: "Nasi Jaha",
    daerah: "Maluku Utara",
    gambar: "images/nasi-jaha.jpg",
    deskripsi: "Nasi ketan berbumbu santan yang dimasak dalam bambu.",
    bahan: [
      "300 gram beras ketan",
      "200 ml santan",
      "2 batang serai",
      "2 lembar daun pandan",
      "1 cm jahe",
      "Garam secukupnya",
      "Daun pisang secukupnya"
    ],
    cara: [
      "Cuci dan rendam beras ketan.",
      "Masak santan bersama jahe, serai, dan garam.",
      "Campurkan santan dengan beras ketan.",
      "Bungkus adonan dengan daun pisang.",
      "Masukkan ke dalam bambu yang bersih.",
      "Masak hingga ketan matang."
    ]
  },
  {
    id: 46,
    nama: "Tahu Gejrot",
    daerah: "Jawa Barat",
    gambar: "images/tahu-gejrot.jpg",
    deskripsi: "Tahu goreng dengan kuah gula merah, asam, dan cabai.",
    bahan: [
      "10 buah tahu pong",
      "3 siung bawang merah",
      "2 siung bawang putih",
      "5 buah cabai rawit",
      "100 gram gula merah",
      "2 sendok makan asam jawa",
      "200 ml air",
      "Garam secukupnya"
    ],
    cara: [
      "Potong tahu pong menjadi beberapa bagian.",
      "Rebus air bersama gula merah dan asam jawa.",
      "Tambahkan garam lalu dinginkan kuah.",
      "Ulek kasar bawang merah, bawang putih, dan cabai.",
      "Susun tahu dalam piring.",
      "Siram dengan kuah dan bumbu ulek."
    ]
  },
  {
    id: 47,
    nama: "Sate Lilit",
    daerah: "Bali",
    gambar: "images/sate-lilit.jpg",
    deskripsi: "Sate berbahan ikan atau ayam cincang dengan bumbu khas Bali.",
    bahan: [
      "300 gram ikan giling",
      "100 gram kelapa parut",
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 cm kunyit",
      "2 batang serai",
      "Garam secukupnya",
      "Batang serai untuk tusukan"
    ],
    cara: [
      "Haluskan bawang merah, bawang putih, dan kunyit.",
      "Campurkan bumbu dengan ikan giling.",
      "Tambahkan kelapa parut dan garam.",
      "Aduk hingga adonan tercampur rata.",
      "Lilitkan adonan pada batang serai.",
      "Panggang hingga matang merata."
    ]
  },
  {
    id: 48,
    nama: "Nasi Liwet Solo",
    daerah: "Jawa Tengah",
    gambar: "images/nasi-liwet-solo.jpg",
    deskripsi: "Nasi gurih khas Solo yang disajikan dengan sayur labu dan ayam.",
    bahan: [
      "500 gram beras",
      "600 ml santan encer",
      "2 lembar daun salam",
      "1 batang serai",
      "Garam secukupnya",
      "200 gram ayam",
      "Labu siam secukupnya"
    ],
    cara: [
      "Cuci beras hingga bersih.",
      "Masak beras bersama santan, daun salam, serai, dan garam.",
      "Masak hingga nasi matang.",
      "Masak ayam dengan bumbu hingga matang.",
      "Olah labu siam menjadi sayur pendamping.",
      "Sajikan nasi bersama ayam dan sayur labu."
    ]
  },
  {
    id: 49,
    nama: "Tahu Tek",
    daerah: "Jawa Timur",
    gambar: "images/tahu-tek.jpg",
    deskripsi: "Hidangan tahu, kentang, lontong, dan saus kacang petis khas Surabaya.",
    bahan: [
      "4 buah tahu putih",
      "2 buah kentang",
      "2 butir telur",
      "2 buah lontong",
      "100 gram kacang tanah",
      "2 sendok makan petis",
      "2 siung bawang putih",
      "Kecap manis secukupnya",
      "Tauge secukupnya"
    ],
    cara: [
      "Goreng tahu dan kentang hingga matang.",
      "Goreng telur dadar sesuai selera.",
      "Goreng kacang tanah lalu haluskan.",
      "Campurkan kacang dengan petis, bawang putih, kecap, dan sedikit air.",
      "Potong lontong, tahu, kentang, dan telur.",
      "Sajikan bersama tauge dan saus petis kacang."
    ]
  },
  {
    id: 50,
    nama: "Sate Maranggi",
    daerah: "Jawa Barat",
    gambar: "images/sate-maranggi.jpg",
    deskripsi: "Sate daging sapi berbumbu khas Purwakarta yang disajikan dengan sambal tomat.",
    bahan: [
      "500 gram daging sapi",
      "3 siung bawang putih",
      "5 siung bawang merah",
      "2 sendok makan kecap manis",
      "1 sendok teh ketumbar",
      "1 sendok makan air asam jawa",
      "Garam secukupnya",
      "Tusuk sate secukupnya"
    ],
    cara: [
      "Potong daging sapi menjadi ukuran kecil.",
      "Haluskan bawang merah, bawang putih, dan ketumbar.",
      "Campurkan bumbu dengan kecap dan air asam jawa.",
      "Lumuri daging dan diamkan hingga bumbu meresap.",
      "Tusukkan daging lalu bakar hingga matang.",
      "Sajikan dengan sambal tomat."
    ]
  },
{
  id: 51,
  nama: "Soto Padang",
  daerah: "Sumatera Barat",
  gambar: "images/soto-padang.jpg",
  deskripsi: "Soto daging dengan kuah rempah dan kerupuk merah khas Padang.",
  bahan: ["300 gram daging sapi", "1 liter kaldu sapi", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 batang serai", "Daun jeruk", "Garam dan merica"],
  cara: ["Rebus daging hingga empuk lalu iris tipis.", "Haluskan bawang dan jahe.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan bumbu ke dalam kaldu.", "Sajikan dengan daging dan pelengkap."]
},
{
  id: 52,
  nama: "Mie Celor",
  daerah: "Sumatera Selatan",
  gambar: "images/mie-celor.jpg",
  deskripsi: "Mie dengan kuah santan dan udang khas Palembang.",
  bahan: ["300 gram mie telur", "200 gram udang", "400 ml santan", "3 siung bawang putih", "4 siung bawang merah", "2 sendok makan tepung terigu", "Daun bawang", "Garam"],
  cara: ["Rebus mie hingga matang.", "Haluskan bawang lalu tumis hingga harum.", "Masukkan udang dan santan.", "Tambahkan tepung yang dilarutkan dengan air.", "Masak hingga kuah mengental dan sajikan bersama mie."]
},
{
  id: 53,
  nama: "Tekwan",
  daerah: "Sumatera Selatan",
  gambar: "images/tekwan.jpg",
  deskripsi: "Sup bola ikan dengan kuah udang dan jamur khas Palembang.",
  bahan: ["250 gram ikan giling", "150 gram tepung tapioka", "150 gram udang", "1 liter air", "Jamur kuping", "Bengkuang", "3 siung bawang putih", "Garam"],
  cara: ["Campurkan ikan, tapioka, dan garam.", "Bentuk adonan kecil lalu rebus hingga mengapung.", "Tumis bawang putih dan udang.", "Tambahkan air, bengkuang, dan jamur.", "Masukkan bola ikan dan masak hingga matang."]
},
{
  id: 54,
  nama: "Gulai Belacan",
  daerah: "Riau",
  gambar: "images/gulai-belacan.jpg",
  deskripsi: "Gulai udang dengan bumbu belacan yang gurih.",
  bahan: ["400 gram udang", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "4 cabai merah", "1 sendok teh terasi", "2 cm jahe", "Garam"],
  cara: ["Bersihkan udang.", "Haluskan bawang, cabai, jahe, dan terasi.", "Tumis bumbu hingga harum.", "Masukkan santan dan udang.", "Masak hingga udang matang dan kuah mengental."]
},
{
  id: 55,
  nama: "Gulai Tepek Ikan",
  daerah: "Jambi",
  gambar: "images/gulai-tepek-ikan.jpg",
  deskripsi: "Olahan ikan berbentuk pipih yang disajikan dengan kuah gulai.",
  bahan: ["300 gram ikan giling", "150 gram tepung tapioka", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "1 batang serai", "Garam"],
  cara: ["Campurkan ikan dengan tapioka dan garam.", "Bentuk adonan pipih lalu rebus hingga matang.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai lalu masukkan santan.", "Masukkan tepek ikan dan masak hingga bumbu meresap."]
},
{
  id: 56,
  nama: "Lakse",
  daerah: "Kepulauan Riau",
  gambar: "images/lakse.jpg",
  deskripsi: "Makanan berbentuk mie dengan kuah santan berbumbu khas Kepulauan Riau.",
  bahan: ["300 gram mie lakse", "400 ml santan", "200 gram ikan", "4 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "1 batang serai", "Garam"],
  cara: ["Rebus mie hingga matang.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai.", "Tambahkan santan dan ikan.", "Masak hingga ikan matang lalu sajikan bersama mie."]
},
{
  id: 57,
  nama: "Otak-Otak Ikan",
  daerah: "Kepulauan Riau",
  gambar: "images/otak-otak-ikan.jpg",
  deskripsi: "Olahan ikan berbumbu yang dibungkus daun dan dipanggang.",
  bahan: ["300 gram ikan giling", "100 gram tepung tapioka", "100 ml santan", "4 siung bawang merah", "2 siung bawang putih", "Daun pisang", "Garam", "Merica"],
  cara: ["Haluskan bawang merah dan bawang putih.", "Campurkan ikan, tapioka, santan, dan bumbu.", "Bungkus adonan dengan daun pisang.", "Panggang hingga matang.", "Sajikan dengan sambal."]
},
{
  id: 58,
  nama: "Gulai Pisang",
  daerah: "Bengkulu",
  gambar: "images/gulai-pisang.jpg",
  deskripsi: "Masakan pisang muda dengan kuah santan berbumbu.",
  bahan: ["5 buah pisang kepok muda", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "1 batang serai", "Daun salam", "Garam"],
  cara: ["Kupas dan potong pisang.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan santan dan pisang.", "Masak hingga pisang empuk."]
},
{
  id: 59,
  nama: "Gulai Taboh",
  daerah: "Lampung",
  gambar: "images/gulai-taboh.jpg",
  deskripsi: "Gulai khas Lampung dengan santan, ikan, dan sayuran.",
  bahan: ["300 gram ikan", "400 ml santan", "100 gram kacang panjang", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm kunyit", "Garam"],
  cara: ["Bersihkan ikan dan potong sayuran.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu hingga harum.", "Masukkan santan, ikan, dan sayuran.", "Masak hingga matang."]
},
{
  id: 60,
  nama: "Kue Engkak Ketan",
  daerah: "Lampung",
  gambar: "images/engkak-ketan.jpg",
  deskripsi: "Kue lapis tradisional berbahan tepung ketan dan santan.",
  bahan: ["250 gram tepung ketan", "500 ml santan", "200 gram gula pasir", "4 butir telur", "100 gram mentega", "Vanili", "Garam"],
  cara: ["Kocok telur dan gula hingga tercampur.", "Masukkan tepung ketan dan santan.", "Tambahkan mentega cair dan vanili.", "Tuang adonan sedikit demi sedikit ke loyang.", "Panggang setiap lapisan hingga matang."]
},
{
  id: 61,
  nama: "Sate Ambal",
  daerah: "Jawa Tengah",
  gambar: "images/sate-ambal.jpg",
  deskripsi: "Sate ayam khas Kebumen dengan saus tempe berbumbu.",
  bahan: ["500 gram daging ayam", "150 gram tempe", "4 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "Kecap manis", "Garam", "Tusuk sate"],
  cara: ["Potong ayam dan tusukkan pada tusuk sate.", "Haluskan tempe bersama bawang dan cabai.", "Masak saus tempe dengan sedikit air dan kecap.", "Bakar sate hingga matang.", "Sajikan dengan saus tempe."]
},
{
  id: 62,
  nama: "Garang Asem",
  daerah: "Jawa Tengah",
  gambar: "images/garang-asem.jpg",
  deskripsi: "Ayam berkuah asam segar yang dibungkus daun pisang.",
  bahan: ["500 gram ayam", "5 siung bawang merah", "3 siung bawang putih", "3 buah tomat hijau", "5 cabai rawit", "2 lembar daun salam", "200 ml santan encer", "Garam"],
  cara: ["Potong ayam dan bersihkan.", "Iris bawang, tomat, dan cabai.", "Campurkan ayam dengan semua bumbu dan santan.", "Bungkus menggunakan daun pisang.", "Kukus hingga ayam matang."]
},
{
  id: 63,
  nama: "Brongkos",
  daerah: "DI Yogyakarta",
  gambar: "images/brongkos.jpg",
  deskripsi: "Masakan daging dan kacang berkuah santan dengan kluwek.",
  bahan: ["300 gram daging sapi", "100 gram kacang tolo", "400 ml santan", "2 buah kluwek siap olah", "5 siung bawang merah", "3 siung bawang putih", "2 cm lengkuas", "Garam"],
  cara: ["Rebus daging dan kacang hingga empuk.", "Haluskan kluwek, bawang, dan bumbu lainnya.", "Tumis bumbu hingga harum.", "Masukkan daging, kacang, dan santan.", "Masak hingga kuah mengental."]
},
{
  id: 64,
  nama: "Tongseng Kambing",
  daerah: "Jawa Tengah",
  gambar: "images/tongseng-kambing.jpg",
  deskripsi: "Masakan daging kambing dengan kuah gurih dan kecap.",
  bahan: ["400 gram daging kambing", "300 ml santan", "Kol secukupnya", "2 buah tomat", "5 siung bawang merah", "3 siung bawang putih", "Kecap manis", "Garam"],
  cara: ["Potong daging kambing.", "Haluskan bawang dan tumis hingga harum.", "Masukkan daging dan kecap.", "Tuangkan santan dan masak hingga daging empuk.", "Tambahkan kol dan tomat lalu sajikan."]
},
{
  id: 65,
  nama: "Pindang Serani",
  daerah: "Jawa Tengah",
  gambar: "images/pindang-serani.jpg",
  deskripsi: "Sup ikan berkuah bening dengan rasa asam dan segar.",
  bahan: ["500 gram ikan laut", "1 liter air", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 buah tomat", "2 batang serai", "Jeruk nipis", "Garam"],
  cara: ["Bersihkan ikan dan lumuri jeruk nipis.", "Iris bawang dan tomat.", "Rebus air bersama bumbu dan serai.", "Masukkan ikan dan tomat.", "Masak hingga ikan matang."]
},
{
  id: 66,
  nama: "Nasi Gandul",
  daerah: "Jawa Tengah",
  gambar: "images/nasi-gandul.jpg",
  deskripsi: "Nasi dengan irisan daging sapi dan kuah santan rempah khas Pati.",
  bahan: ["300 gram daging sapi", "500 ml santan encer", "5 siung bawang merah", "3 siung bawang putih", "2 cm lengkuas", "2 lembar daun salam", "Kecap manis", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan bawang dan tumis bersama lengkuas.", "Masukkan santan dan daun salam.", "Tambahkan daging dan kecap.", "Masak hingga bumbu meresap lalu sajikan dengan nasi."]
},
{
  id: 67,
  nama: "Soto Sokaraja",
  daerah: "Jawa Tengah",
  gambar: "images/soto-sokaraja.jpg",
  deskripsi: "Soto dengan sambal kacang khas Banyumas.",
  bahan: ["300 gram ayam", "1 liter kaldu ayam", "100 gram kacang tanah", "4 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "Kecap manis", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Haluskan bawang dan jahe lalu tumis.", "Masukkan bumbu ke dalam kaldu.", "Haluskan kacang dan campur dengan cabai serta kecap.", "Sajikan soto dengan sambal kacang."]
},
{
  id: 68,
  nama: "Lontong Balap",
  daerah: "Jawa Timur",
  gambar: "images/lontong-balap.jpg",
  deskripsi: "Lontong dengan tauge, tahu, lentho, dan kuah gurih khas Surabaya.",
  bahan: ["2 buah lontong", "200 gram tauge", "4 buah tahu", "100 gram kacang tolo", "3 siung bawang putih", "1 liter kaldu", "Daun bawang", "Garam"],
  cara: ["Rebus tauge sebentar.", "Goreng tahu hingga matang.", "Buat lentho dari kacang tolo yang telah dihaluskan dan dibumbui.", "Panaskan kaldu bersama bawang putih.", "Sajikan lontong dengan tahu, tauge, lentho, dan kuah."]
},
{
  id: 69,
  nama: "Rujak Cingur",
  daerah: "Jawa Timur",
  gambar: "images/rujak-cingur.jpg",
  deskripsi: "Rujak khas Surabaya dengan sayuran, buah, lontong, dan bumbu petis.",
  bahan: ["200 gram cingur sapi matang", "1 buah mentimun", "1 buah bengkuang", "100 gram kangkung", "100 gram tauge", "100 gram kacang tanah", "2 sendok makan petis", "Asam jawa"],
  cara: ["Rebus sayuran hingga matang.", "Potong buah, lontong, dan cingur yang sudah matang.", "Haluskan kacang bersama petis dan asam jawa.", "Tambahkan sedikit air hingga menjadi saus.", "Campurkan semua bahan dan sajikan."]
},
{
  id: 70,
  nama: "Nasi Krawu",
  daerah: "Jawa Timur",
  gambar: "images/nasi-krawu.jpg",
  deskripsi: "Nasi dengan suwiran daging sapi dan serundeng khas Gresik.",
  bahan: ["400 gram daging sapi", "300 gram beras", "100 gram kelapa parut", "5 siung bawang merah", "3 siung bawang putih", "Ketumbar", "Daun salam", "Garam"],
  cara: ["Rebus daging dengan bumbu hingga empuk.", "Suwir daging setelah matang.", "Sangrai kelapa dengan bumbu hingga menjadi serundeng.", "Masak nasi hingga matang.", "Sajikan nasi bersama daging dan serundeng."]
},
{
  id: 71,
  nama: "Sate Klathak",
  daerah: "DI Yogyakarta",
  gambar: "images/sate-klathak.jpg",
  deskripsi: "Sate kambing sederhana khas Bantul dengan bumbu garam.",
  bahan: ["500 gram daging kambing", "3 siung bawang putih", "1 sendok teh garam", "1/2 sendok teh merica", "Sedikit air jeruk nipis", "Tusuk sate besi"],
  cara: ["Potong daging kambing.", "Haluskan bawang putih, garam, dan merica.", "Lumuri daging dengan bumbu.", "Tusukkan daging pada tusuk sate.", "Bakar hingga matang merata."]
},
{
  id: 72,
  nama: "Ayam Lodho",
  daerah: "Jawa Timur",
  gambar: "images/ayam-lodho.jpg",
  deskripsi: "Ayam berbumbu santan khas Tulungagung.",
  bahan: ["1 ekor ayam", "400 ml santan", "5 siung bawang merah", "4 siung bawang putih", "4 cabai merah", "2 cm kunyit", "2 batang serai", "Garam"],
  cara: ["Bersihkan ayam dan panggang sebentar.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan ayam dan santan.", "Masak hingga ayam matang dan bumbu meresap."]
},
{
  id: 73,
  nama: "Sate Bandeng Tanpa Duri",
  daerah: "Banten",
  gambar: "images/sate-bandeng-tanpa-duri.jpg",
  deskripsi: "Bandeng berbumbu yang diolah kembali dalam bentuk sate khas Banten.",
  bahan: ["500 gram daging bandeng tanpa duri", "5 siung bawang merah", "3 siung bawang putih", "2 cabai merah", "100 ml santan", "1 butir telur", "Garam", "Tusuk sate"],
  cara: ["Pastikan daging bandeng bersih dari duri.", "Haluskan bawang dan cabai.", "Campurkan ikan dengan bumbu, santan, dan telur.", "Bentuk adonan pada tusuk sate.", "Panggang hingga matang."]
},
{
  id: 74,
  nama: "Laksa Betawi",
  daerah: "DKI Jakarta",
  gambar: "images/laksa-betawi.jpg",
  deskripsi: "Laksa berkuah santan dengan rempah khas Betawi.",
  bahan: ["300 gram bihun", "300 ml santan", "200 gram ayam", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "Serai", "Daun salam", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan santan dan kaldu ayam.", "Sajikan kuah bersama bihun dan ayam."]
},
{
  id: 75,
  nama: "Asinan Betawi",
  daerah: "DKI Jakarta",
  gambar: "images/asinan-betawi.jpg",
  deskripsi: "Campuran sayuran segar dengan kuah kacang bercita rasa asam dan pedas.",
  bahan: ["100 gram kol", "100 gram tauge", "1 buah mentimun", "1 buah tahu matang", "100 gram kacang tanah", "3 cabai merah", "2 sendok makan cuka", "Gula merah", "Garam"],
  cara: ["Cuci sayuran hingga bersih.", "Haluskan kacang dan cabai.", "Rebus bumbu dengan air, gula, dan garam.", "Tambahkan cuka setelah kuah dingin.", "Siram sayuran dengan kuah dan sajikan."]
},
{
  id: 76,
  nama: "Combro",
  daerah: "Jawa Barat",
  gambar: "images/combro.jpg",
  deskripsi: "Gorengan singkong parut berisi oncom berbumbu.",
  bahan: ["500 gram singkong parut", "150 gram oncom", "3 siung bawang merah", "2 siung bawang putih", "3 cabai rawit", "Daun bawang", "Garam", "Minyak goreng"],
  cara: ["Haluskan singkong dan beri sedikit garam.", "Hancurkan oncom lalu tumis bersama bumbu.", "Ambil adonan singkong dan isi dengan oncom.", "Bentuk lonjong dan rapatkan.", "Goreng hingga matang dan kecokelatan."]
},
{
  id: 77,
  nama: "Misro",
  daerah: "Jawa Barat",
  gambar: "images/misro.jpg",
  deskripsi: "Gorengan singkong dengan isian gula merah.",
  bahan: ["500 gram singkong parut", "100 gram gula merah", "1/2 sendok teh garam", "Kelapa parut secukupnya", "Minyak goreng"],
  cara: ["Campurkan singkong dengan garam.", "Ambil sedikit adonan lalu pipihkan.", "Isi dengan gula merah dan bulatkan.", "Pastikan isian tertutup rapat.", "Goreng hingga matang."]
},
{
  id: 78,
  nama: "Nasi Jamblang",
  daerah: "Jawa Barat",
  gambar: "images/nasi-jamblang.jpg",
  deskripsi: "Nasi khas Cirebon yang disajikan dengan berbagai lauk dan daun jati.",
  bahan: ["300 gram beras", "Daun jati bersih khusus pangan", "100 gram tahu", "100 gram tempe", "2 butir telur", "Sambal", "Garam"],
  cara: ["Cuci beras dan masak hingga menjadi nasi.", "Siapkan tahu, tempe, dan telur sebagai lauk.", "Masak lauk dengan bumbu sesuai selera.", "Bungkus nasi menggunakan daun jati khusus pangan.", "Sajikan bersama aneka lauk."]
},
{
  id: 79,
  nama: "Soto Bandung",
  daerah: "Jawa Barat",
  gambar: "images/soto-bandung.jpg",
  deskripsi: "Soto daging sapi dengan lobak dan kuah bening.",
  bahan: ["300 gram daging sapi", "1 buah lobak", "1 liter air", "4 siung bawang putih", "4 siung bawang merah", "2 batang serai", "Daun bawang", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Iris lobak dan rebus sebentar.", "Haluskan bawang lalu tumis bersama serai.", "Masukkan bumbu ke dalam kaldu.", "Tambahkan lobak dan sajikan dengan daging."]
},
{
  id: 80,
  nama: "Nasi Tutug Oncom",
  daerah: "Jawa Barat",
  gambar: "images/nasi-tutug-oncom.jpg",
  deskripsi: "Nasi hangat yang dicampur dengan oncom berbumbu khas Sunda.",
  bahan: ["400 gram nasi putih", "150 gram oncom", "4 siung bawang merah", "2 siung bawang putih", "3 cabai rawit", "Kencur", "Garam", "Daun kemangi"],
  cara: ["Bakar atau sangrai oncom hingga matang.", "Haluskan bawang, cabai, dan kencur.", "Tumis bumbu lalu masukkan oncom.", "Hancurkan oncom dan campurkan dengan nasi.", "Tambahkan kemangi dan sajikan."]
},
{
  id: 81,
  nama: "Sate Taichan",
  daerah: "DKI Jakarta",
  gambar: "images/sate-taichan.jpg",
  deskripsi: "Sate ayam panggang dengan sambal cabai dan perasan jeruk.",
  bahan: ["400 gram dada ayam", "3 siung bawang putih", "1 buah jeruk nipis", "5 cabai rawit", "Garam", "Merica", "Tusuk sate"],
  cara: ["Potong ayam menjadi ukuran kecil.", "Bumbui ayam dengan bawang, garam, dan merica.", "Tusukkan ayam pada tusuk sate.", "Bakar hingga matang merata.", "Sajikan dengan sambal cabai dan jeruk nipis."]
},
{
  id: 82,
  nama: "Pecel Madiun",
  daerah: "Jawa Timur",
  gambar: "images/pecel-madiun.jpg",
  deskripsi: "Sayuran rebus dengan sambal kacang khas Madiun.",
  bahan: ["100 gram bayam", "100 gram tauge", "100 gram kacang panjang", "150 gram kacang tanah", "3 cabai merah", "2 siung bawang putih", "Kencur", "Gula merah", "Garam"],
  cara: ["Rebus semua sayuran hingga matang.", "Goreng kacang tanah.", "Haluskan kacang bersama cabai, bawang, dan kencur.", "Tambahkan gula merah dan garam.", "Encerkan sambal dengan air hangat lalu sajikan bersama sayuran."]
},
{
  id: 83,
  nama: "Soto Lamongan",
  daerah: "Jawa Timur",
  gambar: "images/soto-lamongan.jpg",
  deskripsi: "Soto ayam berkuah kuning dengan taburan koya.",
  bahan: ["400 gram ayam", "1 liter air", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "2 batang serai", "Kerupuk udang", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan bumbu ke dalam kaldu.", "Sajikan dengan ayam suwir dan koya dari kerupuk udang."]
},
{
  id: 84,
  nama: "Bebek Sinjay",
  daerah: "Jawa Timur",
  gambar: "images/bebek-sinjay.jpg",
  deskripsi: "Bebek goreng khas Madura yang disajikan dengan sambal pencit.",
  bahan: ["1 ekor bebek", "5 siung bawang putih", "6 siung bawang merah", "2 cm kunyit", "2 batang serai", "1 buah mangga muda", "Cabai rawit", "Garam"],
  cara: ["Potong dan bersihkan bebek.", "Haluskan bawang dan kunyit lalu tumis bersama serai.", "Masak bebek dengan bumbu dan air hingga empuk.", "Goreng bebek hingga bagian luar kecokelatan.", "Buat sambal mangga muda dan sajikan."]
},
{
  id: 85,
  nama: "Bubur Sumsum",
  daerah: "Jawa",
  gambar: "images/bubur-sumsum.jpg",
  deskripsi: "Bubur lembut dari tepung beras dengan kuah gula merah.",
  bahan: ["100 gram tepung beras", "700 ml santan", "1/2 sendok teh garam", "150 gram gula merah", "200 ml air", "1 lembar daun pandan"],
  cara: ["Larutkan tepung beras dengan sebagian santan.", "Panaskan sisa santan bersama garam dan pandan.", "Tuangkan larutan tepung sambil diaduk hingga mengental.", "Rebus gula merah dengan air hingga larut.", "Sajikan bubur bersama kuah gula merah."]
},
{
  id: 86,
  nama: "Kue Putu",
  daerah: "Jawa",
  gambar: "images/kue-putu.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dengan isian gula merah.",
  bahan: ["250 gram tepung beras", "100 gram gula merah", "100 gram kelapa parut", "Garam", "Daun pandan"],
  cara: ["Kukus kelapa parut dengan sedikit garam.", "Campurkan tepung beras dengan air pandan hingga berbutir.", "Masukkan adonan ke cetakan dan isi gula merah.", "Kukus hingga matang.", "Sajikan dengan kelapa parut."]
},
{
  id: 87,
  nama: "Kue Cucur",
  daerah: "DKI Jakarta",
  gambar: "images/kue-cucur.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dan gula merah.",
  bahan: ["150 gram tepung beras", "50 gram tepung terigu", "150 gram gula merah", "200 ml air", "Daun pandan", "Minyak goreng"],
  cara: ["Rebus gula merah bersama air dan pandan.", "Campurkan tepung beras dan tepung terigu.", "Tuangkan larutan gula sedikit demi sedikit.", "Diamkan adonan sebentar.", "Goreng adonan hingga matang."]
},
{
  id: 88,
  nama: "Kue Lapis Legit",
  daerah: "Jakarta",
  gambar: "images/lapis-legit.jpg",
  deskripsi: "Kue berlapis dengan aroma rempah dan tekstur lembut.",
  bahan: ["200 gram mentega", "150 gram gula halus", "10 kuning telur", "50 gram tepung terigu", "Bubuk spekuk", "Susu kental manis"],
  cara: ["Kocok mentega dan gula hingga lembut.", "Masukkan kuning telur secara bertahap.", "Tambahkan tepung dan bubuk spekuk.", "Tuang adonan tipis ke loyang.", "Panggang lapis demi lapis hingga matang."]
},
{
  id: 89,
  nama: "Bubur Kampiun",
  daerah: "Sumatera Barat",
  gambar: "images/bubur-kampiun.jpg",
  deskripsi: "Hidangan manis dengan campuran bubur sumsum, ketan, dan kolak.",
  bahan: ["100 gram beras ketan", "100 gram tepung beras", "300 ml santan", "100 gram pisang", "100 gram gula merah", "Daun pandan", "Garam"],
  cara: ["Masak beras ketan hingga menjadi ketan matang.", "Buat bubur sumsum dari tepung beras dan santan.", "Masak pisang dengan gula merah dan pandan.", "Siapkan semua komponen.", "Sajikan bersama dalam satu mangkuk."]
},
{
  id: 90,
  nama: "Sala Lauak",
  daerah: "Sumatera Barat",
  gambar: "images/sala-lauak.jpg",
  deskripsi: "Gorengan berbentuk bola dari tepung beras dan ikan khas Pariaman.",
  bahan: ["200 gram tepung beras", "100 gram ikan asin yang sudah diolah", "3 siung bawang merah", "2 siung bawang putih", "2 cabai merah", "Kunyit", "Daun kunyit", "Garam"],
  cara: ["Sangrai tepung beras sebentar.", "Haluskan bawang, cabai, dan kunyit.", "Campurkan tepung dengan ikan dan bumbu.", "Tambahkan air sedikit demi sedikit lalu bentuk bola.", "Goreng hingga matang."]
},
{
  id: 91,
  nama: "Gulai Itiak",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-itiak.jpg",
  deskripsi: "Gulai bebek berbumbu cabai hijau khas daerah Koto Gadang.",
  bahan: ["500 gram daging bebek", "400 ml santan", "8 cabai hijau", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 batang serai", "Garam"],
  cara: ["Potong dan bersihkan bebek.", "Haluskan cabai, bawang, dan jahe.", "Tumis bumbu bersama serai.", "Masukkan bebek dan santan.", "Masak hingga bebek empuk dan bumbu meresap."]
},
{
  id: 92,
  nama: "Gulai Kepala Ikan",
  daerah: "Sumatera Utara",
  gambar: "images/gulai-kepala-ikan.jpg",
  deskripsi: "Kepala ikan dimasak dengan santan dan rempah.",
  bahan: ["1 kepala ikan kakap", "500 ml santan", "5 siung bawang merah", "4 siung bawang putih", "2 cm kunyit", "2 cm jahe", "2 batang serai", "Daun jeruk", "Garam"],
  cara: ["Bersihkan kepala ikan.", "Haluskan bawang, kunyit, dan jahe.", "Tumis bumbu bersama serai dan daun jeruk.", "Tambahkan santan dan kepala ikan.", "Masak hingga ikan matang."]
},
{
  id: 93,
  nama: "Arsik Ikan Mas",
  daerah: "Sumatera Utara",
  gambar: "images/arsik-ikan-mas.jpg",
  deskripsi: "Ikan mas berbumbu andaliman dan rempah khas Batak.",
  bahan: ["500 gram ikan mas", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "2 cm jahe", "Andaliman secukupnya", "Asam cikala", "Serai", "Garam"],
  cara: ["Bersihkan ikan dan siapkan bumbu.", "Haluskan bawang, kunyit, jahe, dan andaliman.", "Susun serai dan bumbu di dasar panci.", "Masukkan ikan dan tambahkan air.", "Masak perlahan hingga ikan matang dan kuah menyusut."]
},
{
  id: 94,
  nama: "Mie Gomak",
  daerah: "Sumatera Utara",
  gambar: "images/mie-gomak.jpg",
  deskripsi: "Mie tebal khas Batak dengan bumbu rempah dan kuah santan.",
  bahan: ["300 gram mie lidi", "300 ml santan", "4 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "Andaliman secukupnya", "Daun bawang", "Garam"],
  cara: ["Rebus mie lidi hingga matang.", "Haluskan bawang, kunyit, dan andaliman.", "Tumis bumbu hingga harum.", "Masukkan santan dan masak hingga mendidih.", "Sajikan kuah bersama mie."]
},
{
  id: 95,
  nama: "Bolu Kojo",
  daerah: "Sumatera Selatan",
  gambar: "images/bolu-kojo.jpg",
  deskripsi: "Kue pandan tradisional dengan tekstur lembut dan aroma santan.",
  bahan: ["200 gram tepung terigu", "200 gram gula pasir", "3 butir telur", "400 ml santan", "Pasta pandan", "50 gram mentega", "Garam"],
  cara: ["Kocok telur dan gula hingga tercampur.", "Masukkan tepung sedikit demi sedikit.", "Tambahkan santan dan pasta pandan.", "Masukkan mentega cair.", "Tuang ke loyang dan panggang hingga matang."]
},
{
  id: 96,
  nama: "Kue Maksuba",
  daerah: "Sumatera Selatan",
  gambar: "images/kue-maksuba.jpg",
  deskripsi: "Kue lapis khas Palembang yang dibuat dari telur dan susu.",
  bahan: ["10 butir telur", "200 gram gula pasir", "100 gram mentega cair", "100 ml susu kental manis", "Vanili secukupnya"],
  cara: ["Kocok telur dan gula hingga tercampur.", "Tambahkan susu dan vanili.", "Masukkan mentega cair.", "Tuang adonan tipis ke loyang.", "Panggang lapis demi lapis hingga matang."]
},
{
  id: 97,
  nama: "Gulai Siput Riau",
  daerah: "Kepulauan Riau",
  gambar: "images/gulai-siput.jpg",
  deskripsi: "Siput laut yang dimasak dalam kuah santan berbumbu.",
  bahan: ["500 gram siput laut yang layak konsumsi", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm kunyit", "1 batang serai", "Garam"],
  cara: ["Bersihkan siput dengan baik.", "Rebus siput hingga matang.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai lalu masukkan santan.", "Masukkan siput dan masak hingga bumbu meresap."]
},
{
  id: 98,
  nama: "Lempok Durian",
  daerah: "Kalimantan Barat",
  gambar: "images/lempok-durian.jpg",
  deskripsi: "Olahan durian manis yang dimasak hingga menjadi dodol.",
  bahan: ["500 gram daging durian", "150 gram gula pasir", "50 gram gula merah", "Sejumput garam"],
  cara: ["Pisahkan daging durian dari bijinya.", "Campurkan durian dengan gula dan garam.", "Masak dengan api kecil sambil terus diaduk.", "Lanjutkan hingga adonan mengental dan kalis.", "Dinginkan lalu potong sesuai selera."]
},
{
  id: 99,
  nama: "Kue Bingka",
  daerah: "Kalimantan Selatan",
  gambar: "images/kue-bingka.jpg",
  deskripsi: "Kue tradisional lembut berbahan kentang, telur, dan santan.",
  bahan: ["250 gram kentang rebus", "3 butir telur", "200 ml santan", "100 gram gula pasir", "50 gram tepung terigu", "Vanili", "Garam"],
  cara: ["Haluskan kentang rebus.", "Kocok telur dan gula.", "Campurkan kentang, tepung, santan, dan vanili.", "Tuang ke cetakan yang telah diolesi mentega.", "Panggang hingga matang."]
},
{
  id: 100,
  nama: "Kue Amparan Tatak",
  daerah: "Kalimantan Selatan",
  gambar: "images/amparan-tatak.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras, santan, dan pisang.",
  bahan: ["200 gram tepung beras", "500 ml santan", "100 gram gula pasir", "4 buah pisang kepok", "1 lembar daun pandan", "Garam"],
  cara: ["Campurkan tepung beras, santan, gula, dan garam.", "Potong pisang menjadi beberapa bagian.", "Tuang sebagian adonan ke loyang lalu kukus hingga setengah matang.", "Susun pisang dan tuangkan sisa adonan.", "Kukus hingga seluruh bagian matang."]
},
{
  id: 101,
  nama: "Nasi Ulam",
  daerah: "DKI Jakarta",
  gambar: "images/nasi-ulam.jpg",
  deskripsi: "Nasi berbumbu rempah yang dicampur kelapa sangrai dan aneka daun aromatik.",
  bahan: ["500 gram nasi putih", "100 gram kelapa parut", "2 siung bawang merah", "1 batang serai", "Daun kemangi", "Daun pegagan", "Garam"],
  cara: ["Sangrai kelapa hingga harum.", "Haluskan bawang merah dan serai.", "Tumis bumbu lalu campurkan dengan kelapa.", "Campurkan nasi dengan bumbu dan daun aromatik.", "Aduk rata dan sajikan."]
},
{
  id: 102,
  nama: "Soto Kudus",
  daerah: "Jawa Tengah",
  gambar: "images/soto-kudus.jpg",
  deskripsi: "Soto berkuah bening dengan suwiran ayam, tauge, dan taburan bawang putih goreng.",
  bahan: ["400 gram ayam", "1 liter air", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 batang serai", "Tauge", "Daun bawang", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Haluskan bawang dan jahe.", "Tumis bumbu bersama serai.", "Masukkan tumisan ke dalam kaldu.", "Sajikan bersama ayam suwir, tauge, dan daun bawang."]
},
{
  id: 103,
  nama: "Mie Koclok",
  daerah: "Jawa Barat",
  gambar: "images/mie-koclok.jpg",
  deskripsi: "Mie khas Cirebon dengan kuah putih kental dari santan dan kaldu ayam.",
  bahan: ["300 gram mie telur", "200 gram ayam", "500 ml kaldu ayam", "200 ml santan", "3 siung bawang putih", "2 sendok makan tepung maizena", "Kol", "Tauge", "Garam"],
  cara: ["Rebus mie hingga matang lalu tiriskan.", "Rebus ayam dan suwir setelah matang.", "Tumis bawang putih hingga harum.", "Masukkan kaldu, santan, dan larutan maizena.", "Masak hingga kuah mengental lalu sajikan bersama mie dan sayuran."]
},
{
  id: 104,
  nama: "Empal Gentong",
  daerah: "Jawa Barat",
  gambar: "images/empal-gentong.jpg",
  deskripsi: "Sup daging sapi khas Cirebon dengan kuah santan dan rempah yang gurih.",
  bahan: ["400 gram daging sapi", "500 ml santan", "1 liter kaldu sapi", "5 siung bawang merah", "4 siung bawang putih", "2 cm kunyit", "2 batang serai", "Daun kucai", "Garam"],
  cara: ["Rebus daging hingga empuk lalu potong-potong.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan kaldu, santan, dan daging.", "Masak hingga bumbu meresap lalu sajikan dengan daun kucai."]
},
{
  id: 105,
  nama: "Tahu Campur",
  daerah: "Jawa Timur",
  gambar: "images/tahu-campur.jpg",
  deskripsi: "Hidangan khas Lamongan berisi tahu, lontong, selada, dan kuah petis gurih.",
  bahan: ["4 buah tahu putih", "2 buah lontong", "100 gram selada", "100 gram tauge", "150 gram daging sapi", "2 sendok makan petis", "3 siung bawang putih", "Kerupuk", "Garam"],
  cara: ["Rebus daging hingga empuk dan sisihkan kaldunya.", "Goreng tahu hingga matang.", "Haluskan bawang putih dan campurkan dengan petis.", "Tambahkan sedikit kaldu untuk membuat saus.", "Sajikan lontong, tahu, daging, dan sayuran dengan saus petis."]
},
{
  id: 106,
  nama: "Sego Tempong",
  daerah: "Jawa Timur",
  gambar: "images/sego-tempong.jpg",
  deskripsi: "Nasi khas Banyuwangi dengan sayuran rebus, lauk, dan sambal pedas.",
  bahan: ["500 gram nasi putih", "100 gram bayam", "100 gram kacang panjang", "100 gram tauge", "5 cabai rawit", "2 cabai merah", "1 buah tomat", "1 sendok teh terasi", "Garam"],
  cara: ["Rebus bayam, kacang panjang, dan tauge.", "Goreng tomat dan cabai sebentar.", "Ulek cabai bersama terasi dan garam.", "Siapkan nasi dan sayuran dalam piring.", "Sajikan dengan sambal dan lauk sesuai selera."]
},
{
  id: 107,
  nama: "Rujak Soto",
  daerah: "Jawa Timur",
  gambar: "images/rujak-soto.jpg",
  deskripsi: "Perpaduan rujak sayuran berbumbu petis dengan kuah soto khas Banyuwangi.",
  bahan: ["200 gram daging sapi matang", "100 gram kangkung", "100 gram tauge", "1 buah lontong", "2 sendok makan petis", "100 gram kacang tanah", "2 siung bawang putih", "1 liter kaldu sapi", "Garam"],
  cara: ["Rebus kangkung dan tauge hingga matang.", "Haluskan kacang, bawang putih, dan petis.", "Tambahkan sedikit air hingga menjadi saus rujak.", "Susun lontong dan sayuran di mangkuk.", "Tambahkan daging dan siram dengan kuah soto panas."]
},
{
  id: 108,
  nama: "Ayam Panggang Klaten",
  daerah: "Jawa Tengah",
  gambar: "images/ayam-panggang-klaten.jpg",
  deskripsi: "Ayam panggang dengan bumbu santan dan rempah khas Klaten.",
  bahan: ["1 ekor ayam", "400 ml santan", "6 siung bawang merah", "4 siung bawang putih", "3 butir kemiri", "2 cm kunyit", "2 batang serai", "Daun salam", "Garam"],
  cara: ["Bersihkan ayam dan potong sesuai selera.", "Haluskan bawang, kemiri, dan kunyit.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan santan dan ayam lalu masak hingga bumbu meresap.", "Panggang ayam hingga matang dan kecokelatan."]
},
{
  id: 109,
  nama: "Nasi Pindang Kudus",
  daerah: "Jawa Tengah",
  gambar: "images/nasi-pindang-kudus.jpg",
  deskripsi: "Nasi dengan irisan daging sapi dan kuah hitam gurih berbumbu kluwek.",
  bahan: ["300 gram daging sapi", "1 liter air", "2 buah kluwek siap olah", "5 siung bawang merah", "3 siung bawang putih", "2 cm lengkuas", "2 lembar daun salam", "Daun melinjo", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan kluwek bersama bawang.", "Tumis bumbu dengan lengkuas dan daun salam.", "Masukkan bumbu ke dalam kaldu dan tambahkan daun melinjo.", "Sajikan kuah bersama nasi dan irisan daging."]
},
{
  id: 110,
  nama: "Lentog Tanjung",
  daerah: "Jawa Tengah",
  gambar: "images/lentog-tanjung.jpg",
  deskripsi: "Hidangan lontong dengan sayur nangka muda dan tahu khas Kudus.",
  bahan: ["3 buah lontong", "200 gram nangka muda", "3 buah tahu", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 lembar daun salam", "Garam"],
  cara: ["Rebus nangka muda hingga empuk.", "Haluskan bawang merah dan bawang putih.", "Tumis bumbu bersama daun salam.", "Masukkan santan, nangka, dan tahu.", "Sajikan sayur bersama potongan lontong."]
},
{
  id: 111,
  nama: "Sate Kere",
  daerah: "Jawa Tengah",
  gambar: "images/sate-kere.jpg",
  deskripsi: "Sate khas Solo berbahan tempe gembus dengan bumbu kacang.",
  bahan: ["300 gram tempe gembus", "2 sendok makan kecap manis", "150 gram kacang tanah", "3 siung bawang putih", "3 cabai merah", "1 sendok makan gula merah", "Garam", "Tusuk sate"],
  cara: ["Potong tempe gembus menjadi kotak.", "Haluskan bawang, cabai, dan kacang tanah.", "Masak bumbu dengan gula merah dan sedikit air.", "Tusukkan tempe lalu panggang hingga kecokelatan.", "Sajikan dengan saus kacang."]
},
{
  id: 112,
  nama: "Timlo Solo",
  daerah: "Jawa Tengah",
  gambar: "images/timlo-solo.jpg",
  deskripsi: "Sup bening khas Solo dengan ayam, telur, sosis solo, dan kuah kaldu.",
  bahan: ["300 gram ayam", "1 liter kaldu ayam", "2 butir telur rebus", "4 buah sosis solo", "4 siung bawang putih", "2 cm jahe", "Daun bawang", "Garam", "Merica"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Tumis bawang putih dan jahe.", "Masukkan tumisan ke dalam kaldu.", "Tambahkan garam dan merica.", "Sajikan dengan ayam, telur, sosis solo, dan daun bawang."]
},
{
  id: 113,
  nama: "Selat Solo",
  daerah: "Jawa Tengah",
  gambar: "images/selat-solo.jpg",
  deskripsi: "Hidangan daging sapi berkuah manis dengan sayuran dan saus khas Solo.",
  bahan: ["300 gram daging sapi", "2 buah kentang", "2 buah wortel", "100 gram buncis", "2 butir telur rebus", "3 sendok makan kecap manis", "4 siung bawang putih", "Pala", "Garam"],
  cara: ["Rebus daging hingga empuk lalu iris.", "Tumis bawang putih hingga harum.", "Masukkan kaldu, kecap, pala, dan daging.", "Rebus kentang, wortel, dan buncis hingga matang.", "Sajikan daging bersama sayuran dan telur."]
},
{
  id: 114,
  nama: "Mangut Lele",
  daerah: "DI Yogyakarta",
  gambar: "images/mangut-lele.jpg",
  deskripsi: "Lele goreng yang dimasak kembali dalam kuah santan pedas berbumbu.",
  bahan: ["500 gram ikan lele", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "5 cabai merah", "2 cm kencur", "2 batang serai", "Daun salam", "Garam"],
  cara: ["Bersihkan lele dan goreng hingga matang.", "Haluskan bawang, cabai, dan kencur.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan santan dan aduk perlahan.", "Masukkan lele lalu masak hingga bumbu meresap."]
},
{
  id: 115,
  nama: "Mangut Manyung",
  daerah: "Jawa Tengah",
  gambar: "images/mangut-manyung.jpg",
  deskripsi: "Ikan manyung asap yang dimasak dengan kuah santan pedas.",
  bahan: ["400 gram ikan manyung asap", "500 ml santan", "5 siung bawang merah", "3 siung bawang putih", "5 cabai merah", "2 cm kunyit", "2 batang serai", "Daun jeruk", "Garam"],
  cara: ["Potong ikan manyung dan bersihkan seperlunya.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai dan daun jeruk.", "Tuangkan santan dan masukkan ikan.", "Masak dengan api kecil hingga kuah meresap."]
},
{
  id: 116,
  nama: "Bothok Tahu Tempe",
  daerah: "Jawa Tengah",
  gambar: "images/bothok-tahu-tempe.jpg",
  deskripsi: "Olahan tahu dan tempe berbumbu kelapa yang dikukus dalam daun pisang.",
  bahan: ["200 gram tahu", "200 gram tempe", "150 gram kelapa parut", "4 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "Daun kemangi", "Daun pisang", "Garam"],
  cara: ["Potong kecil tahu dan tempe.", "Haluskan bawang dan cabai.", "Campurkan bumbu dengan kelapa parut.", "Masukkan tahu, tempe, dan kemangi.", "Bungkus dalam daun pisang lalu kukus hingga matang."]
},
{
  id: 117,
  nama: "Jangan Lombok",
  daerah: "DI Yogyakarta",
  gambar: "images/jangan-lombok.jpg",
  deskripsi: "Sayur santan khas Gunungkidul dengan tempe dan cabai hijau.",
  bahan: ["200 gram tempe", "8 cabai hijau", "500 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm lengkuas", "2 lembar daun salam", "Garam"],
  cara: ["Potong tempe dan iris cabai hijau.", "Iris bawang merah dan bawang putih.", "Tumis bawang bersama lengkuas dan daun salam.", "Masukkan santan, tempe, dan cabai.", "Masak hingga tempe matang dan kuah meresap."]
},
{
  id: 118,
  nama: "Sayur Asem Betawi",
  daerah: "DKI Jakarta",
  gambar: "images/sayur-asem-betawi.jpg",
  deskripsi: "Sayur berkuah asam segar dengan jagung, melinjo, labu, dan kacang panjang.",
  bahan: ["1 buah jagung", "100 gram melinjo", "100 gram kacang panjang", "100 gram labu siam", "2 sendok makan asam jawa", "5 siung bawang merah", "3 siung bawang putih", "2 lembar daun salam", "Garam"],
  cara: ["Didihkan air bersama daun salam.", "Masukkan jagung dan melinjo.", "Haluskan bawang merah dan bawang putih.", "Masukkan bumbu, labu, dan kacang panjang.", "Tambahkan asam jawa dan garam lalu masak hingga matang."]
},
{
  id: 119,
  nama: "Karedok",
  daerah: "Jawa Barat",
  gambar: "images/karedok.jpg",
  deskripsi: "Salad sayuran mentah khas Sunda dengan saus kacang dan kencur.",
  bahan: ["100 gram kacang panjang", "100 gram tauge", "1 buah mentimun", "100 gram kol", "100 gram terong lalap", "150 gram kacang tanah", "2 siung bawang putih", "Kencur", "Gula merah"],
  cara: ["Cuci seluruh sayuran dengan air mengalir.", "Potong sayuran sesuai selera.", "Goreng kacang tanah lalu haluskan.", "Ulek bawang putih, kencur, dan gula merah bersama kacang.", "Tambahkan sedikit air lalu campurkan dengan sayuran."]
},
{
  id: 120,
  nama: "Lotek",
  daerah: "Jawa Barat",
  gambar: "images/lotek.jpg",
  deskripsi: "Sayuran rebus yang disajikan dengan saus kacang berbumbu kencur.",
  bahan: ["100 gram bayam", "100 gram kangkung", "100 gram tauge", "100 gram kacang panjang", "150 gram kacang tanah", "2 siung bawang putih", "Kencur", "Gula merah", "Garam"],
  cara: ["Rebus semua sayuran hingga matang.", "Goreng kacang tanah lalu haluskan.", "Ulek bawang putih, kencur, gula merah, dan garam.", "Campurkan kacang dengan bumbu dan sedikit air.", "Siram saus kacang di atas sayuran lalu sajikan."]
},
{
  id: 121,
  nama: "Kupat Tahu Bandung",
  daerah: "Jawa Barat",
  gambar: "images/kupat-tahu-bandung.jpg",
  deskripsi: "Ketupat dan tahu goreng dengan saus kacang yang gurih dan manis.",
  bahan: ["2 buah ketupat", "4 buah tahu putih", "100 gram tauge", "150 gram kacang tanah", "2 siung bawang putih", "2 sendok makan kecap manis", "Gula merah", "Garam"],
  cara: ["Goreng tahu hingga matang lalu potong.", "Rebus tauge sebentar.", "Haluskan kacang bersama bawang putih.", "Tambahkan gula merah, kecap, garam, dan air.", "Sajikan ketupat dengan tahu, tauge, dan saus kacang."]
},
{
  id: 122,
  nama: "Colenak",
  daerah: "Jawa Barat",
  gambar: "images/colenak.jpg",
  deskripsi: "Peuyeum bakar khas Bandung yang disajikan dengan saus kelapa dan gula merah.",
  bahan: ["300 gram peuyeum singkong", "100 gram kelapa parut", "100 gram gula merah", "100 ml santan", "1 lembar daun pandan", "Sejumput garam"],
  cara: ["Potong peuyeum sesuai selera.", "Panggang peuyeum hingga bagian luarnya kecokelatan.", "Masak gula merah bersama santan dan pandan.", "Masukkan kelapa parut dan garam.", "Sajikan peuyeum bakar dengan saus kelapa."]
},
{
  id: 123,
  nama: "Awug",
  daerah: "Jawa Barat",
  gambar: "images/awug.jpg",
  deskripsi: "Kue tradisional Sunda dari tepung beras dengan isian gula merah dan kelapa.",
  bahan: ["250 gram tepung beras", "150 gram kelapa parut", "150 gram gula merah", "1/2 sendok teh garam", "Daun pandan", "Daun pisang"],
  cara: ["Campurkan tepung beras dengan kelapa dan garam.", "Siapkan cetakan yang dialasi daun pisang.", "Masukkan adonan tepung dan gula merah secara berselang-seling.", "Tambahkan daun pandan.", "Kukus hingga awug matang dan sajikan."]
},
{
  id: 124,
  nama: "Bandros",
  daerah: "Jawa Barat",
  gambar: "images/bandros.jpg",
  deskripsi: "Kue gurih berbahan tepung beras dan kelapa yang dipanggang dalam cetakan.",
  bahan: ["200 gram tepung beras", "100 gram kelapa parut", "400 ml santan", "1/2 sendok teh garam", "1 sendok makan tepung tapioka"],
  cara: ["Campurkan tepung beras dan tapioka.", "Masukkan kelapa parut dan garam.", "Tuangkan santan sedikit demi sedikit sambil diaduk.", "Panaskan cetakan dan olesi sedikit minyak.", "Tuang adonan lalu panggang hingga matang."]
},
{
  id: 126,
  nama: "Laksa Bogor",
  daerah: "Jawa Barat",
  gambar: "images/laksa-bogor.jpg",
  deskripsi: "Laksa berkuah santan dengan oncom, bihun, tauge, dan daun kemangi.",
  bahan: ["200 gram bihun", "150 gram oncom", "400 ml santan", "100 gram tauge", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "Daun kemangi", "Garam"],
  cara: ["Rebus bihun dan tauge secara terpisah.", "Haluskan bawang dan kunyit.", "Tumis bumbu lalu masukkan oncom.", "Tambahkan santan dan masak hingga mendidih.", "Sajikan kuah bersama bihun, tauge, dan kemangi."]
},
{
  id: 127,
  nama: "Tauge Goreng",
  daerah: "Jawa Barat",
  gambar: "images/tauge-goreng.jpg",
  deskripsi: "Hidangan tauge dan mie dengan saus tauco khas Bogor.",
  bahan: ["200 gram tauge", "200 gram mie kuning", "2 buah tahu", "100 gram oncom", "3 siung bawang putih", "4 siung bawang merah", "2 sendok makan tauco", "Kecap manis", "Garam"],
  cara: ["Rebus tauge dan mie hingga matang.", "Goreng tahu lalu potong-potong.", "Haluskan bawang dan tumis bersama tauco.", "Masukkan oncom dan kecap lalu masak hingga menjadi saus.", "Sajikan saus di atas mie, tauge, dan tahu."]
},
{
  id: 128,
  nama: "Doclang",
  daerah: "Jawa Barat",
  gambar: "images/doclang.jpg",
  deskripsi: "Ketupat khas Bogor dengan tahu, kentang, telur, dan saus kacang.",
  bahan: ["2 buah ketupat", "2 buah tahu", "2 buah kentang", "2 butir telur rebus", "150 gram kacang tanah", "2 siung bawang putih", "Gula merah", "Garam"],
  cara: ["Goreng tahu dan rebus kentang hingga matang.", "Haluskan kacang bersama bawang putih.", "Tambahkan gula merah, garam, dan air.", "Potong ketupat, kentang, tahu, dan telur.", "Siram dengan saus kacang lalu sajikan."]
},
{
  id: 129,
  nama: "Angeun Lada",
  daerah: "Banten",
  gambar: "images/angeun-lada.jpg",
  deskripsi: "Sayur khas Banten dengan daging sapi, daun walang, dan bumbu rempah.",
  bahan: ["300 gram daging sapi", "1 liter air", "5 siung bawang merah", "3 siung bawang putih", "5 cabai merah", "2 cm kencur", "Daun walang", "2 lembar daun salam", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan bawang, cabai, dan kencur.", "Tumis bumbu bersama daun salam.", "Masukkan bumbu ke dalam rebusan daging.", "Tambahkan daun walang dan masak hingga matang."]
},
{
  id: 130,
  nama: "Rabeg",
  daerah: "Banten",
  gambar: "images/rabeg.jpg",
  deskripsi: "Masakan daging kambing khas Banten dengan kuah rempah dan kecap.",
  bahan: ["400 gram daging kambing", "700 ml air", "5 siung bawang merah", "4 siung bawang putih", "2 cm jahe", "2 batang serai", "3 sendok makan kecap manis", "Merica", "Garam"],
  cara: ["Rebus daging kambing hingga empuk.", "Haluskan bawang, jahe, dan merica.", "Tumis bumbu bersama serai hingga harum.", "Masukkan daging, air rebusan, dan kecap.", "Masak hingga kuah menyusut dan bumbu meresap."]
},
{
  id: 131,
  nama: "Sate Bebek Cibeber",
  daerah: "Banten",
  gambar: "images/sate-bebek-cibeber.jpg",
  deskripsi: "Sate daging bebek berbumbu khas Banten yang dipanggang hingga matang.",
  bahan: ["400 gram daging bebek tanpa tulang", "4 siung bawang putih", "5 siung bawang merah", "2 sendok makan kecap manis", "1 sendok teh ketumbar", "1 buah jeruk nipis", "Garam", "Tusuk sate"],
  cara: ["Potong daging bebek menjadi ukuran kecil.", "Haluskan bawang dan ketumbar.", "Campurkan bumbu dengan kecap dan jeruk nipis.", "Lumuri daging dan diamkan agar bumbu meresap.", "Tusuk lalu panggang hingga matang."]
},
{
  id: 132,
  nama: "Semur Jengkol",
  daerah: "DKI Jakarta",
  gambar: "images/semur-jengkol.jpg",
  deskripsi: "Jengkol yang dimasak dengan kecap manis dan rempah khas Betawi.",
  bahan: ["300 gram jengkol matang", "5 siung bawang merah", "3 siung bawang putih", "3 butir kemiri", "4 sendok makan kecap manis", "2 lembar daun salam", "2 cm lengkuas", "Pala", "Garam"],
  cara: ["Rebus jengkol hingga empuk lalu pipihkan.", "Haluskan bawang dan kemiri.", "Tumis bumbu bersama daun salam dan lengkuas.", "Masukkan jengkol, kecap, dan sedikit air.", "Masak hingga kuah mengental dan bumbu meresap."]
},
{
  id: 133,
  nama: "Sayur Babanci",
  daerah: "DKI Jakarta",
  gambar: "images/sayur-babanci.jpg",
  deskripsi: "Hidangan berkuah santan khas Betawi dengan rempah yang beragam.",
  bahan: ["300 gram daging sapi", "500 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "2 cm jahe", "2 batang serai", "Lengkuas", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan bawang, kunyit, dan jahe.", "Tumis bumbu bersama serai dan lengkuas.", "Masukkan santan dan daging.", "Masak dengan api kecil hingga kuah mengental."]
},
{
  id: 134,
  nama: "Nasi Uduk Betawi",
  daerah: "DKI Jakarta",
  gambar: "images/nasi-uduk-betawi.jpg",
  deskripsi: "Nasi gurih yang dimasak dengan santan, serai, dan daun salam.",
  bahan: ["500 gram beras", "400 ml santan", "2 batang serai", "2 lembar daun salam", "2 lembar daun pandan", "1 sendok teh garam", "Daun jeruk"],
  cara: ["Cuci beras hingga bersih.", "Masukkan beras, santan, dan semua bumbu ke dalam panci.", "Masak sambil diaduk hingga santan terserap.", "Kukus nasi hingga matang sempurna.", "Sajikan dengan lauk dan sambal."]
},
{
  id: 135,
  nama: "Pindang Tulang",
  daerah: "Sumatera Selatan",
  gambar: "images/pindang-tulang.jpg",
  deskripsi: "Sup tulang sapi dengan kuah asam pedas khas Palembang.",
  bahan: ["500 gram tulang sapi berdaging", "1,5 liter air", "5 siung bawang merah", "3 siung bawang putih", "5 cabai merah", "2 cm kunyit", "2 batang serai", "Asam jawa", "Garam"],
  cara: ["Rebus tulang hingga dagingnya empuk.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan bumbu dan asam jawa ke dalam kaldu.", "Masak hingga rasa menyatu lalu sajikan."]
},
{
  id: 136,
  nama: "Celimpungan",
  daerah: "Sumatera Selatan",
  gambar: "images/celimpungan.jpg",
  deskripsi: "Olahan bola ikan khas Palembang dengan kuah santan kuning.",
  bahan: ["250 gram ikan giling", "150 gram tepung tapioka", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "1 batang serai", "Garam"],
  cara: ["Campurkan ikan, tapioka, dan garam.", "Bentuk adonan bulat lalu rebus hingga mengapung.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai lalu masukkan santan.", "Masukkan bola ikan dan masak hingga kuah matang."]
},
{
  id: 137,
  nama: "Laksan Palembang",
  daerah: "Sumatera Selatan",
  gambar: "images/laksan-palembang.jpg",
  deskripsi: "Irisan pempek lenjer yang disajikan dengan kuah santan berbumbu.",
  bahan: ["300 gram pempek lenjer", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "1 batang serai", "Daun bawang", "Garam"],
  cara: ["Iris pempek lenjer menjadi beberapa bagian.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai.", "Tambahkan santan dan aduk perlahan.", "Masukkan pempek dan masak hingga kuah meresap."]
},
{
  id: 138,
  nama: "Model Ikan",
  daerah: "Sumatera Selatan",
  gambar: "images/model-ikan.jpg",
  deskripsi: "Hidangan khas Palembang berupa olahan ikan berisi tahu dengan kuah udang.",
  bahan: ["250 gram ikan giling", "150 gram tepung tapioka", "100 gram tahu", "150 gram udang", "1 liter air", "3 siung bawang putih", "Jamur kuping", "Garam"],
  cara: ["Campurkan ikan dan tapioka hingga menjadi adonan.", "Bungkus tahu dengan adonan ikan.", "Rebus hingga matang lalu potong-potong.", "Tumis bawang putih dan udang lalu tambahkan air.", "Masukkan jamur dan potongan model lalu sajikan."]
},
{
  id: 139,
  nama: "Burgo",
  daerah: "Sumatera Selatan",
  gambar: "images/burgo.jpg",
  deskripsi: "Gulungan dadar tepung beras yang disajikan dengan kuah santan ikan.",
  bahan: ["150 gram tepung beras", "50 gram tepung tapioka", "500 ml air", "200 gram ikan", "400 ml santan", "4 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "Garam"],
  cara: ["Campurkan tepung dengan air hingga menjadi adonan cair.", "Tuang tipis ke loyang kukusan hingga matang.", "Gulung adonan lalu iris menjadi beberapa bagian.", "Haluskan bumbu dan masak bersama ikan serta santan.", "Sajikan gulungan burgo dengan kuah ikan."]
},
{
  id: 140,
  nama: "Sambal Lingkung",
  daerah: "Sumatera Selatan",
  gambar: "images/sambal-lingkung.jpg",
  deskripsi: "Olahan ikan berbumbu santan dan kelapa yang dimasak hingga kering.",
  bahan: ["300 gram ikan tenggiri", "150 gram kelapa parut", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "1 batang serai", "2 lembar daun jeruk", "Garam"],
  cara: ["Kukus ikan hingga matang lalu suwir halus.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan ikan dan kelapa parut.", "Aduk terus hingga kering dan matang."]
},
{
  id: 141,
  nama: "Kue Delapan Jam",
  daerah: "Sumatera Selatan",
  gambar: "images/kue-delapan-jam.jpg",
  deskripsi: "Kue tradisional Palembang berbahan telur dan gula dengan tekstur lembut.",
  bahan: ["10 butir telur", "200 gram gula pasir", "100 ml susu kental manis", "100 gram mentega cair", "1 sendok teh vanili"],
  cara: ["Kocok telur dan gula hingga tercampur.", "Tambahkan susu, vanili, dan mentega cair.", "Tuang adonan ke loyang yang sudah diolesi mentega.", "Tutup loyang dan kukus dengan api kecil hingga matang.", "Dinginkan sebelum dipotong."]
},
{
  id: 142,
  nama: "Kue Gandus",
  daerah: "Sumatera Selatan",
  gambar: "images/kue-gandus.jpg",
  deskripsi: "Kue gurih dari tepung beras dan santan dengan taburan bawang goreng.",
  bahan: ["200 gram tepung beras", "500 ml santan", "1 sendok teh garam", "2 siung bawang putih", "Daun bawang", "Bawang goreng", "Cabai merah"],
  cara: ["Campurkan tepung beras dengan santan dan garam.", "Haluskan bawang putih lalu campurkan ke adonan.", "Tuang adonan ke loyang.", "Kukus hingga matang.", "Taburi daun bawang, bawang goreng, dan irisan cabai."]
},
{
  id: 143,
  nama: "Kue Lumpang",
  daerah: "Sumatera Selatan",
  gambar: "images/kue-lumpang.jpg",
  deskripsi: "Kue basah bertekstur kenyal dengan taburan kelapa parut.",
  bahan: ["150 gram tepung beras", "50 gram tepung tapioka", "150 gram gula pasir", "400 ml air pandan", "Kelapa parut", "Garam"],
  cara: ["Campurkan tepung beras dan tapioka.", "Masukkan gula dan air pandan sedikit demi sedikit.", "Aduk hingga adonan halus.", "Tuang ke cetakan kecil lalu kukus hingga matang.", "Sajikan dengan kelapa parut kukus."]
},
{
  id: 144,
  nama: "Kue Srikaya Palembang",
  daerah: "Sumatera Selatan",
  gambar: "images/kue-srikaya-palembang.jpg",
  deskripsi: "Kue kukus lembut berbahan telur, santan, dan pandan.",
  bahan: ["4 butir telur", "200 ml santan", "150 gram gula pasir", "100 ml air pandan", "1/2 sendok teh garam"],
  cara: ["Kocok telur dan gula hingga tercampur.", "Tambahkan santan dan air pandan.", "Saring adonan agar halus.", "Tuang ke cetakan kecil.", "Kukus hingga matang dan dinginkan."]
},
{
  id: 145,
  nama: "Lamang Tapai",
  daerah: "Sumatera Barat",
  gambar: "images/lamang-tapai.jpg",
  deskripsi: "Ketan yang dimasak dalam bambu dan disajikan dengan tapai ketan hitam.",
  bahan: ["300 gram beras ketan", "300 ml santan", "Daun pisang", "Garam", "200 gram ketan hitam", "Ragi tapai", "Gula pasir"],
  cara: ["Rendam ketan putih lalu campurkan dengan santan dan garam.", "Masak ketan dalam bambu berlapis daun pisang hingga matang.", "Kukus ketan hitam hingga matang lalu dinginkan.", "Taburkan ragi tapai dan simpan dalam wadah bersih sesuai proses fermentasi pangan.", "Sajikan lamang bersama tapai yang sudah jadi."]
},
{
  id: 146,
  nama: "Karupuak Sanjai",
  daerah: "Sumatera Barat",
  gambar: "images/karupuak-sanjai.jpg",
  deskripsi: "Keripik singkong renyah khas Bukittinggi dengan pilihan rasa balado.",
  bahan: ["500 gram singkong", "5 cabai merah", "3 siung bawang putih", "100 gram gula merah", "1 sendok makan air asam jawa", "Garam", "Minyak goreng"],
  cara: ["Iris singkong tipis dan cuci hingga bersih.", "Goreng singkong hingga renyah.", "Haluskan cabai dan bawang putih.", "Masak bumbu bersama gula merah dan air asam hingga mengental.", "Campurkan keripik dengan bumbu hingga merata."]
},
{
  id: 147,
  nama: "Anyang Pakis",
  daerah: "Sumatera Utara",
  gambar: "images/anyang-pakis.jpg",
  deskripsi: "Sayuran pakis dengan kelapa berbumbu yang mirip urap khas Sumatera Utara.",
  bahan: ["300 gram pakis muda", "150 gram kelapa parut", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm kunyit", "Jeruk nipis", "Garam"],
  cara: ["Rebus pakis hingga matang lalu tiriskan.", "Haluskan bawang, cabai, dan kunyit.", "Sangrai kelapa bersama bumbu hingga harum.", "Tambahkan garam dan sedikit perasan jeruk nipis.", "Campurkan kelapa berbumbu dengan pakis lalu sajikan."]
},
{
  id: 148,
  nama: "Ombus-Ombus",
  daerah: "Sumatera Utara",
  gambar: "images/ombus-ombus.jpg",
  deskripsi: "Kue tradisional Batak berbahan tepung beras dengan isian gula merah.",
  bahan: ["250 gram tepung beras", "100 gram kelapa parut", "100 gram gula merah", "1/2 sendok teh garam", "Daun pisang"],
  cara: ["Campurkan tepung beras dengan kelapa dan garam.", "Ambil sedikit adonan lalu pipihkan.", "Isi bagian tengah dengan gula merah.", "Bungkus menggunakan daun pisang.", "Kukus hingga matang dan sajikan hangat."]
},
{
  id: 149,
  nama: "Lapet",
  daerah: "Sumatera Utara",
  gambar: "images/lapet.jpg",
  deskripsi: "Kue tradisional Batak dari tepung beras dan kelapa dengan isian gula merah.",
  bahan: ["200 gram tepung beras", "100 gram kelapa parut", "100 gram gula merah", "1/2 sendok teh garam", "Daun pisang"],
  cara: ["Campurkan tepung beras, kelapa, dan garam.", "Tambahkan sedikit air hingga adonan bisa dibentuk.", "Ambil adonan dan isi dengan gula merah.", "Bungkus berbentuk kerucut menggunakan daun pisang.", "Kukus hingga matang."]
},
{
  id: 150,
  nama: "Daun Ubi Tumbuk",
  daerah: "Sumatera Utara",
  gambar: "images/daun-ubi-tumbuk.jpg",
  deskripsi: "Sayur daun singkong tumbuk dengan santan dan rempah khas Sumatera Utara.",
  bahan: ["300 gram daun singkong", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 batang serai", "Kecombrang", "Garam"],
  cara: ["Tumbuk daun singkong hingga agak halus.", "Haluskan bawang dan jahe.", "Tumis bumbu bersama serai.", "Masukkan santan dan daun singkong.", "Tambahkan kecombrang dan masak hingga matang."]
},
{
  id: 151,
  nama: "Gulai Paku",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-paku.jpg",
  deskripsi: "Sayur pakis dengan kuah santan berbumbu khas Minangkabau.",
  bahan: ["300 gram pakis", "500 ml santan", "5 siung bawang merah", "3 siung bawang putih", "4 cabai merah", "2 cm kunyit", "1 batang serai", "Asam kandis", "Garam"],
  cara: ["Bersihkan pakis dan potong sesuai selera.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan santan dan asam kandis.", "Tambahkan pakis lalu masak hingga matang."]
},
{
  id: 152,
  nama: "Lompong Sagu",
  daerah: "Sumatera Barat",
  gambar: "images/lompong-sagu.jpg",
  deskripsi: "Kue tradisional berbahan tepung sagu, pisang, dan gula merah.",
  bahan: ["200 gram tepung sagu", "3 buah pisang matang", "100 gram gula merah", "100 gram kelapa parut", "Daun pisang", "Garam"],
  cara: ["Haluskan pisang hingga lembut.", "Campurkan pisang dengan tepung sagu dan gula merah.", "Tambahkan kelapa parut dan sedikit garam.", "Bungkus adonan dengan daun pisang.", "Panggang hingga matang."]
},
{
  id: 153,
  nama: "Kue Bagea",
  daerah: "Maluku",
  gambar: "images/kue-bagea.jpg",
  deskripsi: "Kue kering berbahan sagu dengan aroma rempah dan tekstur renyah.",
  bahan: ["250 gram tepung sagu", "100 gram gula pasir", "2 butir telur", "50 gram kenari cincang", "1/2 sendok teh kayu manis", "1/4 sendok teh cengkeh bubuk"],
  cara: ["Sangrai tepung sagu hingga ringan.", "Kocok telur dan gula hingga tercampur.", "Masukkan tepung, kenari, dan rempah.", "Bentuk adonan menjadi bulatan kecil.", "Panggang hingga kering dan matang."]
},
{
  id: 154,
  nama: "Kohu-Kohu",
  daerah: "Maluku",
  gambar: "images/kohu-kohu.jpg",
  deskripsi: "Hidangan sayuran khas Maluku dengan kelapa berbumbu dan ikan suwir matang.",
  bahan: ["200 gram ikan tongkol matang", "100 gram tauge", "100 gram kacang panjang", "100 gram kelapa parut", "4 siung bawang merah", "3 cabai merah", "Jeruk nipis", "Garam"],
  cara: ["Suwir ikan yang sudah matang.", "Rebus kacang panjang dan tauge hingga matang.", "Iris bawang merah dan cabai.", "Sangrai kelapa bersama bumbu hingga harum.", "Campurkan ikan, sayuran, kelapa, dan jeruk nipis."]
},
{
  id: 155,
  nama: "Ikan Asar",
  daerah: "Maluku",
  gambar: "images/ikan-asar.jpg",
  deskripsi: "Ikan laut asap khas Maluku dengan aroma kayu bakar yang khas.",
  bahan: ["2 ekor ikan cakalang atau tongkol", "3 siung bawang putih", "4 siung bawang merah", "2 buah jeruk nipis", "1 sendok teh ketumbar", "Garam"],
  cara: ["Bersihkan ikan dan belah sesuai kebutuhan.", "Haluskan bawang, ketumbar, dan garam.", "Lumuri ikan dengan bumbu dan jeruk nipis.", "Asapi ikan menggunakan proses pengasapan pangan yang aman hingga matang.", "Sajikan bersama sambal dan nasi."]
},
{
  id: 156,
  nama: "Nasi Lapola",
  daerah: "Maluku",
  gambar: "images/nasi-lapola.jpg",
  deskripsi: "Nasi khas Maluku yang dimasak bersama kacang tolo dan kelapa parut.",
  bahan: ["300 gram beras", "100 gram kacang tolo", "100 gram kelapa parut", "600 ml air", "1 lembar daun pandan", "Garam"],
  cara: ["Rendam kacang tolo lalu rebus hingga empuk.", "Cuci beras hingga bersih.", "Masak beras bersama kacang dan air.", "Tambahkan kelapa parut dan garam.", "Masak hingga nasi matang lalu sajikan."]
},
{
  id: 157,
  nama: "Sagu Lempeng",
  daerah: "Papua",
  gambar: "images/sagu-lempeng.jpg",
  deskripsi: "Makanan tradisional Papua berbahan sagu yang dipanggang hingga padat.",
  bahan: ["300 gram tepung sagu", "150 ml air hangat", "1/2 sendok teh garam", "Daun pisang secukupnya"],
  cara: ["Sangrai tepung sagu hingga ringan.", "Campurkan tepung dengan garam.", "Tambahkan air sedikit demi sedikit hingga adonan lembap.", "Masukkan ke cetakan yang dialasi daun pisang.", "Panggang hingga padat dan matang."]
},
{
  id: 158,
  nama: "Sambal Colo-Colo",
  daerah: "Maluku",
  gambar: "images/sambal-colo-colo.jpg",
  deskripsi: "Sambal segar khas Maluku dengan tomat, cabai, bawang, dan jeruk.",
  bahan: ["3 buah tomat", "8 cabai rawit", "5 siung bawang merah", "2 buah jeruk nipis", "2 sendok makan kecap manis", "Daun kemangi", "Garam"],
  cara: ["Cuci tomat, cabai, dan kemangi hingga bersih.", "Iris tomat, cabai, dan bawang merah.", "Campurkan semua bahan dalam mangkuk.", "Tambahkan perasan jeruk nipis, kecap, dan garam.", "Aduk rata dan sajikan sebagai pelengkap."]
},
{
  id: 159,
  nama: "Ikan Bakar Manokwari",
  daerah: "Papua Barat",
  gambar: "images/ikan-bakar-manokwari.jpg",
  deskripsi: "Ikan bakar khas Papua Barat dengan sambal cabai mentah yang pedas.",
  bahan: ["1 ekor ikan tongkol", "8 cabai rawit", "5 siung bawang merah", "2 buah jeruk nipis", "1 sendok teh garam", "1 sendok makan minyak", "Daun kemangi"],
  cara: ["Bersihkan ikan lalu lumuri jeruk nipis dan garam.", "Bakar ikan hingga matang merata.", "Iris cabai dan bawang merah.", "Campurkan sambal dengan sedikit minyak dan perasan jeruk.", "Sajikan ikan dengan sambal di atasnya."]
},
{
  id: 160,
  nama: "Udang Selingkuh",
  daerah: "Papua Pegunungan",
  gambar: "images/udang-selingkuh.jpg",
  deskripsi: "Olahan udang air tawar bercapit besar khas daerah Wamena.",
  bahan: ["500 gram udang air tawar", "4 siung bawang putih", "5 siung bawang merah", "3 cabai merah", "2 buah tomat", "1 batang serai", "Jeruk nipis", "Garam"],
  cara: ["Bersihkan udang dan buang bagian yang tidak digunakan.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama serai hingga harum.", "Masukkan udang dan tomat.", "Masak hingga udang matang lalu tambahkan jeruk nipis."]
},
{
  id: 161,
  nama: "Aunu Senebre",
  daerah: "Papua",
  gambar: "images/aunu-senebre.jpg",
  deskripsi: "Hidangan khas Papua dari ikan teri, daun talas, dan kelapa parut.",
  bahan: ["150 gram ikan teri", "200 gram daun talas", "100 gram kelapa parut", "3 siung bawang merah", "2 siung bawang putih", "Garam", "Air secukupnya"],
  cara: ["Cuci ikan teri hingga bersih.", "Rebus daun talas hingga matang dan tidak gatal.", "Iris bawang merah dan bawang putih.", "Campurkan ikan, daun talas, kelapa, dan bumbu.", "Kukus hingga seluruh bahan matang."]
},
{
  id: 162,
  nama: "Sayur Ganemo",
  daerah: "Sulawesi Utara",
  gambar: "images/sayur-ganemo.jpg",
  deskripsi: "Sayur daun melinjo khas Minahasa yang dimasak dengan santan dan bumbu.",
  bahan: ["200 gram daun melinjo muda", "300 ml santan", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm lengkuas", "1 lembar daun salam", "Garam"],
  cara: ["Petik dan cuci daun melinjo.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama lengkuas dan daun salam.", "Masukkan santan dan daun melinjo.", "Masak hingga daun lunak dan kuah matang."]
},
{
  id: 163,
  nama: "Cakalang Fufu",
  daerah: "Sulawesi Utara",
  gambar: "images/cakalang-fufu.jpg",
  deskripsi: "Ikan cakalang yang diasap dengan teknik tradisional khas Manado.",
  bahan: ["1 ekor ikan cakalang", "2 buah jeruk nipis", "1 sendok teh garam", "1 sendok teh ketumbar", "2 siung bawang putih"],
  cara: ["Bersihkan ikan dan belah menjadi dua bagian.", "Haluskan bawang putih, ketumbar, dan garam.", "Lumuri ikan dengan bumbu dan jeruk nipis.", "Asapi dengan teknik pengasapan pangan yang aman hingga matang.", "Sajikan sebagai lauk atau bahan masakan lain."]
},
{
  id: 164,
  nama: "Panada",
  daerah: "Sulawesi Utara",
  gambar: "images/panada.jpg",
  deskripsi: "Roti goreng berbentuk pastel dengan isian ikan cakalang berbumbu.",
  bahan: ["250 gram tepung terigu", "1 butir telur", "100 ml santan", "1 sendok teh ragi", "150 gram ikan cakalang matang", "3 siung bawang merah", "2 siung bawang putih", "Cabai", "Garam"],
  cara: ["Campurkan tepung, telur, ragi, dan santan hingga menjadi adonan.", "Diamkan hingga mengembang.", "Tumis ikan suwir dengan bawang dan cabai.", "Pipihkan adonan lalu isi dengan ikan.", "Bentuk seperti pastel dan goreng hingga matang."]
},
{
  id: 165,
  nama: "Lalampa",
  daerah: "Sulawesi Utara",
  gambar: "images/lalampa.jpg",
  deskripsi: "Ketan berbumbu santan dengan isian ikan cakalang yang dibungkus daun pisang.",
  bahan: ["300 gram beras ketan", "200 ml santan", "150 gram ikan cakalang matang", "4 siung bawang merah", "2 siung bawang putih", "2 cabai merah", "Daun pisang", "Garam"],
  cara: ["Kukus ketan hingga setengah matang lalu campur santan.", "Kukus kembali hingga ketan matang.", "Tumis ikan dengan bawang dan cabai.", "Bungkus ketan berisi ikan dengan daun pisang.", "Panggang hingga daun harum dan sedikit kecokelatan."]
},
{
  id: 166,
  nama: "Klappertaart",
  daerah: "Sulawesi Utara",
  gambar: "images/klappertaart.jpg",
  deskripsi: "Hidangan penutup khas Manado berbahan kelapa muda, susu, dan telur.",
  bahan: ["200 gram kelapa muda", "500 ml susu cair", "3 butir telur", "100 gram gula pasir", "50 gram tepung terigu", "50 gram mentega", "Kismis", "Kayu manis"],
  cara: ["Campurkan susu, gula, dan tepung hingga rata.", "Masak sambil diaduk hingga mengental.", "Tambahkan mentega dan kelapa muda.", "Masukkan kuning telur lalu aduk rata.", "Tuang ke wadah tahan panas, beri kismis, lalu panggang hingga matang."]
},
{
  id: 167,
  nama: "Ayam Bambu",
  daerah: "Sulawesi Utara",
  gambar: "images/ayam-bambu.jpg",
  deskripsi: "Ayam berbumbu rempah yang dimasak dalam bambu khas Minahasa.",
  bahan: ["500 gram ayam", "5 siung bawang merah", "4 siung bawang putih", "4 cabai merah", "2 cm jahe", "2 batang serai", "Daun bawang", "Daun kemangi", "Garam"],
  cara: ["Potong ayam dan bersihkan.", "Haluskan bawang, cabai, dan jahe.", "Campurkan ayam dengan bumbu dan daun aromatik.", "Masukkan ke dalam bambu bersih yang dialasi daun pisang.", "Masak hingga ayam matang sempurna."]
},
{
  id: 168,
  nama: "Tinoransak Ayam",
  daerah: "Sulawesi Utara",
  gambar: "images/tinoransak-ayam.jpg",
  deskripsi: "Masakan ayam berbumbu cabai dan rempah khas Minahasa.",
  bahan: ["500 gram ayam", "6 cabai merah", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 batang serai", "Daun jeruk", "Daun bawang", "Garam"],
  cara: ["Potong ayam dan bersihkan.", "Haluskan cabai, bawang, dan jahe.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan ayam dan sedikit air.", "Masak hingga ayam matang dan bumbu meresap."]
},
{
  id: 169,
  nama: "Nasi Kuning Manado",
  daerah: "Sulawesi Utara",
  gambar: "images/nasi-kuning-manado.jpg",
  deskripsi: "Nasi kuning gurih dengan santan, kunyit, dan rempah khas Manado.",
  bahan: ["500 gram beras", "400 ml santan", "2 cm kunyit", "2 batang serai", "2 lembar daun pandan", "2 lembar daun salam", "1 sendok teh garam"],
  cara: ["Cuci beras hingga bersih.", "Haluskan kunyit dan campurkan dengan santan.", "Masukkan serai, daun pandan, dan daun salam.", "Masak beras bersama santan berbumbu hingga air terserap.", "Kukus hingga nasi matang lalu sajikan."]
},
{
  id: 170,
  nama: "Ketupat Kandangan",
  daerah: "Kalimantan Selatan",
  gambar: "images/ketupat-kandangan.jpg",
  deskripsi: "Ketupat yang disajikan dengan ikan haruan dan kuah santan berbumbu.",
  bahan: ["4 buah ketupat", "400 gram ikan haruan", "500 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "2 batang serai", "Daun jeruk", "Garam"],
  cara: ["Bersihkan ikan haruan dan panggang hingga matang.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai dan daun jeruk.", "Tambahkan santan dan masukkan ikan.", "Sajikan kuah ikan bersama potongan ketupat."]
},
{
  id: 171,
  nama: "Itik Gambut",
  daerah: "Kalimantan Selatan",
  gambar: "images/itik-gambut.jpg",
  deskripsi: "Hidangan itik berbumbu manis gurih khas daerah Gambut, Banjar.",
  bahan: ["500 gram daging itik", "5 siung bawang merah", "4 siung bawang putih", "3 sendok makan kecap manis", "2 cm jahe", "2 batang serai", "2 lembar daun salam", "Garam"],
  cara: ["Potong dan bersihkan daging itik.", "Haluskan bawang dan jahe.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan itik, kecap, dan sedikit air.", "Masak hingga daging empuk dan bumbu meresap."]
},
{
  id: 172,
  nama: "Mandai Goreng",
  daerah: "Kalimantan Selatan",
  gambar: "images/mandai-goreng.jpg",
  deskripsi: "Kulit buah cempedak yang diolah dan digoreng hingga gurih.",
  bahan: ["300 gram mandai siap olah", "3 siung bawang putih", "2 siung bawang merah", "1 sendok teh ketumbar", "Garam", "Minyak goreng"],
  cara: ["Bilas mandai sesuai selera dan tiriskan.", "Haluskan bawang putih, bawang merah, ketumbar, dan garam.", "Lumuri mandai dengan bumbu.", "Diamkan sebentar agar bumbu meresap.", "Goreng hingga bagian luar kecokelatan."]
},
{
  id: 173,
  nama: "Gangan Asam Banjar",
  daerah: "Kalimantan Selatan",
  gambar: "images/gangan-asam-banjar.jpg",
  deskripsi: "Sayur berkuah asam khas Banjar dengan ikan dan aneka sayuran.",
  bahan: ["300 gram ikan patin", "1 liter air", "100 gram kacang panjang", "1 buah timun", "2 buah tomat", "5 siung bawang merah", "2 cm kunyit", "Asam jawa", "Garam"],
  cara: ["Bersihkan ikan dan potong sayuran.", "Haluskan bawang merah dan kunyit.", "Didihkan air bersama bumbu dan asam jawa.", "Masukkan ikan dan sayuran.", "Masak hingga ikan matang lalu sajikan."]
},
{
  id: 174,
  nama: "Kalumpe",
  daerah: "Kalimantan Tengah",
  gambar: "images/kalumpe.jpg",
  deskripsi: "Olahan daun singkong tumbuk khas Dayak dengan santan dan terong.",
  bahan: ["300 gram daun singkong", "2 buah terong kecil", "300 ml santan", "4 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm lengkuas", "Garam"],
  cara: ["Rebus daun singkong hingga empuk lalu tumbuk kasar.", "Potong terong menjadi beberapa bagian.", "Haluskan bawang dan cabai.", "Tumis bumbu lalu masukkan santan.", "Tambahkan daun singkong dan terong lalu masak hingga matang."]
},
{
  id: 175,
  nama: "Wadai Ipau",
  daerah: "Kalimantan Selatan",
  gambar: "images/wadai-ipau.jpg",
  deskripsi: "Kue gurih berlapis kulit dadar dengan isian sayuran dan daging.",
  bahan: ["200 gram tepung terigu", "2 butir telur", "400 ml susu cair", "150 gram daging ayam", "1 buah wortel", "2 buah kentang", "3 siung bawang putih", "Daun bawang", "Garam"],
  cara: ["Campurkan tepung, telur, dan susu menjadi adonan kulit.", "Buat dadar tipis dari adonan.", "Tumis ayam, wortel, kentang, dan bawang hingga matang.", "Susun kulit dan isian secara berlapis.", "Kukus hingga semua lapisan menyatu lalu potong."]
},
{
  id: 176,
  nama: "Bingka Barandam",
  daerah: "Kalimantan Selatan",
  gambar: "images/bingka-barandam.jpg",
  deskripsi: "Kue lembut khas Banjar yang disajikan dengan kuah gula beraroma pandan.",
  bahan: ["4 butir telur", "100 gram tepung terigu", "100 gram gula pasir", "1/2 sendok teh vanili", "300 ml air", "100 gram gula pasir untuk kuah", "Daun pandan"],
  cara: ["Kocok telur dan gula hingga mengembang.", "Masukkan tepung dan vanili lalu aduk rata.", "Tuang adonan ke cetakan dan panggang hingga matang.", "Rebus air bersama gula dan pandan untuk kuah.", "Sajikan bingka dengan kuah gula."]
},
{
  id: 177,
  nama: "Gence Ruan",
  daerah: "Kalimantan Timur",
  gambar: "images/gence-ruan.jpg",
  deskripsi: "Ikan gabus bakar dengan sambal tomat berbumbu khas Kutai.",
  bahan: ["1 ekor ikan gabus", "3 buah tomat", "6 cabai merah", "5 siung bawang merah", "3 siung bawang putih", "1 sendok makan gula merah", "Jeruk nipis", "Garam"],
  cara: ["Bersihkan ikan gabus lalu lumuri jeruk nipis dan garam.", "Bakar ikan hingga matang.", "Haluskan cabai, bawang, dan tomat.", "Tumis sambal bersama gula merah dan garam.", "Siram sambal di atas ikan bakar lalu sajikan."]
},
{
  id: 179,
  nama: "Sayur Asam Kutai",
  daerah: "Kalimantan Timur",
  gambar: "images/sayur-asam-kutai.jpg",
  deskripsi: "Sayur asam khas Kutai dengan ikan dan sayuran segar.",
  bahan: ["300 gram ikan sungai", "100 gram kacang panjang", "1 buah jagung", "1 buah labu siam", "2 buah tomat", "5 siung bawang merah", "Asam jawa", "Garam"],
  cara: ["Bersihkan ikan dan potong sayuran.", "Didihkan air bersama bawang merah dan asam jawa.", "Masukkan jagung dan labu siam.", "Tambahkan ikan, kacang panjang, dan tomat.", "Masak hingga ikan matang dan sayuran empuk."]
},
{
  id: 180,
  nama: "Nasi Subut",
  daerah: "Kalimantan Utara",
  gambar: "images/nasi-subut.jpg",
  deskripsi: "Nasi khas Kalimantan Utara yang dicampur jagung dan ubi ungu.",
  bahan: ["300 gram beras", "150 gram jagung pipil", "150 gram ubi ungu", "600 ml air", "1/2 sendok teh garam"],
  cara: ["Cuci beras dan jagung hingga bersih.", "Kupas ubi ungu lalu potong kecil.", "Masak beras bersama air dan jagung.", "Tambahkan ubi ungu saat nasi hampir matang.", "Kukus atau lanjutkan memasak hingga semua bahan empuk."]
},
{
  id: 181,
  nama: "Sate Bulayak",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/sate-bulayak.jpg",
  deskripsi: "Sate daging sapi khas Lombok yang disajikan dengan lontong bulayak dan saus kacang.",
  bahan: ["400 gram daging sapi", "150 gram kacang tanah", "4 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 sendok makan santan", "Kecap manis", "Garam"],
  cara: ["Potong daging menjadi ukuran kecil.", "Haluskan bawang, cabai, dan kacang tanah.", "Masak bumbu dengan santan dan sedikit air.", "Tusukkan daging lalu bakar hingga matang.", "Sajikan sate bersama bulayak dan saus kacang."]
},
{
  id: 182,
  nama: "Ares",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/ares.jpg",
  deskripsi: "Sayur khas Lombok berbahan batang pisang muda dengan kuah santan.",
  bahan: ["300 gram batang pisang muda", "400 ml santan", "5 siung bawang merah", "3 siung bawang putih", "4 cabai merah", "2 cm kunyit", "2 batang serai", "Garam"],
  cara: ["Iris batang pisang muda dan remas dengan garam.", "Bilas hingga bersih dan tiriskan.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai lalu masukkan santan.", "Masukkan batang pisang dan masak hingga empuk."]
},
{
  id: 183,
  nama: "Beberuk Terong",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/beberuk-terong.jpg",
  deskripsi: "Lalapan terong khas Lombok dengan sambal tomat dan cabai segar.",
  bahan: ["3 buah terong lalap", "2 buah tomat", "6 cabai rawit", "4 siung bawang merah", "1 buah jeruk limau", "1 sendok teh terasi matang", "Garam"],
  cara: ["Cuci terong dan potong kecil.", "Potong tomat dan iris bawang merah.", "Ulek cabai bersama terasi dan garam.", "Campurkan sambal dengan tomat dan bawang.", "Tambahkan jeruk limau lalu sajikan bersama terong."]
},
{
  id: 184,
  nama: "Ayam Rarang",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/ayam-rarang.jpg",
  deskripsi: "Ayam berbumbu cabai merah khas Lombok dengan rasa pedas dan gurih.",
  bahan: ["500 gram ayam", "10 cabai merah kering", "5 siung bawang merah", "4 siung bawang putih", "2 cm kencur", "2 batang serai", "Daun jeruk", "Garam"],
  cara: ["Potong ayam dan bersihkan.", "Haluskan cabai, bawang, dan kencur.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan ayam dan sedikit air.", "Masak hingga ayam matang dan bumbu meresap."]
},
{
  id: 185,
  nama: "Sate Rembiga",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/sate-rembiga.jpg",
  deskripsi: "Sate daging sapi khas Lombok dengan bumbu cabai dan rempah.",
  bahan: ["500 gram daging sapi", "8 cabai merah", "5 siung bawang putih", "5 siung bawang merah", "2 sendok makan kecap manis", "1 sendok teh terasi matang", "Garam", "Tusuk sate"],
  cara: ["Potong daging sapi menjadi ukuran kecil.", "Haluskan cabai, bawang, dan terasi.", "Campurkan bumbu dengan kecap dan garam.", "Lumuri daging lalu diamkan agar bumbu meresap.", "Tusuk dan panggang hingga matang."]
},
{
  id: 186,
  nama: "Nasi Balap Puyung",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/nasi-balap-puyung.jpg",
  deskripsi: "Nasi khas Lombok dengan ayam suwir pedas, kacang kedelai, dan lauk pelengkap.",
  bahan: ["500 gram nasi putih", "250 gram ayam", "8 cabai merah", "5 siung bawang merah", "3 siung bawang putih", "100 gram kacang kedelai", "Daun jeruk", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Goreng kacang kedelai hingga renyah.", "Haluskan cabai dan bawang.", "Tumis bumbu bersama daun jeruk lalu masukkan ayam.", "Sajikan ayam pedas bersama nasi dan kacang kedelai."]
},
{
  id: 188,
  nama: "Catemak Jagung",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/catemak-jagung.jpg",
  deskripsi: "Sup jagung khas NTT dengan kacang-kacangan dan sayuran.",
  bahan: ["200 gram jagung pipil", "100 gram kacang merah", "100 gram labu kuning", "100 gram daun bayam", "1 liter air", "3 siung bawang merah", "Garam"],
  cara: ["Rebus jagung dan kacang hingga mulai empuk.", "Iris bawang merah.", "Masukkan labu kuning ke dalam rebusan.", "Tambahkan bayam dan garam.", "Masak hingga semua bahan matang."]
},
{
  id: 189,
  nama: "Rumpu Rampe",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/rumpu-rampe.jpg",
  deskripsi: "Tumis sayuran khas Flores yang menggunakan daun pepaya dan bunga pepaya.",
  bahan: ["150 gram daun pepaya", "100 gram bunga pepaya", "100 gram daun singkong", "5 siung bawang merah", "3 siung bawang putih", "4 cabai merah", "100 gram ikan teri matang", "Garam"],
  cara: ["Rebus daun dan bunga pepaya hingga matang lalu tiriskan.", "Iris bawang dan cabai.", "Tumis bumbu hingga harum.", "Masukkan sayuran dan ikan teri.", "Aduk hingga bumbu merata lalu sajikan."]
},
{
  id: 190,
  nama: "Se'i Ayam",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/se'i-ayam.jpg",
  deskripsi: "Olahan ayam asap berbumbu sederhana yang terinspirasi dari se'i khas NTT.",
  bahan: ["500 gram daging ayam tanpa tulang", "3 siung bawang putih", "1 sendok teh ketumbar", "1 sendok teh garam", "1/2 sendok teh merica", "2 buah jeruk nipis"],
  cara: ["Iris ayam memanjang.", "Haluskan bawang putih, ketumbar, garam, dan merica.", "Lumuri ayam dengan bumbu dan jeruk nipis.", "Masak dengan teknik pengasapan pangan yang aman hingga matang.", "Iris dan sajikan bersama sambal."]
},
{
  id: 191,
  nama: "Kolo Ayam",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/kolo-ayam.jpg",
  deskripsi: "Nasi bambu khas Manggarai yang disajikan dengan ayam berbumbu.",
  bahan: ["300 gram beras", "300 ml santan encer", "200 gram ayam", "3 siung bawang merah", "2 siung bawang putih", "1 batang serai", "Daun pisang", "Garam"],
  cara: ["Cuci beras hingga bersih.", "Bumbui ayam dengan bawang dan garam lalu masak hingga matang.", "Campurkan beras dengan santan dan serai.", "Masukkan campuran ke wadah bambu bersih yang dialasi daun pisang.", "Masak hingga nasi matang dan sajikan bersama ayam."]
},
{
  id: 192,
  nama: "Ikan Kuah Asam",
  daerah: "Maluku",
  gambar: "images/ikan-kuah-asam.jpg",
  deskripsi: "Sup ikan dengan kuah bening bercita rasa asam dan segar.",
  bahan: ["500 gram ikan laut", "1 liter air", "5 siung bawang merah", "3 siung bawang putih", "2 buah tomat", "2 batang serai", "2 buah jeruk nipis", "Daun kemangi", "Garam"],
  cara: ["Bersihkan ikan dan lumuri jeruk nipis.", "Iris bawang dan tomat.", "Didihkan air bersama serai dan bawang.", "Masukkan ikan dan tomat.", "Tambahkan garam serta kemangi lalu masak hingga ikan matang."]
},
{
  id: 193,
  nama: "Ikan Bakar Dabu-Dabu",
  daerah: "Sulawesi Utara",
  gambar: "images/ikan-bakar-dabu-dabu.jpg",
  deskripsi: "Ikan bakar dengan sambal dabu-dabu segar khas Manado.",
  bahan: ["1 ekor ikan nila", "3 buah tomat", "8 cabai rawit", "5 siung bawang merah", "2 buah jeruk nipis", "2 sendok makan minyak panas", "Garam"],
  cara: ["Bersihkan ikan dan lumuri jeruk nipis serta garam.", "Bakar ikan hingga matang.", "Potong tomat, cabai, dan bawang merah.", "Campurkan bahan sambal dengan jeruk nipis dan minyak panas.", "Sajikan sambal dabu-dabu di atas ikan."]
},
{
  id: 194,
  nama: "Pisang Epe",
  daerah: "Sulawesi Selatan",
  gambar: "images/pisang-epe.jpg",
  deskripsi: "Pisang bakar pipih khas Makassar dengan siraman saus gula merah.",
  bahan: ["4 buah pisang kepok matang", "150 gram gula merah", "150 ml air", "1 lembar daun pandan", "Sejumput garam", "Keju parut secukupnya"],
  cara: ["Panggang pisang hingga agak kecokelatan.", "Pipihkan pisang menggunakan alat bersih.", "Rebus gula merah bersama air, pandan, dan garam.", "Masak hingga saus sedikit mengental.", "Sajikan pisang dengan saus gula merah dan keju."]
},
{
  id: 195,
  nama: "Barongko",
  daerah: "Sulawesi Selatan",
  gambar: "images/barongko.jpg",
  deskripsi: "Kue pisang kukus khas Bugis yang lembut dan dibungkus daun pisang.",
  bahan: ["5 buah pisang matang", "2 butir telur", "200 ml santan", "100 gram gula pasir", "1/2 sendok teh garam", "Daun pisang"],
  cara: ["Haluskan pisang hingga lembut.", "Campurkan pisang dengan telur, santan, gula, dan garam.", "Aduk hingga seluruh bahan tercampur.", "Bungkus adonan dengan daun pisang.", "Kukus hingga matang lalu dinginkan."]
},
{
  id: 196,
  nama: "Buras",
  daerah: "Sulawesi Selatan",
  gambar: "images/buras.jpg",
  deskripsi: "Nasi santan khas Bugis yang dibungkus daun pisang dan dimasak hingga padat.",
  bahan: ["500 gram beras", "500 ml santan", "1 sendok teh garam", "2 lembar daun pandan", "Daun pisang", "Tali pengikat makanan"],
  cara: ["Cuci beras hingga bersih.", "Masak beras bersama santan, garam, dan pandan hingga setengah matang.", "Bungkus nasi dengan daun pisang secara memanjang.", "Ikat bungkusan dengan rapi.", "Rebus atau kukus hingga buras matang dan padat."]
},
{
  id: 197,
  nama: "Sop Konro Bakar",
  daerah: "Sulawesi Selatan",
  gambar: "images/sop-konro-bakar.jpg",
  deskripsi: "Iga sapi berbumbu khas Makassar yang direbus empuk lalu dibakar.",
  bahan: ["700 gram iga sapi", "5 siung bawang merah", "4 siung bawang putih", "2 buah kluwek siap olah", "2 batang serai", "2 cm lengkuas", "3 sendok makan kecap manis", "Ketumbar", "Garam"],
  cara: ["Rebus iga hingga empuk dan sisihkan kaldunya.", "Haluskan bawang, kluwek, dan ketumbar.", "Tumis bumbu bersama serai dan lengkuas.", "Masukkan iga dan kecap lalu masak hingga bumbu meresap.", "Bakar iga sebentar hingga harum dan sajikan."]
},
{
  id: 198,
  nama: "Jalangkote",
  daerah: "Sulawesi Selatan",
  gambar: "images/jalang-kote.jpg",
  deskripsi: "Pastel khas Makassar dengan isian sayuran, bihun, dan telur.",
  bahan: ["250 gram tepung terigu", "2 sendok makan margarin", "100 ml air", "100 gram wortel", "100 gram kentang", "100 gram bihun", "2 butir telur rebus", "3 siung bawang putih", "Garam"],
  cara: ["Campurkan tepung, margarin, air, dan garam hingga menjadi adonan kulit.", "Tumis bawang putih, wortel, kentang, dan bihun.", "Pipihkan adonan kulit lalu beri isian dan telur.", "Lipat dan rapatkan bagian pinggirnya.", "Goreng hingga matang dan kecokelatan."]
},
{
  id: 199,
  nama: "Bolu Peca",
  daerah: "Sulawesi Selatan",
  gambar: "images/bolu-peca.jpg",
  deskripsi: "Kue tradisional Bugis yang disajikan dengan siraman larutan gula merah.",
  bahan: ["200 gram tepung beras", "3 butir telur", "100 gram gula pasir", "1 sendok teh baking powder", "150 gram gula merah", "200 ml air", "Daun pandan"],
  cara: ["Kocok telur dan gula hingga mengembang.", "Masukkan tepung beras dan baking powder.", "Tuang adonan ke cetakan lalu kukus hingga matang.", "Rebus gula merah dengan air dan pandan.", "Sajikan bolu dengan siraman kuah gula merah."]
},
{
  id: 200,
  nama: "Sop Saudara",
  daerah: "Sulawesi Selatan",
  gambar: "images/sop-saudara.jpg",
  deskripsi: "Sup daging sapi khas Makassar dengan kuah rempah, bihun, dan perkedel kentang.",
  bahan: ["300 gram daging sapi", "1 liter kaldu sapi", "100 gram bihun", "2 buah kentang", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 batang serai", "Garam"],
  cara: ["Rebus daging hingga empuk lalu potong kecil.", "Haluskan bawang dan jahe.", "Tumis bumbu bersama serai hingga harum.", "Masukkan bumbu ke dalam kaldu dan masak bersama daging.", "Sajikan dengan bihun dan perkedel kentang."]
},
{
  id: 205,
  nama: "Tauge Goreng Bogor",
  daerah: "Jawa Barat",
  gambar: "images/tauge-goreng-bogor.jpg",
  deskripsi: "Hidangan tauge dan mie dengan saus oncom khas Bogor.",
  bahan: ["200 gram tauge", "200 gram mie kuning", "150 gram oncom", "4 siung bawang merah", "2 siung bawang putih", "3 cabai merah", "2 sendok makan tauco", "Garam"],
  cara: ["Rebus tauge sebentar dan tiriskan.", "Rebus mie hingga matang.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama oncom dan tauco.", "Tambahkan sedikit air dan masak hingga menjadi saus.", "Sajikan saus bersama tauge dan mie."]
},
{
  id: 207,
  nama: "Karedok Leunca",
  daerah: "Jawa Barat",
  gambar: "images/karedok-leunca.jpg",
  deskripsi: "Lalapan khas Sunda dengan leunca dan sambal kencur.",
  bahan: ["150 gram leunca", "100 gram kacang panjang", "1 buah mentimun", "100 gram kacang tanah", "3 cabai rawit", "2 cm kencur", "1 siung bawang putih", "Gula merah", "Garam"],
  cara: ["Cuci seluruh sayuran hingga bersih.", "Goreng kacang tanah lalu haluskan.", "Ulek cabai, kencur, bawang putih, gula, dan garam.", "Campurkan kacang tanah dengan bumbu.", "Tambahkan sedikit air hingga menjadi saus.", "Campurkan sayuran dan sajikan."]
},
{
  id: 208,
  nama: "Kupat Tahu Magelang",
  daerah: "Jawa Tengah",
  gambar: "images/kupat-tahu-magelang.jpg",
  deskripsi: "Ketupat, tahu, dan tauge dengan kuah kecap bercita rasa manis gurih.",
  bahan: ["2 buah ketupat", "3 buah tahu putih", "100 gram tauge", "2 sendok makan kacang tanah", "3 sendok makan kecap manis", "2 siung bawang putih", "Gula merah", "Garam"],
  cara: ["Goreng tahu hingga matang.", "Rebus tauge sebentar.", "Haluskan kacang dan bawang putih.", "Rebus air bersama kecap, gula merah, dan garam.", "Potong ketupat dan tahu.", "Sajikan bersama tauge, saus kacang, dan kuah kecap."]
},
{
  id: 210,
  nama: "Mendoan Banyumas",
  daerah: "Jawa Tengah",
  gambar: "images/mendoan-banyumas.jpg",
  deskripsi: "Tempe tipis berbalut adonan tepung berbumbu yang digoreng setengah kering.",
  bahan: ["1 papan tempe tipis", "150 gram tepung terigu", "2 sendok makan tepung beras", "2 siung bawang putih", "1 batang daun bawang", "Ketumbar", "Garam", "Air"],
  cara: ["Iris tempe tipis dan lebar.", "Haluskan bawang putih, ketumbar, dan garam.", "Campurkan tepung dengan bumbu dan daun bawang.", "Tambahkan air hingga menjadi adonan.", "Celupkan tempe ke adonan.", "Goreng sebentar hingga matang dan sajikan."]
},
{
  id: 211,
  nama: "Sate Sapi Buntel",
  daerah: "Jawa Tengah",
  gambar: "images/sate-sapi-buntel.jpg",
  deskripsi: "Sate daging sapi cincang yang dibungkus lemak tipis dan dipanggang.",
  bahan: ["400 gram daging sapi cincang", "50 gram lemak sapi", "4 siung bawang putih", "4 siung bawang merah", "1 sendok teh ketumbar", "Merica", "Garam", "Tusuk sate"],
  cara: ["Haluskan bawang dan ketumbar.", "Campurkan bumbu dengan daging cincang.", "Bentuk adonan memanjang pada tusuk sate.", "Bungkus tipis dengan lemak sapi.", "Panggang sambil dibalik hingga matang.", "Sajikan dengan sambal kecap."]
},
{
  id: 212,
  nama: "Nasi Grombyang",
  daerah: "Jawa Tengah",
  gambar: "images/nasi-grombyang.jpg",
  deskripsi: "Hidangan nasi dengan kuah daging sapi khas Pemalang.",
  bahan: ["300 gram daging sapi", "1 liter kaldu sapi", "2 buah kluwek", "5 siung bawang merah", "3 siung bawang putih", "2 batang serai", "Daun salam", "Kelapa sangrai", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan kluwek, bawang, dan kelapa sangrai.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan bumbu ke dalam kaldu.", "Potong daging lalu masukkan kembali.", "Sajikan dengan nasi dan kuah melimpah."]
},
{
  id: 213,
  nama: "Sate Loso",
  daerah: "Jawa Tengah",
  gambar: "images/sate-loso.jpg",
  deskripsi: "Sate daging sapi khas Pemalang dengan bumbu kacang.",
  bahan: ["400 gram daging sapi", "150 gram kacang tanah", "4 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "Kecap manis", "Garam", "Tusuk sate"],
  cara: ["Potong daging menjadi ukuran sate.", "Bumbui daging dengan bawang dan garam.", "Tusukkan daging pada tusuk sate.", "Panggang hingga matang.", "Haluskan kacang bersama cabai dan bawang.", "Sajikan sate dengan saus kacang."]
},
{
  id: 214,
  nama: "Nasi Liwet Sunda",
  daerah: "Jawa Barat",
  gambar: "images/nasi-liwet-sunda.jpg",
  deskripsi: "Nasi gurih khas Sunda dengan ikan asin dan rempah.",
  bahan: ["500 gram beras", "700 ml air", "100 gram ikan asin", "2 lembar daun salam", "1 batang serai", "3 siung bawang merah", "2 siung bawang putih", "Cabai rawit", "Garam"],
  cara: ["Cuci beras hingga bersih.", "Iris bawang merah dan bawang putih.", "Masukkan beras, air, dan semua bumbu ke panci.", "Tambahkan ikan asin dan serai.", "Masak hingga nasi matang.", "Sajikan bersama lalapan."]
},
{
  id: 215,
  nama: "Kue Awug",
  daerah: "Jawa Barat",
  gambar: "images/kue-awug.jpg",
  deskripsi: "Kue tradisional Sunda dari tepung beras dengan gula merah dan kelapa.",
  bahan: ["250 gram tepung beras", "150 gram gula merah", "100 gram kelapa parut", "1/2 sendok teh garam", "Daun pandan"],
  cara: ["Campurkan tepung beras dengan sedikit air hingga berbutir.", "Siapkan kelapa parut dan garam.", "Susun tepung, gula merah, dan kelapa secara berlapis.", "Tambahkan daun pandan.", "Kukus hingga matang.", "Sajikan selagi hangat."]
},
{
  id: 217,
  nama: "Sate Maranggi Kambing",
  daerah: "Jawa Barat",
  gambar: "images/sate-maranggi-kambing.jpg",
  deskripsi: "Sate kambing berbumbu rempah dengan rasa manis dan gurih.",
  bahan: ["400 gram daging kambing", "4 siung bawang putih", "5 siung bawang merah", "1 sendok teh ketumbar", "2 sendok makan kecap manis", "Air asam jawa", "Garam", "Tusuk sate"],
  cara: ["Potong daging kambing.", "Haluskan bawang dan ketumbar.", "Campurkan bumbu dengan kecap dan asam jawa.", "Lumuri daging hingga merata.", "Tusukkan daging pada tusuk sate.", "Bakar hingga matang."]
},
{
  id: 218,
  nama: "Empal Gepuk",
  daerah: "Jawa Barat",
  gambar: "images/empal-gepuk.jpg",
  deskripsi: "Daging sapi berbumbu manis gurih yang dimasak hingga empuk.",
  bahan: ["500 gram daging sapi", "5 siung bawang merah", "4 siung bawang putih", "2 cm lengkuas", "2 lembar daun salam", "2 sendok makan gula merah", "Ketumbar", "Santan", "Garam"],
  cara: ["Rebus daging hingga setengah empuk.", "Iris daging mengikuti serat lalu pipihkan.", "Haluskan bawang dan ketumbar.", "Masak daging bersama bumbu, santan, dan daun salam.", "Masak hingga bumbu meresap.", "Goreng sebentar sebelum disajikan."]
},
{
  id: 219,
  nama: "Soto Kuning Bogor",
  daerah: "Jawa Barat",
  gambar: "images/soto-kuning-bogor.jpg",
  deskripsi: "Soto daging dengan kuah santan kuning berbumbu rempah.",
  bahan: ["300 gram daging sapi", "500 ml santan", "700 ml air kaldu", "5 siung bawang merah", "3 siung bawang putih", "3 cm kunyit", "2 batang serai", "Daun jeruk", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan bumbu ke dalam kaldu.", "Tuangkan santan sambil diaduk.", "Masak hingga matang dan sajikan."]
},
{
  id: 220,
  nama: "Sate Blengong",
  daerah: "Jawa Tengah",
  gambar: "images/sate-blengong.jpg",
  deskripsi: "Sate daging blengong khas Brebes dengan bumbu rempah.",
  bahan: ["400 gram daging blengong", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm kunyit", "Ketumbar", "Garam", "Tusuk sate"],
  cara: ["Potong daging blengong.", "Haluskan bawang, cabai, kunyit, dan ketumbar.", "Masak daging bersama bumbu hingga empuk.", "Tusukkan daging pada tusuk sate.", "Panggang hingga matang.", "Sajikan dengan sambal."]
},
{
  id: 221,
  nama: "Kue Moho",
  daerah: "Jawa Tengah",
  gambar: "images/kue-moho.jpg",
  deskripsi: "Kue kukus tradisional yang lembut dengan bentuk merekah.",
  bahan: ["250 gram tepung terigu", "150 gram gula pasir", "150 ml santan", "1 sendok teh ragi instan", "1 butir telur", "1/2 sendok teh garam"],
  cara: ["Larutkan ragi dengan sedikit air hangat.", "Campurkan tepung dan gula.", "Masukkan santan, telur, dan larutan ragi.", "Aduk hingga menjadi adonan halus.", "Diamkan hingga mengembang.", "Tuang ke cetakan dan kukus hingga matang."]
},
{
  id: 222,
  nama: "Kue Mendut",
  daerah: "Jawa Tengah",
  gambar: "images/kue-mendut.jpg",
  deskripsi: "Kue ketan berisi kelapa manis dengan kuah santan.",
  bahan: ["250 gram tepung ketan", "150 gram kelapa parut", "100 gram gula merah", "150 ml santan", "Daun pandan", "Garam", "Daun pisang"],
  cara: ["Masak kelapa dengan gula merah dan pandan hingga menjadi isian.", "Campurkan tepung ketan dengan santan.", "Ambil adonan dan isi dengan kelapa.", "Bentuk bulat lalu bungkus daun pisang.", "Kukus hingga matang.", "Sajikan."]
},
{
  id: 225,
  nama: "Nasi Tumpang",
  daerah: "Jawa Tengah",
  gambar: "images/nasi-tumpang.jpg",
  deskripsi: "Nasi dengan sayuran rebus dan sambal tempe semangit.",
  bahan: ["200 gram tempe semangit", "300 ml santan", "4 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm kencur", "Daun salam", "Garam"],
  cara: ["Haluskan bawang, cabai, dan kencur.", "Rebus tempe bersama santan.", "Masukkan bumbu halus dan daun salam.", "Hancurkan tempe hingga tercampur dengan kuah.", "Masak hingga sambal mengental.", "Sajikan bersama nasi dan sayuran rebus."]
},
{
  id: 226,
  nama: "Soto Jepara",
  daerah: "Jawa Tengah",
  gambar: "images/soto-jepara.jpg",
  deskripsi: "Soto ayam dengan kuah gurih dan rempah khas pesisir Jepara.",
  bahan: ["400 gram ayam", "1 liter kaldu ayam", "5 siung bawang merah", "3 siung bawang putih", "2 cm jahe", "2 batang serai", "Daun salam", "Daun bawang", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Haluskan bawang dan jahe.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan bumbu ke dalam kaldu.", "Tambahkan ayam suwir dan garam.", "Sajikan dengan nasi dan pelengkap."]
},
{
  id: 228,
  nama: "Nasi Lengko Tegal",
  daerah: "Jawa Tengah",
  gambar: "images/nasi-lengko-tegal.jpg",
  deskripsi: "Nasi dengan tahu, tempe, tauge, mentimun, dan saus kacang.",
  bahan: ["300 gram nasi", "2 buah tahu", "100 gram tempe", "100 gram tauge", "1 buah mentimun", "100 gram kacang tanah", "2 siung bawang putih", "Kecap manis", "Garam"],
  cara: ["Goreng tahu dan tempe hingga matang.", "Rebus tauge sebentar.", "Haluskan kacang bersama bawang putih.", "Tambahkan kecap, garam, dan air secukupnya.", "Susun nasi dengan tahu, tempe, tauge, dan mentimun.", "Siram saus kacang."]
},
{
  id: 229,
  nama: "Sate Kelinci Tawangmangu",
  daerah: "Jawa Tengah",
  gambar: "images/sate-kelinci-tawangmangu.jpg",
  deskripsi: "Sate daging kelinci dengan bumbu kecap dan rempah.",
  bahan: ["400 gram daging kelinci", "4 siung bawang putih", "3 siung bawang merah", "1 sendok teh ketumbar", "Kecap manis", "Jeruk nipis", "Garam", "Tusuk sate"],
  cara: ["Potong daging menjadi ukuran kecil.", "Lumuri dengan jeruk nipis.", "Haluskan bawang dan ketumbar.", "Campurkan bumbu dengan kecap dan garam.", "Tusukkan daging pada tusuk sate.", "Bakar hingga matang sempurna."]
},
{
  id: 230,
  nama: "Bebek Goreng Madura",
  daerah: "Jawa Timur",
  gambar: "images/bebek-goreng-madura.jpg",
  deskripsi: "Bebek goreng dengan bumbu rempah dan sambal khas Madura.",
  bahan: ["1 ekor bebek", "6 siung bawang merah", "4 siung bawang putih", "2 cm kunyit", "2 cm jahe", "2 batang serai", "Daun salam", "Garam"],
  cara: ["Potong dan bersihkan bebek.", "Haluskan bawang, kunyit, dan jahe.", "Tumis bumbu bersama serai dan daun salam.", "Masak bebek dengan bumbu dan air hingga empuk.", "Goreng bebek hingga kecokelatan.", "Sajikan dengan sambal."]
},
{
  id: 231,
  nama: "Sate Madura Bumbu Kacang",
  daerah: "Jawa Timur",
  gambar: "images/sate-madura-kacang.jpg",
  deskripsi: "Sate ayam dengan saus kacang kental dan kecap manis.",
  bahan: ["400 gram daging ayam", "150 gram kacang tanah", "4 siung bawang putih", "4 siung bawang merah", "3 cabai merah", "Kecap manis", "Garam", "Tusuk sate"],
  cara: ["Potong ayam menjadi ukuran kecil.", "Haluskan kacang bersama bawang dan cabai.", "Masak saus kacang hingga mengental.", "Tusukkan ayam pada tusuk sate.", "Bakar hingga matang sambil diolesi kecap.", "Sajikan bersama saus kacang."]
},
{
  id: 232,
  nama: "Nasi Serpang",
  daerah: "Jawa Timur",
  gambar: "images/nasi-serpang.jpg",
  deskripsi: "Nasi khas Bangkalan dengan aneka lauk dan sambal.",
  bahan: ["300 gram beras", "100 gram serundeng", "100 gram telur", "100 gram ikan asin", "100 gram sambal", "Daun pisang", "Garam"],
  cara: ["Cuci beras dan masak hingga matang.", "Siapkan serundeng sebagai pelengkap.", "Masak telur sesuai selera.", "Goreng ikan asin hingga matang.", "Siapkan sambal dan lauk lainnya.", "Sajikan nasi bersama aneka lauk."]
},
{
  id: 233,
  nama: "Topak Ladeh",
  daerah: "Jawa Timur",
  gambar: "images/topak-ladeh.jpg",
  deskripsi: "Hidangan ketupat dengan kuah santan dan rempah khas Madura.",
  bahan: ["2 buah ketupat", "300 gram daging sapi", "500 ml santan", "5 siung bawang merah", "3 siung bawang putih", "2 cm kunyit", "2 batang serai", "Daun jeruk", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan santan dan daging.", "Masak hingga kuah matang.", "Sajikan bersama potongan ketupat."]
},
{
  id: 234,
  nama: "Kue Jubada",
  daerah: "Jawa Timur",
  gambar: "images/kue-jubada.jpg",
  deskripsi: "Jajanan tradisional khas Madura berbahan tepung dan gula.",
  bahan: ["200 gram tepung beras", "150 gram gula merah", "300 ml air", "1 lembar daun pandan", "Garam", "Kelapa parut"],
  cara: ["Rebus gula merah bersama air dan pandan.", "Saring larutan gula.", "Campurkan tepung beras dengan larutan gula.", "Masak sambil diaduk hingga mengental.", "Tuang ke wadah dan dinginkan.", "Potong dan sajikan dengan kelapa parut."]
},
{
  id: 235,
  nama: "Sate Pokea",
  daerah: "Sulawesi Tenggara",
  gambar: "images/sate-pokea.jpg",
  deskripsi: "Sate kerang air tawar khas Sulawesi Tenggara dengan bumbu gurih.",
  bahan: ["300 gram daging kerang pokea", "4 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 sendok makan kecap manis", "1 batang serai", "Garam", "Tusuk sate"],
  cara: ["Bersihkan kerang dan rebus hingga matang.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama serai.", "Masukkan kerang dan kecap.", "Masak hingga bumbu meresap.", "Tusukkan kerang dan sajikan."]
},
{
  id: 236,
  nama: "Sinonggi",
  daerah: "Sulawesi Tenggara",
  gambar: "images/sinonggi.jpg",
  deskripsi: "Makanan berbahan sagu dengan tekstur kenyal yang disantap bersama kuah.",
  bahan: ["200 gram tepung sagu", "500 ml air", "Garam", "Jeruk nipis", "Kuah ikan berbumbu sebagai pelengkap"],
  cara: ["Larutkan tepung sagu dengan sedikit air dingin.", "Didihkan sisa air.", "Tuangkan air panas sedikit demi sedikit sambil diaduk.", "Aduk hingga berubah bening dan kenyal.", "Tambahkan sedikit garam.", "Sajikan bersama kuah ikan."]
},
{
  id: 237,
  nama: "Lapa-Lapa",
  daerah: "Sulawesi Tenggara",
  gambar: "images/lapa-lapa.jpg",
  deskripsi: "Nasi ketan bersantan yang dibungkus daun kelapa muda.",
  bahan: ["300 gram beras ketan", "300 ml santan", "1/2 sendok teh garam", "Daun kelapa muda"],
  cara: ["Cuci dan rendam beras ketan.", "Masak santan bersama garam.", "Campurkan ketan dengan santan.", "Bungkus menggunakan daun kelapa muda.", "Ikat dengan rapi.", "Rebus hingga ketan matang."]
},
{
  id: 238,
  nama: "Ikan Parende",
  daerah: "Sulawesi Tenggara",
  gambar: "images/ikan-parende.jpg",
  deskripsi: "Sup ikan khas Buton dengan kuah asam dan rempah segar.",
  bahan: ["500 gram ikan laut", "1 liter air", "5 siung bawang merah", "3 siung bawang putih", "2 buah tomat", "2 batang serai", "Jeruk nipis", "Garam"],
  cara: ["Bersihkan ikan dan potong sesuai selera.", "Iris bawang dan tomat.", "Didihkan air bersama serai.", "Masukkan bawang dan ikan.", "Tambahkan tomat, jeruk nipis, dan garam.", "Masak hingga ikan matang."]
},
{
  id: 239,
  nama: "Kasoami",
  daerah: "Sulawesi Tenggara",
  gambar: "images/kasoami.jpg",
  deskripsi: "Makanan pokok tradisional berbahan singkong yang dikukus.",
  bahan: ["500 gram singkong", "Garam secukupnya"],
  cara: ["Kupas dan cuci singkong.", "Parut singkong hingga halus.", "Peras untuk mengurangi airnya.", "Ayak hasil parutan agar lebih halus.", "Masukkan ke cetakan kukus.", "Kukus hingga matang dan sajikan."]
},
{
  id: 240,
  nama: "Kambose",
  daerah: "Sulawesi Tenggara",
  gambar: "images/kambose.jpg",
  deskripsi: "Olahan jagung pipil khas Muna yang direbus hingga empuk.",
  bahan: ["300 gram jagung pipil kering", "1 liter air", "Garam", "Kelapa parut"],
  cara: ["Rendam jagung hingga lebih lunak.", "Rebus jagung dengan air.", "Masak hingga jagung empuk.", "Tambahkan sedikit garam.", "Tiriskan jika masih ada air berlebih.", "Sajikan dengan kelapa parut."]
},
{
  id: 241,
  nama: "Uta Dada",
  daerah: "Sulawesi Tengah",
  gambar: "images/uta-dada.jpg",
  deskripsi: "Masakan ayam berkuah santan khas masyarakat Kaili.",
  bahan: ["500 gram ayam", "500 ml santan", "5 siung bawang merah", "4 siung bawang putih", "3 cabai merah", "2 cm kunyit", "2 batang serai", "Garam"],
  cara: ["Potong ayam dan bersihkan.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan ayam dan aduk rata.", "Tuangkan santan dan masak hingga ayam matang.", "Tambahkan garam lalu sajikan."]
},
{
  id: 242,
  nama: "Duo Sale",
  daerah: "Sulawesi Tengah",
  gambar: "images/duo-sale.jpg",
  deskripsi: "Olahan ikan kecil kering yang dimasak bersama bumbu cabai.",
  bahan: ["200 gram ikan teri kering", "5 siung bawang merah", "3 siung bawang putih", "5 cabai merah", "2 buah tomat", "1 sendok teh gula", "Garam", "Minyak"],
  cara: ["Bersihkan ikan teri dan tiriskan.", "Haluskan bawang dan cabai.", "Tumis bumbu hingga matang.", "Masukkan tomat dan gula.", "Tambahkan ikan teri dan aduk rata.", "Masak hingga bumbu meresap."]
},
{
  id: 243,
  nama: "Uta Kelo",
  daerah: "Sulawesi Tengah",
  gambar: "images/uta-kelo.jpg",
  deskripsi: "Sayur daun kelor dengan kuah santan khas masyarakat Kaili.",
  bahan: ["150 gram daun kelor", "400 ml santan", "4 siung bawang merah", "2 siung bawang putih", "2 cm kunyit", "1 batang serai", "Garam"],
  cara: ["Petik dan cuci daun kelor.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai.", "Tuangkan santan dan aduk perlahan.", "Masukkan daun kelor.", "Masak hingga matang."]
},
{
  id: 244,
  nama: "Nasi Jaha Kenari",
  daerah: "Maluku Utara",
  gambar: "images/nasi-jaha-kenari.jpg",
  deskripsi: "Nasi ketan berbumbu santan yang disajikan dengan kenari.",
  bahan: ["300 gram beras ketan", "200 ml santan", "50 gram kacang kenari", "2 batang serai", "2 lembar daun pandan", "Garam", "Daun pisang"],
  cara: ["Cuci dan rendam beras ketan.", "Sangrai kenari hingga harum.", "Masak santan bersama serai dan pandan.", "Campurkan santan dengan ketan dan kenari.", "Bungkus dengan daun pisang.", "Kukus hingga matang."]
},
{
  id: 245,
  nama: "Gohu Pepaya",
  daerah: "Maluku Utara",
  gambar: "images/gohu-pepaya.jpg",
  deskripsi: "Olahan pepaya muda dengan bumbu asam dan cabai khas Maluku Utara.",
  bahan: ["300 gram pepaya muda", "5 cabai rawit", "3 siung bawang merah", "2 buah jeruk nipis", "1 sendok makan gula", "Garam", "Daun kemangi"],
  cara: ["Kupas dan serut pepaya muda.", "Cuci hingga bersih dan tiriskan.", "Iris bawang merah dan cabai.", "Campurkan pepaya dengan bumbu.", "Tambahkan jeruk nipis, gula, dan garam.", "Aduk bersama kemangi dan sajikan."]
},
{
  id: 246,
  nama: "Papeda Bungkus",
  daerah: "Papua",
  gambar: "images/papeda-bungkus.jpg",
  deskripsi: "Papeda sagu yang dibungkus daun dan dikukus hingga kenyal.",
  bahan: ["200 gram tepung sagu", "500 ml air", "Garam", "Daun pisang"],
  cara: ["Larutkan tepung sagu dengan air secukupnya.", "Didihkan sisa air.", "Tuangkan air panas sambil diaduk hingga bening.", "Tambahkan sedikit garam.", "Bungkus papeda dengan daun pisang.", "Kukus sebentar lalu sajikan."]
},
{
  id: 247,
  nama: "Ikan Bungkus Papua",
  daerah: "Papua",
  gambar: "images/ikan-bungkus-papua.jpg",
  deskripsi: "Ikan berbumbu rempah yang dibungkus daun dan dipanggang.",
  bahan: ["500 gram ikan laut", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 batang serai", "Daun kemangi", "Jeruk nipis", "Garam", "Daun pisang"],
  cara: ["Bersihkan ikan dan lumuri jeruk nipis.", "Haluskan bawang dan cabai.", "Lumuri ikan dengan bumbu dan garam.", "Tambahkan serai serta kemangi.", "Bungkus dengan daun pisang.", "Panggang atau kukus hingga ikan matang."]
},
{
  id: 248,
  nama: "Sagu Sep",
  daerah: "Papua Barat Daya",
  gambar: "images/sagu-sep.jpg",
  deskripsi: "Makanan tradisional berbahan sagu yang dipadukan dengan kelapa dan rempah.",
  bahan: ["250 gram tepung sagu", "100 gram kelapa parut", "2 siung bawang putih", "3 siung bawang merah", "Daun bawang", "Garam", "Air secukupnya"],
  cara: ["Haluskan bawang merah dan bawang putih.", "Campurkan sagu dengan kelapa parut.", "Tambahkan bumbu dan daun bawang.", "Tuangkan air sedikit demi sedikit.", "Aduk hingga adonan dapat dibentuk.", "Panggang atau kukus hingga matang."]
},
{
  id: 249,
  nama: "Kue Lontar Mini",
  daerah: "Papua Barat",
  gambar: "images/kue-lontar-mini.jpg",
  deskripsi: "Kue susu dengan kulit renyah dan isian lembut khas Papua.",
  bahan: ["150 gram tepung terigu", "75 gram mentega", "1 butir telur", "200 ml susu kental manis", "2 butir telur", "100 ml air", "Vanili"],
  cara: ["Campurkan tepung dan mentega untuk membuat kulit.", "Tambahkan telur lalu uleni hingga kalis.", "Cetak adonan pada cetakan kecil.", "Campurkan susu, telur, air, dan vanili untuk isian.", "Tuang isian ke kulit.", "Panggang hingga isian mengeras dan matang."]
},
{
  id: 250,
  nama: "Sagu Bakar",
  daerah: "Papua",
  gambar: "images/sagu-bakar.jpg",
  deskripsi: "Olahan tepung sagu tradisional yang dipanggang hingga harum.",
  bahan: ["250 gram tepung sagu", "100 gram kelapa parut", "150 ml santan", "2 sendok makan gula pasir", "1/2 sendok teh garam"],
  cara: ["Sangrai tepung sagu sebentar.", "Campurkan dengan kelapa parut.", "Tambahkan gula dan garam.", "Tuangkan santan sedikit demi sedikit.", "Masukkan adonan ke cetakan.", "Panggang hingga matang dan harum."]
},
{
  id: 251,
  nama: "Dendeng Balado",
  daerah: "Sumatera Barat",
  gambar: "images/dendeng-balado.jpg",
  deskripsi: "Olahan daging sapi tipis yang digoreng kering lalu disiram sambal balado pedas.",
  bahan: ["500 gram daging sapi", "5 siung bawang putih", "1 ruas jahe", "Garam", "Minyak goreng", "10 cabai merah", "5 bawang merah", "2 tomat"],
  cara: ["Rebus daging bersama bawang putih, jahe, dan garam hingga empuk.", "Iris daging tipis lalu pipihkan.", "Goreng hingga kering dan sisihkan.", "Haluskan cabai, bawang merah, dan tomat.", "Tumis sambal hingga matang lalu sajikan bersama dendeng."]
},
{
  id: 252,
  nama: "Ayam Pop",
  daerah: "Sumatera Barat",
  gambar: "images/ayam-pop.jpg",
  deskripsi: "Ayam khas Minangkabau yang dimasak dengan bumbu sederhana dan disajikan bersama sambal.",
  bahan: ["1 ekor ayam", "500 ml air kelapa", "4 siung bawang putih", "3 bawang merah", "Jahe", "Garam", "Daun salam", "Minyak goreng"],
  cara: ["Potong ayam dan bersihkan.", "Haluskan bawang putih, bawang merah, jahe, dan garam.", "Masak ayam bersama bumbu, air kelapa, dan daun salam.", "Angkat ayam setelah matang.", "Goreng sebentar dan sajikan dengan sambal."]
},
{
  id: 253,
  nama: "Sate Padang",
  daerah: "Sumatera Barat",
  gambar: "images/sate-padang.jpg",
  deskripsi: "Sate berbahan daging sapi dengan kuah kental berbumbu rempah khas Padang.",
  bahan: ["500 gram daging sapi", "Tusuk sate", "Bawang putih", "Bawang merah", "Cabai merah", "Kunyit", "Jahe", "Serai", "Tepung beras", "Garam"],
  cara: ["Rebus daging hingga empuk dan potong kecil.", "Haluskan bawang, cabai, kunyit, dan jahe.", "Tumis bumbu bersama serai hingga harum.", "Masukkan kaldu daging dan kentalkan dengan tepung beras.", "Tusuk daging, panggang sebentar, lalu siram dengan kuah."]
},
{
  id: 254,
  nama: "Gulai Tambusu",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-tambusu.jpg",
  deskripsi: "Gulai khas Minang berupa usus sapi yang diisi adonan telur dan tahu.",
  bahan: ["500 gram usus sapi yang sudah dibersihkan", "4 butir telur", "200 gram tahu", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Jahe", "Daun kunyit"],
  cara: ["Campurkan telur dan tahu yang telah dihancurkan.", "Isi usus dengan adonan secukupnya dan ikat ujungnya.", "Rebus hingga isian matang.", "Masak santan bersama bumbu halus dan daun kunyit.", "Masukkan tambusu dan masak hingga bumbu meresap."]
},
{
  id: 255,
  nama: "Asam Padeh Ikan",
  daerah: "Sumatera Barat",
  gambar: "images/asam-padeh-ikan.jpg",
  deskripsi: "Masakan ikan berkuah pedas dan asam tanpa menggunakan santan.",
  bahan: ["500 gram ikan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Asam kandis", "Serai", "Daun jeruk", "Garam"],
  cara: ["Bersihkan ikan dan potong sesuai selera.", "Haluskan cabai, bawang, kunyit, dan jahe.", "Rebus bumbu bersama serai, daun jeruk, dan asam kandis.", "Masukkan ikan dan masak hingga matang.", "Koreksi rasa lalu sajikan."]
},
{
  id: 258,
  nama: "Kue Pinyaram",
  daerah: "Sumatera Barat",
  gambar: "images/kue-pinyaram.jpg",
  deskripsi: "Kue tradisional berbentuk bulat dengan bagian tengah tebal dan pinggiran renyah.",
  bahan: ["250 gram tepung beras", "150 gram gula merah", "200 ml santan", "Garam", "Minyak goreng"],
  cara: ["Larutkan gula merah dengan santan hangat.", "Campurkan tepung beras dan sedikit garam.", "Tuangkan larutan gula sedikit demi sedikit.", "Diamkan adonan hingga mengembang.", "Goreng adonan berbentuk bulat hingga matang."]
},
{
  id: 259,
  nama: "Roti Jala",
  daerah: "Riau",
  gambar: "images/roti-jala.jpg",
  deskripsi: "Roti tipis bermotif jala yang biasanya disajikan bersama kari.",
  bahan: ["250 gram tepung terigu", "2 butir telur", "400 ml santan", "Garam", "1 sendok makan margarin"],
  cara: ["Campurkan tepung, telur, santan, dan garam.", "Aduk hingga adonan licin.", "Masukkan adonan ke cetakan roti jala.", "Tuangkan membentuk jaring di atas wajan datar.", "Masak hingga matang lalu lipat."]
},
{
  id: 260,
  nama: "Mie Tarempa",
  daerah: "Kepulauan Riau",
  gambar: "images/mie-tarempa.jpg",
  deskripsi: "Mi khas Kepulauan Riau yang dimasak dengan ikan, cabai, dan bumbu gurih.",
  bahan: ["300 gram mi kuning", "150 gram ikan tongkol matang", "Bawang putih", "Bawang merah", "Cabai merah", "Kecap", "Tauge", "Sawi", "Garam"],
  cara: ["Suwir ikan tongkol dan sisihkan.", "Haluskan bawang dan cabai.", "Tumis bumbu hingga harum.", "Masukkan ikan, mi, sayuran, dan kecap.", "Aduk hingga matang dan bumbu merata."]
},
{
  id: 261,
  nama: "Mie Lendir",
  daerah: "Kepulauan Riau",
  gambar: "images/mie-lendir.jpg",
  deskripsi: "Mi kuning dengan kuah kacang kental yang menjadi hidangan khas Kepulauan Riau.",
  bahan: ["300 gram mi kuning", "150 gram kacang tanah", "Gula merah", "Cabai merah", "Bawang putih", "Tepung maizena", "Telur rebus", "Tauge", "Garam"],
  cara: ["Rebus mi dan tauge hingga matang.", "Goreng kacang lalu haluskan.", "Tumis bawang dan cabai.", "Masukkan kacang, gula merah, air, dan larutan maizena.", "Sajikan kuah kental bersama mi dan telur."]
},
{
  id: 262,
  nama: "Luti Gendang",
  daerah: "Kepulauan Riau",
  gambar: "images/luti-gendang.jpg",
  deskripsi: "Roti goreng berbentuk lonjong dengan isian ikan berbumbu.",
  bahan: ["300 gram tepung terigu", "1 sendok teh ragi", "2 sendok makan gula", "150 ml santan hangat", "Ikan tongkol", "Bawang merah", "Cabai", "Garam", "Minyak goreng"],
  cara: ["Campurkan tepung, ragi, gula, dan santan.", "Uleni hingga kalis lalu diamkan sampai mengembang.", "Masak ikan suwir bersama bumbu hingga kering.", "Isi adonan roti dengan ikan lalu bentuk lonjong.", "Goreng hingga berwarna keemasan."]
},
{
  id: 264,
  nama: "Mi Koclok",
  daerah: "Jawa Barat",
  gambar: "images/mi-koclok.jpg",
  deskripsi: "Mi khas Cirebon dengan kuah putih kental, ayam, telur, dan tauge.",
  bahan: ["300 gram mi telur", "200 gram dada ayam", "2 butir telur rebus", "Tauge", "Santan", "Tepung maizena", "Bawang putih", "Merica", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Rebus mi dan tauge secara terpisah.", "Tumis bawang putih hingga harum.", "Tambahkan kaldu, santan, dan larutan maizena.", "Sajikan mi dengan ayam, telur, tauge, dan kuah."]
},
{
  id: 265,
  nama: "Docang",
  daerah: "Jawa Barat",
  gambar: "images/docang.jpg",
  deskripsi: "Hidangan khas Cirebon berupa lontong dengan sayuran dan kuah dage.",
  bahan: ["Lontong", "Daun singkong", "Tauge", "Oncom", "Kelapa parut", "Bawang merah", "Bawang putih", "Kencur", "Garam"],
  cara: ["Rebus daun singkong dan tauge hingga matang.", "Haluskan bawang, kencur, dan garam.", "Masak oncom bersama bumbu dan air hingga menjadi kuah.", "Potong lontong dan tata bersama sayuran.", "Siram dengan kuah dage dan taburi kelapa."]
},
{
  id: 266,
  nama: "Tahu Aci",
  daerah: "Jawa Tengah",
  gambar: "images/tahu-aci.jpg",
  deskripsi: "Tahu goreng dengan adonan tepung tapioka berbumbu yang menempel di salah satu sisinya.",
  bahan: ["10 buah tahu kuning", "200 gram tepung tapioka", "50 gram tepung terigu", "Bawang putih", "Daun bawang", "Air panas", "Garam", "Merica"],
  cara: ["Potong tahu menjadi bentuk segitiga.", "Campurkan tepung tapioka, terigu, bawang, dan daun bawang.", "Tuangkan air panas sedikit demi sedikit.", "Tempelkan adonan pada tahu.", "Goreng hingga bagian acinya matang."]
},
  {
    id: 267,
    nama: "Botok Mlanding",
    daerah: "Jawa Tengah",
    gambar: "images/botok-mlanding.jpg",
    deskripsi: "Olahan kelapa parut dan petai cina yang dibungkus daun pisang lalu dikukus.",
    bahan: ["150 gram petai cina", "200 gram kelapa parut", "Daun pisang secukupnya", "2 siung bawang putih", "4 siung bawang merah", "2 buah cabai merah", "Garam dan gula secukupnya"],
    cara: ["Haluskan bawang merah, bawang putih, dan cabai.", "Campurkan bumbu dengan kelapa parut.", "Masukkan petai cina, garam, dan gula.", "Aduk hingga rata.", "Bungkus adonan menggunakan daun pisang.", "Kukus sekitar 30 menit hingga matang."]
  },
{
  id: 268,
  nama: "Tempe Mendoan",
  daerah: "Jawa Tengah",
  gambar: "images/tempe-mendoan.jpg",
  deskripsi: "Tempe tipis berbalut tepung berbumbu yang digoreng sebentar hingga lembut.",
  bahan: ["10 lembar tempe tipis", "150 gram tepung terigu", "50 gram tepung beras", "Daun bawang", "Bawang putih", "Ketumbar", "Kunyit", "Garam", "Air", "Minyak goreng"],
  cara: ["Haluskan bawang putih, ketumbar, kunyit, dan garam.", "Campurkan tepung dan daun bawang.", "Tambahkan bumbu halus dan air hingga menjadi adonan.", "Celupkan tempe ke dalam adonan.", "Goreng sebentar hingga tepung matang."]
},
{
  id: 269,
  nama: "Nasi Megono",
  daerah: "Jawa Tengah",
  gambar: "images/nasi-megono.jpg",
  deskripsi: "Nasi dengan cacahan nangka muda berbumbu kelapa khas Pekalongan.",
  bahan: ["500 gram nangka muda", "200 gram kelapa parut", "Bawang merah", "Bawang putih", "Cabai", "Kencur", "Daun salam", "Daun jeruk", "Garam"],
  cara: ["Cincang nangka muda dan rebus hingga empuk.", "Haluskan bawang, cabai, dan kencur.", "Campurkan bumbu dengan kelapa parut.", "Aduk bersama nangka dan kukus hingga matang.", "Sajikan bersama nasi hangat."]
},
{
  id: 278,
  nama: "Sate Pusut",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/sate-pusut.jpg",
  deskripsi: "Sate khas Lombok berbahan daging cincang berbumbu yang dililitkan pada tusuk sate.",
  bahan: ["300 gram daging sapi cincang", "100 gram kelapa parut", "Bawang merah", "Bawang putih", "Cabai", "Ketumbar", "Daun jeruk", "Garam"],
  cara: ["Campurkan daging cincang dan kelapa parut.", "Haluskan bawang, cabai, ketumbar, dan garam.", "Campurkan bumbu dengan daging.", "Lilitkan adonan pada tusuk sate.", "Panggang hingga matang sambil dibolak-balik."]
},
{
  id: 282,
  nama: "Ikan Kuah Pala",
  daerah: "Maluku",
  gambar: "images/ikan-kuah-pala.jpg",
  deskripsi: "Hidangan ikan berkuah dengan aroma pala yang khas dari Kepulauan Banda.",
  bahan: ["500 gram ikan", "Buah pala", "Bawang merah", "Bawang putih", "Cabai", "Jahe", "Tomat", "Daun kemangi", "Garam"],
  cara: ["Bersihkan ikan dan potong sesuai selera.", "Haluskan bawang, cabai, jahe, dan sedikit pala.", "Rebus bumbu bersama air hingga harum.", "Masukkan ikan dan tomat lalu masak hingga matang.", "Tambahkan kemangi dan sajikan."]
},
  {
    id: 283,
    nama: "Sambal Teri Kecombrang",
    daerah: "Sumatera",
    gambar: "images/sambal-teri-kecombrang.jpg",
    deskripsi: "Sambal ikan teri dengan aroma khas bunga kecombrang.",
    bahan: ["100 gram ikan teri", "1 batang bunga kecombrang", "5 siung bawang merah", "3 siung bawang putih", "8 buah cabai merah", "2 buah tomat", "Garam secukupnya", "Minyak goreng"],
    cara: ["Cuci ikan teri dan tiriskan.", "Goreng teri hingga matang lalu sisihkan.", "Iris kecombrang dan siapkan bumbu.", "Haluskan cabai, bawang, dan tomat.", "Tumis bumbu hingga harum.", "Masukkan kecombrang dan teri, lalu aduk hingga rata."]
  },
  {
    id: 284,
    nama: "Nasi Jagung Madura",
    daerah: "Madura, Jawa Timur",
    gambar: "images/nasi-jagung-madura.jpg",
    deskripsi: "Nasi berbahan jagung tumbuk yang menjadi makanan tradisional masyarakat Madura.",
    bahan: ["250 gram beras jagung", "100 gram beras putih", "Air secukupnya", "Garam secukupnya"],
    cara: ["Cuci beras jagung hingga bersih.", "Rendam beras jagung hingga agak lunak.", "Cuci beras putih.", "Campurkan kedua bahan.", "Masak dengan air hingga matang dan pulen.", "Sajikan bersama lauk dan sayuran."]
  },
{
  id: 285,
  nama: "Kapurung",
  daerah: "Sulawesi Selatan",
  gambar: "images/kapurung.jpg",
  deskripsi: "Hidangan khas Luwu berbahan sagu yang disajikan dengan sayuran dan kuah ikan.",
  bahan: ["200 gram tepung sagu", "Ikan tongkol", "Jagung", "Bayam", "Kacang panjang", "Tomat", "Jeruk nipis", "Cabai", "Garam"],
  cara: ["Larutkan tepung sagu dengan air lalu masak hingga bening dan kenyal.", "Rebus ikan bersama bumbu hingga menjadi kuah.", "Masukkan jagung dan sayuran ke dalam kuah.", "Bentuk adonan sagu menjadi bulatan kecil.", "Sajikan sagu bersama kuah ikan dan sayuran."]
},
{
  id: 289,
  nama: "Bassang",
  daerah: "Sulawesi Selatan",
  gambar: "images/bassang.jpg",
  deskripsi: "Bubur jagung khas Makassar yang dimasak dengan santan dan disajikan manis.",
  bahan: ["250 gram jagung pulut kering", "500 ml santan", "Gula pasir", "Daun pandan", "Garam"],
  cara: ["Rendam jagung semalaman.", "Rebus jagung hingga empuk.", "Masukkan santan dan daun pandan.", "Tambahkan gula dan sedikit garam.", "Masak hingga mengental lalu sajikan."]
},
{
  id: 290,
  nama: "Gogoso",
  daerah: "Sulawesi Selatan",
  gambar: "images/gogoso.jpg",
  deskripsi: "Ketan berbumbu yang dibungkus daun pisang dan dipanggang hingga harum.",
  bahan: ["500 gram beras ketan", "300 ml santan", "Garam", "Daun pisang", "Ikan tongkol suwir berbumbu untuk isian"],
  cara: ["Rendam ketan lalu kukus hingga setengah matang.", "Masak santan dengan garam.", "Campurkan ketan dengan santan lalu kukus kembali.", "Isi atau padatkan ketan dan bungkus dengan daun pisang.", "Panggang hingga daun harum dan bagian luar sedikit kecokelatan."]
},
  {
    id: 291,
    nama: "Ikan Baung Bakar",
    daerah: "Riau",
    gambar: "images/ikan-baung-bakar.jpg",
    deskripsi: "Ikan baung berbumbu rempah yang dibakar hingga harum.",
    bahan: ["1 ekor ikan baung", "3 siung bawang putih", "5 siung bawang merah", "2 ruas kunyit", "1 ruas jahe", "2 buah cabai merah", "2 sendok makan kecap manis", "Garam secukupnya"],
    cara: ["Bersihkan ikan dan buat beberapa sayatan.", "Haluskan bawang, kunyit, jahe, dan cabai.", "Campurkan bumbu dengan kecap dan garam.", "Lumuri ikan dengan bumbu.", "Diamkan agar bumbu meresap.", "Bakar ikan sambil sesekali diolesi bumbu hingga matang."]
  },
{
  id: 292,
  nama: "Kabuto",
  daerah: "Sulawesi Tenggara",
  gambar: "images/kabuto.jpg",
  deskripsi: "Makanan tradisional Muna berbahan singkong yang dikeringkan dan dikukus.",
  bahan: ["500 gram singkong kering", "Kelapa parut", "Garam", "Air"],
  cara: ["Cuci singkong kering hingga bersih.", "Rendam hingga teksturnya lebih lunak.", "Kukus singkong sampai matang.", "Kukus kelapa parut dengan sedikit garam.", "Sajikan kabuto bersama kelapa parut."]
},
  {
    id: 293,
    nama: "Pindang Patin",
    daerah: "Sumatera Selatan",
    gambar: "images/pindang-patin.jpg",
    deskripsi: "Sup ikan patin dengan kuah asam, pedas, dan aroma rempah.",
    bahan: ["500 gram ikan patin", "2 buah tomat", "2 batang serai", "2 ruas lengkuas", "2 lembar daun salam", "5 siung bawang merah", "3 siung bawang putih", "Cabai rawit", "Asam jawa", "Garam secukupnya"],
    cara: ["Bersihkan ikan patin.", "Haluskan bawang dan cabai.", "Rebus air bersama bumbu halus, serai, lengkuas, dan daun salam.", "Tambahkan asam jawa.", "Masukkan ikan dan tomat.", "Masak hingga ikan matang dan kuah terasa segar."]
  },
  {
    id: 294,
    nama: "Sate Lilit Ikan",
    daerah: "Bali",
    gambar: "images/sate-lilit-ikan.jpg",
    deskripsi: "Sate khas Bali dari daging ikan berbumbu yang dililitkan pada batang serai.",
    bahan: ["400 gram daging ikan giling", "100 gram kelapa parut", "10 batang serai", "4 siung bawang putih", "5 siung bawang merah", "2 ruas kunyit", "1 ruas kencur", "Garam secukupnya"],
    cara: ["Haluskan bawang merah, bawang putih, kunyit, dan kencur.", "Campurkan bumbu dengan ikan giling.", "Tambahkan kelapa parut dan garam.", "Aduk hingga tercampur rata.", "Lilitkan adonan pada batang serai.", "Panggang hingga matang sambil dibalik."]
  }, 
{
    id: 302,
    nama: "Ikan Woku Daun",
    daerah: "Sulawesi Utara",
    gambar: "images/ikan-woku-daun.jpg",
    deskripsi: "Olahan ikan berbumbu woku khas Sulawesi Utara dengan aroma daun kemangi dan rempah.",
    bahan: ["500 gram ikan", "2 batang serai", "4 lembar daun jeruk", "1 ikat daun kemangi", "2 buah tomat", "Garam secukupnya", "Bumbu halus: bawang merah, bawang putih, kunyit, jahe, cabai, dan kemiri"],
    cara: ["Bersihkan ikan dan lumuri sedikit garam.", "Tumis bumbu halus hingga harum.", "Masukkan serai dan daun jeruk.", "Tambahkan ikan dan sedikit air.", "Masukkan tomat dan masak hingga ikan matang.", "Tambahkan daun kemangi sebelum disajikan."]
},
{
  id: 303,
  nama: "Sambal Raja Kutai",
  daerah: "Kalimantan Timur",
  gambar: "images/sambal-raja-kutai.jpg",
  deskripsi: "Sambal khas Kutai yang berisi aneka sayuran dan terong goreng.",
  bahan: ["Terong", "Kacang panjang", "Bawang merah", "Cabai merah", "Jeruk limau", "Gula merah", "Terasi", "Garam", "Minyak goreng"],
  cara: ["Potong terong dan kacang panjang.", "Goreng terong hingga matang.", "Rebus kacang panjang sebentar.", "Haluskan cabai, bawang, terasi, gula, dan garam.", "Campurkan semua bahan dan beri perasan jeruk limau."]
},
{
  id: 307,
  nama: "Iwak Pakasam",
  daerah: "Kalimantan Selatan",
  gambar: "images/iwak-pakasam.jpg",
  deskripsi: "Ikan fermentasi khas Banjar yang dimasak kembali dengan bumbu sederhana.",
  bahan: ["Ikan air tawar yang sudah menjadi pakasam", "Bawang merah", "Bawang putih", "Cabai", "Serai", "Minyak goreng"],
  cara: ["Siapkan pakasam yang sudah diolah dengan benar.", "Iris bawang dan cabai.", "Tumis bawang, cabai, dan serai hingga harum.", "Masukkan pakasam dan aduk perlahan.", "Masak hingga matang dan sajikan."]
},
{
  id: 309,
  nama: "Ikan Jelawat Bakar",
  daerah: "Kalimantan Tengah",
  gambar: "images/ikan-jelawat-bakar.jpg",
  deskripsi: "Ikan jelawat yang dibumbui rempah kemudian dibakar hingga matang.",
  bahan: ["1 ekor ikan jelawat", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Ketumbar", "Jeruk nipis", "Garam"],
  cara: ["Bersihkan ikan dan beri beberapa sayatan.", "Haluskan bawang, kunyit, jahe, ketumbar, dan garam.", "Lumuri ikan dengan jeruk nipis dan bumbu.", "Diamkan sebentar agar bumbu meresap.", "Bakar sambil dibolak-balik hingga matang."]
},
{
  id: 310,
  nama: "Juhu Umbut Sawit",
  daerah: "Kalimantan Tengah",
  gambar: "images/juhu-umbut-sawit.jpg",
  deskripsi: "Sayur tradisional Dayak berbahan umbut yang dimasak dengan bumbu dan santan.",
  bahan: ["Umbut sawit yang sudah diolah sebagai bahan pangan", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Daun salam", "Garam"],
  cara: ["Siapkan umbut yang sudah dibersihkan dan dipotong.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai dan daun salam.", "Tambahkan santan dan umbut.", "Masak hingga umbut empuk dan kuah matang."]
},
{
  id: 311,
  nama: "Nasi Kuning Samarinda",
  daerah: "Kalimantan Timur",
  gambar: "images/nasi-kuning-samarinda.jpg",
  deskripsi: "Nasi kuning khas Samarinda yang disajikan bersama lauk berbumbu.",
  bahan: ["500 gram beras", "Santan", "Kunyit", "Serai", "Daun pandan", "Daun salam", "Garam"],
  cara: ["Cuci beras hingga bersih.", "Haluskan kunyit dan campurkan dengan santan.", "Masak santan bersama serai, pandan, dan garam.", "Masukkan beras dan masak hingga santan terserap.", "Kukus hingga nasi matang."]
},
{
  id: 312,
  nama: "Ikan Bakar Colo-Colo",
  daerah: "Maluku",
  gambar: "images/ikan-bakar-colo-colo.jpg",
  deskripsi: "Ikan bakar yang disajikan bersama sambal segar colo-colo khas Maluku.",
  bahan: ["1 ekor ikan laut", "Jeruk nipis", "Garam", "Tomat", "Cabai rawit", "Bawang merah", "Kecap manis", "Jeruk limau"],
  cara: ["Bersihkan ikan dan lumuri dengan jeruk nipis serta garam.", "Bakar ikan hingga matang sempurna.", "Iris tomat, cabai, dan bawang merah.", "Campurkan irisan dengan kecap dan perasan jeruk limau.", "Sajikan ikan bersama sambal colo-colo."]
},
{
  id: 315,
  nama: "Kue Lontar",
  daerah: "Papua",
  gambar: "images/kue-lontar.jpg",
  deskripsi: "Kue khas Papua dengan kulit renyah dan isian custard susu yang lembut.",
  bahan: ["250 gram tepung terigu", "100 gram margarin", "2 butir telur", "200 ml susu kental manis", "200 ml air", "Vanili"],
  cara: ["Campurkan tepung dan margarin hingga menjadi adonan kulit.", "Tekan adonan ke dalam loyang pie.", "Kocok telur bersama susu, air, dan vanili.", "Tuangkan isian ke dalam kulit kue.", "Panggang hingga isian mengeras dan kulit matang."]
},
{
  id: 316,
  nama: "Martabak Sagu",
  daerah: "Papua Barat",
  gambar: "images/martabak-sagu.jpg",
  deskripsi: "Kudapan tradisional berbahan sagu dengan rasa manis dari gula merah.",
  bahan: ["250 gram tepung sagu", "100 gram gula merah", "Kelapa parut", "Air", "Sedikit garam"],
  cara: ["Campurkan tepung sagu dengan kelapa parut.", "Larutkan gula merah dengan sedikit air.", "Campurkan larutan gula ke adonan.", "Masak adonan di wajan datar.", "Balik hingga kedua sisi matang."]
},
  {
    id: 317,
    nama: "Sega Wiwit",
    daerah: "Yogyakarta",
    gambar: "images/sega-wiwit.jpg",
    deskripsi: "Hidangan nasi tradisional yang berkaitan dengan tradisi syukuran panen masyarakat Jawa.",
    bahan: ["300 gram beras", "100 gram kelapa parut", "100 gram kacang panjang", "100 gram tauge", "1 ikat daun singkong", "Garam secukupnya", "Bumbu urap: bawang putih, cabai, dan kencur"],
    cara: ["Masak beras hingga menjadi nasi.", "Rebus daun singkong dan kacang panjang.", "Rebus tauge sebentar.", "Haluskan bumbu urap.", "Campurkan bumbu dengan kelapa parut.", "Kukus kelapa berbumbu hingga matang dan sajikan bersama nasi serta sayuran."]
  },
{
  id: 320,
  nama: "Sayur Lilin",
  daerah: "Papua",
  gambar: "images/sayur-lilin.jpg",
  deskripsi: "Sayuran khas Papua berbahan bunga lilin yang dimasak dengan santan dan rempah.",
  bahan: ["Bunga lilin yang dapat dimakan", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Serai", "Garam"],
  cara: ["Bersihkan bunga lilin dan potong sesuai selera.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama serai.", "Tuangkan santan dan masukkan bunga lilin.", "Masak hingga matang dan bumbu meresap."]
},
{
  id: 322,
  nama: "Nasi Jaha Bakar Cakalang",
  daerah: "Sulawesi Utara",
  gambar: "images/nasi-jaha-bakar-cakalang.jpg",
  deskripsi: "Variasi nasi berbumbu yang dipadukan dengan ikan cakalang matang.",
  bahan: ["300 gram beras ketan", "200 ml santan", "Ikan cakalang matang", "Daun pandan", "Serai", "Garam", "Daun pisang"],
  cara: ["Rendam ketan lalu kukus hingga setengah matang.", "Masak santan bersama pandan, serai, dan garam.", "Campurkan santan dengan ketan.", "Tambahkan cakalang suwir dan bungkus dengan daun pisang.", "Kukus hingga matang lalu panggang sebentar."]
},
{
  id: 324,
  nama: "Nasi Kuning Banjar",
  daerah: "Kalimantan Selatan",
  gambar: "images/nasi-kuning-banjar.jpg",
  deskripsi: "Nasi kuning khas Banjar yang sering disajikan bersama lauk berbumbu habang.",
  bahan: ["500 gram beras", "Santan", "Kunyit", "Serai", "Daun pandan", "Garam"],
  cara: ["Cuci beras hingga bersih.", "Campurkan santan dengan kunyit dan garam.", "Masak santan bersama serai dan pandan.", "Masukkan beras dan aduk hingga santan terserap.", "Kukus hingga nasi matang."]
},
{
  id: 325,
  nama: "Ikan Masak Habang",
  daerah: "Kalimantan Selatan",
  gambar: "images/ikan-masak-habang.jpg",
  deskripsi: "Ikan yang dimasak dengan bumbu merah khas Banjar yang kaya rempah.",
  bahan: ["500 gram ikan", "Cabai merah kering", "Bawang merah", "Bawang putih", "Jahe", "Kayu manis", "Gula merah", "Garam"],
  cara: ["Bersihkan ikan dan goreng hingga matang.", "Haluskan cabai, bawang, dan jahe.", "Tumis bumbu bersama sedikit kayu manis.", "Tambahkan gula merah dan sedikit air.", "Masukkan ikan lalu masak hingga bumbu meresap."]
},
{
  id: 326,
  nama: "Kue Ipau",
  daerah: "Kalimantan Selatan",
  gambar: "images/kue-ipau.jpg",
  deskripsi: "Kue gurih berlapis khas Banjar dengan isian sayuran dan daging.",
  bahan: ["Kulit dadar tipis", "200 gram daging cincang", "Wortel", "Kentang", "Bawang merah", "Bawang putih", "Santan", "Telur", "Garam"],
  cara: ["Tumis daging dan sayuran bersama bumbu hingga matang.", "Siapkan kulit dadar tipis.", "Susun kulit dan isian secara berlapis dalam loyang.", "Siram dengan campuran telur dan santan.", "Kukus hingga seluruh lapisan matang."]
},
  {
    id: 327,
    nama: "Tinutuan",
    daerah: "Manado, Sulawesi Utara",
    gambar: "images/tinutuan.jpg",
    deskripsi: "Bubur Manado yang kaya sayuran dan biasa disajikan sebagai menu sarapan.",
    bahan: ["200 gram beras", "100 gram labu kuning", "1 buah jagung manis", "1 ikat bayam", "1 ikat kangkung", "Daun kemangi", "Garam secukupnya"],
    cara: ["Cuci beras hingga bersih.", "Rebus beras dengan air hingga menjadi bubur.", "Masukkan labu kuning dan jagung.", "Masak hingga sayuran lunak.", "Tambahkan bayam, kangkung, dan kemangi.", "Beri garam lalu aduk dan sajikan."]
  },
{
  id: 328,
  nama: "Laksa Tangerang",
  daerah: "Banten",
  gambar: "images/laksa-tangerang.jpg",
  deskripsi: "Laksa khas Tangerang dengan kuah santan berbumbu dan mi tepung beras.",
  bahan: ["Mi laksa", "Santan", "Ayam", "Bawang merah", "Bawang putih", "Kunyit", "Kemiri", "Serai", "Daun jeruk", "Garam"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Haluskan bawang, kunyit, dan kemiri.", "Tumis bumbu bersama serai dan daun jeruk.", "Tambahkan santan dan masak hingga kuah matang.", "Sajikan mi bersama ayam dan kuah laksa."]
},
{
  id: 329,
  nama: "Sayur Besan",
  daerah: "Banten",
  gambar: "images/sayur-besan.jpg",
  deskripsi: "Sayur tradisional Betawi-Banten yang menggunakan terubuk dan kuah santan.",
  bahan: ["Terubuk", "Santan", "Kentang", "Wortel", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Serai", "Garam"],
  cara: ["Bersihkan terubuk dan potong-potong.", "Potong kentang serta wortel.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu lalu tambahkan santan.", "Masukkan sayuran dan masak hingga matang."]
},
{
  id: 330,
  nama: "Gabus Pucung",
  daerah: "Betawi",
  gambar: "images/gabus-pucung.jpg",
  deskripsi: "Masakan ikan gabus dengan kuah hitam dari kluwek khas Betawi.",
  bahan: ["500 gram ikan gabus", "4 buah kluwek", "Bawang merah", "Bawang putih", "Kemiri", "Kunyit", "Serai", "Daun salam", "Garam"],
  cara: ["Bersihkan ikan gabus dan goreng hingga matang.", "Ambil isi kluwek yang baik dan haluskan bersama bumbu.", "Tumis bumbu bersama serai dan daun salam.", "Tambahkan air lalu masukkan ikan.", "Masak hingga kuah meresap."]
},
{
  id: 331,
  nama: "Pecak Ikan Betawi",
  daerah: "Betawi",
  gambar: "images/pecak-ikan-betawi.jpg",
  deskripsi: "Ikan goreng atau bakar yang disiram kuah sambal segar bercita rasa asam pedas.",
  bahan: ["500 gram ikan nila", "Cabai merah", "Cabai rawit", "Bawang merah", "Jahe", "Kencur", "Jeruk limau", "Garam"],
  cara: ["Bersihkan ikan dan lumuri dengan garam.", "Goreng atau bakar ikan hingga matang.", "Haluskan cabai, bawang, jahe, dan kencur.", "Tambahkan air hangat dan perasan jeruk limau.", "Siram sambal ke atas ikan."]
},
{
  id: 332,
  nama: "Soto Tangkar",
  daerah: "Betawi",
  gambar: "images/soto-tangkar.jpg",
  deskripsi: "Soto khas Betawi dengan kuah santan dan potongan iga sapi.",
  bahan: ["500 gram iga sapi", "Santan", "Bawang merah", "Bawang putih", "Kemiri", "Kunyit", "Jahe", "Serai", "Daun salam", "Garam"],
  cara: ["Rebus iga hingga empuk dan sisihkan kaldunya.", "Haluskan bawang, kemiri, kunyit, dan jahe.", "Tumis bumbu bersama serai dan daun salam.", "Masukkan kaldu, iga, dan santan.", "Masak hingga kuah matang dan sajikan."]
},
{
  id: 333,
  nama: "Nasi Ulam Betawi",
  daerah: "Betawi",
  gambar: "images/nasi-ulam-betawi.jpg",
  deskripsi: "Nasi berbumbu yang dicampur serundeng kelapa dan aneka rempah.",
  bahan: ["500 gram nasi putih", "Kelapa parut", "Serai", "Daun jeruk", "Bawang merah", "Ketumbar", "Kacang tanah", "Daun kemangi", "Garam"],
  cara: ["Sangrai kelapa parut bersama bumbu hingga harum.", "Haluskan sebagian kacang tanah.", "Campurkan kelapa berbumbu dengan nasi hangat.", "Tambahkan kacang dan daun kemangi.", "Aduk rata lalu sajikan dengan lauk pelengkap."]
},
  {
    id: 335,
    nama: "Kelo Mrico",
    daerah: "Rembang, Jawa Tengah",
    gambar: "images/kelo-mrico.jpg",
    deskripsi: "Masakan ikan berkuah pedas dengan cita rasa rempah khas pesisir Rembang.",
    bahan: ["500 gram ikan laut", "5 siung bawang merah", "3 siung bawang putih", "5 buah cabai rawit", "2 buah tomat", "1 ruas kunyit", "1 batang serai", "Garam secukupnya"],
    cara: ["Bersihkan ikan dan potong sesuai selera.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu hingga harum.", "Tambahkan air dan serai.", "Masukkan ikan dan tomat.", "Masak hingga ikan matang dan kuah berbumbu."]
  },
{
  id: 337,
  nama: "Soto Tauto",
  daerah: "Jawa Tengah",
  gambar: "images/soto-tauto.jpg",
  deskripsi: "Soto khas Pekalongan yang menggunakan tauco sebagai bumbu kuahnya.",
  bahan: ["500 gram daging sapi", "Tauco", "Bawang merah", "Bawang putih", "Cabai", "Jahe", "Serai", "Daun salam", "Garam"],
  cara: ["Rebus daging hingga empuk lalu potong-potong.", "Haluskan bawang, cabai, dan jahe.", "Tumis bumbu bersama tauco hingga harum.", "Masukkan kaldu dan daging lalu masak hingga bumbu meresap.", "Sajikan bersama nasi atau lontong."]
},
  {
    id: 338,
    nama: "Sayur Bobor",
    daerah: "Jawa Tengah",
    gambar: "images/sayur-bobor.jpg",
    deskripsi: "Sayuran berkuah santan encer dengan bumbu sederhana yang gurih.",
    bahan: ["1 ikat bayam", "1 buah labu siam", "500 ml santan encer", "3 siung bawang merah", "2 siung bawang putih", "1 ruas kencur", "Ketumbar secukupnya", "Garam secukupnya"],
    cara: ["Potong labu siam dan cuci bayam.", "Haluskan bawang merah, bawang putih, kencur, dan ketumbar.", "Rebus santan bersama bumbu.", "Masukkan labu siam hingga empuk.", "Tambahkan bayam.", "Masak sebentar hingga matang dan sajikan."]
  },
{
  id: 339,
  nama: "Sega Lengko",
  daerah: "Jawa Barat",
  gambar: "images/sega-lengko.jpg",
  deskripsi: "Nasi sederhana khas Cirebon dengan tahu, tempe, tauge, mentimun, dan saus kacang.",
  bahan: ["Nasi putih", "Tahu", "Tempe", "Tauge", "Mentimun", "Kacang tanah", "Bawang putih", "Cabai", "Kecap manis"],
  cara: ["Goreng tahu dan tempe hingga matang.", "Rebus tauge sebentar dan potong mentimun.", "Haluskan kacang, bawang putih, dan cabai.", "Tambahkan air dan kecap ke saus kacang.", "Sajikan nasi dengan tahu, tempe, sayuran, dan saus."]
},
{
  id: 340,
  nama: "Nasi Tutug Oncom Bakar",
  daerah: "Jawa Barat",
  gambar: "images/nasi-tutug-oncom-bakar.jpg",
  deskripsi: "Nasi yang dicampur oncom berbumbu lalu dibungkus daun pisang dan dibakar.",
  bahan: ["500 gram nasi putih", "200 gram oncom", "Bawang merah", "Bawang putih", "Kencur", "Cabai", "Daun kemangi", "Garam", "Daun pisang"],
  cara: ["Bakar atau sangrai oncom hingga harum.", "Haluskan bawang, kencur, cabai, dan garam.", "Tumis bumbu lalu masukkan oncom yang dihancurkan.", "Campurkan oncom dengan nasi dan kemangi.", "Bungkus dengan daun pisang lalu bakar sebentar."]
},
{
  id: 341,
  nama: "Sate Klatak Kambing Muda",
  daerah: "DI Yogyakarta",
  gambar: "images/sate-klatak-kambing-muda.jpg",
  deskripsi: "Sate kambing khas Yogyakarta yang dibumbui sederhana dan dipanggang hingga matang.",
  bahan: ["500 gram daging kambing", "Bawang putih", "Garam", "Merica", "Jeruk nipis", "Tusuk sate"],
  cara: ["Potong daging kambing menjadi ukuran sate.", "Lumuri dengan bawang putih, garam, dan merica.", "Diamkan sebentar agar bumbu meresap.", "Tusuk daging dan panggang hingga matang sempurna.", "Sajikan dengan kuah atau pelengkap sesuai selera."]
},
{
  id: 342,
  nama: "Kue Adrem",
  daerah: "DI Yogyakarta",
  gambar: "images/kue-adrem.jpg",
  deskripsi: "Kue tradisional Bantul berbahan tepung beras dan gula merah.",
  bahan: ["250 gram tepung beras", "150 gram gula merah", "Air kelapa", "Garam", "Minyak goreng"],
  cara: ["Larutkan gula merah dengan air kelapa.", "Campurkan tepung beras dan garam.", "Tuangkan larutan gula sambil diaduk.", "Diamkan adonan hingga siap digoreng.", "Goreng sedikit demi sedikit hingga matang."]
},
{
  id: 343,
  nama: "Kue Clorot",
  daerah: "Jawa Tengah",
  gambar: "images/kue-clorot.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dan gula merah yang dibungkus janur berbentuk kerucut.",
  bahan: ["200 gram tepung beras", "50 gram tepung tapioka", "150 gram gula merah", "500 ml santan", "Garam", "Janur"],
  cara: ["Larutkan gula merah dengan santan.", "Campurkan tepung beras, tapioka, dan garam.", "Tuangkan santan gula sedikit demi sedikit.", "Masukkan adonan ke selongsong janur.", "Kukus hingga matang dan padat."]
},
{
  id: 344,
  nama: "Kue Jongkong",
  daerah: "Bangka Belitung",
  gambar: "images/kue-jongkong.jpg",
  deskripsi: "Kue tradisional berlapis dengan rasa pandan, santan, dan gula merah.",
  bahan: ["Tepung beras", "Tepung tapioka", "Santan", "Daun pandan", "Gula merah", "Garam"],
  cara: ["Buat larutan pandan dari daun pandan dan air.", "Campurkan tepung dengan santan dan bagi adonan menjadi beberapa bagian.", "Beri warna dan aroma pandan pada salah satu bagian.", "Susun adonan berlapis dalam wadah bersama gula merah.", "Kukus hingga seluruh lapisan matang."]
},
{
  id: 345,
  nama: "Lempah Darat",
  daerah: "Bangka Belitung",
  gambar: "images/lempah-darat.jpg",
  deskripsi: "Sayur berkuah khas Bangka yang memanfaatkan sayuran lokal dan bumbu asam pedas.",
  bahan: ["Kacang panjang", "Labu kuning", "Terong", "Nanas", "Cabai", "Bawang merah", "Terasi", "Asam jawa", "Garam"],
  cara: ["Potong semua sayuran dan nanas.", "Haluskan cabai, bawang, dan terasi.", "Didihkan air bersama bumbu dan asam jawa.", "Masukkan sayuran secara bertahap.", "Masak hingga matang dan sajikan."]
},
{
  id: 346,
  nama: "Lempah Darat Nanas",
  daerah: "Bangka Belitung",
  gambar: "images/lempah-darat-nanas.jpg",
  deskripsi: "Variasi sayur lempah dengan rasa segar dari potongan nanas.",
  bahan: ["Nanas", "Labu kuning", "Kacang panjang", "Cabai merah", "Bawang merah", "Terasi", "Asam jawa", "Garam"],
  cara: ["Kupas nanas dan potong kecil.", "Siapkan labu dan kacang panjang.", "Haluskan cabai, bawang, dan terasi.", "Rebus bumbu bersama air dan asam jawa.", "Masukkan sayuran dan nanas lalu masak hingga matang."]
},
{
  id: 347,
  nama: "Otak-Otak Bangka",
  daerah: "Bangka Belitung",
  gambar: "images/otak-otak-bangka.jpg",
  deskripsi: "Olahan ikan berbumbu yang dibungkus daun pisang dan dipanggang.",
  bahan: ["300 gram ikan tenggiri", "100 gram tepung tapioka", "Santan", "Bawang putih", "Merica", "Garam", "Daun pisang"],
  cara: ["Haluskan ikan tenggiri hingga lembut.", "Campurkan ikan dengan tepung, santan, dan bumbu.", "Aduk hingga menjadi adonan yang dapat dibentuk.", "Bungkus adonan menggunakan daun pisang.", "Panggang hingga matang."]
},
{
  id: 348,
  nama: "Kue Rintak",
  daerah: "Bangka Belitung",
  gambar: "images/kue-rintak.jpg",
  deskripsi: "Kue kering tradisional berbahan sagu yang memiliki tekstur renyah.",
  bahan: ["250 gram tepung sagu", "100 gram gula halus", "1 butir telur", "Santan", "Vanili", "Garam"],
  cara: ["Sangrai tepung sagu hingga ringan lalu dinginkan.", "Kocok telur bersama gula dan vanili.", "Masukkan tepung sagu dan sedikit santan.", "Bentuk adonan sesuai selera.", "Panggang hingga kering dan matang."]
},
{
  id: 349,
  nama: "Kue Bingke Berendam",
  daerah: "Kalimantan Barat",
  gambar: "images/kue-bingke-berendam.jpg",
  deskripsi: "Kue lembut khas Melayu yang disajikan dengan siraman kuah santan manis.",
  bahan: ["250 gram tepung terigu", "3 butir telur", "200 ml santan", "150 gram gula", "Vanili", "Garam", "Santan tambahan untuk kuah"],
  cara: ["Kocok telur dan gula hingga tercampur.", "Masukkan tepung, santan, vanili, dan garam.", "Tuang adonan ke cetakan.", "Panggang hingga kue matang.", "Sajikan bersama kuah santan manis."]
},
{
  id: 350,
  nama: "Pengkang",
  daerah: "Kalimantan Barat",
  gambar: "images/pengkang.jpg",
  deskripsi: "Ketan berisi ebi berbumbu yang dibungkus daun pisang dan dipanggang.",
  bahan: ["500 gram beras ketan", "300 ml santan", "100 gram ebi", "Bawang merah", "Bawang putih", "Merica", "Garam", "Daun pisang"],
  cara: ["Rendam ketan lalu kukus hingga setengah matang.", "Masak santan dengan garam dan campurkan ke ketan.", "Tumis ebi bersama bawang dan merica.", "Isi ketan dengan ebi lalu bungkus daun pisang.", "Panggang hingga daun harum dan ketan matang."]
},
{
  id: 352,
  nama: "Pallu Butung",
  daerah: "Sulawesi Selatan",
  gambar: "images/pallu-butung.jpg",
  deskripsi: "Hidangan pisang kukus yang disajikan dengan saus santan manis.",
  bahan: ["6 buah pisang kepok", "500 ml santan", "100 gram tepung beras", "100 gram gula", "Daun pandan", "Garam"],
  cara: ["Kukus pisang hingga matang.", "Campurkan santan, tepung beras, gula, dan garam.", "Masak sambil diaduk hingga mengental.", "Tambahkan daun pandan.", "Potong pisang dan sajikan dengan saus santan."]
},
{
  id: 354,
  nama: "Konro",
  daerah: "Sulawesi Selatan",
  gambar: "images/konro.jpg",
  deskripsi: "Sup iga sapi khas Makassar dengan kuah gelap berbumbu rempah.",
  bahan: ["1 kg iga sapi", "2 liter air", "Kluwek", "Bawang merah", "Bawang putih", "Ketumbar", "Serai", "Kayu manis"],
  cara: ["Rebus iga hingga empuk.", "Rendam dan ambil isi kluwek.", "Haluskan bawang, ketumbar, dan kluwek.", "Tumis bumbu bersama serai.", "Masukkan ke dalam rebusan iga dan masak hingga meresap."]
},
{
  id: 355,
  nama: "Mie Titi",
  daerah: "Sulawesi Selatan",
  gambar: "images/mie-titi.jpg",
  deskripsi: "Mi kering renyah yang disiram kuah kental berisi ayam, udang, dan sayuran.",
  bahan: ["200 gram mi telur", "150 gram ayam", "100 gram udang", "Sawi", "Wortel", "2 siung bawang putih", "Tepung maizena", "Garam"],
  cara: ["Goreng mi hingga kering dan renyah.", "Tumis bawang putih hingga harum.", "Masukkan ayam dan udang.", "Tambahkan air dan sayuran.", "Kentalkan kuah dengan maizena lalu siramkan ke atas mi."]
},
{
  id: 358,
  nama: "Kue Sikaporo",
  daerah: "Sulawesi Selatan",
  gambar: "images/kue-sikaporo.jpg",
  deskripsi: "Kue tradisional Bugis berbahan telur dan santan dengan tampilan berlapis.",
  bahan: ["8 butir telur", "250 ml santan", "150 gram gula", "100 gram tepung beras", "Pewarna makanan hijau", "Garam"],
  cara: ["Campurkan telur, santan, gula, dan tepung.", "Bagi adonan menjadi dua bagian.", "Beri salah satu bagian pewarna hijau.", "Tuang adonan secara bergantian ke loyang.", "Kukus setiap lapisan hingga matang."]
},
{
  id: 359,
  nama: "Kue Baruasa",
  daerah: "Sulawesi Selatan",
  gambar: "images/kue-baruasa.jpg",
  deskripsi: "Kue kering tradisional Bugis berbahan kelapa dan tepung beras.",
  bahan: ["250 gram tepung beras", "150 gram kelapa sangrai", "150 gram gula", "2 butir telur", "Vanili", "Garam"],
  cara: ["Sangrai tepung beras hingga ringan.", "Campurkan kelapa sangrai dan gula.", "Masukkan telur dan vanili.", "Bentuk adonan menjadi bulatan kecil.", "Panggang hingga matang."]
},
{
  id: 360,
  nama: "Kue Dange",
  daerah: "Sulawesi Selatan",
  gambar: "images/kue-dange.jpg",
  deskripsi: "Kue tradisional berbahan sagu dan kelapa yang dipanggang hingga harum.",
  bahan: ["300 gram tepung sagu", "200 gram kelapa parut", "100 gram gula merah", "Garam", "Air secukupnya"],
  cara: ["Campurkan tepung sagu dan kelapa.", "Tambahkan sedikit garam dan air.", "Masukkan gula merah sesuai selera.", "Cetak adonan pada cetakan kue.", "Panggang hingga matang."]
},
{
  id: 361,
  nama: "Toge Goreng",
  daerah: "Bogor, Jawa Barat",
  gambar: "images/toge-goreng.jpg",
  deskripsi: "Hidangan tauge dan mi dengan siraman saus tauco khas Bogor.",
  bahan: ["250 gram tauge", "200 gram mi kuning", "100 gram oncom", "2 sendok makan tauco", "Bawang merah", "Cabai", "Kecap manis"],
  cara: ["Rebus tauge hingga sedikit layu.", "Rebus mi hingga matang.", "Tumis bawang, cabai, oncom, dan tauco.", "Tambahkan sedikit air dan kecap.", "Sajikan saus bersama mi dan tauge."]
},
{
  id: 362,
  nama: "Mie Kocok Bandung",
  daerah: "Bandung, Jawa Barat",
  gambar: "images/mie-kocok-bandung.jpg",
  deskripsi: "Mi kuning dengan kuah kaldu sapi, kikil, tauge, dan pelengkap segar.",
  bahan: ["250 gram mi kuning", "200 gram kikil sapi", "150 gram tauge", "1 liter kaldu sapi", "Bawang putih", "Daun bawang", "Seledri"],
  cara: ["Rebus kikil hingga empuk.", "Panaskan kaldu sapi.", "Rebus mi dan tauge secara terpisah.", "Masukkan mi, tauge, dan kikil ke mangkuk.", "Siram kaldu panas dan tambahkan daun bawang."]
},
{
  id: 365,
  nama: "Geco Cianjur",
  daerah: "Cianjur, Jawa Barat",
  gambar: "images/geco-cianjur.jpg",
  deskripsi: "Hidangan tauge dan ketupat dengan saus tauco khas Cianjur.",
  bahan: ["250 gram tauge", "2 buah ketupat", "100 gram mi aci", "2 sendok makan tauco", "Gula merah", "Cabai", "Cuka"],
  cara: ["Rebus tauge hingga matang.", "Rebus mi aci hingga kenyal.", "Tumis tauco bersama cabai dan gula merah.", "Tambahkan air dan sedikit cuka.", "Sajikan bersama ketupat, tauge, dan mi aci."]
},
{
  id: 366,
  nama: "Empal Asem",
  daerah: "Cirebon, Jawa Barat",
  gambar: "images/empal-asem.jpg",
  deskripsi: "Olahan daging sapi berkuah bening dengan rasa segar dan sedikit asam.",
  bahan: ["500 gram daging sapi", "1 liter air kaldu", "Belimbing wuluh", "Bawang merah", "Bawang putih", "Tomat", "Daun salam", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Iris bawang dan tomat.", "Masukkan bumbu ke dalam kaldu.", "Tambahkan belimbing wuluh dan daging.", "Masak hingga rasa asam dan gurih menyatu."]
},
{
  id: 367,
  nama: "Soto Kuning",
  daerah: "Bogor, Jawa Barat",
  gambar: "images/soto-kuning.jpg",
  deskripsi: "Soto berkuah kuning santan dengan potongan daging dan jeroan sapi.",
  bahan: ["500 gram daging sapi", "500 ml santan", "1 liter air", "Kunyit", "Jahe", "Bawang merah", "Bawang putih", "Serai"],
  cara: ["Rebus daging hingga empuk.", "Haluskan kunyit, jahe, dan bawang.", "Tumis bumbu bersama serai.", "Masukkan bumbu dan santan ke dalam kaldu.", "Masak dengan api kecil hingga matang."]
},
{
  id: 368,
  nama: "Asinan Bogor",
  daerah: "Bogor, Jawa Barat",
  gambar: "images/asinan-bogor.jpg",
  deskripsi: "Campuran buah dan sayuran segar dengan kuah asam, manis, dan pedas.",
  bahan: ["Kol", "Tauge", "Mentimun", "Nanas", "Kedondong", "Cabai merah", "Gula", "Cuka"],
  cara: ["Cuci dan potong seluruh buah serta sayuran.", "Haluskan cabai merah.", "Rebus cabai bersama gula, garam, dan air.", "Dinginkan kuah lalu tambahkan cuka.", "Siramkan kuah ke buah dan sayuran."]
},
{
  id: 369,
  nama: "Kupat Tahu Singaparna",
  daerah: "Tasikmalaya, Jawa Barat",
  gambar: "images/kupat-tahu-singaparna.jpg",
  deskripsi: "Ketupat dan tahu goreng dengan siraman bumbu kacang gurih.",
  bahan: ["2 buah ketupat", "3 buah tahu putih", "100 gram tauge", "150 gram kacang tanah", "Bawang putih", "Cabai", "Kecap manis"],
  cara: ["Goreng tahu hingga kecokelatan.", "Rebus tauge sebentar.", "Haluskan kacang tanah bersama bawang dan cabai.", "Tambahkan air dan kecap pada bumbu.", "Sajikan ketupat, tahu, dan tauge dengan saus kacang."]
},
 {
    id: 370,
    nama: "Sambal Tumpang",
    daerah: "Kediri, Jawa Timur",
    gambar: "images/sambal-tumpang.jpg",
    deskripsi: "Sambal khas Jawa Timur berbahan tempe semangit yang dimasak bersama santan dan rempah.",
    bahan: ["200 gram tempe semangit", "200 ml santan", "3 siung bawang putih", "5 siung bawang merah", "3 buah cabai merah", "2 lembar daun salam", "1 ruas kencur", "Garam dan gula secukupnya"],
    cara: ["Potong tempe menjadi beberapa bagian.", "Rebus tempe bersama bawang dan cabai.", "Haluskan tempe dan bumbu.", "Masukkan kembali ke panci.", "Tuangkan santan dan tambahkan daun salam.", "Masak sambil diaduk hingga mengental."]
  },
{
  id: 371,
  nama: "Kue Rangi",
  daerah: "Betawi, Jakarta",
  gambar: "images/kue-rangi.jpg",
  deskripsi: "Kue tradisional Betawi dari tepung sagu dan kelapa dengan saus gula merah.",
  bahan: ["250 gram tepung sagu", "150 gram kelapa parut", "100 gram gula merah", "2 sendok makan tepung tapioka", "Garam"],
  cara: ["Campurkan tepung sagu, kelapa, dan garam.", "Tambahkan sedikit air hingga berbutir.", "Panggang adonan pada cetakan.", "Masak gula merah bersama air dan tapioka hingga mengental.", "Sajikan kue dengan saus gula merah."]
},
{
  id: 372,
  nama: "Kue Pancong",
  daerah: "Betawi, Jakarta",
  gambar: "images/kue-pancong.jpg",
  deskripsi: "Kue kelapa tradisional berbahan tepung beras dan santan.",
  bahan: ["250 gram tepung beras", "200 gram kelapa parut", "500 ml santan", "1 sendok teh garam", "Gula pasir"],
  cara: ["Campurkan tepung beras dan kelapa parut.", "Tuangkan santan sedikit demi sedikit.", "Tambahkan garam dan aduk rata.", "Tuang adonan ke cetakan pancong.", "Panggang hingga bagian bawah kecokelatan."]
},
{
  id: 373,
  nama: "Kue Ape",
  daerah: "Betawi, Jakarta",
  gambar: "images/kue-ape.jpg",
  deskripsi: "Kue tradisional berbentuk bulat dengan bagian tengah lembut dan pinggiran renyah.",
  bahan: ["200 gram tepung terigu", "50 gram tepung beras", "100 gram gula", "250 ml santan", "1 butir telur", "Pasta pandan", "Ragi"],
  cara: ["Campurkan tepung terigu dan tepung beras.", "Tambahkan gula, telur, ragi, dan santan.", "Masukkan pasta pandan lalu diamkan adonan.", "Tuang adonan ke wajan kecil.", "Masak hingga pinggiran renyah dan bagian tengah matang."]
},
  {
    id: 374,
    nama: "Kue Putu Mayang",
    daerah: "Betawi, Jakarta",
    gambar: "images/kue-putu-mayang.jpg",
    deskripsi: "Kue tradisional berbentuk mi berwarna-warni yang disajikan dengan saus gula merah.",
    bahan: ["200 gram tepung beras", "50 gram tepung tapioka", "300 ml santan", "Garam secukupnya", "Pewarna makanan secukupnya", "150 gram gula merah", "100 ml air", "Daun pandan"],
    cara: ["Campurkan tepung beras, tepung tapioka, dan garam.", "Panaskan santan lalu tuangkan sedikit demi sedikit ke tepung.", "Aduk hingga menjadi adonan.", "Bagi adonan dan beri pewarna.", "Cetak adonan berbentuk mi lalu kukus hingga matang.", "Rebus gula merah, air, dan pandan untuk sausnya."]
  },
{
  id: 376,
  nama: "Gabus Keju",
  daerah: "Betawi, Jakarta",
  gambar: "images/gabus-keju.jpg",
  deskripsi: "Camilan renyah berbahan tepung tapioka, telur, dan keju.",
  bahan: ["250 gram tepung tapioka", "100 gram keju parut", "2 butir telur", "2 sendok makan margarin", "Garam"],
  cara: ["Campurkan telur, keju, margarin, dan garam.", "Masukkan tepung tapioka sedikit demi sedikit.", "Uleni hingga adonan dapat dibentuk.", "Bentuk adonan memanjang kecil.", "Goreng dengan minyak hingga matang dan renyah."]
},
  {
    id: 377,
    nama: "Ikan Cakalang Pampis",
    daerah: "Sulawesi Utara",
    gambar: "images/ikan-cakalang-pampis.jpg",
    deskripsi: "Olahan ikan cakalang suwir dengan cabai dan rempah khas Manado.",
    bahan: ["300 gram ikan cakalang", "5 siung bawang merah", "3 siung bawang putih", "5 buah cabai merah", "2 batang serai", "4 lembar daun jeruk", "Daun kemangi", "Garam secukupnya"],
    cara: ["Kukus atau rebus ikan hingga matang.", "Suwir daging ikan dan sisihkan.", "Haluskan bawang merah, bawang putih, dan cabai.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan ikan suwir dan aduk rata.", "Tambahkan kemangi dan masak hingga bumbu meresap."]
  },
{
  id: 378,
  nama: "Olos Tegal",
  daerah: "Tegal, Jawa Tengah",
  gambar: "images/olos-tegal.jpg",
  deskripsi: "Camilan berbentuk bulat dari tepung tapioka dengan isian sayuran pedas.",
  bahan: ["200 gram tepung tapioka", "100 gram tepung terigu", "Kol", "Daun bawang", "Cabai rawit", "Bawang putih", "Garam"],
  cara: ["Campurkan tepung tapioka dan terigu.", "Tumis kol, daun bawang, bawang putih, dan cabai.", "Bentuk adonan tepung menjadi bulatan.", "Isi dengan tumisan sayur.", "Goreng hingga matang."]
},
{
  id: 379,
  nama: "Mangut Beong",
  daerah: "Magelang, Jawa Tengah",
  gambar: "images/mangut-beong.jpg",
  deskripsi: "Olahan ikan beong dengan kuah santan pedas khas Magelang.",
  bahan: ["500 gram ikan beong", "500 ml santan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Lengkuas", "Daun salam"],
  cara: ["Bersihkan ikan dan goreng sebentar.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama lengkuas dan daun salam.", "Tuangkan santan dan masukkan ikan.", "Masak hingga bumbu meresap."]
},
{
  id: 381,
  nama: "Sego Godog",
  daerah: "Magelang, Jawa Tengah",
  gambar: "images/sego-godog.jpg",
  deskripsi: "Nasi berkuah hangat dengan telur, sayuran, dan bumbu sederhana.",
  bahan: ["2 piring nasi", "2 butir telur", "Kol", "Daun bawang", "Bawang putih", "Merica", "Kaldu ayam", "Garam"],
  cara: ["Tumis bawang putih hingga harum.", "Masukkan telur dan orak-arik.", "Tambahkan kaldu ayam.", "Masukkan nasi dan sayuran.", "Masak hingga kuah mendidih lalu sajikan."]
},
{
  id: 382,
  nama: "Jenang Jaket",
  daerah: "Banyumas, Jawa Tengah",
  gambar: "images/jenang-jaket.jpg",
  deskripsi: "Jenang tradisional berbahan tepung ketan, santan, dan gula merah.",
  bahan: ["500 gram tepung ketan", "500 ml santan", "300 gram gula merah", "100 gram gula pasir", "Daun pandan", "Garam"],
  cara: ["Larutkan gula merah dengan sedikit air.", "Masak santan bersama pandan dan garam.", "Masukkan tepung ketan sedikit demi sedikit.", "Tambahkan larutan gula dan aduk terus.", "Masak hingga jenang kental dan matang."]
},
  {
    id: 383,
    nama: "Ayam Iloni",
    daerah: "Gorontalo",
    gambar: "images/ayam-iloni.jpg",
    deskripsi: "Masakan ayam khas Gorontalo dengan bumbu rempah dan santan yang gurih.",
    bahan: ["500 gram ayam", "200 ml santan", "2 batang serai", "3 lembar daun jeruk", "1 ruas jahe", "1 ruas kunyit", "Bawang merah", "Bawang putih", "Cabai merah", "Garam secukupnya"],
    cara: ["Bersihkan ayam dan potong sesuai selera.", "Haluskan bawang merah, bawang putih, jahe, kunyit, dan cabai.", "Tumis bumbu hingga harum.", "Masukkan ayam dan serai.", "Tuangkan santan dan daun jeruk.", "Masak hingga ayam empuk dan bumbu meresap."]
  },
{
    id: 385,
    nama: "Kue Perut Ayam",
    daerah: "Jawa Timur",
    gambar: "images/kue-perut-ayam.jpg",
    deskripsi: "Kue tradisional berbentuk melingkar menyerupai gulungan dengan rasa manis.",
    bahan: ["200 gram tepung terigu", "2 butir telur", "100 gram gula pasir", "150 ml santan", "1/2 sendok teh ragi instan", "Sejumput garam", "Minyak goreng"],
    cara: ["Campurkan tepung, gula, telur, ragi, dan garam.", "Tuangkan santan sedikit demi sedikit.", "Aduk hingga adonan lembut.", "Diamkan sekitar 30 menit.", "Masukkan adonan ke plastik segitiga.", "Goreng dengan bentuk melingkar hingga matang."]
  },
{
  id: 386,
  nama: "Sate Kelinci",
  daerah: "Tawangmangu, Jawa Tengah",
  gambar: "images/sate-kelinci.jpg",
  deskripsi: "Sate berbahan daging kelinci dengan bumbu kecap dan rempah.",
  bahan: ["500 gram daging kelinci", "Kecap manis", "Bawang putih", "Ketumbar", "Merica", "Jeruk nipis", "Tusuk sate"],
  cara: ["Potong daging menjadi ukuran kecil.", "Lumuri dengan jeruk nipis dan bumbu.", "Diamkan hingga bumbu meresap.", "Tusuk daging menggunakan tusuk sate.", "Panggang hingga matang sempurna."]
},
{
  id: 387,
  nama: "Nasi Tiwul",
  daerah: "Gunungkidul, Yogyakarta",
  gambar: "images/nasi-tiwul.jpg",
  deskripsi: "Makanan tradisional berbahan gaplek atau singkong kering yang dikukus.",
  bahan: ["500 gram tepung gaplek", "Air secukupnya", "Kelapa parut", "Garam", "Daun pandan"],
  cara: ["Percikkan air sedikit demi sedikit ke tepung gaplek.", "Aduk hingga terbentuk butiran kecil.", "Ayak agar ukuran butiran merata.", "Kukus bersama daun pandan hingga matang.", "Sajikan dengan kelapa parut."]
},
{
  id: 388,
  nama: "Gatot",
  daerah: "Gunungkidul, Yogyakarta",
  gambar: "images/gatot.jpg",
  deskripsi: "Olahan singkong kering yang dikukus dan disajikan dengan kelapa parut.",
  bahan: ["500 gram gaplek", "Air untuk merendam", "Kelapa parut", "Garam", "Gula merah"],
  cara: ["Rendam gaplek hingga lunak.", "Potong gaplek sesuai ukuran.", "Kukus hingga matang.", "Kukus kelapa parut dengan sedikit garam.", "Sajikan gatot bersama kelapa dan gula merah."]
},
{
  id: 389,
  nama: "Growol",
  daerah: "Kulon Progo, Yogyakarta",
  gambar: "images/growol.jpg",
  deskripsi: "Makanan tradisional berbahan singkong yang difermentasi dan dikukus.",
  bahan: ["1 kg singkong", "Air bersih", "Kelapa parut", "Garam"],
  cara: ["Kupas dan cuci singkong.", "Rendam singkong hingga mengalami fermentasi tradisional.", "Tiriskan dan haluskan singkong.", "Kukus hingga matang.", "Sajikan dengan kelapa parut."]
},
  {
    id: 390,
    nama: "Kue Apem Selong",
    daerah: "Lombok, Nusa Tenggara Barat",
    gambar: "images/kue-apem-selong.jpg",
    deskripsi: "Kue tradisional berbahan tepung beras dengan tekstur lembut dan rasa manis.",
    bahan: ["250 gram tepung beras", "100 gram gula pasir", "300 ml santan", "1 sendok teh ragi instan", "1/2 sendok teh garam", "Daun pandan"],
    cara: ["Campurkan tepung beras, gula, ragi, dan garam.", "Tuangkan santan sedikit demi sedikit.", "Aduk hingga adonan halus.", "Diamkan hingga adonan mengembang.", "Panaskan cetakan dan tuangkan adonan.", "Masak hingga matang."]
  },
{
  id: 391,
  nama: "Ayam Kesrut",
  daerah: "Banyuwangi, Jawa Timur",
  gambar: "images/ayam-kesrut.jpg",
  deskripsi: "Masakan ayam berkuah pedas dan asam khas masyarakat Osing Banyuwangi.",
  bahan: ["500 gram ayam", "Belimbing wuluh", "Cabai rawit", "Bawang merah", "Bawang putih", "Tomat", "Daun bawang", "Garam"],
  cara: ["Potong ayam dan cuci bersih.", "Haluskan bawang dan cabai.", "Rebus ayam bersama bumbu.", "Tambahkan belimbing wuluh dan tomat.", "Masak hingga ayam empuk dan kuah terasa segar."]
},
{
  id: 392,
  nama: "Pecel Rawon",
  daerah: "Banyuwangi, Jawa Timur",
  gambar: "images/pecel-rawon.jpg",
  deskripsi: "Perpaduan pecel sayuran dengan kuah rawon khas Banyuwangi.",
  bahan: ["Kangkung", "Tauge", "Kacang panjang", "Bumbu pecel", "Daging sapi", "Kluwek", "Bawang merah", "Bawang putih"],
  cara: ["Rebus daging sapi hingga empuk.", "Haluskan bumbu rawon bersama kluwek.", "Tumis bumbu lalu masukkan ke kaldu.", "Rebus sayuran dan siapkan bumbu pecel.", "Sajikan sayuran dengan bumbu pecel dan kuah rawon."]
},
{
  id: 393,
  nama: "Sego Cawuk",
  daerah: "Banyuwangi, Jawa Timur",
  gambar: "images/sego-cawuk.jpg",
  deskripsi: "Nasi khas Banyuwangi yang disajikan dengan kuah pindang dan parutan kelapa berbumbu.",
  bahan: ["Nasi putih", "Ikan pindang", "Kelapa parut", "Jagung bakar", "Cabai", "Bawang merah", "Garam"],
  cara: ["Siapkan nasi putih hangat.", "Masak kuah pindang dengan bumbu.", "Campurkan kelapa parut dengan bumbu sederhana.", "Siapkan ikan pindang dan jagung bakar.", "Sajikan seluruh pelengkap bersama nasi."]
},
{
  id: 394,
  nama: "Rujak Gobet",
  daerah: "Jawa Timur",
  gambar: "images/rujak-gobet.jpg",
  deskripsi: "Rujak buah khas Jawa Timur dengan bumbu gula merah, cabai, dan asam.",
  bahan: ["Mangga muda", "Bengkuang", "Mentimun", "Nanas", "Kedondong", "Gula merah", "Cabai", "Asam jawa"],
  cara: ["Kupas dan serut buah-buahan.", "Haluskan cabai bersama gula merah.", "Tambahkan asam jawa dan sedikit air.", "Aduk bumbu hingga larut.", "Campurkan buah dengan bumbu dan dinginkan."]
},
{
  id: 395,
  nama: "Lontong Kupang",
  daerah: "Sidoarjo, Jawa Timur",
  gambar: "images/lontong-kupang.jpg",
  deskripsi: "Hidangan lontong dengan kuah kupang kecil dan petis khas pesisir Jawa Timur.",
  bahan: ["500 gram kupang yang sudah dibersihkan", "2 buah lontong", "Petis", "Bawang putih", "Cabai rawit", "Jeruk nipis", "Garam"],
  cara: ["Bersihkan dan masak kupang hingga matang.", "Haluskan bawang putih dan cabai.", "Campurkan bumbu dengan petis dan air.", "Masukkan kupang ke dalam kuah.", "Sajikan bersama potongan lontong dan jeruk nipis."]
},
{
  id: 396,
  nama: "Orem-Orem",
  daerah: "Malang, Jawa Timur",
  gambar: "images/orem-orem.jpg",
  deskripsi: "Masakan tempe dan ayam dengan kuah santan berbumbu yang disajikan bersama ketupat.",
  bahan: ["1 papan tempe", "200 gram ayam", "500 ml santan", "Bawang merah", "Bawang putih", "Kunyit", "Kencur", "Daun salam"],
  cara: ["Potong tempe dan ayam.", "Rebus ayam hingga matang.", "Haluskan bawang, kunyit, dan kencur.", "Tumis bumbu lalu masukkan santan.", "Tambahkan ayam dan tempe, masak hingga meresap."]
},
{
  id: 397,
  nama: "Nasi Buk Madura",
  daerah: "Madura, Jawa Timur",
  gambar: "images/nasi-buk-madura.jpg",
  deskripsi: "Sajian nasi dengan lauk daging, serundeng, dan aneka sayuran berbumbu.",
  bahan: ["Nasi putih", "Daging sapi", "Kelapa parut", "Kacang panjang", "Bumbu merah", "Bawang merah", "Bawang putih", "Garam"],
  cara: ["Masak daging dengan bumbu hingga empuk.", "Sangrai kelapa bersama bumbu hingga menjadi serundeng.", "Rebus sayuran hingga matang.", "Siapkan nasi putih hangat.", "Sajikan nasi bersama daging, serundeng, dan sayuran."]
},
{
  id: 398,
  nama: "Kaldu Kokot",
  daerah: "Madura, Jawa Timur",
  gambar: "images/kaldu-kokot.jpg",
  deskripsi: "Sup kacang hijau dengan kikil atau kaki sapi yang dimasak bersama rempah.",
  bahan: ["500 gram kaki sapi", "200 gram kacang hijau", "Bawang merah", "Bawang putih", "Jahe", "Merica", "Daun bawang", "Garam"],
  cara: ["Rebus kaki sapi hingga empuk.", "Rendam dan rebus kacang hijau hingga lunak.", "Tumis bawang dan jahe.", "Masukkan tumisan ke dalam kaldu kaki sapi.", "Tambahkan kacang hijau dan masak hingga menyatu."]
},
{
    id: 399,
    nama: "Kue Lompong",
    daerah: "Purworejo, Jawa Tengah",
    gambar: "images/kue-lompong.jpg",
    deskripsi: "Kue tradisional berwarna gelap dengan isian kacang manis.",
    bahan: ["250 gram tepung ketan", "150 ml air hangat", "100 gram gula merah", "100 gram kacang tanah sangrai", "Daun pisang", "Sedikit garam"],
    cara: ["Campurkan tepung ketan, garam, dan air hangat.", "Uleni hingga adonan bisa dibentuk.", "Campurkan kacang tanah dengan gula merah.", "Ambil adonan dan beri isian kacang.", "Bungkus menggunakan daun pisang.", "Kukus hingga matang."]
  },
  {
    id: 400,
    nama: "Asam Pedas Patin",
    daerah: "Riau",
    gambar: "images/asam-pedas-patin.jpg",
    deskripsi: "Masakan ikan patin dengan kuah asam dan pedas yang menyegarkan.",
    bahan: ["500 gram ikan patin", "2 buah tomat", "2 batang serai", "3 lembar daun jeruk", "2 ruas asam kandis", "5 siung bawang merah", "3 siung bawang putih", "Cabai merah", "Kunyit", "Garam secukupnya"],
    cara: ["Bersihkan ikan patin dan potong-potong.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu hingga harum.", "Tambahkan air, serai, daun jeruk, dan asam kandis.", "Masukkan ikan patin dan tomat.", "Masak hingga ikan matang."]
  },
{
  id: 401,
  nama: "Ayam Tuturuga",
  daerah: "Sulawesi Utara",
  gambar: "images/ayam-tuturuga.jpg",
  deskripsi: "Masakan ayam dengan kuah santan, kemangi, dan rempah khas Manado.",
  bahan: ["500 gram ayam", "500 ml santan", "Daun kemangi", "Bawang merah", "Bawang putih", "Cabai", "Serai", "Kunyit"],
  cara: ["Potong dan bersihkan ayam.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan ayam dan santan.", "Masak hingga ayam empuk lalu tambahkan kemangi."]
},
{
  id: 402,
  nama: "Tinoransak",
  daerah: "Minahasa, Sulawesi Utara",
  gambar: "images/tinoransak.jpg",
  deskripsi: "Masakan daging berbumbu rempah khas Minahasa yang dimasak hingga meresap.",
  bahan: ["500 gram daging sapi", "Cabai merah", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Daun jeruk", "Daun kunyit"],
  cara: ["Potong daging kecil-kecil.", "Haluskan cabai, bawang, dan jahe.", "Tumis bumbu bersama serai dan daun jeruk.", "Masukkan daging dan sedikit air.", "Masak hingga empuk dan bumbu meresap."]
},
{
  id: 403,
  nama: "Rica Rodo",
  daerah: "Minahasa, Sulawesi Utara",
  gambar: "images/rica-rodo.jpg",
  deskripsi: "Masakan sayuran khas Minahasa dengan terong, jagung, dan bumbu rica pedas.",
  bahan: ["2 buah terong", "1 buah jagung", "Kacang panjang", "Cabai merah", "Bawang merah", "Bawang putih", "Tomat", "Garam"],
  cara: ["Potong seluruh sayuran.", "Haluskan cabai dan bawang.", "Tumis bumbu hingga harum.", "Masukkan jagung dan sedikit air.", "Tambahkan terong serta kacang panjang, masak hingga matang."]
},
{
  id: 404,
  nama: "Kuah Pliek U",
  daerah: "Aceh",
  gambar: "images/kuah-pliek-u.jpg",
  deskripsi: "Sayur bersantan khas Aceh dengan pliek u atau ampas kelapa fermentasi.",
  bahan: ["Pliek u", "Daun melinjo", "Nangka muda", "Kacang panjang", "Terong", "Santan", "Cabai", "Bawang merah"],
  cara: ["Siapkan dan potong sayuran.", "Larutkan pliek u dengan air.", "Haluskan cabai dan bawang.", "Masak bumbu bersama santan dan pliek u.", "Masukkan sayuran dan masak hingga empuk."]
},
{
  id: 405,
  nama: "Ayam Tangkap",
  daerah: "Aceh",
  gambar: "images/ayam-tangkap.jpg",
  deskripsi: "Ayam goreng khas Aceh yang disajikan dengan daun kari dan daun pandan goreng.",
  bahan: ["1 ekor ayam", "Daun kari", "Daun pandan", "Bawang putih", "Ketumbar", "Kunyit", "Jeruk nipis", "Garam"],
  cara: ["Potong ayam dan lumuri jeruk nipis.", "Haluskan bawang, ketumbar, kunyit, dan garam.", "Lumuri ayam dengan bumbu.", "Goreng ayam hingga matang.", "Goreng daun kari dan pandan lalu sajikan bersama ayam."]
},
{
  id: 406,
  nama: "Sie Reuboh",
  daerah: "Aceh Besar, Aceh",
  gambar: "images/sie-reuboh.jpg",
  deskripsi: "Olahan daging sapi khas Aceh yang dimasak dengan cuka dan rempah.",
  bahan: ["500 gram daging sapi", "Cuka aren", "Bawang merah", "Bawang putih", "Cabai merah", "Jahe", "Kunyit", "Garam"],
  cara: ["Potong daging sesuai selera.", "Haluskan bawang, cabai, jahe, dan kunyit.", "Campurkan daging dengan bumbu dan cuka.", "Masak dengan sedikit air hingga mendidih.", "Lanjutkan memasak sampai daging empuk."]
},
{
  id: 407,
  nama: "Kuah Beulangong",
  daerah: "Aceh",
  gambar: "images/kuah-beulangong.jpg",
  deskripsi: "Gulai daging khas Aceh yang dimasak bersama nangka muda dan rempah.",
  bahan: ["500 gram daging kambing atau sapi", "Nangka muda", "Kelapa gongseng", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Serai"],
  cara: ["Potong daging dan nangka muda.", "Haluskan bumbu dan siapkan kelapa gongseng.", "Tumis bumbu bersama serai.", "Masukkan daging, nangka, dan air.", "Masak hingga semua bahan empuk."]
},
{
  id: 408,
  nama: "Timphan",
  daerah: "Aceh",
  gambar: "images/timphan.jpg",
  deskripsi: "Kue tradisional Aceh dari tepung ketan dengan isian kelapa atau srikaya.",
  bahan: ["250 gram tepung ketan", "Pisang raja", "Kelapa parut", "Gula merah", "Santan", "Daun pisang", "Garam"],
  cara: ["Haluskan pisang dan campur dengan tepung ketan.", "Masak kelapa dan gula merah untuk isian.", "Ambil adonan lalu beri isian.", "Bungkus dengan daun pisang.", "Kukus hingga matang."]
},
{
  id: 409,
  nama: "Bhoi",
  daerah: "Aceh",
  gambar: "images/bhoi.jpg",
  deskripsi: "Kue tradisional Aceh berbahan telur dan tepung dengan bentuk cetakan beragam.",
  bahan: ["4 butir telur", "200 gram gula", "200 gram tepung terigu", "Vanili", "Sedikit garam"],
  cara: ["Kocok telur dan gula hingga mengembang.", "Masukkan tepung dan vanili.", "Aduk hingga rata.", "Tuang ke cetakan kue.", "Panggang hingga matang."]
},
{
  id: 410,
  nama: "Keumamah",
  daerah: "Aceh",
  gambar: "images/keumamah.jpg",
  deskripsi: "Ikan kayu khas Aceh yang dimasak dengan cabai dan rempah.",
  bahan: ["300 gram ikan kayu", "Cabai hijau", "Bawang merah", "Bawang putih", "Asam sunti", "Daun kari", "Minyak", "Garam"],
  cara: ["Suwir atau iris ikan kayu.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama daun kari.", "Masukkan ikan dan asam sunti.", "Masak hingga bumbu meresap."]
},
{
  id: 411,
  nama: "Gulai Cancang",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-cancang.jpg",
  deskripsi: "Gulai daging cincang khas Minangkabau dengan kuah santan berbumbu.",
  bahan: ["500 gram daging sapi cincang", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Jahe", "Lengkuas", "Daun kunyit"],
  cara: ["Haluskan cabai, bawang, dan jahe.", "Tumis bumbu bersama lengkuas.", "Masukkan daging cincang.", "Tuangkan santan dan tambahkan daun kunyit.", "Masak sambil diaduk hingga matang."]
},
{
  id: 412,
  nama: "Samba Lado Tanak",
  daerah: "Sumatera Barat",
  gambar: "images/samba-lado-tanak.jpg",
  deskripsi: "Sambal khas Minangkabau berbahan cabai, santan, dan ikan teri atau petai.",
  bahan: ["Cabai hijau", "Cabai merah", "Santan", "Ikan teri", "Petai", "Bawang merah", "Daun jeruk", "Garam"],
  cara: ["Haluskan cabai dan bawang.", "Masukkan santan ke dalam panci.", "Tambahkan bumbu, daun jeruk, dan garam.", "Masukkan teri serta petai.", "Masak dengan api kecil hingga mengental."]
},
{
  id: 414,
  nama: "Gulai Cubadak",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-cubadak.jpg",
  deskripsi: "Gulai nangka muda khas Minang dengan santan dan rempah.",
  bahan: ["500 gram nangka muda", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Daun kunyit"],
  cara: ["Rebus nangka hingga setengah empuk.", "Haluskan cabai, bawang, dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan santan dan nangka.", "Masak hingga nangka empuk dan kuah mengental."]
},
{
  id: 415,
  nama: "Gulai Terjun",
  daerah: "Jambi",
  gambar: "images/gulai-terjun.jpg",
  deskripsi: "Gulai khas Jambi dengan potongan daging dan kuah rempah yang kaya rasa.",
  bahan: ["500 gram daging sapi", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Jahe", "Kunyit", "Serai"],
  cara: ["Potong daging sesuai selera.", "Haluskan bawang, cabai, jahe, dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan daging dan santan.", "Masak hingga daging empuk."]
},
{
  id: 416,
  nama: "Nasi Gemuk",
  daerah: "Jambi",
  gambar: "images/nasi-gemuk.jpg",
  deskripsi: "Nasi gurih khas Jambi yang dimasak dengan santan dan daun pandan.",
  bahan: ["500 gram beras", "400 ml santan", "Daun pandan", "Serai", "Daun salam", "Garam", "Telur rebus", "Kacang goreng"],
  cara: ["Cuci beras hingga bersih.", "Masak santan bersama serai, pandan, dan garam.", "Masukkan beras dan aduk hingga santan terserap.", "Kukus nasi hingga matang.", "Sajikan dengan telur dan kacang goreng."]
},
{
  id: 417,
  nama: "Gulai Ikan Semah",
  daerah: "Jambi",
  gambar: "images/gulai-ikan-semah.jpg",
  deskripsi: "Gulai ikan sungai khas Jambi dengan kuah santan dan rempah.",
  bahan: ["500 gram ikan semah", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Asam kandis"],
  cara: ["Bersihkan ikan dan potong sesuai kebutuhan.", "Haluskan cabai, bawang, dan kunyit.", "Tumis bumbu bersama serai.", "Tambahkan santan dan asam kandis.", "Masukkan ikan dan masak hingga matang."]
},
{
  id: 418,
  nama: "Lemea",
  daerah: "Rejang Lebong, Bengkulu",
  gambar: "images/lemea.jpg",
  deskripsi: "Olahan rebung fermentasi khas Rejang yang dimasak bersama ikan dan cabai.",
  bahan: ["200 gram lemea", "200 gram ikan", "Cabai merah", "Bawang merah", "Bawang putih", "Serai", "Garam"],
  cara: ["Siapkan lemea dan ikan yang telah dibersihkan.", "Haluskan cabai dan bawang.", "Tumis bumbu bersama serai.", "Masukkan lemea dan ikan.", "Masak hingga ikan matang dan bumbu meresap."]
},
{
  id: 419,
  nama: "Pendap Daun Talas",
  daerah: "Bengkulu",
  gambar: "images/pendap-daun-talas.jpg",
  deskripsi: "Olahan ikan berbumbu kelapa yang dibungkus daun talas dan dimasak hingga matang.",
  bahan: ["500 gram ikan", "Daun talas", "Kelapa parut", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Asam kandis"],
  cara: ["Haluskan bumbu dan campur dengan kelapa.", "Lumuri ikan dengan campuran bumbu.", "Bungkus ikan menggunakan daun talas.", "Ikat bungkusan dengan tali daun.", "Masak dalam air berbumbu hingga matang."]
},
{
  id: 420,
  nama: "Gulai Umbut",
  daerah: "Kalimantan Barat",
  gambar: "images/gulai-umbut.jpg",
  deskripsi: "Masakan tradisional berbahan umbut kelapa atau palma dengan kuah santan.",
  bahan: ["300 gram umbut", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Lengkuas", "Garam"],
  cara: ["Iris umbut dan cuci bersih.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai dan lengkuas.", "Tuangkan santan dan masukkan umbut.", "Masak hingga umbut empuk."]
},
{
  id: 425,
  nama: "Wadi Ikan",
  daerah: "Kalimantan Tengah",
  gambar: "images/wadi-ikan.jpg",
  deskripsi: "Ikan fermentasi tradisional masyarakat Dayak yang diolah kembali dengan bumbu.",
  bahan: ["300 gram wadi ikan", "Bawang merah", "Bawang putih", "Cabai", "Tomat", "Serai", "Minyak"],
  cara: ["Siapkan wadi ikan yang telah difermentasi dengan benar.", "Tumis bawang dan cabai.", "Masukkan tomat dan serai.", "Tambahkan wadi ikan dan sedikit air.", "Masak hingga matang dan sajikan."]
},
{
  id: 426,
  nama: "Juhu Umbut Rotan",
  daerah: "Kalimantan Tengah",
  gambar: "images/juhu-umbut-rotan.jpg",
  deskripsi: "Sayur khas Dayak berbahan umbut rotan muda dengan kuah berbumbu.",
  bahan: ["300 gram umbut rotan yang telah diolah", "Ikan patin", "Bawang merah", "Bawang putih", "Cabai", "Serai", "Asam jawa", "Garam"],
  cara: ["Siapkan umbut rotan yang sudah dibersihkan dan diolah.", "Haluskan bawang dan cabai.", "Tumis bumbu bersama serai.", "Tambahkan air, ikan, dan umbut rotan.", "Masak hingga ikan matang."]
},
{
  id: 428,
  nama: "Amplang",
  daerah: "Kalimantan Timur",
  gambar: "images/amplang.jpg",
  deskripsi: "Kerupuk ikan khas Kalimantan yang renyah dan gurih.",
  bahan: ["300 gram daging ikan tenggiri", "250 gram tepung tapioka", "2 butir telur", "Bawang putih", "Garam", "Gula", "Minyak goreng"],
  cara: ["Haluskan daging ikan.", "Campurkan ikan dengan telur dan bumbu.", "Masukkan tepung tapioka sedikit demi sedikit.", "Bentuk adonan kecil memanjang.", "Goreng hingga mengembang dan renyah."]
},
{
  id: 429,
  nama: "Gangan Asam Kutai",
  daerah: "Kutai, Kalimantan Timur",
  gambar: "images/gangan-asam-kutai.jpg",
  deskripsi: "Sup ikan khas Kutai dengan kuah segar, asam, dan sayuran.",
  bahan: ["500 gram ikan patin", "Kacang panjang", "Labu kuning", "Tomat", "Asam jawa", "Bawang merah", "Kunyit", "Serai"],
  cara: ["Bersihkan ikan dan potong sayuran.", "Haluskan bawang dan kunyit.", "Rebus bumbu bersama serai dan asam jawa.", "Masukkan ikan dan sayuran.", "Masak hingga matang."]
},
{
  id: 432,
  nama: "Bingka Kentang",
  daerah: "Kalimantan Selatan",
  gambar: "images/bingka-kentang.jpg",
  deskripsi: "Kue lembut khas Banjar berbahan kentang, telur, santan, dan gula.",
  bahan: ["300 gram kentang", "3 butir telur", "200 ml santan", "150 gram gula", "100 gram tepung terigu", "Vanili", "Garam"],
  cara: ["Rebus kentang hingga empuk lalu haluskan.", "Kocok telur dan gula.", "Campurkan kentang, santan, dan tepung.", "Tambahkan vanili dan garam.", "Panggang dalam cetakan hingga matang."]
},
{
  id: 433,
  nama: "Sate Tanjung",
  daerah: "Lombok Utara, Nusa Tenggara Barat",
  gambar: "images/sate-tanjung.jpg",
  deskripsi: "Sate ikan laut khas Lombok dengan bumbu santan dan rempah.",
  bahan: ["500 gram ikan laut", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Tusuk sate"],
  cara: ["Potong ikan menjadi ukuran sate.", "Haluskan cabai, bawang, kunyit, dan jahe.", "Campurkan bumbu dengan santan.", "Lumuri ikan dan tusuk.", "Panggang hingga matang."]
},
{
  id: 434,
  nama: "Bebalung",
  daerah: "Lombok, Nusa Tenggara Barat",
  gambar: "images/bebalung.jpg",
  deskripsi: "Sup tulang sapi khas Lombok dengan kuah bening berbumbu.",
  bahan: ["1 kg tulang sapi", "Bawang merah", "Bawang putih", "Cabai rawit", "Jahe", "Lengkuas", "Serai", "Garam"],
  cara: ["Rebus tulang hingga kaldunya keluar.", "Haluskan bawang, jahe, dan cabai.", "Tumis bumbu bersama serai dan lengkuas.", "Masukkan tumisan ke dalam kaldu.", "Masak hingga tulang empuk."]
},
{
  id: 435,
  nama: "Sayur Lebui",
  daerah: "Lombok, Nusa Tenggara Barat",
  gambar: "images/sayur-lebui.jpg",
  deskripsi: "Sayur kacang lebui khas Lombok yang dimasak dengan bumbu sederhana.",
  bahan: ["200 gram kacang lebui", "Daun singkong", "Bawang merah", "Bawang putih", "Cabai", "Tomat", "Asam jawa", "Garam"],
  cara: ["Rendam dan rebus kacang lebui hingga empuk.", "Haluskan bawang dan cabai.", "Tumis bumbu hingga harum.", "Masukkan kacang, daun singkong, dan air.", "Tambahkan asam jawa lalu masak hingga matang."]
},
{
  id: 436,
  nama: "Poteng Jaje Tujak",
  daerah: "Lombok, Nusa Tenggara Barat",
  gambar: "images/poteng-jaje-tujak.jpg",
  deskripsi: "Hidangan tradisional Lombok berupa tape ketan dan kue ketan tumbuk.",
  bahan: ["500 gram beras ketan", "Ragi tape", "Kelapa parut", "Gula", "Daun pisang", "Garam"],
  cara: ["Kukus beras ketan hingga matang.", "Dinginkan lalu taburi ragi sesuai petunjuk.", "Simpan tertutup hingga menjadi tape.", "Kukus ketan lain dan tumbuk bersama kelapa serta garam.", "Sajikan poteng bersama jaje tujak."]
},
{
  id: 437,
  nama: "Singang",
  daerah: "Sumbawa, Nusa Tenggara Barat",
  gambar: "images/singang.jpg",
  deskripsi: "Masakan ikan berkuah asam pedas khas Sumbawa.",
  bahan: ["500 gram ikan laut", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Asam jawa", "Tomat", "Daun kemangi"],
  cara: ["Bersihkan ikan.", "Haluskan cabai, bawang, dan kunyit.", "Rebus bumbu bersama air dan asam jawa.", "Masukkan ikan dan tomat.", "Masak hingga ikan matang lalu tambahkan kemangi."]
},
{
  id: 438,
  nama: "Sepat",
  daerah: "Sumbawa, Nusa Tenggara Barat",
  gambar: "images/sepat.jpg",
  deskripsi: "Hidangan ikan bakar dengan kuah segar berbumbu asam khas Sumbawa.",
  bahan: ["500 gram ikan", "Terong", "Tomat", "Mangga muda", "Cabai", "Bawang merah", "Jeruk nipis", "Garam"],
  cara: ["Bakar ikan hingga matang.", "Bakar atau siapkan terong dan tomat.", "Haluskan cabai dan bawang.", "Campurkan bumbu dengan air, mangga muda, dan jeruk nipis.", "Sajikan ikan bersama kuah sepat."]
},
{
  id: 441,
  nama: "Jagung Titi",
  daerah: "Flores Timur, Nusa Tenggara Timur",
  gambar: "images/jagung-titi.jpg",
  deskripsi: "Camilan jagung pipil yang dipipihkan dan dipanggang hingga renyah.",
  bahan: ["500 gram jagung pipil kering", "Garam secukupnya"],
  cara: ["Pilih jagung pipil yang bersih.", "Sangrai jagung hingga cukup lunak.", "Pipihkan jagung selagi hangat menggunakan alat tradisional.", "Beri sedikit garam.", "Keringkan atau panggang kembali hingga renyah."]
},
{
  id: 442,
  nama: "Se'i Babi",
  daerah: "Kupang, Nusa Tenggara Timur",
  gambar: "images/se'i-babi.jpg",
  deskripsi: "Daging babi asap khas Kupang yang diiris tipis dan disajikan dengan sambal.",
  bahan: ["500 gram daging babi", "Garam", "Ketumbar", "Bawang putih", "Merica", "Daun pepaya"],
  cara: ["Bersihkan dan potong daging.", "Lumuri dengan bumbu dan diamkan hingga meresap.", "Masak menggunakan metode pengasapan yang aman dan sesuai.", "Pastikan daging matang sempurna.", "Iris tipis dan sajikan."]
},
{
  id: 443,
  nama: "Ikan Kuah Kuning",
  daerah: "Maluku",
  gambar: "images/ikan-kuah-kuning.jpg",
  deskripsi: "Ikan berkuah kunyit khas Maluku dengan rasa segar dan aroma rempah.",
  bahan: ["500 gram ikan", "Kunyit", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Jeruk nipis", "Kemangi"],
  cara: ["Bersihkan ikan dan lumuri jeruk nipis.", "Haluskan kunyit, bawang, dan jahe.", "Tumis bumbu bersama serai.", "Tambahkan air dan masukkan ikan.", "Masak hingga ikan matang lalu tambahkan kemangi."]
},
{
  id: 444,
  nama: "Sinoli",
  daerah: "Maluku",
  gambar: "images/sinoli.jpg",
  deskripsi: "Makanan tradisional berbahan sagu dan kelapa yang dimasak hingga gurih.",
  bahan: ["300 gram tepung sagu", "200 gram kelapa parut", "Garam", "Air secukupnya"],
  cara: ["Campurkan tepung sagu dan kelapa.", "Tambahkan sedikit garam.", "Percikkan air sambil diaduk.", "Masak pada wajan dengan api kecil.", "Aduk hingga matang dan bertekstur kering."]
},
{
  id: 449,
  nama: "Keladi Tumbuk",
  daerah: "Papua",
  gambar: "images/keladi-tumbuk.jpg",
  deskripsi: "Olahan keladi yang direbus dan ditumbuk hingga lembut.",
  bahan: ["500 gram keladi", "Kelapa parut", "Garam", "Air secukupnya"],
  cara: ["Kupas dan cuci keladi.", "Rebus hingga benar-benar empuk.", "Tiriskan lalu tumbuk hingga lembut.", "Campurkan kelapa parut dan garam.", "Sajikan selagi hangat."]
},
{
  id: 451,
  nama: "Tipat Cantok",
  daerah: "Bali",
  gambar: "images/tipat-cantok.jpg",
  deskripsi: "Ketupat khas Bali dengan sayuran rebus dan bumbu kacang.",
  bahan: ["2 buah tipat", "Kangkung", "Tauge", "Kacang panjang", "Kacang tanah", "Bawang putih", "Cabai", "Jeruk limau"],
  cara: ["Rebus sayuran hingga matang.", "Haluskan kacang tanah, bawang, dan cabai.", "Tambahkan air dan jeruk limau.", "Potong tipat menjadi bagian kecil.", "Sajikan bersama sayuran dan bumbu."]
},
{
  id: 452,
  nama: "Nasi Sela",
  daerah: "Karangasem, Bali",
  gambar: "images/nasi-sela.jpg",
  deskripsi: "Nasi campur potongan ubi khas Bali yang disajikan dengan lauk tradisional.",
  bahan: ["400 gram beras", "200 gram ubi jalar", "Air secukupnya", "Garam", "Daun salam"],
  cara: ["Cuci beras dan potong ubi.", "Campurkan beras dan ubi.", "Tambahkan air, garam, dan daun salam.", "Masak hingga nasi matang.", "Aduk perlahan dan sajikan bersama lauk."]
},
{
  id: 453,
  nama: "Sate Plecing",
  daerah: "Bali",
  gambar: "images/sate-plecing.jpg",
  deskripsi: "Sate dengan siraman sambal plecing bercita rasa pedas dan segar.",
  bahan: ["500 gram daging ayam", "Cabai merah", "Cabai rawit", "Tomat", "Terasi", "Jeruk limau", "Garam", "Tusuk sate"],
  cara: ["Potong daging ayam.", "Tusuk daging dan panggang hingga matang.", "Haluskan cabai, tomat, dan terasi.", "Tambahkan garam serta jeruk limau.", "Sajikan sate dengan sambal plecing."]
},
{
  id: 454,
  nama: "Lawar Putih",
  daerah: "Bali",
  gambar: "images/lawar-putih.jpg",
  deskripsi: "Lawar khas Bali dengan campuran sayuran, kelapa, dan bumbu base genep.",
  bahan: ["Kacang panjang", "Kelapa parut", "Bawang merah", "Bawang putih", "Kencur", "Lengkuas", "Daun jeruk", "Garam"],
  cara: ["Rebus kacang panjang hingga matang.", "Iris kacang panjang kecil-kecil.", "Haluskan bumbu dan campurkan dengan kelapa.", "Masukkan kacang panjang.", "Aduk rata dan sajikan."]
},
{
  id: 455,
  nama: "Jaje Laklak",
  daerah: "Bali",
  gambar: "images/jaje-laklak.jpg",
  deskripsi: "Kue tradisional Bali berbentuk bulat kecil dengan taburan kelapa dan gula merah.",
  bahan: ["200 gram tepung beras", "300 ml santan", "Pasta pandan", "Kelapa parut", "Gula merah", "Garam"],
  cara: ["Campurkan tepung beras dan santan.", "Tambahkan pasta pandan dan sedikit garam.", "Tuang adonan ke cetakan kecil.", "Masak hingga berlubang dan matang.", "Sajikan dengan kelapa dan gula merah cair."]
},
{
  id: 456,
  nama: "Jukut Ares Ayam",
  daerah: "Bali",
  gambar: "images/jukut-ares-ayam.jpg",
  deskripsi: "Sayur batang pisang muda khas Bali yang dimasak bersama ayam dan bumbu.",
  bahan: ["300 gram batang pisang muda", "300 gram ayam", "Bawang merah", "Bawang putih", "Kunyit", "Kencur", "Serai", "Daun jeruk"],
  cara: ["Iris batang pisang muda dan remas dengan garam.", "Rebus ayam hingga setengah matang.", "Haluskan bumbu dan tumis.", "Masukkan ayam serta batang pisang.", "Tambahkan air dan masak hingga empuk."]
},
{
  id: 457,
  nama: "Jaje Bendu",
  daerah: "Bali",
  gambar: "images/jaje-bendu.jpg",
  deskripsi: "Kue tradisional Bali dari tepung ketan dengan isian kelapa manis.",
  bahan: ["250 gram tepung ketan", "Kelapa parut", "Gula merah", "Garam", "Air hangat", "Daun pisang"],
  cara: ["Masak kelapa bersama gula merah.", "Campurkan tepung ketan dengan air hangat.", "Pipihkan adonan dan isi dengan kelapa.", "Bungkus menggunakan daun pisang.", "Kukus hingga matang."]
},
{
  id: 458,
  nama: "Bubur Mengguh",
  daerah: "Buleleng, Bali",
  gambar: "images/bubur-mengguh.jpg",
  deskripsi: "Bubur gurih khas Bali dengan ayam suwir, santan, dan urap sayuran.",
  bahan: ["200 gram beras", "200 gram ayam", "Santan", "Serai", "Daun salam", "Kacang panjang", "Kelapa parut", "Garam"],
  cara: ["Rebus beras dengan air hingga menjadi bubur.", "Masak ayam dengan bumbu hingga matang lalu suwir.", "Tambahkan santan dan serai ke bubur.", "Siapkan sayuran dan kelapa berbumbu.", "Sajikan bubur dengan ayam dan urap."]
},
{
  id: 459,
  nama: "Sate Lembat",
  daerah: "Bali",
  gambar: "images/sate-lembat.jpg",
  deskripsi: "Sate khas Bali berbahan daging cincang yang dicampur kelapa dan rempah.",
  bahan: ["300 gram daging ayam cincang", "Kelapa parut", "Bawang merah", "Bawang putih", "Kencur", "Serai", "Daun jeruk", "Tusuk sate"],
  cara: ["Campurkan daging dengan kelapa parut.", "Haluskan bawang dan rempah.", "Aduk bumbu ke dalam adonan daging.", "Bentuk adonan pada tusuk sate.", "Panggang hingga matang."]
},
{
  id: 460,
  nama: "Nasi Tepeng",
  daerah: "Gianyar, Bali",
  gambar: "images/nasi-tepeng.jpg",
  deskripsi: "Nasi lembek khas Gianyar yang disajikan dengan sayuran dan lauk berbumbu.",
  bahan: ["300 gram beras", "Kacang panjang", "Nangka muda", "Terong", "Santan", "Serai", "Daun salam", "Garam"],
  cara: ["Cuci beras hingga bersih.", "Masak beras dengan santan dan air lebih banyak.", "Tambahkan serai dan daun salam.", "Masukkan sayuran hingga lunak.", "Sajikan nasi tepeng dengan lauk pelengkap."]
},
{
  id: 461,
  nama: "Jaje Uli",
  daerah: "Bali",
  gambar: "images/jaje-uli.jpg",
  deskripsi: "Kue ketan tradisional Bali yang ditumbuk hingga padat dan kenyal.",
  bahan: ["500 gram beras ketan", "Kelapa parut", "Garam", "Daun pisang"],
  cara: ["Rendam beras ketan.", "Kukus hingga setengah matang.", "Campurkan kelapa dan garam.", "Kukus kembali hingga matang lalu tumbuk.", "Bentuk dan bungkus dengan daun pisang."]
},
{
  id: 462,
  nama: "Sambal Bongkot",
  daerah: "Bali",
  gambar: "images/sambal-bongkot.jpg",
  deskripsi: "Sambal khas Bali berbahan kecombrang dengan rasa segar dan harum.",
  bahan: ["1 batang bongkot atau kecombrang", "Cabai rawit", "Bawang merah", "Terasi", "Jeruk limau", "Minyak kelapa", "Garam"],
  cara: ["Iris tipis bongkot dan bawang merah.", "Iris cabai rawit.", "Campurkan semua bahan.", "Tambahkan terasi, garam, dan jeruk limau.", "Siram sedikit minyak kelapa hangat lalu aduk."]
},
{
  id: 463,
  nama: "Sambal Matah Kecombrang",
  daerah: "Bali",
  gambar: "images/sambal-matah-kecombrang.jpg",
  deskripsi: "Variasi sambal matah dengan tambahan bunga kecombrang yang harum.",
  bahan: ["Kecombrang", "Bawang merah", "Cabai rawit", "Serai", "Daun jeruk", "Jeruk limau", "Minyak kelapa", "Garam"],
  cara: ["Iris semua bahan tipis-tipis.", "Campurkan dalam mangkuk.", "Tambahkan garam dan perasan jeruk.", "Panaskan minyak kelapa.", "Siram minyak dan aduk hingga rata."]
},
{
  id: 465,
  nama: "Soto Mie Bogor",
  daerah: "Bogor, Jawa Barat",
  gambar: "images/soto-mie-bogor.jpg",
  deskripsi: "Soto berkuah kaldu sapi dengan mi, risol, kol, dan tomat.",
  bahan: ["250 gram mi kuning", "250 gram daging sapi", "Kol", "Tomat", "Risol", "Bawang merah", "Bawang putih", "Serai"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu halus bersama serai.", "Masukkan tumisan ke dalam kaldu.", "Siapkan mi, kol, tomat, dan risol dalam mangkuk.", "Siram dengan kuah panas dan tambahkan daging."]
},
{
  id: 466,
  nama: "Tahu Gimbal",
  daerah: "Semarang, Jawa Tengah",
  gambar: "images/tahu-gimbal.jpg",
  deskripsi: "Hidangan tahu goreng, lontong, kol, dan bakwan udang dengan saus kacang petis.",
  bahan: ["Tahu putih", "Lontong", "Kol", "Udang", "Tepung terigu", "Kacang tanah", "Petis", "Bawang putih"],
  cara: ["Goreng tahu hingga matang.", "Buat bakwan udang dan goreng.", "Haluskan kacang, bawang putih, dan petis.", "Tambahkan air hingga menjadi saus.", "Sajikan bersama lontong, kol, tahu, dan gimbal."]
},
{
  id: 467,
  nama: "Lumpia Semarang",
  daerah: "Semarang, Jawa Tengah",
  gambar: "images/lumpia-semarang.jpg",
  deskripsi: "Lumpia berisi rebung, telur, dan udang atau ayam dengan kulit renyah.",
  bahan: ["Kulit lumpia", "300 gram rebung", "2 butir telur", "100 gram udang", "Bawang putih", "Daun bawang", "Kecap manis", "Garam"],
  cara: ["Rebus rebung dan iris tipis.", "Tumis bawang putih dan udang.", "Masukkan rebung, telur, dan bumbu.", "Isi kulit lumpia dan lipat rapat.", "Goreng hingga keemasan."]
},
{
  id: 468,
  nama: "Wingko Babat",
  daerah: "Babat, Jawa Timur",
  gambar: "images/wingko-babat.jpg",
  deskripsi: "Kue kelapa panggang berbahan tepung ketan khas pesisir Jawa.",
  bahan: ["250 gram tepung ketan", "250 gram kelapa parut", "150 gram gula", "150 ml santan", "Margarin", "Garam"],
  cara: ["Campurkan tepung ketan dan kelapa.", "Tambahkan gula, santan, dan garam.", "Aduk hingga menjadi adonan.", "Tuang ke loyang yang dioles margarin.", "Panggang hingga kedua sisi matang."]
},
{
  id: 470,
  nama: "Nasi Gandul Pati",
  daerah: "Pati, Jawa Tengah",
  gambar: "images/nasi-gandul-pati.jpg",
  deskripsi: "Nasi dengan irisan daging sapi dan kuah santan rempah khas Pati.",
  bahan: ["500 gram daging sapi", "Santan", "Bawang merah", "Bawang putih", "Ketumbar", "Kluwek", "Daun salam", "Serai"],
  cara: ["Rebus daging hingga empuk.", "Haluskan bawang, ketumbar, dan kluwek.", "Tumis bumbu bersama serai.", "Masukkan santan dan daging.", "Masak hingga kuah meresap lalu sajikan dengan nasi."]
},
{
  id: 471,
  nama: "Getuk Trio",
  daerah: "Magelang, Jawa Tengah",
  gambar: "images/getuk-trio.jpg",
  deskripsi: "Getuk singkong berlapis tiga warna yang menjadi oleh-oleh khas Magelang.",
  bahan: ["500 gram singkong", "150 gram gula", "Kelapa parut", "Vanili", "Garam", "Pewarna makanan"],
  cara: ["Kukus singkong hingga empuk.", "Haluskan singkong bersama gula.", "Bagi adonan menjadi tiga bagian.", "Beri warna berbeda pada setiap bagian.", "Susun berlapis, potong, dan sajikan dengan kelapa."]
},
{
  id: 472,
  nama: "Enting-Enting Gepuk",
  daerah: "Salatiga, Jawa Tengah",
  gambar: "images/enting-enting-gepuk.jpg",
  deskripsi: "Penganan kacang tanah dan gula yang dipadatkan menjadi camilan manis.",
  bahan: ["300 gram kacang tanah", "200 gram gula pasir", "100 gram gula merah", "Air", "Sedikit garam"],
  cara: ["Sangrai kacang tanah dan buang kulitnya.", "Haluskan atau tumbuk kasar kacang.", "Masak gula dengan sedikit air hingga mengental.", "Campurkan kacang dan garam.", "Padatkan adonan lalu potong setelah dingin."]
},
{
  id: 474,
  nama: "Nasi Kucing",
  daerah: "Yogyakarta dan Jawa Tengah",
  gambar: "images/nasi-kucing.jpg",
  deskripsi: "Nasi porsi kecil yang dibungkus daun pisang dengan lauk sederhana.",
  bahan: ["Nasi putih", "Tempe", "Teri", "Sambal", "Daun pisang", "Daun kemangi"],
  cara: ["Siapkan nasi putih hangat.", "Masak sambal teri atau tempe.", "Letakkan nasi dalam porsi kecil di daun pisang.", "Tambahkan lauk dan sambal.", "Bungkus dan sajikan."]
},
{
  id: 477,
  nama: "Lontong Balap Kupang",
  daerah: "Surabaya, Jawa Timur",
  gambar: "images/lontong-balap-kupang.jpg",
  deskripsi: "Variasi lontong dengan tauge, lentho, tahu, dan kuah gurih.",
  bahan: ["Lontong", "Tauge", "Tahu goreng", "Lentho", "Bawang putih", "Daun bawang", "Kecap", "Petis"],
  cara: ["Rebus tauge sebentar.", "Siapkan lentho dan tahu goreng.", "Buat kuah dari bawang putih dan daun bawang.", "Potong lontong dan tata dalam mangkuk.", "Tambahkan tauge, tahu, lentho, kuah, dan petis."]
},
{
  id: 478,
  nama: "Soto Ambengan",
  daerah: "Surabaya, Jawa Timur",
  gambar: "images/soto-ambengan.jpg",
  deskripsi: "Soto ayam berkuah kuning dengan koya gurih khas Surabaya.",
  bahan: ["500 gram ayam", "1 liter kaldu", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Soun", "Kerupuk udang"],
  cara: ["Rebus ayam hingga matang lalu suwir.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai.", "Masukkan bumbu ke kaldu dan didihkan.", "Sajikan dengan soun, ayam suwir, dan koya."]
},
{
  id: 479,
  nama: "Nasi Cawuk",
  daerah: "Banyuwangi, Jawa Timur",
  gambar: "images/nasi-cawuk.jpg",
  deskripsi: "Nasi tradisional Banyuwangi dengan lauk dan kuah khas daerah.",
  bahan: ["Nasi putih", "Ikan pindang", "Kelapa parut", "Jagung", "Cabai", "Bawang merah", "Garam"],
  cara: ["Siapkan nasi putih hangat.", "Masak ikan pindang hingga matang.", "Bumbui kelapa parut dengan cabai dan bawang.", "Siapkan jagung sebagai pelengkap.", "Sajikan nasi bersama seluruh lauk."]
},
{
  id: 482,
  nama: "Kue Ganjel Rel",
  daerah: "Semarang, Jawa Tengah",
  gambar: "images/kue-ganjel-rel.jpg",
  deskripsi: "Roti rempah khas Semarang dengan aroma kayu manis dan tekstur padat.",
  bahan: ["300 gram tepung terigu", "100 gram gula merah", "1 sendok teh kayu manis", "Air", "Wijen", "Ragi", "Garam"],
  cara: ["Larutkan gula merah dengan air.", "Campurkan tepung, ragi, kayu manis, dan garam.", "Masukkan larutan gula dan uleni.", "Diamkan adonan hingga mengembang.", "Bentuk roti, taburi wijen, lalu panggang."]
},
{
  id: 483,
  nama: "Kue Sagon",
  daerah: "Jawa",
  gambar: "images/kue-sagon.jpg",
  deskripsi: "Kue kering tradisional dari kelapa parut dan tepung ketan.",
  bahan: ["250 gram kelapa parut", "150 gram tepung ketan", "100 gram gula", "Garam", "Vanili"],
  cara: ["Sangrai kelapa hingga harum.", "Campurkan tepung ketan dan gula.", "Tambahkan kelapa, garam, dan vanili.", "Cetak adonan sesuai bentuk.", "Panggang hingga kering dan matang."]
},
{
  id: 485,
  nama: "Kue Geplak",
  daerah: "Bantul, Yogyakarta",
  gambar: "images/kue-geplak.jpg",
  deskripsi: "Camilan manis berbahan kelapa parut dan gula dengan warna beragam.",
  bahan: ["300 gram kelapa parut", "200 gram gula", "100 gram tepung beras", "Air", "Pewarna makanan"],
  cara: ["Sangrai kelapa parut.", "Masak gula dengan sedikit air hingga larut.", "Masukkan kelapa dan tepung beras.", "Aduk hingga adonan dapat dibentuk.", "Bentuk bulatan kecil dan dinginkan."]
},
{
  id: 486,
  nama: "Kue Yangko",
  daerah: "Yogyakarta",
  gambar: "images/kue-yangko.jpg",
  deskripsi: "Kue kenyal dari tepung ketan dengan taburan tepung dan isian kacang manis.",
  bahan: ["250 gram tepung ketan", "150 gram gula", "Kacang tanah", "Air", "Vanili", "Tepung maizena sangrai"],
  cara: ["Sangrai dan haluskan kacang bersama gula.", "Campurkan tepung ketan, gula, dan air.", "Kukus adonan hingga matang.", "Pipihkan dan isi dengan kacang.", "Potong kotak lalu baluri tepung sangrai."]
},
{
  id: 487,
  nama: "Kue Satu",
  daerah: "Jawa Barat",
  gambar: "images/kue-satu.jpg",
  deskripsi: "Kue kering tradisional dari kacang hijau yang dihaluskan dan dicetak.",
  bahan: ["250 gram kacang hijau kupas", "150 gram gula halus", "Air matang secukupnya"],
  cara: ["Sangrai kacang hijau hingga matang.", "Haluskan dan ayak kacang.", "Campurkan dengan gula halus.", "Tambahkan sedikit air hingga adonan dapat dicetak.", "Cetak dan keringkan hingga kokoh."]
},
{
  id: 488,
  nama: "Kue Cucur Gula Merah",
  daerah: "Nusantara",
  gambar: "images/kue-cucur-gula-merah.jpg",
  deskripsi: "Kue goreng tradisional dengan bagian tengah berserat dan pinggiran renyah.",
  bahan: ["200 gram tepung beras", "100 gram tepung terigu", "150 gram gula merah", "200 ml air", "Daun pandan", "Garam"],
  cara: ["Rebus gula merah dengan air dan pandan.", "Campurkan tepung beras dan terigu.", "Tuangkan larutan gula sedikit demi sedikit.", "Diamkan adonan.", "Goreng satu sendok adonan hingga matang."]
},
{
  id: 489,
  nama: "Kue Talam Ubi",
  daerah: "Nusantara",
  gambar: "images/kue-talam-ubi.jpg",
  deskripsi: "Kue kukus berlapis dari ubi dan santan dengan tekstur lembut.",
  bahan: ["300 gram ubi jalar", "150 gram tepung tapioka", "100 gram gula", "Santan", "Garam", "Daun pandan"],
  cara: ["Kukus ubi hingga empuk lalu haluskan.", "Campurkan ubi dengan tepung, gula, dan santan.", "Tuang adonan ke cetakan.", "Kukus hingga setengah matang.", "Tambahkan lapisan santan dan kukus kembali."]
},
{
  id: 492,
  nama: "Lempah Kuning Nanas",
  daerah: "Bangka Belitung",
  gambar: "images/lempah-kuning-nanas.jpg",
  deskripsi: "Masakan ikan berkuah kunyit dan nanas dengan rasa asam segar.",
  bahan: ["500 gram ikan", "Nanas", "Kunyit", "Cabai", "Bawang merah", "Terasi", "Asam jawa", "Serai"],
  cara: ["Bersihkan ikan dan potong nanas.", "Haluskan kunyit, cabai, bawang, dan terasi.", "Rebus bumbu bersama serai.", "Masukkan ikan dan nanas.", "Tambahkan asam jawa dan masak hingga matang."]
},
{
  id: 493,
  nama: "Mie Bangka",
  daerah: "Bangka Belitung",
  gambar: "images/mie-bangka.jpg",
  deskripsi: "Mi khas Bangka dengan topping daging cincang dan kuah kaldu.",
  bahan: ["250 gram mi telur", "200 gram daging ayam", "Bawang putih", "Kecap asin", "Merica", "Sawi", "Daun bawang", "Kaldu"],
  cara: ["Rebus mi dan sawi hingga matang.", "Tumis bawang putih dan daging cincang.", "Tambahkan kecap asin dan merica.", "Siapkan mi dalam mangkuk.", "Tambahkan topping dan sajikan dengan kuah kaldu."]
},
{
  id: 495,
  nama: "Kemplang Panggang",
  daerah: "Sumatera Selatan",
  gambar: "images/kemplang-panggang.jpg",
  deskripsi: "Kerupuk ikan tradisional yang dipanggang dan disantap dengan sambal.",
  bahan: ["Kemplang mentah", "Cabai merah", "Bawang putih", "Gula merah", "Garam", "Asam jawa"],
  cara: ["Panggang kemplang hingga mengembang.", "Haluskan cabai dan bawang putih.", "Masak bumbu bersama gula dan asam jawa.", "Aduk hingga menjadi sambal kental.", "Sajikan kemplang bersama sambal."]
},
{
  id: 499,
  nama: "Laksan",
  daerah: "Palembang, Sumatera Selatan",
  gambar: "images/laksan.jpg",
  deskripsi: "Olahan ikan dan sagu berbentuk irisan pempek yang disajikan dengan kuah santan.",
  bahan: ["Adonan pempek lenjer", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Serai", "Garam"],
  cara: ["Rebus adonan pempek hingga matang.", "Dinginkan lalu iris menyerong.", "Haluskan bumbu kuah.", "Tumis bumbu bersama serai lalu tambahkan santan.", "Masukkan irisan pempek dan masak hingga kuah meresap."]
},
{
  id: 500,
  nama: "Mie Celor Palembang",
  daerah: "Palembang, Sumatera Selatan",
  gambar: "images/mie-celor-palembang.jpg",
  deskripsi: "Mi besar khas Palembang dengan kuah santan udang yang kental dan gurih.",
  bahan: ["250 gram mi telur besar", "200 gram udang", "Santan", "Kaldu udang", "Bawang merah", "Bawang putih", "Tepung maizena", "Tauge"],
  cara: ["Rebus udang dan sisihkan kaldunya.", "Haluskan bawang lalu tumis hingga harum.", "Tambahkan kaldu udang dan santan.", "Masukkan udang dan kentalkan dengan maizena.", "Sajikan mi dan tauge dengan kuah panas."]
},
{
  id: 503,
  nama: "Sanga-sanga",
  daerah: "Kalimantan Timur",
  gambar: "images/sanga-sanga.jpg",
  deskripsi: "Olahan ikan berbumbu yang dikenal dalam kuliner masyarakat Kutai.",
  bahan: ["500 gram ikan", "5 siung bawang merah", "3 siung bawang putih", "3 cabai merah", "2 cm kunyit", "Garam", "Minyak"],
  cara: ["Bersihkan dan potong ikan.", "Haluskan bawang, cabai, dan kunyit.", "Tumis bumbu hingga harum.", "Masukkan ikan dan masak sampai matang."]
},
{
  id: 506,
  nama: "Juhu Kujang",
  daerah: "Kalimantan Tengah",
  gambar: "images/juhu-kujang.jpg",
  deskripsi: "Sayur khas Dayak yang menggunakan bahan tumbuhan lokal.",
  bahan: ["300 gram sayuran lokal", "4 siung bawang merah", "2 siung bawang putih", "2 cm kunyit", "1 batang serai", "Garam"],
  cara: ["Bersihkan sayuran dan potong-potong.", "Haluskan bawang dan kunyit.", "Tumis bumbu bersama serai.", "Tambahkan air dan sayuran.", "Masak hingga matang."]
},
{
  id: 508,
  nama: "Kenta",
  daerah: "Kalimantan Tengah",
  gambar: "images/kenta.jpg",
  deskripsi: "Olahan beras ketan muda khas masyarakat Dayak yang disajikan dengan kelapa.",
  bahan: ["250 gram beras ketan muda", "Kelapa parut", "Gula merah", "Garam"],
  cara: ["Siapkan beras ketan muda yang telah diolah.", "Campurkan dengan kelapa parut.", "Tambahkan gula merah dan sedikit garam.", "Aduk rata dan sajikan."]
},
{
  id: 509,
  nama: "Bubur Pedas Melayu Sambas",
  daerah: "Kalimantan Barat",
  gambar: "images/bubur-pedas-melayu-sambas.jpg",
  deskripsi: "Bubur rempah dengan beragam sayuran dan bahan pangan lokal.",
  bahan: ["200 gram beras", "Bayam", "Kacang panjang", "Jagung", "Kelapa sangrai", "Bumbu rempah", "Garam"],
  cara: ["Masak beras dengan air hingga menjadi bubur.", "Masukkan sayuran dan jagung.", "Tambahkan rempah serta kelapa sangrai.", "Masak hingga semua bahan matang."]
},
{
  id: 511,
  nama: "Chai Kue",
  daerah: "Kalimantan Barat",
  gambar: "images/chai-kue.jpg",
  deskripsi: "Kue kukus berkulit lembut dengan isian bengkuang atau kucai.",
  bahan: ["200 gram tepung beras", "50 gram tepung tapioka", "200 ml air panas", "Bengkuang", "Kucai", "Bawang putih", "Garam"],
  cara: ["Campurkan tepung dan air panas hingga menjadi adonan.", "Tumis isian bengkuang atau kucai dengan bawang.", "Pipihkan adonan dan isi.", "Bentuk lalu kukus hingga matang."]
},
{
  id: 512,
  nama: "Kwe Cap",
  daerah: "Kalimantan Barat",
  gambar: "images/kwe-cap.jpg",
  deskripsi: "Hidangan mi beras khas Pontianak dengan kuah gurih.",
  bahan: ["Kwetiau beras", "500 ml kaldu ayam", "Bawang putih", "Daun bawang", "Kecap asin", "Garam", "Merica"],
  cara: ["Siapkan kwetiau beras.", "Tumis bawang putih hingga harum.", "Tuangkan kaldu dan bumbui.", "Masukkan kwetiau sebentar.", "Sajikan dengan daun bawang."]
},
{
  id: 513,
  nama: "Lek Tau Suan",
  daerah: "Kalimantan Barat",
  gambar: "images/lek-tau-suan.jpg",
  deskripsi: "Hidangan penutup kacang hijau kupas dengan kuah manis dan sagu.",
  bahan: ["200 gram kacang hijau kupas", "100 gram gula pasir", "Daun pandan", "Tepung tapioka", "Air", "Jahe"],
  cara: ["Kukus kacang hijau hingga empuk.", "Rebus air bersama gula, pandan, dan jahe.", "Masukkan kacang hijau.", "Tambahkan larutan tapioka.", "Aduk hingga mengental dan sajikan."]
},
{
  id: 514,
  nama: "Bubur Gunting",
  daerah: "Kalimantan Barat",
  gambar: "images/bubur-gunting.jpg",
  deskripsi: "Camilan manis khas Pontianak dengan adonan tepung yang dipotong kecil.",
  bahan: ["150 gram tepung ketan", "50 gram tepung tapioka", "Santan", "Gula merah", "Daun pandan", "Garam"],
  cara: ["Campurkan tepung dengan air hingga menjadi adonan.", "Bentuk memanjang lalu potong kecil.", "Rebus santan bersama gula dan pandan.", "Masukkan potongan adonan dan masak hingga matang."]
},
{
  id: 515,
  nama: "Bingke Berendam",
  daerah: "Kalimantan Barat",
  gambar: "images/bingke-berendam.jpg",
  deskripsi: "Kue lembut khas Pontianak yang disajikan dengan kuah manis.",
  bahan: ["200 gram tepung terigu", "3 butir telur", "200 ml santan", "100 gram gula", "Vanili", "Garam"],
  cara: ["Campurkan telur, gula, dan santan.", "Masukkan tepung dan vanili.", "Tuang ke cetakan.", "Panggang hingga matang.", "Sajikan dengan kuah santan manis."]
},
{
  id: 516,
  nama: "Sotong Pangkong",
  daerah: "Kalimantan Barat",
  gambar: "images/sotong-pangkong.jpg",
  deskripsi: "Cumi kering panggang yang disajikan dengan sambal khas Pontianak.",
  bahan: ["300 gram cumi kering", "Cabai merah", "Cabai rawit", "Bawang putih", "Kacang tanah", "Gula merah", "Jeruk limau"],
  cara: ["Bersihkan dan siapkan cumi kering.", "Panggang hingga harum.", "Buat sambal dari cabai, bawang, kacang, dan gula.", "Sajikan cumi bersama sambal."]
},
{
  id: 517,
  nama: "Bubur Pedas Sarawak",
  daerah: "Kalimantan Barat",
  gambar: "images/bubur-pedas-serawak.jpg",
  deskripsi: "Bubur berempah dengan sayuran yang dikenal dalam kuliner Melayu Borneo.",
  bahan: ["200 gram beras", "Kacang panjang", "Wortel", "Jagung", "Daun kesum", "Rempah bubuk", "Garam"],
  cara: ["Sangrai beras lalu masak dengan air.", "Masukkan sayuran dan rempah.", "Tambahkan daun kesum.", "Masak hingga menjadi bubur."]
},
{
  id: 518,
  nama: "Sambal Raja",
  daerah: "Kalimantan Timur",
  gambar: "images/sambal-raja.jpg",
  deskripsi: "Sambal khas Kutai dengan sayuran dan jeruk limau.",
  bahan: ["Kacang panjang", "Terong", "Bawang merah", "Cabai merah", "Jeruk limau", "Gula", "Garam"],
  cara: ["Potong kacang panjang dan terong.", "Goreng atau tumis sayuran sebentar.", "Tumis cabai dan bawang.", "Campurkan sayuran dengan sambal.", "Tambahkan jeruk limau."]
},
{
  id: 521,
  nama: "Tumis Kapah",
  daerah: "Kalimantan Utara",
  gambar: "images/tumis-kapah.jpg",
  deskripsi: "Kerang kapah yang dimasak dengan bumbu sederhana.",
  bahan: ["500 gram kerang kapah", "Bawang putih", "Bawang merah", "Cabai", "Jahe", "Garam", "Jeruk nipis"],
  cara: ["Bersihkan kerang hingga bersih.", "Tumis bawang, cabai, dan jahe.", "Masukkan kerang.", "Masak hingga kerang matang dan bumbu meresap."]
},
{
  id: 522,
  nama: "Sate Ikan Pari",
  daerah: "Kalimantan Utara",
  gambar: "images/sate-ikan-pari.jpg",
  deskripsi: "Potongan ikan pari berbumbu yang ditusuk dan dipanggang.",
  bahan: ["500 gram ikan pari", "Bawang putih", "Ketumbar", "Kunyit", "Kecap manis", "Jeruk nipis", "Garam"],
  cara: ["Potong ikan dan lumuri jeruk nipis.", "Haluskan bumbu lalu campurkan dengan ikan.", "Tusuk potongan ikan.", "Panggang hingga matang."]
},
{
  id: 524,
  nama: "Hintalu Karuang",
  daerah: "Kalimantan Selatan",
  gambar: "images/hintalu-karuang.jpg",
  deskripsi: "Bola-bola tepung ketan dalam kuah santan gula merah.",
  bahan: ["200 gram tepung ketan", "Air secukupnya", "Santan", "Gula merah", "Daun pandan", "Garam"],
  cara: ["Uleni tepung ketan dengan air.", "Bentuk menjadi bola kecil.", "Rebus santan bersama gula dan pandan.", "Masukkan bola ketan dan masak hingga mengapung."]
},
{
  id: 525,
  nama: "Amparan Tatak Pisang",
  daerah: "Kalimantan Selatan",
  gambar: "images/amparan-tatak-pisang.jpg",
  deskripsi: "Kue kukus berlapis dengan potongan pisang dan santan.",
  bahan: ["250 gram tepung beras", "5 buah pisang", "500 ml santan", "150 gram gula", "Garam", "Daun pandan"],
  cara: ["Campurkan tepung, santan, gula, dan garam.", "Potong pisang kecil-kecil.", "Tuang sebagian adonan ke loyang dan kukus.", "Tambahkan pisang serta sisa adonan.", "Kukus hingga matang."]
},
{
  id: 529,
  nama: "Laksa Banjar",
  daerah: "Kalimantan Selatan",
  gambar: "images/laksa-banjar.jpg",
  deskripsi: "Hidangan laksa dengan kuah santan berbumbu khas Banjar.",
  bahan: ["Laksa beras", "Santan", "Ikan gabus", "Bawang merah", "Bawang putih", "Serai", "Garam"],
  cara: ["Siapkan laksa beras.", "Masak ikan dan haluskan dagingnya.", "Tumis bumbu hingga harum.", "Masak santan bersama bumbu dan ikan.", "Sajikan kuah dengan laksa."]
},
{
  id: 530,
  nama: "Soto Mutiara Banjar",
  daerah: "Kalimantan Selatan",
  gambar: "images/soto-mutiara-banjar.jpg",
  deskripsi: "Sajian soto berkuah rempah dengan bahan pelengkap khas Banjar.",
  bahan: ["Ayam", "Kaldu ayam", "Bawang merah", "Bawang putih", "Kayu manis", "Cengkeh", "Garam"],
  cara: ["Rebus ayam hingga matang.", "Tumis bumbu dan rempah.", "Masukkan bumbu ke kaldu.", "Suwir ayam dan sajikan bersama kuah."]
},
{
  id: 532,
  nama: "Sarikaya Banjar",
  daerah: "Kalimantan Selatan",
  gambar: "images/sarikaya-banjar.jpg",
  deskripsi: "Hidangan manis dari telur, santan, dan gula dengan tekstur lembut.",
  bahan: ["4 butir telur", "300 ml santan", "150 gram gula merah", "Daun pandan", "Garam"],
  cara: ["Larutkan gula merah bersama santan dan pandan.", "Kocok telur secukupnya.", "Campurkan santan dengan telur.", "Saring dan kukus hingga set."]
},
{
  id: 534,
  nama: "Kue Pare",
  daerah: "Kalimantan Selatan",
  gambar: "images/kue-pare.jpg",
  deskripsi: "Kue tradisional berbentuk menyerupai pare dengan isian manis.",
  bahan: ["250 gram tepung ketan", "Santan", "Gula merah", "Kelapa parut", "Pasta pandan", "Garam"],
  cara: ["Campurkan tepung ketan dengan santan dan pandan.", "Buat isian dari kelapa dan gula merah.", "Isi adonan dan bentuk menyerupai pare.", "Kukus hingga matang."]
},
{
  id: 535,
  nama: "Gangan Keladi",
  daerah: "Kalimantan Selatan",
  gambar: "images/gangan-keladi.jpg",
  deskripsi: "Sayur keladi berkuah dengan bumbu sederhana khas Banjar.",
  bahan: ["300 gram batang keladi yang aman dikonsumsi", "Asam jawa", "Bawang merah", "Bawang putih", "Cabai", "Garam"],
  cara: ["Siapkan keladi dengan pengolahan yang tepat hingga aman dikonsumsi.", "Tumis bumbu halus.", "Tambahkan air dan asam jawa.", "Masukkan keladi dan masak hingga matang."]
},
{
  id: 536,
  nama: "Sambal Acan",
  daerah: "Kalimantan Selatan",
  gambar: "images/sambal-acan.jpg",
  deskripsi: "Sambal khas Banjar dengan terasi dan jeruk limau.",
  bahan: ["Cabai rawit", "Cabai merah", "Terasi matang", "Tomat", "Jeruk limau", "Garam", "Gula"],
  cara: ["Haluskan cabai dan terasi matang.", "Tambahkan tomat.", "Beri garam dan gula.", "Tambahkan perasan jeruk limau."]
},
{
  id: 537,
  nama: "Nasi Itik Gambut",
  daerah: "Kalimantan Selatan",
  gambar: "images/nasi-itik-gambut.jpg",
  deskripsi: "Nasi dengan lauk itik berbumbu merah khas kawasan Gambut.",
  bahan: ["500 gram daging itik", "Beras", "Cabai merah", "Bawang merah", "Bawang putih", "Serai", "Kecap manis"],
  cara: ["Masak nasi hingga matang.", "Tumis bumbu halus bersama serai.", "Masukkan daging itik dan masak hingga empuk.", "Sajikan lauk bersama nasi."]
},
{
  id: 538,
  nama: "Pais Patin",
  daerah: "Kalimantan Selatan",
  gambar: "images/pais-patin.jpg",
  deskripsi: "Ikan patin berbumbu yang dibungkus daun pisang dan dikukus.",
  bahan: ["500 gram ikan patin", "Daun pisang", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Kemangi"],
  cara: ["Bersihkan ikan patin.", "Haluskan bumbu dan lumuri ikan.", "Tambahkan kemangi.", "Bungkus dengan daun pisang.", "Kukus hingga matang."]
},
{
  id: 539,
  nama: "Kue Amparan Tatak Nangka",
  daerah: "Kalimantan Selatan",
  gambar: "images/kue-amparan-tatak-nangka.jpg",
  deskripsi: "Kue kukus santan dengan potongan buah nangka.",
  bahan: ["250 gram tepung beras", "200 gram nangka", "500 ml santan", "100 gram gula", "Garam"],
  cara: ["Campurkan tepung, santan, gula, dan garam.", "Potong nangka kecil-kecil.", "Tuang adonan ke loyang dan tambahkan nangka.", "Kukus hingga matang."]
},
{
  id: 540,
  nama: "Sate Tulang Banjar",
  daerah: "Kalimantan Selatan",
  gambar: "images/sate-tulang-banjar.jpg",
  deskripsi: "Olahan sate berbumbu khas Banjar yang dikenal sebagai hidangan lokal.",
  bahan: ["Bahan sate ayam atau bagian tulang berbalut daging yang layak konsumsi", "Bawang merah", "Bawang putih", "Kecap manis", "Ketumbar", "Garam"],
  cara: ["Siapkan bahan sate yang bersih.", "Haluskan bumbu dan lumuri bahan sate.", "Tusuk sesuai kebutuhan.", "Panggang hingga matang sempurna."]
},
{
  id: 541,
  nama: "Ikan Baung Masak Tempoyak",
  daerah: "Jambi",
  gambar: "images/ikan-baung-masak-tempoyak.jpg",
  deskripsi: "Ikan baung dimasak dengan tempoyak dan rempah pilihan.",
  bahan: ["500 gram ikan baung", "3 sendok makan tempoyak", "Cabai merah", "Kunyit", "Serai", "Daun kunyit", "Garam"],
  cara: ["Bersihkan ikan.", "Haluskan cabai dan kunyit.", "Campurkan bumbu dengan tempoyak dan air.", "Masukkan ikan serta serai.", "Masak hingga matang."]
},
{
  id: 544,
  nama: "Gulai Talang",
  daerah: "Jambi",
  gambar: "images/gulai-talang.jpg",
  deskripsi: "Masakan gulai tradisional dengan kuah rempah khas daerah Jambi.",
  bahan: ["500 gram ikan atau daging", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Garam"],
  cara: ["Siapkan bahan utama.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Tambahkan santan dan bahan utama.", "Masak hingga matang."]
},
{
  id: 545,
  nama: "Gulai Umbut Kelapa",
  daerah: "Jambi",
  gambar: "images/gulai-umbut-kelapa.jpg",
  deskripsi: "Umbut kelapa muda dimasak dengan santan dan rempah.",
  bahan: ["300 gram umbut kelapa", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Garam"],
  cara: ["Potong dan bersihkan umbut.", "Haluskan bumbu.", "Rebus santan bersama bumbu.", "Masukkan umbut dan masak hingga empuk."]
},
{
  id: 546,
  nama: "Kue Padamaran",
  daerah: "Jambi",
  gambar: "images/kue-padamaran.jpg",
  deskripsi: "Kue lembut berwarna hijau dengan gula merah di bagian bawah.",
  bahan: ["200 gram tepung beras", "500 ml santan", "Daun pandan", "Gula merah", "Garam"],
  cara: ["Campurkan tepung beras dengan santan dan sari pandan.", "Letakkan gula merah pada wadah kecil.", "Tuang adonan ke dalam wadah.", "Kukus hingga matang."]
},
{
  id: 547,
  nama: "Kue Muso",
  daerah: "Jambi",
  gambar: "images/kue-muso.jpg",
  deskripsi: "Kue tradisional berwarna hijau dengan bagian tengah berisi adonan manis.",
  bahan: ["Tepung ketan", "Tepung terigu", "Pandan", "Telur", "Santan", "Gula", "Garam"],
  cara: ["Buat kulit dari tepung ketan dan pandan.", "Bentuk kulit dalam cetakan.", "Campurkan bahan isian.", "Tuang isian ke dalam kulit.", "Kukus hingga matang."]
},
{
  id: 553,
  nama: "Pindang Ikan Baung",
  daerah: "Sumatera Selatan",
  gambar: "images/pindang-ikan-baung.jpg",
  deskripsi: "Ikan baung berkuah asam pedas dengan rempah dan daun kemangi.",
  bahan: ["500 gram ikan baung", "Cabai merah", "Bawang merah", "Kunyit", "Serai", "Asam jawa", "Kemangi"],
  cara: ["Bersihkan ikan.", "Tumis bumbu halus bersama serai.", "Tambahkan air dan asam jawa.", "Masukkan ikan dan masak hingga matang.", "Tambahkan kemangi."]
},
{
  id: 554,
  nama: "Mie Kuah Celimpungan",
  daerah: "Sumatera Selatan",
  gambar: "images/mie-kuah-celimpungan.jpg",
  deskripsi: "Mi dengan kuah santan berbumbu dan pelengkap ikan.",
  bahan: ["Mi kuning", "Santan", "Ikan giling", "Bawang merah", "Bawang putih", "Kunyit", "Daun bawang"],
  cara: ["Siapkan mi dan rebus sebentar.", "Buat bola ikan lalu rebus hingga matang.", "Masak santan dengan bumbu.", "Masukkan bola ikan.", "Sajikan bersama mi."]
},
{
  id: 555,
  nama: "Kue Maksuba Kukus",
  daerah: "Sumatera Selatan",
  gambar: "images/kue-maksuba-kukus.jpg",
  deskripsi: "Kue telur berlapis dengan rasa manis dan tekstur lembut.",
  bahan: ["10 butir telur", "200 gram gula", "200 gram mentega", "Susu kental manis", "Vanili"],
  cara: ["Kocok telur dan gula.", "Tambahkan mentega cair dan susu.", "Tuang adonan tipis secara bertahap.", "Masak tiap lapisan hingga matang."]
},
{
  id: 558,
  nama: "Gulo Puan",
  daerah: "Sumatera Selatan",
  gambar: "images/gulo-puan.jpg",
  deskripsi: "Penganan manis tradisional dari susu kerbau dan gula.",
  bahan: ["1 liter susu kerbau atau susu yang sesuai", "200 gram gula", "Daun pandan"],
  cara: ["Campurkan susu dan gula dalam panci.", "Masak dengan api kecil sambil diaduk.", "Tambahkan pandan.", "Aduk hingga mengental dan berwarna kecokelatan."]
},
{
  id: 559,
  nama: "Kue Bolu Kojo Mini",
  daerah: "Sumatera Selatan",
  gambar: "images/bolu-kojo-mini.jpg",
  deskripsi: "Bolu pandan khas Palembang dalam ukuran kecil.",
  bahan: ["250 gram tepung terigu", "3 butir telur", "200 ml santan", "150 gram gula", "Pasta pandan", "Mentega"],
  cara: ["Kocok telur dan gula.", "Tambahkan santan dan pandan.", "Masukkan tepung secara bertahap.", "Tuang ke cetakan kecil dan panggang hingga matang."]
},
{
  id: 561,
  nama: "Kue Jongkong Palembang",
  daerah: "Sumatera Selatan",
  gambar: "images/kue-jongkong-palembang.jpg",
  deskripsi: "Kue lembut berlapis dengan pandan, santan, dan gula merah.",
  bahan: ["Tepung beras", "Santan", "Pandan", "Gula merah", "Garam"],
  cara: ["Buat lapisan pandan dari tepung dan santan.", "Masak hingga mengental.", "Siapkan gula merah cair.", "Susun lapisan pandan dan gula merah.", "Sajikan setelah dingin."]
},
{
  id: 562,
  nama: "Sambal Tempoyak Palembang",
  daerah: "Sumatera Selatan",
  gambar: "images/sambal-tempoyak-palembang.jpg",
  deskripsi: "Sambal khas Sumatera Selatan dengan tempoyak dan cabai.",
  bahan: ["4 sendok makan tempoyak", "Cabai merah", "Cabai rawit", "Bawang merah", "Serai", "Gula", "Garam"],
  cara: ["Haluskan cabai dan bawang.", "Tumis bumbu hingga harum.", "Masukkan tempoyak dan serai.", "Tambahkan gula serta garam.", "Masak hingga matang."]
},
{
  id: 563,
  nama: "Gulai Belacan Riau",
  daerah: "Riau",
  gambar: "images/gulai-belacan-riau.jpg",
  deskripsi: "Masakan udang bersantan dengan bumbu belacan khas Melayu.",
  bahan: ["500 gram udang", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Belacan matang", "Asam jawa"],
  cara: ["Bersihkan udang.", "Haluskan cabai, bawang, dan belacan.", "Tumis bumbu hingga harum.", "Tambahkan santan dan asam jawa.", "Masukkan udang dan masak hingga matang."]
},
{
  id: 564,
  nama: "Miso Pekanbaru",
  daerah: "Riau",
  gambar: "images/miso-pekanbaru.jpg",
  deskripsi: "Hidangan mi dan bihun dengan kuah kaldu ayam gurih.",
  bahan: ["Mi kuning", "Bihun", "Ayam", "Kaldu ayam", "Bawang putih", "Daun bawang", "Garam"],
  cara: ["Rebus ayam hingga matang.", "Tumis bawang putih lalu masukkan ke kaldu.", "Siapkan mi dan bihun dalam mangkuk.", "Tambahkan suwiran ayam dan kuah.", "Sajikan dengan daun bawang."]
},
{
  id: 565,
  nama: "Roti Jala Kari Ayam Melayu",
  daerah: "Riau",
  gambar: "images/roti-jala-kari-ayam-melayu.jpg",
  deskripsi: "Roti bertekstur jaring yang disantap bersama kari ayam.",
  bahan: ["250 gram tepung terigu", "2 butir telur", "300 ml santan", "Kunyit", "Ayam", "Bumbu kari"],
  cara: ["Campurkan tepung, telur, santan, dan kunyit.", "Masak adonan menggunakan cetakan roti jala.", "Masak ayam bersama bumbu kari.", "Sajikan roti jala dengan kari."]
},
{
  id: 567,
  nama: "Nasi Dagang Melayu",
  daerah: "Kepulauan Riau",
  gambar: "images/nasi-dagang-melayu.jpg",
  deskripsi: "Nasi ketan dan beras yang dimasak dengan santan dan rempah.",
  bahan: ["250 gram beras", "250 gram beras ketan", "Santan", "Jahe", "Serai", "Daun pandan", "Garam"],
  cara: ["Rendam beras ketan.", "Campurkan beras dan ketan.", "Kukus setengah matang.", "Siram santan berbumbu.", "Kukus kembali hingga matang."]
},
{
  id: 568,
  nama: "Mie Lakse Lingga",
  daerah: "Kepulauan Riau",
  gambar: "images/mie-lakse-lingga.jpg",
  deskripsi: "Mi khas Lingga dengan kuah ikan berbumbu rempah.",
  bahan: ["Mi lakse", "Ikan laut", "Santan", "Bawang merah", "Bawang putih", "Serai", "Daun kesum"],
  cara: ["Rebus ikan dan ambil dagingnya.", "Haluskan bumbu lalu tumis.", "Masak santan bersama ikan dan bumbu.", "Sajikan kuah bersama mi lakse."]
},
{
  id: 569,
  nama: "Kue Deram-deram",
  daerah: "Kepulauan Riau",
  gambar: "images/kue-deram-deram.jpg",
  deskripsi: "Kue goreng tradisional berbahan tepung beras dan gula merah.",
  bahan: ["250 gram tepung beras", "150 gram gula merah", "Air", "Garam", "Minyak"],
  cara: ["Larutkan gula merah dengan air.", "Campurkan larutan gula dengan tepung dan garam.", "Diamkan adonan sebentar.", "Bentuk kue dan goreng hingga matang."]
},
{
  id: 570,
  nama: "Kue Batang Buruk",
  daerah: "Kepulauan Riau",
  gambar: "images/kue-batang-buruk.jpg",
  deskripsi: "Kue kering tradisional Melayu dengan isian manis.",
  bahan: ["Kulit pastry atau kulit kue tipis", "Kacang hijau sangrai", "Gula halus", "Susu bubuk", "Minyak"],
  cara: ["Siapkan kulit kue tipis.", "Buat isian dari kacang hijau dan gula.", "Isi dan bentuk kulit.", "Panggang atau goreng hingga renyah."]
},
{
  id: 571,
  nama: "Lempeng Sagu",
  daerah: "Kepulauan Riau",
  gambar: "images/lempeng-sagu.jpg",
  deskripsi: "Penganan sederhana dari sagu yang dimasak hingga kering.",
  bahan: ["250 gram tepung sagu", "Kelapa parut", "Garam", "Air"],
  cara: ["Campurkan sagu dengan kelapa dan garam.", "Tambahkan air sedikit demi sedikit.", "Bentuk adonan pipih.", "Panggang di atas wajan hingga matang."]
},
{
  id: 572,
  nama: "Nasi Lemak Melayu",
  daerah: "Kepulauan Riau",
  gambar: "images/nasi-lemak-melayu.jpg",
  deskripsi: "Nasi santan harum yang disajikan dengan sambal dan pelengkap.",
  bahan: ["500 gram beras", "Santan", "Daun pandan", "Serai", "Garam", "Kacang tanah", "Ikan teri"],
  cara: ["Cuci beras.", "Masak bersama santan dan rempah.", "Kukus hingga matang.", "Siapkan sambal dan pelengkap.", "Sajikan bersama nasi."]
},
{
  id: 573,
  nama: "Gulai Masam Baung",
  daerah: "Riau",
  gambar: "images/gulai-masam-baung.jpg",
  deskripsi: "Ikan baung dengan kuah asam dan rempah khas Melayu.",
  bahan: ["500 gram ikan baung", "Asam kandis", "Cabai", "Bawang merah", "Kunyit", "Serai", "Garam"],
  cara: ["Bersihkan ikan.", "Tumis bumbu halus bersama serai.", "Tambahkan air dan asam kandis.", "Masukkan ikan dan masak hingga matang."]
},
{
  id: 574,
  nama: "Kue Bangkit Sagu",
  daerah: "Riau",
  gambar: "images/kue-bangkit-sagu.jpg",
  deskripsi: "Kue kering tradisional Melayu yang ringan dan mudah lumer.",
  bahan: ["300 gram tepung sagu", "100 gram gula halus", "2 kuning telur", "Santan", "Daun pandan"],
  cara: ["Sangrai tepung sagu bersama pandan.", "Kocok kuning telur dan gula.", "Campurkan tepung dan santan secukupnya.", "Cetak lalu panggang hingga matang."]
},
{
  id: 575,
  nama: "Asam Pedas Baung",
  daerah: "Riau",
  gambar: "images/asam-pedas-baung.jpg",
  deskripsi: "Masakan ikan baung dengan kuah merah asam pedas.",
  bahan: ["500 gram ikan baung", "Cabai merah", "Bawang merah", "Bawang putih", "Tomat", "Asam jawa", "Serai"],
  cara: ["Bersihkan ikan.", "Haluskan bumbu dan tumis.", "Tambahkan air, tomat, dan asam jawa.", "Masukkan ikan dan masak hingga matang."]
},
{
  id: 576,
  nama: "Gulai Ikan Selais",
  daerah: "Riau",
  gambar: "images/gulai-ikan-selais.jpg",
  deskripsi: "Ikan selais dimasak dengan kuah gulai santan berbumbu.",
  bahan: ["500 gram ikan selais", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Daun kunyit"],
  cara: ["Bersihkan ikan.", "Haluskan bumbu dan tumis.", "Tuangkan santan.", "Masukkan ikan dan daun kunyit.", "Masak hingga matang."]
},
{
  id: 577,
  nama: "Kue Bangkit Kelapa",
  daerah: "Riau",
  gambar: "images/kue-bangkit-kelapa.jpg",
  deskripsi: "Kue kering berbahan sagu dan kelapa dengan aroma harum.",
  bahan: ["250 gram tepung sagu", "100 gram kelapa sangrai", "100 gram gula halus", "Santan", "Vanili"],
  cara: ["Sangrai tepung sagu.", "Campurkan kelapa dan gula.", "Tambahkan santan hingga adonan dapat dibentuk.", "Cetak dan panggang hingga matang."]
},
{
  id: 578,
  nama: "Sagu Rendang",
  daerah: "Sumatera Barat",
  gambar: "images/sagu-rendang.jpg",
  deskripsi: "Penganan khas Mentawai berbahan sagu yang diolah dengan kelapa.",
  bahan: ["250 gram tepung sagu", "Kelapa parut", "Gula merah", "Garam", "Air"],
  cara: ["Sangrai tepung sagu hingga matang.", "Masak gula merah dengan sedikit air.", "Campurkan sagu dan kelapa.", "Tuangkan larutan gula dan aduk rata."]
},
{
  id: 580,
  nama: "Nasi Kapau",
  daerah: "Sumatera Barat",
  gambar: "images/nasi-kapau.jpg",
  deskripsi: "Nasi dengan aneka lauk dan gulai khas Nagari Kapau.",
  bahan: ["500 gram beras", "Gulai nangka", "Gulai tunjang", "Sambal", "Daun singkong", "Ikan atau lauk pilihan"],
  cara: ["Masak nasi hingga matang.", "Siapkan gulai dan lauk pendamping.", "Tata nasi di piring.", "Tambahkan aneka lauk dan sambal."]
},
{
  id: 581,
  nama: "Gulai Tambusu Usus Sapi",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-tambusu-usus-sapi.jpg",
  deskripsi: "Usus sapi berisi adonan telur dan tahu yang dimasak dalam gulai.",
  bahan: ["Usus sapi bersih", "Telur", "Tahu", "Santan", "Cabai", "Bawang merah", "Kunyit"],
  cara: ["Siapkan usus sapi yang telah dibersihkan dengan benar.", "Campurkan telur dan tahu sebagai isian.", "Isi usus dengan hati-hati dan masak hingga matang.", "Masak gulai dengan bumbu dan santan.", "Sajikan usus bersama kuah gulai."]
},
{
  id: 583,
  nama: "Pangek Pisang",
  daerah: "Sumatera Barat",
  gambar: "images/pangek-pisang.jpg",
  deskripsi: "Pisang dimasak dengan santan dan rempah bercita rasa manis gurih.",
  bahan: ["5 buah pisang kepok", "Santan", "Gula merah", "Daun pandan", "Garam"],
  cara: ["Kupas pisang dan potong sesuai selera.", "Rebus santan bersama gula dan pandan.", "Masukkan pisang.", "Masak hingga pisang empuk."]
},
{
  id: 584,
  nama: "Pangek Ikan",
  daerah: "Sumatera Barat",
  gambar: "images/pangek-ikan.jpg",
  deskripsi: "Ikan dimasak dengan bumbu rempah dan kuah santan yang meresap.",
  bahan: ["500 gram ikan", "Santan", "Cabai", "Bawang merah", "Kunyit", "Jahe", "Daun kunyit"],
  cara: ["Bersihkan ikan.", "Haluskan bumbu.", "Masak santan bersama bumbu.", "Masukkan ikan dan daun kunyit.", "Masak hingga matang."]
},
{
  id: 585,
  nama: "Katupek Pitalah",
  daerah: "Sumatera Barat",
  gambar: "images/katupek-pitalah.jpg",
  deskripsi: "Ketupat khas Pitalah yang disajikan bersama kuah gulai.",
  bahan: ["Beras", "Anyaman ketupat", "Santan", "Nangka muda", "Bawang merah", "Bawang putih", "Kunyit"],
  cara: ["Isi anyaman ketupat dengan beras secukupnya.", "Rebus hingga ketupat matang.", "Masak gulai nangka bersama santan dan bumbu.", "Sajikan ketupat dengan kuah gulai."]
},
{
  id: 586,
  nama: "Gulai Kacang Panjang Minang",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-kacang-panjang-minang.jpg",
  deskripsi: "Kacang panjang dengan kuah santan dan rempah Minangkabau.",
  bahan: ["300 gram kacang panjang", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Serai"],
  cara: ["Potong kacang panjang.", "Haluskan bumbu dan tumis.", "Tuangkan santan.", "Masukkan kacang panjang dan masak hingga matang."]
},
{
  id: 587,
  nama: "Gulai Pakis Minang",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-pakis-minang.jpg",
  deskripsi: "Sayur pakis dengan kuah santan berbumbu khas Minang.",
  bahan: ["2 ikat pakis", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Daun kunyit"],
  cara: ["Bersihkan pakis dan potong-potong.", "Haluskan bumbu.", "Masak santan bersama bumbu.", "Masukkan pakis dan masak hingga matang."]
},
{
  id: 588,
  nama: "Sate Lokan",
  daerah: "Sumatera Barat",
  gambar: "images/sate-lokan.jpg",
  deskripsi: "Kerang lokan berbumbu yang ditusuk dan dipanggang.",
  bahan: ["500 gram kerang lokan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Jeruk nipis", "Garam"],
  cara: ["Bersihkan dan masak kerang hingga matang.", "Campurkan dengan bumbu halus.", "Tusuk kerang menggunakan tusuk sate.", "Panggang sebentar hingga harum."]
},
{
  id: 589,
  nama: "Sala Bulek",
  daerah: "Sumatera Barat",
  gambar: "images/sala-bulek.jpg",
  deskripsi: "Gorengan berbentuk bulat berbahan tepung beras dan ikan.",
  bahan: ["200 gram tepung beras", "100 gram ikan teri", "Bawang merah", "Cabai", "Daun kunyit", "Garam", "Air"],
  cara: ["Haluskan bumbu dan ikan.", "Campurkan tepung dan air.", "Tambahkan bumbu serta daun kunyit.", "Bentuk bulat kecil dan goreng hingga matang."]
},
{
  id: 590,
  nama: "Karupuak Kuah",
  daerah: "Sumatera Barat",
  gambar: "images/karupuak-kuah.jpg",
  deskripsi: "Kerupuk yang disiram kuah sate atau kuah berbumbu khas Minang.",
  bahan: ["Kerupuk merah", "Bawang merah", "Bawang putih", "Cabai", "Tepung beras", "Kunyit", "Garam"],
  cara: ["Siapkan kerupuk.", "Tumis bumbu halus hingga harum.", "Tambahkan air dan larutan tepung beras.", "Masak hingga kuah mengental.", "Siram kuah di atas kerupuk."]
},
{
  id: 591,
  nama: "Kue Karambia",
  daerah: "Sumatera Barat",
  gambar: "images/kue-karambia.jpg",
  deskripsi: "Kue tradisional berbahan kelapa dengan rasa manis gurih.",
  bahan: ["Kelapa parut", "Tepung beras", "Gula merah", "Santan", "Garam"],
  cara: ["Campurkan kelapa dengan tepung.", "Larutkan gula merah bersama santan.", "Campurkan semua bahan.", "Masak atau panggang hingga matang."]
},
{
  id: 593,
  nama: "Gulai Banak",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-banak.jpg",
  deskripsi: "Gulai khas Minang dengan bahan utama otak sapi.",
  bahan: ["300 gram otak sapi", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Daun jeruk"],
  cara: ["Siapkan otak sapi dengan penanganan pangan yang higienis.", "Haluskan bumbu dan tumis.", "Tambahkan santan.", "Masukkan otak dan masak perlahan hingga matang."]
},
{
  id: 594,
  nama: "Kue Sapik",
  daerah: "Sumatera Barat",
  gambar: "images/kue-sapik.jpg",
  deskripsi: "Kue kering tipis khas Minang yang dilipat saat masih hangat.",
  bahan: ["250 gram tepung beras", "2 butir telur", "150 ml santan", "100 gram gula", "Kayu manis", "Garam"],
  cara: ["Campurkan seluruh bahan hingga menjadi adonan.", "Panaskan cetakan kue sapik.", "Tuang adonan tipis.", "Masak hingga kering lalu lipat."]
},
{
  id: 596,
  nama: "Sate Danguang-Danguang",
  daerah: "Sumatera Barat",
  gambar: "images/sate-danguang-danguang.jpg",
  deskripsi: "Sate daging dengan kuah kental berbumbu khas Payakumbuh.",
  bahan: ["500 gram daging sapi", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Ketumbar"],
  cara: ["Potong daging dan rebus hingga empuk.", "Tusuk potongan daging.", "Masak kuah santan bersama bumbu.", "Panggang sate hingga harum.", "Sajikan dengan kuah."]
},
{
  id: 599,
  nama: "Kue Bika Talago",
  daerah: "Sumatera Barat",
  gambar: "images/kue-bika-talago.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dan kelapa yang dipanggang.",
  bahan: ["250 gram tepung beras", "Kelapa parut", "Santan", "Gula", "Garam"],
  cara: ["Campurkan tepung dan kelapa.", "Tambahkan santan, gula, dan garam.", "Tuang adonan ke cetakan.", "Panggang hingga matang."]
},
{
  id: 600,
  nama: "Gulai Toco",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-toco.jpg",
  deskripsi: "Sayur khas Minang dengan tauco, santan, dan aneka sayuran.",
  bahan: ["200 gram buncis", "100 gram tahu", "2 sendok makan tauco", "Santan", "Bawang merah", "Bawang putih", "Cabai"],
  cara: ["Potong buncis dan tahu.", "Tumis bawang dan cabai hingga harum.", "Masukkan tauco dan santan.", "Tambahkan buncis serta tahu.", "Masak hingga matang dan sajikan."]
},
{
  id: 602,
  nama: "Kuah Sie Itek",
  daerah: "Aceh",
  gambar: "images/kuah-sie-itek.jpg",
  deskripsi: "Masakan bebek berkuah rempah khas Aceh.",
  bahan: ["500 gram daging bebek", "Santan", "Bawang merah", "Bawang putih", "Ketumbar", "Jintan", "Kayu manis", "Garam"],
  cara: ["Bersihkan dan potong bebek.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Masukkan bebek dan santan.", "Masak hingga bebek empuk."]
},
{
  id: 603,
  nama: "Eungkot Paya",
  daerah: "Aceh",
  gambar: "images/eungkot-paya.jpg",
  deskripsi: "Olahan ikan air tawar dengan bumbu khas Aceh.",
  bahan: ["500 gram ikan air tawar", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Asam sunti", "Daun kari"],
  cara: ["Bersihkan ikan.", "Haluskan cabai, bawang, dan kunyit.", "Tumis bumbu bersama daun kari.", "Tambahkan air dan asam sunti.", "Masukkan ikan dan masak hingga matang."]
},
{
  id: 604,
  nama: "Keumamah Tumis",
  daerah: "Aceh",
  gambar: "images/keumamah-tumis.jpg",
  deskripsi: "Ikan kayu khas Aceh yang dimasak dengan cabai dan rempah.",
  bahan: ["300 gram ikan kayu", "Cabai hijau", "Bawang merah", "Bawang putih", "Asam sunti", "Daun kari", "Minyak"],
  cara: ["Siapkan ikan kayu yang sudah diolah.", "Iris ikan sesuai selera.", "Tumis bawang dan cabai.", "Masukkan ikan serta asam sunti.", "Masak hingga bumbu meresap."]
},
{
  id: 606,
  nama: "Kuwah Pliek U",
  daerah: "Aceh",
  gambar: "images/kuwah-pliek-u.jpg",
  deskripsi: "Sayur khas Aceh dengan pliek u dan berbagai sayuran.",
  bahan: ["Pliek u", "Daun melinjo", "Nangka muda", "Kacang panjang", "Terong", "Cabai", "Santan"],
  cara: ["Siapkan dan bersihkan sayuran.", "Larutkan pliek u dengan air.", "Masak bumbu bersama santan.", "Masukkan sayuran bertahap.", "Masak hingga seluruh sayuran matang."]
},
{
  id: 607,
  nama: "Asam Keueng",
  daerah: "Aceh",
  gambar: "images/asam-keueng.jpg",
  deskripsi: "Ikan berkuah asam pedas dengan kunyit dan rempah Aceh.",
  bahan: ["500 gram ikan", "Cabai merah", "Bawang merah", "Kunyit", "Asam sunti", "Daun jeruk", "Garam"],
  cara: ["Bersihkan ikan.", "Haluskan cabai, bawang, dan kunyit.", "Didihkan air bersama bumbu.", "Tambahkan asam sunti.", "Masukkan ikan dan masak hingga matang."]
},
{
  id: 608,
  nama: "Boh Romrom",
  daerah: "Aceh",
  gambar: "images/boh-romrom.jpg",
  deskripsi: "Kue bola ketan berisi gula merah dan dilapisi kelapa parut.",
  bahan: ["250 gram tepung ketan", "Gula merah", "Kelapa parut", "Air", "Garam"],
  cara: ["Uleni tepung ketan dengan air.", "Ambil adonan dan isi gula merah.", "Bentuk menjadi bola.", "Rebus hingga mengapung.", "Gulingkan pada kelapa parut."]
},
{
  id: 609,
  nama: "Timphan Srikaya",
  daerah: "Aceh",
  gambar: "images/timphan-srikaya.jpg",
  deskripsi: "Kue kukus pisang dan ketan dengan isian srikaya.",
  bahan: ["Pisang raja", "Tepung ketan", "Santan", "Telur", "Gula", "Daun pisang", "Garam"],
  cara: ["Haluskan pisang dan campurkan tepung ketan.", "Buat isian dari telur, santan, dan gula.", "Pipihkan adonan kulit.", "Isi dengan srikaya dan bungkus daun pisang.", "Kukus hingga matang."]
},
{
  id: 610,
  nama: "Rujak Aceh",
  daerah: "Aceh",
  gambar: "images/rujak-aceh.jpg",
  deskripsi: "Rujak buah dengan kuah kental bercita rasa pedas, manis, dan asam.",
  bahan: ["Mangga", "Nanas", "Jambu air", "Pepaya mengkal", "Cabai", "Gula merah", "Asam jawa"],
  cara: ["Potong seluruh buah.", "Haluskan cabai dan gula merah.", "Tambahkan asam jawa dan sedikit air.", "Aduk buah bersama bumbu.", "Simpan sebentar dalam lemari pendingin sebelum disajikan."]
},
{
  id: 611,
  nama: "Mie Caluk",
  daerah: "Aceh",
  gambar: "images/mie-caluk.jpg",
  deskripsi: "Mi khas Aceh dengan bumbu kacang dan sayuran.",
  bahan: ["300 gram mi kuning", "100 gram tauge", "Kacang tanah", "Cabai merah", "Bawang putih", "Kecap manis", "Jeruk nipis"],
  cara: ["Rebus mi dan tauge.", "Haluskan kacang, cabai, dan bawang.", "Tumis bumbu hingga matang.", "Campurkan mi dengan bumbu.", "Sajikan dengan jeruk nipis."]
},
{
  id: 612,
  nama: "Nasi Gurih Aceh",
  daerah: "Aceh",
  gambar: "images/nasi-gurih-aceh.jpg",
  deskripsi: "Nasi santan dengan aroma rempah khas Aceh.",
  bahan: ["500 gram beras", "Santan", "Serai", "Daun pandan", "Daun salam", "Kapulaga", "Garam"],
  cara: ["Cuci beras.", "Rebus santan bersama rempah.", "Masukkan beras dan aduk hingga santan meresap.", "Kukus hingga nasi matang."]
},
{
  id: 613,
  nama: "Gulai Kepala Kakap Aceh",
  daerah: "Aceh",
  gambar: "images/gulai-kepala-kakap-aceh.jpg",
  deskripsi: "Kepala ikan kakap dengan kuah santan berbumbu Aceh.",
  bahan: ["1 kepala kakap", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Asam sunti"],
  cara: ["Bersihkan kepala ikan.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Tuangkan santan.", "Masukkan kepala ikan dan masak hingga matang."]
},
{
  id: 614,
  nama: "Gulai Itik Aceh",
  daerah: "Aceh",
  gambar: "images/gulai-itik-aceh.jpg",
  deskripsi: "Daging itik dimasak dengan rempah dan santan.",
  bahan: ["500 gram daging itik", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Jahe", "Serai"],
  cara: ["Bersihkan daging itik.", "Haluskan bumbu.", "Tumis bumbu dan serai.", "Masukkan itik serta santan.", "Masak sampai empuk."]
},
{
  id: 615,
  nama: "Gulai Kambing Aceh",
  daerah: "Aceh",
  gambar: "images/gulai-kambing-aceh.jpg",
  deskripsi: "Gulai kambing dengan racikan rempah khas Aceh.",
  bahan: ["500 gram daging kambing", "Santan", "Bawang merah", "Bawang putih", "Ketumbar", "Kapulaga", "Kayu manis"],
  cara: ["Potong daging kambing.", "Tumis bumbu halus dan rempah.", "Masukkan daging.", "Tambahkan santan dan masak hingga empuk."]
},
{
  id: 616,
  nama: "Ikan Kayu Aceh",
  daerah: "Aceh",
  gambar: "images/ikan-kayu-aceh.jpg",
  deskripsi: "Olahan ikan tongkol kering yang menjadi bahan masakan tradisional Aceh.",
  bahan: ["300 gram ikan kayu siap olah", "Cabai merah", "Bawang merah", "Bawang putih", "Tomat", "Daun kari", "Garam"],
  cara: ["Siapkan ikan kayu.", "Tumis bawang dan cabai.", "Masukkan tomat serta daun kari.", "Tambahkan ikan dan sedikit air.", "Masak hingga bumbu meresap."]
},
{
  id: 617,
  nama: "Kue Adee",
  daerah: "Aceh",
  gambar: "images/kue-adee.jpg",
  deskripsi: "Kue panggang khas Pidie Jaya berbahan tepung, telur, dan santan.",
  bahan: ["250 gram tepung terigu", "3 butir telur", "200 ml santan", "150 gram gula", "Bawang goreng", "Garam"],
  cara: ["Campurkan telur dan gula.", "Tambahkan santan dan tepung.", "Tuang adonan ke loyang.", "Taburkan bawang goreng.", "Panggang hingga matang."]
},
{
  id: 618,
  nama: "Kue Bhoi",
  daerah: "Aceh",
  gambar: "images/kue-bhoi.jpg",
  deskripsi: "Kue bolu tradisional Aceh dengan bentuk cetakan khas.",
  bahan: ["4 butir telur", "150 gram gula", "150 gram tepung terigu", "Vanili", "Sedikit garam"],
  cara: ["Kocok telur dan gula hingga mengembang.", "Masukkan tepung dan vanili.", "Tuang ke cetakan kue.", "Panggang hingga matang."]
},
{
  id: 619,
  nama: "Kue Seupet",
  daerah: "Aceh",
  gambar: "images/kue-seupet.jpg",
  deskripsi: "Kue tipis renyah khas Aceh yang dibuat menggunakan cetakan khusus.",
  bahan: ["200 gram tepung beras", "100 gram gula", "2 butir telur", "Santan", "Vanili"],
  cara: ["Campurkan semua bahan menjadi adonan.", "Panaskan cetakan.", "Tuang adonan tipis.", "Masak hingga renyah dan lipat selagi hangat."]
},
{
  id: 620,
  nama: "Kue Meuseukat",
  daerah: "Aceh",
  gambar: "images/kue-meuseukat.jpg",
  deskripsi: "Penganan manis khas Aceh berbahan tepung dan nanas.",
  bahan: ["1 buah nanas", "250 gram tepung terigu", "200 gram gula", "Mentega", "Air", "Garam"],
  cara: ["Haluskan nanas.", "Masak nanas bersama gula.", "Masukkan tepung dan mentega secara bertahap.", "Aduk hingga adonan mengental dan matang."]
},
{
  id: 621,
  nama: "Gulai Kemba'ang",
  daerah: "Bengkulu",
  gambar: "images/gulai-kemba'ang.jpg",
  deskripsi: "Gulai rebung dengan rempah dan santan khas Bengkulu.",
  bahan: ["300 gram rebung", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Serai"],
  cara: ["Rebus rebung hingga empuk.", "Haluskan bumbu.", "Tumis bumbu bersama serai.", "Masukkan santan dan rebung.", "Masak hingga matang."]
},
{
  id: 623,
  nama: "Bagar Hiu",
  daerah: "Bengkulu",
  gambar: "images/bagar-hiu.jpg",
  deskripsi: "Masakan tradisional Bengkulu dengan bumbu rempah pekat.",
  bahan: ["500 gram ikan yang legal dan aman dikonsumsi", "Kelapa sangrai", "Cabai", "Bawang merah", "Bawang putih", "Jahe", "Kunyit"],
  cara: ["Siapkan ikan konsumsi yang aman dan legal.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Masukkan ikan dan kelapa sangrai.", "Masak hingga matang."]
},
{
  id: 624,
  nama: "Lema Rebung",
  daerah: "Bengkulu",
  gambar: "images/lema-rebung.jpg",
  deskripsi: "Olahan rebung fermentasi tradisional masyarakat Rejang.",
  bahan: ["Rebung yang telah diolah secara aman", "Cabai", "Bawang merah", "Bawang putih", "Garam", "Ikan"],
  cara: ["Siapkan rebung fermentasi yang diproses secara higienis.", "Tumis bawang dan cabai.", "Masukkan rebung.", "Tambahkan ikan dan masak hingga matang."]
},
{
  id: 625,
  nama: "Kue Tat Bengkulu",
  daerah: "Bengkulu",
  gambar: "images/kue-tat-bengkulu.jpg",
  deskripsi: "Kue panggang tradisional dengan olesan selai nanas.",
  bahan: ["250 gram tepung terigu", "100 gram mentega", "2 kuning telur", "100 gram gula", "Selai nanas", "Vanili"],
  cara: ["Campurkan tepung, mentega, telur, dan gula.", "Uleni hingga menjadi adonan.", "Bentuk kue dan beri selai nanas.", "Panggang hingga matang."]
},
{
  id: 626,
  nama: "Bay Tat",
  daerah: "Bengkulu",
  gambar: "images/bay-tat.jpg",
  deskripsi: "Kue khas Bengkulu dengan tekstur lembut dan rasa manis.",
  bahan: ["250 gram tepung terigu", "2 butir telur", "100 gram gula", "100 gram mentega", "Santan", "Selai nanas"],
  cara: ["Campurkan bahan kulit.", "Uleni hingga kalis.", "Bentuk dalam loyang.", "Tambahkan selai nanas.", "Panggang hingga matang."]
},
{
  id: 627,
  nama: "Kue Perut Punai",
  daerah: "Bengkulu",
  gambar: "images/kue-perut-punai.jpg",
  deskripsi: "Kue tradisional berbentuk lilitan dengan rasa manis.",
  bahan: ["250 gram tepung beras", "100 gram gula", "Santan", "Garam", "Minyak"],
  cara: ["Campurkan tepung dengan santan dan garam.", "Bentuk adonan memanjang.", "Lilitkan menjadi bentuk khas.", "Goreng hingga matang lalu beri larutan gula."]
},
{
  id: 628,
  nama: "Kue Cucur Pandan Bengkulu",
  daerah: "Bengkulu",
  gambar: "images/kue-cucur-pandan-bengkulu.jpg",
  deskripsi: "Kue cucur beraroma pandan dengan bagian tengah yang lembut.",
  bahan: ["200 gram tepung beras", "50 gram tepung terigu", "Gula merah", "Air pandan", "Garam", "Minyak"],
  cara: ["Larutkan gula dengan air pandan.", "Campurkan tepung dan garam.", "Tuang larutan gula dan aduk.", "Diamkan adonan.", "Goreng hingga matang."]
},
{
  id: 629,
  nama: "Gulai Ikan Nila Bengkulu",
  daerah: "Bengkulu",
  gambar: "images/gulai-ikan-nila-bengkulu.jpg",
  deskripsi: "Ikan nila dengan kuah santan dan bumbu lokal Bengkulu.",
  bahan: ["500 gram ikan nila", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Serai"],
  cara: ["Bersihkan ikan.", "Tumis bumbu halus dan serai.", "Tuangkan santan.", "Masukkan ikan.", "Masak hingga matang."]
},
{
  id: 630,
  nama: "Rebung Asam Bengkulu",
  daerah: "Bengkulu",
  gambar: "images/rebung-asam-bengkulu.jpg",
  deskripsi: "Masakan rebung bercita rasa asam dengan bumbu sederhana.",
  bahan: ["300 gram rebung", "Asam jawa", "Cabai", "Bawang merah", "Bawang putih", "Garam", "Ikan"],
  cara: ["Siapkan rebung yang telah diolah.", "Tumis bawang dan cabai.", "Tambahkan air dan asam jawa.", "Masukkan rebung serta ikan.", "Masak hingga matang."]
},
{
  id: 631,
  nama: "Kue Engkak Ketan Susu",
  daerah: "Sumatera Selatan",
  gambar: "images/engkak-ketan-susu.jpg",
  deskripsi: "Kue ketan berlapis dengan rasa manis dan tekstur lembut.",
  bahan: ["250 gram tepung ketan", "4 butir telur", "200 ml santan", "150 gram gula", "Susu kental manis", "Mentega"],
  cara: ["Kocok telur dan gula.", "Tambahkan tepung ketan dan santan.", "Masukkan susu serta mentega.", "Tuang adonan sedikit demi sedikit.", "Panggang setiap lapisan hingga matang."]
},
{
  id: 632,
  nama: "Gulai Asam Padeh Daging",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-asam-padeh-daging.jpg",
  deskripsi: "Daging sapi dengan kuah pedas asam khas Minangkabau.",
  bahan: ["500 gram daging sapi", "Cabai merah", "Bawang merah", "Bawang putih", "Jahe", "Asam kandis", "Serai"],
  cara: ["Potong daging.", "Haluskan bumbu.", "Tumis bumbu bersama serai.", "Masukkan daging dan air.", "Tambahkan asam kandis dan masak hingga empuk."]
},
{
  id: 633,
  nama: "Sate Kuah Padang Panjang",
  daerah: "Sumatera Barat",
  gambar: "images/sate-kuah-padang-panjang.jpg",
  deskripsi: "Sate daging dengan kuah kental rempah khas Padang Panjang.",
  bahan: ["500 gram daging sapi", "Tepung beras", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Cabai"],
  cara: ["Rebus daging hingga empuk.", "Potong dan tusuk daging.", "Masak kuah dari bumbu dan kaldu.", "Tambahkan larutan tepung hingga mengental.", "Sajikan sate dengan kuah."]
},
{
  id: 634,
  nama: "Samba Lado Mudo",
  daerah: "Sumatera Barat",
  gambar: "images/samba-lado-mudo.jpg",
  deskripsi: "Sambal cabai hijau khas Minang dengan rasa pedas segar.",
  bahan: ["Cabai hijau", "Bawang merah", "Tomat hijau", "Jeruk nipis", "Garam", "Minyak"],
  cara: ["Rebus cabai dan tomat sebentar.", "Ulek kasar bersama bawang.", "Tambahkan garam.", "Siram minyak panas dan beri jeruk nipis."]
},
{
  id: 636,
  nama: "Nasi Sek",
  daerah: "Sumatera Barat",
  gambar: "images/nasi-sek.jpg",
  deskripsi: "Nasi dalam porsi kecil yang disajikan dengan lauk khas Pariaman.",
  bahan: ["Beras", "Daun pisang", "Ikan goreng", "Sambal", "Sayuran rebus"],
  cara: ["Masak nasi hingga matang.", "Siapkan daun pisang.", "Bungkus nasi dalam porsi kecil.", "Sajikan bersama ikan, sambal, dan sayuran."]
},
{
  id: 637,
  nama: "Lamang Katan",
  daerah: "Sumatera Barat",
  gambar: "images/lamang-katan.jpg",
  deskripsi: "Ketan bersantan yang dimasak secara tradisional dalam bambu.",
  bahan: ["500 gram beras ketan", "Santan", "Daun pisang", "Garam"],
  cara: ["Rendam ketan.", "Campurkan santan dan garam.", "Masukkan ketan ke bambu berlapis daun pisang.", "Masak hingga ketan matang."]
},
{
  id: 639,
  nama: "Gulai Pucuak Ubi",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-pucuak-ubi.jpg",
  deskripsi: "Daun singkong muda yang dimasak dalam kuah santan berbumbu.",
  bahan: ["2 ikat daun singkong muda", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Serai"],
  cara: ["Rebus daun singkong hingga empuk.", "Haluskan bumbu.", "Masak santan bersama bumbu.", "Masukkan daun singkong.", "Masak hingga matang."]
},
{
  id: 640,
  nama: "Kue Arai Pinang",
  daerah: "Sumatera Barat",
  gambar: "images/kue-arai-pinang.jpg",
  deskripsi: "Kue kering tradisional Pariaman berbahan tepung beras.",
  bahan: ["250 gram tepung beras", "100 gram gula", "Santan", "Garam", "Minyak"],
  cara: ["Campurkan tepung, gula, dan garam.", "Tambahkan santan sedikit demi sedikit.", "Bentuk menggunakan cetakan.", "Goreng hingga renyah."]
},
{
  id: 641,
  nama: "Kue Kembang Loyang",
  daerah: "Sumatera Utara",
  gambar: "images/kue-kembang-loyang.jpg",
  deskripsi: "Kue goreng renyah berbentuk bunga yang populer di Sumatera Utara.",
  bahan: ["200 gram tepung beras", "2 butir telur", "150 ml santan", "Gula", "Garam"],
  cara: ["Campurkan semua bahan.", "Panaskan cetakan kembang loyang.", "Celupkan cetakan ke adonan.", "Goreng hingga terlepas dan renyah."]
},
{
  id: 642,
  nama: "Naniura",
  daerah: "Sumatera Utara",
  gambar: "images/naniura.jpg",
  deskripsi: "Hidangan ikan khas Batak Toba dengan bumbu asam dan rempah.",
  bahan: ["500 gram ikan mas", "Jeruk jungga", "Andaliman", "Cabai", "Bawang merah", "Kunyit", "Kemiri"],
  cara: ["Gunakan ikan yang sangat segar dan layak untuk olahan khusus.", "Bersihkan ikan dan siapkan bumbu.", "Haluskan rempah dan campurkan dengan sari jeruk.", "Ikuti proses pengolahan pangan yang aman dan terkontrol sebelum disajikan."]
},
{
  id: 643,
  nama: "Saksang Ayam",
  daerah: "Sumatera Utara",
  gambar: "images/saksang-ayam.jpg",
  deskripsi: "Masakan ayam berbumbu khas Batak dengan rempah dan kelapa sangrai.",
  bahan: ["500 gram ayam", "Bawang merah", "Bawang putih", "Cabai", "Andaliman", "Kelapa sangrai", "Garam"],
  cara: ["Potong ayam dan bersihkan.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Masukkan ayam dan kelapa sangrai.", "Masak hingga ayam matang."]
},
{
  id: 644,
  nama: "Dali Ni Horbo",
  daerah: "Sumatera Utara",
  gambar: "images/dali-ni-horbo.jpg",
  deskripsi: "Olahan susu kerbau tradisional khas Batak Toba.",
  bahan: ["500 ml susu kerbau pasteurisasi", "Daun pepaya secukupnya", "Garam", "Bawang putih", "Cabai"],
  cara: ["Gunakan susu yang telah dipasteurisasi.", "Panaskan susu perlahan.", "Tambahkan bahan penggumpal pangan yang sesuai.", "Masak hingga teksturnya terbentuk.", "Sajikan dengan bumbu."]
},
{
  id: 645,
  nama: "Arsik Ayam",
  daerah: "Sumatera Utara",
  gambar: "images/arsik-ayam.jpg",
  deskripsi: "Ayam berbumbu andaliman dan rempah khas Batak.",
  bahan: ["500 gram ayam", "Andaliman", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Asam cikala"],
  cara: ["Bersihkan ayam.", "Haluskan bumbu dan andaliman.", "Tata ayam bersama serai dan asam cikala.", "Tambahkan air.", "Masak hingga ayam empuk."]
},
{
  id: 646,
  nama: "Mie Gomak Kuah",
  daerah: "Sumatera Utara",
  gambar: "images/mie-gomak-kuah.jpg",
  deskripsi: "Mi lidi khas Batak Toba dengan kuah santan berbumbu.",
  bahan: ["300 gram mi lidi", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Andaliman", "Daun bawang"],
  cara: ["Rebus mi hingga matang.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Tambahkan santan dan masak hingga mendidih.", "Sajikan bersama mi."]
},
{
  id: 647,
  nama: "Sambal Tuktuk",
  daerah: "Sumatera Utara",
  gambar: "images/sambal-tuktuk.jpg",
  deskripsi: "Sambal khas Batak dengan andaliman dan ikan teri.",
  bahan: ["Cabai merah", "Andaliman", "Ikan teri matang", "Bawang merah", "Bawang putih", "Jeruk nipis", "Garam"],
  cara: ["Goreng cabai dan bawang sebentar.", "Haluskan bersama andaliman.", "Tambahkan ikan teri.", "Beri garam dan jeruk nipis."]
},
,
{
  id: 649,
  nama: "Kue Lapet",
  daerah: "Sumatera Utara",
  gambar: "images/kue-lapet.jpg",
  deskripsi: "Kue tradisional Batak berbahan tepung beras dan kelapa.",
  bahan: ["250 gram tepung beras", "Kelapa parut", "Gula merah", "Daun pisang", "Garam"],
  cara: ["Campurkan tepung dan kelapa.", "Tambahkan gula merah.", "Bungkus adonan dengan daun pisang.", "Kukus hingga matang."]
},
{
  id: 650,
  nama: "Bubur Sitohap",
  daerah: "Sumatera Utara",
  gambar: "images/bubur-sitohap.jpg",
  deskripsi: "Olahan bubur tradisional dengan bahan pangan dan rempah lokal.",
  bahan: ["200 gram beras", "Air", "Jagung", "Daun sayuran", "Bawang merah", "Garam"],
  cara: ["Masak beras dengan air hingga menjadi bubur.", "Tambahkan jagung dan sayuran.", "Masukkan bumbu.", "Masak hingga seluruh bahan matang."]
},
{
  id: 651,
  nama: "Ayam Pinadar",
  daerah: "Sumatera Utara",
  gambar: "images/ayam-pinadar.jpg",
  deskripsi: "Ayam panggang khas Batak dengan bumbu dan kelapa sangrai.",
  bahan: ["500 gram ayam", "Kelapa parut sangrai", "Cabai", "Bawang merah", "Bawang putih", "Andaliman", "Garam"],
  cara: ["Bersihkan ayam.", "Haluskan bumbu.", "Lumuri ayam dengan bumbu.", "Panggang hingga matang.", "Sajikan dengan kelapa sangrai berbumbu."]
},
{
  id: 652,
  nama: "Kue Talam Durian",
  daerah: "Sumatera Utara",
  gambar: "images/kue-talam-durian.jpg",
  deskripsi: "Kue talam lembut dengan aroma buah durian.",
  bahan: ["200 gram tepung beras", "100 gram durian", "Santan", "Gula", "Garam"],
  cara: ["Haluskan durian.", "Campurkan tepung, santan, gula, dan durian.", "Tuang ke cetakan.", "Kukus hingga matang."]
},
{
  id: 653,
  nama: "Gulai Ikan Mas Batak",
  daerah: "Sumatera Utara",
  gambar: "images/gulai-ikan-mas-batak.jpg",
  deskripsi: "Ikan mas dimasak dengan bumbu rempah khas Sumatera Utara.",
  bahan: ["500 gram ikan mas", "Bawang merah", "Bawang putih", "Kunyit", "Andaliman", "Serai", "Santan"],
  cara: ["Bersihkan ikan.", "Haluskan bumbu.", "Tumis bumbu dan serai.", "Tambahkan santan.", "Masukkan ikan dan masak hingga matang."]
},
{
  id: 654,
  nama: "Gulai Daun Ubi Tumbuk",
  daerah: "Sumatera Utara",
  gambar: "images/gulai-daun-ubi-tumbuk.jpg",
  deskripsi: "Daun singkong tumbuk dengan santan dan rempah.",
  bahan: ["2 ikat daun singkong", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kecombrang", "Garam"],
  cara: ["Rebus daun singkong hingga lunak.", "Tumbuk daun singkong.", "Tumis bumbu dan kecombrang.", "Masukkan santan dan daun singkong.", "Masak hingga matang."]
},
{
  id: 655,
  nama: "Bika Ambon Mini Pandan",
  daerah: "Sumatera Utara",
  gambar: "images/bika-ambon-mini-pandan.jpg",
  deskripsi: "Bika Ambon berukuran kecil dengan aroma pandan.",
  bahan: ["200 gram tepung tapioka", "100 gram tepung terigu", "Santan", "Telur", "Gula", "Ragi", "Pandan"],
  cara: ["Buat larutan santan pandan.", "Campurkan tepung, gula, dan ragi.", "Tambahkan telur serta santan.", "Diamkan hingga mengembang.", "Panggang dalam cetakan hingga matang."]
},
{
  id: 658,
  nama: "Sambal Andaliman",
  daerah: "Sumatera Utara",
  gambar: "images/sambal-andaliman.jpg",
  deskripsi: "Sambal khas Batak dengan aroma segar andaliman.",
  bahan: ["Andaliman", "Cabai merah", "Cabai rawit", "Bawang merah", "Bawang putih", "Jeruk nipis", "Garam"],
  cara: ["Sangrai andaliman sebentar.", "Goreng cabai dan bawang.", "Haluskan semua bahan.", "Tambahkan garam dan jeruk nipis."]
},
{
  id: 659,
  nama: "Naniarsik Sayur",
  daerah: "Sumatera Utara",
  gambar: "images/naniarsik-sayur.jpg",
  deskripsi: "Olahan sayuran dengan rempah khas Batak.",
  bahan: ["Daun singkong", "Kacang panjang", "Cabai", "Bawang merah", "Bawang putih", "Andaliman", "Kunyit"],
  cara: ["Bersihkan sayuran.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Masukkan sayuran dan sedikit air.", "Masak hingga matang."]
},
{
  id: 660,
  nama: "Kue Gandasturi",
  daerah: "Sumatera Utara",
  gambar: "images/kue-gandasturi.jpg",
  deskripsi: "Gorengan kacang hijau berbalut adonan tepung.",
  bahan: ["200 gram kacang hijau kupas", "Tepung terigu", "Gula", "Garam", "Air", "Minyak"],
  cara: ["Rebus kacang hijau hingga empuk.", "Haluskan bersama gula.", "Bentuk menjadi bulatan pipih.", "Celupkan ke adonan tepung.", "Goreng hingga kecokelatan."]
},
{
  id: 661,
  nama: "Ayam Taliwang Bakar Madu",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/ayam-taliwang-bakar-madu.jpg",
  deskripsi: "Variasi ayam bakar Lombok dengan bumbu pedas dan olesan madu.",
  bahan: ["1 ekor ayam", "Cabai merah", "Bawang merah", "Bawang putih", "Terasi matang", "Madu", "Jeruk limau"],
  cara: ["Bersihkan ayam.", "Haluskan cabai, bawang, dan terasi.", "Masak ayam bersama bumbu hingga matang.", "Olesi madu.", "Panggang sebentar hingga harum."]
},
{
  id: 662,
  nama: "Kelaq Batih",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/kelaq-batih.jpg",
  deskripsi: "Sayur tradisional Lombok berbahan kacang-kacangan dan daun lokal.",
  bahan: ["Kacang batih", "Daun singkong", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Garam"],
  cara: ["Bersihkan kacang dan sayuran.", "Rebus kacang hingga empuk.", "Tumis bumbu.", "Masukkan sayuran.", "Masak hingga matang."]
},
{
  id: 663,
  nama: "Kelaq Lebui",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/kelaq-lebui.jpg",
  deskripsi: "Sayur kacang lebui khas Lombok dengan kuah berbumbu.",
  bahan: ["200 gram kacang lebui", "Daun singkong", "Bawang merah", "Bawang putih", "Cabai", "Tomat", "Garam"],
  cara: ["Rebus kacang lebui hingga empuk.", "Tumis bumbu.", "Masukkan kacang dan air rebusannya.", "Tambahkan daun singkong.", "Masak hingga matang."]
},
{
  id: 665,
  nama: "Jaje Tujak",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/jaje-tujak.jpg",
  deskripsi: "Kue ketan tumbuk dengan kelapa khas masyarakat Sasak.",
  bahan: ["500 gram beras ketan", "Kelapa parut", "Garam", "Daun pisang"],
  cara: ["Rendam beras ketan.", "Kukus hingga matang.", "Tumbuk bersama kelapa dan garam.", "Bentuk dan sajikan."]
},
{
  id: 666,
  nama: "Kue Cerorot Lombok",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/cerorot.jpg",
  deskripsi: "Kue manis berbahan tepung beras dan gula merah dalam bungkus janur.",
  bahan: ["200 gram tepung beras", "150 gram gula merah", "Santan", "Garam", "Janur"],
  cara: ["Larutkan gula merah dengan santan.", "Campurkan dengan tepung beras.", "Masukkan ke bungkus janur berbentuk kerucut.", "Kukus hingga matang."]
},
{
  id: 667,
  nama: "Sate Pencok",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/sate-pencok.jpg",
  deskripsi: "Sajian sate khas Lombok dengan sambal pedas berbumbu.",
  bahan: ["500 gram daging ayam", "Cabai", "Bawang merah", "Bawang putih", "Kencur", "Jeruk limau", "Garam"],
  cara: ["Potong ayam dan tusuk.", "Panggang hingga matang.", "Haluskan cabai, bawang, dan kencur.", "Tambahkan jeruk limau.", "Sajikan sate dengan sambal."]
},
{
  id: 668,
  nama: "Bebalung Sapi",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/bebalung-sapi.jpg",
  deskripsi: "Sup tulang sapi khas Lombok dengan kuah rempah.",
  bahan: ["500 gram tulang sapi", "Bawang merah", "Bawang putih", "Cabai", "Jahe", "Lengkuas", "Garam"],
  cara: ["Rebus tulang hingga empuk.", "Haluskan bumbu.", "Tumis bumbu hingga harum.", "Masukkan ke dalam kaldu.", "Masak hingga kuah beraroma."]
},
{
  id: 669,
  nama: "Nasi Balap Sambal Beberuk",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/nasi-balap-sambal-beberuk.jpg",
  deskripsi: "Nasi khas Lombok dengan ayam suwir dan sambal beberuk.",
  bahan: ["500 gram beras", "Ayam suwir", "Cabai", "Terong", "Tomat", "Bawang merah", "Jeruk limau"],
  cara: ["Masak nasi hingga matang.", "Masak ayam suwir berbumbu.", "Potong terong dan tomat.", "Haluskan sambal dengan cabai dan bawang.", "Sajikan bersama nasi."]
},
{
  id: 670,
  nama: "Kue Bantal Lombok",
  daerah: "Nusa Tenggara Barat",
  gambar: "images/kue-bantal-lombok.jpg",
  deskripsi: "Kue ketan berbentuk bantal yang dibungkus daun kelapa.",
  bahan: ["300 gram beras ketan", "Kelapa parut", "Garam", "Daun kelapa muda"],
  cara: ["Rendam ketan.", "Campurkan kelapa dan garam.", "Masukkan ke bungkus daun kelapa.", "Rebus hingga matang."]
},
{
  id: 672,
  nama: "Jagung Catemak",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/jagung-catemak.jpg",
  deskripsi: "Hidangan berkuah dari jagung, kacang-kacangan, dan sayuran.",
  bahan: ["200 gram jagung pipil", "100 gram kacang tanah", "100 gram kacang hijau", "Daun singkong", "Garam"],
  cara: ["Rebus jagung dan kacang hingga empuk.", "Masukkan daun singkong.", "Tambahkan garam.", "Masak hingga semua bahan matang."]
},
{
  id: 674,
  nama: "Kolo Jagung",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/kolo-jagung.jpg",
  deskripsi: "Olahan jagung dan beras dengan cara memasak tradisional Manggarai.",
  bahan: ["200 gram beras", "150 gram jagung pipil", "Santan", "Garam", "Daun pisang"],
  cara: ["Cuci beras dan jagung.", "Campurkan santan dan garam.", "Masukkan ke wadah berlapis daun pisang.", "Masak hingga matang."]
},
{
  id: 675,
  nama: "Catemak Jagung Labu",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/catemak-jagung-labu.jpg",
  deskripsi: "Sup jagung dan labu dengan kacang-kacangan khas NTT.",
  bahan: ["Jagung pipil", "Labu kuning", "Kacang hijau", "Kacang tanah", "Daun kelor", "Garam"],
  cara: ["Rebus kacang hingga empuk.", "Masukkan jagung dan labu.", "Tambahkan daun kelor.", "Bumbui dan masak hingga matang."]
},
{
  id: 676,
  nama: "Sambal Lu'at",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/sambal-lu'at.jpg",
  deskripsi: "Sambal khas Timor dengan cabai dan jeruk lokal.",
  bahan: ["Cabai rawit", "Cabai merah", "Jeruk nipis", "Daun kemangi", "Garam", "Bawang merah"],
  cara: ["Haluskan cabai dan bawang.", "Tambahkan garam.", "Masukkan perasan jeruk.", "Tambahkan daun kemangi dan aduk."]
},
{
  id: 677,
  nama: "Ubi Nuabosi",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/ubi-nuabosi.jpg",
  deskripsi: "Ubi khas Ende yang diolah sederhana sebagai makanan pokok.",
  bahan: ["500 gram ubi Nuabosi", "Air", "Garam"],
  cara: ["Cuci ubi hingga bersih.", "Kupas dan potong.", "Rebus atau kukus hingga empuk.", "Sajikan dengan lauk dan sambal."]
},
{
  id: 678,
  nama: "Kue Rambut",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/kue-rambut.jpg",
  deskripsi: "Kue kering khas NTT berbentuk seperti helaian rambut.",
  bahan: ["250 gram tepung beras", "100 gram gula merah", "Air", "Garam", "Minyak"],
  cara: ["Larutkan gula merah dengan air.", "Campurkan dengan tepung dan garam.", "Masukkan adonan ke alat pembentuk.", "Goreng hingga renyah."]
},
{
  id: 680,
  nama: "Ikan Kuah Asam Kupang",
  daerah: "Nusa Tenggara Timur",
  gambar: "images/ikan-kuah-asam-kupang.jpg",
  deskripsi: "Ikan berkuah segar dengan tomat dan asam khas Kupang.",
  bahan: ["500 gram ikan", "Tomat", "Bawang merah", "Bawang putih", "Cabai", "Jeruk nipis", "Daun kemangi"],
  cara: ["Bersihkan ikan.", "Didihkan air bersama bawang dan cabai.", "Tambahkan tomat dan jeruk nipis.", "Masukkan ikan.", "Masak hingga matang dan tambahkan kemangi."]
},
{
  id: 681,
  nama: "Ayam Betutu Gilimanuk",
  daerah: "Bali",
  gambar: "images/ayam-betutu-gilimanuk.jpg",
  deskripsi: "Ayam berbumbu base genep khas Bali.",
  bahan: ["1 ekor ayam", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Jahe", "Lengkuas", "Serai"],
  cara: ["Bersihkan ayam.", "Haluskan bumbu base genep.", "Lumuri ayam dengan bumbu.", "Masak perlahan hingga ayam empuk.", "Sajikan bersama sambal."]
},
{
  id: 683,
  nama: "Jukut Ares Kacang",
  daerah: "Bali",
  gambar: "images/jukut-ares-kacang.jpg",
  deskripsi: "Sayur batang pisang muda dengan kacang dan bumbu Bali.",
  bahan: ["Batang pisang muda yang telah diolah", "Kacang panjang", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Serai"],
  cara: ["Siapkan batang pisang muda yang sudah diolah.", "Tumis bumbu halus.", "Tambahkan santan.", "Masukkan batang pisang dan kacang.", "Masak hingga matang."]
},
{
  id: 684,
  nama: "Sate Kakul",
  daerah: "Bali",
  gambar: "images/sate-kakul.jpg",
  deskripsi: "Sate kerang sawah dengan bumbu khas Bali.",
  bahan: ["300 gram kerang sawah yang layak konsumsi", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Serai", "Garam"],
  cara: ["Bersihkan kerang dengan baik.", "Masak kerang hingga matang.", "Haluskan bumbu.", "Campurkan kerang dengan bumbu.", "Tusuk dan panggang sebentar hingga harum."]
},
{
  id: 689,
  nama: "Sate Lilit Ikan Tuna",
  daerah: "Bali",
  gambar: "images/sate-lilit-ikan-tuna.jpg",
  deskripsi: "Sate ikan tuna cincang dengan kelapa dan rempah Bali.",
  bahan: ["400 gram ikan tuna", "Kelapa parut", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Daun jeruk"],
  cara: ["Haluskan ikan tuna.", "Campurkan dengan kelapa dan bumbu.", "Lilitkan pada batang serai.", "Panggang hingga matang."]
},
{
  id: 690,
  nama: "Tum Ayam Bali",
  daerah: "Bali",
  gambar: "images/tum-ayam-bali.jpg",
  deskripsi: "Ayam cincang berbumbu yang dibungkus daun pisang dan dikukus.",
  bahan: ["500 gram ayam cincang", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Serai", "Daun pisang"],
  cara: ["Haluskan bumbu.", "Campurkan dengan ayam cincang.", "Bungkus menggunakan daun pisang.", "Kukus hingga ayam matang."]
},
{
  id: 691,
  nama: "Lawar Nangka",
  daerah: "Bali",
  gambar: "images/lawar-nangka.jpg",
  deskripsi: "Olahan nangka muda dengan kelapa dan bumbu Bali.",
  bahan: ["300 gram nangka muda", "Kelapa parut", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Garam"],
  cara: ["Rebus nangka hingga empuk.", "Cincang nangka.", "Tumis bumbu halus.", "Campurkan nangka dan kelapa.", "Aduk hingga matang."]
},
{
  id: 693,
  nama: "Jukut Undis",
  daerah: "Bali",
  gambar: "images/jukut-undis.jpg",
  deskripsi: "Sup kacang undis khas Bali dengan kuah berbumbu.",
  bahan: ["200 gram kacang undis", "Bawang merah", "Bawang putih", "Cabai", "Lengkuas", "Daun salam", "Garam"],
  cara: ["Rebus kacang undis hingga empuk.", "Tumis bumbu.", "Masukkan bumbu ke dalam rebusan.", "Masak hingga kuah meresap."]
},
{
  id: 695,
  nama: "Jaja Wajik Bali",
  daerah: "Bali",
  gambar: "images/jaja-wajik-bali.jpg",
  deskripsi: "Kue ketan manis dengan gula merah dan santan.",
  bahan: ["300 gram beras ketan", "200 gram gula merah", "Santan", "Daun pandan", "Garam"],
  cara: ["Kukus ketan hingga matang.", "Masak gula merah bersama santan dan pandan.", "Masukkan ketan.", "Aduk hingga gula meresap.", "Cetak dan dinginkan."]
},
{
  id: 696,
  nama: "Sop Ikan Kuah Kuning Maluku",
  daerah: "Maluku",
  gambar: "images/sop-ikan-kuah-kuning-maluku.jpg",
  deskripsi: "Sup ikan dengan kunyit, jeruk, dan rempah khas Maluku.",
  bahan: ["500 gram ikan laut", "Kunyit", "Bawang merah", "Bawang putih", "Serai", "Jeruk nipis", "Daun kemangi"],
  cara: ["Bersihkan ikan.", "Tumis bumbu halus dan serai.", "Tambahkan air.", "Masukkan ikan dan masak hingga matang.", "Tambahkan kemangi dan jeruk nipis."]
},
{
  id: 697,
  nama: "Kohu-Kohu Tuna",
  daerah: "Maluku",
  gambar: "images/kohu-kohu-tuna.jpg",
  deskripsi: "Sayuran segar khas Maluku dengan ikan tuna dan kelapa berbumbu.",
  bahan: ["200 gram ikan tuna matang", "Kacang panjang", "Tauge", "Kelapa parut", "Cabai", "Jeruk nipis", "Garam"],
  cara: ["Masak ikan tuna hingga matang lalu suwir.", "Rebus sayuran sebentar.", "Campurkan kelapa dengan bumbu.", "Aduk semua bahan dan tambahkan jeruk nipis."]
},
{
  id: 698,
  nama: "Ikan Kuah Pindang Ambon",
  daerah: "Maluku",
  gambar: "images/ikan-kuah-pindang-ambon.jpg",
  deskripsi: "Ikan berkuah segar dengan rempah dan rasa asam khas Ambon.",
  bahan: ["500 gram ikan", "Tomat", "Cabai", "Bawang merah", "Jahe", "Serai", "Jeruk nipis"],
  cara: ["Bersihkan ikan.", "Didihkan air bersama bawang, jahe, dan serai.", "Tambahkan tomat dan cabai.", "Masukkan ikan.", "Masak hingga matang dan beri jeruk nipis."]
},
{
  id: 699,
  nama: "Papeda Kuah Kuning Tuna",
  daerah: "Papua",
  gambar: "images/papeda-kuah-kuning-tuna.jpg",
  deskripsi: "Papeda sagu yang disajikan dengan ikan tuna kuah kuning.",
  bahan: ["250 gram tepung sagu", "500 gram ikan tuna", "Kunyit", "Bawang merah", "Bawang putih", "Serai", "Jeruk nipis"],
  cara: ["Larutkan sagu dengan air.", "Tuangkan air panas sambil diaduk hingga bening dan mengental.", "Masak ikan bersama bumbu kuah kuning hingga matang.", "Sajikan papeda bersama ikan."]
},
{
  id: 701,
  nama: "Soto Grombyang",
  daerah: "Pemalang, Jawa Tengah",
  gambar: "images/soto-grombyang.jpg",
  deskripsi: "Soto khas Pemalang dengan kuah gurih beraroma rempah.",
  bahan: ["500 gram daging sapi", "1 liter air", "5 siung bawang merah", "3 siung bawang putih", "Ketumbar", "Kluwek", "Garam", "Daun bawang"],
  cara: ["Rebus daging hingga empuk.", "Haluskan bumbu dan tumis hingga harum.", "Masukkan bumbu ke dalam rebusan daging.", "Masak hingga bumbu meresap dan sajikan."]
},
{
  id: 702,
  nama: "Soto Kebo Kudus",
  daerah: "Kudus, Jawa Tengah",
  gambar: "images/soto-kebo-kudus.jpg",
  deskripsi: "Soto khas Kudus dengan kuah bening dan irisan daging kerbau.",
  bahan: ["400 gram daging kerbau", "1 liter air", "Bawang putih", "Bawang merah", "Jahe", "Serai", "Daun salam", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu halus bersama serai dan daun salam.", "Masukkan tumisan ke dalam kaldu.", "Iris daging dan sajikan bersama kuah."]
},
{
  id: 704,
  nama: "Kupat Glabed",
  daerah: "Tegal, Jawa Tengah",
  gambar: "images/kupat-glabed.jpg",
  deskripsi: "Ketupat dengan kuah kental berbumbu khas Tegal.",
  bahan: ["2 buah ketupat", "200 gram kerupuk mi", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Kemiri", "Garam"],
  cara: ["Potong ketupat.", "Tumis bumbu halus hingga harum.", "Masukkan santan dan masak hingga mengental.", "Siramkan kuah pada ketupat dan tambahkan kerupuk."]
},
{
  id: 707,
  nama: "Sate Kalong",
  daerah: "Cirebon, Jawa Barat",
  gambar: "images/sate-kalong.jpg",
  deskripsi: "Sate berbahan daging kerbau dengan bumbu manis gurih.",
  bahan: ["400 gram daging kerbau", "Gula merah", "Kecap manis", "Bawang putih", "Ketumbar", "Asam jawa", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Potong daging kecil-kecil.", "Masak bersama bumbu hingga meresap.", "Tusuk dan panggang sebentar hingga harum."]
},
{
  id: 708,
  nama: "Nasi Tutug Oncom Leunca",
  daerah: "Tasikmalaya, Jawa Barat",
  gambar: "images/nasi-tutug-oncom-leunca.jpg",
  deskripsi: "Nasi berbumbu oncom dengan tambahan leunca.",
  bahan: ["2 piring nasi hangat", "150 gram oncom", "100 gram leunca", "Cabai merah", "Bawang merah", "Bawang putih", "Kencur", "Garam"],
  cara: ["Bakar atau panggang oncom sebentar.", "Haluskan bumbu dan tumis.", "Masukkan oncom dan leunca.", "Campurkan dengan nasi hangat hingga merata."]
},
{
  id: 710,
  nama: "Gepuk Karuhun",
  daerah: "Bandung, Jawa Barat",
  gambar: "images/gepuk-karuhun.jpg",
  deskripsi: "Daging sapi berbumbu rempah dengan rasa gurih manis.",
  bahan: ["500 gram daging sapi", "Santan", "Ketumbar", "Bawang putih", "Bawang merah", "Lengkuas", "Gula merah", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Iris dan pipihkan daging.", "Masak bersama santan dan bumbu hingga meresap.", "Goreng sebentar sebelum disajikan."]
},
{
  id: 712,
  nama: "Doclang Bogor",
  daerah: "Bogor, Jawa Barat",
  gambar: "images/doclang-bogor.jpg",
  deskripsi: "Hidangan lontong khas Bogor dengan siraman saus kacang.",
  bahan: ["Lontong", "Tahu goreng", "Kentang rebus", "Telur rebus", "Kacang tanah", "Cabai", "Bawang putih", "Kecap manis"],
  cara: ["Potong lontong dan kentang.", "Goreng tahu hingga matang.", "Haluskan kacang bersama bumbu.", "Sajikan semua bahan dengan saus kacang."]
},
{
  id: 714,
  nama: "Laksa Cibinong",
  daerah: "Bogor, Jawa Barat",
  gambar: "images/laksa-cibinong.jpg",
  deskripsi: "Laksa dengan kuah santan berbumbu dan aneka pelengkap.",
  bahan: ["Bihun", "Tauge", "Santan", "Serai", "Daun salam", "Bawang merah", "Bawang putih", "Kunyit"],
  cara: ["Tumis bumbu halus bersama serai.", "Tuangkan santan dan masak hingga mendidih.", "Siapkan bihun dan tauge dalam mangkuk.", "Siram kuah santan dan sajikan."]
},
{
  id: 717,
  nama: "Nasi Timbel Komplit",
  daerah: "Jawa Barat",
  gambar: "images/nasi-timbel-komplit.jpg",
  deskripsi: "Nasi hangat dibungkus daun pisang dengan aneka lauk Sunda.",
  bahan: ["Nasi putih", "Daun pisang", "Tahu", "Tempe", "Ayam goreng", "Lalapan", "Sambal terasi"],
  cara: ["Siapkan nasi hangat.", "Bungkus nasi dengan daun pisang.", "Siapkan ayam, tahu, dan tempe yang sudah matang.", "Sajikan bersama lalapan dan sambal."]
},
{
  id: 718,
  nama: "Sop Djanda",
  daerah: "Bogor, Jawa Barat",
  gambar: "images/sop-djanda.jpg",
  deskripsi: "Sup daging sapi dengan kuah rempah dan cita rasa pedas.",
  bahan: ["400 gram daging sapi", "Cabai merah", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Tomat", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu halus hingga harum.", "Masukkan bumbu ke dalam rebusan.", "Tambahkan tomat dan masak hingga matang."]
},
{
  id: 719,
  nama: "Nasi Cikur",
  daerah: "Tasikmalaya, Jawa Barat",
  gambar: "images/nasi-cikur.jpg",
  deskripsi: "Nasi goreng khas Sunda dengan aroma kencur.",
  bahan: ["2 piring nasi", "Kencur", "Bawang merah", "Bawang putih", "Cabai", "Garam", "Daun bawang"],
  cara: ["Haluskan kencur dan bumbu lainnya.", "Tumis bumbu hingga harum.", "Masukkan nasi dan aduk rata.", "Tambahkan daun bawang lalu sajikan."]
},
{
  id: 722,
  nama: "Sate Sapi Blora",
  daerah: "Blora, Jawa Tengah",
  gambar: "images/sate-sapi-blora.jpg",
  deskripsi: "Sate sapi dengan bumbu sederhana dan rasa gurih.",
  bahan: ["400 gram daging sapi", "Bawang putih", "Ketumbar", "Kecap manis", "Jeruk nipis", "Garam"],
  cara: ["Potong daging kecil-kecil.", "Campurkan dengan bumbu.", "Diamkan hingga meresap.", "Tusuk dan panggang hingga matang."]
},
{
  id: 723,
  nama: "Garang Asem Ayam Kampung",
  daerah: "Grobogan, Jawa Tengah",
  gambar: "images/garang-asem-ayam-kampung.jpg",
  deskripsi: "Ayam berbumbu dengan kuah santan asam segar yang dibungkus daun pisang.",
  bahan: ["500 gram ayam", "Santan", "Belimbing wuluh", "Tomat hijau", "Cabai", "Bawang merah", "Bawang putih", "Daun pisang"],
  cara: ["Potong dan bersihkan ayam.", "Campurkan ayam dengan bumbu dan santan.", "Tambahkan belimbing wuluh serta tomat.", "Bungkus dan kukus hingga ayam matang."]
},
{
  id: 724,
  nama: "Nasi Gandul Daging Kerbau",
  daerah: "Pati, Jawa Tengah",
  gambar: "images/nasi-gandul-daging-kerbau.jpg",
  deskripsi: "Nasi dengan kuah gurih berbumbu khas Pati.",
  bahan: ["400 gram daging kerbau", "Santan", "Kluwek", "Bawang merah", "Bawang putih", "Ketumbar", "Daun salam"],
  cara: ["Rebus daging hingga empuk.", "Haluskan dan tumis bumbu.", "Masukkan santan serta kaldu.", "Tambahkan daging dan masak hingga kuah meresap."]
},
{
  id: 727,
  nama: "Jadah Tempe",
  daerah: "Kaliurang, Yogyakarta",
  gambar: "images/jadah-tempe.jpg",
  deskripsi: "Jadah ketan gurih yang disajikan bersama tempe bacem.",
  bahan: ["250 gram beras ketan", "Kelapa parut", "Garam", "Tempe", "Gula merah", "Kecap manis", "Ketumbar"],
  cara: ["Rendam dan kukus ketan hingga matang.", "Campurkan ketan dengan kelapa dan garam.", "Masak tempe bersama bumbu bacem.", "Sajikan jadah bersama tempe."]
},
{
  id: 729,
  nama: "Geplak Bantul",
  daerah: "Bantul, Yogyakarta",
  gambar: "images/geplak-bantul.jpg",
  deskripsi: "Camilan manis berbahan kelapa parut dan gula.",
  bahan: ["250 gram kelapa parut", "150 gram gula pasir", "Air", "Garam", "Pewarna makanan opsional"],
  cara: ["Masak gula dengan sedikit air.", "Masukkan kelapa parut dan garam.", "Aduk hingga adonan mengental.", "Bentuk bulat dan dinginkan."]
},
{
  id: 731,
  nama: "Sate Klopo",
  daerah: "Surabaya, Jawa Timur",
  gambar: "images/sate-klopo.jpg",
  deskripsi: "Sate dengan balutan kelapa parut berbumbu.",
  bahan: ["400 gram daging sapi", "Kelapa parut", "Bawang putih", "Ketumbar", "Kunyit", "Garam", "Kecap manis"],
  cara: ["Potong daging sesuai ukuran sate.", "Campurkan kelapa dengan bumbu halus.", "Balurkan pada daging.", "Tusuk dan panggang hingga matang."]
},
{
  id: 733,
  nama: "Rujak Cemplung",
  daerah: "Banyuwangi, Jawa Timur",
  gambar: "images/rujak-cemplung.jpg",
  deskripsi: "Rujak buah dengan kuah bumbu pedas manis.",
  bahan: ["Mangga muda", "Bengkuang", "Nanas", "Timun", "Gula merah", "Cabai", "Asam jawa", "Garam"],
  cara: ["Potong semua buah.", "Haluskan cabai dan gula merah.", "Tambahkan asam jawa dan air.", "Campurkan buah dengan kuah bumbu."]
},
{
  id: 735,
  nama: "Nasi Boranan",
  daerah: "Lamongan, Jawa Timur",
  gambar: "images/nasi-boranan.jpg",
  deskripsi: "Nasi khas Lamongan dengan lauk dan sambal boranan.",
  bahan: ["Nasi putih", "Ayam", "Tempe", "Tahu", "Bumbu merah", "Cabai", "Bawang merah", "Bawang putih"],
  cara: ["Siapkan nasi dan lauk yang sudah matang.", "Haluskan bumbu sambal.", "Tumis bumbu hingga harum.", "Sajikan nasi bersama lauk dan sambal."]
},
{
  id: 736,
  nama: "Soto Kletuk",
  daerah: "Blora, Jawa Tengah",
  gambar: "images/soto-kletuk.jpg",
  deskripsi: "Soto berkuah bening dengan taburan kletuk singkong renyah.",
  bahan: ["400 gram ayam", "1 liter air", "Bawang putih", "Bawang merah", "Jahe", "Serai", "Singkong", "Garam"],
  cara: ["Rebus ayam hingga matang.", "Tumis bumbu dan masukkan ke dalam kaldu.", "Potong singkong kecil lalu goreng hingga renyah.", "Sajikan soto dengan taburan singkong."]
},
{
  id: 737,
  nama: "Sate Kere Mbah Tug",
  daerah: "Solo, Jawa Tengah",
  gambar: "images/sate-kere-mbah-tug.jpg",
  deskripsi: "Sate berbahan tempe gembus dengan bumbu khas.",
  bahan: ["Tempe gembus", "Kecap manis", "Bawang putih", "Ketumbar", "Gula merah", "Garam"],
  cara: ["Potong tempe gembus.", "Masak bersama bumbu hingga meresap.", "Tusuk potongan tempe.", "Panggang sebentar hingga harum."]
},
{
  id: 738,
  nama: "Nasi Bogana",
  daerah: "Tegal, Jawa Tengah",
  gambar: "images/nasi-bogana.jpg",
  deskripsi: "Nasi gurih dengan aneka lauk dan pelengkap tradisional.",
  bahan: ["Nasi gurih", "Ayam suwir", "Telur rebus", "Tempe", "Serundeng", "Sambal", "Daun pisang"],
  cara: ["Siapkan nasi gurih.", "Masak ayam dan tempe dengan bumbu.", "Siapkan telur serta serundeng.", "Susun seluruh lauk bersama nasi dan sajikan."]
},
{
  id: 739,
  nama: "Nasi Megono Pekalongan",
  daerah: "Pekalongan, Jawa Tengah",
  gambar: "images/nasi-megono-pekalongan.jpg",
  deskripsi: "Nasi dengan cacahan nangka muda dan kelapa berbumbu.",
  bahan: ["Nangka muda", "Kelapa parut", "Bawang merah", "Bawang putih", "Cabai", "Kencur", "Daun salam", "Garam"],
  cara: ["Cincang nangka muda dan kukus hingga empuk.", "Campurkan kelapa dengan bumbu.", "Kukus campuran hingga matang.", "Sajikan bersama nasi hangat."]
},
{
  id: 740,
  nama: "Soto Sokaraja Daging",
  daerah: "Banyumas, Jawa Tengah",
  gambar: "images/soto-sokaraja-daging.jpg",
  deskripsi: "Soto dengan sambal kacang khas Sokaraja.",
  bahan: ["400 gram daging sapi", "Bihun", "Tauge", "Kacang tanah", "Bawang putih", "Jahe", "Daun bawang", "Kerupuk"],
  cara: ["Rebus daging hingga empuk.", "Masak kaldu dengan bumbu.", "Haluskan kacang tanah untuk sambal.", "Sajikan daging dan bihun dengan kuah serta sambal kacang."]
},
{
  id: 741,
  nama: "Soto Bathok",
  daerah: "Sleman, Yogyakarta",
  gambar: "images/soto-bathok.jpg",
  deskripsi: "Soto sederhana dengan kuah bening yang biasa disajikan dalam mangkuk batok.",
  bahan: ["400 gram daging sapi", "Tauge", "Seledri", "Bawang putih", "Bawang merah", "Jahe", "Merica", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu halus.", "Masukkan bumbu ke dalam kaldu.", "Sajikan bersama tauge dan seledri."]
},
{
  id: 743,
  nama: "Kue Sagon Bakar",
  daerah: "Jawa Tengah",
  gambar: "images/kue-sagon-bakar.jpg",
  deskripsi: "Kue kering tradisional dari kelapa dan tepung ketan.",
  bahan: ["200 gram kelapa parut", "150 gram tepung ketan", "100 gram gula pasir", "Garam", "Air secukupnya"],
  cara: ["Sangrai kelapa hingga harum.", "Campurkan tepung ketan, gula, dan garam.", "Tambahkan kelapa dan sedikit air.", "Cetak lalu panggang hingga matang."]
},
{
  id: 744,
  nama: "Kue Gandjel Rel",
  daerah: "Semarang, Jawa Tengah",
  gambar: "images/kue-gandjel-rel.jpg",
  deskripsi: "Roti tradisional padat dengan aroma rempah dan taburan wijen.",
  bahan: ["250 gram tepung terigu", "Gula merah", "Kayu manis", "Kapulaga", "Santan", "Wijen", "Garam"],
  cara: ["Larutkan gula merah dengan santan.", "Campurkan tepung dan rempah.", "Uleni hingga menjadi adonan.", "Bentuk dan panggang hingga matang."]
},
{
  id: 748,
  nama: "Kue Grontol Jagung",
  daerah: "Jawa Tengah",
  gambar: "images/kue-grontol-jagung.jpg",
  deskripsi: "Jagung rebus yang disajikan dengan kelapa parut dan gula.",
  bahan: ["300 gram jagung pipil", "Kelapa parut", "Garam", "Gula pasir"],
  cara: ["Rebus jagung hingga empuk.", "Kukus kelapa parut dengan sedikit garam.", "Tiriskan jagung.", "Sajikan dengan kelapa dan gula."]
},
{
  id: 750,
  nama: "Kue Ali Agrem",
  daerah: "Garut, Jawa Barat",
  gambar: "images/kue-ali-agrem.jpg",
  deskripsi: "Kue goreng berbentuk cincin dari tepung beras dan gula merah.",
  bahan: ["250 gram tepung beras", "Gula merah", "Kelapa parut", "Garam", "Minyak goreng"],
  cara: ["Larutkan gula merah.", "Campurkan dengan tepung dan kelapa.", "Uleni hingga bisa dibentuk.", "Bentuk cincin lalu goreng hingga matang."]
},
{
  id: 751,
  nama: "Kue Burayot",
  daerah: "Garut, Jawa Barat",
  gambar: "images/kue-burayot.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dan gula aren.",
  bahan: ["250 gram tepung beras", "Gula aren", "Air", "Garam", "Minyak goreng"],
  cara: ["Larutkan gula aren dengan air.", "Campurkan larutan dengan tepung beras.", "Aduk hingga menjadi adonan.", "Goreng dan bentuk sesuai ciri khasnya hingga matang."]
},
{
  id: 752,
  nama: "Kue Opak Ketan",
  daerah: "Jawa Barat",
  gambar: "images/kue-opak-ketan.jpg",
  deskripsi: "Camilan renyah berbahan beras ketan.",
  bahan: ["250 gram beras ketan", "Kelapa parut", "Garam", "Air"],
  cara: ["Rendam beras ketan lalu kukus.", "Campurkan dengan kelapa dan garam.", "Tumbuk hingga menjadi adonan.", "Pipihkan dan panggang hingga kering."]
},
{
  id: 753,
  nama: "Kue Aliyah",
  daerah: "Banten",
  gambar: "images/kue-aliyah.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dengan rasa manis.",
  bahan: ["Tepung beras", "Gula merah", "Santan", "Garam", "Daun pandan"],
  cara: ["Larutkan gula merah bersama santan.", "Masukkan tepung beras sedikit demi sedikit.", "Aduk hingga adonan halus.", "Masak hingga matang dan sajikan."]
},
{
  id: 754,
  nama: "Rabeg Kambing",
  daerah: "Serang, Banten",
  gambar: "images/rabeg-kambing.jpg",
  deskripsi: "Masakan kambing berkuah rempah dengan cita rasa gurih manis.",
  bahan: ["500 gram daging kambing", "Bawang merah", "Bawang putih", "Jahe", "Kayu manis", "Cengkeh", "Kecap manis", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Tumis bawang dan rempah.", "Masukkan daging dan kaldu.", "Tambahkan kecap lalu masak hingga bumbu meresap."]
},
{
  id: 755,
  nama: "Sate Bandeng Bumbu Serang",
  daerah: "Serang, Banten",
  gambar: "images/sate-bandeng-bumbu-serang.jpg",
  deskripsi: "Olahan bandeng berbumbu yang dipanggang dengan bentuk khas.",
  bahan: ["1 ekor bandeng", "Kelapa parut", "Bawang merah", "Bawang putih", "Ketumbar", "Santan", "Garam"],
  cara: ["Siapkan daging bandeng tanpa duri.", "Campurkan dengan kelapa dan bumbu.", "Masukkan kembali ke kulit bandeng.", "Panggang hingga matang sempurna."]
},
{
  id: 756,
  nama: "Nasi Sumsum",
  daerah: "Serang, Banten",
  gambar: "images/nasi-sumsum.jpg",
  deskripsi: "Nasi berbumbu yang dipadukan dengan sumsum sapi.",
  bahan: ["2 piring nasi", "Sumsum sapi matang", "Bawang merah", "Bawang putih", "Cabai", "Daun pisang", "Garam"],
  cara: ["Tumis bumbu hingga harum.", "Campurkan nasi dengan bumbu dan sumsum yang sudah matang.", "Bungkus dengan daun pisang.", "Panggang sebentar hingga harum."]
},
{
  id: 758,
  nama: "Kue Jojorong",
  daerah: "Banten",
  gambar: "images/kue-jojorong.jpg",
  deskripsi: "Kue lembut dari tepung beras dan santan dengan gula merah.",
  bahan: ["Tepung beras", "Tepung tapioka", "Santan", "Gula merah", "Daun pisang", "Garam"],
  cara: ["Buat wadah kecil dari daun pisang.", "Masak gula merah sebagai lapisan bawah.", "Campurkan tepung dan santan.", "Tuang adonan lalu kukus hingga matang."]
},
{
  id: 759,
  nama: "Ketan Bintul",
  daerah: "Banten",
  gambar: "images/ketan-bintul.jpg",
  deskripsi: "Ketan gurih yang disajikan dengan serundeng kelapa.",
  bahan: ["300 gram beras ketan", "Kelapa parut", "Ketumbar", "Bawang putih", "Garam"],
  cara: ["Rendam dan kukus ketan hingga matang.", "Haluskan bumbu serundeng.", "Sangrai kelapa bersama bumbu.", "Sajikan ketan dengan serundeng."]
},
{
  id: 760,
  nama: "Sambal Buroq",
  daerah: "Banten",
  gambar: "images/sambal-buroq.jpg",
  deskripsi: "Olahan terong dan cabai dengan bumbu khas Banten.",
  bahan: ["Terong", "Cabai merah", "Bawang merah", "Bawang putih", "Tomat", "Terasi", "Garam"],
  cara: ["Potong terong dan masak hingga empuk.", "Haluskan cabai, bawang, tomat, dan terasi.", "Tumis bumbu hingga matang.", "Masukkan terong dan aduk rata."]
},
{
  id: 765,
  nama: "Gulai Jariang",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-jariang.jpg",
  deskripsi: "Gulai jengkol dengan kuah santan dan rempah.",
  bahan: ["300 gram jengkol matang", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Daun salam"],
  cara: ["Siapkan jengkol yang sudah direbus hingga empuk.", "Tumis bumbu halus.", "Tambahkan santan dan rempah.", "Masukkan jengkol dan masak hingga kuah mengental."]
},
{
  id: 766,
  nama: "Asam Durian Sambal",
  daerah: "Sumatera Barat",
  gambar: "images/asam-durian-sambal.jpg",
  deskripsi: "Sambal berbahan fermentasi durian dengan bumbu cabai.",
  bahan: ["100 gram tempoyak", "Cabai merah", "Bawang merah", "Bawang putih", "Serai", "Gula", "Garam"],
  cara: ["Haluskan cabai dan bawang.", "Tumis bumbu hingga matang.", "Masukkan tempoyak dan serai.", "Aduk hingga matang dan bumbu tercampur."]
},
{
  id: 771,
  nama: "Gulai Kapalo Lauak",
  daerah: "Sumatera Barat",
  gambar: "images/gulai-kapalo-lauak.jpg",
  deskripsi: "Gulai kepala ikan dengan kuah santan berbumbu.",
  bahan: ["1 kepala ikan", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Daun kunyit"],
  cara: ["Bersihkan kepala ikan.", "Tumis bumbu halus bersama rempah.", "Tuangkan santan dan aduk perlahan.", "Masukkan kepala ikan dan masak hingga matang."]
},
{
  id: 772,
  nama: "Soto Medan Ayam",
  daerah: "Medan, Sumatera Utara",
  gambar: "images/soto-medan-ayam.jpg",
  deskripsi: "Soto ayam dengan kuah santan kuning yang kaya rempah.",
  bahan: ["500 gram ayam", "Santan", "Serai", "Daun salam", "Bawang merah", "Bawang putih", "Kunyit", "Jahe"],
  cara: ["Rebus ayam hingga matang.", "Tumis bumbu halus dan rempah.", "Masukkan santan dan kaldu.", "Sajikan ayam dengan kuah santan."]
},
{
  id: 773,
  nama: "Mie Sop Medan",
  daerah: "Medan, Sumatera Utara",
  gambar: "images/mie-sop-medan.jpg",
  deskripsi: "Mi dengan kuah kaldu ayam dan aneka pelengkap.",
  bahan: ["Mi kuning", "Ayam", "Kentang", "Wortel", "Bawang putih", "Merica", "Daun bawang", "Seledri"],
  cara: ["Rebus ayam hingga menghasilkan kaldu.", "Masukkan kentang dan wortel.", "Bumbui dengan bawang putih dan merica.", "Sajikan kuah bersama mi dan suwiran ayam."]
},
{
  id: 774,
  nama: "Lontong Medan Sayur",
  daerah: "Medan, Sumatera Utara",
  gambar: "images/lontong-medan-sayur.jpg",
  deskripsi: "Lontong dengan sayur santan dan aneka pelengkap.",
  bahan: ["Lontong", "Labu siam", "Wortel", "Santan", "Bawang merah", "Bawang putih", "Serai", "Daun salam"],
  cara: ["Potong sayuran.", "Tumis bumbu hingga harum.", "Masukkan santan dan sayuran.", "Masak hingga matang lalu sajikan dengan lontong."]
},
{
  id: 775,
  nama: "Bubur Pedas Melayu",
  daerah: "Sumatera Utara",
  gambar: "images/bubur-pedas-melayu.jpg",
  deskripsi: "Bubur beras dengan aneka sayuran dan rempah.",
  bahan: ["Beras", "Kangkung", "Bayam", "Wortel", "Jagung", "Serai", "Bawang merah", "Bawang putih"],
  cara: ["Masak beras dengan air hingga menjadi bubur.", "Haluskan bumbu dan tumis.", "Masukkan sayuran ke dalam bubur.", "Tambahkan bumbu dan masak hingga matang."]
},
{
  id: 776,
  nama: "Kue Talam Ebi",
  daerah: "Sumatera Utara",
  gambar: "images/kue-talam-ebi.jpg",
  deskripsi: "Kue talam gurih dengan taburan ebi berbumbu.",
  bahan: ["Tepung beras", "Tepung tapioka", "Santan", "Garam", "Ebi", "Bawang putih"],
  cara: ["Campurkan tepung dengan santan.", "Tuang ke cetakan kecil.", "Kukus hingga setengah matang.", "Tambahkan ebi tumis dan kukus kembali hingga matang."]
},
{
  id: 777,
  nama: "Kue Bawang Medan",
  daerah: "Medan, Sumatera Utara",
  gambar: "images/kue-bawang-medan.jpg",
  deskripsi: "Camilan renyah berbumbu bawang dan daun seledri.",
  bahan: ["250 gram tepung terigu", "Bawang putih", "Seledri", "Telur", "Margarin", "Garam", "Air"],
  cara: ["Haluskan bawang putih.", "Campurkan semua bahan dan uleni.", "Gilas tipis lalu potong kecil.", "Goreng hingga renyah dan matang."]
},
{
  id: 778,
  nama: "Kue Putri Salju Kacang",
  daerah: "Sumatera Utara",
  gambar: "images/kue-putri-salju-kacang.jpg",
  deskripsi: "Kue kering lembut dengan campuran kacang dan taburan gula.",
  bahan: ["250 gram tepung terigu", "100 gram kacang tanah sangrai", "Margarin", "Gula halus", "Kuning telur"],
  cara: ["Haluskan kacang tanah.", "Campurkan seluruh bahan menjadi adonan.", "Bentuk bulan sabit.", "Panggang hingga matang lalu taburi gula halus."]
},
{
  id: 779,
  nama: "Ikan Sale Gulai",
  daerah: "Sumatera Utara",
  gambar: "images/ikan-sale-gulai.jpg",
  deskripsi: "Ikan sale dengan kuah santan dan rempah khas daerah.",
  bahan: ["Ikan sale", "Santan", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Daun salam"],
  cara: ["Siapkan ikan sale.", "Tumis bumbu halus hingga harum.", "Masukkan santan dan rempah.", "Tambahkan ikan sale dan masak hingga matang."]
},
{
  id: 780,
  nama: "Sambal Teri Medan",
  daerah: "Sumatera Utara",
  gambar: "images/sambal-teri-medan.jpg",
  deskripsi: "Sambal berbahan teri kecil dengan bumbu cabai dan bawang.",
  bahan: ["150 gram teri", "Cabai merah", "Bawang merah", "Bawang putih", "Tomat", "Gula", "Garam"],
  cara: ["Bersihkan dan goreng teri hingga matang.", "Haluskan cabai dan bawang.", "Tumis bumbu hingga matang.", "Masukkan teri dan aduk rata."]
},
{
  id: 781,
  nama: "Gulai Umbut Rotan",
  daerah: "Kalimantan Tengah",
  gambar: "images/gulai-umbut-rotan.jpg",
  deskripsi: "Olahan umbut rotan muda dengan bumbu gulai khas Kalimantan.",
  bahan: ["Umbut rotan muda yang sudah diolah", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Serai", "Garam"],
  cara: ["Siapkan umbut rotan muda yang layak konsumsi.", "Tumis bumbu hingga harum.", "Masukkan santan dan umbut.", "Masak hingga empuk dan matang."]
},
{
  id: 784,
  nama: "Juhu Singkah Santan",
  daerah: "Kalimantan Tengah",
  gambar: "images/juhu-singkah-santan.jpg",
  deskripsi: "Sayur umbut rotan berkuah santan khas masyarakat Dayak.",
  bahan: ["Umbut rotan muda pangan", "Santan", "Bawang merah", "Bawang putih", "Serai", "Kunyit", "Garam"],
  cara: ["Siapkan umbut yang sudah dibersihkan dan diolah dengan benar.", "Tumis bumbu hingga harum.", "Masukkan santan dan umbut.", "Masak hingga empuk dan matang."]
},
{
  id: 787,
  nama: "Nasi Bekepor",
  daerah: "Kutai Kartanegara, Kalimantan Timur",
  gambar: "images/nasi-bekepor.jpg",
  deskripsi: "Nasi gurih tradisional Kutai yang dimasak dengan rempah.",
  bahan: ["Beras", "Santan", "Daun pandan", "Daun salam", "Ikan asin matang", "Cabai", "Bawang merah", "Garam"],
  cara: ["Cuci beras hingga bersih.", "Masak beras bersama santan dan rempah.", "Tambahkan ikan asin matang.", "Aduk hingga nasi matang dan sajikan."]
},
{
  id: 790,
  nama: "Soto Banjar Kuah Susu",
  daerah: "Kalimantan Selatan",
  gambar: "images/soto-banjar-kuah-susu.jpg",
  deskripsi: "Variasi soto Banjar dengan kuah gurih dan rempah harum.",
  bahan: ["500 gram ayam", "Susu cair", "Kaldu ayam", "Kayu manis", "Kapulaga", "Bawang putih", "Bawang merah", "Merica"],
  cara: ["Rebus ayam hingga matang.", "Tumis bumbu dan rempah.", "Campurkan kaldu dengan susu dan bumbu.", "Sajikan bersama suwiran ayam dan pelengkap."]
},
{
  id: 791,
  nama: "Ketupat Kandangan Ikan Gabus",
  daerah: "Kandangan, Kalimantan Selatan",
  gambar: "images/ketupat-kandangan-ikan-gabus.jpg",
  deskripsi: "Ketupat dengan ikan gabus dan kuah santan khas Kandangan.",
  bahan: ["Ketupat", "Ikan gabus", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Garam"],
  cara: ["Masak ikan gabus hingga matang.", "Tumis bumbu hingga harum.", "Masukkan santan dan ikan.", "Sajikan bersama ketupat."]
},
{
  id: 792,
  nama: "Gangan Humbut",
  daerah: "Kalimantan Selatan",
  gambar: "images/gangan-humbut.jpg",
  deskripsi: "Sayur berkuah berbahan umbut kelapa dengan rasa gurih.",
  bahan: ["Umbut kelapa pangan", "Wortel", "Jagung", "Santan", "Bawang merah", "Bawang putih", "Garam"],
  cara: ["Siapkan umbut kelapa yang layak dikonsumsi.", "Rebus umbut bersama jagung dan wortel.", "Tambahkan bumbu dan santan.", "Masak hingga semua bahan matang."]
},
{
  id: 797,
  nama: "Mie Titi Makassar",
  daerah: "Makassar, Sulawesi Selatan",
  gambar: "images/mie-titi-makasar.jpg",
  deskripsi: "Mi kering renyah dengan siraman kuah kental dan aneka isian.",
  bahan: ["Mi telur", "Ayam", "Udang", "Sawi", "Wortel", "Bawang putih", "Tepung maizena", "Garam"],
  cara: ["Masak mi hingga kering dan renyah.", "Tumis bawang putih bersama ayam dan udang.", "Tambahkan sayuran dan air.", "Kentalkan kuah dengan larutan maizena lalu siramkan pada mi."]
},
{
  id: 798,
  nama: "Sop Saudara Makassar",
  daerah: "Makassar, Sulawesi Selatan",
  gambar: "images/sop-saudara-makassar.jpg",
  deskripsi: "Sup daging sapi berempah dengan bihun dan perkedel.",
  bahan: ["400 gram daging sapi", "Bihun", "Kentang", "Bawang merah", "Bawang putih", "Ketumbar", "Jintan", "Serai"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu dan rempah.", "Masukkan bumbu ke dalam kaldu.", "Sajikan dengan bihun dan perkedel kentang."]
},
{
  id: 799,
  nama: "Pisang Ijo Mini",
  daerah: "Makassar, Sulawesi Selatan",
  gambar: "images/pisang-ijo-mini.jpg",
  deskripsi: "Pisang berbalut adonan hijau dengan saus santan manis.",
  bahan: ["Pisang raja", "Tepung terigu", "Tepung beras", "Santan", "Pasta pandan", "Gula pasir", "Sirup merah"],
  cara: ["Buat adonan kulit dari tepung, santan, dan pandan.", "Balut pisang dengan adonan.", "Kukus hingga matang.", "Potong dan sajikan bersama saus santan serta sirup."]
},
{
  id: 800,
  nama: "Kue Barongko Pisang Kepok",
  daerah: "Sulawesi Selatan",
  gambar: "images/kue-barongko-pisang-kepok.jpg",
  deskripsi: "Kue pisang kukus lembut dengan santan dan telur.",
  bahan: ["5 buah pisang kepok matang", "2 butir telur", "Santan", "Gula pasir", "Garam", "Daun pisang"],
  cara: ["Haluskan pisang.", "Campurkan pisang dengan telur, santan, gula, dan garam.", "Bungkus adonan dengan daun pisang.", "Kukus hingga matang dan dinginkan."]
},
{
  id: 801,
  nama: "Nasi Jinggo",
  daerah: "Bali",
  gambar: "images/nasi-jinggo.jpg",
  deskripsi: "Nasi bungkus kecil khas Bali dengan lauk sederhana dan sambal.",
  bahan: ["Nasi putih", "Ayam suwir", "Tempe", "Sambal", "Mie goreng", "Daun pisang"],
  cara: ["Siapkan nasi dan lauk yang sudah matang.", "Buat sambal sesuai selera.", "Letakkan nasi dan lauk di atas daun pisang.", "Bungkus dan sajikan."]
},
{
  id: 802,
  nama: "Serombotan",
  daerah: "Klungkung, Bali",
  gambar: "images/serombotan.jpg",
  deskripsi: "Hidangan sayuran rebus dengan bumbu kelapa dan sambal khas Bali.",
  bahan: ["Kacang panjang", "Bayam", "Tauge", "Terong", "Kelapa parut", "Cabai", "Kencur"],
  cara: ["Rebus sayuran hingga matang.", "Haluskan bumbu kelapa.", "Sangrai kelapa bersama bumbu.", "Sajikan sayuran dengan bumbu dan sambal."]
},
{
  id: 803,
  nama: "Tipat Blayag",
  daerah: "Buleleng, Bali",
  gambar: "images/tipat-blayag.jpg",
  deskripsi: "Ketupat khas Bali dengan kuah bumbu dan aneka pelengkap.",
  bahan: ["Ketupat", "Ayam suwir", "Kacang panjang", "Santan", "Bawang merah", "Bawang putih", "Kunyit"],
  cara: ["Siapkan ketupat dan ayam matang.", "Tumis bumbu hingga harum.", "Masukkan santan dan masak hingga matang.", "Sajikan ketupat dengan kuah dan pelengkap."]
},
{
  id: 804,
  nama: "Jukut Bejek",
  daerah: "Bali",
  gambar: "images/jukut-bejek.jpg",
  deskripsi: "Kacang panjang rebus dengan bumbu santan khas Bali.",
  bahan: ["Kacang panjang", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Kencur", "Garam"],
  cara: ["Rebus kacang panjang hingga matang.", "Haluskan bumbu.", "Campurkan bumbu dengan santan matang.", "Siramkan pada kacang panjang dan sajikan."]
},
{
  id: 805,
  nama: "Ayam Sisit Bali",
  daerah: "Bali",
  gambar: "images/ayam-sisit-bali.jpg",
  deskripsi: "Ayam suwir berbumbu rempah khas Bali.",
  bahan: ["500 gram ayam", "Cabai merah", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Daun jeruk"],
  cara: ["Rebus ayam hingga matang.", "Suwir ayam setelah agak dingin.", "Tumis bumbu halus bersama serai dan daun jeruk.", "Masukkan ayam dan aduk hingga bumbu meresap."]
},
{
  id: 806,
  nama: "Be Pasih Mesambel Matah",
  daerah: "Bali",
  gambar: "images/be-pasih-mesambel-matah.jpg",
  deskripsi: "Ikan matang yang disajikan bersama sambal matah khas Bali.",
  bahan: ["500 gram ikan", "Bawang merah", "Cabai rawit", "Serai", "Daun jeruk", "Jeruk limau", "Minyak kelapa", "Garam"],
  cara: ["Bersihkan dan masak ikan hingga matang.", "Iris bahan sambal matah.", "Campurkan dengan minyak dan jeruk limau.", "Sajikan sambal bersama ikan."]
},
{
  id: 810,
  nama: "Jukut Urab Bali",
  daerah: "Bali",
  gambar: "images/jukut-urab-bali.jpg",
  deskripsi: "Sayuran rebus dengan kelapa parut berbumbu.",
  bahan: ["Kacang panjang", "Tauge", "Bayam", "Kelapa parut", "Cabai", "Bawang putih", "Kencur"],
  cara: ["Rebus semua sayuran.", "Haluskan bumbu.", "Campurkan bumbu dengan kelapa parut.", "Aduk bersama sayuran dan sajikan."]
},
{
  id: 811,
  nama: "Nasi Bakar Cakalang",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/nasi-bakar-cakalang.jpg",
  deskripsi: "Nasi berbumbu dengan isian cakalang yang dibungkus daun pisang.",
  bahan: ["Nasi putih", "Cakalang matang", "Daun kemangi", "Cabai", "Bawang merah", "Bawang putih", "Daun pisang"],
  cara: ["Tumis cakalang bersama bumbu.", "Siapkan nasi dan campurkan dengan kemangi.", "Isi daun pisang dengan nasi dan cakalang.", "Bungkus lalu panggang hingga harum."]
},
{
  id: 812,
  nama: "Pisang Goroho Goreng",
  daerah: "Sulawesi Utara",
  gambar: "images/pisang-goroho-goreng.jpg",
  deskripsi: "Pisang goroho goreng yang biasa disantap bersama sambal.",
  bahan: ["Pisang goroho", "Minyak goreng", "Garam", "Cabai", "Tomat"],
  cara: ["Kupas dan iris pisang.", "Goreng hingga matang.", "Haluskan cabai dan tomat untuk sambal.", "Sajikan pisang bersama sambal."]
},
{
  id: 813,
  nama: "Sayur Pangi",
  daerah: "Minahasa, Sulawesi Utara",
  gambar: "images/sayur-pangi.jpg",
  deskripsi: "Olahan daun pangi dengan bumbu khas Minahasa.",
  bahan: ["Daun pangi yang aman dikonsumsi dan telah diolah", "Bawang merah", "Bawang putih", "Cabai", "Serai", "Garam"],
  cara: ["Siapkan daun pangi yang sudah melalui pengolahan pangan yang benar.", "Tumis bumbu hingga harum.", "Masukkan daun pangi.", "Masak hingga matang dan sajikan."]
},
{
  id: 814,
  nama: "Kukis kacang Kenari",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/kukis-kacang-kenari.jpg",
  deskripsi: "Kue kering dengan campuran kacang kenari.",
  bahan: ["Tepung terigu", "Kacang kenari", "Mentega", "Gula halus", "Telur", "Vanili"],
  cara: ["Sangrai dan cincang kacang kenari.", "Campurkan mentega, gula, dan telur.", "Masukkan tepung dan kacang.", "Bentuk adonan lalu panggang hingga matang."]
},
{
  id: 816,
  nama: "Sambal Roa",
  daerah: "Sulawesi Utara",
  gambar: "images/sambal-roa.jpg",
  deskripsi: "Sambal khas Manado dengan ikan roa yang telah diolah matang.",
  bahan: ["Ikan roa matang", "Cabai merah", "Cabai rawit", "Bawang merah", "Bawang putih", "Tomat", "Garam"],
  cara: ["Siapkan ikan roa yang sudah matang.", "Haluskan cabai dan bawang.", "Tumis bumbu hingga matang.", "Masukkan ikan roa dan aduk rata."]
},
{
  id: 817,
  nama: "Klappertaart Cokelat",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/klappertaart-cokelat.jpg",
  deskripsi: "Variasi klappertaart dengan tambahan rasa cokelat.",
  bahan: ["Kelapa muda", "Susu", "Tepung terigu", "Gula", "Telur", "Cokelat bubuk", "Mentega"],
  cara: ["Campurkan susu, gula, tepung, dan cokelat.", "Masak hingga mengental.", "Masukkan kelapa muda dan telur.", "Panggang hingga matang."]
},
{
  id: 818,
  nama: "Bubur Manado Jagung",
  daerah: "Sulawesi Utara",
  gambar: "images/bubur-manado-jagung.jpg",
  deskripsi: "Bubur beras dengan jagung dan sayuran.",
  bahan: ["Beras", "Jagung", "Bayam", "Labu kuning", "Daun kemangi", "Serai", "Garam"],
  cara: ["Masak beras dengan air hingga menjadi bubur.", "Masukkan jagung dan labu.", "Tambahkan sayuran.", "Masak hingga matang dan sajikan."]
},
{
  id: 819,
  nama: "Ikan Cakalang Rica",
  daerah: "Sulawesi Utara",
  gambar: "images/ikan-cakalang-rica.jpg",
  deskripsi: "Cakalang matang dengan bumbu rica-rica pedas.",
  bahan: ["500 gram cakalang", "Cabai merah", "Cabai rawit", "Bawang merah", "Bawang putih", "Tomat", "Daun jeruk"],
  cara: ["Masak cakalang hingga matang.", "Haluskan cabai dan bawang.", "Tumis bumbu bersama daun jeruk.", "Masukkan cakalang dan aduk hingga meresap."]
},
{
  id: 820,
  nama: "Tinutuan Labu Kuning",
  daerah: "Sulawesi Utara",
  gambar: "images/tinutuan-labu-kuning.jpg",
  deskripsi: "Bubur sayuran dengan labu kuning sebagai bahan utama.",
  bahan: ["Beras", "Labu kuning", "Bayam", "Jagung", "Daun gedi", "Serai", "Garam"],
  cara: ["Masak beras hingga menjadi bubur.", "Masukkan labu dan jagung.", "Tambahkan sayuran.", "Masak hingga seluruh bahan lembut."]
},
{
  id: 821,
  nama: "Burasa",
  daerah: "Sulawesi Selatan",
  gambar: "images/burasa.jpg",
  deskripsi: "Olahan beras dan santan yang dibungkus daun pisang.",
  bahan: ["500 gram beras", "Santan", "Garam", "Daun pisang", "Tali pengikat"],
  cara: ["Masak beras bersama santan hingga setengah matang.", "Bungkus dalam daun pisang.", "Ikat dengan rapi.", "Rebus hingga burasa matang."]
},
{
  id: 822,
  nama: "Pallu Kacci",
  daerah: "Sulawesi Selatan",
  gambar: "images/pallu-kacci.jpg",
  deskripsi: "Masakan ikan berkuah asam dengan bumbu khas Makassar.",
  bahan: ["500 gram ikan", "Asam jawa", "Kunyit", "Bawang merah", "Bawang putih", "Cabai", "Garam"],
  cara: ["Bersihkan ikan.", "Rebus air bersama bumbu dan asam jawa.", "Masukkan ikan.", "Masak hingga ikan matang dan kuah terasa segar."]
},
{
  id: 823,
  nama: "Pallu Mara",
  daerah: "Makassar, Sulawesi Selatan",
  gambar: "images/pallu-mara.jpg",
  deskripsi: "Ikan berkuah kuning dengan rasa asam dan gurih.",
  bahan: ["500 gram ikan", "Kunyit", "Asam jawa", "Bawang merah", "Bawang putih", "Cabai", "Serai"],
  cara: ["Bersihkan ikan.", "Tumis bumbu hingga harum.", "Tambahkan air dan asam jawa.", "Masukkan ikan dan masak hingga matang."]
},
{
  id: 825,
  nama: "Barobbo Jagung",
  daerah: "Sulawesi Selatan",
  gambar: "images/barobbo-jagung.jpg",
  deskripsi: "Bubur jagung dengan sayuran dan bumbu sederhana.",
  bahan: ["Jagung pipil", "Beras", "Bayam", "Labu kuning", "Bawang merah", "Bawang putih", "Garam"],
  cara: ["Masak beras hingga setengah menjadi bubur.", "Masukkan jagung dan labu.", "Tambahkan sayuran dan bumbu.", "Masak hingga seluruh bahan matang."]
},
{
  id: 826,
  nama: "Sanggara Balanda",
  daerah: "Sulawesi Selatan",
  gambar: "images/sanggara-balanda.jpg",
  deskripsi: "Pisang goreng dengan isian kacang dan siraman gula.",
  bahan: ["Pisang raja", "Kacang tanah", "Mentega", "Gula pasir", "Minyak goreng"],
  cara: ["Goreng pisang hingga matang.", "Cincang kacang tanah.", "Campurkan kacang dengan gula dan mentega.", "Belah pisang dan isi dengan campuran kacang."]
},
{
  id: 827,
  nama: "Pisang Ijo Durian",
  daerah: "Sulawesi Selatan",
  gambar: "images/pisang-ijo-durian.jpg",
  deskripsi: "Pisang berbalut adonan hijau dengan saus durian.",
  bahan: ["Pisang raja", "Tepung terigu", "Santan", "Pasta pandan", "Daging durian", "Gula", "Es serut"],
  cara: ["Balut pisang dengan adonan hijau.", "Kukus hingga matang.", "Masak daging durian bersama santan dan gula.", "Sajikan pisang dengan saus durian."]
},
{
  id: 828,
  nama: "Dange",
  daerah: "Pangkep, Sulawesi Selatan",
  gambar: "images/dange.jpg",
  deskripsi: "Penganan tradisional berbahan sagu yang dipanggang.",
  bahan: ["Tepung sagu", "Kelapa parut", "Garam", "Air secukupnya"],
  cara: ["Campurkan tepung sagu dengan kelapa dan garam.", "Tambahkan sedikit air.", "Masukkan ke cetakan.", "Panggang hingga matang."]
},
{
  id: 829,
  nama: "Lawa Bale",
  daerah: "Sulawesi Selatan",
  gambar: "images/lawa-bale.jpg",
  deskripsi: "Hidangan ikan khas Bugis yang dikenal dengan campuran kelapa.",
  bahan: ["Ikan matang", "Kelapa parut", "Jeruk nipis", "Cabai", "Bawang merah", "Garam"],
  cara: ["Gunakan ikan yang telah dimasak hingga aman dikonsumsi.", "Sangrai kelapa parut.", "Campurkan bumbu dan jeruk nipis.", "Aduk bersama ikan dan sajikan."]
},
{
  id: 831,
  nama: "Kue Bagea Sagu",
  daerah: "Maluku",
  gambar: "images/kue-bagea-sagu.jpg",
  deskripsi: "Kue kering berbahan sagu dengan aroma rempah.",
  bahan: ["Tepung sagu", "Gula merah", "Kenari", "Kayu manis", "Telur", "Minyak"],
  cara: ["Sangrai tepung sagu.", "Campurkan gula, telur, dan rempah.", "Masukkan kenari dan tepung.", "Bentuk adonan lalu panggang hingga matang."]
},
{
  id: 832,
  nama: "Kohu-Kohu Sayur",
  daerah: "Maluku",
  gambar: "images/kohu-kohu-sayur.jpg",
  deskripsi: "Campuran sayuran dengan kelapa parut berbumbu.",
  bahan: ["Kacang panjang", "Tauge", "Daun kemangi", "Kelapa parut", "Cabai", "Bawang merah", "Jeruk nipis"],
  cara: ["Rebus sayuran hingga matang.", "Haluskan bumbu.", "Campurkan bumbu dengan kelapa.", "Aduk bersama sayuran dan sajikan."]
},
{
  id: 833,
  nama: "Ikan Kuah Pala Seram",
  daerah: "Pulau Seram, Maluku",
  gambar: "images/ikan-kuah-pala-seram.jpg",
  deskripsi: "Ikan berkuah dengan aroma pala khas Maluku.",
  bahan: ["500 gram ikan", "Buah pala", "Bawang merah", "Bawang putih", "Tomat", "Serai", "Garam"],
  cara: ["Bersihkan ikan.", "Rebus air bersama bumbu dan pala.", "Masukkan ikan dan tomat.", "Masak hingga matang."]
},
{
  id: 835,
  nama: "Kue Asida",
  daerah: "Maluku",
  gambar: "images/kue-asida.jpg",
  deskripsi: "Kue lembut dari tepung dan gula dengan aroma rempah.",
  bahan: ["Tepung terigu", "Gula merah", "Air", "Kayu manis", "Kapulaga", "Mentega", "Garam"],
  cara: ["Larutkan gula merah dengan air dan rempah.", "Masukkan tepung sedikit demi sedikit.", "Aduk di atas api kecil hingga mengental.", "Sajikan dengan mentega."]
},
{
  id: 836,
  nama: "Kue Lapis Pala",
  daerah: "Maluku",
  gambar: "images/kue-lapis-pala.jpg",
  deskripsi: "Kue lapis dengan aroma khas pala.",
  bahan: ["Tepung terigu", "Telur", "Gula", "Susu", "Mentega", "Bubuk pala"],
  cara: ["Kocok telur dan gula.", "Masukkan tepung dan bahan lainnya.", "Tuang adonan sedikit demi sedikit.", "Panggang setiap lapisan hingga matang."]
}, 
{
  id: 838,
  nama: "Sambal Dabu-Dabu Lemong",
  daerah: "Maluku Utara",
  gambar: "images/sambal-dabu-dabu-lemong.jpg",
  deskripsi: "Sambal segar dengan tomat, cabai, dan jeruk lemon.",
  bahan: ["Tomat", "Cabai rawit", "Bawang merah", "Jeruk lemon", "Garam", "Minyak"],
  cara: ["Potong tomat dan bawang.", "Iris cabai.", "Campurkan semua bahan.", "Tambahkan perasan lemon dan minyak."]
},
{
  id: 839,
  nama: "Ikan Kuah Kuning Ternate",
  daerah: "Ternate, Maluku Utara",
  gambar: "images/ikan-kuah-kuning-ternate.jpg",
  deskripsi: "Ikan dengan kuah kuning berbumbu kunyit dan rempah.",
  bahan: ["500 gram ikan", "Kunyit", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Jeruk nipis"],
  cara: ["Bersihkan ikan.", "Tumis bumbu halus bersama serai.", "Tambahkan air dan masukkan ikan.", "Masak hingga ikan matang."]
},
{
  id: 840,
  nama: "Halua Kenari",
  daerah: "Maluku Utara",
  gambar: "images/halua-kenari.jpg",
  deskripsi: "Camilan manis berbahan kacang kenari dan gula.",
  bahan: ["200 gram kacang kenari", "Gula pasir", "Air", "Garam"],
  cara: ["Sangrai kacang kenari.", "Masak gula dengan sedikit air.", "Masukkan kenari dan aduk rata.", "Bentuk sesuai selera lalu dinginkan."]
},
{
  id: 844,
  nama: "Sate Ulat Sagu",
  daerah: "Papua",
  gambar: "images/sate-ulat-sagu.jpg",
  deskripsi: "Makanan tradisional berbahan ulat sagu yang dikenal di sejumlah wilayah Papua.",
  bahan: ["Bahan pangan ulat sagu dari sumber yang terjamin", "Garam", "Jeruk nipis", "Bumbu pilihan"],
  cara: ["Gunakan bahan pangan yang telah diperiksa dan ditangani secara higienis.", "Bumbui sesuai selera.", "Masak hingga matang sempurna.", "Sajikan selagi hangat."]
},
{
  id: 845,
  nama: "Ikan Kuah Asam Papua",
  daerah: "Papua",
  gambar: "images/ikan-kuah-asam-papua.jpg",
  deskripsi: "Ikan berkuah segar dengan tomat dan jeruk.",
  bahan: ["500 gram ikan", "Tomat", "Jeruk nipis", "Bawang merah", "Bawang putih", "Cabai", "Serai"],
  cara: ["Bersihkan ikan.", "Rebus air bersama bumbu.", "Masukkan ikan dan tomat.", "Tambahkan jeruk nipis setelah matang."]
},
{
  id: 849,
  nama: "Aunuve Habre",
  daerah: "Papua",
  gambar: "images/aunuve-habre.jpg",
  deskripsi: "Hidangan ikan tradisional Papua yang dimasak dengan bumbu sederhana.",
  bahan: ["Ikan", "Daun pisang", "Garam", "Jeruk nipis", "Bawang merah"],
  cara: ["Bersihkan ikan.", "Bumbui dengan garam dan jeruk nipis.", "Bungkus menggunakan daun pisang.", "Kukus hingga ikan matang."]
},
{
  id: 850,
  nama: "Kue Bagea Kenari Papua",
  daerah: "Papua",
  gambar: "images/kue-bagea-kenari-papua.jpg",
  deskripsi: "Kue sagu renyah dengan campuran kacang kenari.",
  bahan: ["Tepung sagu", "Kenari", "Gula", "Telur", "Kayu manis", "Minyak"],
  cara: ["Sangrai tepung sagu.", "Campurkan telur, gula, dan rempah.", "Masukkan kenari dan tepung.", "Bentuk lalu panggang hingga matang."]
},
{
  id: 851,
  nama: "Sagu Bakar Papua",
  daerah: "Papua",
  gambar: "images/sagu-bakar-papua.jpg",
  deskripsi: "Penganan sagu tradisional yang dimasak dengan cara dipanggang.",
  bahan: ["Tepung sagu", "Kelapa parut", "Garam", "Air"],
  cara: ["Campurkan sagu dan kelapa.", "Tambahkan garam dan sedikit air.", "Masukkan ke cetakan.", "Panggang hingga matang."]
},
{
  id: 854,
  nama: "Sayur Lilin Papua",
  daerah: "Papua",
  gambar: "images/sayur-lilin-papua.jpg",
  deskripsi: "Olahan bunga tebu atau sayur lilin dengan kuah berbumbu.",
  bahan: ["Sayur lilin yang layak konsumsi", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Garam"],
  cara: ["Bersihkan sayur lilin.", "Tumis bumbu hingga harum.", "Tambahkan santan dan sayur lilin.", "Masak hingga matang."]
},
{
  id: 855,
  nama: "Kue Sagu Mutiara",
  daerah: "Papua",
  gambar: "images/kue-sagu-mutiara.jpg",
  deskripsi: "Kue manis dengan sagu mutiara dan santan.",
  bahan: ["Sagu mutiara", "Santan", "Gula", "Daun pandan", "Garam"],
  cara: ["Rebus sagu mutiara hingga matang.", "Masak santan bersama gula dan pandan.", "Campurkan sagu dengan kuah santan.", "Sajikan hangat atau dingin."]
},
{
  id: 856,
  nama: "Ikan Kuah Asam Kei",
  daerah: "Kepulauan Kei, Maluku",
  gambar: "images/ikan-kuah-asam-kei.jpg",
  deskripsi: "Ikan berkuah segar dengan bumbu asam khas kepulauan.",
  bahan: ["Ikan segar", "Tomat", "Jeruk nipis", "Bawang merah", "Cabai", "Serai", "Garam"],
  cara: ["Bersihkan ikan.", "Rebus bumbu dan air hingga harum.", "Masukkan ikan dan tomat.", "Masak hingga ikan matang."]
},
{
  id: 857,
  nama: "Enbal Keju",
  daerah: "Kepulauan Kei, Maluku",
  gambar: "images/enbal-keju.jpg",
  deskripsi: "Olahan enbal khas Kei dengan tambahan keju.",
  bahan: ["Tepung enbal yang telah diolah aman", "Keju", "Mentega", "Gula", "Garam"],
  cara: ["Siapkan tepung enbal yang sudah melalui pengolahan pangan yang benar.", "Campurkan dengan mentega dan gula.", "Tambahkan keju.", "Panggang hingga matang."]
},
{
  id: 858,
  nama: "Enbal Bubuhuk",
  daerah: "Kepulauan Kei, Maluku",
  gambar: "images/enbal-bubuhuk.jpg",
  deskripsi: "Olahan tradisional berbahan enbal dengan kelapa.",
  bahan: ["Enbal yang telah diolah aman", "Kelapa parut", "Gula merah", "Garam"],
  cara: ["Siapkan enbal yang telah diproses dengan benar.", "Campurkan kelapa dan gula merah.", "Aduk bersama enbal.", "Sajikan sebagai makanan tradisional."]
},
{
  id: 859,
  nama: "Kue Lapis Sagu Ambon",
  daerah: "Ambon, Maluku",
  gambar: "images/kue-lapis-sagu-ambon.jpg",
  deskripsi: "Kue berlapis dengan bahan sagu dan santan.",
  bahan: ["Tepung sagu", "Santan", "Gula", "Telur", "Vanili", "Garam"],
  cara: ["Campurkan tepung, santan, telur, dan gula.", "Bagi adonan menjadi beberapa bagian.", "Tuang adonan secara bertahap.", "Kukus setiap lapisan hingga matang."]
},
{
  id: 860,
  nama: "Kue Koyabu",
  daerah: "Sulawesi Utara",
  gambar: "images/kue-koyabu.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dan kelapa.",
  bahan: ["Tepung beras", "Kelapa parut", "Gula merah", "Daun pandan", "Garam"],
  cara: ["Campurkan tepung beras dengan kelapa.", "Siapkan gula merah sebagai isian.", "Bungkus adonan dengan daun pandan atau daun pisang.", "Kukus hingga matang."]
},
{
  id: 861,
  nama: "Kue Lampu-Lampu",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/kue-lampu-lampu.jpg",
  deskripsi: "Kue kukus lembut dari tepung beras dan santan dengan gula merah.",
  bahan: ["Tepung beras", "Santan", "Gula merah", "Daun pandan", "Daun pisang", "Garam"],
  cara: ["Buat wadah dari daun pisang.", "Letakkan gula merah di dasar wadah.", "Campurkan tepung dengan santan.", "Tuang adonan dan kukus hingga matang."]
},
{
  id: 862,
  nama: "Kue Panada Tuna",
  daerah: "Sulawesi Utara",
  gambar: "images/kue-panada-tuna.jpg",
  deskripsi: "Panada dengan isian ikan tuna berbumbu.",
  bahan: ["Tepung terigu", "Ragi", "Telur", "Santan", "Ikan tuna matang", "Cabai", "Bawang merah"],
  cara: ["Buat adonan roti dan diamkan hingga mengembang.", "Tumis tuna dengan bumbu.", "Isi adonan dengan tuna.", "Bentuk dan goreng hingga matang."]
},
{
  id: 863,
  nama: "Kue Cucur Gula Aren",
  daerah: "Nusantara",
  gambar: "images/kue-cucur-gula-aren.jpg",
  deskripsi: "Kue tradisional berserat dengan rasa manis gula aren.",
  bahan: ["Tepung beras", "Tepung terigu", "Gula aren", "Air", "Garam", "Minyak"],
  cara: ["Larutkan gula aren dengan air.", "Campurkan tepung dan garam.", "Tuangkan larutan gula dan aduk.", "Goreng adonan hingga matang."]
},
{
  id: 865,
  nama: "Kue Pancong Betawi",
  daerah: "Jakarta",
  gambar: "images/kue-pancong-betawi.jpg",
  deskripsi: "Kue kelapa tradisional dengan bagian luar sedikit renyah.",
  bahan: ["Tepung beras", "Kelapa parut", "Santan", "Garam", "Gula pasir"],
  cara: ["Campurkan tepung beras dan kelapa.", "Tambahkan santan dan garam.", "Tuang ke cetakan.", "Panggang hingga matang."]
},
{
  id: 866,
  nama: "Kue Geplak Betawi",
  daerah: "Jakarta",
  gambar: "images/kue-geplak-betawi.jpg",
  deskripsi: "Kue manis berbahan tepung beras dan gula.",
  bahan: ["Tepung beras", "Kelapa parut", "Gula pasir", "Santan", "Garam"],
  cara: ["Sangrai tepung beras.", "Masak gula dan santan.", "Campurkan semua bahan.", "Bentuk sesuai selera dan dinginkan."]
},
{
  id: 868,
  nama: "Pecak Gurame Betawi",
  daerah: "Jakarta",
  gambar: "images/pecak-gurame-betawi.jpg",
  deskripsi: "Ikan gurame matang dengan kuah bumbu pecak.",
  bahan: ["1 ekor gurame", "Cabai", "Bawang merah", "Jahe", "Kencur", "Jeruk limau", "Garam"],
  cara: ["Bersihkan dan masak ikan hingga matang.", "Haluskan bumbu pecak.", "Tambahkan air panas dan jeruk limau.", "Siramkan bumbu pada ikan."]
},
{
  id: 869,
  nama: "Soto Tangkar Betawi",
  daerah: "Jakarta",
  gambar: "images/soto-tangkar-betawi.jpg",
  deskripsi: "Soto iga sapi dengan kuah santan berbumbu.",
  bahan: ["500 gram iga sapi", "Santan", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Serai", "Daun salam"],
  cara: ["Rebus iga hingga empuk.", "Tumis bumbu halus.", "Masukkan santan dan kaldu.", "Tambahkan iga dan masak hingga bumbu meresap."]
},
{
  id: 871,
  nama: "Gabus Pucung Betawi",
  daerah: "Jakarta",
  gambar: "images/gabus-pucung-betawi.jpg",
  deskripsi: "Ikan gabus dengan kuah hitam berbumbu pucung.",
  bahan: ["500 gram ikan gabus", "Pucung atau kluwek", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Garam"],
  cara: ["Bersihkan dan masak ikan hingga matang.", "Haluskan bumbu bersama pucung.", "Tumis bumbu hingga harum.", "Tambahkan air dan ikan lalu masak hingga matang."]
},
{
  id: 872,
  nama: "Kue Pepe Betawi",
  daerah: "Jakarta",
  gambar: "images/kue-pepe-betawi.jpg",
  deskripsi: "Kue lapis kenyal berbahan tepung sagu dan santan.",
  bahan: ["Tepung sagu", "Tepung beras", "Santan", "Gula", "Pasta pandan", "Garam"],
  cara: ["Campurkan tepung, santan, dan gula.", "Bagi adonan dan beri warna.", "Tuang lapisan secara bertahap.", "Kukus hingga seluruh lapisan matang."]
},
{
  id: 873,
  nama: "Soto Mie Jakarta",
  daerah: "Jakarta",
  gambar: "images/soto-mie-jakarta.jpg",
  deskripsi: "Soto mi dengan daging, risol, dan kuah kaldu gurih.",
  bahan: ["Mi kuning", "Daging sapi", "Risol", "Kol", "Tomat", "Bawang putih", "Merica", "Seledri"],
  cara: ["Rebus daging hingga empuk.", "Bumbui kaldu dengan bawang putih dan merica.", "Siapkan mi, kol, dan risol.", "Siram dengan kuah panas."]
},
{
  id: 874,
  nama: "Kue Cucur Pandan Betawi",
  daerah: "Jakarta",
  gambar: "images/kue-cucur-pandan-betawi.jpg",
  deskripsi: "Kue cucur beraroma pandan dengan tekstur berserat.",
  bahan: ["Tepung beras", "Tepung terigu", "Gula", "Pasta pandan", "Air", "Garam"],
  cara: ["Larutkan gula dengan air.", "Campurkan tepung dan pandan.", "Tuang larutan gula lalu aduk.", "Goreng hingga matang."]
},
{
  id: 875,
  nama: "Kue Roti Gambang",
  daerah: "Betawi, Jakarta",
  gambar: "images/kue-roti-gambang.jpg",
  deskripsi: "Roti tradisional berwarna cokelat dengan aroma kayu manis.",
  bahan: ["Tepung terigu", "Gula merah", "Kayu manis", "Soda kue", "Telur", "Wijen"],
  cara: ["Larutkan gula merah.", "Campurkan tepung dan rempah.", "Uleni hingga adonan rata.", "Bentuk roti, taburi wijen, lalu panggang."]
},
{
  id: 877,
  nama: "Sate Bandeng Banten Pedas",
  daerah: "Banten",
  gambar: "images/sate-bandeng-banten-pedas.jpg",
  deskripsi: "Sate bandeng dengan campuran bumbu cabai.",
  bahan: ["Daging bandeng tanpa duri", "Cabai", "Bawang merah", "Bawang putih", "Kelapa parut", "Garam"],
  cara: ["Siapkan daging bandeng tanpa duri.", "Campurkan dengan bumbu dan kelapa.", "Masukkan ke kulit bandeng.", "Panggang hingga matang."]
},
{
  id: 878,
  nama: "Kue Gipang",
  daerah: "Banten",
  gambar: "images/kue-gipang.jpg",
  deskripsi: "Camilan renyah dari beras ketan dengan lapisan gula.",
  bahan: ["Beras ketan", "Gula merah", "Air", "Asam jawa"],
  cara: ["Masak ketan hingga matang dan keringkan.", "Goreng atau olah ketan hingga mengembang.", "Masak gula merah hingga mengental.", "Campurkan ketan dan gula lalu bentuk."]
},
{
  id: 879,
  nama: "Kue Satu Kacang Hijau",
  daerah: "Nusantara",
  gambar: "images/kue-satu-kacang-hijau.jpg",
  deskripsi: "Kue kering tradisional dari tepung kacang hijau.",
  bahan: ["Kacang hijau", "Gula halus", "Air", "Vanili"],
  cara: ["Sangrai kacang hijau lalu haluskan.", "Campurkan dengan gula halus.", "Tambahkan sedikit air hingga dapat dicetak.", "Cetak dan keringkan hingga kokoh."]
},
{
  id: 880,
  nama: "Kue Sumpia Ebi",
  daerah: "Nusantara",
  gambar: "images/kue-sumpia-ebi.jpg",
  deskripsi: "Camilan renyah berbentuk gulungan kecil dengan isian ebi.",
  bahan: ["Kulit lumpia", "Ebi", "Bawang putih", "Gula", "Garam", "Minyak"],
  cara: ["Haluskan ebi dan bawang.", "Tumis isian hingga matang.", "Isi kulit lumpia dan gulung kecil.", "Goreng hingga renyah."]
},
{
  id: 881,
  nama: "Kue Keciput",
  daerah: "Nusantara",
  gambar: "images/kue-keciput.jpg",
  deskripsi: "Kue kecil renyah dengan taburan biji wijen.",
  bahan: ["Tepung ketan", "Telur", "Gula", "Santan", "Wijen", "Garam"],
  cara: ["Campurkan tepung, telur, gula, dan santan.", "Bentuk adonan menjadi bulatan kecil.", "Gulingkan dalam wijen.", "Goreng hingga matang."]
},
{
  id: 882,
  nama: "Kue Semprong",
  daerah: "Nusantara",
  gambar: "images/kue-semprong.jpg",
  deskripsi: "Kue tipis renyah dengan aroma santan.",
  bahan: ["Tepung beras", "Telur", "Santan", "Gula", "Vanili", "Wijen"],
  cara: ["Campurkan semua bahan menjadi adonan cair.", "Tuang tipis pada cetakan.", "Panggang hingga kering.", "Gulung selagi hangat."]
},
{
  id: 883,
  nama: "Kue Sagu Keju",
  daerah: "Nusantara",
  gambar: "images/kue-sagu-keju.jpg",
  deskripsi: "Kue kering berbahan tepung sagu dengan rasa keju.",
  bahan: ["Tepung sagu", "Keju parut", "Mentega", "Gula halus", "Telur", "Santan"],
  cara: ["Sangrai tepung sagu.", "Kocok mentega dan gula.", "Masukkan telur, keju, dan tepung.", "Cetak dan panggang hingga matang."]
},
{
  id: 884,
  nama: "Kue Akar Kelapa",
  daerah: "Betawi, Jakarta",
  gambar: "images/kue-akar-kelapa.jpg",
  deskripsi: "Kue kering berbentuk menyerupai akar dengan rasa gurih manis.",
  bahan: ["Tepung ketan", "Tepung beras", "Kelapa parut", "Telur", "Gula", "Santan"],
  cara: ["Campurkan seluruh bahan.", "Uleni hingga adonan bisa dicetak.", "Cetak menggunakan cetakan khusus.", "Goreng hingga matang dan renyah."]
},
{
  id: 885,
  nama: "Kue Tambang",
  daerah: "Nusantara",
  gambar: "images/kue-tambang.jpg",
  deskripsi: "Kue goreng berbentuk kepang dengan rasa manis.",
  bahan: ["Tepung terigu", "Telur", "Gula", "Margarin", "Santan", "Garam"],
  cara: ["Campurkan seluruh bahan.", "Uleni hingga kalis.", "Bentuk memanjang dan kepang.", "Goreng hingga matang."]
},
{
  id: 886,
  nama: "Kue Lidah Kucing Pandan",
  daerah: "Nusantara",
  gambar: "images/kue-lidah-kucing-pandan.jpg",
  deskripsi: "Kue tipis renyah dengan aroma pandan.",
  bahan: ["Tepung terigu", "Mentega", "Gula halus", "Putih telur", "Pasta pandan"],
  cara: ["Kocok mentega dan gula.", "Masukkan putih telur dan tepung.", "Tambahkan pandan.", "Cetak memanjang dan panggang hingga matang."]
},
{
  id: 887,
  nama: "Kue Nastar Nanas",
  daerah: "Nusantara",
  gambar: "images/kue-nastar-nanas.jpg",
  deskripsi: "Kue kering berisi selai nanas.",
  bahan: ["Tepung terigu", "Mentega", "Telur", "Gula halus", "Selai nanas"],
  cara: ["Campurkan mentega, telur, dan gula.", "Masukkan tepung hingga menjadi adonan.", "Isi adonan dengan selai nanas.", "Bentuk dan panggang hingga matang."]
},
{
  id: 888,
  nama: "Kue Putri Salju Pandan",
  daerah: "Nusantara",
  gambar: "images/kue-putri-salju-pandan.jpg",
  deskripsi: "Kue kering lembut dengan aroma pandan dan taburan gula.",
  bahan: ["Tepung terigu", "Mentega", "Gula halus", "Kacang mete", "Pasta pandan"],
  cara: ["Haluskan kacang mete.", "Campurkan semua bahan menjadi adonan.", "Bentuk sesuai selera.", "Panggang lalu taburi gula halus."]
},
{
  id: 890,
  nama: "Kue Bolu Kemojo Pandan",
  daerah: "Riau",
  gambar: "images/kue-bolu-kemojo-pandan.jpg",
  deskripsi: "Bolu tradisional Riau dengan aroma pandan dan santan.",
  bahan: ["Tepung terigu", "Telur", "Santan", "Gula", "Mentega", "Pasta pandan"],
  cara: ["Kocok telur dan gula.", "Masukkan tepung dan santan.", "Tambahkan mentega serta pandan.", "Tuang ke cetakan dan panggang hingga matang."]
},
{
  id: 891,
  nama: "Mie Sagu Selatpanjang",
  daerah: "Kepulauan Meranti, Riau",
  gambar: "images/mie-sagu-selatpanjang.jpg",
  deskripsi: "Mi berbahan sagu dengan tumisan sayuran dan bumbu.",
  bahan: ["Mi sagu", "Tauge", "Daun kucai", "Bawang putih", "Cabai", "Udang matang", "Kecap"],
  cara: ["Siapkan mi sagu.", "Tumis bawang dan cabai.", "Masukkan udang dan sayuran.", "Tambahkan mi dan bumbu lalu aduk hingga matang."]
},
{
  id: 893,
  nama: "Gulai Ikan Baung",
  daerah: "Riau",
  gambar: "images/gulai-ikan-baung.jpg",
  deskripsi: "Ikan baung dimasak dengan kuah santan berbumbu.",
  bahan: ["500 gram ikan baung", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Daun kunyit"],
  cara: ["Bersihkan ikan.", "Tumis bumbu hingga harum.", "Masukkan santan dan rempah.", "Tambahkan ikan dan masak hingga matang."]
},
{
  id: 895,
  nama: "Gulai Belacan Udang",
  daerah: "Riau",
  gambar: "images/gulai-belacan-udang.jpg",
  deskripsi: "Udang dengan kuah santan dan bumbu belacan khas Melayu.",
  bahan: ["300 gram udang", "Santan", "Belacan", "Cabai", "Bawang merah", "Bawang putih", "Serai"],
  cara: ["Bersihkan udang.", "Haluskan bumbu bersama belacan.", "Tumis bumbu lalu masukkan santan.", "Tambahkan udang dan masak hingga matang."]
},
{
  id: 897,
  nama: "Kue Asidah Riau",
  daerah: "Riau",
  gambar: "images/kue-asidah-riau.jpg",
  deskripsi: "Kue lembut berbahan tepung dan gula dengan aroma rempah.",
  bahan: ["Tepung terigu", "Gula merah", "Air", "Kayu manis", "Kapulaga", "Mentega"],
  cara: ["Larutkan gula merah bersama rempah.", "Masukkan tepung sedikit demi sedikit.", "Aduk hingga mengental.", "Sajikan dengan mentega."]
},
{
  id: 898,
  nama: "Kue Bolu Berendam",
  daerah: "Indragiri Hulu, Riau",
  gambar: "images/kue-bolu-berendam.jpg",
  deskripsi: "Bolu lembut yang disajikan dengan siraman kuah gula.",
  bahan: ["Telur", "Tepung terigu", "Gula", "Vanili", "Gula merah", "Air"],
  cara: ["Kocok telur dan gula.", "Masukkan tepung dan vanili.", "Panggang adonan hingga matang.", "Siram bolu dengan larutan gula."]
},
{
  id: 903,
  nama: "Soto Sokaraja Ayam",
  daerah: "Banyumas, Jawa Tengah",
  gambar: "images/soto-sokaraja-ayam.jpg",
  deskripsi: "Soto ayam dengan kuah gurih yang disajikan bersama sambal kacang khas Sokaraja.",
  bahan: ["Ayam", "Soun", "Ketupat", "Kacang tanah", "Bawang putih", "Kemiri", "Kunyit", "Daun bawang"],
  cara: ["Rebus ayam hingga matang dan suwir.", "Tumis bumbu halus hingga harum.", "Masukkan bumbu ke dalam kaldu ayam.", "Sajikan dengan soun, ketupat, ayam suwir, dan sambal kacang."]
},
{
  id: 906,
  nama: "Garang Asem Ayam Kudus",
  daerah: "Kudus, Jawa Tengah",
  gambar: "images/garang-asem-ayam-kudus.jpg",
  deskripsi: "Olahan ayam berkuah asam segar dengan belimbing wuluh dan santan.",
  bahan: ["Ayam", "Santan", "Belimbing wuluh", "Cabai", "Bawang merah", "Bawang putih", "Daun salam", "Tomat"],
  cara: ["Potong ayam dan siapkan bumbu.", "Campurkan ayam dengan santan dan bumbu.", "Tambahkan belimbing wuluh dan tomat.", "Bungkus dengan daun pisang dan kukus hingga matang."]
},
{
  id: 907,
  nama: "Nasi Gandul Komplit",
  daerah: "Pati, Jawa Tengah",
  gambar: "images/nasi-gandul-komplit.jpg",
  deskripsi: "Nasi dengan kuah gurih daging sapi dan pelengkap khas Pati.",
  bahan: ["Nasi putih", "Daging sapi", "Santan", "Bawang merah", "Bawang putih", "Ketumbar", "Jintan", "Gula merah"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu halus hingga matang.", "Masukkan santan dan daging.", "Masak hingga kuah mengental lalu sajikan dengan nasi."]
},
{
  id: 908,
  nama: "Sate Kere Tempe Gembus",
  daerah: "Solo, Jawa Tengah",
  gambar: "images/sate-kere-tempe-gembus.jpg",
  deskripsi: "Sate berbahan tempe gembus dengan bumbu kacang yang gurih.",
  bahan: ["Tempe gembus", "Kacang tanah", "Kecap manis", "Bawang putih", "Ketumbar", "Gula merah", "Garam"],
  cara: ["Potong tempe gembus.", "Ungkep bersama bumbu hingga meresap.", "Tusuk potongan tempe.", "Panggang hingga kecokelatan dan sajikan dengan saus kacang."]
},
{
  id: 910,
  nama: "Kipo",
  daerah: "Kotagede, Yogyakarta",
  gambar: "images/kipo.jpg",
  deskripsi: "Kue kecil berwarna hijau dari tepung ketan dengan isian kelapa manis.",
  bahan: ["Tepung ketan", "Pasta pandan", "Santan", "Kelapa parut", "Gula merah", "Garam"],
  cara: ["Masak kelapa dan gula merah menjadi isian.", "Campurkan tepung ketan, pandan, dan santan.", "Isi adonan dengan kelapa manis.", "Panggang di atas wajan hingga matang."]
},
{
  id: 912,
  nama: "Nasi Tiwul Gunungkidul",
  daerah: "Gunungkidul, Yogyakarta",
  gambar: "images/nasi-tiwul-gunungkidul.jpg",
  deskripsi: "Hidangan berbahan tepung gaplek yang dikukus dan biasa disantap dengan lauk.",
  bahan: ["Tepung gaplek", "Air", "Kelapa parut", "Garam", "Daun pisang"],
  cara: ["Percikkan air sedikit demi sedikit ke tepung gaplek.", "Aduk hingga membentuk butiran.", "Kukus hingga matang.", "Sajikan dengan kelapa parut dan lauk pendamping."]
},
{
  id: 914,
  nama: "Soto Kemiri",
  daerah: "Pati, Jawa Tengah",
  gambar: "images/soto-kemiri.jpg",
  deskripsi: "Soto ayam berkuah gurih dengan kemiri sebagai salah satu bumbu utamanya.",
  bahan: ["Ayam", "Kemiri", "Bawang merah", "Bawang putih", "Kunyit", "Serai", "Daun salam", "Tauge"],
  cara: ["Rebus ayam hingga matang.", "Haluskan bumbu dan tumis hingga harum.", "Masukkan bumbu ke dalam kaldu.", "Sajikan dengan ayam suwir dan tauge."]
},
{
  id: 917,
  nama: "Pindang Tetel",
  daerah: "Pekalongan, Jawa Tengah",
  gambar: "images/pindang-tetel.jpg",
  deskripsi: "Masakan berkuah dengan potongan daging dan bumbu kluwek khas Pekalongan.",
  bahan: ["Daging sapi", "Kluwek", "Bawang merah", "Bawang putih", "Ketumbar", "Serai", "Daun salam", "Garam"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu halus hingga harum.", "Tambahkan kluwek dan masukkan ke dalam kaldu.", "Masak hingga bumbu meresap."]
},
{
  id: 919,
  nama: "Lontong Dekem",
  daerah: "Pemalang, Jawa Tengah",
  gambar: "images/lontong-dekem.jpg",
  deskripsi: "Lontong dengan kuah santan berbumbu dan taburan kelapa sangrai.",
  bahan: ["Lontong", "Ayam", "Santan", "Bawang merah", "Bawang putih", "Ketumbar", "Serai", "Kelapa parut"],
  cara: ["Rebus ayam hingga empuk.", "Tumis bumbu halus dan masukkan ke dalam kuah santan.", "Masak hingga ayam matang dan kuah berbumbu.", "Sajikan bersama lontong dan kelapa sangrai."]
},
{
  id: 920,
  nama: "Opor Bebek",
  daerah: "Jawa Tengah",
  gambar: "images/opor-bebek.jpg",
  deskripsi: "Olahan bebek berkuah santan dengan bumbu opor yang harum.",
  bahan: ["Bebek", "Santan", "Bawang merah", "Bawang putih", "Kemiri", "Kunyit", "Serai", "Daun salam"],
  cara: ["Bersihkan bebek dan potong sesuai kebutuhan.", "Tumis bumbu halus bersama serai.", "Masukkan bebek dan santan.", "Masak hingga bebek empuk dan kuah meresap."]
},
{
  id: 921,
  nama: "Sate Kambing Tegal",
  daerah: "Tegal, Jawa Tengah",
  gambar: "images/sate-kambing-tegal.jpg",
  deskripsi: "Sate kambing khas Tegal dengan potongan daging yang dibakar dan disajikan bersama kecap.",
  bahan: ["Daging kambing", "Kecap manis", "Bawang merah", "Cabai rawit", "Tomat", "Jeruk limau", "Garam"],
  cara: ["Potong daging menjadi ukuran kecil.", "Tusuk daging menggunakan tusuk sate.", "Panggang hingga matang sempurna.", "Sajikan dengan kecap, bawang, cabai, dan tomat."]
},
{
  id: 923,
  nama: "Soto Tauco Tegal",
  daerah: "Tegal, Jawa Tengah",
  gambar: "images/soto-tauco-tegal.jpg",
  deskripsi: "Soto dengan campuran tauco yang memberikan rasa gurih dan sedikit khas fermentasi.",
  bahan: ["Daging ayam", "Tauco", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Soun", "Daun bawang"],
  cara: ["Rebus ayam hingga matang.", "Tumis bumbu dan tauco hingga harum.", "Masukkan ke dalam kaldu ayam.", "Sajikan dengan soun dan ayam suwir."]
},
{
  id: 925,
  nama: "Sop Senerek",
  daerah: "Magelang, Jawa Tengah",
  gambar: "images/sop-senerek.jpg",
  deskripsi: "Sup kacang merah dengan sayuran dan potongan daging yang menghangatkan.",
  bahan: ["Kacang merah", "Daging sapi", "Wortel", "Bayam", "Bawang putih", "Merica", "Daun bawang", "Garam"],
  cara: ["Rebus kacang merah hingga empuk.", "Rebus daging hingga matang.", "Masukkan wortel dan bumbu.", "Tambahkan bayam dan daun bawang sebelum disajikan."]
},
{
  id: 927,
  nama: "Soto Ayam Semarang",
  daerah: "Semarang, Jawa Tengah",
  gambar: "images/soto-ayam-semarang.jpg",
  deskripsi: "Soto ayam berkuah bening dengan suwiran ayam dan pelengkap sederhana.",
  bahan: ["Ayam", "Soun", "Tauge", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Daun bawang"],
  cara: ["Rebus ayam hingga matang.", "Tumis bumbu halus hingga harum.", "Masukkan bumbu ke dalam kaldu.", "Sajikan dengan soun, tauge, dan ayam suwir."]
},
{
  id: 928,
  nama: "Tahu Petis Semarang",
  daerah: "Semarang, Jawa Tengah",
  gambar: "images/tahu-petis-semarang.jpg",
  deskripsi: "Tahu goreng dengan isian atau cocolan petis udang yang gurih manis.",
  bahan: ["Tahu putih", "Petis udang", "Bawang putih", "Cabai rawit", "Gula merah", "Air", "Garam"],
  cara: ["Potong dan goreng tahu hingga kecokelatan.", "Haluskan bawang putih dan cabai.", "Masak petis bersama bumbu dan sedikit air.", "Sajikan tahu bersama saus petis."]
},
{
  id: 930,
  nama: "Sega Berkat",
  daerah: "Tuban, Jawa Timur",
  gambar: "images/sega-berkat.jpg",
  deskripsi: "Nasi dengan aneka lauk tradisional yang disajikan dalam bungkus daun jati.",
  bahan: ["Nasi putih", "Ayam bumbu", "Telur pindang", "Serundeng", "Tempe", "Sambal", "Daun jati"],
  cara: ["Siapkan nasi dan aneka lauk matang.", "Masak ayam dengan bumbu pilihan.", "Siapkan serundeng dan telur pindang.", "Susun seluruh lauk bersama nasi dan bungkus daun jati."]
},
{
  id: 931,
  nama: "Soto Lamongan Ceker",
  daerah: "Lamongan, Jawa Timur",
  gambar: "images/soto-lamongan-ceker.jpg",
  deskripsi: "Soto ayam dengan tambahan ceker dan taburan koya gurih.",
  bahan: ["Ayam", "Ceker ayam", "Kunyit", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Kerupuk udang"],
  cara: ["Rebus ayam dan ceker hingga matang.", "Tumis bumbu halus hingga harum.", "Masukkan bumbu ke dalam kaldu.", "Sajikan dengan ayam suwir, ceker, dan koya."]
},
{
  id: 932,
  nama: "Sego Sambel",
  daerah: "Surabaya, Jawa Timur",
  gambar: "images/sego-sambel.jpg",
  deskripsi: "Nasi hangat dengan sambal pedas dan lauk sederhana khas Surabaya.",
  bahan: ["Nasi putih", "Ikan goreng", "Tempe", "Tahu", "Cabai rawit", "Tomat", "Bawang merah", "Terasi"],
  cara: ["Goreng ikan, tahu, dan tempe hingga matang.", "Goreng bahan sambal sebentar.", "Ulek cabai, tomat, bawang, dan terasi matang.", "Sajikan sambal bersama nasi dan lauk."]
},
{
  id: 934,
  nama: "Nasi Krawu Komplit",
  daerah: "Gresik, Jawa Timur",
  gambar: "images/nasi-krawu-komplit.jpg",
  deskripsi: "Nasi dengan suwiran daging sapi, serundeng, dan sambal terasi.",
  bahan: ["Nasi putih", "Daging sapi", "Kelapa parut", "Bawang merah", "Bawang putih", "Ketumbar", "Cabai", "Terasi"],
  cara: ["Rebus daging bersama bumbu hingga empuk.", "Suwir daging dan masak kembali hingga berbumbu.", "Sangrai kelapa dengan bumbu menjadi serundeng.", "Sajikan nasi bersama daging, serundeng, dan sambal."]
},
{
  id: 935,
  nama: "Bebek Songkem",
  daerah: "Sampang, Madura",
  gambar: "images/bebek-songkem.jpg",
  deskripsi: "Bebek berbumbu pedas yang dimasak dengan cara dikukus dalam daun pisang.",
  bahan: ["Bebek", "Cabai merah", "Cabai rawit", "Bawang merah", "Bawang putih", "Kencur", "Daun pisang", "Garam"],
  cara: ["Bersihkan bebek dan siapkan bumbu halus.", "Lumuri bebek dengan bumbu hingga merata.", "Bungkus dengan daun pisang.", "Kukus hingga bebek matang dan empuk."]
},
{
  id: 938,
  nama: "Soto Madura Daging",
  daerah: "Madura, Jawa Timur",
  gambar: "images/soto-madura-daging.jpg",
  deskripsi: "Soto daging dengan kuah rempah yang disajikan bersama kentang dan telur.",
  bahan: ["Daging sapi", "Telur rebus", "Kentang", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Serai"],
  cara: ["Rebus daging hingga empuk.", "Tumis bumbu halus dan rempah.", "Masukkan bumbu ke dalam kaldu.", "Sajikan dengan daging, kentang, dan telur."]
},
{
  id: 939,
  nama: "Rujak Petis Madura",
  daerah: "Madura, Jawa Timur",
  gambar: "images/rujak-petis-madura.jpg",
  deskripsi: "Rujak sayuran dan buah dengan saus petis yang gurih dan pedas.",
  bahan: ["Mentimun", "Tauge", "Kangkung", "Tahu", "Lontong", "Petis", "Kacang tanah", "Cabai"],
  cara: ["Rebus sayuran hingga matang.", "Goreng tahu dan potong-potong.", "Ulek petis, kacang, cabai, dan bumbu.", "Campurkan semua bahan dengan saus."]
},
{
  id: 941,
  nama: "Ayam Lodho Tulungagung",
  daerah: "Tulungagung, Jawa Timur",
  gambar: "images/ayam-lodho-tulungagung.jpg",
  deskripsi: "Ayam berbumbu yang dipanggang lalu dimasak dengan kuah santan pedas.",
  bahan: ["Ayam", "Santan", "Cabai", "Bawang merah", "Bawang putih", "Kunyit", "Kencur", "Serai"],
  cara: ["Panggang ayam hingga matang dan harum.", "Tumis bumbu halus bersama serai.", "Masukkan santan dan ayam panggang.", "Masak hingga kuah meresap."]
},
{
  id: 942,
  nama: "Nasi Gegok",
  daerah: "Trenggalek, Jawa Timur",
  gambar: "images/nasi-gegok.jpg",
  deskripsi: "Nasi bungkus daun pisang dengan sambal teri pedas khas Trenggalek.",
  bahan: ["Beras", "Ikan teri", "Cabai rawit", "Bawang merah", "Bawang putih", "Daun pisang", "Daun salam", "Garam"],
  cara: ["Masak nasi hingga setengah matang.", "Tumis teri bersama sambal berbumbu.", "Letakkan nasi dan sambal di atas daun pisang.", "Bungkus dan kukus hingga matang."]
},
{
  id: 943,
  nama: "Nasi Boran",
  daerah: "Lamongan, Jawa Timur",
  gambar: "images/nasi-boran.jpg",
  deskripsi: "Nasi dengan aneka lauk dan sambal khas Lamongan.",
  bahan: ["Nasi putih", "Ikan bandeng", "Tempe", "Tahu", "Bumbu kelapa", "Cabai", "Bawang merah", "Bawang putih"],
  cara: ["Siapkan nasi dan lauk yang sudah dimasak.", "Buat bumbu kelapa dengan rempah.", "Masak sambal hingga matang.", "Sajikan nasi bersama lauk dan bumbu."]
},
{
  id: 946,
  nama: "Rujak Kuah Pindang",
  daerah: "Bali",
  gambar: "images/rujak-kuah-pindang.jpg",
  deskripsi: "Rujak buah segar dengan kuah kaldu ikan berbumbu khas Bali.",
  bahan: ["Mangga muda", "Kedondong", "Nanas", "Jambu air", "Kaldu ikan matang", "Cabai rawit", "Terasi", "Garam"],
  cara: ["Cuci dan potong buah.", "Siapkan kuah pindang dari kaldu ikan yang sudah matang.", "Ulek cabai, terasi, dan garam.", "Campurkan bumbu dengan kuah lalu siramkan ke buah."]
},
{
  id: 947,
  nama: "Lawar Kuwir",
  daerah: "Bali",
  gambar: "images/lawar-kuwir.jpg",
  deskripsi: "Lawar khas Bali yang menggunakan daging bebek dan kelapa berbumbu.",
  bahan: ["Daging bebek matang", "Kacang panjang", "Kelapa parut", "Bawang merah", "Bawang putih", "Cabai", "Kencur", "Jeruk limau"],
  cara: ["Masak daging bebek hingga matang lalu cincang.", "Rebus kacang panjang dan iris kecil.", "Campurkan kelapa berbumbu dengan daging dan sayuran.", "Tambahkan perasan jeruk limau dan sajikan."]
},
{
  id: 949,
  nama: "Sate Languan",
  daerah: "Klungkung, Bali",
  gambar: "images/sate-languan.jpg",
  deskripsi: "Sate berbahan ikan laut dengan kelapa dan bumbu khas Bali.",
  bahan: ["Ikan laut", "Kelapa parut", "Bawang merah", "Bawang putih", "Cabai", "Kencur", "Daun jeruk", "Garam"],
  cara: ["Haluskan daging ikan.", "Campurkan ikan dengan kelapa dan bumbu.", "Bentuk adonan pada tusuk sate.", "Panggang hingga matang."]
},
{
  id: 950,
  nama: "Sate Kablet",
  daerah: "Bali",
  gambar: "images/sate-kablet.jpg",
  deskripsi: "Sajian sate tradisional berbumbu rempah khas Bali.",
  bahan: ["Daging ayam", "Kelapa parut", "Bawang merah", "Bawang putih", "Kunyit", "Jahe", "Serai", "Garam"],
  cara: ["Potong atau cincang daging ayam.", "Campurkan dengan kelapa dan bumbu halus.", "Bentuk pada tusuk sate.", "Panggang hingga matang sempurna."]
},
{
  id: 951,
  nama: "Nasi Campur Bali",
  daerah: "Bali",
  gambar: "images/nasi-campur-bali.jpg",
  deskripsi: "Nasi dengan aneka lauk berbumbu Bali seperti ayam, sate, sayur, dan sambal.",
  bahan: ["Nasi putih", "Ayam suwir", "Sate lilit", "Sayuran", "Serundeng", "Sambal matah", "Bawang merah", "Cabai"],
  cara: ["Siapkan nasi dan lauk yang telah matang.", "Masak ayam suwir dengan bumbu Bali.", "Siapkan sayuran dan sambal matah.", "Sajikan seluruh lauk bersama nasi."]
},
{
  id: 952,
  nama: "Bebek Timbungan",
  daerah: "Bali",
  gambar: "images/bebek-timbungan.jpg",
  deskripsi: "Bebek berbumbu rempah Bali yang dimasak perlahan dalam bambu.",
  bahan: ["Bebek", "Bumbu base genep", "Santan", "Daun salam", "Serai", "Daun pisang", "Garam"],
  cara: ["Bersihkan bebek dan lumuri dengan bumbu.", "Masukkan bebek ke dalam wadah bambu yang disiapkan khusus untuk memasak.", "Masak dengan panas terkendali hingga matang sempurna.", "Sajikan setelah daging empuk dan bumbu meresap."]
},
{
  id: 954,
  nama: "Jaje Bantal",
  daerah: "Bali",
  gambar: "images/jaje-bantal.jpg",
  deskripsi: "Kue ketan berisi pisang atau kacang yang dibungkus daun kelapa.",
  bahan: ["Beras ketan", "Pisang", "Kacang merah", "Kelapa parut", "Garam", "Daun kelapa muda"],
  cara: ["Rendam ketan dan tiriskan.", "Campurkan ketan dengan kelapa dan garam.", "Isi dengan pisang atau kacang.", "Bungkus menggunakan daun kelapa dan kukus hingga matang."]
},
{
  id: 955,
  nama: "Sumping Waluh",
  daerah: "Bali",
  gambar: "images/sumping-waluh.jpg",
  deskripsi: "Kue kukus berbahan labu kuning, tepung beras, dan kelapa.",
  bahan: ["Labu kuning", "Tepung beras", "Kelapa parut", "Gula merah", "Garam", "Daun pisang"],
  cara: ["Kukus dan haluskan labu kuning.", "Campurkan dengan tepung dan gula.", "Bungkus adonan menggunakan daun pisang.", "Kukus hingga matang."]
},
{
  id: 957,
  nama: "Sate Gurita",
  daerah: "Bali",
  gambar: "images/sate-gurita.jpg",
  deskripsi: "Gurita berbumbu rempah yang ditusuk dan dipanggang hingga matang.",
  bahan: ["Gurita", "Bawang putih", "Kunyit", "Ketumbar", "Jeruk nipis", "Kecap manis", "Garam"],
  cara: ["Bersihkan gurita dengan baik.", "Masak gurita hingga empuk.", "Potong dan lumuri dengan bumbu.", "Tusuk lalu panggang hingga matang."]
},
{
  id: 959,
  nama: "Ikan Kuah Asam Ambon",
  daerah: "Ambon, Maluku",
  gambar: "images/ikan-kuah-asam-ambon.jpg",
  deskripsi: "Sup ikan dengan kuah bening bercita rasa asam segar.",
  bahan: ["Ikan laut", "Tomat", "Belimbing wuluh", "Serai", "Jahe", "Bawang merah", "Cabai", "Daun kemangi"],
  cara: ["Bersihkan ikan dan potong sesuai kebutuhan.", "Rebus air bersama serai, jahe, dan bawang.", "Masukkan ikan, tomat, dan belimbing wuluh.", "Masak hingga ikan matang lalu tambahkan kemangi."]
},
{
  id: 960,
  nama: "Nasi Lapola Kacang Tolo",
  daerah: "Maluku",
  gambar: "images/nasi-lapola-kacang.jpg",
  deskripsi: "Nasi tradisional dengan kacang tolo dan kelapa parut.",
  bahan: ["Beras", "Kacang tolo", "Kelapa parut", "Garam", "Daun pandan"],
  cara: ["Rendam dan rebus kacang tolo hingga empuk.", "Masak beras hingga setengah matang.", "Campurkan kacang, kelapa, dan garam.", "Kukus kembali hingga nasi matang."]
},
{
  id: 961,
  nama: "Kohu-Kohu Ikan Asap",
  daerah: "Maluku",
  gambar: "images/kohu-kohu-ikan-asap.jpg",
  deskripsi: "Salad sayuran khas Maluku dengan ikan asap dan kelapa berbumbu.",
  bahan: ["Ikan asap", "Kacang panjang", "Tauge", "Kelapa parut", "Cabai", "Bawang merah", "Jeruk nipis", "Garam"],
  cara: ["Suwir ikan asap yang sudah matang.", "Rebus kacang panjang dan tauge.", "Campurkan kelapa dengan bumbu.", "Aduk semua bahan dan tambahkan jeruk nipis."]
},
{
  id: 962,
  nama: "Gatang Kenari",
  daerah: "Maluku Utara",
  gambar: "images/gatang-kenari.jpg",
  deskripsi: "Olahan kepiting dengan saus rempah dan taburan kenari khas Maluku Utara.",
  bahan: ["Kepiting", "Kenari", "Bawang merah", "Bawang putih", "Cabai", "Jahe", "Serai", "Jeruk nipis"],
  cara: ["Bersihkan kepiting dan masak hingga matang.", "Tumis bumbu halus bersama serai.", "Masukkan kepiting dan sedikit air.", "Tambahkan kenari sangrai lalu aduk hingga bumbu meresap."]
},
{
  id: 963,
  nama: "Sagu Gula",
  daerah: "Maluku",
  gambar: "images/sagu-gula.jpg",
  deskripsi: "Jajanan tradisional berbahan sagu dengan rasa manis gula merah.",
  bahan: ["Tepung sagu", "Gula merah", "Kelapa parut", "Air", "Garam"],
  cara: ["Sangrai tepung sagu hingga ringan.", "Larutkan gula merah dengan sedikit air.", "Campurkan sagu dengan larutan gula dan kelapa.", "Bentuk dan masak hingga matang."]
},
{
  id: 964,
  nama: "Kue Lontar Kenari",
  daerah: "Papua Barat",
  gambar: "images/kue-lontar-kenari.jpg",
  deskripsi: "Kue pie susu khas Papua dengan isian custard lembut dan tambahan kenari.",
  bahan: ["Tepung terigu", "Mentega", "Telur", "Susu kental manis", "Air", "Kenari cincang"],
  cara: ["Campurkan tepung dan mentega untuk kulit.", "Cetak kulit pada loyang.", "Aduk telur, susu, dan air menjadi isian.", "Tuang isian, taburi kenari, lalu panggang hingga matang."]
},
{
  id: 965,
  nama: "Ikan Bungkus Daun Talas",
  daerah: "Papua",
  gambar: "images/ikan-bungkus-daun-talas.jpg",
  deskripsi: "Ikan berbumbu yang dibungkus daun talas dan dimasak hingga matang.",
  bahan: ["Ikan air tawar", "Daun talas yang aman dikonsumsi", "Bawang merah", "Bawang putih", "Jahe", "Kunyit", "Garam", "Jeruk nipis"],
  cara: ["Bersihkan ikan dan lumuri dengan jeruk nipis.", "Siapkan daun talas yang sudah diolah dengan benar untuk konsumsi.", "Balurkan bumbu pada ikan lalu bungkus.", "Kukus atau masak hingga ikan matang sempurna."]
},
{
  id: 967,
  nama: "Sate Tuna",
  daerah: "Maluku Utara",
  gambar: "images/sate-tuna.jpg",
  deskripsi: "Potongan ikan tuna berbumbu yang dipanggang dan disajikan dengan sambal.",
  bahan: ["Ikan tuna", "Bawang putih", "Ketumbar", "Kunyit", "Jeruk nipis", "Kecap manis", "Garam"],
  cara: ["Potong tuna menjadi ukuran sate.", "Lumuri dengan bumbu dan jeruk nipis.", "Tusuk potongan tuna.", "Panggang hingga matang sempurna."]
},
{
  id: 968,
  nama: "Bubur Sagu Ambon",
  daerah: "Ambon, Maluku",
  gambar: "images/bubur-sagu-ambon.jpg",
  deskripsi: "Bubur manis berbahan sagu yang disajikan dengan kuah santan.",
  bahan: ["Sagu", "Gula merah", "Santan", "Daun pandan", "Garam", "Air"],
  cara: ["Rendam sagu hingga lunak.", "Masak gula merah bersama air dan pandan.", "Masukkan sagu dan aduk hingga mengental.", "Sajikan dengan santan yang sudah dimasak."]
},
{
  id: 969,
  nama: "Kue Cara",
  daerah: "Maluku",
  gambar: "images/kue-cara.jpg",
  deskripsi: "Kue tradisional gurih dengan adonan tepung dan topping ikan berbumbu.",
  bahan: ["Tepung terigu", "Santan", "Telur", "Ikan suwir matang", "Bawang merah", "Cabai", "Daun bawang", "Garam"],
  cara: ["Campurkan tepung, santan, telur, dan garam.", "Siapkan ikan suwir berbumbu.", "Tuang adonan ke cetakan dan tambahkan topping.", "Masak hingga bagian bawah matang dan bagian atas mengeras."]
},
{
  id: 970,
  nama: "Kue Bagea Sagu Kenari",
  daerah: "Maluku",
  gambar: "images/kue-bagea-sagu-kenari.jpg",
  deskripsi: "Kue kering tradisional berbahan sagu dengan tambahan kenari.",
  bahan: ["Tepung sagu", "Kenari", "Gula merah", "Telur", "Kayu manis", "Minyak", "Garam"],
  cara: ["Sangrai tepung sagu.", "Campurkan telur, gula, dan bumbu.", "Masukkan tepung dan kenari hingga menjadi adonan.", "Bentuk kue dan panggang hingga matang."]
},
{
  id: 971,
  nama: "Ikan Kuah Kuning Papua",
  daerah: "Papua",
  gambar: "images/ikan-kuah-kuning-papua.jpg",
  deskripsi: "Ikan dengan kuah kuning berbumbu kunyit dan rempah yang segar.",
  bahan: ["Ikan laut", "Kunyit", "Jahe", "Bawang merah", "Bawang putih", "Serai", "Tomat", "Jeruk nipis"],
  cara: ["Bersihkan ikan dan lumuri jeruk nipis.", "Tumis bumbu halus bersama serai.", "Tambahkan air dan masukkan ikan.", "Masak hingga ikan matang dan kuah berbumbu."]
},
{
  id: 972,
  nama: "Udang Selingkuh Kuah Rempah",
  daerah: "Wamena, Papua Pegunungan",
  gambar: "images/udang-selingkuh-kuah-rempah.jpg",
  deskripsi: "Udang air tawar khas Papua yang dimasak dengan kuah rempah sederhana.",
  bahan: ["Udang selingkuh", "Bawang merah", "Bawang putih", "Jahe", "Tomat", "Serai", "Daun bawang", "Garam"],
  cara: ["Bersihkan udang dan siapkan bumbu.", "Tumis bawang dan jahe hingga harum.", "Tambahkan air, serai, dan tomat.", "Masukkan udang dan masak hingga matang."]
},
{
  id: 973,
  nama: "Aunuve Habre Ikan",
  daerah: "Papua Barat Daya",
  gambar: "images/aunuve-habre-ikan.jpg",
  deskripsi: "Masakan ikan tradisional Papua yang dimasak dengan bumbu sederhana dan daun pembungkus.",
  bahan: ["Ikan laut", "Daun pembungkus yang aman", "Garam", "Bawang merah", "Jeruk nipis", "Jahe"],
  cara: ["Bersihkan ikan dan lumuri dengan jeruk nipis.", "Beri bumbu dan garam secukupnya.", "Bungkus ikan dengan daun yang aman untuk memasak.", "Kukus hingga matang sempurna."]
},
{
  id: 974,
  nama: "Kue Sagu Kelapa Papua",
  daerah: "Papua",
  gambar: "images/kue-sagu-kelapa-papua.jpg",
  deskripsi: "Kue tradisional berbahan sagu dan kelapa dengan tekstur renyah.",
  bahan: ["Tepung sagu", "Kelapa parut", "Gula merah", "Air", "Garam"],
  cara: ["Sangrai tepung sagu.", "Campurkan kelapa dengan gula merah.", "Aduk seluruh bahan hingga tercampur.", "Panggang dalam cetakan hingga matang."]
},
{
  id: 975,
  nama: "Kue Sagu Bakar Manokwari",
  daerah: "Manokwari, Papua Barat",
  gambar: "images/kue-sagu-bakar-manokwari.jpg",
  deskripsi: "Kue sagu panggang tradisional dengan rasa gurih dan aroma kelapa.",
  bahan: ["Tepung sagu", "Kelapa parut", "Gula merah", "Garam", "Air"],
  cara: ["Sangrai tepung sagu.", "Campurkan dengan kelapa dan gula merah.", "Tambahkan sedikit air hingga adonan menyatu.", "Panggang hingga matang dan kering."]
},
{
  id: 976,
  nama: "Ikan Bakar Manokwari Sambal",
  daerah: "Manokwari, Papua Barat",
  gambar: "images/ikan-bakar-manokwari-sambal.jpg",
  deskripsi: "Ikan bakar yang disajikan dengan sambal mentah pedas khas Manokwari.",
  bahan: ["Ikan laut", "Cabai rawit", "Bawang merah", "Tomat", "Jeruk nipis", "Garam", "Minyak"],
  cara: ["Bersihkan ikan dan lumuri dengan garam serta jeruk nipis.", "Panggang ikan hingga matang.", "Iris atau haluskan bahan sambal.", "Siram sambal dengan sedikit minyak panas dan sajikan."]
},
{
  id: 977,
  nama: "Kapurung Palopo",
  daerah: "Palopo, Sulawesi Selatan",
  gambar: "images/kapurung-palopo.jpg",
  deskripsi: "Olahan sagu berbentuk bola kecil dengan kuah sayur dan ikan.",
  bahan: ["Sagu", "Ikan", "Bayam", "Jagung", "Kacang panjang", "Tomat", "Jeruk nipis", "Cabai"],
  cara: ["Masak sagu dengan air panas hingga menjadi adonan kenyal.", "Rebus ikan dan sayuran dalam kuah berbumbu.", "Bentuk sagu menjadi bola kecil menggunakan alat yang bersih.", "Masukkan ke dalam kuah dan sajikan."]
},
{
  id: 979,
  nama: "Es Pisang Ijo Makassar",
  daerah: "Makassar, Sulawesi Selatan",
  gambar: "images/es-pisang-ijo-makassar.jpg",
  deskripsi: "Pisang berbalut adonan hijau dengan bubur sumsum dan sirup manis.",
  bahan: ["Pisang raja", "Tepung terigu", "Tepung beras", "Santan", "Pandan", "Gula", "Es serut", "Sirup"],
  cara: ["Buat adonan hijau dari tepung dan pandan.", "Balut pisang dengan adonan lalu kukus hingga matang.", "Masak bubur sumsum dari tepung beras dan santan.", "Sajikan pisang dengan bubur sumsum, es, dan sirup."]
},
{
  id: 981,
  nama: "Pallu Basa Serigala",
  daerah: "Makassar, Sulawesi Selatan",
  gambar: "images/pallubasa-serigala.jpg",
  deskripsi: "Sup daging khas Makassar dengan kuah rempah dan taburan kelapa sangrai.",
  bahan: ["Daging sapi", "Kelapa parut", "Bawang merah", "Bawang putih", "Ketumbar", "Jintan", "Serai", "Jahe"],
  cara: ["Rebus daging hingga empuk.", "Sangrai kelapa hingga kecokelatan.", "Tumis bumbu halus lalu masukkan ke dalam kaldu.", "Tambahkan kelapa sangrai dan sajikan bersama daging."]
},
{
  id: 982,
  nama: "Burasa Ketan",
  daerah: "Sulawesi Selatan",
  gambar: "images/burasa-ketan.jpg",
  deskripsi: "Olahan beras bersantan yang dibungkus daun pisang dan direbus hingga matang.",
  bahan: ["Beras", "Santan", "Garam", "Daun pisang", "Tali pembungkus makanan"],
  cara: ["Masak beras bersama santan hingga setengah matang.", "Bungkus dalam daun pisang dengan bentuk memanjang.", "Ikat bungkusan dengan rapi.", "Rebus hingga matang dan tiriskan."]
},
{
  id: 983,
  nama: "Nasu Palekko",
  daerah: "Sidrap, Sulawesi Selatan",
  gambar: "images/nasu-palekko.jpg",
  deskripsi: "Masakan bebek pedas khas Bugis dengan bumbu cabai dan rempah.",
  bahan: ["Daging bebek", "Cabai rawit", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Asam jawa", "Garam"],
  cara: ["Potong dan bersihkan daging bebek.", "Tumis bumbu halus hingga harum.", "Masukkan bebek dan sedikit air.", "Masak hingga daging empuk dan bumbu meresap."]
},
{
  id: 984,
  nama: "Bolu Peca Bugis",
  daerah: "Sulawesi Selatan",
  gambar: "images/bolu-peca-bugis.jpg",
  deskripsi: "Kue bolu lembut khas Bugis yang disiram larutan gula merah.",
  bahan: ["Telur", "Tepung beras", "Tepung terigu", "Gula merah", "Air", "Daun pandan"],
  cara: ["Kocok telur hingga mengembang.", "Masukkan tepung dan aduk rata.", "Kukus adonan hingga matang.", "Masak gula merah dengan air dan pandan, lalu siramkan ke bolu."]
},
{
  id: 986,
  nama: "Binte Biluhuta Udang",
  daerah: "Gorontalo",
  gambar: "images/binte-biluhuta-udang.jpg",
  deskripsi: "Sup jagung khas Gorontalo dengan tambahan udang dan kelapa.",
  bahan: ["Jagung manis", "Udang", "Kelapa parut", "Cabai", "Bawang merah", "Daun kemangi", "Jeruk nipis", "Garam"],
  cara: ["Pipil jagung dan rebus hingga empuk.", "Masukkan udang dan masak hingga matang.", "Tambahkan kelapa dan bumbu.", "Sajikan dengan kemangi dan perasan jeruk nipis."]
},
{
  id: 987,
  nama: "Ilabulo",
  daerah: "Gorontalo",
  gambar: "images/ilabulo.jpg",
  deskripsi: "Makanan tradisional berbahan sagu dan hati ampela ayam berbumbu.",
  bahan: ["Tepung sagu", "Hati ayam matang", "Ampela ayam matang", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Daun pisang"],
  cara: ["Potong kecil hati dan ampela yang sudah matang.", "Masak santan bersama bumbu.", "Masukkan sagu dan aduk hingga mengental.", "Campurkan isian, bungkus daun pisang, lalu kukus hingga matang."]
},
{
  id: 988,
  nama: "Sayur Putungo",
  daerah: "Gorontalo",
  gambar: "images/sayur-putungo.jpg",
  deskripsi: "Masakan tradisional berbahan jantung pisang dengan bumbu khas Gorontalo.",
  bahan: ["Jantung pisang", "Santan", "Bawang merah", "Bawang putih", "Cabai", "Kunyit", "Serai", "Daun kemangi"],
  cara: ["Bersihkan jantung pisang dan iris.", "Rebus sebentar hingga lunak.", "Tumis bumbu dan tambahkan santan.", "Masukkan jantung pisang dan masak hingga matang."]
},
{
  id: 989,
  nama: "Kaledo Donggala",
  daerah: "Sulawesi Tengah",
  gambar: "images/kaledo-donggala.jpg",
  deskripsi: "Sup tulang sapi dengan kuah asam segar khas Sulawesi Tengah.",
  bahan: ["Tulang kaki sapi", "Asam jawa", "Cabai rawit", "Garam", "Bawang goreng", "Jeruk nipis", "Air"],
  cara: ["Bersihkan tulang sapi dan rebus hingga empuk.", "Masukkan asam jawa dan cabai.", "Masak hingga kuah memiliki rasa asam segar.", "Sajikan selagi hangat."]
},
{
  id: 991,
  nama: "Lalampa Cakalang",
  daerah: "Sulawesi Utara",
  gambar: "images/lalampa-cakalang.jpg",
  deskripsi: "Ketan berisi ikan cakalang berbumbu yang dibungkus daun pisang dan dibakar.",
  bahan: ["Beras ketan", "Santan", "Ikan cakalang matang", "Cabai", "Bawang merah", "Bawang putih", "Daun kemangi", "Daun pisang"],
  cara: ["Kukus ketan bersama santan hingga matang.", "Masak cakalang suwir dengan bumbu.", "Isi ketan dengan ikan berbumbu.", "Bungkus daun pisang dan bakar hingga harum."]
},
{
  id: 993,
  nama: "Nasi Jaha Manado",
  daerah: "Sulawesi Utara",
  gambar: "images/nasi-jaha-manado.jpg",
  deskripsi: "Nasi ketan bersantan dan rempah yang dimasak dalam bambu.",
  bahan: ["Beras ketan", "Santan", "Jahe", "Serai", "Daun pandan", "Garam", "Daun pisang"],
  cara: ["Rendam beras ketan dan tiriskan.", "Campurkan santan dengan jahe dan rempah.", "Masukkan ketan ke dalam bambu berlapis daun pisang.", "Masak dengan panas terkendali hingga matang."]
},
{
  id: 994,
  nama: "Sambal Dabu-Dabu Iris",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/sambal-dabu-dabu-iris.jpg",
  deskripsi: "Sambal segar khas Manado dengan irisan tomat, bawang, dan cabai.",
  bahan: ["Tomat", "Cabai rawit", "Bawang merah", "Jeruk nipis", "Garam", "Minyak panas"],
  cara: ["Iris tomat, cabai, dan bawang merah.", "Campurkan seluruh bahan.", "Tambahkan garam dan perasan jeruk nipis.", "Siram sedikit minyak panas dan sajikan."]
},
{
  id: 995,
  nama: "Kue Cucur Manado",
  daerah: "Sulawesi Utara",
  gambar: "images/kue-cucur-manado.jpg",
  deskripsi: "Kue tradisional berbahan tepung beras dan gula merah dengan bagian tengah yang lembut.",
  bahan: ["Tepung beras", "Tepung terigu", "Gula merah", "Air", "Garam", "Minyak"],
  cara: ["Larutkan gula merah dengan air lalu dinginkan.", "Campurkan tepung dan larutan gula.", "Aduk hingga adonan halus dan diamkan.", "Goreng dengan minyak secukupnya hingga matang."]
},
{
  id: 996,
  nama: "Tinutuan Cakalang",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/tinutuan-cakalang.jpg",
  deskripsi: "Bubur sayuran khas Manado dengan tambahan ikan cakalang suwir.",
  bahan: ["Beras", "Labu kuning", "Jagung", "Bayam", "Kangkung", "Daun kemangi", "Ikan cakalang matang", "Garam"],
  cara: ["Masak beras dengan air hingga menjadi bubur.", "Masukkan labu dan jagung.", "Tambahkan sayuran hingga matang.", "Sajikan dengan cakalang suwir."]
},
{
  id: 997,
  nama: "Kue Panada Sayur",
  daerah: "Minahasa, Sulawesi Utara",
  gambar: "images/kue-panada-sayur.jpg",
  deskripsi: "Roti goreng berbentuk pastel dengan isian sayuran berbumbu.",
  bahan: ["Tepung terigu", "Ragi", "Telur", "Santan", "Wortel", "Kentang", "Bawang merah", "Bawang putih"],
  cara: ["Buat adonan roti dan diamkan hingga mengembang.", "Tumis sayuran bersama bumbu hingga matang.", "Isi adonan dengan sayuran dan rapatkan.", "Goreng hingga kecokelatan."]
},
{
  id: 998,
  nama: "Ayam Rica Daun Kemangi",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/ayam-rica-daun-kemangi.jpg",
  deskripsi: "Ayam pedas berbumbu rica-rica dengan aroma segar daun kemangi.",
  bahan: ["Ayam", "Cabai merah", "Cabai rawit", "Bawang merah", "Bawang putih", "Jahe", "Serai", "Daun kemangi"],
  cara: ["Potong ayam dan siapkan bumbu halus.", "Tumis bumbu bersama serai hingga harum.", "Masukkan ayam dan sedikit air.", "Masak hingga ayam matang lalu tambahkan kemangi."]
},
{
  id: 999,
  nama: "Ikan Cakalang Fufu Rica",
  daerah: "Minahasa, Sulawesi Utara",
  gambar: "images/ikan-cakalang-fufu-rica.jpg",
  deskripsi: "Ikan cakalang asap yang dimasak dengan bumbu rica-rica pedas.",
  bahan: ["Cakalang fufu", "Cabai merah", "Cabai rawit", "Bawang merah", "Bawang putih", "Tomat", "Serai", "Daun jeruk"],
  cara: ["Suwir atau potong cakalang fufu.", "Tumis bumbu halus bersama serai dan daun jeruk.", "Masukkan cakalang dan aduk rata.", "Masak hingga bumbu meresap."]
},
{
  id: 1000,
  nama: "Kue Lampu-Lampu Pandan",
  daerah: "Manado, Sulawesi Utara",
  gambar: "images/kue-lampu-lampu-pandan.jpg",
  deskripsi: "Kue tradisional lembut berbahan tepung beras dan santan dengan aroma pandan.",
  bahan: ["Tepung beras", "Santan", "Gula merah", "Daun pandan", "Garam", "Daun pisang"],
  cara: ["Buat wadah kecil dari daun pisang.", "Campurkan tepung beras, santan, pandan, dan garam.", "Letakkan gula merah di dasar wadah lalu tuangkan adonan.", "Kukus hingga matang dan sajikan setelah agak dingin."]
},
{
  id: 1001,
  nama: "Sagu Tindis",
  daerah: "Papua Tengah",
  gambar: "images/sagu-tindis.jpg",
  deskripsi: "Sagu Tindis merupakan makanan tradisional masyarakat Suku Kamoro di Kabupaten Mimika, Papua Tengah. Hidangan ini menggunakan bahan utama sagu dan kelapa parut yang mencerminkan kekayaan pangan masyarakat pesisir Papua.",
  bahan: [
    "250 gram tepung sagu",
    "100 gram kelapa parut",
    "1/2 sendok teh garam",
    "Air secukupnya"
  ],
  cara: [
    "Campurkan tepung sagu, kelapa parut, dan garam ke dalam wadah.",
    "Tambahkan air sedikit demi sedikit sambil diaduk hingga adonan dapat dipadatkan.",
    "Ambil sebagian adonan dan bentuk menjadi pipih.",
    "Panaskan wajan datar dengan api kecil.",
    "Panggang adonan sambil dibalik hingga matang dan bagian luarnya sedikit kering.",
    "Angkat dan sajikan selagi hangat."
  ]
},
{
  id: 1002,
  nama: "Wataota Kamoro",
  daerah: "Papua Tengah",
  gambar: "images/wataota-kamoro.jpg",
  deskripsi: "Wataota adalah kuliner tradisional Suku Kamoro di Kabupaten Mimika, Papua Tengah. Makanan ini dibuat menggunakan kerang pesisir dan sagu yang dipanggang bersama dalam cangkang kerang.",
  bahan: [
    "250 gram daging kerang segar",
    "100 gram sagu basah",
    "1/2 sendok teh garam",
    "Air secukupnya"
  ],
  cara: [
    "Bersihkan kerang dengan air mengalir dan pastikan kerang masih segar.",
    "Masak kerang hingga matang, kemudian pisahkan dagingnya dari cangkang.",
    "Siapkan cangkang kerang yang sudah dibersihkan dan aman digunakan sebagai wadah.",
    "Letakkan sagu basah pada salah satu bagian cangkang.",
    "Tambahkan daging kerang di atas sagu.",
    "Tutup dengan bagian cangkang lainnya.",
    "Panggang hingga sagu matang dan seluruh isian matang sempurna.",
    "Angkat dan sajikan selagi hangat."
  ]
},

{
  id: 1006,
  nama: "Tetu",
  daerah: "Sulawesi Barat",
  gambar: "images/tetu.jpg",
  deskripsi: "Tetu merupakan kue tradisional khas Mandar yang memiliki tekstur lembut dan rasa manis dari gula merah serta santan.",
  bahan: [
    "Tepung terigu",
    "Santan kelapa",
    "Gula merah",
    "Garam",
    "Daun pandan"
  ],
  cara: [
    "Campurkan tepung terigu, santan, dan sedikit garam hingga rata.",
    "Siapkan wadah kecil dari daun pandan.",
    "Tuangkan adonan ke dalam wadah.",
    "Tambahkan gula merah secukupnya.",
    "Kukus hingga matang dan teksturnya lembut."
  ]
},
{
  id: 1007,
  nama: "Apang Mandar",
  daerah: "Sulawesi Barat",
  gambar: "images/apang-mandar.jpg",
  deskripsi: "Apang Mandar adalah kue tradisional berbahan tepung beras dengan cita rasa manis dan aroma khas gula merah.",
  bahan: [
    "Tepung beras",
    "Gula merah",
    "Air",
    "Ragi",
    "Kelapa parut",
    "Garam"
  ],
  cara: [
    "Larutkan gula merah dengan air lalu dinginkan.",
    "Campurkan tepung beras dan ragi.",
    "Tuangkan larutan gula merah sedikit demi sedikit.",
    "Diamkan adonan hingga mengembang.",
    "Kukus adonan sampai matang.",
    "Sajikan bersama kelapa parut."
  ]
},
{
  id: 1008,
  nama: "Bolu Paranggi",
  daerah: "Sulawesi Barat",
  gambar: "images/bolu-paranggi.jpg",
  deskripsi: "Bolu Paranggi merupakan kue tradisional masyarakat Mandar yang dikenal dengan rasa manis dan aroma gula merah.",
  bahan: [
    "Tepung terigu",
    "Gula merah",
    "Telur",
    "Santan",
    "Baking powder",
    "Garam"
  ],
  cara: [
    "Lelehkan gula merah bersama sedikit santan.",
    "Kocok telur hingga tercampur rata.",
    "Masukkan larutan gula merah.",
    "Tambahkan tepung terigu dan baking powder.",
    "Aduk hingga adonan halus.",
    "Tuangkan ke cetakan dan panggang hingga matang."
  ]
},
{
  id: 1009,
  nama: "Loka Sari",
  daerah: "Sulawesi Barat",
  gambar: "images/loka-sari.jpg",
  deskripsi: "Loka Sari merupakan olahan pisang tradisional yang memanfaatkan pisang matang dengan cita rasa manis dan aroma alami.",
  bahan: [
    "Pisang kepok matang",
    "Santan kelapa",
    "Gula merah",
    "Daun pandan",
    "Garam"
  ],
  cara: [
    "Kupas pisang dan potong sesuai selera.",
    "Rebus santan bersama gula merah dan daun pandan.",
    "Tambahkan sedikit garam.",
    "Masukkan potongan pisang.",
    "Masak dengan api kecil hingga pisang matang dan kuah mengental.",
    "Sajikan selagi hangat."
  ]
},
];

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const detailSection = document.getElementById("detailResep");
const isiDetail = document.getElementById("isiDetail");
const jumlahResep = document.getElementById("jumlahResep");
const tutupDetail = document.getElementById("tutupDetail");

function tampilkanResep(data) {
  container.innerHTML = "";

  jumlahResep.textContent =
    data.length + " resep ditemukan";

  if (data.length === 0) {
    container.innerHTML =
      "<p>Resep tidak ditemukan. Coba kata kunci lain.</p>";
    return;
  }

  data.forEach(function(item) {
    const kartu = document.createElement("article");
    kartu.className = "recipe-card";

    const gambar = document.createElement("img");
    gambar.src = item.gambar;
    gambar.alt = item.nama;
    gambar.loading = "lazy";

    gambar.onerror = function() {
      this.onerror = null;
      this.src =
        "https://placehold.co/600x400?text=Resep+Nusantara";
    };

    const info = document.createElement("div");
    info.className = "recipe-info";

    const judul = document.createElement("h3");
    judul.textContent = item.nama;

    const daerah = document.createElement("p");
    daerah.textContent = item.daerah;

    const deskripsi = document.createElement("p");
    deskripsi.textContent = item.deskripsi;

    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.textContent = "Lihat Resep";
    tombol.addEventListener("click", function() {
      tampilkanDetail(item.id);
    });

    info.append(judul, daerah, deskripsi, tombol);
    kartu.append(gambar, info);
    container.appendChild(kartu);
  });
}

function tampilkanDetail(id) {
  const item = resep.find(function(r) {
    return r.id === id;
  });

  if (!item) return;

  isiDetail.innerHTML = "";

  const judul = document.createElement("h2");
  judul.textContent = item.nama;

  const daerah = document.createElement("p");
  daerah.textContent = "Asal: " + item.daerah;

  const gambar = document.createElement("img");
  gambar.src = item.gambar;
  gambar.alt = item.nama;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = item.deskripsi;

  const judulBahan = document.createElement("h3");
  judulBahan.textContent = "Bahan-bahan";

  const daftarBahan = document.createElement("ul");

  item.bahan.forEach(function(bahan) {
    const li = document.createElement("li");
    li.textContent = bahan;
    daftarBahan.appendChild(li);
  });

  const judulCara = document.createElement("h3");
  judulCara.textContent = "Cara Memasak";

  const daftarCara = document.createElement("ol");

  item.cara.forEach(function(langkah) {
    const li = document.createElement("li");
    li.textContent = langkah;
    daftarCara.appendChild(li);
  });

  isiDetail.append(
    judul,
    daerah,
    gambar,
    deskripsi,
    judulBahan,
    daftarBahan,
    judulCara,
    daftarCara
  );

  detailSection.hidden = false;
  detailSection.scrollIntoView({ behavior: "smooth" });
}

function cariResep(query) {
  const kata = query.trim().toLowerCase();

  if (!kata) {
    tampilkanHasilFilter();
    return;
  }

  const hasil = resep.filter(function(item) {
    return (item.nama || "").toLowerCase().includes(kata) ||
      (item.daerah || "").toLowerCase().includes(kata) ||
      (item.kabupaten || "").toLowerCase().includes(kata) ||
      (item.bahan || []).join(" ").toLowerCase().includes(kata) ||
      (item.deskripsi || "").toLowerCase().includes(kata);
  });

  tampilkanResep(hasil);
  detailSection.hidden = true;
}


// Tombol tutup detail resep.
tutupDetail.addEventListener("click", function() {
  detailSection.hidden = true;

  document.getElementById("resep").scrollIntoView({
    behavior: "smooth"
  });
});


// Menampilkan resep pertama kali.
tampilkanResep(resep);

let daerahDipilih = "";
let kabupatenDipilih = "";


// Mencocokkan resep dengan provinsi.
function resepMasukProvinsi(item, provinsi) {
  const asal = (item.daerah || "").toLowerCase().trim();
  const p = provinsi.toLowerCase().trim();

  const variasi = {
    "dki jakarta": ["dki jakarta", "jakarta", "betawi"],
    "di yogyakarta": ["di yogyakarta", "yogyakarta"],
    "kepulauan bangka belitung": [
      "kepulauan bangka belitung",
      "bangka belitung"
    ]
  };

  if (
    asal.includes("papua dan maluku") ||
    asal.includes("maluku dan papua")
  ) {
    return p === "papua" || p === "maluku";
  }

  if (asal.includes("jakarta / jawa barat")) {
    return p === "dki jakarta" || p === "jawa barat";
  }

  if (asal.includes("yogyakarta dan jawa tengah")) {
    return p === "di yogyakarta" || p === "jawa tengah";
  }

  return (variasi[p] || [p]).some(function(nama) {
    const aman = nama.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pola = new RegExp(
      "(^|[^a-z])" + aman + "($|[^a-z])",
      "i"
    );

    if (!pola.test(asal)) return false;

    if (
      p === "papua" &&
      /papua (barat|tengah|selatan|pegunungan)/i.test(asal)
    ) return false;

    if (p === "maluku" && /maluku utara/i.test(asal)) {
      return false;
    }

    return true;
  });
}


// Menampilkan filter Kabupaten/Kota.
function tampilkanFilterKabupaten(provinsi) {
  const subDaerah = document.getElementById("subDaerah");
  if (!subDaerah) return;

  subDaerah.replaceChildren();
  subDaerah.hidden = false;

  const daftarKabupaten = [
    ...new Map(
      resep
        .filter(function(item) {
          return resepMasukProvinsi(item, provinsi) &&
            item.kabupaten &&
            item.kabupaten.trim();
        })
        .map(function(item) {
          const nama = item.kabupaten.trim();
          return [nama.toLowerCase(), nama];
        })
    ).values()
  ].sort(function(a, b) {
    return a.localeCompare(b, "id");
  });

  const judul = document.createElement("div");
  judul.className = "sub-daerah-judul";
  judul.textContent = "Pilih Kabupaten/Kota:";
  subDaerah.appendChild(judul);

  function buatTombol(nama, nilai) {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "filter-kabupaten";
    tombol.textContent = nama;

    tombol.addEventListener("click", function() {
      kabupatenDipilih = nilai;
// Tombol kembali 
subDaerah.insertAdjacentHTML(
    "afterbegin",
    `<button type="button" id="kembaliDaftarWilayah">
        ← Kembali ke Daftar Wilayah
    </button>`
);

const tombolKembali = document.getElementById(
    "kembaliDaftarWilayah"
);

tombolKembali.addEventListener("click", function() {
    subDaerah.innerHTML = "";
    subDaerah.hidden = true;

    daerahDipilih = "Semua";
    provinsiDipilih = "";
    kabupatenDipilih = "";

    tampilkanResep(resep);

    document.querySelector(".kategori-daerah")
        .scrollIntoView({
            behavior: "smooth"
        });
});
      subDaerah.querySelectorAll(".filter-kabupaten")
        .forEach(function(item) {
          item.classList.remove("aktif");
        });

      tombol.classList.add("aktif");
      tampilkanHasilFilter();
    });

    subDaerah.appendChild(tombol);
  }

  buatTombol("Semua Kabupaten/Kota", "");

  if (daftarKabupaten.length === 0) {
    const pesan = document.createElement("div");
    pesan.className = "sub-daerah-pesan";
    pesan.textContent =
      "Data Kabupaten/Kota belum tersedia untuk provinsi ini.";
    subDaerah.appendChild(pesan);
    return;
  }

  daftarKabupaten.forEach(function(nama) {
    buatTombol(nama, nama);
  });
}


// Menampilkan hasil filter.
function tampilkanHasilFilter() {
  const kata = (searchInput.value || "").trim().toLowerCase();
  let hasil = resep;

  if (daerahDipilih && daerahDipilih !== "Semua") {
    hasil = hasil.filter(function(item) {
      return resepMasukProvinsi(item, daerahDipilih);
    });
  }

  if (kabupatenDipilih) {
    hasil = hasil.filter(function(item) {
      return (item.kabupaten || "").trim().toLowerCase() ===
        kabupatenDipilih.trim().toLowerCase();
    });
  }

  if (kata) {
    hasil = hasil.filter(function(item) {
      return (item.nama || "").toLowerCase().includes(kata) ||
        (item.daerah || "").toLowerCase().includes(kata) ||
        (item.kabupaten || "").toLowerCase().includes(kata) ||
        (item.bahan || []).join(" ").toLowerCase().includes(kata) ||
        (item.deskripsi || "").toLowerCase().includes(kata);
    });
  }

  tampilkanResep(hasil);
  detailSection.hidden = true;
}


// Mengaktifkan tombol provinsi.
function terapkanFilterDaerah() {
  const tombolProvinsi = document.querySelectorAll(".filter-daerah");

  tombolProvinsi.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
      daerahDipilih = tombol.dataset.daerah;
      kabupatenDipilih = "";

      tombolProvinsi.forEach(function(item) {
        item.classList.remove("aktif");
      });

      tombol.classList.add("aktif");

      tampilkanFilterKabupaten(daerahDipilih);
      tampilkanHasilFilter();
    });
  });

  const tombolAktif = document.querySelector(".filter-daerah.aktif");

  if (tombolAktif) {
    daerahDipilih = tombolAktif.dataset.daerah;
    tampilkanFilterKabupaten(daerahDipilih);
  }

  tampilkanHasilFilter();
}
// Pencarian dengan Enter atau tombol Cari Resep.
document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  cariResep(searchInput.value);

  document.getElementById("resep").scrollIntoView({
    behavior: "smooth"
  });
});

terapkanFilterDaerah();
