---
layout: page
title_key: nav.blog
lang: zh
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}
{% if current_lang == "zh" %}
  <p class="text-lg text-gray-600 mb-8">
    欢迎来到基石保险博客！在这里，您可以找到关于新西兰保险的最新信息、专业建议和实用指南。我们的专家团队定期分享保险知识，帮助您做出明智的保险决策。
  </p>
{% else %}
  <p class="text-lg text-gray-600 mb-8">
    Welcome to the Cornerstone Insurance blog! Here you'll find the latest information, expert advice, and practical guides about insurance in New Zealand. Our expert team regularly shares insurance knowledge to help you make informed decisions.
  </p>
{% endif %}

<div class="grid gap-8 mt-12">
  {%- for post in site.posts -%}
  <article class="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
    <div class="p-6">
      <div class="flex items-center text-sm text-gray-500 mb-3">
        <time class="uppercase font-semibold">{{ post.date | date: "%b %-d, %Y" }}</time>
        {% if post.author %}
          <span class="mx-2">•</span>
          <span>{{ post.author }}</span>
        {% endif %}
        {% if post.categories %}
          <span class="mx-2">•</span>
          <span class="capitalize">{{ post.categories | first | replace: '-', ' ' }}</span>
        {% endif %}
      </div>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition duration-200">
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
      
      {% if post.excerpt %}
        <div class="text-gray-600 mb-4 line-clamp-3">
          {{ post.excerpt | strip_html | truncatewords: 30 }}
        </div>
      {% endif %}
      
      <div class="flex items-center justify-between">
        <a href="{{ post.url | relative_url }}" 
           class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition duration-200">
          {% if current_lang == "zh" %}
            阅读更多
          {% else %}
            Read More
          {% endif %}
          <i class="ph-arrow-right ml-2"></i>
        </a>
        
        {% if post.tags %}
          <div class="flex flex-wrap gap-2">
            {% for tag in post.tags limit:2 %}
              <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {{ tag | replace: '-', ' ' | capitalize }}
              </span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>
  </article>
  {%- endfor -%}
</div>

{% if site.posts.size == 0 %}
  <div class="text-center py-12">
    <i class="ph-article text-6xl text-gray-300 mb-4"></i>
    {% if current_lang == "zh" %}
      <h3 class="text-xl font-semibold text-gray-600 mb-2">暂无博客文章</h3>
      <p class="text-gray-500">我们正在准备精彩的内容，请稍后再来查看。</p>
    {% else %}
      <h3 class="text-xl font-semibold text-gray-600 mb-2">No blog posts yet</h3>
      <p class="text-gray-500">We're preparing great content. Please check back soon.</p>
    {% endif %}
  </div>
{% endif %}