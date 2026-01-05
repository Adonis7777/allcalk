import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DollarSign, Percent, Calendar, TrendingUp, TrendingDown, Users, CreditCard, Fuel, ShoppingBag, BarChart, HelpCircle } from 'lucide-react';

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
  icon?: React.ReactNode;
  hint?: string;
}> = ({ label, value, onChange, icon, hint }) => (
  <div className="flex flex-col gap-2 group/field">
    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider transition-colors group-focus-within/field:text-indigo-600 dark:group-focus-within/field:text-indigo-400">{label}</label>
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-indigo-500 transition-colors duration-300">{icon}</div>}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-3 bg-white/70 dark:bg-gray-800/60 border border-white/60 dark:border-gray-700/50 rounded-xl text-lg font-medium text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 dark:focus:ring-indigo-500/30 focus:border-indigo-400/50 dark:focus:border-indigo-500/50 focus:scale-[1.01] focus:shadow-lg transition-all duration-300 ${icon ? 'pl-10' : ''}`}
        placeholder="0"
      />
    </div>
    <div className="text-[10px] text-gray-400 dark:text-gray-500 pl-1 h-3">{hint || "Enter value"}</div>
  </div>
);

const ResultCard: React.FC<{
  label: string;
  value: string;
  subLabel?: string;
  isPrimary?: boolean;
  colorClass?: string;
  tooltip?: string;
}> = ({ label, value, subLabel, isPrimary = false, colorClass, tooltip }) => {
  // Default Glass Style
  const defaultStyle = "bg-white/60 dark:bg-gray-800/60 border border-white/60 dark:border-gray-700/50 text-gray-800 dark:text-gray-100 backdrop-blur-md";
  
  // Primary Gradient Style
  const primaryStyle = `bg-gradient-to-br ${colorClass || "from-indigo-600 to-purple-600"} text-white shadow-xl shadow-indigo-500/20 border border-white/10`;
  
  // Custom Secondary Style (e.g. for Warnings/Success without full gradient)
  const customSecondaryStyle = colorClass ? `${colorClass} border border-current/10 backdrop-blur-md` : defaultStyle;

  return (
    <div className={`relative group p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 animate-fade-in-up hover:scale-[1.02] ${isPrimary ? primaryStyle : customSecondaryStyle}`}>
      {tooltip && (
        <div className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isPrimary ? 'text-white/70' : 'text-gray-400'}`}>
          <HelpCircle size={14} />
        </div>
      )}
      <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${isPrimary ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>{label}</span>
      <span className="text-3xl font-bold tracking-tight">{value}</span>
      {subLabel && <span className={`text-xs mt-1 font-medium ${isPrimary ? 'text-white/90' : 'text-gray-400 dark:text-gray-500'}`}>{subLabel}</span>}
      
      {/* Tooltip Popup */}
      {tooltip && (
        <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-gray-900/95 dark:bg-black/90 backdrop-blur text-white text-xs rounded-lg shadow-xl z-20 pointer-events-none transform -translate-y-1">
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
        </div>
      )}
    </div>
  );
};

const MiniChart: React.FC<{ val1: number, val2: number, label1: string, label2: string, color1: string, color2: string }> = ({ val1, val2, label1, label2, color1, color2 }) => {
  const total = val1 + val2 || 1;
  const p1 = (val1 / total) * 100;
  const p2 = (val2 / total) * 100;
  return (
    <div className="mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/20 dark:border-gray-700/30 backdrop-blur-sm">
       <div className="h-4 flex rounded-full overflow-hidden mb-3 bg-gray-200 dark:bg-gray-700 shadow-inner">
          <div style={{ width: `${p1}%` }} className={`${color1} transition-all duration-500`}></div>
          <div style={{ width: `${p2}%` }} className={`${color2} transition-all duration-500`}></div>
       </div>
       <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5"><div className={`w-2.5 h-2.5 rounded-full ${color1}`}></div> {label1} ({Math.round(p1)}%)</div>
          <div className="flex items-center gap-1.5"><div className={`w-2.5 h-2.5 rounded-full ${color2}`}></div> {label2} ({Math.round(p2)}%)</div>
       </div>
    </div>
  );
};

// 1. MORTGAGE CALCULATOR
export const MortgageCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('300000');
  const [rate, setRate] = useState('5.5');
  const [years, setYears] = useState('30');
  const [downPayment, setDownPayment] = useState('60000');

  const calculate = () => {
    const p = parseFloat(amount) - parseFloat(downPayment);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (p <= 0 || r === 0 || n === 0) return { monthly: '0', total: '0', interest: 0, principal: 0 };

    const monthly = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    
    return {
      monthly: monthly.toFixed(2),
      total: total.toFixed(2),
      interest: (total - p),
      principal: p
    };
  };

  const res = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_loan_amount')} value={amount} onChange={setAmount} icon={<DollarSign size={18} />} hint="Total property price" />
           <InputField label={t('label_down_payment')} value={downPayment} onChange={setDownPayment} icon={<DollarSign size={18} />} hint="Cash upfront" />
           <InputField label={t('label_interest_rate')} value={rate} onChange={setRate} icon={<Percent size={18} />} hint="Annual interest rate" />
           <InputField label={t('label_years')} value={years} onChange={setYears} icon={<Calendar size={18} />} hint="Loan duration in years" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="md:col-span-2">
             <ResultCard 
               label={t('result_monthly_payment')} 
               value={`$${parseFloat(res.monthly).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} 
               isPrimary 
               colorClass="from-indigo-600 to-purple-600"
               tooltip="Principal + Interest only" 
             />
           </div>
           <ResultCard 
             label={t('result_total_payment')} 
             value={`$${parseFloat(res.total).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`} 
             subLabel="Lifetime Cost" 
           />
           <ResultCard 
             label={t('result_total_interest')} 
             value={`$${res.interest.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`} 
             colorClass="bg-orange-50/80 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/30"
             tooltip="Total interest paid to bank"
           />
        </div>
        
        {res.principal > 0 && (
          <MiniChart 
            val1={res.principal} 
            val2={res.interest} 
            label1={t('result_principal_paid')} 
            label2={t('result_total_interest')} 
            color1="bg-indigo-500" 
            color2="bg-orange-400" 
          />
        )}
      </div>
    </div>
  );
};

// 2. AUTO LOAN CALCULATOR
export const AutoLoanCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [price, setPrice] = useState('35000');
  const [rate, setRate] = useState('4.9');
  const [months, setMonths] = useState('60');
  const [down, setDown] = useState('5000');
  const [tradeIn, setTradeIn] = useState('2000');

  const calculate = () => {
    const p = parseFloat(price) - parseFloat(down) - parseFloat(tradeIn);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(months);

    if (p <= 0 || n === 0) return { monthly: 0, total: 0, interest: 0 };
    if (r === 0) return { monthly: (p/n).toFixed(2), total: p.toFixed(2), interest: 0 };

    const monthly = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;

    return { monthly: monthly.toFixed(2), total: total.toFixed(2), interest: (total - p).toFixed(2) };
  };

  const res = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_loan_amount')} value={price} onChange={setPrice} icon={<DollarSign size={18} />} hint="Sticker price" />
           <InputField label={t('label_trade_in')} value={tradeIn} onChange={setTradeIn} icon={<DollarSign size={18} />} hint="Value of current vehicle" />
           <InputField label={t('label_down_payment')} value={down} onChange={setDown} icon={<DollarSign size={18} />} hint="Cash down" />
           <InputField label={t('label_interest_rate')} value={rate} onChange={setRate} icon={<Percent size={18} />} hint="APR %" />
           <InputField label={t('label_months')} value={months} onChange={setMonths} icon={<Calendar size={18} />} hint="Loan term in months" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="md:col-span-2">
             <ResultCard label={t('result_monthly_payment')} value={`$${res.monthly}`} isPrimary colorClass="from-blue-600 to-cyan-600" />
           </div>
           <ResultCard label={t('result_total_payment')} value={`$${res.total}`} />
           <ResultCard label={t('result_total_interest')} value={`$${res.interest}`} colorClass="bg-red-50/50 dark:bg-red-900/20 text-red-600 dark:text-red-400" />
        </div>
      </div>
    </div>
  );
};

