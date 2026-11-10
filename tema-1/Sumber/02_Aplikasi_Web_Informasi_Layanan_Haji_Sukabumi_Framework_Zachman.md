# Aplikasi Web Informasi Layanan Haji pada Kementerian Haji dan Umrah Kota Sukabumi dengan Menggunakan Framework Zachman

**Berkas sumber:** Aplikasi Web Informasi Layanan Haji pada Kementerian Haji dan Umrah Kota Sukabumi dengan Menggunakan Framework Zachman(1).pdf  
**Jumlah halaman PDF:** 12  
**Metode konversi:** Ekstraksi lapisan teks PDF.

> Konversi isi PDF, bukan ringkasan atau terjemahan. Penanda halaman mengikuti urutan halaman PDF, termasuk sampul. Tabel, rumus, catatan kaki, dan tata letak dapat berubah saat ekstraksi. Gambar halaman sumber disertakan pada halaman yang terdeteksi memuat tabel atau ilustrasi.

---

## Halaman PDF 1

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Aplikasi Web Informasi Layanan Haji pada Kementerian Haji dan Umrah
Kota Sukabumi dengan Menggunakan Framework Zachman
Zainul Bahar*1, Sudin Saepudin1

1Sistem Informasi, Universitas Nusa Putra, Indonesia

*e-mail: zainul.bahar_si24@nusaputra.ac.id

Abstrak
Pelayanan haji di Kementerian Haji dan Umrah Kota Sukabumi masih terkendala beberapa
masalah, terutama dalam hal pelayanan informasi, transparansi proses pelayanan, serta belum
tersedianya Aplikasi Web resmi yang mampu menyajikan data dan mempermudah pelayanan.
Proses komunikasi yang terkendala harus datang langsung ke kantor dan dilakukan pada jam kantor
saja, yang tentu bagi calon jemaah yang bekerja sebagai karyawan tentu merasa kesulitan, sehingga
menimbulkan keterlambatan informasi dan potensi ketidakefisienan. penelitian ini bertujuan untuk
memetakan kebutuhan arsitektur sistem informasi pelayanan haji dengan menggunakan
Framework Zachman sebagian acuan analisis. Framework ini digunakan karena mampu
memetakan kebutuhan dan memberikan gambaran menyeluruh dari berbagai perspektif, mulai dari
perencanaan, kebutuhan bisnis, desain sistem, hingga model teknis. Sehingga metode seperti ini
dapat membantu menyusun gambaran strategi pelayanan, proses, alur data, aktor hingga rancangan
model informasi seperti Entity Relationship Diagram (ERD). Diharapkan melalui penelitian ini
dapat menghasilkan sebuah arsitektur sistem Web yang dapat meningkatkan kualitas pelayanan
publik, mempercepat akses layanan informasi haji dan memberikan efisiensi internal pada
Kementerian Haji dan Umrah Kota Sukabumi. Dengan demikian mampu meningkatkan kepuasan
dan kepercayaan masyarakat.
Kata kunci: pelayanan haji, sistem informasi, Enterprise, Framework Zachman,
Abstract
Hajj services at the Ministry of Hajj and Umrah in Sukabumi City are currently hindered by several
issues, particularly regarding information services, transparency in the service process, and the
absence of an official web application capable of presenting data and facilitating services. The
communication process is constrained by the requirement for pilgrims to visit the office in person
during working hours, which poses a significant challenge for those employed as full-time workers.
This leads to information delays and potential inefficiencies. This research aims to map the
information system architecture requirements for Hajj services using the Zachman Framework as
an analytical reference. This framework is utilized for its ability to map requirements and provide
a comprehensive overview from various perspectives, ranging from planning and business needs
to system design and technical models. Consequently, this method assists in structuring the service
strategy, processes, data flows, and actors, as well as information model designs such as Entity
Relationship Diagrams (ERD). It is expected that this research will produce a web system
architecture that can enhance the quality of public services, accelerate access to Hajj information
services, and provide internal efficiency for the Ministry of Hajj and Umrah in Sukabumi City,
thereby increasing public satisfaction and trust.
Keywords: Hajj services, information system, Enterprise, Zachman Framework.
1. PENDAHULUAN
Ibadah haji merupakan rukun Islam yang kelima yang tentu nya menjadi impian bagi setiap
umat Islam untuk menunaikan nya [1]. Akan tetapi agama Islam tidak pernah memberatkan bagi
penganutnya untuk melakukan suatu ibadah di luar kemampuan nya, baik secara fisik maupun
materinya. Oleh karena nya ibadah haji ini hanya menjadi kewajiban bagi mereka umat Islam yang
sudah mampu secara materi dan fisik nya, karena ibadah haji bukan hanya bicara tentang biaya yang
tinggi akan tetapi mencakup juga fisik yang kuat dan prima untuk menunaikan nya.
ISSN 3032-5072 | jurnalsinta.id

