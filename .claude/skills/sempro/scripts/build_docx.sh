#!/usr/bin/env bash
# Ubah <tema>/proposal/proposal.md jadi <tema>/output/proposal.docx dengan format FDK.
# Pakai: build_docx.sh tema-1   (atau tema-2)
set -euo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
SKILL=".claude/skills/sempro"
TEMA="${1:?Sebut folder tema, contoh: build_docx.sh tema-1}"
TEMA="${TEMA%/}"
SRC="$TEMA/proposal/proposal.md"
OUT="$TEMA/output/proposal.docx"
REF="$SKILL/templates/reference-fdk.docx"
mkdir -p "$(dirname "$OUT")"

PANDOC="$(command -v pandoc || true)"
if [ -z "$PANDOC" ]; then
  echo "pandoc belum ada, memasang lewat pip (pypandoc_binary)..."
  python3 -m pip install --quiet pypandoc_binary 2>/dev/null || python3 -m pip install --quiet --break-system-packages pypandoc_binary
  PANDOC="$(python3 -c 'import pypandoc; print(pypandoc.get_pandoc_path())')"
fi

SISA=$(grep -c "\[PERLU" "$SRC" || true)
echo "Sisa penanda [PERLU ...] di naskah: $SISA"

"$PANDOC" "$SRC" -o "$OUT" --reference-doc="$REF" --metadata title-meta="Proposal Penelitian"
python3 "$SKILL/scripts/sampul.py" "$OUT" "$TEMA/proposal/sampul.json" || echo "Sampul gagal, cek manual"
python3 "$SKILL/scripts/rapikan_tabel.py" "$OUT" || echo "Rapikan tabel gagal, cek manual"
echo "Selesai: $OUT"
echo "Cek manual di Word: halaman judul, nomor halaman tajuk, tabel, pemenggalan halaman."
