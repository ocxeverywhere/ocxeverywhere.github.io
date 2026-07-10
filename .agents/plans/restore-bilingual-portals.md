# Plan: Restore Bilingual Portals

## Context

The Chirpy migration replaced the original Korean root portal with an English portal and made `/en/` and `/ko/` blog-only destinations. Restore the existing Korean and English portal behavior and make every core page language-aware.

## Approach

- Restore `/` as the Korean portal and `/en/` as the English portal.
- Move Korean blog routes under `/blog/` and English blog routes under `/en/blog/`, including posts, taxonomies, search, and feeds.
- Provide Korean static pages at root-level routes and English equivalents under `/en/`.
- Localize navigation and app-card copy/URLs from shared data.
- Add `translation_url` to paired pages so the language switcher preserves page context.
- For posts without a translation pair, send the language switcher to the other language's blog home; only emit post hreflang for real `translation_key` pairs.
- Keep `/ko/` as a compatibility page directing visitors to `/`.
- Keep the Korean sample unpublished and update both post templates to the new permalink scheme.

## Files to modify

- `C:\PrivateProject\ocxeverywhere.github.io\index.html` — Korean portal.
- `C:\PrivateProject\ocxeverywhere.github.io\en\index.html` — English portal.
- `C:\PrivateProject\ocxeverywhere.github.io\blog` and `en\blog` (new) — language-specific blog routes.
- `C:\PrivateProject\ocxeverywhere.github.io\_data`, `_includes`, `_layouts`, and `_config.yml` — localized data, navigation, translation links, metadata, and defaults.
- `C:\PrivateProject\ocxeverywhere.github.io\about.md`, `support.md`, `contact.md`, `privacy.md` — Korean static pages.
- `C:\PrivateProject\ocxeverywhere.github.io\en\about.md`, `support.md`, `contact.md`, `privacy.md` (new) — English static pages.
- `C:\PrivateProject\ocxeverywhere.github.io\_posts` and `_templates` — new blog permalinks.
- `C:\PrivateProject\ocxeverywhere.github.io\README.md` — document the final URL and authoring structure.

## Reused code

- Korean portal copy and business data from the pre-migration `index.html` diff and current `_data/site.yml`.
- English portal copy from the current `index.html`.
- Existing language filters, search, feed, related-post, and hreflang components.

## Language(s) detected

mixed: html, css, javascript

## Verification

- Run `node --check assets/js/site.js`.
- Run `git diff --check`.
- Verify route front matter and paired `translation_url` values for portals, blogs, and all static pages.
- Verify blog filters, app links, canonical/hreflang/feed paths, and preserved external links.
- Run a production Jekyll build when Ruby/Bundler is available; otherwise record it as a GitHub Actions follow-up.
