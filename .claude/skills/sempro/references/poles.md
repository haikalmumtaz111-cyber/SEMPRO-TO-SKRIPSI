# Mode Poles

Alur lengkap untuk merapikan bahasa naskah proposal. Isinya sama dengan skill claude.ai
`naskah-natural` (folder `skill-claude/naskah-natural/`), disesuaikan dengan repo ini. Di
repo ini mode poles `sempro` yang dipakai. Kalau skill `naskah-natural` juga termuat, ikuti
file ini karena panduan FDK dan sitasi running note hanya diatur di sini.

Hasil poles adalah draf untuk disunting user. User yang memutuskan istilah dan isi.

## Kontrak

1. **Tulis ulang, jangan pangkas.** Jumlah paragraf dan gagasan sama dengan aslinya.
2. **Angka, nama, rujukan, sitasi, dan rujukan silang dibawa utuh.** Jangan mengganti angka
   dengan kata sifat samar dan jangan menambah fakta.
3. **Jangan mengarang.** Yang kurang ditandai `[PERLU DATA]`, `[PERLU RUJUKAN]`, atau
   `[PERLU VERIFIKASI]`. Penanda yang sudah ada tidak dihapus.
4. **Kekuatan klaim tidak naik.** "Berhubungan" tidak menjadi "berpengaruh". Survei potong
   lintang tidak membuktikan sebab akibat (`comotan/lugas/claim-strength.md`).
5. **Register akademik baku.** Sitasi tetap running note FDK, misalnya (Ebbers, et al., 2016:510).
6. **Nol em dash dan en dash di prosa.** Tanda hubung bentuk ulang tetap dipakai.
7. **Jangan lebih mampat daripada penulisnya.** *itu*, *tersebut*, *akan*, *dapat*, *sudah*,
   *untuk* jangan dibuang semua.
8. **Bahasa disunting, substansi dilaporkan.** Klaim tanpa rujukan dan angka janggal masuk
   poin konfirmasi, tidak diperbaiki diam-diam.
9. **Jangan disunting:** judul, kutipan langsung, nama diri, nama regulasi, dan butir
   kuesioner yang diambil dari instrumen tervalidasi.

## Batas perubahan

Kalau permintaan tidak jelas, ambil pekerjaan yang paling sempit.

| Pekerjaan | Contoh permintaan | Yang boleh diubah |
|---|---|---|
| Koreksi | "cek EYD-nya" | ejaan, tanda baca, kata baku, kapital, angka dan satuan |
| Sunting | "rapikan bahasa", "biar ga kaku" | di atas + susunan kalimat, perangkai, pleonasme, nominalisasi, klise, kalke |
| Tulis ulang | "tulis ulang paragraf ini" | di atas + struktur paragraf dan urutan gagasan |

## Langkah

### 1. Simpan versi lama dan ukur

```bash
cp <tema>/proposal/proposal.md /tmp/sebelum.md
python .claude/skills/sempro/scripts/metrik.py <tema>/proposal/proposal.md --preset akademik
python .claude/skills/sempro/scripts/periksa.py <tema>/proposal/proposal.md
```

Ambang `metrik.py` dikalibrasi pada korpus penulis lain. Pakai sebagai penunjuk arah, bukan
nilai lulus. Kerjakan per komponen FDK, bukan seluruh naskah sekaligus.

### 2. Tandai

Tiga tingkat: **K** (kaidah EYD V, KBBI, TBBBI, wajib diperbaiki), **T** (kalke Inggris),
**AI** (klise mesin). Cari gerombolan pola, bukan pola tunggal. Sebelum menandai, baca
`comotan/naskah-id/pertahankan.md` dan bagian F `comotan/humanizer-indonesia/id-ai-tells.md`.

### 3. Draf

Katalog lengkap ada di `comotan/humanizer-indonesia/id-ai-tells.md` (kode A1 sampai G) dan
`comotan/naskah-id/pola-ai.md`. Yang paling sering:

- Nominalisasi + verba ringan jadi verba langsung: "melakukan pengukuran terhadap" jadi
  "mengukur", "mengalami peningkatan" jadi "naik", "memberikan pengaruh terhadap" jadi
  "memengaruhi".
- Konektor numpuk di awal kalimat (Selain itu, Namun demikian, Oleh karena itu, Dengan
  demikian). Sambung lewat pengulangan kata kunci dan klitik *-nya*.
- "yang mana" dan "di mana/dimana" sebagai penghubung diganti *yang*, *tempat*, *saat*, atau
  kalimat dipecah.
- "merupakan" di tiap kalimat.
- Ritme rata. Selang-seling pendek, panjang, sedang.
- Pleonasme: adalah merupakan, agar supaya, demi untuk, disebabkan karena, banyak
  faktor-faktor, dalam rangka untuk.
- Frasa kosong: sangat penting, memegang peranan penting, tidak dapat dipungkiri, krusial,
  komprehensif, *signifikan* di luar statistik.
- Pembuka dan penutup formula: "Di era digital saat ini", "Seiring perkembangan teknologi",
  "Dengan demikian dapat disimpulkan", "Pada akhirnya".
- Triplet dan deret contoh di belakang "seperti / antara lain / misalnya".
- Info lama di depan kalimat, info baru di belakang.
- Prosa yang dipecah jadi bullet padahal hubungannya naratif dikembalikan jadi paragraf.
- Subjek hilang karena kata depan: "Dari hasil uji menunjukkan" jadi "Hasil uji menunjukkan".