// 3. COMPOUND INTEREST CALCULATOR
export const CompoundInterestCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('10000');
  const [monthly, setMonthly] = useState('500');
  const [rate, setRate] = useState('7');
  const [years, setYears] = useState('10');

  const calculate = () => {
    const p = parseFloat(principal);
    const pmt = parseFloat(monthly);
    const r = parseFloat(rate) / 100;
    const n = 12;
    const tVal = parseFloat(years);

    if (isNaN(p) || isNaN(pmt) || isNaN(r) || isNaN(tVal)) return { future: 0, contributed: 0, interest: 0 };

    const fvPrincipal = p * Math.pow(1 + r/n, n*tVal);
    const fvSeries = pmt * (Math.pow(1 + r/n, n*tVal) - 1) / (r/n);
    
    const futureValue = fvPrincipal + fvSeries;
    const totalContributed = p + (pmt * n * tVal);
    const totalInterest = futureValue - totalContributed;

    return {
      future: futureValue.toFixed(0),
      contributed: totalContributed,
      interest: totalInterest
    };
  };

  const res = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_principal')} value={principal} onChange={setPrincipal} icon={<DollarSign size={18} />} hint="Initial investment" />
           <InputField label={t('label_monthly_contrib')} value={monthly} onChange={setMonthly} icon={<TrendingUp size={18} />} hint="Monthly addition" />
           <InputField label={t('label_interest_rate')} value={rate} onChange={setRate} icon={<Percent size={18} />} hint="Annual growth rate" />
           <InputField label={t('label_years')} value={years} onChange={setYears} icon={<Calendar size={18} />} hint="Investment duration" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="md:col-span-2">
             <ResultCard 
               label={t('result_future_value')} 
               value={`$${res.future}`} 
               isPrimary 
               colorClass="from-emerald-500 to-teal-600" 
               tooltip="Total value at end of term"
             />
           </div>
           <ResultCard label={t('label_principal')} value={`$${res.contributed.toFixed(0)}`} subLabel="Your Contribution" />
           <ResultCard label={t('result_total_interest')} value={`$${res.interest.toFixed(0)}`} subLabel="Interest Earned" colorClass="bg-emerald-50/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" />
        </div>
        {res.contributed > 0 && (
          <MiniChart 
            val1={res.contributed} 
            val2={res.interest} 
            label1="Principal" 
            label2="Interest" 
            color1="bg-blue-500" 
            color2="bg-emerald-500" 
          />
        )}
      </div>
    </div>
  );
};

