import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator } from 'lucide-react';

const SimpleCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNum = (num: string) => {
    if (display === '0' || isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOp = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setIsNewNumber(true);
  };

  const handleEqual = () => {
    try {
      // Basic safe eval equivalent
      const cleanEq = equation + display;
      // eslint-disable-next-line no-eval
      const result = eval(cleanEq.replace('x', '*'));
      setDisplay(String(result));
      setEquation('');
      setIsNewNumber(true);
    } catch (e) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const btnClass = "h-14 md:h-16 rounded-xl text-xl font-medium transition-all active:scale-95 shadow-sm border border-white/20";
  const numClass = `${btnClass} bg-white/60 hover:bg-white/80 text-gray-700`;
  const opClass = `${btnClass} bg-indigo-100 hover:bg-indigo-200 text-indigo-700`;
  const eqClass = `${btnClass} bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 shadow-lg`;

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50">
        
        <div className="flex items-center gap-3 mb-6">
           <div className="p-3 bg-gray-100 rounded-full text-gray-600">
             <Calculator size={24} />
           </div>
           <div>
             <h2 className="text-xl font-bold text-gray-800">{t('calc_simple_name')}</h2>
           </div>
        </div>

        <div className="mb-6 p-4 bg-gray-800/5 rounded-2xl text-right">
           <div className="h-6 text-sm text-gray-500 font-mono mb-1">{equation}</div>
           <div className="text-4xl font-bold text-gray-800 font-mono truncate">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className={`${opClass} col-span-3 text-red-500`}>AC</button>
          <button onClick={() => handleOp('/')} className={opClass}>÷</button>

          {[7, 8, 9].map(n => <button key={n} onClick={() => handleNum(String(n))} className={numClass}>{n}</button>)}
          <button onClick={() => handleOp('*')} className={opClass}>×</button>

          {[4, 5, 6].map(n => <button key={n} onClick={() => handleNum(String(n))} className={numClass}>{n}</button>)}
          <button onClick={() => handleOp('-')} className={opClass}>-</button>

          {[1, 2, 3].map(n => <button key={n} onClick={() => handleNum(String(n))} className={numClass}>{n}</button>)}
          <button onClick={() => handleOp('+')} className={opClass}>+</button>

          <button onClick={() => handleNum('0')} className={`${numClass} col-span-2`}>0</button>
          <button onClick={() => handleNum('.')} className={numClass}>.</button>
          <button onClick={handleEqual} className={eqClass}>=</button>
        </div>

      </div>
    </div>
  );
};

export default SimpleCalculator;
