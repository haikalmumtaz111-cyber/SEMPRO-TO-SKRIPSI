// Deck seminar proposal tema 2. Isi diambil dari tema-2/proposal/proposal.md.
const pptxgen = require("pptxgenjs");
// Cara pakai: pasang pptxgenjs di folder kerja sementara (npm install pptxgenjs), lalu
//   SKILL_PPTX=<folder skill pptx> NODE_PATH=<node_modules> node buat.js <keluaran.pptx>
// Hasilnya disalin ke tema-2/output/presentasi-sempro.pptx. Kalau naskah berubah, ubah isi di sini juga.
const { applyTheme } = require(process.env.SKILL_PPTX + "/scripts/apply_theme.js");

const OUT = process.argv[2];
const LOGO = require("path").join(__dirname, "logo-uin.png");

const THEME = {
  name: "Sempro Haji",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "16302D", lt1: "FFFFFF", dk2: "0E4A43", lt2: "E9F1EE",
    accent1: "12695C", accent2: "C49A1F", accent3: "8DB3A6",
    accent4: "58706A", accent5: "A9502F", accent6: "2F6F8F",
    hlink: "12695C", folHlink: "58706A",
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10 x 5.625
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = "Seminar Usulan Proposal Skripsi";
pres.author = "Mumtaaz Haekal";
const C = pres.SchemeColor;
const S = pres.shapes;

const FOOT = "Seminar Usulan Proposal Skripsi  |  Mumtaaz Haekal";

pres.defineSlideMaster({
  title: "JUDUL",
  background: { color: C.text2 },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 1.9, w: 8.8, h: 1.3, fontSize: 23, bold: true, color: C.background1, align: "left", valign: "top", margin: 0 }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: 0.6, y: 3.25, w: 8.8, h: 0.35, fontSize: 14, color: C.accent3, align: "left", valign: "top", margin: 0 }, text: "" } },
  ],
});

pres.defineSlideMaster({
  title: "ISI",
  background: { color: C.background1 },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: 0.5, y: 0.32, w: 9.0, h: 0.72, fontSize: 30, bold: true, color: C.text2, align: "left", valign: "middle", margin: 0 }, text: "" } },
    { text: { text: FOOT, options: { x: 0.5, y: 5.2, w: 6.5, h: 0.25, fontSize: 10, color: C.accent4, margin: 0 } } },
  ],
  slideNumber: { x: 9.0, y: 5.2, w: 0.5, h: 0.25, fontSize: 10, color: C.accent4, align: "right" },
});

pres.defineSlideMaster({
  title: "PENUTUP",
  background: { color: C.text2 },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 1.9, w: 8.8, h: 0.95, fontSize: 44, bold: true, color: C.background1, align: "left", valign: "middle", margin: 0 }, text: "" } },
    { placeholder: { options: { name: "body", type: "body", x: 0.6, y: 2.95, w: 8.8, h: 0.6, fontSize: 18, color: C.accent3, align: "left", valign: "top", margin: 0 }, text: "" } },
  ],
});

// ---------- pembantu ----------
let seksi = "";
function slideIsi(judul) {
  const s = pres.addSlide({ masterName: "ISI", sectionTitle: seksi });
  s.addText(judul, { placeholder: "title" });
  if (seksi === "Slide cadangan") {
    s.addText("LAMPIRAN", { isTextBox: true, x: 7.9, y: 0.5, w: 1.6, h: 0.36, margin: 0, fontSize: 11, bold: true, color: C.accent2, align: "right", valign: "middle", charSpacing: 3, objectName: "Tanda lampiran" });
  }
  return s;
}
function teks(s, t, o) {
  s.addText(t, Object.assign({ isTextBox: true, margin: 0, color: C.text1, valign: "top", fontSize: 14 }, o));
}
function kartu(s, x, y, w, h, nama, warna) {
  s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: warna || C.background2 }, line: { color: warna || C.background2, width: 0.5 }, objectName: nama });
}
function nomor(s, n, x, y, d, nama) {
  s.addShape(S.OVAL, { x, y, w: d, h: d, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0.5 }, objectName: nama + " lingkaran" });
  s.addText(String(n), { isTextBox: true, x, y, w: d, h: d, margin: 0, align: "center", valign: "middle", fontSize: Math.round(d * 30), bold: true, color: C.background1, objectName: nama + " angka" });
}

function slide1() {
  const s = pres.addSlide({ masterName: "JUDUL", sectionTitle: seksi });
  // logo di atas kartu putih, karena tulisan logonya hitam
  s.addShape(S.ROUNDED_RECTANGLE, { x: 0.6, y: 0.4, w: 0.98, h: 1.28, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: C.background1, width: 0.5 }, objectName: "Alas logo" });
  s.addImage({ path: LOGO, x: 0.715, y: 0.49, w: 0.75, h: 1.075, altText: "Logo UIN Sunan Gunung Djati Bandung", objectName: "Logo UIN" });
  teks(s, "SEMINAR USULAN PROPOSAL SKRIPSI", { x: 1.85, y: 0.72, w: 7.5, h: 0.32, fontSize: 13, bold: true, color: C.accent2, charSpacing: 3, objectName: "Label seminar" });
  teks(s, "Program Studi Manajemen Haji dan Umrah, Fakultas Dakwah dan Komunikasi", { x: 1.85, y: 1.06, w: 7.5, h: 0.28, fontSize: 12, color: C.accent3, objectName: "Prodi" });
  s.addText("Hubungan Paparan Informasi Sebelum Pendaftaran dengan Respons Calon Jemaah Haji terhadap Informasi Masa Tunggu Keberangkatan", { placeholder: "title" });
  s.addText("Survei pada Calon Jemaah Haji di Kantor Kementerian Haji dan Umrah Kabupaten Bandung", { placeholder: "body" });
  teks(s, "DISUSUN OLEH", { x: 0.6, y: 3.95, w: 4.2, h: 0.24, fontSize: 10, bold: true, color: C.accent2, charSpacing: 2, objectName: "Label penyusun" });
  teks(s, "Mumtaaz Haekal", { x: 0.6, y: 4.2, w: 4.2, h: 0.36, fontSize: 18, bold: true, color: C.background1, objectName: "Nama" });
  teks(s, "NIM 1234070111", { x: 0.6, y: 4.57, w: 4.2, h: 0.28, fontSize: 13, color: C.accent3, objectName: "NIM" });
  teks(s, "DOSEN PEMBIMBING", { x: 5.2, y: 3.95, w: 4.2, h: 0.24, fontSize: 10, bold: true, color: C.accent2, charSpacing: 2, objectName: "Label pembimbing" });
  teks(s, "H. Khoirizi M. Dasir, M.M.", { x: 5.2, y: 4.2, w: 4.2, h: 0.36, fontSize: 18, bold: true, color: C.background1, objectName: "Nama pembimbing" });
  teks(s, "UIN Sunan Gunung Djati Bandung, 2026", { x: 5.2, y: 4.57, w: 4.2, h: 0.28, fontSize: 13, color: C.accent3, objectName: "Lembaga" });
  s.addNotes("Assalamu'alaikum warahmatullahi wabarakatuh. Perkenalkan, saya Mumtaaz Haekal dari Program Studi Manajemen Haji dan Umrah. Izinkan saya memaparkan usulan penelitian saya. Judulnya: Hubungan Paparan Informasi Sebelum Pendaftaran dengan Respons Calon Jemaah Haji terhadap Informasi Masa Tunggu Keberangkatan.");
}

