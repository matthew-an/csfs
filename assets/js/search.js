class SiteSearch {
  constructor() {
    this.searchData = null;
    this.searchInput = null;
    this.searchResults = null;
    this.searchOverlay = null;
    this.currentLang = this.detectLanguage();
    this.isSearchOpen = false;
    
    this.init();
  }

  detectLanguage() {
    const path = window.location.pathname;
    return path.startsWith('/en/') ? 'en' : 'zh';
  }

  async init() {
    try {
      await this.loadSearchData();
      this.createSearchInterface();
      this.bindEvents();
    } catch (error) {
      console.error('Search initialization failed:', error);
    }
  }

  async loadSearchData() {
    try {
      const response = await fetch('/search.json');
      this.searchData = await response.json();
    } catch (error) {
      console.error('Failed to load search data:', error);
      throw error;
    }
  }

  createSearchInterface() {
    // Create search overlay
    this.searchOverlay = document.createElement('div');
    this.searchOverlay.className = 'search-overlay fixed inset-0 bg-black bg-opacity-50 z-50 hidden';
    this.searchOverlay.innerHTML = `
      <div class="search-container max-w-4xl mx-auto mt-20 px-4">
        <div class="bg-white rounded-lg shadow-2xl">
          <div class="search-header p-6 border-b border-gray-200">
            <div class="relative">
              <input type="text" 
                     id="site-search-input" 
                     placeholder="${this.currentLang === 'zh' ? '搜索网站内容...' : 'Search site content...'}"
                     class="w-full px-4 py-3 pl-14 pr-14 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i class="fas fa-search text-gray-400 text-lg"></i>
              </div>
              <button class="search-close absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition duration-200">
                <i class="fas fa-times text-lg"></i>
              </button>
            </div>
          </div>
          <div class="search-results max-h-96 overflow-y-auto p-6" id="search-results">
            <div class="search-placeholder text-center text-gray-500 py-8">
              <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <p class="text-lg">${this.currentLang === 'zh' ? '开始输入以搜索内容' : 'Start typing to search content'}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.searchOverlay);
    
    this.searchInput = document.getElementById('site-search-input');
    this.searchResults = document.getElementById('search-results');
  }

  bindEvents() {
    // Search trigger buttons
    const searchTriggers = document.querySelectorAll('.search-trigger');
    searchTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSearch();
      });
    });

    // Keyboard shortcut (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearch();
      }
      
      if (e.key === 'Escape' && this.isSearchOpen) {
        this.closeSearch();
      }
    });

    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.performSearch(e.target.value);
      });
    }

    // Close search
    const closeButton = this.searchOverlay.querySelector('.search-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.closeSearch();
      });
    }

    // Close on overlay click
    this.searchOverlay.addEventListener('click', (e) => {
      if (e.target === this.searchOverlay) {
        this.closeSearch();
      }
    });
  }

  openSearch() {
    this.isSearchOpen = true;
    this.searchOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus search input with slight delay for better UX
    setTimeout(() => {
      if (this.searchInput) {
        this.searchInput.focus();
      }
    }, 100);
  }

  closeSearch() {
    this.isSearchOpen = false;
    this.searchOverlay.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Clear search
    if (this.searchInput) {
      this.searchInput.value = '';
    }
    this.showPlaceholder();
  }

  performSearch(query) {
    if (!query || query.length < 2) {
      this.showPlaceholder();
      return;
    }

    const results = this.searchContent(query);
    this.displayResults(results, query);
  }

  searchContent(query) {
    const results = [];
    const queryLower = query.toLowerCase();

    // Search pages
    if (this.searchData.pages) {
      this.searchData.pages.forEach(page => {
        if (page.lang !== this.currentLang) return;
        
        const titleMatch = page.title.toLowerCase().includes(queryLower);
        const contentMatch = page.content.toLowerCase().includes(queryLower);
        
        if (titleMatch || contentMatch) {
          results.push({
            ...page,
            relevance: titleMatch ? 10 : 5,
            matchType: titleMatch ? 'title' : 'content'
          });
        }
      });
    }

    // Search glossary
    if (this.searchData.glossary && this.searchData.glossary[this.currentLang]) {
      this.searchData.glossary[this.currentLang].forEach(term => {
        const termMatch = term.term.toLowerCase().includes(queryLower);
        const defMatch = term.definition.toLowerCase().includes(queryLower);
        
        if (termMatch || defMatch) {
          results.push({
            ...term,
            title: term.term,
            content: term.definition,
            relevance: termMatch ? 8 : 4,
            matchType: termMatch ? 'term' : 'definition'
          });
        }
      });
    }

    // Search FAQ (if available)
    if (this.searchData.faq && this.searchData.faq[this.currentLang]) {
      this.searchData.faq[this.currentLang].forEach(faq => {
        const questionMatch = faq.question.toLowerCase().includes(queryLower);
        const answerMatch = faq.answer.toLowerCase().includes(queryLower);
        
        if (questionMatch || answerMatch) {
          results.push({
            ...faq,
            title: faq.question,
            content: faq.answer,
            relevance: questionMatch ? 9 : 6,
            matchType: questionMatch ? 'question' : 'answer'
          });
        }
      });
    }

    // Sort by relevance
    return results.sort((a, b) => b.relevance - a.relevance).slice(0, 10);
  }

  displayResults(results, query) {
    if (results.length === 0) {
      this.showNoResults(query);
      return;
    }

    const resultsHtml = results.map(result => {
      const typeLabel = this.getTypeLabel(result.type);
      const excerpt = this.createExcerpt(result.content, query);
      
      return `
        <div class="search-result-item p-4 border-b border-gray-100 hover:bg-gray-50 transition duration-200">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center mb-2">
                <span class="search-result-type text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full font-medium mr-2">
                  ${typeLabel}
                </span>
                ${result.date ? `<span class="text-xs text-gray-500">${result.date}</span>` : ''}
              </div>
              <h3 class="search-result-title text-lg font-semibold text-gray-900 mb-2 hover:text-primary-600">
                <a href="${result.url}" class="search-result-link">${this.highlightText(result.title, query)}</a>
              </h3>
              <p class="search-result-excerpt text-gray-600 text-sm leading-relaxed">
                ${this.highlightText(excerpt, query)}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0">
              <i class="fas fa-external-link-alt text-gray-400 text-sm"></i>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.searchResults.innerHTML = `
      <div class="search-results-header mb-4">
        <p class="text-sm text-gray-600">
          ${this.currentLang === 'zh' ? `找到 ${results.length} 个结果` : `Found ${results.length} results`}
        </p>
      </div>
      ${resultsHtml}
    `;

    // Add click handlers for results
    this.searchResults.querySelectorAll('.search-result-link').forEach(link => {
      link.addEventListener('click', () => {
        this.closeSearch();
      });
    });
  }

  showPlaceholder() {
    this.searchResults.innerHTML = `
      <div class="search-placeholder text-center text-gray-500 py-8">
        <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
        <p class="text-lg">${this.currentLang === 'zh' ? '开始输入以搜索内容' : 'Start typing to search content'}</p>
        <p class="text-sm mt-2">${this.currentLang === 'zh' ? '搜索博客、服务、FAQ 和术语表' : 'Search blog posts, services, FAQ, and glossary'}</p>
      </div>
    `;
  }

  showNoResults(query) {
    this.searchResults.innerHTML = `
      <div class="no-results text-center text-gray-500 py-8">
        <i class="fas fa-search-minus text-4xl text-gray-300 mb-4"></i>
        <p class="text-lg font-medium">${this.currentLang === 'zh' ? '未找到结果' : 'No results found'}</p>
        <p class="text-sm mt-2">${this.currentLang === 'zh' ? `没有找到包含 "${query}" 的内容` : `No content found containing "${query}"`}</p>
        <p class="text-xs mt-4 text-gray-400">${this.currentLang === 'zh' ? '尝试使用不同的关键词' : 'Try using different keywords'}</p>
      </div>
    `;
  }

  getTypeLabel(type) {
    const labels = {
      zh: {
        page: '页面',
        post: '博客',
        glossary: '术语',
        faq: '常见问题'
      },
      en: {
        page: 'Page',
        post: 'Blog',
        glossary: 'Glossary',
        faq: 'FAQ'
      }
    };
    
    return labels[this.currentLang][type] || type;
  }

  createExcerpt(content, query, maxLength = 150) {
    if (!content) return '';
    
    const queryIndex = content.toLowerCase().indexOf(query.toLowerCase());
    if (queryIndex === -1) {
      return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
    }
    
    const start = Math.max(0, queryIndex - 50);
    const end = Math.min(content.length, start + maxLength);
    
    let excerpt = content.substring(start, end);
    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';
    
    return excerpt;
  }

  highlightText(text, query) {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new SiteSearch();
});
