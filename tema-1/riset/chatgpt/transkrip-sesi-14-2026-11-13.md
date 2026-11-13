# Bekal Sesi 14 sudah saya baca sampai bagian paling akhir. Saya menggunakan Bekal tersebut sebagai acuan utama, termasuk seluruh keputusan FINAL dan batas pekerjaan. Saya juga sudah memeriksa bagian G.8 Teknik Analisis Data pada draf proposal.

Kita tetap berada di Tahap 15. Tidak ada penulisan ulang paragraf proposal dan tidak ada pekerjaan Tahap 16.

### **1. Audit bagian Teknik Analisis Data**

Draf yang diaudit terdiri atas tujuh butir, mulai dari statistik deskriptif hingga hipotesis statistik.

|  **No.**  |  **Isi draf**  |  **Status**  |  **Alasan**  |  **Perbaikan minimal**  | 
|---|---|---|---|---|
|  1  |  Statistik deskriptif menggunakan frekuensi, persentase, rata-rata, simpangan baku, dan kategori rendah, sedang, tinggi.  |  RAGU  |  Frekuensi dan persentase karakteristik responden sudah tepat. Rata-rata empat butir X dapat digunakan. Namun, Y hanya satu butir dengan lima pilihan ordinal sehingga penggunaan rata-rata dan simpangan baku perlu dipertimbangkan. Dasar kategori rendah, sedang, tinggi belum tersedia.  |  Pertahankan frekuensi dan persentase. X menggunakan rata-rata dan simpangan baku. Y menggunakan frekuensi dan persentase setiap pilihan. Hapus pengelompokan kategori yang belum memiliki dasar.  |
|  2  |  Regresi linear sederhana dengan persamaan Y = a + bX.  |  RAGU  |  Y merupakan satu butir dengan lima pilihan berurutan. Regresi linear mengharuskan perlakuan Y sebagai data kuantitatif yang sesuai untuk model linear. Bekal belum menyediakan dasar untuk memperlakukan Y sebagai interval.  |  Jangan langsung menetapkan regresi linear sebagai teknik utama. Pertimbangkan korelasi Spearman apabila Y diperlakukan sebagai ordinal.  |
|  3  |  Uji normalitas residual Kolmogorov–Smirnov dan uji linearitas sebelum regresi.  |  RAGU  |  Kedua pemeriksaan berkaitan dengan rencana regresi. Jika menggunakan korelasi Spearman, pengujian normalitas residual regresi tidak diperlukan sebagai prasyarat analisis tersebut. Bekal juga belum memberikan rujukan khusus untuk prosedur uji yang disebutkan.  |  Jika Spearman dipilih, keluarkan kedua pengujian tersebut. Jika regresi dipertahankan, dasar pengujian dan kriterianya harus dilengkapi.  |
|  4  |  Uji t pada taraf 0,05, kemudian membaca koefisien korelasi dan R².  |  RAGU  |  Uji t dan R² berkaitan dengan model regresi. Untuk korelasi Spearman, hasil utama yang dibaca adalah koefisien korelasi dan signifikansinya. R² bukan ukuran utama hubungan peringkat.  |  Gunakan koefisien korelasi dan nilai signifikansi. Terapkan pengujian dua arah pada α = 0,05.  |
|  5  |  Spearman digunakan apabila asumsi regresi tidak terpenuhi karena Y hanya satu butir berskala lima poin.  |  RAGU  |  Pemilihan Spearman sudah mengarah ke teknik yang tepat, tetapi alasannya kurang tepat. Dasar utamanya adalah tingkat pengukuran ordinal Y, bukan sekadar karena asumsi regresi gagal.  |  Jika Y dipertahankan sebagai ordinal, Spearman menjadi teknik utama, bukan sekadar alternatif.  |
|  6  |  Seluruh analisis menggunakan SPSS.  |  AMAN  |  Tidak bertentangan dengan keputusan FINAL maupun desain penelitian.  |  Pertahankan.  |
|  7  |  H0: β1 = 0 dan H1: β1 > 0.  |  SALAH  |  H1 menetapkan arah positif, sedangkan FINAL 16 menetapkan hipotesis tidak berarah. Simbol β1 juga mengikuti model regresi, bukan parameter korelasi Spearman.  |  Untuk Spearman: H0: ρs = 0 dan H1: ρs ≠ 0.  |
Kesimpulan audit:

* 1 butir AMAN.
* 5 butir RAGU.
* 1 butir SALAH.
Ada satu hal penting: desain korelasional tidak otomatis melarang regresi. Namun, pemilihan regresi linear untuk penelitian ini memerlukan dasar perlakuan Y sebagai data interval. Dasar tersebut belum tersedia dalam Bekal.

