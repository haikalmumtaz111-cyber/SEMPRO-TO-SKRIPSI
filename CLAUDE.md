# SEMPRO-TO-SKRIPSI

Repo kerja proposal skripsi (Usulan Rencana Penelitian) Mumtaaz Haekal, Prodi Manajemen Haji dan Umrah, Fakultas Dakwah dan Komunikasi, UIN Sunan Gunung Djati Bandung. Penelitian kuantitatif. Repo memuat beberapa proposal dengan tema berbeda, satu folder per tema.

## Tema aktif

Repo ini memuat lebih dari satu proposal. Tiap tema punya folder sendiri dan tidak boleh saling mengubah.

- `tema-1/` : proposal pertama (persepsi kompleksitas dan layanan tatap muka). Draf jadi 5 November 2026, dirombak mulai 11 November 2026 atas permintaan user dengan metode tema 2: ChatGPT di proyek terpisah sebagai penyusun, Claude sebagai pengarah dan evaluator, lihat `tema-1/riset/pengarah-chatgpt.md`. Bagian yang terbukti benar tidak diubah.
- `tema-2/` : proposal kedua (paparan informasi pra-pendaftaran dan respons calon jemaah). Riset disusun user bersama ChatGPT dengan Claude sebagai pengarah (`tema-2/riset/pengarah-chatgpt.md`), naskah ditulis Claude. Draf lengkap, menunggu bimbingan (Tahap 17).

**Tema aktif sekarang: `tema-2`.** Keputusan user 21 November 2026: proposal yang dibawa ke seminar adalah tema 2, tema 1 ditunda. Kalau user tidak menyebut tema, kerjakan tema aktif. Kalau ragu, tanya dulu. Semua path `riset/`, `proposal/`, `output/`, `Sumber/` di bawah ini relatif terhadap folder tema aktif.

## Baca dulu tiap sesi

1. `riset/tahapan.md` : peta tahapan sampai file Word. Cari tahap pertama yang belum `[x]`, kerjakan itu saja.
2. `riset/keputusan.md` : status keputusan penelitian dan target terdekat.
3. `riset/log.md` : catatan sesi sebelumnya.
4. `riset/handoff.md` : konteks lengkap fenomena, teori, kandidat variabel, rujukan. Baca bagian yang perlu saja, jangan dibaca ulang utuh tiap sesi.

Semua pekerjaan proposal jalan lewat skill `sempro` di `.claude/skills/sempro/SKILL.md`, termasuk merapikan bahasa (`references/poles.md`). Skill claude.ai `naskah-natural` (sumbernya di `skill-claude/naskah-natural/`) bisa ikut termuat karena tersinkron dari akun user. Di repo ini yang menang `sempro`, karena hanya `sempro` yang mengatur panduan FDK, sitasi running note, dan folder tema. Kalau aturan poles diubah, ubah keduanya supaya tetap sama.

## Cara ngobrol

- Ngobrol pakai bahasa santai, boleh gaul, singkat, langsung ke inti.
- User belum paham banyak istilah metodologi. Tiap istilah baru dijelasin pakai contoh jemaah haji sehari-hari (contoh Pak Budi di handoff), baru masuk istilah ilmiahnya.
- Satu keputusan satu waktu. Kasih 2 sampai 3 pilihan, sebut untung ruginya, kasih rekomendasi beserta alasan, lalu minta user milih. Jangan nyodorin lima pertanyaan sekaligus.
- Kritis, jangan asal setuju. Bedakan fakta, opini, dan dugaan.
- Naskah proposal tetap ditulis pakai bahasa akademik baku.
- User pakai paket Claude Pro. Hemat kuota: jangan spawn subagen (Agent/Workflow), baca file seperlunya pakai grep, jangan baca ulang handoff utuh.

## Bahasa penjelasan dan bahan belajar

Aturan user, 22 November 2026. Asalnya revisi user sepanjang sesi 21 November: banyak penjelasan dan kalimat harus diulang karena memakai frasa yang tidak dipakai orang sehari-hari. Berlaku untuk obrolan, `riset/ringkasan-belajar.md`, `riset/bank-soal-sempro.md`, `riset/sorotan-user.md`, dan kalimat jawaban untuk penguji. Naskah proposal tetap akademik baku, tetapi butir 1 dan 2 berlaku juga untuk naskah.

