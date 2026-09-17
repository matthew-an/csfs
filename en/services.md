---
layout: page
plain: true
wide: true
title_key: pages.services.title
heading: Our services
intro: Cornerstone Insurance specialises in personal insurance and holds agency agreements with five insurers — Partners Life, Chubb Life, AIA, Asteron Life and nib — so wordings and premiums can be compared side by side for the same requirement.
description_key: pages.services.description
lang: en
permalink: /en/services/
---

{% include services-schema.html %}
{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}
{% if current_lang == "en" %}{% assign lp = "/en" %}{% else %}{% assign lp = "" %}{% endif %}

<div class="pg-rows">

  <div class="pg-row" id="life">
    <figure class="pg-row__media">
      <img src="{{ '/assets/img/family/beach-family.jpg' | relative_url }}" alt="{% if current_lang == 'en' %}A family of five walking hand in hand along a lakeside beach{% else %}一家五口牵着手走在湖滩上{% endif %}" width="1600" height="1067" loading="lazy" decoding="async">
    </figure>
    <div>
      <h2>{% if current_lang == "en" %}Life cover{% else %}人寿保险{% endif %}</h2>
      {% if current_lang == "en" %}
      <p>Pays a lump sum to the beneficiaries you nominate on death, or on diagnosis of a terminal illness. The sum insured is usually calculated as the mortgage balance, plus the household’s living and education costs until the children are financially independent, less the assets you could already draw on. Cover between $50,000 and $2 million is the common range.</p>
      <p>Alongside the sum, the term and the premium structure have to be settled. Stepped premiums rise with age — cheaper at the start, expensive to hold for decades. Level premiums stay fixed for an agreed period — higher initially, better suited to long-term cover. The cheapest policy at 35 is frequently the most expensive one at 55, so the structure is planned against how long the cover is actually needed.</p>
{% else %}
      <p>被保险人身故或确诊末期疾病时，向指定受益人一次性给付保险金。保额通常按「清偿房贷余额 + 家庭至子女经济独立期间的生活与教育支出 − 现有可动用资产」测算，市场上常见的保额区间为 5 万至 200 万纽币。</p>
      <p>除保额外，保障期限与保费结构需一并确定。阶梯费率（stepped）随年龄逐年递增，前期便宜但长期持有成本高；均衡费率（level）在约定期间内保持不变，起步较高而适合长期持有。35 岁投保时最便宜的方案，到 55 岁往往是最贵的一种，因此保费结构应与预计的保障年限一起规划。</p>
{% endif %}
    </div>
  </div>

  <div class="pg-row pg-row--flip" id="health">
    <figure class="pg-row__media">
      <img src="{{ '/assets/img/family/playground-swing.jpg' | relative_url }}" alt="{% if current_lang == 'en' %}Two children on a tyre swing at a playground{% else %}两个孩子在游乐场荡轮胎秋千{% endif %}" width="1600" height="1067" loading="lazy" decoding="async">
    </figure>
    <div>
      <h2>{% if current_lang == "en" %}Health cover{% else %}医疗保险{% endif %}</h2>
      {% if current_lang == "en" %}
      <p>Covers private surgery, hospital admission, specialist consultations and major diagnostic imaging such as MRI and CT, with your own choice of surgeon and hospital and no public waiting list. Most households insure as a family; adding dependent children is comparatively inexpensive.</p>
      <p>The material differences between insurers sit in four places: the annual limit and conditions on non-Pharmac drugs, what triggers overseas treatment and the cap that applies, whether specialist consultations and diagnostics are base cover or a paid add-on, and how the excess and any co-payment are calculated. We re-check the current wordings each year; the latest comparison is on the <a href="{{ lp }}/blog/">blog</a>.</p>
{% else %}
      <p>承保私立医疗体系的手术费、住院费、专科门诊及 MRI、CT 等大型影像检查，可自主指定主诊医生与医院，无需等待公立系统排期。多数家庭以家庭为单位投保，未成年子女的附加保费相对较低。</p>
      <p>各公司条款的实质差异集中在四处：非政府补助药物（non-Pharmac）的年度额度与适用条件、海外治疗的触发条件与给付上限、专科门诊与检查属于基础保障还是需付费附加、以及垫底费（excess）与自付比例的计算规则。我们每年重新比对一次现行条款，最新版本见<a href="{{ lp }}/blog/">博客</a>。</p>
{% endif %}
    </div>
  </div>

  <div class="pg-row" id="trauma">
    <figure class="pg-row__media">
      <img src="{{ '/assets/img/family/meadow-child.jpg' | relative_url }}" alt="{% if current_lang == 'en' %}A girl running through a meadow of wildflowers{% else %}女孩跑过开满野花的草地{% endif %}" width="1600" height="1067" loading="lazy" decoding="async">
    </figure>
    <div>
      <h2>{% if current_lang == "en" %}Trauma cover{% else %}重大疾病保险{% endif %}</h2>
      {% if current_lang == "en" %}
      <p>Pays a lump sum on diagnosis of a condition listed in the policy, with no restriction on how the money is used — treatment the health policy excludes, the income gap while you are off work, or fixed costs during recovery. Wordings typically list forty or more conditions, though cancer, heart attack and stroke account for most claims.</p>
      <p>What decides a claim is the definition, not the length of the list. Insurers differ materially on early-stage diagnoses — carcinoma in situ, low-grade prostate cancer — and on partial payment percentages, and this is where claims are most often disputed, so the definitions themselves are compared clause by clause.</p>
{% else %}
      <p>确诊保单列明的疾病时一次性给付，赔付金用途不受限制，可用于医疗险不承保的治疗项目、停工期间的收入缺口或康复期的固定支出。条款通常列明四十余项疾病，但理赔集中于癌症、心脏病与脑中风三类。</p>
      <p>决定能否获赔的是疾病定义，而非清单长度。各公司在早期病变（如原位癌、低分级前列腺癌）的认定标准与部分给付（partial payment）比例上差异显著，这也是理赔争议的主要来源，因此比较时需逐条核对定义原文。</p>
{% endif %}
    </div>
  </div>

  <div class="pg-row pg-row--flip" id="income">
    <figure class="pg-row__media">
      <img src="{{ '/assets/img/family/park-stroller.jpg' | relative_url }}" alt="{% if current_lang == 'en' %}A parent with a pram and two children running across a park lawn in autumn{% else %}家长推着婴儿车、两个孩子在秋天的公园草坪上跑{% endif %}" width="1600" height="1143" loading="lazy" decoding="async">
    </figure>
    <div>
      <h2>{% if current_lang == "en" %}Income protection{% else %}收入保障{% endif %}</h2>
      {% if current_lang == "en" %}
      <p>Pays a monthly benefit while illness or injury prevents you working in your own occupation, generally capped at 75% of pre-tax income. Wait periods run from four weeks to two years, and benefit periods from two years to five years or to age 65. Accidents are covered by ACC; this policy carries the illness and disablement exposure that falls outside it.</p>
      <p>The wait period is the main lever on premium — the longer it is, the cheaper the cover — and how long you can carry depends on emergency savings, sick leave and other household income. Self-employed clients and company shareholders also choose between agreed value and indemnity cover, which determines how income must be evidenced at claim time.</p>
{% else %}
      <p>因疾病或意外无法从事本职工作期间，按月给付收入补偿，上限一般为税前收入的 75%。等待期可选 4 周至 2 年，给付年限可选 2 年、5 年或至 65 岁。意外伤害由 ACC 承保，本险种承担的是 ACC 责任范围之外的疾病与伤残情形。</p>
      <p>等待期是影响保费的主要变量——等待期越长保费越低，可承受的长度取决于应急储备、带薪病假与家庭其他收入。自雇人士及公司股东还需在约定保额（agreed value）与实报实销（indemnity）之间选择，该选择决定理赔时收入证明的口径与举证难度。</p>
{% endif %}
    </div>
  </div>

  <div class="pg-row" id="tpd">
    <figure class="pg-row__media">
      <img src="{{ '/assets/img/family/grass-child.jpg' | relative_url }}" alt="{% if current_lang == 'en' %}A small child in a sun hat walking through long grass{% else %}戴帽子的小孩走在阳光下的草地里{% endif %}" width="1600" height="825" loading="lazy" decoding="async">
    </figure>
    <div>
      <h2>{% if current_lang == "en" %}Total and permanent disablement (TPD){% else %}全残保障（TPD）{% endif %}</h2>
      {% if current_lang == "en" %}
      <p>Pays a lump sum where illness or injury permanently removes the ability to work. It complements income protection rather than replacing it: the monthly benefit covers day-to-day cash flow, while the lump sum meets the large one-off costs a monthly payment never catches up with — home modification, a suitable vehicle, long-term care.</p>
      <p>The definition of “unable to work” sets the claim threshold. Own occupation pays where you cannot perform the job you held when cover was placed; any occupation requires that you cannot perform any work you are reasonably suited to. The premium difference is significant, and we state which definition a recommendation uses and what an upgrade costs.</p>
{% else %}
      <p>因疾病或意外导致永久丧失工作能力时一次性给付。它与收入保障互补而非替代：后者以按月给付覆盖日常现金流，前者用于住宅无障碍改造、交通工具更换、长期照护等按月给付难以覆盖的一次性大额支出。</p>
      <p>「无法工作」的定义决定理赔门槛。本职业（own occupation）以无法从事投保时所从事的职业为标准；任何职业（any occupation）则需达到无法从事任何合理胜任的工作。两者保费差异明显，我们会明确说明方案采用的是哪一种，以及升级所需的成本。</p>
{% endif %}
    </div>
  </div>

  <div class="pg-row pg-row--flip" id="mortgage">
    <figure class="pg-row__media">
      <img src="{{ '/assets/img/family/home-backyard.jpg' | relative_url }}" alt="{% if current_lang == 'en' %}A weatherboard house with a play set in the back yard{% else %}带后院游乐架的独立屋{% endif %}" width="1600" height="1071" loading="lazy" decoding="async">
    </figure>
    <div>
      <h2>{% if current_lang == "en" %}Mortgage protection{% else %}房贷保护{% endif %}</h2>
      {% if current_lang == "en" %}
      <p>Sum insured and term track the mortgage balance: a monthly benefit covers the repayments while you cannot work, or a lump sum clears the balance on death or total disablement. Because the benefit is measured against the loan rather than personal income, underwriting and financial evidence requirements are usually lighter than for income protection, and the monthly benefit can be received alongside ACC.</p>
      <p>Whether it is needed on top of life cover and income protection depends on how those two are sized. In some cases a larger life sum insured covers the same exposure at a lower total premium; both structures are costed and compared before a recommendation is made.</p>
{% else %}
      <p>保额与保障期限同房贷余额挂钩：无法工作期间按月给付以覆盖还款，或于身故、全残时一次性清偿贷款余额。由于给付基准为贷款金额而非个人收入，核保与财务证明要求通常低于收入保障，按月给付部分亦可与 ACC 赔偿并行领取。</p>
      <p>是否需要在人寿保险与收入保障之外单独配置，取决于前两者的保额设定。部分情形下提高人寿保额即可覆盖同一风险且总保费更低；我们会将两种结构分别测算后再作比较。</p>
{% endif %}
    </div>
  </div>

