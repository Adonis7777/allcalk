export type Language = 'en' | 'es' | 'hi' | 'zh';

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    es: string;
    hi: string;
    zh: string;
  };
}

export type Category = 'Health' | 'Finance' | 'Math' | 'Life';

export interface CalculatorConfig {
  id: string;
  nameKey: string; // Key for translation
  descriptionKey: string; // Key for translation
  category: Category;
  iconName: string;
  isReady: boolean;
}

export interface SleepCycle {
  cycles: number;
  hours: number;
  time: string; // HH:MM AM/PM
  status: 'optimal' | 'suboptimal' | 'critical';
}