Perumpamaannya begini: Y seperti tangga dengan lima anak tangga. Kita tahu urutannya dari kemungkinan paling kecil sampai paling besar, tetapi belum tentu jarak ant anak tangganya sama. Karena itu, tidak boleh langsung memperlakukannya seperti penggaris.

### **2. Rencana analisis data**

Berikut rancangan analisis yang paling konsisten dengan keputusan FINAL.

|  **Pertanyaan penelitian**  |  **Data yang dipakai**  |  **Teknik**  |  **Cara membaca hasil**  |  **Rujukan dan halaman**  | 
|---|---|---|---|---|
|  1. Bagaimana persepsi kompleksitas jemaah terhadap persoalan mundurnya estimasi keberangkatan?  |  Empat butir X (D1–D4), masing-masing berskala 1–7.  |  Menghitung rata-rata empat butir. Skor komposit berada pada rentang 1–7. Statistik deskriptif berupa rata-rata, simpangan baku, serta sebaran jawaban setiap butir.  |  Rata-rata menunjukkan tingkat persepsi kompleksitas dalam sampel. Simpangan baku menggambarkan variasi jawaban. Tidak perlu mengelompokkan menjadi rendah, sedang, dan tinggi tanpa dasar yang jelas.  |  Maynard & Hakel (1997:313, 330).  |
|  2. Bagaimana kemungkinan jemaah menggunakan layanan tatap muka ketika menghadapi persoalan tersebut?  |  Satu butir Y (C), dengan lima pilihan jawaban berurutan dan skor 1–5.  |  Memperlakukan Y sebagai ordinal. Menyajikan frekuensi dan persentase untuk masing-masing pilihan jawaban. Tidak menjumlahkan atau merata-ratakan butir Y karena hanya ada satu butir.  |  Menunjukkan distribusi kemungkinan penggunaan layanan tatap muka, mulai dari sangat kecil hingga sangat besar.  |  Ebbers, et al. (2016:510); Bergkvist & Rossiter (2007:175–178); Machali (2021:151).  |
|  3. Bagaimana arah dan besar hubungan X dengan Y?  |  Skor rata-rata X dan skor ordinal Y.  |  Rekomendasi: korelasi Rank Spearman. Pengujian dua arah dengan α = 0,05. H0: ρs = 0. H1: ρs ≠ 0.  |  Koefisien positif menunjukkan hubungan searah; koefisien negatif menunjukkan hubungan berlawanan arah. Nilai absolut koefisien menunjukkan besar hubungan. Nilai p < 0,05 menunjukkan hubungan signifikan secara statistik.  |  Machali (2021:151); Cohen (1992:156–157).  |
|  4. Bagaimana kualitas masing-masing butir X?  |  D1, D2, D3, dan D4.  |  Korelasi butir-total terkoreksi. Setiap butir dikorelasikan dengan jumlah skor tiga butir lainnya.  |  Nilai di bawah 0,30 menjadi tanda bahwa butir perlu ditinjau, bukan otomatis dihapus. Jenis koefisien korelasinya masih perlu ditetapkan.  |  Stefana, et al. (2025:14). Jenis koefisien: [PERLU RUJUKAN].  |
|  5. Bagaimana gambaran karakteristik dan kondisi responden?  |  Jenis kelamin, usia, pendidikan, tahun pendaftaran, pengalaman mengecek estimasi melalui aplikasi/situs web, pengalaman datang ke kantor, serta pengalaman estimasi mundur.  |  Statistik deskriptif berupa frekuensi dan persentase.  |  Menggambarkan karakteristik dan pengalaman responden. Data ini bukan variabel bebas tambahan, variabel kontrol, atau dasar pengujian hipotesis.  |  Kuesioner FINAL Tahap 13 dalam Bekal Sesi 14. Tidak ada rujukan statistik khusus yang dicantumkan dalam Bekal.  |
|  6. Bagaimana gambaran proses perekrutan dan pengisian kuesioner?  |  Jalur perolehan tautan (staf kantor, KBIHU, loket, lainnya) serta status pengisian (sendiri atau dibantu).  |  Frekuensi dan persentase.  |  Menggambarkan distribusi responden berdasarkan jalur perekrutan dan cara pengisian. Tidak digunakan untuk menyimpulkan bahwa salah satu jalur menghasilkan jawaban yang lebih baik.  |  Kuesioner FINAL Tahap 13 dalam Bekal Sesi 14. Tidak ada rujukan khusus yang dicantumkan.  |
|  7. Bagaimana batas penafsiran hasil penelitian?  |  Seluruh skor X dan Y serta karakteristik responden.  |  Interpretasi korelasional dengan memperhatikan teknik sampling dan sifat skenario hipotetis.  |  Hasil menunjukkan hubungan pada responden yang berpartisipasi, bukan bukti sebab-akibat dan bukan generalisasi ketat kepada seluruh populasi. Jawaban Y menunjukkan kemungkinan yang dinyatakan dalam skenario, bukan perilaku aktual. Persepsi X mencakup gabungan estimasi yang mundur dan tidak adanya penjelasan alasan perubahan.  |  Keputusan FINAL 9, 11, 17, dan 18 dalam Bekal Sesi 14.  |
### **Catatan penting untuk setiap bagian**

