---
layout: page
title_key: pages.services.title
lang: zh
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}

<!-- Introduction Section -->
<div class="mb-12 text-center">
  <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    {% include translate.html key='pages.services.intro' %}
  </p>
</div>

<!-- Services Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  
  <!-- Life Insurance -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-blue-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-heart text-blue-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.services.life_title' %}
      </h3>
      
    </div>
    <p class="text-gray-600 mb-6 leading-relaxed">
      {% include translate.html key='pages.services.life_desc' %}
    </p>
    <div class="space-y-3 mb-6">
      {% if current_lang == "zh" %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>保障金额：5万-200万纽币</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>覆盖房贷和债务</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>子女教育基金</span>
        </div>
      {% else %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Cover: $50,000 - $2 million</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Pay off mortgage & debts</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Children's education fund</span>
        </div>
      {% endif %}
    </div>
    <a href="/contact-us" class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
      {% if current_lang == "zh" %}获取报价{% else %}Get Quote{% endif %}
      <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>

  <!-- Health Insurance -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-green-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-user-md text-green-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.services.health_title' %}
      </h3>
    </div>
    <p class="text-gray-600 mb-6 leading-relaxed">
      {% include translate.html key='pages.services.health_desc' %}
    </p>
    <div class="space-y-3 mb-6">
      {% if current_lang == "zh" %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>私人医疗服务</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>缩短等待时间</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>专科医生选择</span>
        </div>
      {% else %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Private medical services</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Reduced waiting times</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Specialist choice</span>
        </div>
      {% endif %}
    </div>
    <a href="/contact-us" class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition duration-200">
      {% if current_lang == "zh" %}了解更多{% else %}Learn More{% endif %}
      <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>

  <!-- Trauma Insurance -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-red-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-shield-alt text-red-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.services.trauma_title' %}
      </h3>
    </div>
    <p class="text-gray-600 mb-6 leading-relaxed">
      {% include translate.html key='pages.services.trauma_desc' %}
    </p>
    <div class="space-y-3 mb-6">
      {% if current_lang == "zh" %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>一次性赔付</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>覆盖主要疾病</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>专注康复治疗</span>
        </div>
      {% else %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Lump sum payment</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Covers major illnesses</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Focus on recovery</span>
        </div>
      {% endif %}
    </div>
    <a href="/contact-us" class="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition duration-200">
      {% if current_lang == "zh" %}了解更多{% else %}Learn More{% endif %}
      <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>

  <!-- Income Protection -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-purple-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-dollar-sign text-purple-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.services.income_title' %}
      </h3>
    </div>
    <p class="text-gray-600 mb-6 leading-relaxed">
      {% include translate.html key='pages.services.income_desc' %}
    </p>
    <div class="space-y-3 mb-6">
      {% if current_lang == "zh" %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>定期收入替代</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>维持生活水平</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>覆盖日常开支</span>
        </div>
      {% else %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Regular income replacement</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Maintain lifestyle</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Cover daily expenses</span>
        </div>
      {% endif %}
    </div>
    <a href="/contact-us" class="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition duration-200">
      {% if current_lang == "zh" %}了解更多{% else %}Learn More{% endif %}
      <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>

  <!-- Disability Insurance -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-indigo-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-wheelchair text-indigo-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.services.disability_title' %}
      </h3>
    </div>
    <p class="text-gray-600 mb-6 leading-relaxed">
      {% include translate.html key='pages.services.disability_desc' %}
    </p>
    <div class="space-y-3 mb-6">
      {% if current_lang == "zh" %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>永久伤残保障</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>一次性赔付</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>生活方式调整</span>
        </div>
      {% else %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Permanent disability cover</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Lump sum payment</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Lifestyle adjustment</span>
        </div>
      {% endif %}
    </div>
    <a href="/contact-us" class="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition duration-200">
      {% if current_lang == "zh" %}了解更多{% else %}Learn More{% endif %}
      <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>

  <!-- Mortgage Protection -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-orange-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-home text-orange-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.services.mortgage_title' %}
      </h3>
    </div>
    <p class="text-gray-600 mb-6 leading-relaxed">
      {% include translate.html key='pages.services.mortgage_desc' %}
    </p>
    <div class="space-y-3 mb-6">
      {% if current_lang == "zh" %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>保护家庭住房</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>覆盖房贷余额</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>家庭财务稳定</span>
        </div>
      {% else %}
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Protect family home</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Cover mortgage balance</span>
        </div>
        <div class="flex items-center text-sm text-gray-700">
          <i class="fas fa-check text-green-500 mr-2"></i>
          <span>Family financial stability</span>
        </div>
      {% endif %}
    </div>
    <a href="/contact-us" class="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition duration-200">
      {% if current_lang == "zh" %}了解更多{% else %}Learn More{% endif %}
      <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>
</div>

<!-- Comparison Table -->
<div class="bg-gray-50 rounded-xl p-8 mb-16">
  <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">
    {% if current_lang == "zh" %}保险类型对比{% else %}Insurance Types Comparison{% endif %}
  </h2>
  <div class="overflow-x-auto">
    <table class="w-full bg-white rounded-lg shadow-md">
      <thead class="bg-primary-600 text-white">
        <tr>
          <th class="px-6 py-4 text-left font-semibold">
            {% if current_lang == "zh" %}保险类型{% else %}Insurance Type{% endif %}
          </th>
          <th class="px-6 py-4 text-left font-semibold">
            {% if current_lang == "zh" %}主要用途{% else %}Primary Purpose{% endif %}
          </th>
          <th class="px-6 py-4 text-left font-semibold">
            {% if current_lang == "zh" %}赔付方式{% else %}Payment Method{% endif %}
          </th>
          <th class="px-6 py-4 text-left font-semibold">
            {% if current_lang == "zh" %}适合人群{% else %}Suitable For{% endif %}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 font-semibold text-blue-600">
            {% if current_lang == "zh" %}人寿保险{% else %}Life Insurance{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}保障家庭财务安全{% else %}Protect family finances{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}身故时一次性赔付{% else %}Lump sum on death{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}有家庭责任者{% else %}Those with dependents{% endif %}
          </td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 font-semibold text-green-600">
            {% if current_lang == "zh" %}健康保险{% else %}Health Insurance{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}获得私人医疗服务{% else %}Access private healthcare{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}报销医疗费用{% else %}Reimburse medical costs{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}所有年龄段{% else %}All age groups{% endif %}
          </td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 font-semibold text-red-600">
            {% if current_lang == "zh" %}重大疾病保险{% else %}Trauma Insurance{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}重大疾病财务支持{% else %}Financial support for serious illness{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}确诊时一次性赔付{% else %}Lump sum on diagnosis{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}30岁以上成年人{% else %}Adults 30+{% endif %}
          </td>
        </tr>
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4 font-semibold text-purple-600">
            {% if current_lang == "zh" %}收入保障保险{% else %}Income Protection{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}无法工作时收入替代{% else %}Replace income when unable to work{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}定期月度赔付{% else %}Regular monthly payments{% endif %}
          </td>
          <td class="px-6 py-4">
            {% if current_lang == "zh" %}有固定收入者{% else %}Those with regular income{% endif %}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- Why Choose Our Services -->
<div class="bg-primary-600 text-white rounded-xl p-8 mb-16">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-bold mb-4">
      {% if current_lang == "zh" %}为什么选择我们的服务？{% else %}Why Choose Our Services?{% endif %}
    </h2>
    <p class="text-xl text-primary-100">
      {% if current_lang == "zh" %}专业、可靠、贴心的保险服务{% else %}Professional, reliable, and caring insurance services{% endif %}
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div class="text-center">
      <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-user-tie text-2xl"></i>
      </div>
      <h3 class="text-lg font-semibold mb-2">
        {% if current_lang == "zh" %}专业顾问{% else %}Expert Advisors{% endif %}
      </h3>
      <p class="text-primary-100 text-sm">
        {% if current_lang == "zh" %}经验丰富的保险专家为您提供专业建议{% else %}Experienced insurance experts provide professional advice{% endif %}
      </p>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-handshake text-2xl"></i>
      </div>
      <h3 class="text-lg font-semibold mb-2">
        {% if current_lang == "zh" %}个性化服务{% else %}Personalized Service{% endif %}
      </h3>
      <p class="text-primary-100 text-sm">
        {% if current_lang == "zh" %}根据您的需求定制最适合的保险方案{% else %}Customized insurance solutions based on your needs{% endif %}
      </p>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-language text-2xl"></i>
      </div>
      <h3 class="text-lg font-semibold mb-2">
        {% if current_lang == "zh" %}双语服务{% else %}Bilingual Service{% endif %}
      </h3>
      <p class="text-primary-100 text-sm">
        {% if current_lang == "zh" %}中英文双语服务，沟通无障碍{% else %}Chinese and English service, barrier-free communication{% endif %}
      </p>
    </div>
    <div class="text-center">
      <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-clock text-2xl"></i>
      </div>
      <h3 class="text-lg font-semibold mb-2">
        {% if current_lang == "zh" %}全程支持{% else %}Full Support{% endif %}
      </h3>
      <p class="text-primary-100 text-sm">
        {% if current_lang == "zh" %}从申请到理赔，全程为您提供支持{% else %}Support from application to claims processing{% endif %}
      </p>
    </div>
  </div>
</div>

<!-- Closing and CTA -->
<div class="text-center bg-gray-50 rounded-xl p-8">
  <h2 class="text-2xl font-bold text-gray-900 mb-4">
    {% include translate.html key='pages.services.closing' %}
  </h2>
  <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
    {% include translate.html key='pages.services.cta' %}
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="/contact-us" class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition duration-300">
      <i class="fas fa-phone mr-2"></i>
      {% if current_lang == "zh" %}立即咨询{% else %}Get Consultation{% endif %}
    </a>
    <a href="/faq" class="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition duration-300">
      <i class="fas fa-question-circle mr-2"></i>
      {% if current_lang == "zh" %}常见问题{% else %}View FAQ{% endif %}
    </a>
  </div>
</div>
