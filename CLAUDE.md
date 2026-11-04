# SEMPRO-TO-SKRIPSI

Repo kerja proposal skripsi (Usulan Rencana Penelitian) Mumtaaz Haekal, Prodi Manajemen Haji dan Umrah, Fakultas Dakwah dan Komunikasi, UIN Sunan Gunung Djati Bandung. Penelitian kuantitatif.

## Baca dulu tiap sesi

1. `riset/keputusan.md` : status keputusan penelitian dan target terdekat. Selalu mulai dari sini.
2. `riset/log.md` : catatan sesi sebelumnya.
3. `riset/handoff.md` : konteks lengkap fenomena, teori, kandidat variabel, rujukan. Baca bagian yang perlu saja, jangan dibaca ulang utuh tiap sesi.

Semua pekerjaan proposal jalan lewat skill `sempro` di `.claude/skills/sempro/SKILL.md`.

## Cara ngobrol

- Ngobrol pakai bahasa santai, boleh gaul, singkat, langsung ke inti.
- User belum paham banyak istilah metodologi. Tiap istilah baru dijelasin pakai contoh jemaah haji sehari-hari (contoh Pak Budi di handoff), baru masuk istilah ilmiahnya.
- Satu keputusan satu waktu. Kasih 2 sampai 3 pilihan, sebut untung ruginya, kasih rekomendasi beserta alasan, lalu minta user milih. Jangan nyodorin lima pertanyaan sekaligus.
- Kritis, jangan asal setuju. Bedakan fakta, opini, dan dugaan.
- Naskah proposal tetap ditulis pakai bahasa akademik baku.

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
CLAUDE.md                 file ini
riset/keputusan.md        status keputusan, target, hal terbuka
riset/log.md              log per sesi
riset/handoff.md          konteks riset lengkap dari diskusi sebelumnya
acuan/                    panduan FDK, EYD V, TBBBI (teks)
proposal/proposal.md      naskah proposal, satu file
.claude/skills/sempro/    skill utama + rujukan + script + templat
output/                   hasil build docx (dibuat script)
LISENSI/                  lisensi repo sumber yang dicomot
```

## Akhir sesi

Perbarui `riset/keputusan.md` kalau ada keputusan baru dan tambahkan satu entri di `riset/log.md`: tanggal, yang dikerjakan, keputusan user, tugas berikutnya. Commit dengan pesan yang jelas.