A. Perhitungan skor X

Sesuai Maynard dan Hakel (1997:313), skor kompleksitas dihitung menggunakan rata-rata empat butir.

X=\frac{D1+D2+D3+D4}{4}

Rentang skor tetap 1–7.

B. Perlakuan skor Y

Y memiliki satu pertanyaan dengan lima jawaban:

|  **Jawaban**  |  **Kode**  | 
|---|---|
|  Sangat kecil kemungkinannya  |  1  |
|  Kecil kemungkinannya  |  2  |
|  Ragu-ragu  |  3  |
|  Besar kemungkinannya  |  4  |
|  Sangat besar kemungkinannya  |  5  |
Skor ini dipertahankan sebagai ordinal. Tidak perlu mengubahnya menjadi skor komposit.

C. Interpretasi besar hubungan

Cohen (1992:157) memberikan acuan ukuran efek korelasi berikut.

|  **Besar koefisien absolut**  |  **Interpretasi**  | 
|---|---|
|  0,10  |  Kecil  |
|  0,30  |  Sedang  |
|  0,50  |  Besar  |
Angka tersebut merupakan pedoman interpretasi, bukan batas mutlak untuk menilai kualitas penelitian.

D. Batas interpretasi

Ada tiga batas yang harus dipertahankan:

* Purposive sampling: hasil tidak digeneralisasi secara ketat kepada seluruh jemaah haji reguler daftar tunggu Kabupaten Bandung.
* Skenario hipotetis: jawaban menggambarkan penilaian responden terhadap situasi yang dibayangkan, bukan tindakan aktual.
* Kompleksitas gabungan: penelitian tidak dapat memisahkan hubungan persepsi kompleksitas akibat mundurnya estimasi dari akibat tidak adanya penjelasan perubahan.
### **3. Keputusan yang perlu Anda ambil**

Saya hanya mengajukan keputusan pertama sekarang. Keputusan berikutnya menunggu keputusan ini selesai.

### **Keputusan 1. Teknik uji hubungan X dan Y**

Ada tiga alternatif yang dapat dipertimbangkan.

A. Korelasi Rank Spearman

Rekomendasi

Kelebihan:

* Sesuai untuk data ordinal.
* Tidak mengharuskan Y diperlakukan sebagai interval.
* Menghasilkan arah dan besar hubungan.
* Cocok dengan hipotesis tidak berarah.
Kekurangan:

- Tabel daya uji Cohen (1992:158) secara khusus menggunakan korelasi product-moment. Penerapan perhitungan daya uji tersebut untuk Spearman masih PERLU RUJUKAN.

Didukung Bekal: Machali (2021:151); Cohen (1992:156–157).

B. Korelasi Pearson Product Moment

Kelebihan:

* Sesuai apabila kedua variabel diperlakukan sebagai interval atau rasio dan memenuhi kondisi distribusi normal.
* Selaras dengan dasar tabel daya uji Cohen (1992:157–158).
Kekurangan:

* Y saat ini berupa satu butir dengan lima pilihan ordinal.
* Memerlukan justifikasi untuk memperlakukan Y sebagai interval.
* Kesesuaian perlakuan interval terhadap Y satu butir tersebut masih PERLU RUJUKAN.
Didukung Bekal: Machali (2021:156–157); Cohen (1992:156–158).

C. Regresi Linear Sederhana

Kelebihan:

- Dapat menggambarkan hubungan linear melalui koefisien regresi apabila karakteristik data dan model mendukung.

Kekurangan:

* Y berupa satu butir dengan lima pilihan ordinal.
* Memerlukan justifikasi perlakuan Y sebagai data interval.
* Dasar pemilihan model, asumsi regresi, dan interpretasi R² belum tersedia dalam rujukan metodologi Bekal.
* Seluruh dasar tersebut masih PERLU RUJUKAN.
Didukung Bekal: Belum ada rujukan metodologis khusus yang mendukung penggunaan regresi linear untuk pengukuran Y penelitian ini.

