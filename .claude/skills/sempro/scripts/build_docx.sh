#!/usr/bin/env bash
# Ubah proposal/proposal.md jadi output/proposal.docx dengan format FDK.
set -euo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
SKILL=".claude/skills/sempro"
SRC="${1:-proposal/proposal.md}"
OUT="${2:-output/proposal.docx}"
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

"$PANDOC" "$SRC" -o "$OUT" --reference-doc="$REF" --number-sections
echo "Selesai: $OUT"
echo "Cek manual di Word: halaman judul, nomor halaman tajuk, tabel, pemenggalan halaman."
