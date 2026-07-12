# Project Instructions

## Blog publishing

Blog migration and publishing work must follow [`.agents/blog-publishing.md`](./.agents/blog-publishing.md).

Mandatory rules:

- Use the `blog-write` skill and delegate substantial migration work to `agent-blog-writer` agents.
- Publish Korean and English versions together unless the user explicitly requests one language only.
- Download the source post's real media locally. Never hotlink source images, including link-preview thumbnails.
- Localize meaningful text inside images for English posts and store the result as a separate `-en` derivative.
- Preserve source order, disclosures, affiliate attributes, and unrelated working-tree changes.
- Do not commit, push, or publish unless the user explicitly requests it.
