# Peta Comotan

File di `references/comotan/` disalin utuh dari repo sumber. Lisensinya ada di folder `LISENSI/` di root repo. Baca hanya yang dibutuhkan mode yang sedang jalan.

## Aturan tabrakan

1. Panduan FDK menang atas semua file comotan.
2. File dari `proyek-akademik/` punya "batas keras" yang melarang AI menulis atau memparafrase karya mahasiswa. Batas itu **tidak berlaku** di repo ini, karena user meminta bantuan menyusun. Yang dipakai dari file itu hanya daftar periksa, rubrik, dan langkah auditnya.
3. `naskah-id/sitasi.md` membahas gaya sitasi umum. Untuk naskah ini, sitasi mengikuti running note FDK di `references/fdk.md`.
4. File `thesis-debugger/` dan `lugas/` berbahasa Inggris. Isinya dipakai sebagai cara berpikir, keluarannya tetap bahasa Indonesia.

## Bahasa (mode poles)

| File | Dipakai untuk |
|---|---|
| `naskah-id/kalimat-efektif.md` | Struktur kalimat, kalimat efektif |
| `naskah-id/kata-baku.md`, `naskah-id/ejaan-eyd-v.md` | Kata baku dan ejaan cepat. Kalau ragu, cek `acuan/eyd-v.txt` |
| `naskah-id/istilah.md`, `naskah-id/singkatan.md` | Istilah serapan dan singkatan |
| `naskah-id/pola-ai.md`, `humanizer-indonesia/id-ai-tells.md` | Pola tulisan yang terbaca AI atau terjemahan |
| `naskah-id/pertahankan.md` | Hal yang jangan "dibetulkan" berlebihan |
| `naskah-id/bagian-naskah.md` | Isi wajar tiap bagian naskah ilmiah |
| `lugas/bahasa-indonesia.md` | Kalkir dan translationese |
| `lugas/evidential-verbs.md` | Pilihan kata kerja pelapor (menemukan, melaporkan, menyatakan) |

Langkah poles:
1. Simpan versi sebelum dipoles: `cp <tema>/proposal/proposal.md /tmp/sebelum.md`.
2. Poles.
3. Cek tidak ada angka, sitasi, atau kutipan yang berubah:
   ```bash
   python .claude/skills/sempro/scripts/periksa.py --banding /tmp/sebelum.md <tema>/proposal/proposal.md
   python .claude/skills/sempro/scripts/guard.py check /tmp/sebelum.md <tema>/proposal/proposal.md
   ```
4. Lint gaya: `python .claude/skills/sempro/scripts/metrik.py <tema>/proposal/proposal.md --preset akademik`.

## Cek (mode cek)

| File | Dipakai untuk |
|---|---|
| `thesis-debugger/dependency-model.md` | Rantai fenomena, rumusan masalah, teori, variabel, pengukuran, metode, analisis |
| `thesis-debugger/consistency-checks.md` | Cek istilah dan definisi konsisten di seluruh naskah |
| `thesis-debugger/methodology-checks.md` | Cek metode sanggup menjawab pertanyaan |
| `proyek-akademik/audit-metodologi.md` | Langkah audit dan matriks keselarasan (abaikan batas keras, lihat aturan tabrakan) |
| `proyek-akademik/daftar-periksa-desain.md` | Daftar periksa desain kuantitatif |
| `lugas/claim-strength.md`, `lugas/statistical-writing.md` | Batas klaim "pengaruh" vs "hubungan", penulisan statistik |

Keluaran mode cek: matriks keselarasan satu baris per rumusan masalah (rumusan, tujuan, hipotesis, variabel, sumber data, instrumen, teknik analisis), lalu daftar temuan bertingkat Kritis, Mayor, Minor dengan bukti dari naskah.

Templat Word yang bisa dipakai:
- `templates/belangko-matriks-keselarasan.docx`
- `templates/belangko-kisi-kisi-instrumen.docx` (dasar matriks operasionalisasi variabel di komponen Kerangka Pemikiran)
- `templates/belangko-angket-kosong.docx` (dasar kuesioner tentatif)

Baca templat docx dengan `pandoc -t markdown templates/nama.docx`.

## Pustaka (mode pustaka)

| File | Dipakai untuk |
|---|---|
| `proyek-akademik/pencarian-literatur.md` | Strategi cari literatur |
| `proyek-akademik/hierarki-sumber.md` | Sumber mana yang layak dikutip |
| `proyek-akademik/verifikasi-istilah.md` | Cek atribusi teori ke tokoh yang benar |
| `thesis-debugger/citation-integrity-checks.md` | Cek sitasi cocok dengan klaim yang didukung |
| `naskah-id/alat-riset.md` | Alat riset dan basis data |

Perintah:
```bash
python .claude/skills/sempro/scripts/openalex.py cari "channel choice public service" --tahun 2015-2026 --n 10
python .claude/skills/sempro/scripts/openalex.py cek "Judul persis" --tahun 2016
python .claude/skills/sempro/scripts/openalex.py rujukan 10.1016/j.giq.2016.06.001 --gaya apa
python .claude/skills/sempro/scripts/openalex.py daftar pustaka.txt
```

Hasil `rujukan --gaya apa` tetap dicocokkan dengan contoh APA di panduan FDK. Kuota OpenAlex tanpa kunci kecil, jadi jangan dipanggil berulang untuk hal yang sama.

## Uji (mode uji)

| File | Dipakai untuk |
|---|---|
| `proyek-akademik/penantang-argumen.md`, `proyek-akademik/katalog-kekeliruan.md` | Simulasi penguji, cari lompatan logika |
| `proyek-akademik/review-kelayakan.md`, `proyek-akademik/rubrik-kelayakan.md` | Verdik kelayakan seminar |

Keluaran mode uji: 5 sampai 10 pertanyaan yang paling mungkin ditanyakan dosen atau penguji, masing-masing dengan bagian naskah yang jadi sasaran dan arah jawaban yang jujur. Verdik formatif: SIAP, SIAP DENGAN PERBAIKAN, atau BELUM SIAP, dengan alasan.
