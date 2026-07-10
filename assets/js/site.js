const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#site-navigation');

toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navigation?.classList.toggle('is-open', !expanded);
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-event]');
  if (!link || typeof window.gtag !== 'function') return;
  window.gtag('event', link.dataset.event, {
    app: link.dataset.app,
    destination: link.href,
  });
});

const searchShell = document.querySelector('[data-search-lang]');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

if (searchShell && searchInput && searchResults) {
  fetch('/search.json')
    .then((response) => {
      if (!response.ok) throw new Error('Search index could not be loaded.');
      return response.json();
    })
    .then((posts) => {
      const language = searchShell.dataset.searchLang;
      const localizedPosts = posts.filter((post) => post.lang === language);
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLocaleLowerCase(language);
        const matches = query
          ? localizedPosts.filter((post) => `${post.title} ${post.description} ${post.tags.join(' ')}`.toLocaleLowerCase(language).includes(query))
          : [];
        searchResults.replaceChildren(...matches.map((post) => {
          const article = document.createElement('article');
          article.className = 'post-card';
          const heading = document.createElement('h2');
          const link = document.createElement('a');
          link.href = post.url;
          link.textContent = post.title;
          heading.append(link);
          const description = document.createElement('p');
          description.textContent = post.description;
          article.append(heading, description);
          return article;
        }));
      });
    })
    .catch(() => {
      searchResults.textContent = searchShell.dataset.searchLang === 'ko' ? '검색을 불러오지 못했습니다.' : 'Search is temporarily unavailable.';
    });
}