### **Rekomendasi saya**

Saya merekomendasikan A, korelasi Rank Spearman.

Alasannya sederhana: karakteristik pengukuran Y sejak awal berupa lima pilihan berurutan. Machali (2021:151) secara eksplisit memberikan dasar penggunaan Spearman untuk data ordinal.

Selain itu, hipotesis penelitian tidak berarah. Dengan demikian, pengujian dilakukan dua arah, bukan hanya mencari hubungan positif.

Ada satu catatan metodologis yang tidak boleh disembunyikan: dasar ukuran sampel dari tabel Cohen (1992:158) menggunakan korelasi product-moment. Apabila Spearman dipilih, keterkaitan dasar perhitungan daya uji tersebut masih membutuhkan PERLU RUJUKAN. Catatan ini tidak mengubah target sampel FINAL yang telah ditetapkan.

Silakan tetapkan keputusan pertama:

Teknik uji hubungan X dan Y

A. Korelasi Rank Spearman (rekomendasi)

B. Korelasi Pearson Product Moment

C. Regresi Linear Sederhana

Tetapkan pilihan

Tahap: 15 | Keputusan baru: rekomendasi Spearman, belum ditetapkan | Yang perlu dicek: dasar koefisien korelasi untuk butir-total terkoreksi dan dasar kategorisasi skor.

Keputusan pertama sudah ditetapkan.

Teknik uji hubungan X dan Y: Korelasi Rank Spearman.

Implikasinya, Spearman menjadi teknik utama, bukan lagi alternatif apabila asumsi regresi tidak terpenuhi. Regresi linear sederhana, uji t regresi, dan R² dikeluarkan dari rencana analisis utama.

Bentuk hipotesis statistik yang digunakan:

H_0:\rho_s=0H_1:\rho_s\neq 0

Ketentuannya:

* Pengujian dua arah (two-tailed).
* Taraf signifikansi 0,05.
* Jika , terdapat hubungan yang signifikan secara statistik.
* Jika , tidak terdapat bukti statistik yang cukup untuk menyatakan adanya hubungan.
* Tanda koefisien menunjukkan arah hubungan, sedangkan nilai absolutnya menunjukkan besar hubungan.
Kita tetap menggunakan bahasa hubungan, bukan pengaruh atau sebab-akibat.

### **1. Audit ulang tujuh butir setelah pilihan A**

Setelah Spearman ditetapkan, status beberapa bagian draf berubah karena struktur analisisnya sekarang sudah jelas.

|  **No.**  |  **Isi draf**  |  **Status terbaru**  |  **Alasan**  |  **Perbaikan minimal**  | 
|---|---|---|---|---|
|  1  |  Deskriptif X dan Y menggunakan rata-rata, simpangan baku, dan kategori rendah, sedang, tinggi.  |  RAGU  |  X dapat menggunakan rata-rata dan simpangan baku. Y merupakan data ordinal satu butir sehingga lebih tepat disajikan melalui frekuensi dan persentase. Kategori belum memiliki dasar.  |  X: rata-rata, SD, sebaran jawaban. Y: frekuensi dan persentase. Hapus kategori rendah, sedang, tinggi.  |
|  2  |  Regresi linear sederhana.  |  SALAH  |  Tidak sesuai dengan teknik inferensial yang sudah dipilih.  |  Ganti dengan korelasi Rank Spearman.  |
|  3  |  Uji normalitas residual dan linearitas.  |  SALAH  |  Kedua pengujian merupakan bagian dari rencana regresi yang sudah ditinggalkan.  |  Hapus dari rencana analisis Spearman.  |
|  4  |  Uji t dan R².  |  SALAH  |  Bukan keluaran utama pengujian korelasi Spearman.  |  Gunakan koefisien Spearman dan nilai signifikansi.  |
|  5  |  Spearman sebagai alternatif ketika asumsi regresi tidak terpenuhi.  |  RAGU  |  Tekniknya benar, tetapi kedudukannya keliru. Spearman sekarang merupakan teknik utama karena pertimbangan skala ordinal Y.  |  Jadikan Spearman sebagai teknik utama sejak awal.  |
|  6  |  Seluruh analisis menggunakan SPSS.  |  AMAN  |  Tidak bertentangan dengan keputusan penelitian.  |  Pertahankan.  |
|  7  |  H0: β1 = 0 dan H1: β1 > 0.  |  SALAH  |  Tidak sesuai dengan hipotesis tidak berarah dan parameter korelasi Spearman.  |  Ganti menjadi H0: ρs = 0 dan H1: ρs ≠ 0.  |
Audit berdasarkan isi G.8 proposal dan Bahan Tahap 15 Bekal Sesi 14.

