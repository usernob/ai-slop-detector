# AI Slop Detector Extension

AI Slop Detector adalah ekstensi peramban ringan yang dirancang untuk mendeteksi apakah suatu media di internet merupakan file asli atau hasil rekayasa kecerdasan buatan (AI). 

Ekstensi ini mendukung tiga mode media utama: Gambar, Audio, dan Video. Untuk menjaga kinerja peramban tetap optimal, seluruh proses deteksi didelegasikan ke server backend terpisah.

## Fitur Utama

- **Dukungan Multi-Media:** Mampu mendeteksi rekayasa AI pada file Gambar, Audio, maupun Video.
- **Metode Pemindaian Fleksibel:**
  - **Klik Kanan (Context Menu):** Pindai media secara instan melalui menu klik kanan pada peramban.
  - **Tombol Injeksi:** Tombol pemindaian yang terintegrasi otomatis pada media yang sedang dilihat di halaman web.
  - **Unggah Manual:** Fasilitas untuk mengunggah file media langsung melalui halaman pengaturan (Options page) ekstensi.
- **Ringan & Aman:** Beban kerja dilakukan di server terpisah yang sudah dilengkapi perlindungan dari beban berlebih.

## Teknologi Utama

- **Frontend:** WXT Framework (TypeScript)
- **Backend:** FastAPI (Python) dan Model AI