24

---

## Halaman PDF 2

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Di sinilah peran pemerintah dalam hal ini Kementerian Haji dan Umrah Kota Sukabumi
untuk memfasilitasi semuanya demi kelancaran dan keselamatan jemaah yang menunaikan ibadah
haji tersebut. Meliputi pelayanan saat di tanah air dan nanti saat di tanah suci. Di antaranya
pelayanan saat masih di tanah air meliputi saat pelayanan pertama kali daftar di mana calon jemaah
haji wajib menerima pelayanan yang ramah dan baik dari pada petugas haji dan mendapatkan
informasi tentang ibadah haji dengan jelas dan lengkap [2]. Hingga pada saat nya nanti pada waktu
menjelang keberangkatan jemaah wajib mendapatkan informasi tentang biaya pelunasan ibadah haji
secara transparan dan jelas juga meliputi bimbingan manasik haji dari pihak kementerian agama
guna menjamin jemaah mempunyai pengetahuan tentang tata cara ibadah haji kelak di tanah suci.
Dan juga pelayanan saat nanti sudah di tanah suci seperti pelayanan fasilitas akomodasi,
transformasi dan lain sebagainya guna menjamin jemaah dapat beribadah dengan tenang dan
nyaman di saat di tanah suci.
Namun pada kenyataan di lapangan sering di jumpai nya keluhan calon jemaah haji terhadap
keterbatasan informasi pelayanan ibadah haji Kementerian Haji dan Umrah kota Sukabumi pada
saat melakukan proses pendaftaran dan menggali informasi seputar estimasi keberangkatan,
pembatalan porsi, pelimpahan porsi dan penggabungan mahram sehingga membuat calon jemaah
haji kebingungan dalam masalah persyaratan dokumen yang harus di lengkapi dan informasi akurat
mengenai informasi seputar haji.
Oleh karena itu penulis perlu kiranya untuk membuat sebuah inovasi berbasis teknologi
informasi yang mampu memberikan kemudahan, efisiensi dan kecepatan dalam memperoleh
informasi terkait layanan ibadah haji [3] Salah satu solusi yang di terapkan adalah pembuatan
aplikasi web resmi Kementerian Haji dan Umrah yang terpercaya yang dikelola langsung secara
resmi oleh Kementerian Haji dan Umrah yang mampu menjawab permasalahan di atas seperti
aplikasi web yang berisi tentang informasi tentang persyaratan daftar calon jemaah haji beserta
dokumen yang mesti di lampirkan, pembatalan porsi dari mulai status input kemenag, konfirmasi
subdit hingga sampai berhasil transfer bank, juga informasi dan dokumen pelimpahan porsi yang
harus di lengkapi oleh pemohon dan terakhir informasi tentang penggabungan mahram dan
persyaratan dokumen yang harus di siapkan dan dilengkapi.
Dalam pembuatan nya aplikasi Web ini dirancang menggunakan Framework Zachman,
framework zachman ini di pilih karena mampu memberikan pemetaan arsitektur sistem yang lebih
lengkap dan terstruktur yang memungkinkan perancangan sistem informasi secara terstruktur dan
menyeluruh berdasarkan berbagai perspektif organisasi [4].
Sehingga dengan adanya aplikasi Web ini, diharapkan setiap calon jemaah yang ingin
melakukan pendaftaran porsi haji, pembatalan porsi haji, pelimpahan porsi haji dan penggabungan
mahram tidak perlu kebingungan tentang informasi seputar haji dan dokumen persyaratan seputar
haji yang harus dilengkapi dan meningkatkan efisiensi pelayanan haji di kementerian Haji dan
Umrah kota Sukabumi.
Penelitian ini saya beri judul “Aplikasi Web Informasi Layanan Haji pada Kementerian Haji
dan Umrah Kota Sukabumi dengan Menggunakan Framework Zachman”.
Berdasarkan latar belakang yang di jelaskan di atas, terdapat beberapa masalah yang perlu
di selesaikan, diantaranya bagaimana alur sistem informasi pelayanan informasi haji saat ini yang
sedang berjalan dan apa saja kendala yang dihadapi calon jemaah haji dalam memperoleh informasi
seputar layanan haji,bagaimana implementasi aplikasi web informasi layanan haji menggunakan
framework zachman ini dapat meningkatkan efisiensi, transparansi juga kualitas pelayanan di
kementerian haji dan umrah kota Sukabumi.
Adapun tujuan penelitian ini untuk merancang dan membangun aplikasi web informasi
layanan haji yang berfungsi untuk sarana digital guna menyediakan informasi yang cepat dan mudah
di akses oleh masyarakat, khusunya calon jemaah haji di kota Sukabumi dan meninggkatkan
efisiensi layanan public. Sehingga manfaat dari penelitian ini bisa memberikan kemudahan akses
informasi tentang semua proses dalam pelayanan informasi haji meliputi pendaftaran porsi haji,
pembatalan porsi haji, pelimpahan dan penggabungan mahram secara cepat dan efisien.
ISSN 3032-5072 | jurnalsinta.id