### **2. Rencana analisis data yang diperbarui**

Berikut rancangan yang sudah menyesuaikan pilihan Spearman.

|  **Pertanyaan penelitian**  |  **Data yang dipakai**  |  **Teknik**  |  **Cara membaca hasil**  |  **Rujukan dan halaman**  | 
|---|---|---|---|---|
|  Bagaimana persepsi kompleksitas (X)?  |  D1–D4, skala 1–7.  |  Rata-rata empat butir dan statistik deskriptif.  |  Rata-rata menunjukkan tingkat persepsi kompleksitas; SD menunjukkan variasi jawaban.  |  Maynard & Hakel (1997:313, 330).  |
|  Bagaimana kemungkinan penggunaan layanan tatap muka (Y)?  |  Satu butir, skala ordinal 1–5.  |  Distribusi frekuensi dan persentase setiap pilihan.  |  Menunjukkan sebaran kemungkinan responden datang ke kantor. Tidak perlu kategori rendah, sedang, tinggi.  |  Ebbers, et al. (2016:510); Machali (2021:151).  |
|  Bagaimana hubungan X dan Y?  |  Skor rata-rata X dan skor ordinal Y.  |  Korelasi Rank Spearman, dua arah, α = 0,05.  |  Koefisien positif berarti hubungan searah; negatif berarti berlawanan arah. Nilai p menentukan signifikansi statistik.  |  Machali (2021:151); Cohen (1992:156–157).  |
|  Bagaimana besar hubungan X dan Y?  |  Koefisien Spearman.  |  Interpretasi nilai absolut koefisien.  |  0,10 kecil; 0,30 sedang; 0,50 besar.  |  Cohen (1992:157).  |
|  Bagaimana validitas butir X?  |  Setiap butir X dan jumlah tiga butir lainnya.  |  Korelasi butir-total terkoreksi. Jenis koefisien menunggu keputusan kedua.  |  Nilai di bawah 0,30 menandakan butir perlu ditinjau, bukan otomatis dihapus.  |  Stefana, et al. (2025:14).  |
|  Bagaimana reliabilitas X?  |  Empat butir X.  |  Alpha Cronbach.  |  Nilai 0,70–0,95 dapat diterima. Hasil dihitung menggunakan data utama.  |  Tavakol & Dennick (2011:54); Stefana, et al. (2025:11).  |
|  Bagaimana karakteristik dan pengalaman responden?  |  Jenis kelamin, usia, pendidikan, tahun pendaftaran, pengalaman menggunakan aplikasi, pengalaman datang ke kantor, dan pengalaman estimasi mundur.  |  Frekuensi dan persentase.  |  Menggambarkan karakteristik sampel, bukan menguji hipotesis tambahan.  |  Kuesioner FINAL Tahap 13.  |
|  Bagaimana gambaran perekrutan dan pengisian?  |  Jalur tautan formulir serta pengisian sendiri atau dibantu.  |  Frekuensi dan persentase.  |  Menjelaskan distribusi jalur perekrutan dan cara pengisian. Tidak diperlakukan sebagai variabel kontrol.  |  Kuesioner FINAL Tahap 13.  |
|  Bagaimana hasil penelitian ditafsirkan?  |  Seluruh data X dan Y serta karakteristik responden.  |  Interpretasi korelasional dengan memperhatikan desain dan sampling.  |  Tidak menyimpulkan sebab-akibat atau menggeneralisasi secara ketat kepada seluruh populasi. Jawaban merupakan respons terhadap skenario hipotetis, bukan perilaku aktual.  |  FINAL 9, 11, 17, dan 18 Bekal Sesi 14.  |
### **3. Catatan audit yang belum boleh terlewat**

Ada satu persoalan metodologis yang muncul setelah Spearman dipilih.

Kecocokan perhitungan sampel dengan teknik inferensial.

FINAL 18 menetapkan:

* Minimum 85 responden.
* Target 100 responden.
* Daya uji 0,80.
* Taraf signifikansi 0,05.
* Efek korelasi sedang, r = 0,30.
Namun, Cohen (1992:158) menggunakan tabel untuk korelasi product-moment, bukan secara khusus korelasi Spearman.

Artinya, keputusan FINAL mengenai jumlah sampel tidak saya ubah. Akan tetapi, klaim bahwa 85 responden secara langsung menjamin daya uji 0,80 untuk Spearman masih PERLU RUJUKAN.

