---
layout: faq
title_key: pages.faq.title
lang: en
permalink: /en/faq/
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}

{% if current_lang == "zh" %}
<p class="text-lg text-gray-600 mb-8">
  以下是我们客户最常问的保险问题。如果您没有找到您需要的答案，请随时联系我们的专业团队。
</p>
{% else %}
<p class="text-lg text-gray-600 mb-8">
  Here are the most frequently asked questions from our clients. If you can't find the answer you're looking for, please don't hesitate to contact our professional team.
</p>
{% endif %}

<div class="space-y-8">

<h2 class="text-2xl font-bold text-gray-900 mb-6 mt-8">
  {% if current_lang == "zh" %}人寿保险{% else %}Life Insurance{% endif %}
</h2>

<div class="bg-white rounded-lg shadow-md">
  <div class="divide-y divide-gray-200">
    
    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            我需要多少人寿保险？
          {% else %}
            How much life insurance do I need?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            一般建议是年收入的10-12倍，但更准确的方法是计算您的具体需求：房贷余额、子女教育费用、生活开支、债务等。例如，如果您的房贷还有$60万，子女教育需要$15万，10年生活费$70万，那么您可能需要$145万的保险。
          {% else %}
            The general rule is 10-12 times your annual income, but a more accurate approach is calculating your specific needs: mortgage balance, children's education costs, living expenses, debts, etc. For example, if you have a $600k mortgage, $150k for children's education, and $700k for 10 years of living expenses, you might need $1.45M in coverage.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            定期寿险和终身寿险有什么区别？
          {% else %}
            What's the difference between term and whole life insurance?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600 mb-4">
          {% if current_lang == "zh" %}
            <strong>定期寿险：</strong>保障特定期间（如10-30年），保费较低，适合年轻家庭和临时需求。
          {% else %}
            <strong>Term Life:</strong> Covers a specific period (10-30 years), lower premiums, suitable for young families and temporary needs.
          {% endif %}
        </p>
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            <strong>终身寿险：</strong>终身保障，保费较高但固定，有现金价值累积，适合遗产规划。
          {% else %}
            <strong>Whole Life:</strong> Lifetime coverage, higher but fixed premiums, builds cash value, suitable for estate planning.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            我已经有工作单位的团体保险，还需要个人保险吗？
          {% else %}
            I have group insurance through work, do I still need personal insurance?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            通常需要。团体保险的保额往往不足（通常只有1-2倍年薪），且在您离职时会失效。个人保险可以补充不足的保额，并且是可携带的，不受工作变动影响。
          {% else %}
            Usually yes. Group insurance coverage is often insufficient (typically only 1-2 times annual salary) and ends when you leave your job. Personal insurance can supplement the coverage gap and is portable, unaffected by job changes.
          {% endif %}
        </p>
      </div>
    </details>

  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mb-6 mt-8">
  {% if current_lang == "zh" %}健康保险{% else %}Health Insurance{% endif %}
</h2>

<div class="bg-white rounded-lg shadow-md">
  <div class="divide-y divide-gray-200">
    
    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            私人健康保险和ACC有什么区别？
          {% else %}
            What's the difference between private health insurance and ACC?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600 mb-4">
          {% if current_lang == "zh" %}
            <strong>ACC：</strong>只覆盖意外伤害，包括医疗费用和收入补偿（80%），但不覆盖疾病。
          {% else %}
            <strong>ACC:</strong> Only covers accidental injuries, including medical costs and income compensation (80%), but doesn't cover illness.
          {% endif %}
        </p>
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            <strong>私人健康保险：</strong>覆盖疾病和医疗条件，提供更快的治疗途径和更多选择，但不覆盖意外（由ACC处理）。
          {% else %}
            <strong>Private Health Insurance:</strong> Covers illness and medical conditions, provides faster treatment access and more choice, but doesn't cover accidents (handled by ACC).
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            等待期是什么意思？
          {% else %}
            What are waiting periods?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            等待期是保单生效后您必须等待的时间，之后才能申请某些疾病的理赔。一般等待期为6个月，特定疾病（如癌症）可能有12-24个月的等待期。意外伤害通常没有等待期。
          {% else %}
            Waiting periods are the time you must wait after your policy starts before you can claim for certain conditions. General waiting period is 6 months, specific conditions (like cancer) may have 12-24 month waiting periods. Accidents usually have no waiting period.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            既往症会被覆盖吗？
          {% else %}
            Are pre-existing conditions covered?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            既往症通常不被覆盖，或者有特殊的等待期和限制。在申请时诚实披露所有健康状况非常重要。有些保险公司可能会接受某些既往症，但会有额外的保费或排除条款。
          {% else %}
            Pre-existing conditions are usually not covered, or have special waiting periods and restrictions. It's crucial to honestly disclose all health conditions when applying. Some insurers may accept certain pre-existing conditions but with additional premiums or exclusions.
          {% endif %}
        </p>
      </div>
    </details>

  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mb-6 mt-8">
  {% if current_lang == "zh" %}收入保障保险{% else %}Income Protection Insurance{% endif %}
