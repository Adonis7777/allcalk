import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, Percent, Divide, ArrowRightLeft, Triangle, Circle, Box, Activity, Zap, Radio, Hash, HelpCircle } from 'lucide-react';

const InputField: React.FC<{ label: string; value: string; onChange: (val: string) => void; icon?: React.ReactNode; hint?: string }> = ({ label, value, onChange, icon, hint }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</label>
    <div className="relative group">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className={`w-full p-3 bg-white/70 dark:bg-gray-800/60 border border-white/60 dark:border-gray-700/50 rounded-xl text-lg font-medium text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:scale-[1.01] focus:shadow-md transition-all duration-300 ${icon ? 'pl-10' : ''}`} />
    </div>
    <div className="text-[10px] text-gray-400 dark:text-gray-500 pl-1">{hint || "Enter value"}</div>
  </div>
);

const ResultCard: React.FC<{ label: string; value: string; tooltip?: string }> = ({ label, value, tooltip }) => (
  <div className="relative group p-5 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg text-center animate-fade-in-up hover:scale-[1.02] transition-transform">
    {tooltip && (
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <HelpCircle size={14} className="text-white/50" />
      </div>
    )}
    <span className="text-xs font-bold uppercase tracking-wider mb-1 text-white/80">{label}</span>
    <div className="text-2xl font-bold">{value}</div>
    {/* Tooltip Popup */}
    {tooltip && (
      <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-10">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    )}
  </div>
);

// 1. Scientific Calculator (Basic UI for Sci functions)
export const ScientificCalculator = () => {
  const { t } = useLanguage();
  const [val, setVal] = useState('0');
  const [res, setRes] = useState('');

  const calc = (func: (n: number) => number, name: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return;
    setRes(`${name}(${n}) = ${func(n).toFixed(4)}`);
  };

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <InputField label={t('label_number_1')} value={val} onChange={setVal} icon={<Calculator size={18}/>} hint="Angle in radians for trig" />
       <div className="grid grid-cols-3 gap-3">
         {['sin', 'cos', 'tan', 'log', 'sqrt'].map(op => (
           <button key={op} onClick={() => calc(op === 'log' ? Math.log10 : op === 'sqrt' ? Math.sqrt : (Math as any)[op], op)} className="p-3 bg-white dark:bg-gray-800 rounded-xl font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 shadow-sm capitalize transition-colors">{op}</button>
         ))}
       </div>
       {res && <ResultCard label="Result" value={res} />}
    </div>
  );
};

// 2. Percentage Calculator
export const PercentageCalculator = () => {
  const { t } = useLanguage();
  const [val1, setVal1] = useState('50');
  const [val2, setVal2] = useState('200');

  const p = (parseFloat(val1) / parseFloat(val2)) * 100;
  const v = (parseFloat(val1) / 100) * parseFloat(val2);

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label="Value 1 / %" value={val1} onChange={setVal1} />
         <InputField label="Value 2" value={val2} onChange={setVal2} />
       </div>
       <ResultCard label={`${val1}% of ${val2}`} value={isNaN(v) ? '-' : v.toFixed(2)} />
       <ResultCard label={`${val1} is what % of ${val2}?`} value={isNaN(p) ? '-' : p.toFixed(2) + '%'} />
    </div>
  );
};

// 3. Fraction Simplifier
export const FractionSimplifier = () => {
  const { t } = useLanguage();
  const [num, setNum] = useState('8');
  const [den, setDen] = useState('12');

  const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
  const common = gcd(parseInt(num), parseInt(den));

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_numerator')} value={num} onChange={setNum} />
         <InputField label={t('label_denominator')} value={den} onChange={setDen} />
       </div>
       <ResultCard label="Simplified" value={`${parseInt(num)/common} / ${parseInt(den)/common}`} />
    </div>
  );
};

// 4. LCM GCD
export const LCMGCDCalculator = () => {
  const { t } = useLanguage();
  const [n1, setN1] = useState('12');
  const [n2, setN2] = useState('15');
  const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
  const lcm = (a: number, b: number) => (a * b) / gcd(a, b);
  const a = parseInt(n1), b = parseInt(n2);

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label={t('label_number_1')} value={n1} onChange={setN1} />
        <InputField label={t('label_number_2')} value={n2} onChange={setN2} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ResultCard label="GCD" value={String(gcd(a, b))} />
        <ResultCard label="LCM" value={String(lcm(a, b))} />
      </div>
    </div>
  );
};

// 5. Prime Checker
export const PrimeChecker = () => {
  const { t } = useLanguage();
  const [val, setVal] = useState('17');
  const isPrime = (num: number) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) if(num % i === 0) return false; 
    return num > 1;
  };
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <InputField label={t('label_number_1')} value={val} onChange={setVal} />
       <ResultCard label="Status" value={isPrime(parseInt(val)) ? 'Prime' : 'Not Prime'} />
    </div>
  );
};

// 6. Quadratic
export const QuadraticSolver = () => {
  const [a, setA] = useState('1');
  const [b, setB] = useState('-3');
  const [c, setC] = useState('2');
  
  const solve = () => {
    const da = parseFloat(a), db = parseFloat(b), dc = parseFloat(c);
    const d = db*db - 4*da*dc;
    if(d < 0) return "Complex Roots";
    const x1 = (-db + Math.sqrt(d)) / (2*da);
    const x2 = (-db - Math.sqrt(d)) / (2*da);
    return `x1=${x1}, x2=${x2}`;
  };

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-3 gap-2">
         <InputField label="a" value={a} onChange={setA} />
         <InputField label="b" value={b} onChange={setB} />
         <InputField label="c" value={c} onChange={setC} />
       </div>
       <ResultCard label="Roots" value={solve()} />
    </div>
  );
};

