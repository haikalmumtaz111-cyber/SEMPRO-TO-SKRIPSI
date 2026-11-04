# Status Keputusan Penelitian

Diperbarui: 4 November 2026

## Target terdekat

- Proposal harus selesai, diprint, dan ditandatangani dosen pembimbing pada **Kamis, 5 November 2026, siang**. Dosen hanya ada di kampus hari Kamis.
- Seminar proposal tanggal 14 [konfirmasi bulan ke user]. Kalau tanda tangan Kamis gagal, sempro mundur ke Desember.
- Menurut panduan FDK, usulan diajukan ke ketua prodi setelah disetujui dosen pembimbing akademik, dan kuesioner cukup berupa draf tentatif. Seminar berfungsi membahas dan meluruskan. Artinya target Kamis adalah draf utuh yang layak disetujui, bukan proposal sempurna.
- Progres per 4 November: belum mulai menulis. Masih di tahap memilih variabel (tahap 4 di handoff).

Karena waktunya mepet, keputusan di bawah diselesaikan secepatnya, satu per satu, pakai `references/alur-bimbingan.md`. Begitu empat keputusan terkunci, langsung tulis.

## Yang sudah ada

- Fenomena: banyak jemaah datang langsung ke kantor untuk minta informasi atau klarifikasi, terutama soal perubahan estimasi keberangkatan, padahal informasinya tersedia di kanal digital. Detail di `handoff.md` bagian II.
- Pendekatan: kuantitatif, satu X dan satu Y.
- Kandidat X terkuat sementara: persepsi kompleksitas tugas (*perceived task complexity*).
- Kandidat Y: belum final.
- Rujukan inti yang sudah dicek ada:
  - Ebbers, Jansen, Pieterson, & van de Wijngaert (2016), *Government Information Quarterly* 33(3), 506-515, doi:10.1016/j.giq.2016.06.001. Sudah dicek dari PDF asli (4 Nov 2026):
    - n = 637, panel daring Belanda, usia 18+, pernah kontak dengan pemerintah kota dalam dua tahun terakhir (hlm. 510).
    - Metode vignette, desain *incomplete block*, tiap responden menjawab tiga vignette (hlm. 510).
    - Y: kemungkinan memakai kanal (loket/telepon/website) pada situasi itu, **satu butir per kanal**, Likert 5 poin "very unlikely" sampai "very likely" (hlm. 510).
    - X: persepsi kompleksitas, **satu butir**, Likert 5 poin "very easy" sampai "very difficult" (hlm. 510).
    - Multi-item + Cronbach hanya untuk trust, habit, computer self-efficacy, kepuasan (hlm. 510, Appendix 1).
    - Complexity ke front desk β = 0,07, p = 0,001; telepon β = 0,09, p < 0,001; website β = 0,02, p = 0,173 (Tabel 6, hlm. 511). Analisis WarpPLS, taraf signifikansi 0,01.
    - Implikasi: Ebbers tidak menyediakan skala multi-item untuk X maupun Y.
  - Pieterson & Ebbers (2020), *Government Information Quarterly* 37(3), 101478, doi:10.1016/j.giq.2020.101478.

## Empat keputusan yang belum dikunci

Penjelasan versi santainya ada di `.claude/skills/sempro/references/alur-bimbingan.md`. Jelasin ke user pakai contoh dulu, baru minta milih.