function slide2() {
  const s = slideIsi("Latar Belakang Masalah");
  kartu(s, 0.5, 1.25, 3.0, 3.55, "Kartu angka");
  teks(s, "26", { x: 0.5, y: 1.45, w: 3.0, h: 1.2, fontSize: 80, bold: true, color: C.accent1, align: "center", valign: "middle", fontFace: "Cambria", objectName: "Angka 26" });
  teks(s, "tahun", { x: 0.5, y: 2.65, w: 3.0, h: 0.4, fontSize: 22, bold: true, color: C.accent1, align: "center", objectName: "Satuan" });
  teks(s, "Rata-rata antrean haji di seluruh Indonesia menurut formula penghitungan baru", { x: 0.75, y: 3.2, w: 2.5, h: 0.85, fontSize: 13, color: C.text1, align: "center", objectName: "Keterangan angka" });
  teks(s, "Sekretariat Kabinet RI (2026)", { x: 0.75, y: 4.2, w: 2.5, h: 0.3, fontSize: 11, italic: true, color: C.accent4, align: "center", objectName: "Sumber angka" });

  const baris = [
    ["Informasi masa tunggu beredar sebelum pendaftaran", "Media sosial, portal berita, keluarga atau tetangga, dan kantor layanan haji."],
    ["Pengamatan selama PPM, Februari sampai Juni 2026", "Petugas menyampaikan estimasi keberangkatan dan cara mengeceknya saat menyerahkan SPPH."],
    ["Respons calon jemaah beragam", "Sebagian terkejut, sebagian khawatir karena usia, sebagian tenang, dan sebagian biasa saja."],
  ];
  baris.forEach((b, i) => {
    const y = 1.3 + i * 1.08;
    nomor(s, i + 1, 3.9, y, 0.42, "Butir " + (i + 1));
    teks(s, b[0], { x: 4.5, y: y - 0.02, w: 5.0, h: 0.34, fontSize: 16, bold: true, color: C.text2, objectName: "Butir " + (i + 1) + " judul" });
    teks(s, b[1], { x: 4.5, y: y + 0.34, w: 5.0, h: 0.6, fontSize: 14, color: C.text1, objectName: "Butir " + (i + 1) + " isi" });
  });
  teks(s, "Uraian lapangan merupakan pengamatan awal peneliti, bukan data penelitian.", { x: 3.9, y: 4.5, w: 5.6, h: 0.3, fontSize: 12, italic: true, color: C.accent4, objectName: "Catatan pengamatan" });
  s.addNotes("Calon jemaah haji reguler menunggu sangat lama. Menurut rilis Sekretariat Kabinet, rata-rata antrean haji nasional mencapai 26 tahun. Informasi masa tunggu itu tidak hanya ada di kantor. Sebagian calon jemaah sudah memperolehnya dari media sosial, berita, atau keluarga sebelum mendaftar. Selama PPM, saya mengamati respons calon jemaah yang beragam ketika petugas menyampaikan estimasi keberangkatan. Ini pengamatan awal saya, belum data penelitian.");
}

function slide3() {
  const s = slideIsi("Celah Penelitian");
  const k = [
    ["Dampak kebijakan masa tunggu", "Ardiansyah (2026)"],
    ["Masa tunggu sebagai faktor minat mendaftar atau berhaji", "Budiarti (2025); Al-Anwari (2026)"],
    ["Informasi haji dan pemahaman jemaah yang sudah berangkat", "Ginting (2025); Fitriyani (2025)"],
    ["Pelayanan pendaftaran dan kepuasan calon jemaah", "Sukmawijaya (2024)"],
  ];
  k.forEach((b, i) => {
    const x = 0.5 + (i % 2) * 4.6, y = 1.25 + Math.floor(i / 2) * 1.15;
    kartu(s, x, y, 4.4, 1.0, "Kartu terdahulu " + (i + 1));
    teks(s, b[0], { x: x + 0.2, y: y + 0.13, w: 4.0, h: 0.5, fontSize: 14, bold: true, color: C.text2, objectName: "Terdahulu " + (i + 1) + " topik" });
    teks(s, b[1], { x: x + 0.2, y: y + 0.64, w: 4.0, h: 0.28, fontSize: 12, color: C.accent4, objectName: "Terdahulu " + (i + 1) + " penulis" });
  });
  kartu(s, 0.5, 3.65, 9.0, 1.2, "Kartu celah", C.text2);
  teks(s, "Belum ditemukan penelitian yang mengukur informasi masa tunggu sebelum mendaftar, lalu menghubungkannya dengan respons setelah penjelasan petugas.", { x: 0.75, y: 3.75, w: 8.5, h: 0.68, fontSize: 15, bold: true, color: C.background1, valign: "middle", objectName: "Pernyataan celah" });
  teks(s, "Penelusuran terbatas pada repositori satu perguruan tinggi dan satu basis data.", { x: 0.75, y: 4.47, w: 8.5, h: 0.28, fontSize: 12, italic: true, color: C.accent3, objectName: "Batas penelusuran" });
  s.addNotes("Penelitian haji yang saya telusuri membahas empat hal ini. Ardiansyah meneliti dampak kebijakan masa tunggu. Budiarti dan Al-Anwari meneliti masa tunggu sebagai faktor minat. Ginting dan Fitriyani meneliti informasi haji pada jemaah yang sudah berangkat. Sukmawijaya meneliti pelayanan pendaftaran dan kepuasan. Yang belum saya temukan adalah penelitian yang mengukur informasi sebelum mendaftar, lalu menghubungkannya dengan respons setelah penjelasan petugas. Penelusuran saya terbatas, jadi saya tidak menyatakan penelitian serupa tidak ada.");
}

