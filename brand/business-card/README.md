# STL Business Card — Abdulrahman Ameen

| File | Use |
| --- | --- |
| `export/STL-BusinessCard-Abdulrahman-Ameen-print.pdf` | **Print file**: 2 pages (front, back), 96 × 56 mm = 90 × 50 mm trim + 3 mm bleed |
| `export/STL-BusinessCard-Abdulrahman-Ameen-front.pdf` | Front only (1 page, with bleed) |
| `export/STL-BusinessCard-Abdulrahman-Ameen-back.pdf` | Back only (1 page, with bleed) |
| `export/front.png`, `export/back.png` | Previews at ~600 dpi, cropped to trim |
| `export/mockup.png` | Presentation mockup |
| `export/guides.png` | Trim (pink dashed) and safe area (blue dotted) |
| `card.html` | Editable source |

Re-render after editing: `npm i -D playwright-core && node brand/business-card/render.mjs`

**Before printing**
- The logo is vector (SVG traced from the brand board), so the PDFs print sharp at any size. If the designer's
  original master turns up, replace `public/brand/stl-logo.svg` / `stl-logo-white.svg` and re-render.
- Ask the printer to confirm colour conversion to CMYK: Petrol #073B3A, Coral #FF7058, Sand #F4EFE6, Mint #A7C5C2.

Font: Readex Pro (SIL Open Font License), from @fontsource/readex-pro.
