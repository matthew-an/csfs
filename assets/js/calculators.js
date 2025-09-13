class InsuranceCalculators {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.init();
  }

  detectLanguage() {
    const path = window.location.pathname;
    return path.startsWith('/en/') ? 'en' : 'zh';
  }

  init() {
    // Add real-time calculation listeners
    this.addInputListeners();
  }

  addInputListeners() {
    // Life Insurance inputs
    const lifeInputs = ['annual-income', 'mortgage-debt', 'other-debts', 'dependents', 'years-support', 'final-expenses', 'existing-coverage'];
    lifeInputs.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('input', () => {
          if (this.hasLifeInsuranceValues()) {
            this.calculateLifeInsurance();
          }
        });
      }
    });

    // Income Protection inputs
    const incomeInputs = ['monthly-income', 'essential-expenses', 'existing-benefits', 'coverage-percentage', 'waiting-period'];
    incomeInputs.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('input', () => {
          if (this.hasIncomeProtectionValues()) {
            this.calculateIncomeProtection();
          }
        });
        element.addEventListener('change', () => {
          if (this.hasIncomeProtectionValues()) {
            this.calculateIncomeProtection();
          }
        });
      }
    });
  }

  hasLifeInsuranceValues() {
    const annualIncome = parseFloat(document.getElementById('annual-income')?.value) || 0;
    return annualIncome > 0;
  }

  hasIncomeProtectionValues() {
    const monthlyIncome = parseFloat(document.getElementById('monthly-income')?.value) || 0;
    return monthlyIncome > 0;
  }

  formatCurrency(amount) {
    return new Intl.NumberFormat('en-NZ', {
      style: 'currency',
      currency: 'NZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  calculateLifeInsurance() {
    // Get input values
    const annualIncome = parseFloat(document.getElementById('annual-income')?.value) || 0;
    const mortgageDebt = parseFloat(document.getElementById('mortgage-debt')?.value) || 0;
    const otherDebts = parseFloat(document.getElementById('other-debts')?.value) || 0;
    const dependents = parseInt(document.getElementById('dependents')?.value) || 0;
    const yearsSupport = parseInt(document.getElementById('years-support')?.value) || 10;
    const finalExpenses = parseFloat(document.getElementById('final-expenses')?.value) || 15000;
    const existingCoverage = parseFloat(document.getElementById('existing-coverage')?.value) || 0;

    // Validation
    if (annualIncome <= 0) {
      this.showLifeInsuranceError(this.currentLang === 'zh' ? '请输入有效的年收入' : 'Please enter a valid annual income');
      return;
    }

    // Calculate components
    const incomeReplacement = annualIncome * yearsSupport;
    const debtCoverage = mortgageDebt + otherDebts;
    const totalNeed = incomeReplacement + debtCoverage + finalExpenses;
    const recommendedCoverage = Math.max(0, totalNeed - existingCoverage);

    // Display results
    this.displayLifeInsuranceResults({
      incomeReplacement,
      debtCoverage,
      finalExpenses,
      totalNeed,
      existingCoverage,
      recommendedCoverage
    });
  }

  displayLifeInsuranceResults(results) {
    const resultsDiv = document.getElementById('life-insurance-results');
    const outputDiv = document.getElementById('life-insurance-output');
    
    if (!resultsDiv || !outputDiv) return;

    const labels = this.currentLang === 'zh' ? {
      recommendedCoverage: '推荐保险金额',
      breakdown: '计算明细',
      incomeReplacement: '收入替代',
      debtCoverage: '债务覆盖',
      finalCosts: '最终费用',
      existingDeduction: '减去现有保险',
      totalNeed: '总保险需求',
      getQuote: '获取专业报价',
      disclaimer: '此计算器仅供参考。实际保险需求可能因个人情况而异。建议咨询专业保险顾问获取个性化建议。'
    } : {
      recommendedCoverage: 'Recommended Coverage Amount',
      breakdown: 'Calculation Breakdown',
      incomeReplacement: 'Income Replacement',
      debtCoverage: 'Debt Coverage',
      finalCosts: 'Final Expenses',
      existingDeduction: 'Less Existing Coverage',
      totalNeed: 'Total Insurance Need',
      getQuote: 'Get Professional Quote',
      disclaimer: 'This calculator is for reference only. Actual insurance needs may vary based on individual circumstances. We recommend consulting with a professional insurance advisor for personalized advice.'
    };

    outputDiv.innerHTML = `
      <div class="mb-6">
        <div class="bg-blue-600 text-white p-4 rounded-lg text-center">
          <div class="text-2xl font-bold">${this.formatCurrency(results.recommendedCoverage)}</div>
          <div class="text-sm opacity-90">${labels.recommendedCoverage}</div>
        </div>
      </div>

      <div class="space-y-4 mb-6">
        <h4 class="font-semibold text-gray-900">${labels.breakdown}</h4>
        
        <div class="space-y-2 text-sm">
          <div class="flex justify-between py-2 border-b border-gray-200">
            <span>${labels.incomeReplacement}</span>
            <span class="font-medium">${this.formatCurrency(results.incomeReplacement)}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-gray-200">
            <span>${labels.debtCoverage}</span>
            <span class="font-medium">${this.formatCurrency(results.debtCoverage)}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-gray-200">
            <span>${labels.finalCosts}</span>
            <span class="font-medium">${this.formatCurrency(results.finalExpenses)}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-gray-200 font-semibold">
            <span>${labels.totalNeed}</span>
            <span>${this.formatCurrency(results.totalNeed)}</span>
          </div>
          ${results.existingCoverage > 0 ? `
          <div class="flex justify-between py-2 border-b border-gray-200 text-red-600">
            <span>${labels.existingDeduction}</span>
            <span>-${this.formatCurrency(results.existingCoverage)}</span>
          </div>
          ` : ''}
        </div>
      </div>

      <div class="mb-4">
        <a href="${this.currentLang === 'zh' ? '/contact-us' : '/en/contact-us'}" 
           class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-block text-center">
          <i class="fas fa-phone mr-2"></i>
          ${labels.getQuote}
        </a>
      </div>

      <div class="text-xs text-gray-500 leading-relaxed">
        ${labels.disclaimer}
      </div>
    `;

    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  calculateIncomeProtection() {
    // Get input values
    const monthlyIncome = parseFloat(document.getElementById('monthly-income')?.value) || 0;
    const essentialExpenses = parseFloat(document.getElementById('essential-expenses')?.value) || 0;
    const existingBenefits = parseFloat(document.getElementById('existing-benefits')?.value) || 0;
    const coveragePercentage = parseFloat(document.getElementById('coverage-percentage')?.value) || 80;
    const waitingPeriod = parseInt(document.getElementById('waiting-period')?.value) || 90;

    // Validation
    if (monthlyIncome <= 0) {
      this.showIncomeProtectionError(this.currentLang === 'zh' ? '请输入有效的月收入' : 'Please enter a valid monthly income');
      return;
    }

    // Calculate components
    const desiredBenefit = (monthlyIncome * coveragePercentage) / 100;
    const coverageGap = Math.max(0, desiredBenefit - existingBenefits);
    const recommendedBenefit = Math.min(desiredBenefit, Math.max(essentialExpenses, coverageGap));
    
    // Estimate premium (rough calculation based on age and waiting period)
    const premiumRate = this.calculatePremiumRate(waitingPeriod);
    const estimatedPremium = recommendedBenefit * premiumRate;

    // Scenario calculations
    const sixMonthIncomeWithoutInsurance = 0; // No income
    const sixMonthIncomeWithInsurance = recommendedBenefit * 6;
    const sixMonthIncomeLoss = monthlyIncome * 6;

    // Display results
    this.displayIncomeProtectionResults({
      monthlyIncome,
      desiredBenefit,
      recommendedBenefit,
      coverageGap,
      estimatedPremium,
      sixMonthIncomeWithoutInsurance,
      sixMonthIncomeWithInsurance,
      sixMonthIncomeLoss
    });
  }

  calculatePremiumRate(waitingPeriod) {
    // Simplified premium calculation (actual rates vary by age, health, occupation)
    const baseRate = 0.02; // 2% of benefit amount
    const waitingPeriodMultiplier = {
      30: 1.5,
      60: 1.2,
      90: 1.0,
      180: 0.8
    };
    return baseRate * (waitingPeriodMultiplier[waitingPeriod] || 1.0);
  }

  displayIncomeProtectionResults(results) {
    const resultsDiv = document.getElementById('income-protection-results');
    const outputDiv = document.getElementById('income-protection-output');
    
    if (!resultsDiv || !outputDiv) return;

    const labels = this.currentLang === 'zh' ? {
      recommendedBenefit: '推荐月度赔付',
      coverageGap: '保障缺口',
      monthlyPremiumEstimate: '预估月保费',
      scenariosTitle: '不同情况对比',
      withInsurance: '有收入保障保险',
      withoutInsurance: '无收入保障保险',
      illnessScenario: '疾病无法工作6个月的情况',
      incomeLoss: '收入损失',
      insuranceBenefit: '保险赔付',
      netImpact: '净影响',
      getQuote: '获取专业报价',
      disclaimer: '此计算器仅供参考。实际保费和赔付金额可能因个人健康状况、职业风险等因素而异。'
    } : {
      recommendedBenefit: 'Recommended Monthly Benefit',
      coverageGap: 'Coverage Gap',
      monthlyPremiumEstimate: 'Estimated Monthly Premium',
      scenariosTitle: 'Scenario Comparison',
      withInsurance: 'With Income Protection',
      withoutInsurance: 'Without Income Protection',
      illnessScenario: 'Unable to work for 6 months due to illness',
      incomeLoss: 'Income Loss',
      insuranceBenefit: 'Insurance Benefit',
      netImpact: 'Net Impact',
      getQuote: 'Get Professional Quote',
      disclaimer: 'This calculator is for reference only. Actual premiums and benefits may vary based on individual health, occupation risk, and other factors.'
    };

    outputDiv.innerHTML = `
      <div class="space-y-4 mb-6">
        <div class="bg-purple-600 text-white p-4 rounded-lg text-center">
          <div class="text-2xl font-bold">${this.formatCurrency(results.recommendedBenefit)}</div>
          <div class="text-sm opacity-90">${labels.recommendedBenefit}</div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gray-100 p-3 rounded-lg text-center">
            <div class="text-lg font-semibold text-gray-900">${this.formatCurrency(results.coverageGap)}</div>
            <div class="text-xs text-gray-600">${labels.coverageGap}</div>
          </div>
          <div class="bg-gray-100 p-3 rounded-lg text-center">
            <div class="text-lg font-semibold text-gray-900">${this.formatCurrency(results.estimatedPremium)}</div>
            <div class="text-xs text-gray-600">${labels.monthlyPremiumEstimate}</div>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="font-semibold text-gray-900 mb-3">${labels.scenariosTitle}</h4>
        <div class="text-sm text-gray-600 mb-3">${labels.illnessScenario}</div>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
            <h5 class="font-semibold text-red-800 mb-2">${labels.withoutInsurance}</h5>
            <div class="space-y-1 text-sm">
              <div class="flex justify-between">
                <span>${labels.incomeLoss}</span>
                <span class="text-red-600 font-medium">-${this.formatCurrency(results.sixMonthIncomeLoss)}</span>
              </div>
              <div class="flex justify-between">
                <span>${labels.insuranceBenefit}</span>
                <span>${this.formatCurrency(0)}</span>
              </div>
              <div class="flex justify-between font-semibold border-t pt-1">
                <span>${labels.netImpact}</span>
                <span class="text-red-600">-${this.formatCurrency(results.sixMonthIncomeLoss)}</span>
              </div>
            </div>
          </div>

          <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h5 class="font-semibold text-green-800 mb-2">${labels.withInsurance}</h5>
            <div class="space-y-1 text-sm">
              <div class="flex justify-between">
                <span>${labels.incomeLoss}</span>
                <span class="text-red-600 font-medium">-${this.formatCurrency(results.sixMonthIncomeLoss)}</span>
              </div>
              <div class="flex justify-between">
                <span>${labels.insuranceBenefit}</span>
                <span class="text-green-600 font-medium">+${this.formatCurrency(results.sixMonthIncomeWithInsurance)}</span>
              </div>
              <div class="flex justify-between font-semibold border-t pt-1">
                <span>${labels.netImpact}</span>
                <span class="text-green-600">-${this.formatCurrency(results.sixMonthIncomeLoss - results.sixMonthIncomeWithInsurance)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <a href="${this.currentLang === 'zh' ? '/contact-us' : '/en/contact-us'}" 
           class="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300 inline-block text-center">
          <i class="fas fa-phone mr-2"></i>
          ${labels.getQuote}
        </a>
      </div>

      <div class="text-xs text-gray-500 leading-relaxed">
        ${labels.disclaimer}
      </div>
    `;

    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  showLifeInsuranceError(message) {
    const resultsDiv = document.getElementById('life-insurance-results');
    const outputDiv = document.getElementById('life-insurance-output');
    
    if (!resultsDiv || !outputDiv) return;

    outputDiv.innerHTML = `
      <div class="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
        <i class="fas fa-exclamation-triangle text-red-500 text-2xl mb-2"></i>
        <p class="text-red-700">${message}</p>
      </div>
    `;

    resultsDiv.classList.remove('hidden');
  }

  showIncomeProtectionError(message) {
    const resultsDiv = document.getElementById('income-protection-results');
    const outputDiv = document.getElementById('income-protection-output');
    
    if (!resultsDiv || !outputDiv) return;

    outputDiv.innerHTML = `
      <div class="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
        <i class="fas fa-exclamation-triangle text-red-500 text-2xl mb-2"></i>
        <p class="text-red-700">${message}</p>
      </div>
    `;

    resultsDiv.classList.remove('hidden');
  }
}

// Global functions for calculator navigation
function showCalculator(type) {
  // Hide all calculators
  document.querySelectorAll('.calculator-section').forEach(section => {
    section.classList.add('hidden');
  });

  // Show selected calculator
  const calculator = document.getElementById(`${type}-calculator`);
  if (calculator) {
    calculator.classList.remove('hidden');
    calculator.scrollIntoView({ behavior: 'smooth' });
  }
}

function hideCalculator() {
  document.querySelectorAll('.calculator-section').forEach(section => {
    section.classList.add('hidden');
  });
  
  // Scroll back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function calculateLifeInsurance() {
  if (window.insuranceCalculators) {
    window.insuranceCalculators.calculateLifeInsurance();
  }
}

function calculateIncomeProtection() {
  if (window.insuranceCalculators) {
    window.insuranceCalculators.calculateIncomeProtection();
  }
}

// Initialize calculators when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.insuranceCalculators = new InsuranceCalculators();
});