### 4. Uji wajib (walaupun metrik lolos)

**a. Kalke.** Tiap paragraf, tanya: kalimat Inggris apa di balik kalimat ini? Kalau bisa
direkonstruksi klausa demi klausa, tulis ulang gagasannya. Contoh: *memainkan peran* jadi
*berperan*, *mengambil tempat* jadi *berlangsung*, *Tulisan ini mendiskusikan* jadi
*Penelitian ini membahas*. Jangan menukar kalke dengan bahasa birokrat, dan verba baru jangan
melebihkan klaim. Istilah yang berulang (misalnya *layanan tatap muka*, *jemaah daftar
tunggu*) diputuskan sekali bersama user lalu dipakai seragam.

**b. Personifikasi.** Aplikasi, sistem, dan data tidak "tahu", "malas", atau "berani".
Ganti dengan perilaku yang terukur. Frasa kolokial dinaikkan ke register baku tanpa jadi
birokratis.

**c. Pembuka template dan penyangkalan.** "Pertanyaannya sederhana.", "Hasilnya tegas.",
"Perhatikan bahwa.", "Konsekuensinya," maksimal sekali per naskah. "Ini bukan berarti ..."
dan "bukan sekadar X, melainkan Y" dihapus, isinya dinyatakan positif. Kalimat yang cuma
mengumumkan topik paragraf dilebur dengan fakta pertamanya.

**d. Kalimat pendek berderet.** Kalau rerata di bawah 16 kata dan lebih dari 30 persen
kalimat 10 kata ke bawah, gabungkan 2 sampai 3 kalimat dengan *karena*, *sehingga*,
*sedangkan*, *meskipun*, *apabila*. Sisakan satu kalimat pendek penutup paragraf berisi
fakta atau pengakuan batas, bukan punchline. Hitung gagasan sebelum dan sesudah.

### 5. Periksa bukti

```bash
python .claude/skills/sempro/scripts/periksa.py --banding /tmp/sebelum.md <tema>/proposal/proposal.md
python .claude/skills/sempro/scripts/guard.py check /tmp/sebelum.md <tema>/proposal/proposal.md
```

Setiap baris laporan harus bisa dijelaskan. Cek juga manual dengan kontrak
`comotan/lugas/evidence-preservation.md`: arah hubungan, populasi, negasi (*tidak*, *hanya*,
*kecuali*), dan derajat kepastian tetap sama. Untuk parafrase sumber orang lain, ikuti
`comotan/lugas/paraphrasing.md` dan sitasinya wajib tetap ada.

### 6. Audit dan revisi

Tanya diri sendiri secara eksplisit: **apa yang masih membuat teks ini terbaca AI atau
terjemahan?** Jawab dengan daftar pendek, lalu revisi. Kalau ritme masih rata, cek dulu
arahnya: kurang kalimat panjang atau kurang kalimat pendek. Jangan memecah semua kalimat
panjang. Kalau terlalu mampat, kembalikan *itu*, *akan*, *untuk* yang wajar.

Jangan steril juga. Pengakuan keterbatasan dan detail spesifik (angka tidak bulat, nama
kantor, tanggal persis) dipertahankan. Jangan menyisipkan typo palsu.

### 7. Serahkan ke user

1. Bagian yang sudah dipoles (langsung di `<tema>/proposal/proposal.md`).
2. Daftar pendek temuan audit.
3. **Daftar istilah yang diganti beserta alasannya.** Wajib, karena keputusan istilah milik user.
4. **Poin konfirmasi:** klaim yang perlu rujukan, angka yang perlu dicek, sisa penanda `[PERLU ...]`.
5. Penjelasan 3 kalimat santai soal apa yang berubah (aturan CLAUDE.md).

## Kaidah yang sering terlewat

Rincian di `comotan/naskah-id/ejaan-eyd-v.md`, `kata-baku.md`, `kalimat-efektif.md`, dan
`comotan/lugas/bahasa-indonesia.md`. Kalau ragu, grep acuan utuh:

```bash
grep -n -i "kata kunci" acuan/eyd-v.txt | head
grep -n -i "kata kunci" acuan/tbbbi.txt | head
```

- Peluluhan KTSP: *memengaruhi*, *mengubah* (bukan *merubah*), *menaati*.
- Bentuk terikat serangkai: *antarvariabel*, *pascapandemi*, *nonformal*; *non-ASN* di depan kapital.
- *di/ke* kata depan terpisah, *di-* awalan serangkai.
- *pun* terpisah setelah kata tanya dan nomina, serangkai pada *meskipun*, *walaupun*, *maupun*, *adapun*.
- Kata baku: analisis, praktik, risiko, efektivitas, aktivitas, objek, izin, tolok ukur, linear.
- Konjungsi berpasangan dibuang salah satu: *Meskipun ..., tetapi*; *Karena ..., maka*.
- *Sedangkan* dan *sehingga* tidak membuka kalimat.
- Perbandingan memakai *daripada*.
- Hindari *saya*; pakai pasif atau *peneliti* sesuai kebiasaan FDK.
- Desimal pakai koma, spasi sebelum satuan kecuali persen.
- Istilah asing dimiringkan dan diberi padanan pada kemunculan pertama.
- Singkatan dijelaskan pada kemunculan pertama, nama lembaga dan aplikasi dicek ke sumber resmi.
