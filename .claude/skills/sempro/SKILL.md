---
name: sempro
description: Skill utama untuk menyusun, mengecek, memoles, dan mencetak proposal skripsi kuantitatif (Usulan Rencana Penelitian) sesuai Panduan Karya Tulis Ilmiah FDK UIN Sunan Gunung Djati Bandung. Pakai skill ini setiap kali user membahas proposal, sempro, skripsi, variabel, X dan Y, rumusan masalah, latar belakang, kerangka pemikiran, hipotesis, populasi, sampel, kuesioner, instrumen, validitas, reliabilitas, daftar pustaka, rujukan, EYD, bahasa naskah, atau minta file Word untuk diprint, walaupun user tidak menyebut kata "skill" atau "proposal".
---

# Sempro

Skill ini membantu user menyelesaikan proposal kuantitatif FDK dari keputusan variabel sampai file Word siap print. Repo memuat lebih dari satu proposal. `<tema>` berarti folder tema yang sedang dikerjakan (`tema-1`, `tema-2`, dan seterusnya), lihat bagian "Tema aktif" di `CLAUDE.md`. Jangan mengubah file di folder tema lain. Sebelum apa pun, baca `<tema>/riset/keputusan.md` untuk tahu posisi terakhir dan target terdekat.

## Pilih mode

Tentukan mode dari permintaan user. Kalau tidak jelas, lihat `<tema>/riset/keputusan.md`: selama empat keputusan belum terkunci, mode default adalah **bimbing**.

| Mode | Pemicu | Baca |
|---|---|---|
| bimbing | bingung, belum paham, pilih variabel, "maksudnya apa", keputusan masih kosong | `references/alur-bimbingan.md` |
| tulis | "tulis latar belakang", "susun rumusan masalah", "lanjut nulis" | `references/fdk.md`, `<tema>/riset/keputusan.md`, bagian relevan `<tema>/riset/handoff.md` |
| cek | "cek nyambung ga", "cek metodologi", "matriks operasionalisasi" | `references/peta-comotan.md` bagian Cek |
| poles | "rapikan bahasa", "biar ga kaku", "humanize", "cek EYD" | `references/poles.md` (alur lengkap), rujukan per masalah di `references/peta-comotan.md` bagian Bahasa |
| pustaka | "cari rujukan", "cek DOI", "daftar pustaka" | `references/peta-comotan.md` bagian Pustaka |
| uji | "simulasi dospem", "apa yang bakal ditanya penguji", "layak ga" | `references/peta-comotan.md` bagian Uji |
| cetak | "bikin Word", "siap print" | bagian Cetak di bawah |

Baca hanya file yang dibutuhkan mode itu. Jangan memuat semua rujukan sekaligus.

## Mode tulis

Naskah ada di satu file, `<tema>/proposal/proposal.md`, dengan urutan sepuluh komponen FDK di `references/fdk.md`. Jangan bikin struktur Bab I sampai III, karena proposal kuantitatif FDK tidak memakai bab.

Urutan kerja tiap komponen:

1. Cek prasyarat. Komponen butuh keputusan yang belum terkunci di `<tema>/riset/keputusan.md`? Berhenti, pindah ke mode bimbing untuk keputusan itu saja.
2. Kumpulkan bahan dari `<tema>/riset/keputusan.md` dan `<tema>/riset/handoff.md`. Fakta lapangan hanya dari handoff atau dari user. Jangan ditambah.
3. Tulis draf sesuai ketentuan komponen di `references/fdk.md`. Sitasi pakai running note FDK, misalnya (Ebbers, et al., 2016:510). Halaman yang belum dicek ditulis `(Ebbers, et al., 2016:[hlm. PERLU VERIFIKASI])`.
4. Pertahankan batas klaim. Fenomena magang adalah pengamatan awal, bukan data. Dugaan penyebab ditulis sebagai dugaan.
5. Jalankan pemeriksa:
   ```bash
   python .claude/skills/sempro/scripts/periksa.py <tema>/proposal/proposal.md
   python .claude/skills/sempro/scripts/metrik.py <tema>/proposal/proposal.md --preset akademik
   ```
   Temuan K (kaidah) diperbaiki. Temuan gaya dibaca dalam konteks, bukan dituruti buta. Jalankan juga uji wajib di `references/poles.md` langkah 4 (kalke, personifikasi, pembuka template, kalimat pendek berderet), karena metrik lolos belum berarti naskah natural.
6. Jelaskan ke user dalam 3 kalimat santai: komponen ini ngomongin apa, kenapa begitu, dan bagian mana yang masih bertanda `[PERLU ...]`.
7. Minta user membaca dan mengoreksi. User yang memutuskan isi.

Urutan penulisan yang disarankan kalau waktu mepet: latar belakang, perumusan masalah, tujuan, kegunaan, kerangka pemikiran, hipotesis, langkah penelitian, kuesioner tentatif, daftar pustaka, judul final paling akhir.

## Aturan isi yang sering salah

- Nama variabel mengikuti apa yang benar-benar ditanyakan di kuesioner. Jangan menamai Y "preferensi" kalau butirnya menanyakan kemungkinan.
- Indikator variabel wajib punya sumber. Kalau belum ada sumber, tulis `[PERLU RUJUKAN]`, jangan dikarang.
- Panduan FDK meminta uji validitas (SPSS) dan reliabilitas (Cronbach's alpha). Konstruk satu butir tidak bisa diuji Cronbach. Kalau model memakai satu butir, tulis alasan metodologisnya terang-terangan dan beri tahu user bahwa ini akan ditanya penguji.
- Rumus sampel (Slovin, Taro Yamane, atau lainnya) disebut beserta rujukannya dan alasan pemilihannya.
- Teknik analisis mengikuti bentuk data Y, bukan otomatis regresi linear sederhana.
- Hipotesis ditulis sebagai hubungan yang bisa diuji, dengan H0 dan H1.
- Regulasi, nomenklatur kantor, nama aplikasi: cek sumber resmi terbaru atau tandai `[PERLU VERIFIKASI]`.

## Cetak

```bash
bash .claude/skills/sempro/scripts/build_docx.sh <tema>   # contoh: tema-1
```

Script mengubah `<tema>/proposal/proposal.md` jadi `<tema>/output/proposal.docx` memakai `templates/reference-fdk.docx` (A4, margin atas 4 cm, kiri 4 cm, bawah 3 cm, kanan 3 cm, Times New Roman 12, spasi 2, menjorok 1,25 cm). Sebelum build, cari sisa tanda `[PERLU` di naskah dan laporkan jumlahnya ke user:

```bash
grep -n "\[PERLU" <tema>/proposal/proposal.md
```

Setelah build, bilang ke user bagian yang tetap harus dicek manual di Word: halaman judul (ukuran huruf 16 pt dan 14 pt sesuai panduan), nomor halaman, tabel, dan pemenggalan halaman.

## Integritas

- User memakai AI untuk membantu menyusun. Pastikan user paham tiap bagian, karena dosen dan penguji akan bertanya. Kalau user tidak bisa menjelaskan suatu bagian, bagian itu belum siap.
- Ingatkan sekali (bukan tiap sesi) untuk mengecek aturan kampus soal pemakaian AI.
- Jangan mengklaim "belum pernah ada penelitian" tanpa penelusuran nyata.