</h2>

<div class="bg-white rounded-lg shadow-md">
  <div class="divide-y divide-gray-200">
    
    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            收入保障保险是如何运作的？
          {% else %}
            How does income protection insurance work?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            如果您因疾病或受伤无法工作，收入保障保险会在等待期（通常30-365天）后支付您收入的一定比例（通常75%）。付款会持续到您能够重返工作、达到退休年龄或保单期限结束。
          {% else %}
            If you can't work due to illness or injury, income protection insurance pays a percentage of your income (usually 75%) after a waiting period (typically 30-365 days). Payments continue until you can return to work, reach retirement age, or the policy term ends.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            应该选择多长的等待期？
          {% else %}
            What waiting period should I choose?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            这取决于您的应急储蓄和病假福利。如果您有3个月的储蓄，可以选择90天等待期以降低保费。如果储蓄有限，建议选择30天等待期。记住等待期越短，保费越高。
          {% else %}
            This depends on your emergency savings and sick leave benefits. If you have 3 months of savings, you can choose a 90-day waiting period to reduce premiums. If savings are limited, consider a 30-day waiting period. Remember, shorter waiting periods mean higher premiums.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            "自己职业"和"任何职业"定义有什么区别？
          {% else %}
            What's the difference between "own occupation" and "any occupation" definitions?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600 mb-4">
          {% if current_lang == "zh" %}
            <strong>自己职业：</strong>如果您无法从事自己的具体工作就可以获得赔付，保障更全面但保费更高。
          {% else %}
            <strong>Own Occupation:</strong> Pays if you can't perform your specific job, more comprehensive but higher premiums.
          {% endif %}
        </p>
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            <strong>任何职业：</strong>只有当您无法从事任何适合您教育和经验的工作时才赔付，保费较低但限制更多。
          {% else %}
            <strong>Any Occupation:</strong> Only pays if you can't work in any job suited to your education and experience, lower premiums but more restrictive.
          {% endif %}
        </p>
      </div>
    </details>

  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mb-6 mt-8">
  {% if current_lang == "zh" %}理赔相关{% else %}Claims Related{% endif %}
</h2>

<div class="bg-white rounded-lg shadow-md">
  <div class="divide-y divide-gray-200">
    
    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            理赔需要多长时间？
          {% else %}
            How long do claims take to process?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            处理时间因保险类型和复杂程度而异：简单的健康保险理赔通常5-10个工作日，人寿保险理赔2-6周，复杂的收入保障理赔可能需要6-12周。及时提供完整文件可以加快处理速度。
          {% else %}
            Processing times vary by insurance type and complexity: Simple health insurance claims usually 5-10 business days, life insurance claims 2-6 weeks, complex income protection claims may take 6-12 weeks. Providing complete documentation promptly can speed up processing.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            理赔被拒绝了怎么办？
          {% else %}
            What if my claim is declined?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            首先要求保险公司提供书面解释。如果不满意，可以通过保险公司的内部投诉程序申诉。如果仍未解决，可以联系保险和金融服务申诉专员（IFSO），这是免费的独立争议解决服务。
          {% else %}
            First, request a written explanation from the insurer. If unsatisfied, you can appeal through the insurer's internal complaints process. If still unresolved, contact the Insurance and Financial Services Ombudsman (IFSO), which is a free independent dispute resolution service.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            理赔需要准备哪些文件？
          {% else %}
            What documents do I need for a claim?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            通常需要：理赔申请表、医疗证明、医生报告、收据和发票、身份证明、保单文件。对于收入保障理赔，还需要雇主证明和收入证明。建议保留所有相关文件的副本。
          {% else %}
            Typically needed: Claim forms, medical certificates, doctor's reports, receipts and invoices, proof of identity, policy documents. For income protection claims, also employer confirmation and proof of income. Keep copies of all relevant documents.
          {% endif %}
        </p>
      </div>
    </details>

  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mb-6 mt-8">
  {% if current_lang == "zh" %}保费和费用{% else %}Premiums and Costs{% endif %}
</h2>

