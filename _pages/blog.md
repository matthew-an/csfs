---
layout: page
plain: true
title_key: nav.blog
heading: 博客
intro: 条款对比、理赔实操、核保时容易踩的坑——都是客户问得最多的问题。
lang: zh
permalink: /blog/
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}
{% if current_lang == "en" %}{% assign posts = site.posts_en %}{% assign date_format = "%-d %B %Y" %}{% else %}{% assign posts = site.posts_zh %}{% assign date_format = "%Y年%-m月%-d日" %}{% endif %}
{% assign sorted = posts | sort: 'date' | reverse %}

{% if sorted.size > 0 %}
<div class="hp-posts">
  {%- for post in sorted -%}
  <a class="hp-post" href="{{ post.url | relative_url }}">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: date_format }}{% if post.categories and post.categories.size > 0 %} · {{ post.categories | first | replace: '-', ' ' }}{% endif %}</time>
    <h3>{{ post.title | escape }}</h3>
    {%- if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif -%}
  </a>
  {%- endfor -%}
</div>
{% else %}
<p class="pg-p">{% if current_lang == "en" %}No articles yet.{% else %}还没有文章。{% endif %}</p>
{% endif %}
