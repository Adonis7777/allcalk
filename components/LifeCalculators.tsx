import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, Globe, Coffee, Play, Pause, RotateCcw, Type, Lock, Smartphone, TrendingUp, Film, DollarSign, HelpCircle } from 'lucide-react';

const InputField: React.FC<{ label: string; value: string; onChange: (val: string) => void; type?: string; hint?: string }> = ({ label, value, onChange, type = "text", hint }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</label>
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full p-3 bg-white/70 dark:bg-gray-800/60 border border-white/60 dark:border-gray-700/50 rounded-xl text-lg font-medium text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:scale-[1.01] focus:shadow-md transition-all duration-300" />
    <div className="text-[10px] text-gray-400 dark:text-gray-500 pl-1">{hint || (type === 'date' ? 'Select date' : 'Enter value')}</div>
  </div>
);

const ResultCard: React.FC<{ label: string; value: string; subLabel?: string; tooltip?: string }> = ({ label, value, subLabel, tooltip }) => (
  <div className="relative group p-5 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg text-center animate-fade-in-up hover:scale-[1.02] transition-transform">
    {tooltip && (
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <HelpCircle size={14} className="text-white/50" />
      </div>
    )}
    <span className="text-xs font-bold uppercase tracking-wider mb-1 text-white/80">{label}</span>
    <div className="text-2xl font-bold">{value}</div>
    {subLabel && <div className="text-xs opacity-70 mt-1">{subLabel}</div>}
    
    {/* Tooltip Popup */}
    {tooltip && (
      <div className="absolute bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-10">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    )}
  </div>
);

// 19. Exact Age
export const ExactAge = () => {
  const { t } = useLanguage();
  const [dob, setDob] = useState('2000-01-01');
  const diff = Date.now() - new Date(dob).getTime();
  const ageDate = new Date(diff);
  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <InputField label={t('label_birthdate')} value={dob} onChange={setDob} type="date" />
      <ResultCard label={t('result_age')} value={`${years} Years`} subLabel={`${Math.floor(diff / (1000 * 60 * 60 * 24))} Total Days`} />
    </div>
  );
};

// 20. Date Diff
export const DateDifference = () => {
  const { t } = useLanguage();
  const [d1, setD1] = useState('2024-01-01');
  const [d2, setD2] = useState('2024-12-31');
  const diff = Math.abs(new Date(d2).getTime() - new Date(d1).getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label={t('label_start_date')} value={d1} onChange={setD1} type="date" />
        <InputField label={t('label_end_date')} value={d2} onChange={setD2} type="date" />
      </div>
      <ResultCard label={t('result_diff')} value={`${days} Days`} />
    </div>
  );
};

// 21. Time Zone
export const TimeZoneConverter = () => {
  const now = new Date();
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="space-y-4">
        <ResultCard label="New York (EST)" value={now.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })} />
        <ResultCard label="London (GMT)" value={now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })} />
        <ResultCard label="Tokyo (JST)" value={now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' })} />
      </div>
    </div>
  );
};

// 22. Work Hours
export const WorkHours = () => {
  const { t } = useLanguage();
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('17:00');
  const [breakM, setBreakM] = useState('30');
  
  const s = new Date(`2000-01-01T${start}`);
  const e = new Date(`2000-01-01T${end}`);
  const diffM = (e.getTime() - s.getTime()) / 60000 - parseInt(breakM);
  
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="grid grid-cols-2 gap-4">
         <InputField label="Start" value={start} onChange={setStart} type="time" />
         <InputField label="End" value={end} onChange={setEnd} type="time" />
       </div>
       <InputField label="Break (min)" value={breakM} onChange={setBreakM} />
       <ResultCard label="Total Hours" value={(diffM / 60).toFixed(2) + " h"} />
    </div>
  );
};