<div class="bg-white rounded-lg shadow-md">
  <div class="divide-y divide-gray-200">
    
    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            保费会涨价吗？
          {% else %}
            Will my premiums increase?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            这取决于保费结构：阶梯式保费每年随年龄增长，平准式保费在保证期内固定。可审查保费可能根据理赔经验调整。选择保证不可审查的保费可以避免意外涨价。
          {% else %}
            This depends on the premium structure: Stepped premiums increase annually with age, level premiums are fixed during the guarantee period. Reviewable premiums may be adjusted based on claims experience. Choose guaranteed non-reviewable premiums to avoid unexpected increases.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            保险费可以税务抵扣吗？
          {% else %}
            Are insurance premiums tax deductible?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            个人保险费通常不能税务抵扣，但理赔金通常免税。企业主的某些保险费可能可以抵扣。建议咨询税务顾问了解您的具体情况。
          {% else %}
            Personal insurance premiums are usually not tax deductible, but claim payouts are typically tax-free. Some insurance premiums for business owners may be deductible. Consult a tax advisor for your specific situation.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            如何降低保险费用？
          {% else %}
            How can I reduce insurance costs?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            几种方法：提高免赔额、选择较长等待期、打包多种保险、保持健康生活方式获得折扣、选择阶梯式保费（年轻时较便宜）、货比三家找最优价格。
          {% else %}
            Several ways: Increase excess/deductibles, choose longer waiting periods, bundle multiple insurances, maintain healthy lifestyle for discounts, choose stepped premiums (cheaper when young), shop around for best prices.
          {% endif %}
        </p>
      </div>
    </details>

  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mb-6 mt-8">
  {% if current_lang == "zh" %}申请和承保{% else %}Application and Underwriting{% endif %}
</h2>

<div class="bg-white rounded-lg shadow-md">
  <div class="divide-y divide-gray-200">
    
    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            申请保险需要体检吗？
          {% else %}
            Do I need a medical exam to apply for insurance?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            这取决于您的年龄、健康状况和保额：50万以下通常只需健康问卷，50万-100万可能需要基本体检和血检，100万以上通常需要全面体检包括心电图。年龄越大要求越严格。
          {% else %}
            This depends on your age, health, and coverage amount: Under $500k usually only requires health questionnaire, $500k-$1M may need basic exam and blood tests, over $1M usually requires comprehensive exam including ECG. Requirements become stricter with age.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            申请被拒绝后还能申请其他保险公司吗？
          {% else %}
            Can I apply to other insurers if I'm declined?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            可以，但您必须在新申请中披露之前被拒绝的情况。不同保险公司有不同的承保标准，一家拒绝不意味着所有公司都会拒绝。建议咨询保险顾问寻找最适合的保险公司。
          {% else %}
            Yes, but you must disclose previous declines in new applications. Different insurers have different underwriting standards, so a decline from one doesn't mean all will decline. Consider consulting an insurance advisor to find the most suitable insurer.
          {% endif %}
        </p>
      </div>
    </details>

    <details class="group">
      <summary class="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition duration-200">
        <h3 class="text-lg font-semibold text-gray-900">
          {% if current_lang == "zh" %}
            什么时候是购买保险的最佳时机？
          {% else %}
            When is the best time to buy insurance?
          {% endif %}
        </h3>
        <i class="ph-plus text-gray-400 group-open:rotate-45 transition-transform duration-200"></i>
      </summary>
      <div class="px-6 pb-6">
        <p class="text-gray-600">
          {% if current_lang == "zh" %}
            越早越好！年轻时保费最便宜，健康状况通常最好，更容易获得承保。重要的人生节点如结婚、买房、生孩子时都应该重新评估保险需求。不要等到健康出现问题才考虑保险。
          {% else %}
            The sooner the better! Premiums are cheapest when young, health is usually best, and it's easier to get coverage. Important life events like marriage, buying a home, having children should trigger insurance needs reassessment. Don't wait until health issues arise to consider insurance.
          {% endif %}
        </p>
      </div>
    </details>

  </div>
</div>

</div>

---

<div class="bg-primary-50 rounded-lg p-6 mt-12">
  <div class="text-center">
    <h2 class="text-2xl font-bold text-primary-800 mb-4">
      {% if current_lang == "zh" %}
        还有其他问题？
      {% else %}
        Have More Questions?
      {% endif %}
    </h2>
    <p class="text-gray-700 mb-6">
      {% if current_lang == "zh" %}
        我们的专业团队随时为您提供个性化的保险建议和解答。
      {% else %}
        Our professional team is ready to provide personalized insurance advice and answers.
      {% endif %}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="tel:+64211280727" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300">
        <i class="ph-phone mr-2"></i>
        {% if current_lang == "zh" %}立即致电{% else %}Call Now{% endif %}
      </a>
      <a href="/contact-us" class="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition duration-300">
        <i class="ph-envelope mr-2"></i>
        {% if current_lang == "zh" %}联系我们{% else %}Contact Us{% endif %}
      </a>
    </div>
  </div>
</div>

<style>
/* Custom styles for FAQ accordion */
details summary::-webkit-details-marker {
  display: none;
}

details[open] summary .ph-plus {
  transform: rotate(45deg);
}

details summary {
  list-style: none;
}

details summary:focus {
  outline: 2px solid #e11d48;
  outline-offset: 2px;
}

details {
  transition: all 0.3s ease;
}

details[open] {
  background-color: #fafafa;
}
</style>