Hal ini perlu dibedakan agar proposal tidak membuat klaim metodologis yang lebih luas daripada dukungan sumbernya.

### **4. Keputusan kedua: jenis korelasi untuk uji butir-total terkoreksi**

Ini keputusan terakhir yang masih perlu Anda tetapkan dalam Tahap 15.

Ada dua alternatif.

A. Spearman

Rekomendasi

Setiap butir X dikorelasikan dengan jumlah skor tiga butir lainnya menggunakan korelasi Rank Spearman.

Kelebihan:

* Konsisten dengan perlakuan data ordinal.
* Sejalan dengan pilihan Spearman untuk hubungan X dan Y.
* Dapat menggunakan prosedur korelasi butir-total terkoreksi.
Keterbatasan:

* Stefana, et al. (2025:14) mendukung prosedur korelasi butir-total terkoreksi, tetapi tidak secara eksplisit menetapkan Spearman.
* Penerapan spesifiknya masih memerlukan PERLU RUJUKAN.
Dukungan: Machali (2021:151) dan Stefana, et al. (2025:14).

B. Pearson Product Moment

Setiap butir X dikorelasikan dengan jumlah skor tiga butir lainnya menggunakan Pearson.

Kelebihan:

* Machali memberikan dasar Pearson untuk data interval atau rasio yang berdistribusi normal.
* Dapat digunakan apabila perlakuan skor memang memenuhi dasar pengukurannya.
Keterbatasan:

* Butir individual X menggunakan skala tujuh poin.
* Perlakuan butir tersebut sebagai interval dan pemenuhan persyaratan Pearson memerlukan justifikasi.
* Dasar spesifik penggunaannya untuk instrumen ini masih PERLU RUJUKAN.
Dukungan: Machali (2021:156–157); Stefana, et al. (2025:14).

Rekomendasi saya: A, Spearman.

Alasannya, kita tidak perlu memaksakan perlakuan interval terhadap jawaban butir Likert. Prosedur korelasi butir-total tetap mengikuti FINAL 21, sedangkan jenis koefisien disesuaikan dengan sifat ordinal data.

Perumpamaannya, kita sedang memeriksa apakah setiap bagian tangga sejalan dengan keseluruhan tangga. Karena yang dibandingkan adalah urutan skor, korelasi peringkat menjadi pilihan yang konsisten.

Tetapkan keputusan kedua

A. Spearman untuk korelasi butir-total terkoreksi

B. Pearson untuk korelasi butir-total terkoreksi

Tetapkan keputusan kedua

Setelah keputusan kedua ditetapkan, kita dapat mengunci rencana analisis Tahap 15. Tidak ada kebutuhan untuk mengerjakan pengumpulan data, uji coba, atau analisis empiris sebelum seminar.

Tahap: 15 | Keputusan baru: A, Spearman untuk hubungan X–Y (FINAL) | Yang perlu dicek: jenis korelasi butir-total terkoreksi dan justifikasi daya uji Spearman.

Keputusan kedua sudah ditetapkan.

Korelasi butir-total terkoreksi menggunakan Rank Spearman.

Dengan demikian, kedua keputusan utama Tahap 15 sudah lengkap:

|  **Komponen**  |  **Keputusan**  |  **Status**  | 
|---|---|---|
|  Hubungan X dan Y  |  Korelasi Rank Spearman  |  FINAL  |
|  Validitas butir X  |  Korelasi butir-total terkoreksi menggunakan Spearman  |  FINAL  |
Sekarang saya lakukan penguncian hasil audit terakhir.

### **1. Hasil akhir audit tujuh butir**

|  **No.**  |  **Isi draf**  |  **Status akhir**  |  **Alasan**  |  **Perbaikan minimal**  | 
|---|---|---|---|---|
|  1  |  Statistik deskriptif dan kategori rendah, sedang, tinggi  |  RAGU  |  Kategori tidak memiliki dasar rujukan. Statistik Y harus menyesuaikan skala ordinal.  |  X: rata-rata dan SD. Y: frekuensi dan persentase. Hilangkan kategori.  |
|  2  |  Regresi linear sederhana  |  SALAH  |  Tidak digunakan setelah keputusan Spearman.  |  Ganti dengan korelasi Rank Spearman.  |
|  3  |  Normalitas residual dan linearitas  |  SALAH  |  Tidak diperlukan dalam rencana korelasi Spearman.  |  Hapus kedua pengujian.  |
|  4  |  Uji t dan R²  |  SALAH  |  Bukan prosedur utama pengujian korelasi Spearman.  |  Gunakan koefisien Spearman dan signifikansi.  |
|  5  |  Spearman sebagai alternatif jika asumsi regresi gagal  |  SALAH  |  Kedudukan Spearman sudah ditetapkan sebagai teknik utama.  |  Jadikan Spearman teknik utama sejak awal.  |
|  6  |  Seluruh analisis menggunakan SPSS  |  AMAN  |  Tidak bertentangan dengan keputusan penelitian.  |  Pertahankan.  |
|  7  |  H0: β1 = 0 dan H1: β1 > 0  |  SALAH  |  Tidak sesuai dengan hipotesis tidak berarah.  |  Gunakan H0: ρs = 0 dan H1: ρs ≠ 0.  |
Sumber audit: G.8 Teknik Analisis Data pada draf proposal dan Bahan Tahap 15 Bekal Sesi 14.