function slide4() {
  const s = slideIsi("Rumusan Masalah");
  const q = [
    "Bagaimana paparan informasi masa tunggu yang diperoleh calon jemaah haji sebelum memutuskan mendaftar?",
    "Bagaimana respons kognitif, afektif, dan konatif calon jemaah haji terhadap informasi masa tunggu yang disampaikan petugas?",
    "Apakah terdapat hubungan antara paparan informasi dan respons kognitif?",
    "Apakah terdapat hubungan antara paparan informasi dan respons afektif?",
    "Apakah terdapat hubungan antara paparan informasi dan respons konatif?",
  ];
  const ys = [1.25, 1.98, 2.86, 3.42, 3.98];
  kartu(s, 0.5, 1.15, 9.0, 1.55, "Kelompok deskriptif");
  kartu(s, 0.5, 2.78, 9.0, 1.72, "Kelompok hubungan");
  teks(s, "GAMBARAN", { x: 7.9, y: 1.22, w: 1.45, h: 0.25, fontSize: 10, bold: true, color: C.accent4, align: "right", charSpacing: 2, objectName: "Label gambaran" });
  teks(s, "HUBUNGAN", { x: 7.9, y: 2.85, w: 1.45, h: 0.25, fontSize: 10, bold: true, color: C.accent4, align: "right", charSpacing: 2, objectName: "Label hubungan" });
  q.forEach((t, i) => {
    nomor(s, i + 1, 0.7, ys[i] + 0.04, 0.36, "Pertanyaan " + (i + 1));
    teks(s, t, { x: 1.25, y: ys[i], w: i < 2 ? 6.5 : 6.5, h: i < 2 ? 0.62 : 0.44, fontSize: 14, color: C.text1, valign: "middle", objectName: "Pertanyaan " + (i + 1) + " teks" });
  });
  teks(s, "Tujuan penelitian mengikuti kelima pertanyaan tersebut.", { x: 0.5, y: 4.62, w: 9.0, h: 0.3, fontSize: 13, italic: true, color: C.accent4, objectName: "Catatan tujuan" });
  s.addNotes("Rumusan masalah saya dirinci menjadi lima pertanyaan. Dua yang pertama bersifat gambaran: bagaimana paparan informasinya, dan bagaimana ketiga responsnya. Tiga berikutnya tentang hubungan: apakah paparan informasi berhubungan dengan respons kognitif, afektif, dan konatif. Tujuan penelitian mengikuti kelima pertanyaan itu.");
}

function slide5() {
  const s = slideIsi("Kegunaan Penelitian");
  const k = [
    ["Akademis", "Menambah kajian manajemen haji dan umrah tentang pelayanan informasi pada tahap pendaftaran.", "Memakai pembedaan seeking dan scanning untuk mengukur pengalaman calon jemaah memperoleh informasi."],
    ["Praktis", "Bahan pertimbangan bagi Kantor Kementerian Haji dan Umrah Kabupaten Bandung dalam menyampaikan informasi masa tunggu.", "Misalnya dengan menanyakan lebih dulu apa yang sudah diketahui calon jemaah."],
  ];
  k.forEach((b, i) => {
    const x = 0.5 + i * 4.6;
    kartu(s, x, 1.3, 4.4, 3.4, "Kartu kegunaan " + b[0]);
    s.addShape(S.OVAL, { x: x + 0.3, y: 1.55, w: 0.6, h: 0.6, fill: { color: i === 0 ? C.accent1 : C.accent2 }, line: { color: i === 0 ? C.accent1 : C.accent2, width: 0.5 }, objectName: "Tanda " + b[0] });
    teks(s, b[0].charAt(0), { x: x + 0.3, y: 1.55, w: 0.6, h: 0.6, fontSize: 20, bold: true, color: C.background1, align: "center", valign: "middle", objectName: "Huruf " + b[0] });
    teks(s, b[0], { x: x + 1.05, y: 1.6, w: 3.1, h: 0.5, fontSize: 20, bold: true, color: C.text2, valign: "middle", objectName: "Judul " + b[0] });
    teks(s, b[1], { x: x + 0.3, y: 2.4, w: 3.8, h: 1.0, fontSize: 15, color: C.text1, objectName: "Isi " + b[0] });
    teks(s, b[2], { x: x + 0.3, y: 3.5, w: 3.8, h: 0.95, fontSize: 14, color: C.accent4, objectName: "Rincian " + b[0] });
  });
  s.addNotes("Secara akademis, penelitian ini diharapkan menambah kajian manajemen haji dan umrah tentang pelayanan informasi pada tahap pendaftaran. Secara praktis, hasilnya dapat menjadi bahan pertimbangan bagi kantor dalam menyampaikan informasi masa tunggu, misalnya dengan menanyakan lebih dulu apa yang sudah diketahui calon jemaah.");
}

