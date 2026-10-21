# STL Business Card — Abdulrahman Ameen

| File | Use |
| --- | --- |
| `export/STL-BusinessCard-Abdulrahman-Ameen-print.pdf` | **Print file**: 2 pages (front, back), 96 × 56 mm = 90 × 50 mm trim + 3 mm bleed |
| `export/front.png`, `export/back.png` | Previews at ~600 dpi, cropped to trim |
| `export/mockup.png` | Presentation mockup |
| `export/guides.png` | Trim (pink dashed) and safe area (blue dotted) |
| `card.html` | Editable source; values in `[brackets]` are placeholders |

Re-render after editing: `npm i -D playwright-core && node brand/business-card/render.mjs`

**Before printing**
- Replace the `[bracketed]` details (mobile, email, website, city).
- The logo comes from the brand-board image (~366 px wide). For sharp print, replace
  `public/brand/stl-logo-*.png` with the vector/high-resolution master and re-render.
- Ask the printer to confirm colour conversion to CMYK: Petrol #073B3A, Coral #FF7058, Sand #F4EFE6, Mint #A7C5C2.

Font: Readex Pro (SIL Open Font License), from @fontsource/readex-pro.