Rekapitulasi:

### **1**

AMAN

### **1**

RAGU

### **5**

SALAH

### **2. Rencana analisis data final**

Berikut rancangan yang dikunci berdasarkan keputusan FINAL dan dua pilihan yang baru Anda tetapkan.

|  **Pertanyaan penelitian**  |  **Data yang dipakai**  |  **Teknik**  |  **Cara membaca hasil**  |  **Rujukan dan halaman**  | 
|---|---|---|---|---|
|  1. Bagaimana persepsi kompleksitas persoalan (X)?  |  Empat butir D1–D4, skala 1–7.  |  Menghitung rata-rata empat butir, rata-rata, SD, dan sebaran jawaban.  |  Rata-rata menunjukkan tingkat persepsi kompleksitas; SD menunjukkan variasi jawaban.  |  Maynard & Hakel (1997:313, 330).  |
|  2. Bagaimana kemungkinan penggunaan layanan tatap muka (Y)?  |  Satu butir C, skala ordinal 1–5.  |  Frekuensi dan persentase setiap pilihan jawaban.  |  Menggambarkan distribusi kemungkinan penggunaan layanan tatap muka.  |  Ebbers, et al. (2016:510); Machali (2021:151).  |
|  3. Bagaimana arah dan besar hubungan X dan Y?  |  Skor rata-rata X dan skor ordinal Y.  |  Korelasi Rank Spearman, pengujian dua arah, α = 0,05.  |  Koefisien positif menunjukkan hubungan searah; negatif menunjukkan hubungan berlawanan arah. Signifikansi dilihat dari nilai p.  |  Machali (2021:151); Cohen (1992:156–157).  |
|  4. Bagaimana kualitas butir X?  |  Setiap butir D1–D4 dan jumlah tiga butir lainnya.  |  Korelasi butir-total terkoreksi menggunakan Spearman.  |  Nilai di bawah 0,30 menjadi tanda butir perlu ditinjau, bukan otomatis dihapus.  |  Stefana, et al. (2025:14); Machali (2021:151).  |
|  5. Bagaimana reliabilitas X?  |  Empat butir D1–D4.  |  Alpha Cronbach.  |  Nilai 0,70–0,95 dapat diterima. Penghitungan menggunakan data utama.  |  Tavakol & Dennick (2011:54); Stefana, et al. (2025:11).  |
|  6. Bagaimana gambaran karakteristik responden?  |  Jenis kelamin, usia, pendidikan, tahun pendaftaran, dan pengalaman responden.  |  Frekuensi dan persentase.  |  Menjelaskan karakteristik sampel, bukan menguji hubungan tambahan.  |  Kuesioner FINAL Tahap 13.  |
|  7. Bagaimana gambaran proses perekrutan dan pengisian?  |  Jalur tautan, pengisian sendiri atau dibantu, pengalaman estimasi mundur, pengalaman mengecek aplikasi, dan pengalaman datang ke kantor.  |  Frekuensi dan persentase.  |  Hanya menjadi informasi pendukung untuk menggambarkan responden dan proses pengisian. Tidak menjadi variabel penelitian tambahan.  |  Kuesioner FINAL Tahap 13.  |
|  8. Bagaimana batas penafsiran hasil?  |  Seluruh hasil analisis X dan Y.  |  Interpretasi korelasional.  |  Tidak menyimpulkan sebab-akibat dan tidak melakukan generalisasi ketat kepada seluruh populasi. Jawaban merupakan penilaian atas skenario hipotetis, bukan perilaku aktual.  |  FINAL 9, 11, 17, dan 18 Bekal Sesi 14.  |
### **3. Ketentuan teknis yang dikunci**

A. Perhitungan skor X

X=\frac{D1+D2+D3+D4}{4}