25

---

## Halaman PDF 3

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Dari identifikasi masalah yang terpapar di atas diperoleh gambaran permasalahan yang
begitu luas, namun menyadari adanya keterbatasan waktu dan kemampuan, maka penulis
memandang perlu memberi batasan masalah secara jelas dan terfokus. Selanjutnya masalah yang
menjadi objek penelitian di batasi hanya pada pelayanan haji yang di bahas hanya pada pendaftaran
porsi haji, pembatalan porsi haji, pelimpahan porsi haji, penggabungan mahram dan biaya
pelunasan haji. Aspek lain meliputi bimbingan manasik haji, transportasi dan akomodasi di tanah
suci juga layanan kesehatan belum termasuk pada pembahasan penelitian ini.
2. METODE
Adapun metode yang digunakan dalam melaksanakan peninjauan adalah penelitian
lapangan dan studi kepustakaan, meliputi peninjauan yang dilakukan secara langsung terhadap
aktivitas pelayanan haji di kantor kementerian haji dan umrah yang berhubungan dengan
pendaftaran porsi, pembatalan porsi, pelimpahan porsi dan penggabungan mahram, juga teknik
pengumpulan data dengan mempelajari buku – buku kepustakaan atau literature yang mengutip
masalah atau teori yang dibahas [5].
2.1 Enterprise Architecture
Enterprise Architecture adalah sebuah pendekatan atau metode bagaimana cara mengelola
struktur organisasi, lingkungan bisnis serta sistem informasi secara lebih efektif. Yang bertujuan
untuk menyederhanakan proses integrasi antara strategi, data, dan teknologi informasi [6]. Dengan
adanya EA, sebuah organisasi dapat memiliki dokumentasi yang lengkap dan jelas mengenai sistem
informasi, teknologi yang digunakan, serta pihak-pihak yang terlibat dalam pencapaian visi dan misi
sebuah organisasi. Selain itu, EA juga dapat membantu sebuah organisasi guna menyediakan
informasi yang lebih terintegrasi dan transparan.
2.2 framework Zachman
Framework Zachman adalah sebuah metodologi yang dikembangkan oleh John Zachman
sekitar tahun 1980an [6]. Framework zachman juga di gunakan dalam bidang perencanaan
Arsitektur Perusahaan dan organisasi dalam hal ini bisa untuk Kementerian Haji dan Umrah juga,
karena framework ini mampu membantu organisasi dalam hal ini sebuah Kementerian untuk
melihat sistem secara menyeluruh sehingga tidak ada komponen yang tentunya cukup penting
terlewat.

Gambar 1. Framework Zachman
Kolom pada Framework Zachman menunjukkan perbedaan fokus dan tingkat abstraksi
atau proses penyederhanaan suatu objek, sistem atau konsep dengan cara mengambil bagian yang
pentingnya saja, sementara detail yang tidak diperlukan di hilangkan untuk memudahkan akan
pemahaman [7] .

ISSN 3032-5072 | jurnalsinta.id

26

<details>
<summary>Lihat halaman sumber untuk memeriksa tabel, gambar, atau tata letak</summary>

![Halaman PDF 3](assets/02/halaman_003.jpg)

</details>

---

