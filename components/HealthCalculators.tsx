import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Activity, User, Ruler, Weight, Heart, Droplets, HelpCircle } from 'lucide-react';

// --- Shared UI Components ---
const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
  icon?: React.ReactNode;
  type?: string;
  hint?: string;
}> = ({ label, value, onChange, icon, type = "number", hint }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</label>
    <div className="relative group">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">{icon}</div>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-3 bg-white/70 dark:bg-gray-800/60 border border-white/60 dark:border-gray-700/50 rounded-xl text-lg font-medium text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:scale-[1.01] focus:shadow-md transition-all duration-300 ${icon ? 'pl-10' : ''}`}
        placeholder="0"
      />
    </div>
    <div className="text-[10px] text-gray-400 dark:text-gray-500 pl-1">{hint || "Enter value"}</div>
  </div>
);

const ResultCard: React.FC<{
  label: string;
  value: string;
  subLabel?: string;
  isPrimary?: boolean;
  colorClass?: string;
  tooltip?: string;
}> = ({ label, value, subLabel, isPrimary = false, colorClass = "from-teal-500 to-emerald-600", tooltip }) => (
  <div className={`relative group p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 animate-fade-in-up hover:scale-[1.02] ${isPrimary ? `bg-gradient-to-br ${colorClass} text-white shadow-lg` : 'bg-white/60 dark:bg-gray-800/60 border border-white/60 dark:border-gray-700/50 text-gray-800 dark:text-gray-100'}`}>
    {tooltip && (
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <HelpCircle size={14} className="text-current opacity-50" />
      </div>
    )}
    <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${isPrimary ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>{label}</span>
    <span className="text-3xl font-bold tracking-tight">{value}</span>
    {subLabel && <span className={`text-sm mt-1 font-medium ${isPrimary ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>{subLabel}</span>}
    
    {/* Tooltip Popup */}
    {tooltip && (
      <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-10">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    )}
  </div>
);

// --- BMI CALCULATOR ---
export const BMICalculator: React.FC = () => {
  const { t } = useLanguage();
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to m
    if (w <= 0 || h <= 0) return { bmi: 0, status: '' };

    const bmi = w / (h * h);
    let statusKey = '';

    if (bmi < 18.5) statusKey = 'bmi_underweight';
    else if (bmi < 25) statusKey = 'bmi_normal';
    else if (bmi < 30) statusKey = 'bmi_overweight';
    else statusKey = 'bmi_obese';

    return { bmi: bmi.toFixed(1), status: statusKey };
  };

  const { bmi, status } = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="flex items-center gap-3 mb-6">
           <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-600 dark:text-emerald-400">
             <Activity size={24} />
           </div>
           <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t('calc_bmi_name')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
           <InputField label={t('label_weight')} value={weight} onChange={setWeight} icon={<Weight size={18} />} hint={t('hint_number')} />
           <InputField label={t('label_height_cm')} value={height} onChange={setHeight} icon={<Ruler size={18} />} hint={t('hint_number')} />
        </div>

        <div className="grid grid-cols-1">
           <ResultCard 
             label={t('result_bmi')} 
             value={String(bmi)} 
             subLabel={status ? t(status) : '-'} 
             isPrimary={true}
             tooltip={t('tooltip_info')}
             colorClass={status === 'bmi_normal' ? 'from-emerald-500 to-green-600' : (status === 'bmi_underweight' || status === 'bmi_overweight' ? 'from-orange-400 to-orange-500' : 'from-red-500 to-rose-600')}
           />
        </div>
      </div>
    </div>
  );
};

// --- BMR CALCULATOR ---
export const BMRCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (w <= 0 || h <= 0 || a <= 0) return 0;

    // Mifflin-St Jeor Equation
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr += gender === 'male' ? 5 : -161;

    return Math.round(bmr);
  };

  const bmr = calculate();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="flex items-center gap-3 mb-6">
           <div className="p-2 bg-rose-100 dark:bg-rose-900/50 rounded-full text-rose-600 dark:text-rose-400">
             <Heart size={24} />
           </div>
           <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t('calc_bmr_name')}</h2>
        </div>

        {/* Gender Toggle */}
        <div className="flex bg-white/50 dark:bg-gray-800/50 p-1 rounded-xl mb-6">
           <button 
             onClick={() => setGender('male')}
             className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${gender === 'male' ? 'bg-white dark:bg-gray-700 shadow text-indigo-600 dark:text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}
           >
             {t('gender_male')}
           </button>
           <button 
             onClick={() => setGender('female')}
             className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${gender === 'female' ? 'bg-white dark:bg-gray-700 shadow text-rose-500 dark:text-rose-300' : 'text-gray-500 dark:text-gray-400'}`}
           >
             {t('gender_female')}
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
           <InputField label={t('label_weight')} value={weight} onChange={setWeight} icon={<Weight size={18} />} hint="kg" />
           <InputField label={t('label_height_cm')} value={height} onChange={setHeight} icon={<Ruler size={18} />} hint="cm" />
           <InputField label={t('label_age')} value={age} onChange={setAge} icon={<User size={18} />} hint="years" />
        </div>

        <div className="grid grid-cols-1">
           <ResultCard 
             label={t('result_calories')} 
             value={String(bmr)} 
             subLabel="Kcal / Day" 
             isPrimary={true}
             tooltip="Mifflin-St Jeor Equation"
             colorClass="from-rose-500 to-pink-600"
           />
        </div>
      </div>
    </div>
  );
};

// --- WATER INTAKE CALCULATOR ---
export const WaterCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [weight, setWeight] = useState('70');

  const calculate = () => {
    const w = parseFloat(weight);
    if (w <= 0) return 0;
    
    // Basic formula: 35ml per kg of body weight
    const liters = (w * 0.035).toFixed(1);
    return liters;
  };

  const liters = calculate();
  const cups = Math.round(parseFloat(String(liters)) * 4.2); // approx 4.2 cups per liter

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 dark:border-gray-700/50 transition-colors duration-500">
        <div className="flex items-center gap-3 mb-6">
           <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
             <Droplets size={24} />
           </div>
           <h2 className="text-xl font-bold text-gray-800 dark:text-white">{t('calc_water_name')}</h2>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-8">
           <InputField label={t('label_weight')} value={weight} onChange={setWeight} icon={<Weight size={18} />} hint="kg" />
        </div>

        <div className="grid grid-cols-2 gap-4">
           <ResultCard 
             label={t('result_water')} 
             value={`${liters} L`} 
             isPrimary={true}
             tooltip="35ml per kg"
             colorClass="from-blue-500 to-cyan-500"
           />
           <ResultCard 
             label="Cups" 
             value={`${cups}`} 
             subLabel="~240ml cups"
             colorClass="bg-white dark:bg-gray-800"
           />
        </div>
      </div>
    </div>
  );
};