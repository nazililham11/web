const resume_items = [
  {
    title: "Pendidikan",
    section: [
      {
        title: "Jurusan Teknik Audio Video",
        subtitle: "SMK Negeri 1 Sidoarjo",
        tags: ["2014-2017"],
        content: [
          "Membuat alat simulasi Penguci pintu dengan pin berbasis Arduino untuk keperluan event pameran karya sidoarjo, 2015",
          "Juara 2 Lomba Line Follower pada event yang diadakan oleh SMK Negeri 2 Buduran, 2016",
          "Student Exchange dengan Muaklek Techincal College Thailand, 2016 ",
          "Magang di JNN Malang sebagai perakit running text dan desain alat custom, 2016",
        ]
      },
      {
        title: "Sarjana Jurusan Informatika",
        subtitle: "Universitas AMIKOM Yogyakarta",
        tags: ["2017-2022"],
        content: [
          `Membuat SmartDam untuk keperluan tugas.
          Alat yang dapat mendeteksi ketinggian air sungai dan menentukan besarnya bedungan yang dibuka, serta terdapat eskalator sampah yang dapat mengangkut semua sampah yang terdapat di bendungan.
          <br>
          <em>🏆 Juara 2 dalam event GKM AMIKOM 2018.</em>`,
          `Membuat Apliaksi BRUANG (Booking Ruang) untuk keperluan tugas.
          Aplikasi mobile yang digunakan untuk booking ruang amikom dan halaman web sebagai halaman admin 
          Aplikasi dibuat dengan Kotlin dan server menggunakan Laravel`,
          `Membuat Game Hunger Monster untuk keperluan tugas.
          Game dibuat dengan menggunakan game engine Construct2`
        ]
      },
    ],
  },
  {
    title: "Pengalaman Projek",
    section: [
      {
        title: "Robot SUMOBOT",
        tags: ["2019", "Arduino"],
        content: `
          Robot yang bertanding di arena untuk menjatuhkan/mengeluarkan lawan dari arena. Robot dibuat dengan Arduino dan dikendalikan menggunakan Joystick yang dimodifikasi dengan arduino dan modul wireless.
          🏆 Juara 4 dalam event KIROFEST Polman Bandung 2019
        `
      },
      {
        title: "ALat Penebangan Hutan Liar",
        tags: ["2019", "Arduino"],
        content: `
          Dibuat Menggunakan Arduino dengan mendeteksi suara yang menyerupai suara gergaji mesin dengan sensor suara kemudian mengirimkan SMS sebagai notifikasi.
        `
      },
      {
        title: "Alat Pendeteksi Jarak",
        tags: ["2019", "Mobile App", "Arduino", "IoT"],
        content: `
          Dibuat dengan arduino dan mendeteksi jarak mengunakan sensor jarak berbasis cahaya kemudian mengirimkan data jarak pada aplkiasi mobile.
          Aplikasi dibuat dengan bahasa kotlin dan berkomunikasi dengan alat pendeteksi menggunakan WiFi dan protokol WebSocket.
        `
      },
      {
        title: "Aplikasi Pencatatan",
        tags: ["2021", "Mobile App"],
        content: `
          Aplikasi mobile yang dibuat dengan bahasa kotlin dan sqlite sebagai media penyimpanan data
        `
      },
      {
        title: "Lampu Jalan Otomatis",
        tags: ["2021", "Arduino"],
        content: `
          Lampu jalan yang dapat meredupkan / mematikan lampu saat tidak ada kendaraan yang lewat. Dibuat dengan Arduino dan dapat mendeteksi kendaraan yang lewat dengan menggunakan sensor jarak kemudain akan membuat lampu menjadi terang.
        `
      },
      {
        title: "Pendeteksi Ganguan Detak Jantung",
        tags: ["2022", "Arduino", "IoT", "Web App"],
        hidden_tags: ["ESP8266", "Arduino", "IoT", "Mobile App",],
        content: `
          Alat yang mendeteksi detak jantung dan dapat mengidentifikasi apakah detak jantung mengalami ganguan Atrial Fibrilasi.
          Alat dibuat dengan ESP8266 dan mendeteksi detak jantung dengan sensor ECG kemudian mengirim data pada web client.
          Web Client dibuat dengan VueJS dan berkomunikasi dengan protokol WebSocket.
        `
      },
    ]
  }
]

export default { resume_items }