## Halaman PDF 4

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Framework Zachman ini terdiri dari matriks klasifikasi yang dibangun dari kombinasi
beberapa pertanyaan umum yang terdiri dari:
a. what (data): menggambarkan dan mendifinisikan sebuah data atau informasi apa saja
yang di butuhkan
b. how (fungsi): menjelaskan proses atau fungsi yang sedang berjalan
c. where (jaringan): menggambarkan lokasi atau jaringan distribusi sebuah sistem.
d. who (manusia): menggambarkan pihak- pihak yang terlibat (actor/pengguna )
e. why (motivasi): menjelaskan sebuah tujuan bisnis atau bisnis yang melatarbelakanginya
sebuah sistem
f. when (Waktu): kolom ini mengatur jadwal berikut urutan prosesnya[8]
setiap baris tentu harus memiliki sudut pandang seperti:
a. ruang lingkup (scope): bagian ini mendefinisikan ruang lingkup umum sebuah sistem
b. owner (business model): mengemukakan tentang kebutuhan dan proses sebuah bisnis
dari persepktif atau sudut pandang pemilik
c. designer (system model): bagian ini mengemukakan arsitektur sistem yang dibutuhkan
d. detail representation: menjelaskan bagaimana komponen teknis hingga tingkat
implementasi
e. builder (technology Model): bagian yang menjelaskan platform, teknologi dan
beberapa spesifikasi teknis
f. function system: yaitu sebuah sistem yang sudah berfungsi dan bisa dipakai [3]
Alasan framework ini di pakai salah satunya karena mampu memberikan pemetaan
arsitektur yang cukup lengkap, terstruktur dan relevan untuk membangun sebuah aplikasi informasi
layanan haji yang kompleks.
2.3 Analisis Sistem dan Perancangan
Hasil tahapan analisis yang sedang berjalan saat ini dalam alur pelayanan informasi Haji
pada Kementerian Haji dan Umrah Kota Sukabumi masih ditemukan beberapa kendala di antara
nya akses informasi yang masih sulit karna masih belum terintegrasi kepada platform digital yang
bisa di akses calon Jemaah sehingga bila ingin mendapatkan informasi, calon Jemaah harus datang
ke kantor bertatap muka langsung dengan petugas. Mempertimbangkan permasalan tersebut,
penulis bermaksud membuat system informasi berbasis Web yang menggunakan Unified Modeling
Language (UML), UML Adalah metodologi yang dipakai untuk memetakan dengan lengkap
rancangan sistem[9].
Dalam hal ini diagram yang akan di pakai adalah Usecase diagram yaitu gambaran visual
dari satu atau lebih actor yang terlibat dalam sebuah sistem, Class diagram yang merupakan bagian
terpenting dalam sebuah sistem berbasis objek guna memetakan struktur utama dari pada sistem
tersebut dan Activity diagram yang menunjukan alur dari pada sebuah proses atau Langkahlangkah kerja pada sebuah sistem, tidak dilakukan actor, namun diagram ini menampilkan akan
aktivitas yang dapat dijalankan system [9]
3. HASIL PENELITIAN
Penggunaan framework Zachman untuk arsitektur ini dapat memberikan sebuah gambaran
yang cukup jelas dan terstruktur mengenai apa saja kebutuhan dari pada Web Informasi layanan
Haji. Melalui enam perspektif yang tersedia pada kerangka kerja Zachman. Proses analisis ini dapat
di terapkan secara menyeluruh mulai pada tahap ruang lingkup (scope), proses bisnis, model sistem,
hingga detail implementasi teknis. Pada perspektif Planner, kebutuhan dasar sebuah organisasi yang
bisa diidentifikasi seperti data-data jemaah, layanan pendaftaran porsi, serta akses Web yang dapat
dengan mudah di jangkau masyarakat guna mendapatkan semua layanan haji secara lengkap dan
menyeluruh.
Pada perspektif Owner, membantu menampilkan alur dari pada proses pelayanan itu sendiri
dari sudut pandang petugas dan pengguna, sehingga Aplikasi Web ini diharapkan dapat menjawab
ISSN 3032-5072 | jurnalsinta.id

27

---

## Halaman PDF 5

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

semua kebutuhan pelayanan secara nyata di lingkungan Kementerian Haji dan Umrah Kota
Sukabumi. Pada perspektif designer, model logis sistem ERD dan usecase dapat disusun guna
memastikan semua sistem dapat memenuhi daripada kebutuhan proses alur pelayanan informasi
haji. Pada perspektif builder dan detail specification dapat menjelaskan detail sebuah teknis yang
diperlukan untuk mengimplementasikan sistem. Sedangkan functioning system ini dapat
menampilkan aplikasi yang sudah dapat berfungsi dan dapat digunakan masyarakat secara langsung.
Berikut tabel matriks Zachman yang dapat di petakan [10].
Tabel 1. Tabel Matriks Zachman
Framework
zachman

