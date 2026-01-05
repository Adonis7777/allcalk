import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SleepCycle } from '../types';
import { Clock, Moon, Sun, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const SleepCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [mode, setMode] = useState<'wake' | 'sleep'>('wake');
  const [time, setTime] = useState<string>('07:00');
  const [results, setResults] = useState<SleepCycle[]>([]);

  const calculateTimes = () => {
    const [hours, minutes] = time.split(':').map(Number);
    const baseDate = new Date();
    baseDate.setHours(hours, minutes, 0, 0);

    const cycles: SleepCycle[] = [];
    // We calculate 6 cycles (9 hours) down to 1 cycle (1.5 hours)
    // A cycle is 90 minutes. 
    // Usually 15 min to fall asleep is added in real apps, but for strict 90m cycles we adhere to the prompt logic strictly first.
    // Prompt says: "Strict 90-minute REM cycles."
    
    // We will generate 6 options (from 6 cycles down to 1)
    for (let c = 6; c >= 1; c--) {
      const cycleMinutes = c * 90;
      const calculatedDate = new Date(baseDate.getTime());
      
      if (mode === 'wake') {
        // If I want to wake at X, I need to sleep Y minutes BEFORE X.
        calculatedDate.setMinutes(baseDate.getMinutes() - cycleMinutes);
      } else {
        // If I sleep at X, I should wake Y minutes AFTER X.
        calculatedDate.setMinutes(baseDate.getMinutes() + cycleMinutes);
      }

      const hoursDuration = cycleMinutes / 60;
      
      let status: 'optimal' | 'suboptimal' | 'critical' = 'suboptimal';
      if (hoursDuration < 4) status = 'critical';
      else if (hoursDuration >= 7.5) status = 'optimal';
      
      cycles.push({
        cycles: c,
        hours: hoursDuration,
        time: calculatedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status
      });
    }
    
    // If calculating wake times (forward), earlier times (less sleep) come first in the loop above?
    // Actually, for "I plan to sleep at X", 1 cycle later is +1.5h. 6 cycles later is +9h.
    // We should probably sort them chronologically or by preference.
    // Usually people want the Optimal ones first.
    
    // Let's sort by recommended (Optimal first)
    cycles.sort((a, b) => {
        // Custom sort: Optimal -> Suboptimal -> Critical
        const score = (s: string) => s === 'optimal' ? 3 : s === 'suboptimal' ? 2 : 1;
        return score(b.status) - score(a.status);
    });

    setResults(cycles);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
            <Moon size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{t('calc_sleep_name')}</h2>
            <p className="text-gray-500 text-sm">{t('calc_sleep_desc')}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600 uppercase tracking-wider">Mode</label>
            <div className="flex bg-gray-200/50 p-1 rounded-xl">
              <button 
                onClick={() => setMode('wake')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all ${mode === 'wake' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Sun size={16} /> {t('sleep_input_wake')}
              </button>
              <button 
                onClick={() => setMode('sleep')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all ${mode === 'sleep' ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Moon size={16} /> {t('sleep_input_sleep')}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
             <label className="text-sm font-medium text-gray-600 uppercase tracking-wider">Time</label>
             <div className="relative">
                <input 
                  type="time" 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-3 bg-white/70 border border-white/60 rounded-xl text-lg font-mono text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
             </div>
          </div>
        </div>

        <button 
          onClick={calculateTimes}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-[1.01] active:scale-[0.98] mb-8"
        >
          {t('sleep_btn_calc')}
        </button>

        {/* Results */}
        {results.length > 0 && (
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-500" />
              {t('sleep_result_title')}
            </h3>
            
            <div className="grid gap-3">
              {results.map((res, idx) => (
                <div 
                  key={idx}
                  className={`relative p-4 rounded-xl border flex items-center justify-between transition-all hover:shadow-md
                    ${res.status === 'optimal' ? 'bg-green-50/80 border-green-200' : 
                      res.status === 'suboptimal' ? 'bg-orange-50/80 border-orange-200' : 
                      'bg-red-50/80 border-red-200'}
                  `}
                >
                  <div className="flex items-center gap-4">
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                       ${res.status === 'optimal' ? 'bg-green-100 text-green-700' : 
                         res.status === 'suboptimal' ? 'bg-orange-100 text-orange-700' : 
                         'bg-red-100 text-red-700'}
                     `}>
                       {res.cycles}
                     </div>
                     <div>
                       <div className="text-2xl font-bold text-gray-800">{res.time}</div>
                       <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                         {res.hours} {t('sleep_hours_label')} • {t('sleep_cycles_label')}
                       </div>
                     </div>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                     ${res.status === 'optimal' ? 'bg-green-200 text-green-800' : 
                       res.status === 'suboptimal' ? 'bg-orange-200 text-orange-800' : 
                       'bg-red-200 text-red-800'}
                  `}>
                    {t(`status_${res.status}`)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-blue-50/50 rounded-lg text-xs text-blue-600 flex gap-2">
               <Info size={16} className="shrink-0" />
               <p>Calculations assume strict 90-minute REM cycles. Average human takes 14 minutes to fall asleep.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SleepCalculator;