// 23. Pomodoro
export const PomodoroTimer = () => {
  const { t } = useLanguage();
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    let int: any;
    if(active && time > 0) int = setInterval(() => setTime(t => t - 1), 1000);
    else if(time === 0) setActive(false);
    return () => clearInterval(int);
  }, [active, time]);

  const fmt = (s: number) => `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50 text-center">
      <div className="text-6xl font-bold text-gray-800 dark:text-gray-100 font-mono mb-4">{fmt(time)}</div>
      <div className="flex gap-4 justify-center">
        <button onClick={() => setActive(!active)} className="p-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">{active ? <Pause /> : <Play />}</button>
        <button onClick={() => { setActive(false); setTime(25*60); }} className="p-4 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"><RotateCcw /></button>
      </div>
    </div>
  );
};

// 24. Countdown
export const CountdownTimer = () => {
  const { t } = useLanguage();
  const [mins, setMins] = useState('5');
  const [time, setTime] = useState(300);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let int: any;
    if(active && time > 0) int = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(int);
  }, [active, time]);

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50 text-center">
       {!active ? (
         <div className="flex gap-2 items-end">
           <InputField label="Minutes" value={mins} onChange={setMins} />
           <button onClick={() => { setTime(parseInt(mins)*60); setActive(true); }} className="p-3 bg-indigo-600 text-white rounded-xl mb-2">{t('btn_start')}</button>
         </div>
       ) : (
         <div>
            <div className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">{Math.floor(time/60)}:{(time%60).toString().padStart(2,'0')}</div>
            <button onClick={() => setActive(false)} className="px-6 py-2 bg-red-500 text-white rounded-full">{t('btn_reset')}</button>
         </div>
       )}
    </div>
  );
};

// 25. Reading Time
export const ReadingTime = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/).length;
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-32 p-3 rounded-xl bg-white/70 dark:bg-gray-800/60 dark:text-gray-100 border border-white/60 dark:border-gray-700/50" placeholder={t('label_text')} />
       <ResultCard label={t('result_reading_time')} value={`~${Math.ceil(words/200)} min`} />
    </div>
  );
};

// 26. Password
export const PasswordGenerator = () => {
  const { t } = useLanguage();
  const [len, setLen] = useState('12');
  const [pass, setPass] = useState('');
  const gen = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let res = "";
    for(let i=0; i<parseInt(len); i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
    setPass(res);
  };
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <InputField label={t('label_length')} value={len} onChange={setLen} />
       <button onClick={gen} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">{t('btn_generate')}</button>
       {pass && <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl font-mono text-center break-all select-all dark:text-gray-100">{pass}</div>}
    </div>
  );
};

// 27. Aspect Ratio
export const AspectRatio = () => {
  const { t } = useLanguage();
  const [w, setW] = useState('1920');
  const [h, setH] = useState('1080');
  const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
  const div = gcd(parseInt(w), parseInt(h));
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label={t('label_width')} value={w} onChange={setW} />
        <InputField label={t('label_height')} value={h} onChange={setH} />
      </div>
      <ResultCard label="Ratio" value={`${parseInt(w)/div}:${parseInt(h)/div}`} />
    </div>
  );
};

// 28. Word Counter
export const WordCounter = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-32 p-3 rounded-xl bg-white/70 dark:bg-gray-800/60 dark:text-gray-100 border border-white/60 dark:border-gray-700/50" placeholder={t('label_text')} />
       <div className="grid grid-cols-2 gap-4">
         <ResultCard label={t('result_words')} value={String(text.trim() ? text.trim().split(/\s+/).length : 0)} />
         <ResultCard label={t('result_chars')} value={String(text.length)} />
       </div>
    </div>
  );
};

// 29. Cost Delay
export const CostOfDelay = () => {
  const { t } = useLanguage();
  const [rev, setRev] = useState('1000');
  const [days, setDays] = useState('7');
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label={t('label_daily_loss')} value={rev} onChange={setRev} />
        <InputField label={t('label_days')} value={days} onChange={setDays} />
      </div>
      <ResultCard label={t('result_loss')} value={`$${(parseFloat(rev)*parseFloat(days)).toLocaleString()}`} />
    </div>
  );
};

// 30. Screen Time
export const ScreenTime = () => {
  const { t } = useLanguage();
  const [hrs, setHrs] = useState('4');
  const totalHrs = parseFloat(hrs) * 365;
  const days = totalHrs / 24;
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <InputField label="Daily Hours" value={hrs} onChange={setHrs} />
      <ResultCard label="Days Lost / Year" value={days.toFixed(1)} />
    </div>
  );
};

// 31. Unit Converter
export const UnitConverter = () => {
  const { t } = useLanguage();
  const [val, setVal] = useState('1');
  const [type, setType] = useState('len');
  
  const getRes = () => {
    const v = parseFloat(val);
    if(type === 'len') return `${(v*0.621371).toFixed(2)} mi`;
    if(type === 'wgt') return `${(v*2.20462).toFixed(2)} lbs`;
    if(type === 'vol') return `${(v*0.264172).toFixed(2)} gal`;
    return '-';
  };

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
       <div className="flex bg-white/50 dark:bg-gray-800/50 p-1 rounded-xl mb-4">
         {['len', 'wgt', 'vol'].map(k => (
           <button key={k} onClick={() => setType(k)} className={`flex-1 py-2 text-xs font-bold uppercase rounded-lg transition-all ${type===k ? 'bg-white dark:bg-gray-700 shadow text-indigo-600 dark:text-indigo-300' : 'text-gray-500 dark:text-gray-400'}`}>{k}</button>
         ))}
       </div>
       <InputField label={`Value (${type === 'len' ? 'km' : type === 'wgt' ? 'kg' : 'L'})`} value={val} onChange={setVal} />
       <ResultCard label={t('result_converted')} value={getRes()} />
    </div>
  );
};

// 32. Retirement
export const RetirementEstimator = () => {
  const { t } = useLanguage();
  const [curr, setCurr] = useState('50000');
  const [cont, setCont] = useState('10000');
  const [yrs, setYrs] = useState('20');
  const [rate, setRate] = useState('7');
  
  const r = parseFloat(rate)/100;
  const fv = parseFloat(curr)*Math.pow(1+r, parseFloat(yrs)) + parseFloat(cont) * ((Math.pow(1+r, parseFloat(yrs)) - 1)/r);

  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Current Savings" value={curr} onChange={setCurr} />
        <InputField label="Annual Contrib." value={cont} onChange={setCont} />
        <InputField label="Years" value={yrs} onChange={setYrs} />
        <InputField label="Rate (%)" value={rate} onChange={setRate} />
      </div>
      <ResultCard label={t('result_future_value')} value={`$${fv.toLocaleString(undefined, {maximumFractionDigits:0})}`} />
    </div>
  );
};

// 33. Movie Time
export const MovieRuntime = () => {
  const { t } = useLanguage();
  const [h, setH] = useState('2');
  const [m, setM] = useState('15');
  const total = parseFloat(h)*60 + parseFloat(m);
  return (
    <div className="max-w-md mx-auto space-y-6 bg-white/40 dark:bg-gray-900/40 p-6 rounded-3xl border border-white/50 dark:border-gray-700/50">
      <div className="grid grid-cols-2 gap-4">
        <InputField label={t('label_hours')} value={h} onChange={setH} />
        <InputField label={t('label_minutes')} value={m} onChange={setM} />
      </div>
      <ResultCard label="Total Minutes" value={`${total} min`} subLabel={`${((total/(24*60))*100).toFixed(1)}% of a day`} />
    </div>
  );
};