What (data)

How (proses)

Where
(lokasi)

Who (Aktor)

When
(waktu)

Why (tujuan)

Planer (scope)

Data jemaah,
porsi
haji,dokumen
,
status
layanan

Akses
24/7

(

Jemaah, porsi
, dokumen

Kantor
kementerian
Haji
dan
Umrah,
Akses Via
Web
Distribusi
layanan
online

Petugas,
jemaah

Owner
business
Model )

Pendaftaran,
pembatalan,
pelimpahan
porsi,
penggabungan
mahram
Alur pelayanan
haji

Mengikuti
SOP
pelayanan

Designer
(system Model
)

ERD, tabel
data, metadata

Arsitektur
client server

Workflow
otomatis

Konsistensi
model logis

Builder
(technology
Model)

Database
MySQL

Usecase
aktivity,
squence
diagram
API, modul,
backend dan
frontend

Admin,
petugas
Kementerian
Haji
dan
Umrah,
jemaah
User , admin

Kemudahan
akses
informasi dan
berkas
dokumen
persyratan
Peningkatan
pelayanan
publik

Developer

Tahapan
SDLC

Implementasi
teknis

Detail
specification (
impelementasi
Detail)
Functioning
system

Struktur tabel
detail

Kode program,
UI/UX

Server
hosting
kementerian
Haji
dan
umrah
Struktur file
sistem

Tim teknis

Timeline
modul

Data jemaah
berikut status
real-time

Sistem berjalan
dan
dapat
dipakai

Domain web
publik

Pengguna
umum dan
petugas

Akses
penuh

Penerapan
implementasi
yang sesuai
dengan model
Peningkatan
efisiensi dan
transparansi

1. Perspektif designer (rancangan sistem model)
Perspektif ini menjelaskan bentuk sistem secara logis, belum mencapai tahap teknis, tetapi
cukup jelas untuk membuat sebuah dasar dari pada implementasi. Yang menjadi tujuan utama pada
tahapan perspektif ini adalah bagaimana sistem dapat berjalan sesuai alurnya, bagaimana data
tertatata dan menyusun sebagai rancangan yang nantinya berjalan.
a. What – model data
Tahapan ini nantinya bisa menjadi dasar pembuatan ERD dan tabel database agar seluruh
proses berjalan dan saling terhubung. Diantaranya : Data calon jemaah haji,Data pembatalan
porsi haji, Data pelimpahan porsi, Data penggabungan mahram, Data dokumen persyaratan
dan Data petugas/ user

ISSN 3032-5072 | jurnalsinta.id

28

<details>
<summary>Lihat halaman sumber untuk memeriksa tabel, gambar, atau tata letak</summary>

![Halaman PDF 5](assets/02/halaman_005.jpg)

</details>

---

## Halaman PDF 6

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Gambar 2. Rancangan Entity Relation Diagram Sistem Informasi
b. How – Proses
Pada kolom ini menjelaskan bagaimana semua proses di analisis dalam bentuk diagram activity,
squence, atau use case guna memudahkan untuk di pahami oleh developer. Meliputi proses
yang disajikan pada gambar di bawah :
a) Pendaftaran porsi

Gambar 3. Activity Diagram Pendaftaran porsi

ISSN 3032-5072 | jurnalsinta.id

29

<details>
<summary>Lihat halaman sumber untuk memeriksa tabel, gambar, atau tata letak</summary>

![Halaman PDF 6](assets/02/halaman_006.jpg)

</details>

---

## Halaman PDF 7

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

b) Pembatalan porsi

Gambar 4. Activity Diagram pembatalan porsi
c) Pelimpahan porsi

Gambar 5. Activity Diagram Pelimpahan porsi

ISSN 3032-5072 | jurnalsinta.id

30

<details>
<summary>Lihat halaman sumber untuk memeriksa tabel, gambar, atau tata letak</summary>

![Halaman PDF 7](assets/02/halaman_007.jpg)

</details>

---

## Halaman PDF 8

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

d) Penggabungan mahram