// 4. SALARY CONVERTER
export const SalaryConverter: React.FC = () => {
  const { t } = useLanguage();
  const [hourly, setHourly] = useState('25');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');

  const calculate = () => {
    const h = parseFloat(hourly);
    const hpw = parseFloat(hoursPerWeek);
    if (isNaN(h) || isNaN(hpw)) return { annual: 0, monthly: 0, weekly: 0 };
    const annual = h * hpw * 52;
    return { 
      annual, 
      monthly: annual / 12,
      weekly: annual / 52
    };
  };

  const res = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_hourly_rate')} value={hourly} onChange={setHourly} icon={<DollarSign size={18} />} hint="Hourly wage" />
           <InputField label={t('label_hours_per_week')} value={hoursPerWeek} onChange={setHoursPerWeek} icon={<ClockIcon />} hint="Hours worked per week" />
        </div>
        <div className="grid grid-cols-1 gap-4">
           <ResultCard 
             label={t('result_annual_salary')} 
             value={`$${res.annual.toLocaleString()}`} 
             isPrimary 
             colorClass="from-green-500 to-emerald-600"
             subLabel="Before Tax"
           />
           <div className="grid grid-cols-2 gap-4">
             <ResultCard label="Monthly" value={`$${res.monthly.toLocaleString(undefined, {maximumFractionDigits:0})}`} />
             <ResultCard label="Weekly" value={`$${res.weekly.toLocaleString(undefined, {maximumFractionDigits:0})}`} />
           </div>
        </div>
      </div>
    </div>
  );
};

const ClockIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;

// 5. INFLATION CALCULATOR
export const InflationCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('1000');
  const [startYear, setStartYear] = useState('2000');
  const [endYear, setEndYear] = useState('2024');
  const [rate, setRate] = useState('3.2'); // Avg inflation mock

  const calculate = () => {
    const amt = parseFloat(amount);
    const r = parseFloat(rate) / 100;
    const years = parseFloat(endYear) - parseFloat(startYear);
    
    if (years < 0) return { val: 0, loss: 0 };

    // FV = PV * (1 + r)^n
    const newVal = amt * Math.pow(1 + r, years);
    const loss = 100 - (amt / newVal * 100);

    return { val: newVal, loss: loss };
  };

  const res = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_start_amount')} value={amount} onChange={setAmount} icon={<DollarSign size={18} />} hint="Historical amount" />
           <InputField label={t('label_inflation_rate')} value={rate} onChange={setRate} icon={<TrendingUp size={18} />} hint="Avg. inflation %" />
           <InputField label={t('label_start_year')} value={startYear} onChange={setStartYear} icon={<Calendar size={18} />} hint="Base year" />
           <InputField label={t('label_end_year')} value={endYear} onChange={setEndYear} icon={<Calendar size={18} />} hint="Target year" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <ResultCard label={t('result_purchasing_power')} value={`$${res.val.toFixed(2)}`} isPrimary colorClass="from-slate-600 to-slate-800" tooltip="Equivalent value today" />
           <ResultCard label={t('result_power_loss')} value={`${res.loss.toFixed(1)}%`} colorClass="bg-red-50/50 dark:bg-red-900/20 text-red-600 dark:text-red-400" tooltip="Value lost to inflation" />
        </div>
      </div>
    </div>
  );
};

