---
layout: page
plain: true
title_key: pages.team.title
heading: 团队
description_key: pages.team.description
lang: zh
permalink: /team/
seo:
  keywords:
    - 华人保险顾问
    - FSP持牌顾问
    - Amy Tao保险
    - 新西兰华人保险
    - 双语保险服务
    - 奥克兰保险顾问
    - 中科院硕士
    - 保险专业人士
    - 新西兰保险顾问
    - 华人保险团队
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}
{% if current_lang == "en" %}{% assign lp = "/en" %}{% else %}{% assign lp = "" %}{% endif %}

<section class="pg-section">
  <div class="pg-person">
    <img src="{{ '/assets/img/amy-tao.jpg' | relative_url }}" alt="{% if current_lang == 'en' %}Portrait of Min (Amy) Tao{% else %}Min（Amy）Tao 的照片{% endif %}" width="1000" height="1250" loading="lazy" decoding="async">
    <div>
      <h2>Min（Amy）Tao</h2>
      <p class="pg-person__role">{% if current_lang == "en" %}Licensed financial adviser · English and Mandarin{% else %}持牌金融顾问 · 中英文双语{% endif %}</p>
      <p class="pg-person__facts">
        FSPR 629629<br>
        {% if current_lang == "en" %}Master's degree, Chinese Academy of Sciences{% else %}中国科学院硕士{% endif %}<br>
        {% if current_lang == "en" %}Advises on life, health, trauma, income protection, TPD and mortgage protection{% else %}人寿、医疗、重疾、收入保障、全残、房贷保护{% endif %}
      </p>
      {% if current_lang == "en" %}
      <p class="pg-p">Amy works from the household’s structure to analyse what cover is needed and where the gaps in any existing cover lie, and from that establishes which risks should be covered first. She then compares the equivalent products from the five insurers clause by clause and on premium, and builds the combination that best fits the client’s needs and budget.</p>
      <p class="pg-p">Once a policy is in force, a claim is where the adviser’s work counts for most. Clients do not deal with the insurer themselves: Amy sets out the medical and financial evidence you need to gather, then lodges the claim on your behalf and follows it through to payment. Where a claim is declined or only partly paid, she puts the case for review against the wording and the clinical notes and takes it up directly with the claims assessors. The client’s job is to concentrate on treatment and recovery. This continues for as long as the policy is held, at no additional cost.</p>
      <p class="pg-p">She has been interviewed twice by RNZ on the cost of health insurance for the Parent Boost visa (links below).</p>
      {% else %}
      <p class="pg-p">Amy 会先结合客户的家庭结构，分析需求以及现有保障的缺口，据此判断哪些风险需要优先保障；再把五家保险公司同类产品的条款与保费逐项横向比对，组合出最贴合客户需求与预算的方案。</p>
      <p class="pg-p">保单生效之后，理赔是顾问价值最直接的体现。出险时客户不必自己面对保险公司：Amy 会为您列明需要准备的医疗与财务材料，再代为递交并跟进至款项到账；若遇到拒赔或部分给付，她会依据条款原文与病历记录提出申诉，并与核赔部门直接交涉。客户只需专注于治疗与康复。这项服务在保单持有期间长期有效，不额外收费。</p>
      <p class="pg-p">曾两次接受新西兰国家广播电台（RNZ）采访，谈父母签证（Parent Boost）的医疗保险成本，链接在下面。</p>
      {% endif %}

      <dl class="pg-channels" style="margin-top: 1.25rem;">
        <div class="pg-channels__row"><dt>{% if current_lang == "en" %}Phone{% else %}电话{% endif %}</dt><dd><a href="tel:+64211280727">+64 211 280 727</a></dd></div>
        <div class="pg-channels__row"><dt>{% if current_lang == "en" %}Email{% else %}邮箱{% endif %}</dt><dd><a href="mailto:amy.tao@cornerstonefs.co.nz">amy.tao@cornerstonefs.co.nz</a></dd></div>
        <div class="pg-channels__row"><dt>{% if current_lang == "en" %}WeChat{% else %}微信{% endif %}</dt><dd><button type="button" class="wechat-qr-trigger" data-wechat-qr="{{ '/assets/img/wechat_qr.jpg' | relative_url }}">Amytaoingrace</button><small>{% if current_lang == "en" %}Tap for the QR code{% else %}点开看二维码{% endif %}</small></dd></div>
        <div class="pg-channels__row"><dt>WhatsApp</dt><dd><button type="button" class="qr-trigger" data-qr-image="{{ '/assets/img/whatsapp_qr.png' | relative_url }}" data-qr-title="WhatsApp" data-qr-description="{% if current_lang == 'en' %}Scan with WhatsApp to add Amy{% else %}用 WhatsApp 扫码添加 Amy{% endif %}">+64 21 128 0727</button><small>{% if current_lang == "en" %}Tap for the QR code{% else %}点开看二维码{% endif %}</small></dd></div>
        <div class="pg-channels__row"><dt>小红书</dt><dd><a href="https://www.xiaohongshu.com/user/profile/5b174220e8ac2b64b56665b7?xsec_token=ABUIxCKlzaQbv-IauUE1AcTvDSEvcn-cn2gRHxATX3vgg%3D&xsec_source=pc_search" target="_blank" rel="noopener noreferrer">新西兰Amy Tao 咨询</a></dd></div>
        <div class="pg-channels__row"><dt>YouTube</dt><dd><a href="https://www.youtube.com/@%E6%96%B0%E8%A5%BF%E5%85%B0AmyTao" target="_blank" rel="noopener noreferrer">新西兰AmyTao</a></dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="pg-section">
  <div class="pg-person">
    <div style="aspect-ratio: 4 / 5; border-radius: 10px; background: var(--hp-tint); border: 1px solid var(--hp-line);"></div>
    <div>
      <h2>Ella Zhang</h2>
      <p class="pg-person__role">{% if current_lang == "en" %}Administration{% else %}行政{% endif %}</p>
      {% if current_lang == "en" %}
      <p class="pg-p">Ella runs the day-to-day admin: application paperwork, documents to and from the insurers, and follow-ups on anything that's waiting on someone else. If you've sent something in and haven't heard back, she's the person chasing it.</p>
      {% else %}
      <p class="pg-p">Ella 负责日常行政：投保的文件往来、和保险公司之间的资料收发、以及所有卡在别人那里的事项的跟进。你发了材料还没收到回音，追进度的就是她。</p>
      {% endif %}
      <dl class="pg-channels" style="margin-top: 1.25rem;">
        <div class="pg-channels__row"><dt>{% if current_lang == "en" %}Email{% else %}邮箱{% endif %}</dt><dd><a href="mailto:admin@cornerstonefs.co.nz">admin@cornerstonefs.co.nz</a></dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="pg-section">
  <h2 class="pg-h2">{% if current_lang == "en" %}In the media{% else %}媒体报道{% endif %}</h2>
  <div class="hp-posts">
    <a class="hp-post" href="https://www.rnz.co.nz/news/chinese/563697/potential-insurance-costs-cast-shadow-over-parent-visa" target="_blank" rel="noopener noreferrer">
      <time datetime="2025-06-12">{% if current_lang == "en" %}12 June 2025{% else %}2025年6月12日{% endif %} · RNZ</time>
      <h3>Potential insurance costs cast shadow over parent visa</h3>
    </a>
    <a class="hp-post" href="https://www.rnz.co.nz/news/chinese/574245/alarm-over-health-insurance-costs-for-parent-boost-visa" target="_blank" rel="noopener noreferrer">
      <time datetime="2025-09-26">{% if current_lang == "en" %}26 September 2025{% else %}2025年9月26日{% endif %} · RNZ</time>
      <h3>Alarm over health insurance costs for Parent Boost Visa</h3>
    </a>
  </div>
</section>