Gambar 6. Activity Diagram penggabungan Mahram
c. Who – aktor
Pada kolom ini menerangkan tentang yang bertugas merancang dan mengelola sistem
informasi, yaitu : admin, jemaah dan petugas Kementerian Haji dan Umrah Kota Sukabumi.
d. When – waktu
Pada tahapan ini menjelaskan akan waktu, rincian jadwal dan proses.
e. Why – motivasi
Kolom ini menjelaskan perangkat apa saja yang digunakan dan aturan yang mendasari sistem
seperti software database menggunakan Mysql dan diolah melalui Php MyAdmin dan untuk
bahasa pemograman yang digunakan ialah PHP
3. perspektif Builder
Tahap ini berfokus pada bagaimana sebuah rancangan designer ini dapat di terjemahkan
menjadi rancangan teknis yang siap di kembangkan. Perspektif ini menjembatani konsep ke
implementasi sehingga sistem dapat mulai dibangun.
a. What – data: dalam kolom ini data mulai dipetakan menjadi struktur basis dan fisik

Gambar 7. rancangan implementasi database
b. How – rancangan modul teknis

ISSN 3032-5072 | jurnalsinta.id

31

<details>
<summary>Lihat halaman sumber untuk memeriksa tabel, gambar, atau tata letak</summary>

![Halaman PDF 8](assets/02/halaman_008.jpg)

</details>

---

## Halaman PDF 9

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Pada tahap ini mengemukakan bagaimana fungsi bisnis dapat diimplementasikan menjadi modul
teknis aplikasi. Yang menjadi modul teknis utama diantaranya modul Informasi pendaftaran juga
Modul Usulan pembatalan, pelimpahan, dan penggabungan mahram. Adapun Impelementasi
meliputi validasi input (backend & frontend) dan Enkripsi password (hash).
c. Where – network
Pada tahap ini penentuan aplikasi yang akan di tempatkan dan digunakan oleh jemaah serta
petugas.Arsitektur jaringan meliputi Aplikasi Web berbasi client-server, Server hosting milik
kemenhaj dan Akses internet aman dengan HTTPS. Kemudian yang menjadi Sstruktur
penyimpanan Adalah database server yang terpisah dengan aplikasi yang kemudian di backup
otomatis setiap harinya.

Gambar 8. Aplikasi haji web diagram
d. Who- orang
Aktor yang terlibat adalah pihak yang ikut mengembangkan dan memelihara sistem Peran Utama
diantaranya: Backend developer: membuat API, database validasi, Frontend developer: membuat
tampilan web yang menarik dan database engineer: mendesain tabel & relasi. Pada bagian Otoritas
meliputi Role admin yang mengelola tata kelola layanan haji dan role user yang melihat layanan,
dan mengunggah dokumen.
e. Why – motivation
Menggambarkan pada kolom ini mengapa teknologi ini dipilih dan apa tujuan teknis dari perspektif
builder. Kemudian yang menjadi tujuan teknis meliputi pembuatan sistem yang aman dan mudah
di kembangkandan memastikan efisiensi proses. Dan alasan pemilihan teknologi Framework web
– scalable dan HTTPS – keamanan data Jemaah.
4. perspektif Detail – (implementasi)
Pada tahap ini menggambarkan implementasi detail sistem berupa tampilan mockup.
a. halaman utama

ISSN 3032-5072 | jurnalsinta.id

32

<details>
<summary>Lihat halaman sumber untuk memeriksa tabel, gambar, atau tata letak</summary>

![Halaman PDF 9](assets/02/halaman_009.jpg)

</details>

---

## Halaman PDF 10

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Gambar 9. tampilan mockup landing page
Pada tampilan ini sistem menampilkan tampilan menu utama yang dengan beberapa fitur
diantaranya tampilan berita-berita seputar informasi layanan haji, dan juga ada tombol informasi
pendaftran porsi, pembatakan porsi, pelimpahan porsi, penggabungan mahram. Yang pada tomboltombol tersebut bila di klik akan menampilkan laman form dan informasi terkait.
b. halaman Mockup fitur usulan informasi pelayanan haji

Gambar 10. halaman mockup fitur utama layanan informasi haji
Pada gambar di atas menampilkan form isian usulan layanan informasi haji, baik itu dari
pembatalan porsi, pelimpahan porsi dan penggabungan mahram, yang di mana setelah pengguna
mengklik salah satu tombol layanan informasi haji, pengguna di alihkan pada laman usulan dan
isian biodata juga berkas dokumen apa saja yang harus di lengkapi dan dapat langsung
menggunggah nya bila sudah lengkap.
5. Tahap Evaluasi rancangan sistem
Pada tahap ini evaluasi rancangan sistem dilakukan guna memastikan rancangan yang telah
di buat telah sesuai dengan kebutuhan pengguna organisasi dan pengguna. Tahap evaluasi ini
dilakukan dengan membandingkan sistem yang sedang berjalan dan sistem yang dirancang. Yang
menjadi fokus evaluasi meliputi kesesuaian fungsi sistem, kemudahan pengguna, kelengkapan
informasi serta efisiensi terhadap alur pelayanan informasi haji.
ISSN 3032-5072 | jurnalsinta.id

