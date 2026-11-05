"""Rapikan tabel di docx hasil pandoc: huruf 10 pt, spasi 1, tanpa menjorok, lebar penuh."""
import sys
from docx import Document
from docx.shared import Pt
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

path = sys.argv[1] if len(sys.argv) > 1 else "output/proposal.docx"
doc = Document(path)
for t in doc.tables:
    tblPr = t._tbl.tblPr
    for old in tblPr.findall(qn("w:tblW")):
        tblPr.remove(old)
    w = OxmlElement("w:tblW"); w.set(qn("w:w"), "5000"); w.set(qn("w:type"), "pct")
    tblPr.append(w)
    for row in t.rows:
        for cell in row.cells:
            for p in cell.paragraphs:
                pf = p.paragraph_format
                pf.first_line_indent = Pt(0)
                pf.left_indent = Pt(0)
                pf.line_spacing = 1.0
                pf.space_before = Pt(0)
                pf.space_after = Pt(2)
                for r in p.runs:
                    r.font.size = Pt(10)
doc.save(path)
print(f"Tabel dirapikan: {len(doc.tables)}")
