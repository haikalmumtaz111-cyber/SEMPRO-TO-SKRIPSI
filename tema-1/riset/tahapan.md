# Peta Tahapan: dari Posisi Terakhir sampai File Word

Dibuat: Kamis, 5 November 2026. Diperbarui setelah eksekusi sekaligus pada hari yang sama.

Ini acuan tunggal. Sesi mana pun yang melanjutkan: baca file ini, cari tahap pertama yang belum `[x]`, kerjakan tahap itu saja. Jangan nambah tahap baru tanpa persetujuan user. Ide di luar daftar masuk "Parkir".

## Posisi start (sebelum 5 November 2026)

Handoff berhenti di tahap 4 (seleksi variabel). Keputusan 1 sampai 3 terkunci, keputusan 4 setengah, naskah kosong.

## Tahapan proses

| No | Tahap | Isi kerja | Hasil fisik | Status |
|---|---|---|---|---|
| 1 | Simpan fenomena | Cerita magang dipilah jadi pengamatan, dugaan, klaim regulasi | `riset/fenomena-magang.md` | [x] |
| 2 | Kumpulkan data dari user | 19 pertanyaan | `riset/pertanyaan.md` | [x] |
| 3 | Kunci sisa keputusan | Reguler, populasi 46.210, Slovin 10% (n = 100), *purposive*, skala 5 poin, regresi linear sederhana, judul "Hubungan" | `riset/keputusan.md` | [x] |
| 4 | Cek keselarasan X dan Y | Apakah X dan Y nyambung secara teori, punya sumber butir, dan cocok dengan fenomena | `riset/briefing-dospem.md` bagian A | [x] |
| 5 | Audit penelitian terdahulu | Baca 10 sumber di `Sumber/`, ambil metadata, metode, temuan, halaman. Rumuskan celah penelitian | `riset/briefing-dospem.md` bagian B, latar belakang paragraf terakhir | [x] |
| 6 | Verifikasi regulasi resmi | Perpres 92/2025, UU 14/2025, kebijakan masa tunggu 26,4 tahun, kuota Jabar | `riset/fenomena-magang.md` tabel C, daftar pustaka | [x] sebagian (lihat sisa tanda) |
| 7 | Susun instrumen | Skenario, 4 butir X, 1 butir Y, data responden, persetujuan | Lampiran kuesioner di `proposal.md` | [x] |
| 8 | Tulis naskah sepuluh komponen FDK | Judul sampai daftar pustaka | `proposal/proposal.md` | [x] |
| 9 | Cek bahasa dan kaidah | `periksa.py`, `metrik.py`, sapu pola AI, nol em dash | naskah bersih (temuan K = 0) | [x] |
| 10 | Build Word | `build_docx.sh` + rapikan tabel | `output/proposal.docx` (23 halaman) | [x] |
| 11 | Briefing user | 3 kalimat per komponen, pertanyaan dosen yang mungkin muncul | `riset/briefing-dospem.md` | [x] |
| 12 | Print dan bimbingan | User print, bawa ke dosen, catat coretan | kertas + catatan revisi | [ ] |
| 13 | Revisi hasil bimbingan | Masukkan coretan dosen ke `proposal.md`, build ulang | docx revisi | [ ] |
| 14 | Lunasi tanda `[PERLU ...]` | Lihat daftar di bawah | naskah tanpa tanda | [ ] |
| 15 | Sampul resmi prodi | Meniru proposal teman yang sudah sempro, logo UIN, tanpa nomor halaman | `scripts/sampul.py` | [x] |

## Sisa tanda `[PERLU ...]` di naskah (12 buah)

1. Foto dasbor SISKOHAT dan tanggal data 46.210.
2. Rekap buku tamu (jumlah penanya estimasi).
3. Surat izin penelitian.
4. Rujukan rumus Slovin (buku metodologi).
5. Rujukan batas alfa 0,70.
6. Rujukan dasar pengukuran satu butir untuk Y.
7. Data kuota Jabar ke sumber resmi Kemenhaj (sekarang dari detikHikmah).
8. Alamat dan nomenklatur resmi kantor.
9. Bunyi Pasal 65 Perpres 92/2025.
10. Nama dan status aplikasi cek estimasi tahun 2026.
11. Berita NU Online soal masa tunggu 14 tahun.
12. Halaman artikel Budiman dkk. (2026) dan nama lengkap jurnal Safitra dkk. (2023).

## Parkir (dibahas setelah sempro)

- Media sosial kantor kurang aktif (handoff bagian 9).