33

<details>
<summary>Lihat halaman sumber untuk memeriksa tabel, gambar, atau tata letak</summary>

![Halaman PDF 10](assets/02/halaman_010.jpg)

</details>

---

## Halaman PDF 11

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

Dan hasil menunjukkan bahwa rancangan aplikasi web informasi layanan haji mampu
menjawab permasalahan yang terjadi, seperti keterbatasan akses informasi, komunikasi yang belum
terintegrasi dengan digital, kurangnya transparansi status layanan dan layanan yang tidak efisien.
Dengan adanya fitur informasi yang terpusat, status layanan, efisiensi kerja dan pengolahan data
berbasis sistem, sehingga proses pelayanan jadi lebih efisien dan terstruktur. Selain itu penerapan
Zachman Framework membantu memastikan bahwa setiap kebutuhan pengguna dapat dipetakan
dengan jelas.
4. DISKUSI
Tahap ini dilakukan untuk mengetahui ekspektasi calon jemaah haji dan petugas terhadap
sistem informasi yang akan dibangun meliputi kebutuhan pengguna yaitu pengguna membutuhkan
akan akses informasi layanan haji yang mudah, cepat, jelas dan efisien, pengguna juga
mengharapkan akan adanya layanan informasi yang lengkap mengenai informasi alur pendaftaran
haji dan berkas apa saja yang harus disiapkan, pembatalan porsi, pelimpahan porsi, dan
penggabungan mahram, pengguna juga menginginkan adanya transparansi status proses layanan
dan petugas memerlukan sistem yang dapat membantu mempermudah pengelolaan dokumen
jemaah secara terpusat sehingg dapat membuat pekerjaan lebih efisien. Adapun harapan pengguna
yaitu sistem dapat di akses kapan saja dan dimana saja melalui perangkat yang terhubung internet
atau Wifi, berita yang di sajikan selalu akurat dan terupdate dan juga tampilan yang sederhana
mudah di gunakan oleh semua kalangan sehingga dengan adanya sistem layanan informasi haji ini
dapat meningkatkan kepercayaan masyarakat terhadap layanan Kementerian Haji Kota Sukabumi.
5. KESIMPULAN
Berdasarkan hasil dari pada penelitian ini melalui pemetaan arsitektur serta perancangan
sistem menggunakan Framework Zachman, dapat ditarik kesimpulan bahwa proses pelayanan
informasi layanan haji pada kementerian haji dan umrah kota Sukabumi masih terdapat beberapa
kendala, terutama dalam hal layanan informasi, transparansi layanan, dan efisiensi alur administrasi.
Sistem yang berjalan saat ini masih belum terdokumentasi dengan baik, untuk mendapatkan
informasi harus datang langsung ke kantor dan belum terintegrasi dalam platform digital yang
mudah di akses jemaah dimana saja dan kapan saja. Melalui pemetaan pada enam perspektif
Zachman, dapat di temukan bahwa kebutuhan utama organisasi adalah tersedianya sistem informasi
berbasis web yang dapat menampilkan layanan haji secara lengkap, mulai dari alur pendaftaran,
pembatalan, pelimpahan dan penggabungan mahram. Pada tahap analisis pun menunjukkan
pentingnya perbaikan dalam manajemen data, alur proses dan aktivitas petugas. Dengan adanya
sistem informasi berbasis web, jemaah dapat memperoleh akses digital guna memperoleh informasi
yang lebih cepat, akurat transparan tanpa harus datang ke kantor kemenhaj. Hal ini membuktikan
bahwa penerapan Enterprise Architecture dengan Framework Zachman mampu membantu
memetakan kebutuhan organisasi secara menyeluruh sehingga menghasilkan rancangan sistem yang
selaras dengan tujuan pelayanan publik dan juga mampu mendukung digitalisasi layanan haji.
UCAPAN TERIMA KASIH
Terimakasih peneliti ucapkan kepada Dosen Pembimbing, Kepala Kantor Kementerian Haji dan Umrah
Kota Sukabumi beserta jajarannya, dan seluruh pihak yang berjasa dalam penelitian ini.

### DAFTAR PUSTAKA [1]

