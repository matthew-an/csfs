---
layout: page
plain: true
title_key: pages.contact.title
heading: Contact
intro: Phone, WeChat or email, in English or Mandarin. Tell us the situation — who is in the household, whether there is a mortgage, what cover you already hold. The first conversation is free; you decide afterwards.
description_key: pages.contact.description
lang: en
permalink: /en/contact-us/
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}

<dl class="pg-channels">
  <div class="pg-channels__row"><dt>{% if current_lang == "en" %}Phone{% else %}电话{% endif %}</dt><dd><a href="tel:+64211280727">+64 211 280 727</a><small>{% if current_lang == "en" %}Monday to Friday, 9:00–17:00{% else %}周一至周五 9:00–17:00{% endif %}</small></dd></div>
  <div class="pg-channels__row"><dt>{% if current_lang == "en" %}WeChat{% else %}微信{% endif %}</dt><dd><button type="button" class="wechat-qr-trigger" data-wechat-qr="{{ '/assets/img/wechat_qr.jpg' | relative_url }}">Amytaoingrace</button><small>{% if current_lang == "en" %}Tap for the QR code. Messages in Chinese or English.{% else %}点开看二维码。中英文都可以。{% endif %}</small></dd></div>
  <div class="pg-channels__row"><dt>{% if current_lang == "en" %}Email{% else %}邮箱{% endif %}</dt><dd><a href="mailto:amy.tao@cornerstonefs.co.nz">amy.tao@cornerstonefs.co.nz</a><small>{% if current_lang == "en" %}Replies within one working day{% else %}一个工作日内回复{% endif %}</small></dd></div>
  <div class="pg-channels__row"><dt>WhatsApp</dt><dd><button type="button" class="qr-trigger" data-qr-image="{{ '/assets/img/whatsapp_qr.png' | relative_url }}" data-qr-title="WhatsApp" data-qr-description="{% if current_lang == 'en' %}Scan with WhatsApp to add us{% else %}用 WhatsApp 扫码添加{% endif %}">+64 21 128 0727</button><small>{% if current_lang == "en" %}Tap for the QR code{% else %}点开看二维码{% endif %}</small></dd></div>
  <div class="pg-channels__row"><dt>{% if current_lang == "en" %}Office{% else %}办公室{% endif %}</dt><dd>{% if current_lang == "en" %}Auckland, New Zealand{% else %}新西兰奥克兰{% endif %}<small>{% if current_lang == "en" %}Meetings by appointment. Wherever you are in New Zealand, everything can be done by phone, video and e-signature.{% else %}见面请先约时间。无论你在新西兰哪个城市，电话、视频和电子签名就能把整个流程走完。{% endif %}</small></dd></div>
</dl>

<section class="pg-section">
  <h2 class="pg-h2">{% if current_lang == "en" %}Why not to leave it{% else %}为什么不建议再等等{% endif %}</h2>
  {% if current_lang == "en" %}
  <p class="pg-p">Cover can only be bought while you are well. Once a symptom has appeared or a scan has found something, that condition is usually excluded — and sometimes the policy cannot be issued at all. Nobody knows in advance when they will need to claim; some clients use their cover within months of it starting. What you can control is buying the umbrella before it rains.</p>
  {% else %}
  <p class="pg-p">保险只能在身体健康的时候买。等到症状出现、或者体检查出了问题，那一项通常就会被除外，有时整份保单都核保不过。没有人能预先知道自己什么时候会用上保单——有的客户买完没几个月就理赔了。我们能控制的，只是趁还买得到的时候先把伞备好，这样无论什么时候下雨，手里都有一把。</p>
  {% endif %}
</section>

<section class="pg-section">
  <h2 class="pg-h2">{% if current_lang == "en" %}Already a client and need to claim?{% else %}已经是客户，要理赔？{% endif %}</h2>
  {% if current_lang == "en" %}
  <p class="pg-p">Contact Amy first, before you contact the insurer. We will tell you what the insurer is going to ask for, put the documents together with you, and lodge and follow the claim on your behalf. If a claim is declined, we argue it against the wording. And if dealing with the clinic or the insurer in English is hard work, we make those calls for you. All of it is part of the service, at no charge.</p>
  {% else %}
  <p class="pg-p">先联系 Amy，不用自己去找保险公司。我们会告诉你保险公司会要哪些材料、陪你把材料准备好，再代为递交并跟进进度；被拒赔的话，依据条款帮你申诉。如果用英文跟诊所或保险公司沟通有困难，这些电话我们替你打。以上都是服务的一部分，不额外收费。</p>
  {% endif %}
</section>