Skor berkisar 1–7. Penghitungan menggunakan rata-rata empat butir sebagaimana instrumen Maynard dan Hakel (1997:313).

B. Pengujian hubungan X dan Y

H_0:\rho_s=0H_1:\rho_s\neq0

* Pengujian dua arah.
* Taraf signifikansi 0,05.
* : hubungan signifikan secara statistik.
* : tidak terdapat bukti statistik yang cukup untuk menyatakan hubungan signifikan.
C. Interpretasi besar hubungan

|  **Koefisien absolut**  |  **Interpretasi**  | 
|---|---|
|  0,10  |  Kecil  |
|  0,30  |  Sedang  |
|  0,50  |  Besar  |
Acuan: Cohen (1992:157).

D. Validitas butir X

Contohnya:

* D1 dikorelasikan dengan D2 + D3 + D4.
* D2 dikorelasikan dengan D1 + D3 + D4.
* D3 dikorelasikan dengan D1 + D2 + D4.
* D4 dikorelasikan dengan D1 + D2 + D3.
Seluruhnya menggunakan Spearman. Nilai di bawah 0,30 menjadi bahan peninjauan, bukan penghapusan otomatis.

E. Reliabilitas

Alpha Cronbach hanya untuk X yang memiliki empat butir. Y tidak diuji menggunakan Alpha Cronbach karena hanya terdiri atas satu butir.

### **4. Catatan yang masih membutuhkan rujukan**

Ada dua persoalan yang perlu dicatat secara transparan. Saya tidak akan mengarang dukungan metodologis untuk membuat tabel terlihat lengkap.

|  **No.**  |  **Persoalan**  |  **Yang didukung Bekal**  |  **Yang masih diperlukan**  | 
|---|---|---|---|
|  1  |  Spearman untuk korelasi butir-total terkoreksi  |  Machali (2021:151) mendukung Spearman untuk data ordinal. Stefana, et al. (2025:14) mendukung prosedur korelasi butir-total terkoreksi.  |  [PERLU RUJUKAN] Sumber yang secara khusus menjelaskan penerapan Spearman pada korelasi butir-total terkoreksi.  |
|  2  |  Kesesuaian ukuran sampel dengan Spearman  |  Cohen (1992:156–158) mendukung perhitungan daya uji korelasi product-moment, dua arah, α = 0,05.  |  [PERLU RUJUKAN] Dasar perhitungan daya uji khusus korelasi Spearman.  |
Catatan mengenai sampel: angka minimum 85 dan target 100 tetap dipertahankan karena merupakan keputusan FINAL 18. Namun, jangan menyatakan bahwa tabel Cohen secara langsung membuktikan daya uji Spearman sebesar 0,80. Itu dua hal yang berbeda.

Untuk melengkapi dua bagian tersebut diperlukan sumber metodologi eksternal yang membahas korelasi butir-total berbasis peringkat dan analisis daya uji Spearman. Saya tidak mencari sumber luar karena batas sumber yang Anda tetapkan.

### **5. Keputusan akhir Tahap 15**

Tahap 15: Audit analisis data

SELESAI DIAUDIT

Keputusan yang telah ditetapkan:

* Korelasi Rank Spearman untuk hubungan X dan Y.
* Pengujian hipotesis dua arah.
* Taraf signifikansi 0,05.
* Spearman untuk korelasi butir-total terkoreksi.
* Statistik deskriptif disesuaikan dengan skala X dan Y.
* Alpha Cronbach untuk X.
* Data pendukung hanya bersifat deskriptif.
* Batas interpretasi sesuai desain korelasional dan purposive sampling.
* Regresi, uji normalitas residual, uji linearitas, dan R² dikeluarkan.

* Catatan terbuka:
Dua kebutuhan rujukan masih ditandai PERLU RUJUKAN. Tidak ada klaim yang dibuat tanpa dukungan.

Kesimpulan saya: struktur analisis sekarang sudah konsisten dengan skala pengukuran, hipotesis tidak berarah, dan desain korelasional. Secara metodologis, ini jauh lebih rapi daripada rancangan regresi sebelumnya.

Analogi sederhananya, sekarang alat ukurnya sudah cocok dengan benda yang diukur. Kita tidak lagi menggunakan penggaris untuk mengukur urutan tangga.

Tahap 16 tidak saya kerjakan. Penulisan naskah tetap menjadi pekerjaan di luar percakapan ini sesuai instruksi Anda.

Tahap: 15 | Keputusan baru: Spearman untuk X–Y dan butir-total terkoreksi (keduanya FINAL) | Yang perlu dicek: dua kebutuhan rujukan metodologis yang masih PERLU RUJUKAN.