// 6. TIP SPLITTER
export const TipSplitter: React.FC = () => {
  const { t } = useLanguage();
  const [bill, setBill] = useState('100');
  const [tip, setTip] = useState('15');
  const [people, setPeople] = useState('2');

  const calculate = () => {
    const b = parseFloat(bill);
    const tp = parseFloat(tip) / 100;
    const p = parseInt(people) || 1;

    const tipAmt = b * tp;
    const total = b + tipAmt;
    
    return { tipPerPerson: tipAmt / p, totalPerPerson: total / p, totalTip: tipAmt };
  };

  const res = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
           <InputField label={t('label_bill_amount')} value={bill} onChange={setBill} icon={<DollarSign size={18} />} hint="Subtotal" />
           <InputField label={t('label_tip_percent')} value={tip} onChange={setTip} icon={<Percent size={18} />} hint="Tip %" />
           <InputField label={t('label_people')} value={people} onChange={setPeople} icon={<Users size={18} />} hint="Split count" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <ResultCard label={t('result_total_per_person')} value={`$${res.totalPerPerson.toFixed(2)}`} isPrimary colorClass="from-indigo-500 to-blue-600" />
           <ResultCard label={t('result_tip_amount') + " (Total)"} value={`$${res.totalTip.toFixed(2)}`} />
        </div>
      </div>
    </div>
  );
};

// 7. ROI CALCULATOR
export const ROICalculator: React.FC = () => {
  const { t } = useLanguage();
  const [cost, setCost] = useState('5000');
  const [revenue, setRevenue] = useState('7500');

  const calculate = () => {
    const c = parseFloat(cost);
    const r = parseFloat(revenue);
    if (c === 0) return 0;
    return ((r - c) / c) * 100;
  };

  const roi = calculate();
  const isPositive = roi >= 0;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_cost')} value={cost} onChange={setCost} icon={<DollarSign size={18} />} hint="Total Investment" />
           <InputField label={t('label_revenue')} value={revenue} onChange={setRevenue} icon={<DollarSign size={18} />} hint="Returned Value" />
        </div>
        <ResultCard 
          label={t('result_roi')} 
          value={`${roi.toFixed(2)}%`} 
          isPrimary={true}
          colorClass={isPositive ? "from-emerald-500 to-green-600" : "from-red-500 to-rose-600"}
          subLabel={isPositive ? "Profitable" : "Loss"}
        />
      </div>
    </div>
  );
};

// 8. VAT / SALES TAX
export const VATCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [price, setPrice] = useState('100');
  const [tax, setTax] = useState('20');

  const taxAmt = (parseFloat(price) * parseFloat(tax)) / 100;
  const total = parseFloat(price) + taxAmt;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_price')} value={price} onChange={setPrice} icon={<DollarSign size={18} />} hint="Base price" />
           <InputField label={t('label_tax_rate')} value={tax} onChange={setTax} icon={<Percent size={18} />} hint="Tax %" />
        </div>
        <div className="grid grid-cols-2 gap-4">
           <ResultCard label={t('result_tax_amount')} value={`$${taxAmt.toFixed(2)}`} colorClass="bg-orange-50/50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" />
           <ResultCard label={t('result_total_price')} value={`$${total.toFixed(2)}`} isPrimary />
        </div>
      </div>
    </div>
  );
};