| No | Keputusan | Status |
|---|---|---|
| 1 | Y mengukur apa: kemungkinan datang ke kantor, lebih suka kantor dibanding aplikasi, atau pernah datang beneran | **Terkunci (4 Nov 2026)**: kemungkinan penggunaan kanal tatap muka (*likelihood of use*), skala bertingkat. Pilihan user. Sumber butir belum ketemu `[PERLU RUJUKAN]`: OpenAlex, ris.utwente.nl, core.ac.uk diblok jaringan sesi. Kandidat sumber: Ebbers dkk. (2016), Pieterson (2007/2009), Pieterson, Teerling, & Ebbers (2008) "Channel Perceptions and Usage". Redaksi butir wajib dicek dari artikel asli |
| 2 | Kuesioner pakai cerita karangan (skenario) atau pengalaman nyata jemaah | **Terkunci (4 Nov 2026)**: skenario (*vignette*), satu cerita yang sama untuk semua responden. Pilihan user. Konsekuensi: jawaban bersifat hipotetis, wajib ditulis sebagai keterbatasan penelitian. Redaksi skenario belum ditulis |
| 3 | Tiap variabel diukur pakai satu pertanyaan atau beberapa pertanyaan | **Terkunci (4 Nov 2026)**: X multi-item, 4 butir adaptasi Maynard & Hakel (1997), uji validitas + Cronbach. Y satu butir mengikuti Ebbers dkk. (2016:510), skala 1-5 sangat tidak mungkin sampai sangat mungkin; alasan metodologis wajib ditulis dan Cronbach tidak diterapkan pada Y. Pilihan user (opsi 1 rencana B). Riwayat: beberapa butir (multi-item) untuk X dan Y, pilihan user. Rencana B: kalau sumber butir tidak ketemu, satu butir mengikuti Ebbers dkk. (2016) dengan alasan metodologis tertulis. Sumber X: Maynard & Hakel (1997), *Human Performance* 10(4), 303-330, doi:10.1207/s15327043hup1004_1, dicek dari PDF asli: skala 4 butir, Likert 7 poin (1 totally disagree sampai 7 totally agree), α = 0,903 (bagian Measures, sekitar hlm. 313; butir di Appendix hlm. 330). Butir asli: (1) I found this to be a complex task. (2) This task was mentally demanding. (3) This task required a lot of thought and problem-solving. (4) I found this to be a challenging task. Catatan: sampel asli mahasiswa dalam eksperimen tugas penjadwalan, jadi butir perlu diadaptasi ke skenario jemaah dan diterjemahkan. Y: disertasi Pieterson (2009) doi:10.3990/1.9789036528078 sudah dicek (Bab 9.3, hlm. 215-222): studi vignette 2^7, 128 skenario, 2461 responden, 9787 skenario terisi; Y diukur sebagai **pilihan satu kanal** (front desk, telepon, website, e-mail, surat, tidak melakukan apa-apa), dianalisis regresi logistik multinomial. Jadi tidak ada skala multi-item *likelihood* di sini. Sumber multi-item Y belum ketemu. Pieterson & Van Dijk (2007) ternyata studi wawancara, tidak punya butir |
| 4 | Populasi dan cara menjangkau responden | Sebagian. (a) Wilayah: Kabupaten Bandung, lokasi magang user, terkunci 4 Nov 2026. Nama kantor menurut user: Kementerian Haji dan Umrah Kabupaten Bandung. Nomenklatur resmi `[PERLU VERIFIKASI]`: web search menemukan rujukan sekunder ke Perpres Nomor 92 Tahun 2025 dan penyebutan yang belum seragam ("Kemenhaj Kota Bandung", "Kantor Kementerian Haji Kabupaten Bandung Barat"); cek teks Perpres dan situs resmi. Akses: user bisa minta izin kantor. (b) Status: jemaah haji yang sudah terdaftar, punya nomor porsi, dan belum berangkat, terkunci 4 Nov 2026 (pilihan user). Reguler atau khusus belum ditanyakan `[PERLU KONFIRMASI]`. (c) Jalur sebar, (d) jumlah populasi: belum |

## Setelah empat keputusan terkunci

Isi tabel ini lalu mulai tulis `proposal/proposal.md`.

| Komponen | Isi terkunci |
|---|---|
| Judul sementara | |
| X dan definisinya | |
| Y dan definisinya | |
| Desain pengukuran | |
| Populasi dan sampel | |
| Teknik analisis | |
