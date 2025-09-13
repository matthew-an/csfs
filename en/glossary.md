---
layout: page
title_key: pages.glossary.title
lang: en
permalink: /en/glossary/
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}

<div class="mb-8">
  <p class="text-lg text-gray-600">
    {% include translate.html key='pages.glossary.description' %}
  </p>
</div>

<!-- Search Box -->
<div class="mb-8">
  <div class="relative max-w-md">
    <input type="text" id="glossary-search" 
           placeholder="{% include translate.html key='pages.glossary.search_placeholder' %}"
           class="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3">
      <i class="fas fa-search text-gray-400"></i>
    </div>
  </div>
</div>

<!-- Glossary Terms -->
<div class="space-y-4" id="glossary-terms">
  {% for term_data in site.data[current_lang].pages.glossary.terms %}
    {% assign term_key = term_data[0] %}
    {% assign term_info = term_data[1] %}
    
    <div class="glossary-item bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 border-l-4 border-primary-500">
      <h3 class="text-xl font-bold text-gray-900 mb-3 glossary-term">
        {{ term_info.term }}
      </h3>
      <p class="text-gray-700 leading-relaxed glossary-definition">
        {{ term_info.definition }}
      </p>
    </div>
  {% endfor %}
</div>

<!-- No Results Message -->
<div id="no-results" class="hidden text-center py-12">
  <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
  {% if current_lang == "zh" %}
    <h3 class="text-xl font-semibold text-gray-600 mb-2">未找到匹配的术语</h3>
    <p class="text-gray-500">请尝试使用不同的关键词搜索。</p>
  {% else %}
    <h3 class="text-xl font-semibold text-gray-600 mb-2">No matching terms found</h3>
    <p class="text-gray-500">Try searching with different keywords.</p>
  {% endif %}
</div>

<!-- JavaScript for Search Functionality -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('glossary-search');
  const glossaryItems = document.querySelectorAll('.glossary-item');
  const noResults = document.getElementById('no-results');

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    let visibleCount = 0;

    glossaryItems.forEach(function(item) {
      const term = item.querySelector('.glossary-term').textContent.toLowerCase();
      const definition = item.querySelector('.glossary-definition').textContent.toLowerCase();
      
      if (searchTerm === '' || term.includes(searchTerm) || definition.includes(searchTerm)) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Show/hide no results message
    if (visibleCount === 0 && searchTerm !== '') {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
    }
  });

  // Clear search on escape key
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      this.value = '';
      this.dispatchEvent(new Event('input'));
    }
  });
});
</script>

<!-- Additional Styling -->
<style>
.glossary-item {
  scroll-margin-top: 100px;
}

.glossary-term {
  color: #1f2937;
}

.glossary-definition {
  line-height: 1.7;
}

#glossary-search:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.glossary-item:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .glossary-item {
    padding: 1rem;
  }
}
</style>
