# Plan: OCX Everywhere Multilingual Chirpy Blog

## Context

Replace the current two-page static HTML site with a branded Jekyll Chirpy site. Keep the root as an app and brand portal, operate independent English and Korean blogs under `/en/` and `/ko/`, and preserve links to the existing app-specific GitHub Pages sites.

## Approach

- Adopt the official `chirpy-starter` structure and GitHub Actions deployment workflow.
- Build a custom root portal using Chirpy-compatible Liquid layouts and isolated SCSS branding.
- Store posts in `_posts/en/` and `_posts/ko/` with required `lang` metadata and explicit `/en/posts/.../` or `/ko/posts/.../` permalinks.
- Provide language-filtered home pages, categories, tags, search/recent/related content, and language-specific RSS feeds without browser-language redirects.
- Add hreflang only when two posts share a `translation_key`.
- Keep current external app, store, email, privacy, and support destinations centrally managed in `_data`.
- Add About, Support, Contact, and Privacy pages plus GA4-ready click events without committing secrets.
- Initial content consists of one representative post per language and reusable English/Korean templates.

## Files to modify

- `C:\PrivateProject\ocxeverywhere.github.io\Gemfile` and lockfile (new) — pin Chirpy/Jekyll dependencies.
- `C:\PrivateProject\ocxeverywhere.github.io\_config.yml` (new) — configure site, theme, SEO, analytics, and defaults.
- `C:\PrivateProject\ocxeverywhere.github.io\.github\workflows\pages-deploy.yml` (new) — build and deploy through GitHub Actions.
- `C:\PrivateProject\ocxeverywhere.github.io\_layouts`, `_includes`, `_plugins`, `_data`, and `assets` — implement the portal, language filtering, metadata, feeds, navigation, branding, and analytics.
- `C:\PrivateProject\ocxeverywhere.github.io\index.html` — replace the static page with the root portal.
- `C:\PrivateProject\ocxeverywhere.github.io\en` and `ko` — provide independent blog landing and taxonomy pages.
- `C:\PrivateProject\ocxeverywhere.github.io\README.md`, `_posts`, `_templates`, and static-page Markdown — document and seed the publishing workflow.

## Reused code

- Existing app names, descriptions, icons, store links, business details, email address, and Ko-fi destination from `index.html` and `en/index.html`.

## Language(s) detected

mixed: html, css, javascript

## Verification

- Install dependencies and run a production Jekyll build.
- Validate `/`, `/en/`, `/ko/`, language-specific posts/taxonomies/feeds, sitemap, and robots output.
- Confirm no opposite-language posts appear in language-filtered views or related/recent/search results.
- Confirm hreflang only appears for real translation pairs and canonical URLs are unique.
- Check existing app/store/support/privacy/email links.
- Inspect responsive navigation, keyboard focus, dark mode, image alt text, and correct page language attributes.
- Report any unavailable local tooling or checks explicitly.
