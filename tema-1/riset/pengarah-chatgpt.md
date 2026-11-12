# Peran Claude sebagai Pengarah ChatGPT (Tema 1, rombak)

Dibuat: 11 November 2026. Meniru cara kerja tema 2 (`tema-2/riset/pengarah-chatgpt.md`).

## Latar

Proposal tema 1 ditulis sekaligus pada 5 November 2026 tanpa tahapan. Pada 11 November 2026 user
memutuskan merombaknya dengan metode tema 2: ChatGPT menyusun dan meriset, Claude mengarahkan,
mengevaluasi, dan ikut meriset. Prinsip rombak: **bagian yang terbukti benar tidak diotak-atik**,
yang diperiksa ulang adalah bagian yang salah atau belum terbukti.

## Pembagian peran

- **ChatGPT** (proyek baru khusus tema 1, terpisah dari proyek "Menulis" tema 2): menyusun dan
  meriset bersama user.
- **Claude** (repo ini): pengarah dan evaluator. Tugasnya:
  1. Mengevaluasi tiap laporan ChatGPT terhadap `riset/tahapan.md` dan bekal terakhir.
  2. Menandai lompat tahap, penggantian keputusan yang sudah dikunci, bahan dari luar proyek, dan
     sumber karangan.
  3. Mengecek rujukan ke Crossref/OpenAlex, PDF di `Sumber/`, atau sumber resmi.
  4. Menyusun `riset/chatgpt/bekal-sesi-N.md` dan prompt sesi berikutnya.
  5. Menyarankan kapan user membuka sesi baru.

## Sumber kebenaran tema 1

1. Keputusan yang diucapkan user sendiri.
2. `riset/tahapan.md` (diisi ulang dari roadmap tema 1 setelah sesi 1).
3. Bekal terakhir yang disusun Claude di `riset/chatgpt/`.
4. Panduan KTI FDK, EYD V, TBBBI.

Berkas tema 2 (`tema-2/`) **bukan** sumber tema 1. Tanda kontaminasi dari tema 2: judul atau
variabel "paparan informasi pra-pendaftaran", "respons calon jemaah" (kognitif, afektif,
konatif), teori CMM, Roseman, TPB, atau rujukan Niederdeppe, Kelly, Eveland, Breckler. Fenomena
PPM-nya sama (kantor yang sama, Februari sampai Juni 2026), jadi kemiripan fenomena bukan
kontaminasi. Yang dilarang adalah memindahkan judul, variabel, teori, atau keputusan.

## Tanda ChatGPT mulai ngalor ngidul

Satu tanda berat atau dua tanda ringan: buka sesi baru pakai `riset/chatgpt/prompt-sesi-baru.md`.

Tanda berat:
- Mengganti judul, X, atau Y tanpa diminta.
- Membawa berkas, judul, atau keputusan dari proyek atau percakapan lain (termasuk tema 2).
- Menyebut sumber, angka, atau penelitian yang tidak pernah dibahas dan tidak bisa ditunjukkan asalnya.
- Mengambil sumber dari luar proyek tanpa konfirmasi user.
- Melompat tahap.
- Mengubah bagian yang di bekal berstatus AMAN.

Tanda ringan:
- Lupa batas penelitian (misalnya mulai bicara sebab akibat).
- Mengulang pertanyaan yang sudah dijawab.
- Jawaban makin panjang tapi isinya berputar.
- Salah menyebut nama dokumen, halaman, atau tanggal.

## Format evaluasi tiap laporan ChatGPT

1. Tahap sekarang menurut `riset/tahapan.md`, dan apakah laporan masih di tahap itu.
2. Keputusan yang dikunci: tetap atau berubah. Kalau berubah, siapa yang memutuskan.
3. Klaim baru: rujukan, angka, nama penelitian. Status: sudah dicek, perlu dicek, atau tidak jelas asalnya.
4. Lubang logika dan metodologi (fakta, opini, dugaan dipisah).
5. Vonis: lanjut di sesi yang sama, koreksi pakai prompt, atau buka sesi baru.
6. Prompt yang siap ditempel (kalau perlu).

## Siklus per sesi

1. User melempar 3 sampai 4 perintah kerja per sesi ChatGPT.
2. Perintah terakhir: `riset/chatgpt/prompt-laporan.md`.
3. User mengirim laporan ke Claude. Claude mengoreksi, mengecek rujukan, memperbarui
   `riset/keputusan.md` dan `riset/tahapan.md`, lalu menyusun `riset/chatgpt/bekal-sesi-N.md`.
4. Sesi baru: user membuka chat baru di proyek, melampirkan bekal terbaru **di chat** (bukan di berkas proyek), lalu menempel prompt pembuka. Berkas proyek hanya berisi yang tetap: proposal.docx, sumber, roadmap (keputusan user, 12 November 2026).

ChatGPT tidak membuat handoff sendiri. Bekal selalu disusun Claude.
