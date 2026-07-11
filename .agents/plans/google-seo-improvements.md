# Plan: Improve Google SEO indexing and article metadata

## Context

The bilingual Jekyll site already has titles, descriptions, canonical URLs, hreflang, robots.txt, and `jekyll-seo-tag`, but utility/thin archive URLs can enter the sitemap, `/ko/` remains a duplicate compatibility URL, unused pagination configuration can imply low-value page URLs, and posts do not consistently expose rich article/social metadata. The goal is to keep only valuable canonical pages indexable and make every published post emit complete `BlogPosting` metadata with a dependable social preview image and modification date.

## Approach

- Mark both search pages and both tag archive pages `noindex,follow` and `sitemap: false`; keep category hubs indexable because they are curated bilingual navigation pages, but add meaningful localized descriptions. This avoids indexing the thinnest utility archives without removing useful internal links.
- Add `sitemap: false` to `/ko/` and replace the compatibility page with a permanent redirect to `/` using a small redirect layout that includes a canonical link, `noindex,follow`, and immediate refresh plus a normal fallback link. GitHub Pages cannot issue server-side redirects, so this is the strongest repository-native consolidation available.
- Remove the unused `paginate` setting. The custom blog layout already lists language-filtered posts directly and the project does not include `jekyll-paginate`; therefore no `/page2/` URL should be generated. Verify the built output and sitemap contain no pagination URLs.
- Retain `published: false` on the Korean sample post and add `sitemap: false` defensively. Keep both post templates unpublished and extend them with required `last_modified_at` and structured `image.path`/`image.alt` placeholders so future posts cannot silently omit the metadata workflow.
- Add a reusable post SEO include after `{% seo %}` that emits one `BlogPosting` JSON-LD object only on post pages, using the canonical absolute URL, localized headline/description, `datePublished`, `dateModified` (falling back to `date`), author/publisher, language, and page image with a site-wide fallback. Avoid duplicating the existing generic `jekyll-seo-tag` graph for non-post pages.
- Configure a 1200×630 site-wide PNG social card as the fallback and add `image`, `last_modified_at`, and meaningful localized alt text to every currently published post. The same front matter feeds `jekyll-seo-tag` Open Graph/Twitter tags and the custom `BlogPosting` object. Add the fallback image as a repository asset; post-specific images can replace it later without layout changes.
- Update the visible post timestamp to expose both published and modified dates when they differ, keeping machine-readable ISO timestamps aligned with JSON-LD.

## Files to modify

- `C:\PrivateProject\ocxeverywhere.github.io\_config.yml` — remove unused pagination, add the default social image/publisher metadata, and preserve SEO plugin configuration.
- `C:\PrivateProject\ocxeverywhere.github.io\_layouts\default.html` — include post-only structured metadata after the existing SEO tag.
- `C:\PrivateProject\ocxeverywhere.github.io\_layouts\post.html` — render an accessible modified date when supplied.
- `C:\PrivateProject\ocxeverywhere.github.io\_layouts\redirect.html` (new) — provide canonical/noindex client-side compatibility redirects for static GitHub Pages.
- `C:\PrivateProject\ocxeverywhere.github.io\_includes\post-seo.html` (new) — generate escaped, absolute-URL `BlogPosting` JSON-LD with fallback values.
- `C:\PrivateProject\ocxeverywhere.github.io\assets\img\social\default-card.png` (new) — provide the 1200×630 default Open Graph/Twitter image.
- `C:\PrivateProject\ocxeverywhere.github.io\blog\search\index.html` — add `noindex,follow` and sitemap exclusion.
- `C:\PrivateProject\ocxeverywhere.github.io\en\blog\search\index.html` — add `noindex,follow` and sitemap exclusion.
- `C:\PrivateProject\ocxeverywhere.github.io\blog\tags\index.html` — exclude the thin tag archive from indexing and sitemap generation.
- `C:\PrivateProject\ocxeverywhere.github.io\en\blog\tags\index.html` — exclude the thin tag archive from indexing and sitemap generation.
- `C:\PrivateProject\ocxeverywhere.github.io\blog\categories\index.html` — add a useful localized description while remaining indexable.
- `C:\PrivateProject\ocxeverywhere.github.io\en\blog\categories\index.html` — add a useful localized description while remaining indexable.
- `C:\PrivateProject\ocxeverywhere.github.io\ko\index.html` — use the redirect layout and exclude the compatibility URL from the sitemap.
- `C:\PrivateProject\ocxeverywhere.github.io\_templates\post-ko.md` — require unpublished-by-default modified-date and image metadata placeholders.
- `C:\PrivateProject\ocxeverywhere.github.io\_templates\post-en.md` — require unpublished-by-default modified-date and image metadata placeholders.
- `C:\PrivateProject\ocxeverywhere.github.io\_posts\ko\2026-07-10-korean-blog-sample.md` — retain `published: false` and add defensive sitemap exclusion plus template metadata.
- `C:\PrivateProject\ocxeverywhere.github.io\_posts\ko\*.md` and `C:\PrivateProject\ocxeverywhere.github.io\_posts\en\*.md` (published posts only) — add accurate `last_modified_at` and social image front matter with localized alt text.

## Reused code

- `C:\PrivateProject\ocxeverywhere.github.io\_layouts\default.html:6` — retain `{% seo %}` as the source of canonical, Open Graph, Twitter, and baseline schema metadata.
- `C:\PrivateProject\ocxeverywhere.github.io\_layouts\default.html:7` — reuse the existing `page.robots` front-matter hook for `noindex,follow`.
- `C:\PrivateProject\ocxeverywhere.github.io\blog\feed.xml:6` and `C:\PrivateProject\ocxeverywhere.github.io\en\blog\feed.xml:6` — match the existing `last_modified_at | default: post.date` fallback rule.
- `C:\PrivateProject\ocxeverywhere.github.io\_includes\hreflang.html:1` — preserve existing bilingual alternate-link behavior.

## Language(s) detected

html

## Verification

- Run `bundle exec jekyll build` with `JEKYLL_ENV=production`; require a successful build with no Liquid or JSON generation warnings.
- Inspect `_site/sitemap.xml`: it must omit both search pages, both tag pages, `/ko/`, the unpublished sample, and every `/page2/`-style URL; category hubs and published posts must remain present.
- Inspect generated search/tag/redirect HTML for exactly one `robots` directive containing `noindex,follow`; confirm `/ko/` canonicalizes and redirects to `/` while retaining a clickable fallback.
- Inspect one Korean and one English generated post: confirm canonical and hreflang links, `og:type=article`, `og:image`, Twitter image metadata, and one valid `BlogPosting` JSON-LD object containing absolute URLs, matching language, publication date, modification date, author, publisher, and image.
- Parse the generated JSON-LD with a JSON parser and validate representative deployed URLs with Google Rich Results Test and Schema.org Validator after deployment.
- Confirm the default social card is exactly 1200×630, returns HTTP 200 after deployment, and has no important text clipped in a social-preview checker.
- Run `bundle exec jekyll serve` and manually check the Korean/English blog, category hubs, post dates, search, tags, and `/ko/` fallback with JavaScript disabled.