</div>

<section class="pg-section">
  <h2 class="pg-h2">{% if current_lang == "en" %}Side by side{% else %}六类保障一览{% endif %}</h2>
  <div class="pg-table-wrap">
    <table class="pg-table">
      <thead>
        <tr>
          <th>{% if current_lang == "en" %}Cover{% else %}保障{% endif %}</th>
          <th>{% if current_lang == "en" %}Pays when{% else %}什么时候赔{% endif %}</th>
          <th>{% if current_lang == "en" %}How it pays{% else %}怎么赔{% endif %}</th>
          <th>{% if current_lang == "en" %}What it's for{% else %}用来解决什么{% endif %}</th>
        </tr>
      </thead>
      <tbody>
        {% if current_lang == "en" %}
        <tr><td>Life</td><td>Death, or terminal illness</td><td>Lump sum</td><td>Mortgage and the family's living costs</td></tr>
        <tr><td>Health</td><td>Private treatment is needed</td><td>Reimburses the bills</td><td>Skipping the public waiting list</td></tr>
        <tr><td>Trauma</td><td>Diagnosis of a listed condition</td><td>Lump sum</td><td>Treatment and time off, your choice</td></tr>
        <tr><td>Income protection</td><td>Illness or injury stops you working</td><td>Monthly, after a wait period</td><td>Replacing the pay cheque</td></tr>
        <tr><td>TPD</td><td>Permanently unable to work</td><td>Lump sum</td><td>One-off costs of a changed life</td></tr>
        <tr><td>Mortgage protection</td><td>Can't work, or death / disablement</td><td>Monthly repayments or lump sum</td><td>Keeping the house</td></tr>
        {% else %}
        <tr><td>人寿</td><td>身故或确诊晚期绝症</td><td>一次性</td><td>房贷和家里往后的生活费</td></tr>
        <tr><td>医疗</td><td>需要私立治疗</td><td>报销账单</td><td>不排公立的队</td></tr>
        <tr><td>重疾</td><td>确诊条款列明的疾病</td><td>一次性</td><td>治疗和停工期间，用途自定</td></tr>
        <tr><td>收入保障</td><td>因病或受伤停工</td><td>等待期后按月</td><td>替代工资</td></tr>
        <tr><td>全残（TPD）</td><td>永久丧失工作能力</td><td>一次性</td><td>生活改变带来的一次性开销</td></tr>
        <tr><td>房贷保护</td><td>停工，或身故 / 全残</td><td>按月还贷或一次性</td><td>把房子保住</td></tr>
        {% endif %}
      </tbody>
    </table>
  </div>