function slide6() {
  const s = slideIsi("Kerangka Pemikiran");
  // kotak X
  kartu(s, 0.5, 2.0, 3.1, 1.7, "Kotak X", C.text2);
  teks(s, "Paparan informasi masa tunggu sebelum memutuskan mendaftar (X)", { x: 0.7, y: 2.1, w: 2.7, h: 0.85, fontSize: 14, bold: true, color: C.background1, align: "center", valign: "middle", objectName: "Nama X" });
  teks(s, "Seeking dan scanning", { x: 0.7, y: 2.97, w: 2.7, h: 0.26, fontSize: 12, italic: true, color: C.accent3, align: "center", objectName: "Dimensi X" });
  teks(s, "Niederdeppe, et al. (2007); Kelly, et al. (2009)", { x: 0.7, y: 3.25, w: 2.7, h: 0.4, fontSize: 10, color: C.accent3, align: "center", objectName: "Rujukan X" });
  // kotak Y
  const ybox = [
    ["Respons kognitif (Y1)", "Pemahaman yang dirasakan", "Eveland (2001)"],
    ["Respons afektif (Y2)", "Terkejut dan khawatir", "Zeithaml, et al. (1993); Roseman, et al. (1996)"],
    ["Respons konatif (Y3)", "Niat menindaklanjuti", "Ajzen (1991); Lewis, et al. (2024)"],
  ];
  const yy = [1.5, 2.45, 3.4];
  teks(s, "Pembagian tiga respons: Breckler (1984)", { x: 5.6, y: 1.15, w: 3.9, h: 0.26, fontSize: 11, italic: true, color: C.accent4, objectName: "Rujukan pembagian" });
  ybox.forEach((b, i) => {
    kartu(s, 5.6, yy[i], 3.9, 0.82, "Kotak Y" + (i + 1));
    teks(s, b[0], { x: 5.78, y: yy[i] + 0.07, w: 1.9, h: 0.36, fontSize: 13, bold: true, color: C.text2, valign: "middle", objectName: "Nama Y" + (i + 1) });
    teks(s, b[1], { x: 7.6, y: yy[i] + 0.07, w: 1.8, h: 0.36, fontSize: 11, color: C.text1, align: "right", valign: "middle", objectName: "Isi Y" + (i + 1) });
    teks(s, b[2], { x: 5.78, y: yy[i] + 0.46, w: 3.6, h: 0.28, fontSize: 10, color: C.accent4, objectName: "Rujukan Y" + (i + 1) });
    // garis dari X (3.6, 2.85) ke kiri kotak Y (5.6, yy+0.41)
    const x1 = 3.6, y1 = 2.85, x2 = 5.6, y2 = yy[i] + 0.41;
    const naik = y2 < y1;
    s.addShape(S.LINE, { x: x1, y: Math.min(y1, y2), w: x2 - x1, h: Math.abs(y2 - y1), flipV: naik, line: { color: C.accent1, width: 1.75 }, objectName: "Garis ke Y" + (i + 1) });
  });
  teks(s, "Garis menunjukkan hubungan yang diuji, bukan arah sebab akibat. Teori menjelaskan tiap respons, sedangkan hubungannya dengan paparan merupakan dugaan peneliti.", { x: 0.5, y: 4.4, w: 9.0, h: 0.55, fontSize: 12, italic: true, color: C.accent4, objectName: "Catatan kerangka" });
  s.addNotes("Variabel bebasnya paparan informasi masa tunggu sebelum memutuskan mendaftar. Paparan itu terdiri atas seeking, yaitu sengaja mencari, dan scanning, yaitu memperoleh informasi tanpa mencarinya. Konsepnya dari Niederdeppe dan cara ukurnya dari Kelly. Variabel terikatnya respons calon jemaah, yang saya bagi tiga mengikuti pembagian Breckler: kognitif, afektif, dan konatif. Tiap respons saya jelaskan dengan teorinya sendiri. Tidak ada satu teori yang menghubungkan paparan dengan ketiga respons itu, sehingga hubungannya saya nyatakan sebagai dugaan yang diuji.");
}

function slide7() {
  const s = slideIsi("Operasionalisasi Variabel");
  const kepala = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 13, valign: "middle" } });
  const sel = (t, o) => ({ text: t, options: Object.assign({ color: C.text1, fontSize: 13, valign: "middle" }, o || {}) });
  const tebal = { bold: true, color: C.text2 };
  const abu = { fill: { color: C.background2 } };
  const rows = [
    [kepala("Variabel"), kepala("Dimensi"), kepala("Butir"), kepala("Skala")],
    [sel("Paparan informasi (X)", Object.assign({ rowspan: 2 }, tebal)), sel("Seeking: sengaja mencari"), sel("A1 sampai A4"), sel("Empat kategori jumlah, skor 1 sampai 4", { rowspan: 2 })],
    [sel("Scanning: memperoleh tanpa mencari"), sel("A5 sampai A7")],
    [sel("Respons kognitif (Y1)", Object.assign({}, tebal, abu)), sel("Pemahaman yang dirasakan", abu), sel("B1 sampai B3", abu), sel("Likert, skor 1 sampai 5", abu)],
    [sel("Respons afektif (Y2)", tebal), sel("Terkejut dan khawatir"), sel("C1 sampai C4"), sel("Likert, skor 1 sampai 5")],
    [sel("Respons konatif (Y3)", Object.assign({}, tebal, abu)), sel("Niat bertanya kepada petugas dan niat mengecek melalui aplikasi resmi", abu), sel("D1 sampai D6", abu), sel("Likert, skor 1 sampai 5", abu)],
  ];
  s.addTable(rows, { x: 0.5, y: 1.25, w: 9.0, colW: [2.3, 3.5, 1.3, 1.9], rowH: [0.4, 0.42, 0.42, 0.45, 0.45, 0.62], border: { type: "solid", color: C.accent3, pt: 0.75 }, margin: [0.04, 0.1, 0.04, 0.1], objectName: "Tabel operasionalisasi" });
  teks(s, "Jumlah: 20 butir skala, ditambah 3 soal benar atau salah sebagai pelengkap respons kognitif.", { x: 0.5, y: 4.3, w: 9.0, h: 0.3, fontSize: 13, color: C.text2, bold: true, objectName: "Jumlah butir" });
  teks(s, "Butir paparan diadaptasi dari Kelly, et al. (2009). Butir respons disusun peneliti dari konsep teori dan pengamatan selama PPM.", { x: 0.5, y: 4.62, w: 9.0, h: 0.3, fontSize: 12, italic: true, color: C.accent4, objectName: "Asal butir" });
  s.addNotes("Ini ringkasan operasionalisasi variabelnya. Paparan informasi diukur dengan tujuh butir: empat butir seeking dan tiga butir scanning, dengan empat kategori jumlah. Respons kognitif diukur dengan tiga butir, respons afektif empat butir, dan respons konatif enam butir, semuanya memakai skala Likert lima pilihan. Totalnya dua puluh butir, ditambah tiga soal benar atau salah sebagai pelengkap. Butir paparan saya adaptasi dari Kelly. Butir respons saya susun sendiri dari konsep teori dan pengamatan selama PPM.");
}

