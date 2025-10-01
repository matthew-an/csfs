# Build and Minification Guide

This document explains the asset optimization and build process for the Cornerstone Insurance website.

## Overview

The project uses automated minification for JavaScript and CSS files to improve page load times and performance.

## Tools Used

- **Terser**: JavaScript minification and compression
- **cssnano**: CSS minification (integrated with PostCSS)
- **PostCSS**: CSS processing with Tailwind CSS

## Available Scripts

### Development

```bash
npm run dev
```
Starts Jekyll development server with live reload. No minification applied.

### Production Build

```bash
npm run build:prod
```
Full production build with asset minification:
1. Minifies all JavaScript files
2. Builds Jekyll site
3. Minifies processed CSS

### Individual Asset Tasks

#### Minify JavaScript

```bash
# Minify all JS files
npm run js:minify

# Minify individual files
npm run js:minify:calculators
npm run js:minify:search
npm run js:minify:wechat
npm run js:minify:gallery
```

#### Minify CSS

```bash
npm run css:minify
```
Note: CSS minification requires Jekyll to build first (CSS has front matter).

### Clean Build

```bash
npm run clean
```
Removes `_site` directory and Jekyll cache.

## File Structure

### JavaScript Files

| Original File | Minified Output | Source Map |
|--------------|----------------|------------|
| `assets/js/calculators.js` | `assets/js/calculators.min.js` | `assets/js/calculators.min.js.map` |
| `assets/js/search.js` | `assets/js/search.min.js` | `assets/js/search.min.js.map` |
| `assets/js/image-gallery.js` | `assets/js/image-gallery.min.js` | `assets/js/image-gallery.min.js.map` |
| `assets/js/wechat-modal.js` | `assets/js/wechat-modal.min.js` | `assets/js/wechat-modal.min.js.map` |

### CSS Files

| Original File | Minified Output |
|--------------|----------------|
| `assets/css/style.css` | `assets/css/style.min.css` |

## Minification Results

Current savings from minification:

| File | Original | Minified | Reduction |
|------|----------|----------|-----------|
| calculators.js | 16KB | 12KB | 25% |
| search.js | 11KB | 7.8KB | 29% |
| image-gallery.js | 8.5KB | 5.5KB | 35% |
| wechat-modal.js | 2.9KB | 1.5KB | 48% |
| **Total JS** | **~38.4KB** | **~26.8KB** | **30%** |
| style.css | 85KB | 63KB | 26% |
| **TOTAL ASSETS** | **~123KB** | **~90KB** | **27%** |

## Deployment

### Netlify

The site is configured to automatically run the production build on deployment:

```toml
[build]
  command = "npm run build:prod"
```

Minified files are generated during the build process and don't need to be committed to git.

## Source Maps

Source maps (`.map` files) are automatically generated for minified JavaScript files. These enable debugging of minified code in browser dev tools while keeping production files optimized.

Source maps are not committed to git but are generated during build.

## Configuration Files

- **postcss.config.js**: PostCSS configuration with cssnano for CSS minification
- **package.json**: Build scripts and dependencies
- **netlify.toml**: Deployment configuration

## Notes

- Minified files (`.min.js`, `.min.css`) are ignored by git
- Source maps (`.map` files) are ignored by git
- Always test with `npm run build:prod` before deploying
- CSS minification only runs in production mode (NODE_ENV=production)

