#!/usr/bin/env python3
"""Bangun matriks penelitian (satu lembar ringkasan untuk pengajuan judul).

Pakai: python .claude/skills/sempro/scripts/matriks.py tema-2
Baca  <tema>/proposal/matriks.json, tulis <tema>/output/matriks-penelitian.docx.
Tata letak meniru contoh dari teman user: A4 mendatar, kiri tabel identitas,
kanan fenomena dan urgensi, lalu tabel Research Gap.
"""
import json
import sys
from pathlib import Path

from docx import Document
from docx.enum.section import WD_ORIENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt

FONT = "Times New Roman"


def atur_run(run, ukuran, tebal=False):
    run.font.name = FONT
    run._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
    run.font.size = Pt(ukuran)
    run.bold = tebal


def isi(par, teks, ukuran=9, tebal=False, rata=WD_ALIGN_PARAGRAPH.LEFT, sesudah=2):
    par.alignment = rata
    par.paragraph_format.space_before = Pt(0)
    par.paragraph_format.space_after = Pt(sesudah)
    par.paragraph_format.line_spacing = 1.0
    atur_run(par.add_run(teks), ukuran, tebal)
    return par


def garis(tabel, pakai=True):
    tblPr = tabel._tbl.tblPr
    b = OxmlElement("w:tblBorders")
    for sisi in ("top", "left", "bottom", "right", "insideH", "insideV"):
        e = OxmlElement(f"w:{sisi}")
        e.set(qn("w:val"), "single" if pakai else "nil")
        e.set(qn("w:sz"), "4")
        e.set(qn("w:color"), "000000")
        b.append(e)
    tblPr.append(b)


def lebar(tabel, daftar_cm):
    """Kunci lebar kolom: tata letak tetap, kisi tabel, dan lebar tiap sel."""
    tabel.autofit = False
    tblPr = tabel._tbl.tblPr
    tata = OxmlElement("w:tblLayout")
    tata.set(qn("w:type"), "fixed")
    tblPr.append(tata)
    w = tblPr.find(qn("w:tblW"))
    if w is None:
        w = OxmlElement("w:tblW")
        tblPr.append(w)
    w.set(qn("w:type"), "dxa")
    w.set(qn("w:w"), str(int(sum(daftar_cm) * 567)))
    for kol, l in zip(tabel._tbl.tblGrid.findall(qn("w:gridCol")), daftar_cm):
        kol.set(qn("w:w"), str(int(l * 567)))
    for baris in tabel.rows:
        for sel, l in zip(baris.cells, daftar_cm):
            sel.width = Cm(l)


def bangun(tema):
    data = json.loads(Path(tema, "proposal", "matriks.json").read_text(encoding="utf-8"))
    doc = Document()
    s = doc.sections[0]
    s.orientation = WD_ORIENT.LANDSCAPE
    s.page_width, s.page_height = Cm(29.7), Cm(21.0)
    s.left_margin = s.right_margin = Cm(1.9)
    s.top_margin = s.bottom_margin = Cm(1.5)

    isi(doc.add_paragraph(), data["judul_dokumen"], 12, True, WD_ALIGN_PARAGRAPH.CENTER, 6)

    # tabel tata letak: kiri identitas, tengah sela, kanan fenomena dan urgensi
    luar = doc.add_table(rows=1, cols=3)
    garis(luar, False)
    lebar(luar, [12.6, 0.3, 13.0])
    kiri, _, kanan = luar.rows[0].cells

    dalam = kiri.add_table(rows=len(data["identitas"]), cols=2)
    garis(dalam)
    lebar(dalam, [2.4, 10.0])
    for baris, (label, butir) in zip(dalam.rows, data["identitas"]):
        isi(baris.cells[0].paragraphs[0], label, 9, True)
        for i, teks in enumerate(butir):
            p = baris.cells[1].paragraphs[0] if i == 0 else baris.cells[1].add_paragraph()
            isi(p, teks)
    kiri._tc.remove(kiri.paragraphs[0]._p)  # buang paragraf kosong di atas tabel
    kiri.add_paragraph()

    isi(kanan.paragraphs[0], "Fenomena Penelitian", 9, True, WD_ALIGN_PARAGRAPH.CENTER, 3)
    for teks in data["fenomena"]:
        isi(kanan.add_paragraph(), teks, rata=WD_ALIGN_PARAGRAPH.JUSTIFY, sesudah=4)
    isi(kanan.add_paragraph(), "Urgensi", 9, True, WD_ALIGN_PARAGRAPH.CENTER, 3)
    for kepala, teks in data["urgensi"]:
        isi(kanan.add_paragraph(), kepala, rata=WD_ALIGN_PARAGRAPH.JUSTIFY, sesudah=0)
        isi(kanan.add_paragraph(), teks, rata=WD_ALIGN_PARAGRAPH.JUSTIFY, sesudah=4)

    kepala_gap = isi(doc.add_paragraph(), "Research Gap", 12, True, WD_ALIGN_PARAGRAPH.CENTER, 6)
    kepala_gap.paragraph_format.page_break_before = True
    gap = doc.add_table(rows=1, cols=4)
    garis(gap)
    for sel, teks in zip(gap.rows[0].cells, data["gap_kepala"]):
        isi(sel.paragraphs[0], teks, 10, True, WD_ALIGN_PARAGRAPH.CENTER)
    for baris_data in data["gap"]:
        sel_baru = gap.add_row().cells
        for sel, teks in zip(sel_baru, baris_data):
            isi(sel.paragraphs[0], teks, 10)
    lebar(gap, [5.4, 7.0, 7.0, 6.5])

    keluar = Path(tema, "output", "matriks-penelitian.docx")
    keluar.parent.mkdir(parents=True, exist_ok=True)
    doc.save(keluar)
    print(keluar)


if __name__ == "__main__":
    bangun(sys.argv[1] if len(sys.argv) > 1 else "tema-2")
