# Evaluasi Laporan Sesi 2 (10 November 2026)

Berkas: `laporan-sesi-2-2026-11-10.md`. Dievaluasi Claude, 10 November 2026.

## Vonis

Sesi masih di jalur: Tahap 9, tidak loncat tahap, tidak membawa tema 1, keputusan CMM (pendukung
Y kognitif) tidak diubah. Tiga rujukan ber-DOI nyata. Lanjut di sesi baru sesuai siklus, setelah
user memutuskan peran harapan (Oliver) di bawah.

## 1. Tahap

Tahap 9 menurut `riset/tahapan.md`. Laporan tidak menyentuh Tahap 10 ke atas. Indikator afektif
(terkejut, khawatir, tenang/terbantu) ditulis sebagai kandidat, belum final. Sesuai aturan.

## 2. Keputusan terkunci

Tetap. CMM (Eveland, 2001) masih pendukung Y kognitif saja.

Keputusan baru dari user di sesi ChatGPT: memilih "Pilihan A", yaitu Roseman (1984) sebagai
landasan awal, Roseman (1996) sebagai pengembangan, dan Oliver (1980) untuk menelaah harapan dan
diskonfirmasi. Statusnya: **teori dipilih untuk ditelaah, belum dikunci sebagai teori proposal**,
karena laporan sendiri menyebut kecocokannya masih terbuka (hal terbuka nomor 1 sampai 7).

## 3. Cek rujukan (Crossref, OpenAlex, Semantic Scholar, 10 November 2026)

| Rujukan | DOI | Hasil |
|---|---|---|
| Roseman (1996), Cognition and Emotion 10(3), 241-278 | 10.1080/026999396380240 | ada, cocok. Lihat catatan penulis di bawah |
| Oliver (1980), Journal of Marketing Research 17(4), 460-469 | 10.1177/002224378001700405 | ada, cocok |
| Eveland (2001), Communication Research 28(5), 571-601 | 10.1177/009365001028005001 | ada, cocok (sudah dicek di sesi 1) |
| Roseman (1984), bab dalam Shaver (Ed.), Review of Personality and Social Psychology Vol. 5, hlm. 11-36, Sage | tidak ada | **tidak bisa dicek otomatis.** `openalex.py cek` tidak menemukannya (bab buku lama tanpa DOI). Tetap [PERLU VERIFIKASI] |

**Catatan penulis Roseman (1996).** Selesai dicek. Halaman sampul PDF dari penerbit (dikirim
user, 10 November 2026) menulis "Ira J. Roseman (1996)", penulis tunggal, sama dengan Crossref,
OpenAlex, dan Semantic Scholar. Koreksi ChatGPT benar. Ingatan Claude soal tiga penulis keliru.

## 4. Koreksi dan lubang

Fakta:

1. **Pilihan B dan seterusnya hilang lagi.** Laporan mengakui redaksi alternatif selain Pilihan A
   tidak tercatat. Ini masalah yang sama dengan sesi 1. ChatGPT jujur tidak merekonstruksi, itu
   benar, tetapi user jadi tidak punya catatan pembanding.
2. **"PDF telah ditelaah dalam sesi" berarti ditelaah ChatGPT, bukan dibaca user.** Roseman
   (1996) dan Oliver (1980) belum dibaca peneliti. Isi yang boleh diklaim baru sebatas abstrak.
3. **Roseman (1984) belum ada naskahnya.** Bab buku 1984 tidak tersedia di bahan sesi.

Penilaian Claude (opini):

1. **Teori Roseman tidak punya kotak untuk X.** Teori appraisal menjelaskan emosi apa yang muncul
   dari cara orang menilai suatu kejadian. X penelitian ini adalah paparan informasi sebelum
   mendaftar. Jembatannya dua langkah: paparan membentuk perkiraan, lalu perkiraan menentukan
   terasa terduga atau tidaknya angka dari petugas. Langkah pertama (paparan membentuk perkiraan)
   belum punya rujukan. [PERLU RUJUKAN]
2. **Oliver (1980) kemungkinan tumpang-tindih.** Hasil akhir model Oliver adalah kepuasan, bukan
   emosi. Logika "sesuai perkiraan atau tidak" sudah tertampung di appraisal *unexpectedness*
   Roseman. Kalau dua-duanya dipakai, penguji bisa bertanya untuk apa Oliver.
3. **Risiko tambal sulam teori.** Sekarang Y kognitif pakai CMM, Y afektif pakai Roseman ditambah
   Oliver, Y konatif belum ada teorinya. Itu bisa jadi empat teori untuk satu variabel. Untuk
   skripsi S1, pembimbing biasanya minta satu payung yang jelas. Kandidat payung yang rujukannya
   sudah dicek: struktur sikap tiga komponen (Breckler, 1984). Ini dugaan arah, belum ditelaah.
4. **Appraisal tidak diukur.** Desain sekarang hanya mengukur X dan Y. Appraisal dan perkiraan
   tidak diukur, jadi teori hanya dipakai sebagai alasan logis di kerangka pemikiran, bukan diuji.
   Itu sah, tetapi harus ditulis terang supaya tidak diklaim "menguji teori appraisal".
5. **"Tenang/merasa terbantu" dua hal berbeda.** Tenang adalah emosi. Merasa terbantu adalah
   penilaian terhadap layanan petugas, lebih dekat ke kepuasan. Kalau digabung satu indikator,
   butirnya jadi bermuka dua. Ini urusan Tahap 10, dicatat dulu.
6. **Roseman (1984) sebaiknya tidak jadi landasan kalau naskahnya tidak didapat.** Mengutip sumber
   yang tidak dibaca melanggar aturan repo. Jalan aman: Roseman (1996) jadi sumber utama yang
   dibaca, versi 1984 hanya disebut kalau babnya berhasil diperoleh.

Rekomendasi ChatGPT yang menurut Claude benar dan layak dipertahankan: terkejut tidak otomatis
negatif, khawatir dibedakan dari takut, Y tidak langsung digabung satu skor, arah hipotesis
ditahan dulu.

## 5. Keputusan yang ditunggu dari user

Peran harapan dan Oliver (1980):

- **A. Roseman (1996) saja untuk Y afektif, Oliver dilepas.** Logika harapan dijelaskan lewat
  *unexpectedness*. Untung: teori lebih sedikit, lebih mudah dipertahankan. Rugi: tetap butuh satu
  rujukan untuk "paparan membentuk perkiraan".
- **B. Roseman ditambah Oliver sebagai penjelas konseptual** (posisi ChatGPT sekarang). Untung:
  logika harapan punya nama teori. Rugi: Oliver soal kepuasan konsumen, tumpang-tindih, teori
  makin banyak.
- **C. Harapan diukur sebagai variabel perantara.** Untung: mekanisme benar-benar diuji. Rugi:
  desain berubah jadi tiga variabel, kuesioner dan analisis bertambah, melebar dari judul kerja.

Rekomendasi Claude: A.

## 6. Tugas user sebelum sesi 3

1. (Selesai) Penulis Roseman (1996) sudah dicek dari PDF: tunggal.
2. Baca abstrak dan tabel/gambar model di Roseman (1996).
3. Cari tahu apakah bab Roseman (1984) bisa diperoleh (perpustakaan atau pembimbing). Kalau tidak,
   bilang ke Claude.