O. Muhammad Yanis And U. M. Sejch Djamil Djambek Bukittinggi, “Ibadah Haji Dalam
Perspektif Fiqih Dan Filosofis Serta Penerapannya Dalam Sosial Masyarakat,” Jurnal Cerdas
Hukum, Vol. 2, No. 2, P. 2024, May 2024, [Online]. Available:
Https://Curutpurwosari13.Blogspot.Com/2017/0

ISSN 3032-5072 | jurnalsinta.id

34

---

## Halaman PDF 12

SINTA Jurnal Sistem Informasi dan Teknologi Komputasi
Volume 3 Nomor 1 Januari 2026 [page: 24-35]
DOI: https://doi.org/10.61124/sinta.v3i1.140

[2]

[3]

[4]

[5]
[6]
[7]
[8]

[9]

[10]

Muhammad Fuqran And Muhammad Riyandi Firdaus, “Implementasi Sistem Informasi
Dan Komputerisasi Haji Terpadu (Siskohat) Dalam Penyelenggaraan Haji Di Kantor
Kementrian Agama Kabupaten Tabalong,” JAPB (Jurnal Mahasiswa Adiministrasi Publik Dan
Adiministrasi Bisnis), Vol. 8, No. 2, Pp. 1221–1230, 2025.
C. Irawan, O. Benedicta, And S. Saepudin, “Perancangan Enterprise Architecture Pada
Hotel Erison Menggunakan Framework Zachman,” Jipi ( Jurnal Ilmiah Penelitian Dan
Pembelajaran Informatika), Vol. 10, No. 4, Pp. 2917–2929, Dec. 2025, Doi:
10.29100/Jipi.V10i4.6390.
K. Soffa Marwa Nabila Adzikra Et Al., “Sistemasi: Jurnal Sistem Informasi Perancangan
Prototipe Sistem Informasi Toko Bangunan Menggunakan Framework Zachman Designing
A Prototype Information System For A Building Material Store Using The Zachman
Framework.” [Online]. Available: Http://Sistemasi.Ftik.Unisi.Ac.Id
R. N. Azim, S. Saepudin, And Mupaat, “Perancangan Sistem Informasi Penyewaan Sound
System Dengan Metode Framework Zachman Di Mds Elektronik,” Sismatik (Seminar
Nasional Sistem Informasi Dan Manajemen Informatika), Vol. 5, No. 2, Aug. 2025.
F. S. Dinata, Sudin Saepudin, And Mupaat, “Perancangan Arsitektur Sistem Informasi
Purchase Order Online Sayuran Korea Menggunakan Framework Zachman,” The Indonesian
Journal Of Computer Science, Vol. 13, No. 5, Sep. 2024, Doi: 10.33022/Ijcs.V13i5.4359.
M. S. Riani, “Penerapan Zachman Framework Pada Arsitektur Sistem Penggajian (Studi
Kasus: Pt. Anugerah Mitra Mulia),” Jurnal Sistem Informasi Dan Teknologi Informasi, Vol. 2, No.
1, Pp. 19–32, 2020.
N. Hikmah, T. Hartati, And L. Septiana, “Rekayasa Sistem Informasi Administrasi Warga
Rja (Smart-Rja) Model Prototype Menggunakan Zachman Framework Pada Perumahan
Risma Jihan Akbar, Bekasi,” Journal Of Information System, Applied, Management, Accounting And
Research. ( Printed), Vol. 7, No. 2, Pp. 326–337, May 2023, Doi: 10.52362/Jisamar.V7i2.1082.
G. A. Ginting, S. Siallagan, W. Tarigan, And A. Pinem, “Pengembangan Sistem Informasi
Manajemen Inventori Sekolah Dengan Pemodelan Unified Modelling Language Pada
Yayasan Perguruan Gajah Mada,” Jurnal Riset Multidisiplin Edukasi, Vol. 2, No. 10, Pp. 583–
594,
Oct.
2025,
[Online].
Available:
Https://Journal.Hasbaedukasi.Co.Id/Index.Php/Jurmie
F. N. Apriadi And A. H. Muhammad, “Penerapan It Strategic Alignment Dan It
Governance Untuk Mengukur Kematangan Helpdesk Layanan Ti,” JIPI (Jurnal Ilmiah
Penelitian Dan Pembelajaran Informatika), Vol. 10, No. 2, Pp. 1385–1403, Mar. 2025, Doi:
10.29100/Jipi.V10i2.6276.

ISSN 3032-5072 | jurnalsinta.id

35
