---
layout: page
plain: true
title_key: pages.glossary.title
heading: Insurance glossary
intro: The words that keep turning up in policy documents, explained in plain terms. If a word isn't here, ask your adviser.
description_key: pages.glossary.description
lang: en
permalink: /en/glossary/
---

{% include glossary-schema.html %}
{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}

<label for="glossary-search" class="sr-only">{% include translate.html key='pages.glossary.search_placeholder' %}</label>
<input type="search" id="glossary-search" class="pg-input" placeholder="{% include translate.html key='pages.glossary.search_placeholder' %}" autocomplete="off">

<div class="pg-terms" id="glossary-terms">
  {% for term_data in site.data[current_lang].pages.glossary.terms %}
    {% assign term_key = term_data[0] %}
    {% assign term_info = term_data[1] %}
    <div class="pg-term glossary-item" id="{{ term_key | replace: '_', '-' }}">
      <h3 class="glossary-term">{{ term_info.term }}</h3>
      <p class="glossary-definition">{{ term_info.definition }}</p>
    </div>
  {% endfor %}
</div>

<p id="no-results" class="pg-note" hidden>{% if current_lang == "en" %}No matching terms. Try a different word.{% else %}没有匹配的术语，换个词试试。{% endif %}</p>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('glossary-search');
  var items = document.querySelectorAll('.glossary-item');
  var empty = document.getElementById('no-results');
  if (!input) return;
  input.addEventListener('input', function () {
    var q = this.value.toLowerCase().trim();
    var shown = 0;
    items.forEach(function (item) {
      var hit = q === '' ||
        item.querySelector('.glossary-term').textContent.toLowerCase().indexOf(q) !== -1 ||
        item.querySelector('.glossary-definition').textContent.toLowerCase().indexOf(q) !== -1;
      item.hidden = !hit;
      if (hit) shown++;
    });
    empty.hidden = !(shown === 0 && q !== '');
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { this.value = ''; this.dispatchEvent(new Event('input')); }
  });
});
</script>
