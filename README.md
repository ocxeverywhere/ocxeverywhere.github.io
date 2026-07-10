# OCX Everywhere

OCX Everywhere is the Jekyll site for LazyDaddy's bilingual app portfolio and blog. Korean pages use root-level routes, while English pages use the `/en/` namespace.

## Site structure

- `/` — Korean app and developer portal
- `/blog/` — Korean blog
- `/about/`, `/support/`, `/contact/`, `/privacy/` — Korean static pages
- `/en/` — English app and developer portal
- `/en/blog/` — English blog
- `/en/about/`, `/en/support/`, `/en/contact/`, `/en/privacy/` — English static pages
- `/ko/` — compatibility page pointing visitors to the Korean portal

App metadata is maintained in `_data/apps.yml`. Shared brand, contact, and business details are maintained in `_data/site.yml`.

## Local development

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open the local URL printed by Jekyll. To create the same production output used by GitHub Pages, run:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The generated site is written to `_site/`.

## Write a post

1. Copy `_templates/post-en.md` or `_templates/post-ko.md` into the matching `_posts/en/` or `_posts/ko/` directory.
2. Rename it with the Jekyll date prefix: `YYYY-MM-DD-short-slug.md`.
3. Replace every placeholder and keep `lang` consistent with the directory.
4. Set an explicit permalink under `/en/blog/posts/` or `/blog/posts/`.
5. Add an image only when both `image.path` and meaningful `image.alt` text are available.

Use the same `translation_key` on two posts only when both language versions exist. A post without a translation should omit the field; its language switcher will lead to the other language's blog home.

## Add images

Store post images under `assets/img/posts/` and reference them from front matter or Markdown with a root-relative path. Use descriptive alternative text; do not repeat the article title as alt text unless it accurately describes the image.

## Update links and navigation

- Edit `_data/apps.yml` for app websites, store listings, icons, and localized labels.
- Edit `_data/site.yml` for the shared email address, Ko-fi URL, and business information.
- Edit `_data/navigation.yml` for primary navigation items.

Do not duplicate these values inside pages when a shared data entry already exists.

## Analytics and search verification

Set the public GA4 measurement ID at `analytics.google.id` in `_config.yml`. Leave it empty to disable Google Analytics. Do not commit API keys or other secrets.

Search engine verification files can be placed at the repository root when a provider supplies them. Confirm the required filename and contents with that provider before committing the file.

## Deployment

`.github/workflows/pages-deploy.yml` builds the site with Ruby 3.3 and deploys `_site/` to GitHub Pages after a push to `main`. It can also be started manually with `workflow_dispatch`.

In the repository's GitHub Pages settings, select **GitHub Actions** as the deployment source.

## Theme maintenance

The site declares `jekyll-theme-chirpy` in `Gemfile`. Update the version constraint deliberately, run `bundle update jekyll-theme-chirpy`, review the resulting lockfile and rendered pages, and commit the dependency change only after verification.

Local layouts, includes, styles, and plugins override or extend theme behavior. Recheck these customizations whenever the theme version changes.