function slide8() {
  const s = slideIsi("Hipotesis");
  const h = [["1", "Respons kognitif"], ["2", "Respons afektif"], ["3", "Respons konatif"]];
  h.forEach((b, i) => {
    const x = 0.5 + i * 3.07;
    kartu(s, x, 1.25, 2.87, 2.55, "Kartu hipotesis " + b[0]);
    nomor(s, b[0], x + 0.2, 1.42, 0.42, "Hipotesis " + b[0]);
    teks(s, "Paparan informasi dan", { x: x + 0.75, y: 1.4, w: 2.0, h: 0.24, fontSize: 11, color: C.accent4, objectName: "Hipotesis " + b[0] + " awal" });
    teks(s, b[1], { x: x + 0.75, y: 1.63, w: 2.0, h: 0.3, fontSize: 15, bold: true, color: C.text2, objectName: "Hipotesis " + b[0] + " respons" });
    teks(s, [
      { text: "H0  ", options: { bold: true, color: C.accent1 } },
      { text: "Tidak terdapat hubungan yang signifikan." },
    ], { x: x + 0.2, y: 2.15, w: 2.5, h: 0.7, fontSize: 13, color: C.text1, objectName: "Hipotesis " + b[0] + " nol" });
    teks(s, [
      { text: "H1  ", options: { bold: true, color: C.accent1 } },
      { text: "Terdapat hubungan yang signifikan." },
    ], { x: x + 0.2, y: 2.95, w: 2.5, h: 0.7, fontSize: 13, color: C.text1, objectName: "Hipotesis " + b[0] + " satu" });
  });
  const c = ["Tanpa arah", "Uji dua sisi", "Taraf signifikansi 0,05"];
  c.forEach((t, i) => {
    const x = 0.5 + i * 3.07;
    s.addShape(S.ROUNDED_RECTANGLE, { x, y: 4.05, w: 2.87, h: 0.6, rectRadius: 0.3, fill: { color: C.text2 }, line: { color: C.text2, width: 0.5 }, objectName: "Pil " + (i + 1) });
    teks(s, t, { x, y: 4.05, w: 2.87, h: 0.6, fontSize: 15, bold: true, color: C.background1, align: "center", valign: "middle", objectName: "Pil " + (i + 1) + " teks" });
  });
  s.addNotes("Hipotesisnya ada tiga pasang, satu untuk tiap respons. Hipotesis nolnya: tidak terdapat hubungan yang signifikan antara paparan informasi dan respons tersebut. Hipotesis alternatifnya: terdapat hubungan yang signifikan. Ketiga hipotesis saya rumuskan tanpa arah, karena hubungan paparan dengan tiap respons merupakan dugaan saya, bukan pernyataan teorinya. Semuanya diuji dua sisi pada taraf signifikansi 0,05.");
}

function slide9() {
  const s = slideIsi("Metode Penelitian");
  const k = [
    ["Lokasi", "Kantor Kementerian Haji dan Umrah Kabupaten Bandung, Baleendah."],
    ["Paradigma dan pendekatan", "Paradigma positivisme dengan pendekatan kuantitatif."],
    ["Metode", "Survei dengan desain potong lintang. Data dikumpulkan satu kali."],
    ["Sumber data", "Primer: calon jemaah yang baru selesai mendaftar. Sekunder: data pendaftar SISKOHAT dan peraturan resmi."],
  ];
  k.forEach((b, i) => {
    const x = 0.5 + (i % 2) * 4.6, y = 1.25 + Math.floor(i / 2) * 1.5;
    kartu(s, x, y, 4.4, 1.35, "Kartu metode " + (i + 1));
    teks(s, b[0], { x: x + 0.25, y: y + 0.14, w: 3.9, h: 0.32, fontSize: 15, bold: true, color: C.accent1, objectName: "Metode " + (i + 1) + " judul" });
    teks(s, b[1], { x: x + 0.25, y: y + 0.5, w: 3.9, h: 0.78, fontSize: 14, color: C.text1, objectName: "Metode " + (i + 1) + " isi" });
  });
  teks(s, "Hasil penelitian dibaca sebagai hubungan, bukan bukti sebab akibat.", { x: 0.5, y: 4.4, w: 9.0, h: 0.35, fontSize: 15, bold: true, color: C.text2, objectName: "Penegasan hubungan" });
  s.addNotes("Penelitian dilakukan di Kantor Kementerian Haji dan Umrah Kabupaten Bandung, tempat saya mengamati gejala ini selama PPM. Paradigmanya positivisme dengan pendekatan kuantitatif. Metodenya survei potong lintang, artinya data dikumpulkan satu kali. Karena itu, hasilnya saya baca sebagai hubungan, bukan bukti sebab akibat.");
}