1. Pakai kata yang dipakai user sehari-hari. Kalau ada kata biasa, jangan pakai frasa kiasan atau abstrak. Contoh dari user: "terkejut memang paling gampang ditebak", bukan "terkejut memang paling dekat dengan akal sehat". "Pemikiran orang biasa", bukan "akal sehat" atau "logika". "Yang nyantol di kepala cuma sedikit", bukan "belajar sedikit".
2. Satu kalimat hanya boleh punya satu cara baca. Kata kerja jangan muncul dua kali dengan tugas berbeda, dan objek ditaruh dekat kata kerjanya. Contoh yang gagal: "mencari dengan sengaja dan menemukan tanpa sengaja mencari informasi", "tanpa sengaja dicari", "belum saya temukan diuji".
3. Tiap istilah dijelaskan dari nol: artinya dalam satu kalimat, lalu contoh dengan angka kecil. Jangan menjelaskan satu istilah memakai istilah lain yang belum dijelaskan (butir, skor, r, Sig.).
4. Perumpamaan memakai benda sehari-hari yang perannya jelas, dan perannya disebut terang ("empat pertanyaan itu empat termometer"). Yang sudah berhasil: koin dilempar, termometer, tinggi badan sekelas, antre bakso, nilai ulangan melawan KKM, mencicip kuah sepanci. Yang gagal: "empat pertanyaan itu empat teman yang ditanya soal Pak Budi".
5. Satu perumpamaan dipakai sampai selesai. Kalau pindah dari perumpamaan ke penelitian, katakan terang, misalnya "sekarang ganti tinggi badan dengan skor total". Jangan mengganti pasangan yang dicontohkan (paham, kaget, niat) di tengah penjelasan tanpa memberi tahu.
6. Urutkan dari kecil ke besar atau dari awal ke akhir: "pendek, sedang, tinggi", bukan "kebanyakan sedang, sedikit yang pendek atau tinggi".
7. Angka yang muncul di penjelasan disebut asalnya. Contoh: "100 ronde" hanya cara menjelaskan persen, bukan angka penelitian.
8. Kalimat jawaban untuk penguji harus enak diucapkan di depan dosen dan hadirin: baku, pendek, satu gagasan per kalimat, tanpa kiasan. Baca dalam hati seolah diucapkan. Kalau tersendat, tulis ulang.
9. Sebelum menyerahkan penjelasan atau kalimat baru, tanya: orang awam yang tidak ikut menyusun akan salah baca di mana? Kalimat yang paling rawan ditunjukkan ke user, dan user yang memutuskan lolos atau tidak. Penulis sudah tahu maksudnya sehingga jarang melihat ambiguitasnya sendiri.

User sering memakai masukan suara, jadi istilah asing bisa salah tertranskrip ("Breckler" pernah menjadi "backglare", "Likert" menjadi "recurred"). Tebak dari konteks dan sebut tebakannya.

## Aturan mati

1. Jangan ngarang fenomena, angka, kutipan, rujukan, DOI, atau hasil penelitian. Yang belum dicek diberi tanda `[PERLU VERIFIKASI]`, `[PERLU RUJUKAN]`, atau `[PERLU DATA]`.
2. Rujukan baru masuk naskah setelah dicek lewat `python .claude/skills/sempro/scripts/openalex.py cek "judul"` atau sumber resmi.
3. Nomenklatur lembaga, aplikasi (Haji Pintar, Satu Haji, SISKOHAT), dan regulasi haji wajib dicek ke sumber resmi terbaru sebelum ditulis sebagai fakta.
4. Panduan FDK (`acuan/panduan-kti-fdk.md`) menang kalau tabrakan sama aturan lain mana pun, termasuk file comotan di skill.
5. Survei potong lintang tidak membuktikan sebab akibat. Kata "pengaruh" dipakai hati-hati sesuai `references/comotan/lugas/claim-strength.md`.
6. Setiap selesai satu komponen proposal, jelasin isinya ke user dalam 3 kalimat santai supaya user sanggup ngejelasin ke dosen pembimbing.

## Acuan bahasa dan format

- Struktur, format, sitasi: `acuan/panduan-kti-fdk.md` (ringkasan siap pakai di `.claude/skills/sempro/references/fdk.md`).
- Ejaan: `acuan/eyd-v.txt` (EYD V, SK 0424/I/BS.00.01/2022).
- Tata bahasa: `acuan/tbbbi.txt` (599 halaman hasil ekstrak PDF). Jangan dibaca utuh. Cari pakai `grep -n -i "kata kunci" acuan/tbbbi.txt` lalu baca potongannya.

## Gaya naskah yang user mau

- Nol em dash dan en dash di prosa. Tanda hubung bentuk ulang tetap dipakai.
- Hindari nominalisasi + verba ringan ("melakukan pengukuran terhadap" jadi "mengukur"), konektor numpuk di awal kalimat, "yang mana", "di mana" sebagai kata sambung, pleonasme, frasa kosong ("sangat penting", "memegang peranan penting", "tidak dapat dipungkiri", "krusial", "komprehensif"), dan pembuka formula ("Di era digital saat ini").
- Ritme kalimat bervariasi. Info lama di depan kalimat, info baru di belakang.
- Cek kalkir bahasa Inggris tiap paragraf.
- Daftar lengkap pola yang dihindari: `references/comotan/humanizer-indonesia/id-ai-tells.md` dan `references/comotan/naskah-id/pola-ai.md`.

## Peta repo

```
CLAUDE.md                        file ini
acuan/                           panduan FDK, EYD V, TBBBI (teks), dipakai semua tema
.claude/skills/sempro/           skill utama + rujukan + script + templat, dipakai semua tema
LISENSI/                         lisensi repo sumber yang dicomot
tema-1/                          proposal pertama (dirombak)
tema-2/                          proposal kedua (draf lengkap)

Isi tiap folder tema:
<tema>/riset/tahapan.md          peta tahapan sampai Word, acuan tunggal eksekusi
<tema>/riset/keputusan.md        status keputusan, target, hal terbuka
<tema>/riset/log.md              log per sesi
<tema>/riset/handoff.md          konteks riset lengkap (tema-1 sudah ada)
<tema>/riset/pertanyaan.md       data yang diminta dari user dan jawabannya
<tema>/riset/fenomena-*.md       fenomena lapangan, dipilah fakta/dugaan
<tema>/Sumber/                   bahan bacaan penelitian terdahulu
<tema>/proposal/proposal.md      naskah proposal, satu file
<tema>/proposal/sampul.json      isi halaman sampul
<tema>/output/                   hasil build docx (dibuat script)
```

## Akhir sesi

Perbarui `<tema>/riset/keputusan.md` kalau ada keputusan baru dan tambahkan satu entri di `<tema>/riset/log.md`: tanggal, yang dikerjakan, keputusan user, tugas berikutnya. Commit dengan pesan yang jelas.
