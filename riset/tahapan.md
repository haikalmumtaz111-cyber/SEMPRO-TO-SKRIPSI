# Peta Tahapan: dari Posisi Terakhir sampai File Word

Dibuat: Kamis, 5 November 2026, 10.35 WIB
Deadline: draf utuh tercetak, dibawa ke dosen pembimbing akademik **hari ini siang (sekitar 14.00 WIB)**.

Ini acuan tunggal. Sesi mana pun yang melanjutkan: baca file ini, cari tahap pertama yang belum `[x]`, kerjakan tahap itu saja. Jangan nambah tahap baru tanpa persetujuan user. Kalau ada hal di luar daftar ini, catat di bagian "Parkir" paling bawah, jangan dikerjakan.

## Posisi start

Dari `riset/keputusan.md`: keputusan 1, 2, 3 terkunci. Keputusan 4 baru setengah (wilayah Kabupaten Bandung dan status jemaah bernomor porsi belum berangkat sudah terkunci). Naskah `proposal/proposal.md` masih kerangka kosong.

Yang sudah terkunci:

- X: persepsi kompleksitas persoalan, 4 butir adaptasi Maynard & Hakel (1997).
- Y: kemungkinan memakai layanan tatap muka di kantor, 1 butir mengikuti Ebbers dkk. (2016:510).
- Desain: satu skenario (*vignette*) yang sama untuk semua responden.
- Wilayah: Kabupaten Bandung. Populasi: jemaah bernomor porsi yang belum berangkat.

## Tahapan

Prinsip tiap tahap: ada hasil fisik (file atau isian), ada batas waktu. Lewat batas waktu, yang belum beres diberi tanda `[PERLU ...]` lalu lanjut. Draf bertanda jauh lebih berguna daripada naskah sempurna yang tidak jadi.

| No | Tahap | Hasil fisik | Butuh dari user | Target selesai (WIB) | Status |
|---|---|---|---|---|---|
| 0 | Simpan cerita magang dan peta tahapan ke repo | `riset/fenomena-magang.md`, file ini, `riset/pertanyaan.md` | tidak | 10.45 | [x] |
| 1 | User menjawab daftar pertanyaan | isian di `riset/pertanyaan.md` | **ya** | 11.00 | [ ] |
| 2 | Kunci sisa keputusan 4 dan keputusan metode (reguler/khusus, jalur sebar, jumlah populasi, rumus sampel, teknik sampling, teknik analisis, skala, kata "pengaruh"/"hubungan") | tabel "Setelah empat keputusan terkunci" di `keputusan.md` terisi | ACC saja | 11.05 | [ ] |
| 3 | Verifikasi fakta resmi lewat web: nomenklatur Kemenhaj dan dasar hukumnya, nama aplikasi cek estimasi, nama SISKOHAT, regulasi masa tunggu (klaim 26 tahun), aturan pelimpahan porsi dan pembatalan, kuota Kabupaten Bandung kalau ada | tabel C di `fenomena-magang.md` terisi sumber atau tetap `[PERLU VERIFIKASI]` | tidak | 11.25 | [ ] |
| 4 | Susun instrumen: redaksi skenario, 4 butir X terjemahan adaptasi, 1 butir Y, data identitas responden, lembar persetujuan | lampiran kuesioner di `proposal.md` | tidak | 11.40 | [ ] |
| 5 | Matriks penelitian terdahulu dari folder `Sumber/` (6 sampai 8 yang paling relevan) dan rumusan *research gap* | tabel di `riset/matriks-terdahulu.md` | tidak | 12.00 | [ ] |
| 6 | Tulis naskah sepuluh komponen FDK berurutan: latar belakang, perumusan masalah, tujuan, kegunaan, kerangka pemikiran (teori, skema, matriks operasionalisasi), hipotesis, langkah penelitian a sampai h, daftar pustaka, judul final | `proposal/proposal.md` utuh | tidak | 13.00 | [ ] |
| 7 | Cek konsistensi judul, rumusan, tujuan, hipotesis, matriks, butir, analisis. Jalankan `periksa.py` dan `metrik.py`, sapu pola bahasa AI | naskah bersih, daftar sisa `[PERLU ...]` | tidak | 13.15 | [ ] |
| 8 | Build Word pakai `build_docx.sh`, rapikan halaman sampul | `output/proposal.docx` | cek di HP/laptop | 13.25 | [ ] |
| 9 | Briefing: tiap komponen dijelasin 3 kalimat santai, plus 5 pertanyaan dosen yang paling mungkin dan jawabannya | `riset/briefing-dospem.md` | baca | 13.35 | [ ] |
| 10 | Update `keputusan.md` dan `log.md`, commit, push | commit di `main` | tidak | 13.40 | [ ] |
| 11 | Print, bawa ke dosen | kertas | **ya** | 14.00 | [ ] |

## Default metode kalau user tidak sempat menjawab

Dipakai di tahap 2 kalau jawaban user belum masuk sampai 11.05. Semuanya ditulis jujur di naskah sebagai rencana yang masih bisa direvisi saat seminar.

| Hal | Default | Alasan singkat |
|---|---|---|
| Jenis jemaah | Haji reguler | Pendaftaran reguler dilayani kantor kabupaten. Haji khusus lewat penyelenggara swasta `[PERLU VERIFIKASI]` |
| Jumlah populasi | `[PERLU DATA]` dari kantor | Angka tidak boleh dikarang |
| Rumus sampel | Slovin, galat 10%, kalau N ada. Lemeshow kalau N tidak ada | Slovin disebut panduan FDK |
| Teknik sampling | *Purposive* dengan kriteria (bernomor porsi, belum berangkat, terdaftar di Kabupaten Bandung) | Tidak ada akses daftar lengkap jemaah. Keterbatasan generalisasi ditulis |
| Jalur sebar | Kuesioner daring dan cetak lewat bantuan kantor, tidak hanya di loket | Kalau cuma di loket, semua responden sudah memilih tatap muka (bias, handoff bagian 44) |
| Skala | X dan Y sama-sama 5 poin | Responden banyak yang lansia. Perubahan dari 7 poin Maynard & Hakel ditulis sebagai adaptasi |
| Analisis | Deskriptif, uji validitas (korelasi butir-total), Cronbach untuk X, uji asumsi, regresi linear sederhana. Cadangan: korelasi Spearman kalau asumsi tidak terpenuhi | Bentuk Y skor 1 sampai 5 satu butir |
| Kata di judul | "Hubungan" | Survei potong lintang tidak membuktikan sebab akibat (CLAUDE.md aturan 5) |

## Batas yang tidak boleh dilanggar selama eksekusi

1. Tidak membuka ulang keputusan 1 sampai 3.
2. Tidak menambah variabel.
3. Angka dan regulasi yang belum dicek diberi tanda, tidak dikarang.
4. Komponen yang mentok lebih dari batas waktunya ditandai lalu ditinggal.

## Parkir (ide di luar tahapan, dibahas setelah sempro)

- Media sosial kantor kurang aktif (handoff bagian 9).
- Kanal digital tanpa fitur tanya jawab atau chatbot (dugaan user), cocok jadi bahan saran praktis di kegunaan penelitian.
