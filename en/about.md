---
layout: page
title_key: pages.about.title
heading: About Cornerstone Insurance
description_key: pages.about.description
lang: en
permalink: /en/about/
---

{% assign current_lang = page.lang | default: site.default_lang | default: "zh" %}
{% if current_lang == "en" %}{% assign lp = "/en" %}{% else %}{% assign lp = "" %}{% endif %}

{% if current_lang == "en" %}
Cornerstone Insurance Limited is a licensed financial advice provider in Auckland (FSPR 1004360), operating under the licence held by NZ Financial Services Group Limited (FSP286965). We arrange personal insurance — life, health, trauma, income protection, total and permanent disablement and mortgage protection — for families across New Zealand, in English and Mandarin.

We are appointed with five insurers: Partners Life, Chubb Life, AIA, Asteron Life and nib. That lets us put their wordings and premiums side by side for each client rather than fit everyone to one company's products. Our advisers are paid commission by the insurer that issues the policy; clients are not charged a separate fee for advice, applications, annual reviews or claims.

## What we do for a client

The work starts before any product comes up, with a needs analysis: understanding the household as it stands and the obligations it carries, establishing how far any existing cover reaches and where it falls short, and from that determining which types of cover are required and what each sum insured should be.

Then we compare. There is no insurer that is simply the best; each has its strengths, and the comparison is won or lost on a handful of clauses rather than on the length of the brochure. On health cover, for example, what actually separates the products is the annual limit on non-Pharmac drugs and whether that limit is restricted to cancer; whether you may elect overseas treatment; when the excess is triggered and how much it is; whether you can use any private specialist and hospital or only an approved list; and which procedures carry a stand-down. Surgical limits, maternity benefits and loyalty bonuses differ too, but rarely in ways that decide anything.

Most claims are paid without difficulty — insurers here do not make their money by refusing them. The ones that are declined almost always come back to the health disclosure made at application. People assume that a condition never treated in New Zealand need not be mentioned, but a GP records what you tell them in your medical notes, and the insurer can request those notes at claim time. Wording a disclosure so that it is both accurate and does not invite an exclusion it need not carry takes judgement, so we work through the questionnaire with the client rather than handing it over to fill in alone.

Once the policy is in force we review it every year — incomes change, mortgages get paid off, families grow. At claim time we prepare the evidence, lodge it and follow it through; if a claim is declined, we argue it against the wording and the clinical notes. Nobody who is unwell has the energy to negotiate with a claims assessor, and few people have the technical footing to do it well. None of this is charged to the client; our income is the commission paid by the insurer.

## Who we are

Licensed insurance advisers in New Zealand, NZBN 9429049123425 · FSP1004360. The current team is on the <a href="{{ lp }}/team/">team page</a>, and the full statutory disclosure (fees, commissions, complaints process, our duties under the Financial Markets Conduct Act) is on the <a href="{{ lp }}/disclosure/">disclosure page</a>.

## Where we are

Based in Auckland, New Zealand, serving clients throughout the country by phone, video and e-signature. <a href="{{ lp }}/contact-us/">Contact details are here.</a>
{% else %}
Cornerstone Insurance Limited 是奥克兰的持牌金融建议机构（FSPR 编号 1004360），在 NZ Financial Services Group Limited 的牌照（FSP286965）下提供金融建议。我们为全新西兰的家庭配置人身保险——人寿、医疗、重疾、收入保障、全残和房贷保护——中英文双语服务。

我们代理五家保险公司：Partners Life、Chubb Life、AIA、Asteron Life 和 nib。这样每个客户的方案都可以把五家的条款和保费横着比，而不是把所有人都套进一家的产品里。顾问的报酬来自出单那家保险公司的佣金；建议、投保、每年 review 和理赔，客户都不另外付费。

## 我们替客户做什么

工作从谈产品之前就开始，第一步是需求分析：梳理家庭的现状与责任，评估现有保障能覆盖到哪里、缺口在哪里，再据此判断需要哪几类险种、保额各自应该定在什么水平。

然后才是比较。没有哪一家是绝对的最好，各有各的优缺点，差距也不在宣传册上列了多少项，而在几条具体的条款上。以医疗险为例，真正拉开差别的是：非政府补助药的年度额度，以及这笔额度是否只限癌症；允不允许自愿选择海外治疗；垫底费在什么情况下触发、具体多少；是不是所有私立专科和医院都能去，还是必须在指定范围内；哪些项目另有等待期。至于手术住院的年度上限、孕产津贴、忠诚福利，各家也有出入，但通常决定不了什么。

绝大多数理赔是顺利赔付的——保险公司并不靠该赔不赔来盈利。少数被拒的，几乎都能追溯到投保时的健康告知。不少人以为「这个病我在新西兰没看过」就不必写，但家医会把你说过的话记进 medical notes，理赔时保险公司有权调阅。如何告知才能既如实、又不至于换来一条本不必要的除外，需要经验和判断，所以健康问卷我们会陪客户一条一条过，而不是丢给你自己填。

保单生效之后每年重新检视一次——收入变了、房贷还完了、家里添了人，保额和结构都该跟着调整。真的出险时，材料由我们准备、递交并跟进；万一被拒赔，我们依据条款原文和病历记录替你申诉。人在生病的时候没有精力反复跟核赔部门交涉，专业上通常也不占优势。以上都不向客户收费，我们的报酬来自保险公司支付的佣金。

## 我们是谁

新西兰持牌保险顾问，NZBN 9429049123425 · FSP1004360。现在的团队见<a href="{{ lp }}/team/">团队页</a>；法定披露的全文（费用、佣金、投诉流程、我们在《金融市场行为法》下的义务）见<a href="{{ lp }}/disclosure/">披露声明</a>。

## 我们在哪

立足于新西兰奥克兰，服务全新西兰的客户，靠电话、视频和电子签名完成全部流程。<a href="{{ lp }}/contact-us/">联系方式在这里。</a>
{% endif %}