</section>

<section class="pg-section">
  <h2 class="pg-h2">{% if current_lang == "en" %}So how should insurance be bought?{% else %}保险到底怎么买？{% endif %}</h2>
  {% if current_lang == "en" %}
  <p class="pg-p">Buying insurance is not picking a product; it starts with your own situation. The same health policy suits a child, a young single earner, a household with both parents and grandparents to support, and a smoker in completely different structures and sums insured — and the wording that is best value for one of them can be the worst for another. So we take the wordings, the scope of cover and the premiums apart item by item, then build a plan around your household and your budget, rather than putting everyone into whichever product is easiest to sell.</p>
  <p class="pg-p">The other half of the answer comes after the policy is in force. A claim is where an adviser is really tested: what evidence to assemble, which clause to argue when a claim is declined, and who talks to the clinic and the insurer when English is not your first language. We do that work for our clients, at no extra cost. Which makes the short answer this — buy through someone who will still be arguing your case on the day it matters. <a class="hp-link" href="/en/contact-us/">Get in touch</a>, or read the <a class="hp-link" href="/en/faq/">questions clients ask most</a> first.</p>
  {% else %}
  <p class="pg-p">买保险不是挑一个产品，而是先弄清楚自己的情况。同样一份医疗险，孩子、单身的年轻人、上有老下有小的家庭、吸烟人群，适合的结构和保额完全不同；同一份条款放在不同的人身上，性价比甚至会反过来。所以我们的做法是把各家的条款、保障范围和保费逐项拆开对比，再按你的家庭结构和预算配出方案，而不是把最好卖的那一份推给所有人。</p>
  <p class="pg-p">另一半答案在保单生效之后。理赔最能看出一个顾问的专业度：材料怎么准备、被拒赔时按哪一条申诉、英文不方便的时候由谁去跟诊所和保险公司沟通。这些事我们替客户做，而且不额外收费。所以「保险到底怎么买」，说到底是——找一个在出事那天仍然愿意替你争取的人。<a class="hp-link" href="/contact-us/">联系我们</a>，或者先看看<a class="hp-link" href="/faq/">客户最常问的问题</a>。</p>
  {% endif %}
</section>
