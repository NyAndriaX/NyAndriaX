# Company Logos

This directory contains logo images for companies featured in the portfolio.

## Required Logos

Place the following logo files in this directory:

- `masai.svg` - Masai logo
- `blogduwebdesign.svg` - BlogDuWebdesign logo
- `featured.svg` - Featured logo
- `hostinger.svg` - Hostinger logo
- `upwork.svg` - Upwork logo

## Logo Specifications

- **Format**: SVG (preferred) or PNG
- **Size**: Recommended 120x40px or similar aspect ratio
- **Style**: White/light colored logos work best on dark background
- **Background**: Transparent

## Fallback Behavior

If logos are not found, the `FeaturedIn` component will display the company name as text fallback.

## Adding New Logos

1. Add the logo file to this directory
2. Update `app/lib/constants.ts` with the new logo path
3. Ensure the logo is optimized for web use

