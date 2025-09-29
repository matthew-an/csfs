# Cornerstone Insurance Website
## About the Project
Cornerstone Insurance is a bilingual (Chinese and English) insurance advisory firm based in Auckland, New Zealand. This website is built with Jekyll and Tailwind CSS to present the company’s services, team, FAQs, disclosures, and blog in a responsive, modern format.

The site supports `zh` (default) and `en` locales, provides a rich landing page experience, and exposes structured content for each insurance offering. Custom Tailwind components, translation helpers, and SEO-ready metadata ensure the site aligns with Cornerstone’s brand and regulatory obligations.

## Key Features
- Fully responsive Tailwind CSS design with enhanced animations and components
- Chinese and English localisation managed via `_data/zh.yml` and `_data/en.yml`
- Dedicated pages for services, team, FAQ, glossary, calculators, disclosures, privacy, and terms
- Integrated blog (`_posts`) with Tailwind Typography for polished articles
- Accessibility minded components and translation-aware navigation
- SEO and analytics ready via `_config.yml` defaults and plugin configuration
- Deploy ready for Netlify, Vercel, or static hosting providers

## Prerequisites
- Ruby 3.x with Bundler installed
- Node.js 18+ and npm (or yarn)

Optional but recommended:
- An FSPD-compliant hosting environment for financial services content
- Netlify or Vercel account for streamlined deployments

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-org>/csfs.git
   cd csfs
   ```
2. Install Ruby gems and Node dependencies:
   ```bash
   bin/bootstrap
   ```
3. Start the local development server with live reload and preview data:
   ```bash
   bin/start
   ```
   The site will be available at `http://127.0.0.1:4061`.

### Environment Notes
- The development server reads configuration from `_config.yml` and `_config_dev.yml`. Update `_config_dev.yml` for local overrides (e.g., analytics disabled, alternate base URLs).
- Tailwind CSS styles are built automatically via the Jekyll pipeline. If you introduce new styles or utilities, update `tailwind.config.js` and relevant assets in `assets/css/`.

## Content Structure
- `index.html` / `en/index.html`: landing pages for Chinese and English audiences
- `_pages/`: Markdown content pages (services, team, FAQ, contact, legal documents)
- `en/`: English counterparts for content under `_pages`
- `_data/en.yml`, `_data/zh.yml`: Localised strings consumed by `translate.html`
- `_includes/`: Reusable components such as navigation, footer, custom head tags, and the translation helper
- `_layouts/`: Page, blog, and home layouts
- `assets/`: Static assets (CSS, JavaScript, imagery, icons)
- `_posts/`: Blog articles (output at `/blog` and `/en/blog`)

When adding new content, ensure both language files are updated and navigation links are present in `language-switcher.html`.

## Internationalisation Tips
- Use `{% include translate.html key='...' %}` for translatable strings
- Add new keys to both `_data/zh.yml` and `_data/en.yml`
- Set `lang` and `permalink` front matter appropriately for bilingual routing
- Default language is Chinese (`zh`); English pages live under `/en/...`

## Deployment
### Netlify
1. Connect the repository in Netlify
2. Set build command to `bundle exec jekyll build`
3. Set publish directory to `_site`
4. Configure `_config.yml` `url` to the production domain (`https://www.cornerstonefs.co.nz`)

### Vercel or Other Static Hosts
- Use `npm run build` (or `bundle exec jekyll build`) during the build step
- Serve the `_site` directory as static output

### Continuous Deployment
- Ensure the hosting platform installs Ruby and Node dependencies (Bundler, npm) prior to the build command
- Environment variables (e.g., analytics tokens) can be added to `_config.yml` or injected via `_config_dev.yml` overrides

## Compliance & Content Updates
Cornerstone Insurance operates under New Zealand financial services regulations. When updating disclosures, team bios, or services:
- Confirm FSPR numbers, addresses, and contact details remain accurate
- Review content for alignment with NZ FMA guidelines and Chinese translations
- Update `_pages/disclosure.md`, `en/disclosure.md`, and related content for any regulatory changes

## Testing & QA
- Run `bundle exec jekyll build` to ensure the site builds without errors
- Validate HTML using tools like `htmlproofer` if available
- Manually verify navigation, language switcher, and contact links
- Check responsive layouts across major breakpoints

## Contributing
1. Fork and branch from `main`
2. Make changes with bilingual content in mind
3. Run local build/tests before submitting PRs
4. Submit pull requests with a brief summary and screenshots for UI changes

## License
This project is open sourced under the MIT License. See `LICENSE.md` for details.