// 7. Base Converter
export const BaseConverter = () => {
  const { t } = useLanguage();
  const [val, setVal] = useState('255');
  const n = parseInt(val, 10);
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <InputField label="Decimal" value={val} onChange={setVal} />
      <div className="grid grid-cols-2 gap-4">
        <ResultCard label="Binary" value={isNaN(n) ? '-' : n.toString(2)} />
        <ResultCard label="Hex" value={isNaN(n) ? '-' : n.toString(16).toUpperCase()} />
      </div>
    </div>
  );
};

// 8. Triangle
export const TriangleCalculator = () => {
  const { t } = useLanguage();
  const [b, setB] = useState('10');
  const [h, setH] = useState('5');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label={t('label_base')} value={b} onChange={setB} />
        <InputField label={t('label_height')} value={h} onChange={setH} />
      </div>
      <ResultCard label={t('result_area')} value={String(0.5 * parseFloat(b) * parseFloat(h))} />
    </div>
  );
};

// 9. Circle
export const CircleSolver = () => {
  const { t } = useLanguage();
  const [r, setR] = useState('5');
  const rad = parseFloat(r);
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <InputField label={t('label_radius')} value={r} onChange={setR} />
      <div className="grid grid-cols-2 gap-4">
        <ResultCard label={t('result_area')} value={(Math.PI * rad * rad).toFixed(2)} />
        <ResultCard label="Circumference" value={(2 * Math.PI * rad).toFixed(2)} />
      </div>
    </div>
  );
};

// 10. Volume (Cylinder)
export const VolumeCalculator = () => {
  const { t } = useLanguage();
  const [r, setR] = useState('3');
  const [h, setH] = useState('10');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="text-sm text-gray-500 font-bold mb-2">Cylinder</div>
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_radius')} value={r} onChange={setR} />
         <InputField label={t('label_height')} value={h} onChange={setH} />
       </div>
       <ResultCard label={t('result_volume')} value={(Math.PI * parseFloat(r)**2 * parseFloat(h)).toFixed(2)} />
    </div>
  );
};

// 11. Speed
export const SpeedCalculator = () => {
  const { t } = useLanguage();
  const [d, setD] = useState('100');
  const [ti, setTi] = useState('2');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_distance')} value={d} onChange={setD} />
         <InputField label="Time" value={ti} onChange={setTi} />
       </div>
       <ResultCard label={t('label_velocity')} value={(parseFloat(d)/parseFloat(ti)).toFixed(2)} />
    </div>
  );
};

// 12. Force
export const ForceCalculator = () => {
  const { t } = useLanguage();
  const [m, setM] = useState('10');
  const [a, setA] = useState('9.8');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_mass')} value={m} onChange={setM} />
         <InputField label={t('label_acceleration')} value={a} onChange={setA} />
       </div>
       <ResultCard label={t('result_force')} value={(parseFloat(m)*parseFloat(a)).toFixed(2) + " N"} />
    </div>
  );
};

// 13. Ohm
export const OhmsLaw = () => {
  const { t } = useLanguage();
  const [i, setI] = useState('2');
  const [r, setR] = useState('10');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_current')} value={i} onChange={setI} />
         <InputField label={t('label_resistance')} value={r} onChange={setR} />
       </div>
       <ResultCard label={t('label_voltage')} value={(parseFloat(i)*parseFloat(r)).toFixed(2) + " V"} />
    </div>
  );
};

// 14. Density
export const DensityCalculator = () => {
  const { t } = useLanguage();
  const [m, setM] = useState('100');
  const [v, setV] = useState('20');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_mass')} value={m} onChange={setM} />
         <InputField label={t('result_volume')} value={v} onChange={setV} />
       </div>
       <ResultCard label="Density" value={(parseFloat(m)/parseFloat(v)).toFixed(2)} />
    </div>
  );
};

// 15. Frequency
export const FrequencyCalculator = () => {
  const { t } = useLanguage();
  const [w, setW] = useState('500'); // wavelength nm
  const f = 299792458 / (parseFloat(w) * 1e-9);
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <InputField label="Wavelength (nm)" value={w} onChange={setW} />
       <ResultCard label={t('label_frequency')} value={(f/1e12).toFixed(2) + " THz"} />
    </div>
  );
};

// 16. Energy
export const EnergyCalculator = () => {
  const { t } = useLanguage();
  const [m, setM] = useState('10');
  const [v, setV] = useState('5');
  const ke = 0.5 * parseFloat(m) * parseFloat(v)**2;
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_mass')} value={m} onChange={setM} />
         <InputField label={t('label_velocity')} value={v} onChange={setV} />
       </div>
       <ResultCard label={t('result_energy')} value={ke.toFixed(2) + " J"} />
    </div>
  );
};

// 17. Random
export const RandomGenerator = () => {
  const { t } = useLanguage();
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [res, setRes] = useState('?');
  const gen = () => {
    const mn = parseInt(min), mx = parseInt(max);
    setRes(String(Math.floor(Math.random() * (mx - mn + 1)) + mn));
  };
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_min')} value={min} onChange={setMin} />
         <InputField label={t('label_max')} value={max} onChange={setMax} />
       </div>
       <button onClick={gen} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">{t('btn_generate')}</button>
       <ResultCard label="Result" value={res} />
    </div>
  );
};

// 18. Rounding
export const RoundingTool = () => {
  const { t } = useLanguage();
  const [val, setVal] = useState('3.14159');
  const [dec, setDec] = useState('2');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label={t('label_value')} value={val} onChange={setVal} />
         <InputField label="Decimals" value={dec} onChange={setDec} />
       </div>
       <ResultCard label="Rounded" value={parseFloat(val).toFixed(parseInt(dec))} />
    </div>
  );
};