function slide10() {
  const s = slideIsi("Populasi dan Sampel");
  const st = [
    ["3.076", "pendaftar", "1 Januari sampai 11 November 2026, data SISKOHAT kantor"],
    ["297", "orang", "perkiraan populasi selama satu bulan pengumpulan data"],
    ["75", "responden", "jumlah minimal, rumus Slovin dengan batas kesalahan 10%"],
  ];
  st.forEach((b, i) => {
    const x = 0.5 + i * 3.15;
    kartu(s, x, 1.25, 2.7, 1.95, "Kartu angka " + (i + 1), i === 2 ? C.text2 : C.background2);
    teks(s, b[0], { x, y: 1.3, w: 2.7, h: 0.8, fontSize: 44, bold: true, color: i === 2 ? C.background1 : C.accent1, align: "center", valign: "middle", fontFace: "Cambria", objectName: "Angka " + (i + 1) });
    teks(s, b[1], { x, y: 2.08, w: 2.7, h: 0.3, fontSize: 14, bold: true, color: i === 2 ? C.accent3 : C.text2, align: "center", objectName: "Satuan " + (i + 1) });
    teks(s, b[2], { x: x + 0.2, y: 2.42, w: 2.3, h: 0.7, fontSize: 11, color: i === 2 ? C.accent3 : C.accent4, align: "center", objectName: "Keterangan " + (i + 1) });
    if (i < 2) teks(s, "›", { x: x + 2.7, y: 1.85, w: 0.45, h: 0.6, fontSize: 32, bold: true, color: C.accent2, align: "center", valign: "middle", objectName: "Panah " + (i + 1) });
  });
  teks(s, "Consecutive sampling", { x: 0.5, y: 3.45, w: 3.6, h: 0.32, fontSize: 15, bold: true, italic: true, color: C.accent1, objectName: "Judul teknik" });
  teks(s, "Responden diambil sesuai urutan kedatangan sampai jumlahnya terpenuhi. Daftar pendaftar belum tersedia sebelum mereka datang, sehingga pengundian tidak dapat dilakukan.", { x: 0.5, y: 3.8, w: 3.9, h: 1.1, fontSize: 12.5, color: C.text1, objectName: "Isi teknik" });
  teks(s, "Kriteria responden", { x: 4.9, y: 3.45, w: 4.6, h: 0.32, fontSize: 15, bold: true, color: C.accent1, objectName: "Judul kriteria" });
  teks(s, [
    { text: "Baru menyelesaikan pendaftaran haji reguler pada hari pengisian", options: { bullet: true, breakLine: true } },
    { text: "Mendengar sendiri penjelasan petugas", options: { bullet: true, breakLine: true } },
    { text: "Berusia sekurang-kurangnya 17 tahun", options: { bullet: true, breakLine: true } },
    { text: "Bersedia mengisi kuesioner", options: { bullet: true } },
  ], { x: 4.9, y: 3.8, w: 4.6, h: 1.1, fontSize: 12.5, color: C.text1, paraSpaceAfter: 2, objectName: "Daftar kriteria" });
  s.addNotes("Populasinya calon jemaah haji reguler yang menyelesaikan pendaftaran selama periode pengumpulan data, yaitu sekitar satu bulan. Menurut data SISKOHAT kantor, ada 3.076 pendaftar dari 1 Januari sampai 11 November 2026, atau rata-rata sekitar 297 per bulan. Jadi populasinya saya perkirakan 297 orang. Dengan rumus Slovin dan batas kesalahan 10 persen, diperoleh 75 responden, yang saya perlakukan sebagai jumlah minimal. Sampel diambil dengan consecutive sampling, yaitu sesuai urutan kedatangan, karena daftar pendaftar belum tersedia sebelum mereka datang.");
}

function slide11() {
  const s = slideIsi("Pengumpulan Data dan Instrumen");
  teks(s, "Pengumpulan data", { x: 0.5, y: 1.2, w: 4.5, h: 0.32, fontSize: 15, bold: true, color: C.accent1, objectName: "Judul pengumpulan" });
  const l = [
    ["Kuesioner tertutup berbentuk Google Form", "Dibuka di telepon genggam responden lewat kode QR atau tautan."],
    ["Diisi di kantor", "Segera setelah responden menerima penjelasan petugas."],
    ["Responden yang kesulitan dibantu", "Butir dibacakan dengan kalimat yang sama, jawaban dimasukkan peneliti."],
  ];
  l.forEach((b, i) => {
    const y = 1.65 + i * 0.98;
    nomor(s, i + 1, 0.5, y, 0.4, "Langkah " + (i + 1));
    teks(s, b[0], { x: 1.05, y: y - 0.03, w: 3.9, h: 0.3, fontSize: 14, bold: true, color: C.text2, objectName: "Langkah " + (i + 1) + " judul" });
    teks(s, b[1], { x: 1.05, y: y + 0.28, w: 3.9, h: 0.55, fontSize: 12.5, color: C.text1, objectName: "Langkah " + (i + 1) + " isi" });
  });
  const u = [
    ["Validitas", "Korelasi Pearson product moment antara skor tiap butir dan skor total. Butir valid apabila r hitung lebih besar daripada r tabel."],
    ["Reliabilitas", "Alpha Cronbach untuk tiap skor utama. Reliabel apabila nilai alfa sekurang-kurangnya 0,70."],
  ];
  u.forEach((b, i) => {
    const y = 1.2 + i * 1.6;
    kartu(s, 5.3, y, 4.2, 1.45, "Kartu " + b[0]);
    teks(s, b[0], { x: 5.5, y: y + 0.13, w: 3.8, h: 0.3, fontSize: 15, bold: true, color: C.accent1, objectName: b[0] + " judul" });
    teks(s, b[1], { x: 5.5, y: y + 0.47, w: 3.8, h: 0.9, fontSize: 12.5, color: C.text1, objectName: b[0] + " isi" });
  });
  teks(s, "Kuesioner masih tentatif. Uji coba dilakukan setelah seminar.", { x: 5.3, y: 4.5, w: 4.2, h: 0.3, fontSize: 12, italic: true, color: C.accent4, objectName: "Catatan tentatif" });
  s.addNotes("Data dikumpulkan dengan kuesioner tertutup berbentuk Google Form, yang dibuka responden lewat kode QR atau tautan. Kuesioner diisi di kantor segera setelah penjelasan petugas, supaya respons yang diukur masih baru. Responden yang kesulitan membaca atau memakai formulir tetap saya bantu: butirnya saya bacakan, lalu jawabannya saya masukkan. Validitas diuji dengan korelasi Pearson, dan reliabilitas dengan Alpha Cronbach dengan batas 0,70. Kuesionernya masih tentatif dan akan diuji coba setelah seminar.");
}

