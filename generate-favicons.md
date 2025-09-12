# Generate Favicons from Your Logo

## Quick Solution (Recommended)

1. **Visit [RealFaviconGenerator.net](https://realfavicongenerator.net/)**
2. **Upload your `assets/img/logo.svg` file**
3. **Configure settings:**
   - iOS: Use your logo as-is
   - Android: Use your logo with background color #e11d48 (primary color)
   - Windows: Use your logo with background color #e11d48
   - Safari: Use your logo as mask icon
4. **Download the generated favicon package**
5. **Replace files in `assets/img/favicons/` folder**

## Manual Method (If you have ImageMagick or similar tools)

```bash
# Install ImageMagick (if not already installed)
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Convert SVG to different sizes
convert assets/img/logo.svg -resize 16x16 assets/img/favicons/favicon-16x16.png
convert assets/img/logo.svg -resize 32x32 assets/img/favicons/favicon-32x32.png
convert assets/img/logo.svg -resize 96x96 assets/img/favicons/android-chrome-96x96.png
convert assets/img/logo.svg -resize 76x76 assets/img/favicons/apple-touch-icon.png
convert assets/img/logo.svg -resize 150x150 assets/img/favicons/mstile-150x150.png

# Create ICO file (multiple sizes in one file)
convert assets/img/logo.svg -resize 16x16 favicon-16.png
convert assets/img/logo.svg -resize 32x32 favicon-32.png
convert favicon-16.png favicon-32.png assets/img/favicons/favicon.ico
rm favicon-16.png favicon-32.png
```

## Current Status

✅ **Updated favicon configuration** to prioritize your SVG logo
✅ **Modern browsers** will now show your logo in the tab
✅ **Fallback icons** still use old favicons for older browsers
✅ **Web manifest** updated with your company name

## Next Steps

To get your logo showing in ALL browsers and devices:
1. Use RealFaviconGenerator.net (easiest)
2. Replace the generated files in `assets/img/favicons/`
3. The favicon configuration is already updated to use your branding colors

## Files that need your logo:
- `favicon-16x16.png` (16x16px)
- `favicon-32x32.png` (32x32px) 
- `favicon.ico` (16x16 and 32x32 combined)
- `apple-touch-icon.png` (76x76px)
- `android-chrome-96x96.png` (96x96px)
- `mstile-150x150.png` (150x150px)
- `safari-pinned-tab.svg` (can use your logo.svg directly)
