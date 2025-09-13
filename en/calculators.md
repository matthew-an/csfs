---
layout: page
title_key: pages.calculators.title
lang: en
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}

<!-- Introduction Section -->
<div class="mb-12 text-center">
  <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    {% include translate.html key='pages.calculators.description' %}
  </p>
</div>

<!-- Calculator Selection -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
  
  <!-- Life Insurance Calculator -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-blue-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-heart text-blue-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.calculators.life_insurance.title' %}
      </h3>
      <p class="text-gray-600 leading-relaxed">
        {% include translate.html key='pages.calculators.life_insurance.description' %}
      </p>
    </div>
    <button onclick="showCalculator('life-insurance')" 
            class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
      {% if current_lang == "zh" %}开始计算{% else %}Start Calculator{% endif %}
    </button>
  </div>

  <!-- Income Protection Calculator -->
  <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 border-t-4 border-purple-500">
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <i class="fas fa-dollar-sign text-purple-600 text-2xl"></i>
      </div>
      <h3 class="text-2xl font-bold text-gray-900 mb-3">
        {% include translate.html key='pages.calculators.income_protection.title' %}
      </h3>
      <p class="text-gray-600 leading-relaxed">
        {% include translate.html key='pages.calculators.income_protection.description' %}
      </p>
    </div>
    <button onclick="showCalculator('income-protection')" 
            class="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
      {% if current_lang == "zh" %}开始计算{% else %}Start Calculator{% endif %}
    </button>
  </div>
</div>

<!-- Life Insurance Calculator -->
<div id="life-insurance-calculator" class="calculator-section hidden">
  <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-3xl font-bold text-gray-900">
        {% include translate.html key='pages.calculators.life_insurance.title' %}
      </h2>
      <button onclick="hideCalculator()" class="text-gray-500 hover:text-gray-700 text-2xl">
        <i class="fas fa-times"></i>
      </button>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Input Form -->
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.life_insurance.annual_income' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.life_insurance.annual_income_help' %}"></i>
          </label>
          <input type="number" id="annual-income" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="80000">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.life_insurance.mortgage_debt' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.life_insurance.mortgage_debt_help' %}"></i>
          </label>
          <input type="number" id="mortgage-debt" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="400000">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.life_insurance.other_debts' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.life_insurance.other_debts_help' %}"></i>
          </label>
          <input type="number" id="other-debts" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="20000">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.life_insurance.dependents' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.life_insurance.dependents_help' %}"></i>
          </label>
          <input type="number" id="dependents" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="2">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.life_insurance.years_support' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.life_insurance.years_support_help' %}"></i>
          </label>
          <input type="number" id="years-support" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="10">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.life_insurance.final_expenses' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.life_insurance.final_expenses_help' %}"></i>
          </label>
          <input type="number" id="final-expenses" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="15000">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.life_insurance.existing_coverage' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.life_insurance.existing_coverage_help' %}"></i>
          </label>
          <input type="number" id="existing-coverage" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="0">
        </div>

        <button onclick="calculateLifeInsurance()" 
                class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          {% include translate.html key='pages.calculators.life_insurance.calculate' %}
        </button>
      </div>

      <!-- Results -->
      <div id="life-insurance-results" class="bg-gray-50 rounded-lg p-6 hidden">
        <h3 class="text-xl font-bold text-gray-900 mb-4">
          {% include translate.html key='pages.calculators.life_insurance.results_title' %}
        </h3>
        <div id="life-insurance-output"></div>
      </div>
    </div>
  </div>
</div>

<!-- Income Protection Calculator -->
<div id="income-protection-calculator" class="calculator-section hidden">
  <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-3xl font-bold text-gray-900">
        {% include translate.html key='pages.calculators.income_protection.title' %}
      </h2>
      <button onclick="hideCalculator()" class="text-gray-500 hover:text-gray-700 text-2xl">
        <i class="fas fa-times"></i>
      </button>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Input Form -->
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.income_protection.monthly_income' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.income_protection.monthly_income_help' %}"></i>
          </label>
          <input type="number" id="monthly-income" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                 placeholder="6000">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.income_protection.essential_expenses' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.income_protection.essential_expenses_help' %}"></i>
          </label>
          <input type="number" id="essential-expenses" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                 placeholder="4000">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.income_protection.existing_benefits' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.income_protection.existing_benefits_help' %}"></i>
          </label>
          <input type="number" id="existing-benefits" 
                 class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                 placeholder="0">
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.income_protection.coverage_percentage' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.income_protection.coverage_percentage_help' %}"></i>
          </label>
          <select id="coverage-percentage" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="75">75%</option>
            <option value="80" selected>80%</option>
            <option value="85">85%</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            {% include translate.html key='pages.calculators.income_protection.waiting_period' %}
            <i class="fas fa-info-circle text-gray-400 ml-1 cursor-help" 
               title="{% include translate.html key='pages.calculators.income_protection.waiting_period_help' %}"></i>
          </label>
          <select id="waiting-period" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            <option value="30">30 {% if current_lang == "zh" %}天{% else %}days{% endif %}</option>
            <option value="60">60 {% if current_lang == "zh" %}天{% else %}days{% endif %}</option>
            <option value="90" selected>90 {% if current_lang == "zh" %}天{% else %}days{% endif %}</option>
            <option value="180">180 {% if current_lang == "zh" %}天{% else %}days{% endif %}</option>
          </select>
        </div>

        <button onclick="calculateIncomeProtection()" 
                class="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
          {% include translate.html key='pages.calculators.income_protection.calculate' %}
        </button>
      </div>

      <!-- Results -->
      <div id="income-protection-results" class="bg-gray-50 rounded-lg p-6 hidden">
        <h3 class="text-xl font-bold text-gray-900 mb-4">
          {% include translate.html key='pages.calculators.income_protection.results_title' %}
        </h3>
        <div id="income-protection-output"></div>
      </div>
    </div>
  </div>
</div>

<!-- Call to Action -->
<div class="text-center bg-primary-50 rounded-xl p-8">
  <h2 class="text-2xl font-bold text-gray-900 mb-4">
    {% if current_lang == "zh" %}需要专业建议？{% else %}Need Professional Advice?{% endif %}
  </h2>
  <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
    {% if current_lang == "zh" %}
      这些计算器提供了基本估算。为了获得最适合您情况的保险建议，请联系我们的专业顾问。
    {% else %}
      These calculators provide basic estimates. For insurance advice tailored to your specific situation, please contact our professional advisors.
    {% endif %}
  </p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="{{ lang_prefix }}/contact-us" class="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition duration-300">
      <i class="fas fa-phone mr-2"></i>
      {% if current_lang == "zh" %}联系顾问{% else %}Contact Advisor{% endif %}
    </a>
    <a href="{{ lang_prefix }}/services" class="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition duration-300">
      <i class="fas fa-info-circle mr-2"></i>
      {% if current_lang == "zh" %}了解服务{% else %}Learn More{% endif %}
    </a>
  </div>
</div>

<!-- Calculator JavaScript -->
<script src="{{ '/assets/js/calculators.js' | relative_url }}"></script>
