"""Sisipkan halaman sampul di awal docx. Isi dari proposal/sampul.json.
Tata letak meniru proposal FDK yang sudah lolos sempro (contoh dari teman user)."""
import json, sys
from pathlib import Path
from docx import Document
from docx.shared import Pt, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK

out = sys.argv[1] if len(sys.argv) > 1 else "output/proposal.docx"
cfg = json.loads(Path("proposal/sampul.json").read_text(encoding="utf-8"))
logo = Path(__file__).resolve().parent.parent / "templates" / "logo-uin.png"

doc = Document(out)
anchor = doc.paragraphs[0]

def baris(teks="", ukuran=12, tebal=True, setelah=0):
    p = anchor.insert_paragraph_before()
    pf = p.paragraph_format
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    pf.first_line_indent = Cm(0); pf.left_indent = Cm(0)
    pf.line_spacing = 1.15; pf.space_before = Pt(0); pf.space_after = Pt(setelah)
    if teks:
        r = p.add_run(teks); r.bold = tebal; r.font.size = Pt(ukuran); r.font.name = "Times New Roman"
    return p

baris(cfg["jenis"], 14)
baris(cfg["judul"], 14)
baris(cfg["subjudul"], 12, True, 6)
baris(cfg["keterangan"], 12, False, 24)
p = baris(setelah=24)
p.add_run().add_picture(str(logo), width=Cm(5.8))
baris("Oleh:")
baris(cfg["nama"])
baris("NIM: " + cfg["nim"], setelah=36)
for i, t in enumerate(cfg["lembaga"]):
    p = baris(t)
p.add_run().add_break(WD_BREAK.PAGE)

# Blok judul di awal halaman isi, tanpa nomor (mengikuti format proposal prodi)
baris("PROPOSAL SKRIPSI", 12, True, 12)
baris(cfg["judul"], 12)
baris(cfg["subjudul"], 12, True, 18)

# Tajuk tanpa huruf (DAFTAR PUSTAKA, LAMPIRAN) diletakkan di tengah
for para in doc.paragraphs:
    if para.style.name.startswith("Heading") and para.text.isupper():
        para.alignment = WD_ALIGN_PARAGRAPH.CENTER
# Sampul tanpa nomor halaman, halaman sesudahnya mulai dari 1
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
for sec in doc.sections:
    sec.different_first_page_header_footer = True
    sp = sec._sectPr
    for old in sp.findall(qn("w:pgNumType")):
        sp.remove(old)
    pg = OxmlElement("w:pgNumType"); pg.set(qn("w:start"), "0")
    sp.append(pg)
# Nomor halaman di tengah bawah, header dikosongkan
def kosongkan(hf):
    for para in hf.paragraphs:
        for r in list(para.runs):
            r._r.getparent().remove(r._r)

def nomor_tengah(footer):
    kosongkan(footer)
    para = footer.paragraphs[0] if footer.paragraphs else footer.add_paragraph()
    para.alignment = WD_ALIGN_PARAGRAPH.CENTER
    para.paragraph_format.first_line_indent = Cm(0)
    r = para.add_run()
    for tag, attr in (("w:fldChar", {"w:fldCharType": "begin"}), ("w:instrText", None), ("w:fldChar", {"w:fldCharType": "end"})):
        el = OxmlElement(tag)
        if attr:
            for k, v in attr.items(): el.set(qn(k), v)
        else:
            el.set(qn("xml:space"), "preserve"); el.text = "PAGE"
        r._r.append(el)
    r.font.size = Pt(12); r.font.name = "Times New Roman"

for sec in doc.sections:
    sec.header.is_linked_to_previous = False
    kosongkan(sec.header)
    kosongkan(sec.first_page_header)
    kosongkan(sec.first_page_footer)
    nomor_tengah(sec.footer)

doc.save(out)
print("Sampul disisipkan")
