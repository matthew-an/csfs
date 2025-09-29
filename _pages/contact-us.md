---
layout: page
title_key: pages.contact.title
description_key: pages.contact.intro
lang: zh
permalink: /contact-us/
---

{% include translate.html key='pages.contact.intro' %}

## {% include translate.html key='pages.contact.contact_info' %}

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold mb-4 flex items-center">
      <i class="ph-phone text-primary-600 mr-2"></i>
      {% include translate.html key='pages.contact.phone_title' %}
    </h3>
    <p class="text-lg">
      <a href="tel:+64211280727" class="text-primary-600 hover:text-primary-700 font-medium">
        +64 211 280 727
      </a>
    </p>
    <p class="text-gray-600 text-sm mt-2">{% include translate.html key='pages.contact.phone_available' %}</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold mb-4 flex items-center">
      <i class="ph-envelope text-primary-600 mr-2"></i>
      {% include translate.html key='pages.contact.email_title' %}
    </h3>
    <p class="text-lg">
      <a href="mailto:amy.tao@cornerstonefs.co.nz" class="text-primary-600 hover:text-primary-700 font-medium break-words">
        amy.tao@cornerstonefs.co.nz
      </a>
    </p>
    <p class="text-gray-600 text-sm mt-2">{% include translate.html key='pages.contact.email_response' %}</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold mb-4 flex items-center">
      <i class="fab fa-weixin text-green-600 mr-2"></i>
      {% include translate.html key='pages.contact.wechat_title' %}
    </h3>
    <div class="flex items-center gap-2 mb-2">
      <p class="text-lg font-medium">Amytaoingrace</p>
      <a href="/assets/img/wechat_qr.jpg" class="wechat-qr-trigger inline-block hover:opacity-80 transition-opacity" title="Click to view WeChat QR Code">
        <img src="/assets/img/wechat_qr_small.jpg" alt="WeChat QR Code" class="w-6 h-6 rounded border border-gray-300" loading="lazy" />
      </a>
    </div>
    <p class="text-gray-600 text-sm">{% include translate.html key='pages.contact.wechat_support' %}</p>
  </div>

  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="text-xl font-semibold mb-4 flex items-center">
      <i class="fas fa-book text-red-600 mr-2"></i>
      小红书
    </h3>
    <p class="text-lg">
      <a href="https://www.xiaohongshu.com/user/profile/5b174220e8ac2b64b56665b7?xsec_token=ABUIxCKlzaQbv-IauUE1AcTvDSEvcn-cn2gRHxATX3vgg%3D&xsec_source=pc_search" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 font-medium">
        新西兰Amy Tao 咨询
      </a>
    </p>
    <p class="text-gray-600 text-sm mt-2">关注我的小红书获取更多保险资讯</p>
  </div>

</div>

## {% include translate.html key='pages.contact.why_choose_title' %}

<div class="bg-primary-50 p-6 rounded-lg my-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 class="font-semibold text-primary-800 mb-2">{% include translate.html key='pages.contact.free_consultation' %}</h4>
      <p class="text-gray-700">{% include translate.html key='pages.contact.free_consultation_desc' %}</p>
    </div>
    <div>
      <h4 class="font-semibold text-primary-800 mb-2">{% include translate.html key='pages.contact.personalized_solutions' %}</h4>
      <p class="text-gray-700">{% include translate.html key='pages.contact.personalized_solutions_desc' %}</p>
    </div>
    <div>
      <h4 class="font-semibold text-primary-800 mb-2">{% include translate.html key='pages.contact.expert_guidance' %}</h4>
      <p class="text-gray-700">{% include translate.html key='pages.contact.expert_guidance_desc' %}</p>
    </div>
    <div>
      <h4 class="font-semibold text-primary-800 mb-2">{% include translate.html key='pages.contact.ongoing_support' %}</h4>
      <p class="text-gray-700">{% include translate.html key='pages.contact.ongoing_support_desc' %}</p>
    </div>
  </div>
</div>

## {% include translate.html key='pages.contact.ready_to_start' %}

<div class="text-center my-8">
  <p class="text-lg text-gray-700 mb-6">
    {% include translate.html key='pages.contact.ready_intro' %}
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="tel:+64211280727" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300">
      <i class="ph-phone mr-2"></i>
      {% include translate.html key='pages.contact.call_now' %}
    </a>
    <a href="mailto:amy.tao@cornerstonefs.co.nz" class="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition duration-300">
      <i class="ph-envelope mr-2"></i>
      {% include translate.html key='pages.contact.send_email' %}
    </a>
  </div>
</div>