function slide12() {
  const s = slideIsi("Teknik Analisis Data");
  // tahap 1
  kartu(s, 0.5, 1.3, 2.6, 2.3, "Tahap deskriptif");
  teks(s, "Analisis deskriptif", { x: 0.7, y: 1.42, w: 2.2, h: 0.32, fontSize: 15, bold: true, color: C.accent1, objectName: "Deskriptif judul" });
  teks(s, "Pertanyaan 1 dan 2", { x: 0.7, y: 1.75, w: 2.2, h: 0.25, fontSize: 11, italic: true, color: C.accent4, objectName: "Deskriptif cakupan" });
  teks(s, "Frekuensi dan persentase, rata-rata, simpangan baku, dan sebaran jawaban.", { x: 0.7, y: 2.1, w: 2.2, h: 1.3, fontSize: 13, color: C.text1, objectName: "Deskriptif isi" });
  teks(s, "›", { x: 3.1, y: 2.1, w: 0.4, h: 0.6, fontSize: 32, bold: true, color: C.accent2, align: "center", valign: "middle", objectName: "Panah A" });
  // tahap 2
  kartu(s, 3.5, 1.3, 2.2, 2.3, "Tahap normalitas", C.text2);
  teks(s, "Uji normalitas", { x: 3.65, y: 1.42, w: 1.9, h: 0.32, fontSize: 15, bold: true, color: C.background1, objectName: "Normalitas judul" });
  teks(s, "Pertanyaan 3 sampai 5", { x: 3.65, y: 1.75, w: 1.9, h: 0.25, fontSize: 11, italic: true, color: C.accent3, objectName: "Normalitas cakupan" });
  teks(s, "Skor total tiap variabel diperlakukan sebagai data interval.", { x: 3.65, y: 2.1, w: 1.9, h: 1.3, fontSize: 13, color: C.background1, objectName: "Normalitas isi" });
  teks(s, "›", { x: 5.7, y: 2.1, w: 0.4, h: 0.6, fontSize: 32, bold: true, color: C.accent2, align: "center", valign: "middle", objectName: "Panah B" });
  // cabang
  kartu(s, 6.1, 1.3, 3.4, 1.08, "Cabang normal");
  teks(s, "Sebaran normal", { x: 6.3, y: 1.4, w: 3.0, h: 0.26, fontSize: 11, italic: true, color: C.accent4, objectName: "Normal syarat" });
  teks(s, "Korelasi Pearson", { x: 6.3, y: 1.68, w: 3.0, h: 0.5, fontSize: 18, bold: true, color: C.accent1, valign: "middle", objectName: "Normal uji" });
  kartu(s, 6.1, 2.52, 3.4, 1.08, "Cabang tidak normal");
  teks(s, "Sebaran tidak normal", { x: 6.3, y: 2.62, w: 3.0, h: 0.26, fontSize: 11, italic: true, color: C.accent4, objectName: "Tidak normal syarat" });
  teks(s, "Korelasi Rank Spearman", { x: 6.3, y: 2.9, w: 3.0, h: 0.5, fontSize: 18, bold: true, color: C.accent1, valign: "middle", objectName: "Tidak normal uji" });
  teks(s, "Tiap hipotesis diuji pada taraf signifikansi 0,05.", { x: 0.5, y: 3.85, w: 9.0, h: 0.32, fontSize: 15, bold: true, color: C.text2, objectName: "Taraf" });
  teks(s, "Analisis tambahan tanpa hipotesis: seeking dan scanning secara terpisah, terkejut dan khawatir secara terpisah, serta skor soal benar atau salah.", { x: 0.5, y: 4.25, w: 9.0, h: 0.6, fontSize: 13, color: C.accent4, objectName: "Analisis tambahan" });
  s.addNotes("Pertanyaan pertama dan kedua dijawab dengan analisis deskriptif, yaitu frekuensi, persentase, rata-rata, dan simpangan baku. Pertanyaan ketiga sampai kelima dijawab dengan uji korelasi. Sebelum itu, sebaran datanya saya uji normalitasnya. Kalau normal, saya memakai korelasi Pearson. Kalau tidak normal, saya memakai Rank Spearman. Tiap hipotesis diuji pada taraf signifikansi 0,05.");
}

function slide13() {
  const s = slideIsi("Keterbatasan Penelitian");
  const k = [
    "Hasil dibaca sebagai hubungan, bukan sebab akibat.",
    "Hasil hanya berlaku bagi pendaftar pada periode dan kantor tersebut.",
    "Calon jemaah lanjut usia yang diwakili pendamping kurang terwakili.",
    "Skala respons kognitif hanya tiga butir, sehingga nilai alfanya dapat rendah.",
    "Tiga hipotesis diuji sekaligus, sehingga peluang hasil kebetulan lebih besar.",
    "Jawaban tentang paparan bertumpu pada ingatan responden.",
    "Responden dapat merasa sungkan karena mengisi di kantor.",
  ];
  k.forEach((t, i) => {
    const kol = i < 4 ? 0 : 1, br = i < 4 ? i : i - 4;
    const x = 0.5 + kol * 4.6, y = 1.3 + br * 0.82;
    nomor(s, i + 1, x, y + 0.02, 0.38, "Keterbatasan " + (i + 1));
    teks(s, t, { x: x + 0.52, y: y - 0.05, w: 3.85, h: 0.62, fontSize: 14, color: C.text1, valign: "middle", objectName: "Keterbatasan " + (i + 1) + " teks" });
  });
  kartu(s, 5.1, 3.78, 4.4, 0.72, "Kartu sikap");
  teks(s, "Ketujuhnya dinyatakan terbuka di naskah.", { x: 5.3, y: 3.78, w: 4.0, h: 0.72, fontSize: 14, bold: true, color: C.text2, valign: "middle", objectName: "Sikap terbuka" });
  s.addNotes("Penelitian ini punya beberapa keterbatasan yang saya nyatakan terbuka di naskah. Hasilnya dibaca sebagai hubungan, bukan sebab akibat. Hasilnya juga hanya berlaku bagi pendaftar pada periode dan kantor tersebut. Skala respons kognitif hanya tiga butir. Jawaban tentang paparan bertumpu pada ingatan, dan responden dapat merasa sungkan karena mengisi di kantor.");
}