// 9. DISCOUNT CALCULATOR
export const DiscountCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [price, setPrice] = useState('100');
  const [discount, setDiscount] = useState('25');

  const saved = (parseFloat(price) * parseFloat(discount)) / 100;
  const final = parseFloat(price) - saved;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_price')} value={price} onChange={setPrice} icon={<ShoppingBag size={18} />} hint="Original price" />
           <InputField label={t('label_discount_percent')} value={discount} onChange={setDiscount} icon={<Percent size={18} />} hint="Discount %" />
        </div>
        <div className="grid grid-cols-2 gap-4">
           <ResultCard label={t('result_saved')} value={`$${saved.toFixed(2)}`} colorClass="bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-300" />
           <ResultCard label={t('result_final_price')} value={`$${final.toFixed(2)}`} isPrimary colorClass="from-blue-500 to-indigo-600" />
        </div>
      </div>
    </div>
  );
};

// 10. BREAK-EVEN
export const BreakEvenCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [fixed, setFixed] = useState('10000');
  const [sellPrice, setSellPrice] = useState('50');
  const [varCost, setVarCost] = useState('20');

  const contribution = parseFloat(sellPrice) - parseFloat(varCost);
  const units = contribution > 0 ? Math.ceil(parseFloat(fixed) / contribution) : 0;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
           <InputField label={t('label_fixed_cost')} value={fixed} onChange={setFixed} icon={<DollarSign size={18} />} hint="Rent, salaries, etc." />
           <InputField label={t('label_sell_price')} value={sellPrice} onChange={setSellPrice} icon={<DollarSign size={18} />} hint="Price per unit" />
           <InputField label={t('label_var_cost')} value={varCost} onChange={setVarCost} icon={<DollarSign size={18} />} hint="Materials per unit" />
        </div>
        <ResultCard 
          label={t('result_breakeven_units')} 
          value={`${units.toLocaleString()}`} 
          isPrimary 
          colorClass="from-purple-500 to-indigo-600"
          subLabel="Units needed to cover costs"
        />
      </div>
    </div>
  );
};

// 11. CREDIT CARD PAYOFF
export const CreditCardCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [balance, setBalance] = useState('5000');
  const [rate, setRate] = useState('18');
  const [payment, setPayment] = useState('200');

  const calculate = () => {
    const b = parseFloat(balance);
    const r = parseFloat(rate) / 100 / 12;
    const p = parseFloat(payment);

    if (p <= b * r) return { months: "∞", interest: "∞" }; // Payment too low

    // N = -log(1 - (r * B) / P) / log(1 + r)
    const n = -Math.log(1 - (r * b) / p) / Math.log(1 + r);
    const months = Math.ceil(n);
    const totalPaid = months * p;
    
    return { months, interest: (totalPaid - b).toFixed(2) };
  };

  const res = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
           <InputField label={t('label_card_balance')} value={balance} onChange={setBalance} icon={<CreditCard size={18} />} hint="Total owed" />
           <InputField label={t('label_interest_rate')} value={rate} onChange={setRate} icon={<Percent size={18} />} hint="APR %" />
           <InputField label={t('label_monthly_payment')} value={payment} onChange={setPayment} icon={<DollarSign size={18} />} hint="Payment amount" />
        </div>
        <div className="grid grid-cols-2 gap-4">
           <ResultCard label={t('result_months_to_payoff')} value={`${res.months}`} isPrimary colorClass="from-rose-500 to-pink-600" />
           <ResultCard label={t('result_total_interest')} value={`$${res.interest}`} subLabel="Money wasted" colorClass="bg-red-50/50 dark:bg-red-900/20 text-red-600 dark:text-red-400" />
        </div>
      </div>
    </div>
  );
};

// 12. FUEL COST
export const FuelCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [distance, setDistance] = useState('300');
  const [mpg, setMpg] = useState('25');
  const [price, setPrice] = useState('3.50');

  const cost = (parseFloat(distance) / parseFloat(mpg)) * parseFloat(price);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
           <InputField label={t('label_distance')} value={distance} onChange={setDistance} icon={<TrendingUp size={18} />} hint="Trip length" />
           <InputField label={t('label_mpg')} value={mpg} onChange={setMpg} icon={<Fuel size={18} />} hint="Fuel efficiency" />
           <InputField label={t('label_gas_price')} value={price} onChange={setPrice} icon={<DollarSign size={18} />} hint="Cost per gallon/liter" />
        </div>
        <ResultCard 
          label={t('result_trip_cost')} 
          value={`$${cost.toFixed(2)}`} 
          isPrimary 
          colorClass="from-orange-500 to-red-500"
          tooltip="Estimated one-way cost"
        />
      </div>
    </div>
  );
};