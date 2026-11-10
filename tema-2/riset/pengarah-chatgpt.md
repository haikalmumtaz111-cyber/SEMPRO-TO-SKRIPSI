# Peran Claude sebagai Pengarah ChatGPT (Tema 2)

Dibuat: 10 November 2026.

## Pembagian peran

- **ChatGPT** (proyek "Menulis" di akun user): tempat user menyusun proposal tema 2 bersama.
- **Claude** (repo ini): pengarah dan evaluator. Claude tidak menyusun naskah tema 2 kecuali user
  minta. Tugasnya:
  1. Mengevaluasi tiap laporan atau backup ChatGPT yang dikirim user terhadap
     `riset/tahapan.md` dan backup terakhir yang sah.
  2. Menandai kalau ChatGPT melompat tahap, mengganti keputusan yang sudah dikunci, mengambil
     bahan dari luar pembahasan, atau mengarang sumber.
  3. Menulis prompt koreksi atau prompt pembuka sesi baru untuk ChatGPT.
  4. Menyarankan kapan user membuka sesi baru.
  5. Mengarahkan user: keputusan apa yang sedang ditunggu dan apa yang perlu disiapkan.

## Sumber kebenaran tema 2

Urutannya, dari yang paling dipercaya:

1. Keputusan yang diucapkan user sendiri.
2. `riset/tahapan.md` (acuan tahap dari user, menyusul).
3. Backup terakhir yang sudah dievaluasi Claude, disimpan di `riset/chatgpt/`.
4. Panduan KTI FDK, EYD V, TBBBI.

Berkas proposal tema 1 (`tema-1/`) **bukan** sumber tema 2. Kalau ChatGPT membawa judul tema 1
("Persepsi Kompleksitas ... Kemungkinan Penggunaan Layanan/Kanal Tatap Muka"), itu kontaminasi.

## Tanda ChatGPT mulai ngalor ngidul

Kalau muncul satu tanda berat atau dua tanda ringan, buka sesi baru pakai prompt di
`riset/chatgpt/prompt-sesi-baru.md`.

Tanda berat:
- Mengganti judul, X, atau Y tanpa diminta.
- Membawa berkas, judul, atau keputusan dari proyek atau percakapan lain.
- Menyebut sumber, angka, atau penelitian yang tidak pernah dibahas dan tidak bisa ditunjukkan asalnya.
- Melompat tahap (misalnya menulis BAB II padahal kisi-kisi belum dikunci).
- Menghidupkan lagi keputusan yang sudah dibuang (misalnya kanal tatap muka, skenario/vignette).

Tanda ringan:
- Lupa batas penelitian yang sudah disepakati (misalnya mulai bicara sebab akibat).
- Mengulang pertanyaan yang sudah dijawab.
- Jawaban makin panjang tapi isinya berputar.
- Salah menyebut nama dokumen atau tanggal.

## Kontaminasi berkas lama (kasus 10 November 2026)

ChatGPT mengambil `proposal.docx` (23 halaman) dan `Proposal_Skripsi_Hasil_Revisi_Lengkap.docx`
(42 halaman) dari "Library", tercatat dibuat 7 November 2026, lalu menjadikan judul tema 1
sebagai judul aktif.

Fakta yang bisa dicek:
- Word tema 1 hasil build repo ini juga 23 halaman (`tema-1/riset/tahapan.md` tahap 10) dan judulnya
  sama dengan yang dibawa ChatGPT.
- Lima sumber di tab Sumber proyek "Menulis" tidak memuat kedua berkas itu.

Dugaan (belum terbukti): kedua berkas pernah diunggah di percakapan ChatGPT lain, lalu tersimpan
di Library akun dan ikut terbaca oleh pencarian berkas. Asal berkas 42 halaman tidak diketahui
dari repo ini. Tindakan: user cek Library ChatGPT dan hapus kedua berkas itu kalau tidak dipakai,
supaya tidak terambil lagi.

## Format evaluasi tiap laporan ChatGPT

1. Tahap sekarang menurut `riset/tahapan.md`, dan apakah laporan masih di tahap itu.
2. Keputusan yang dikunci: tetap atau berubah. Kalau berubah, siapa yang memutuskan.
3. Klaim baru: rujukan, angka, nama penelitian. Status: sudah dicek, perlu dicek, atau tidak jelas asalnya.
4. Lubang logika dan metodologi (fakta, opini, dugaan dipisah).
5. Vonis: lanjut di sesi yang sama, koreksi pakai prompt, atau buka sesi baru.
6. Prompt yang siap ditempel (kalau perlu).