function slide14() {
  const s = pres.addSlide({ masterName: "PENUTUP", sectionTitle: seksi });
  s.addText("Terima kasih", { placeholder: "title" });
  s.addText("Mohon masukan dan arahan Bapak dan Ibu penguji.", { placeholder: "body" });
  teks(s, "Mumtaaz Haekal  |  NIM 1234070111  |  Manajemen Haji dan Umrah, UIN Sunan Gunung Djati Bandung", { x: 0.6, y: 4.7, w: 8.8, h: 0.3, fontSize: 11, color: C.accent3, objectName: "Identitas penutup" });
  s.addNotes("Demikian pemaparan usulan penelitian saya. Saya mohon masukan dan arahan dari Bapak dan Ibu penguji. Terima kasih. Wassalamu'alaikum warahmatullahi wabarakatuh.");
}

function slideGabung() {
  const s = slideIsi("Pengumpulan dan Analisis Data");
  teks(s, "Pengumpulan data", { x: 0.5, y: 1.2, w: 4.3, h: 0.32, fontSize: 15, bold: true, color: C.accent1, objectName: "Judul pengumpulan" });
  const l = [
    ["Kuesioner tertutup, Google Form", "Dibuka lewat kode QR atau tautan."],
    ["Diisi di kantor", "Segera setelah penjelasan petugas."],
    ["Responden yang kesulitan dibantu", "Butir dibacakan, jawaban dimasukkan peneliti."],
  ];
  l.forEach((b, i) => {
    const y = 1.65 + i * 0.86;
    nomor(s, i + 1, 0.5, y, 0.4, "Langkah " + (i + 1));
    teks(s, b[0], { x: 1.05, y: y - 0.03, w: 3.7, h: 0.3, fontSize: 14, bold: true, color: C.text2, objectName: "Langkah " + (i + 1) + " judul" });
    teks(s, b[1], { x: 1.05, y: y + 0.28, w: 3.7, h: 0.3, fontSize: 13, color: C.text1, objectName: "Langkah " + (i + 1) + " isi" });
  });
  teks(s, "Analisis data", { x: 5.2, y: 1.2, w: 4.3, h: 0.32, fontSize: 15, bold: true, color: C.accent1, objectName: "Judul analisis" });
  kartu(s, 5.2, 1.62, 4.3, 0.62, "Kartu normalitas", C.text2);
  teks(s, "Uji normalitas", { x: 5.4, y: 1.62, w: 3.9, h: 0.62, fontSize: 16, bold: true, color: C.background1, valign: "middle", objectName: "Normalitas" });
  kartu(s, 5.2, 2.38, 2.08, 1.15, "Kartu Pearson");
  teks(s, "Sebaran normal", { x: 5.35, y: 2.46, w: 1.8, h: 0.26, fontSize: 11, italic: true, color: C.accent4, objectName: "Syarat Pearson" });
  teks(s, "Korelasi Pearson", { x: 5.35, y: 2.74, w: 1.8, h: 0.7, fontSize: 16, bold: true, color: C.accent1, valign: "middle", objectName: "Uji Pearson" });
  kartu(s, 7.42, 2.38, 2.08, 1.15, "Kartu Spearman");
  teks(s, "Sebaran tidak normal", { x: 7.57, y: 2.46, w: 1.8, h: 0.26, fontSize: 11, italic: true, color: C.accent4, objectName: "Syarat Spearman" });
  teks(s, "Korelasi Rank Spearman", { x: 7.57, y: 2.74, w: 1.8, h: 0.7, fontSize: 16, bold: true, color: C.accent1, valign: "middle", objectName: "Uji Spearman" });
  teks(s, "Tiap hipotesis diuji pada taraf signifikansi 0,05.", { x: 5.2, y: 3.68, w: 4.3, h: 0.3, fontSize: 13, bold: true, color: C.text2, objectName: "Taraf" });
  kartu(s, 0.5, 4.25, 9.0, 0.62, "Kartu uji coba");
  teks(s, "Validitas dan reliabilitas kuesioner diuji setelah seminar. Hasil dibaca sebagai hubungan, bukan sebab akibat.", { x: 0.7, y: 4.25, w: 8.6, h: 0.62, fontSize: 13, color: C.text2, valign: "middle", objectName: "Catatan uji coba" });
  s.addNotes("Data dikumpulkan dengan kuesioner Google Form yang dibuka lewat kode QR atau tautan, dan diisi di kantor segera setelah penjelasan petugas. Responden yang kesulitan tetap saya bantu. Untuk analisisnya, sebaran data saya uji normalitasnya dulu. Kalau normal, saya memakai korelasi Pearson. Kalau tidak normal, saya memakai Rank Spearman. Tiap hipotesis diuji pada taraf signifikansi 0,05. Validitas dan reliabilitas kuesioner diuji setelah seminar.");
}

// ---------- urutan: 10 slide utama (sekitar 7 menit), lalu slide cadangan ----------
seksi = "Presentasi utama";
pres.addSection({ title: seksi });
slide1(); slide2(); slide3(); slide4(); slide6(); slide8(); slide9(); slide10(); slideGabung(); slide14();
seksi = "Slide cadangan";
pres.addSection({ title: seksi });
slide5(); slide7(); slide11(); slide12(); slide13();

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("tersimpan:", OUT);
})();
