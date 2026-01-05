import React, { useState, useMemo, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CALCULATORS } from './constants/calculators';
import { CalculatorConfig, Category } from './types';

import SleepCalculator from './components/SleepCalculator';
import SimpleCalculator from './components/SimpleCalculator';

import { 
    MortgageCalculator, AutoLoanCalculator, CompoundInterestCalculator,
    SalaryConverter, InflationCalculator, TipSplitter, ROICalculator,
    VATCalculator, DiscountCalculator, BreakEvenCalculator,
    CreditCardCalculator, FuelCalculator
} from './components/FinanceCalculators';
import { BMICalculator, BMRCalculator, WaterCalculator } from './components/HealthCalculators';
import {
    ScientificCalculator, PercentageCalculator, FractionSimplifier, LCMGCDCalculator,
    PrimeChecker, QuadraticSolver, BaseConverter, TriangleCalculator, CircleSolver,
    VolumeCalculator, SpeedCalculator, ForceCalculator, OhmsLaw, DensityCalculator,
    FrequencyCalculator, EnergyCalculator, RandomGenerator, RoundingTool
} from './components/MathCalculators';
import {
    ExactAge, DateDifference, TimeZoneConverter, WorkHours, PomodoroTimer,
    CountdownTimer, ReadingTime, PasswordGenerator, AspectRatio, WordCounter,
    CostOfDelay, ScreenTime, UnitConverter, RetirementEstimator, MovieRuntime
} from './components/LifeCalculators';

import { 
    LayoutGrid, Search, Globe, Menu, Activity, DollarSign, Calculator, 
    Coffee, Heart, ChevronLeft, Moon, Sun
} from 'lucide-react';

// Icons mapping helper
const IconMap: {[key: string]: React.ElementType} = {
    Activity, DollarSign, Calculator, Coffee, Heart, LayoutGrid, Search, Globe, Menu, ChevronLeft, Moon, Sun
};

const Header: React.FC<{ 
    onToggleSidebar: () => void, 
    activeCalc: CalculatorConfig | null,
    onBack: () => void 
}> = ({ onToggleSidebar, activeCalc, onBack }) => {
    const { language, setLanguage, t } = useLanguage();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialDark = savedTheme === 'dark' || (!savedTheme && systemDark);
        setIsDark(initialDark);
        if (initialDark) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.add('light');
        }
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        if (newDark) {
            document.documentElement.classList.add('dark');
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    };
    
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800 z-50 px-4 flex items-center justify-between shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-4">
                {activeCalc ? (
                    <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                        <ChevronLeft className="text-gray-700 dark:text-gray-200" />
                    </button>
                ) : (
                    <button onClick={onToggleSidebar} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                        <Menu className="text-gray-700 dark:text-gray-200" />
                    </button>
                )}
                
                <div className="flex items-center gap-3">
                    {!activeCalc && (
                        <img 
                            src="/app-logo.png" 
                            alt="AllCalculator Logo"
                            className="h-9 w-9 object-contain rounded-lg shadow-sm block"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none'; 
                                e.currentTarget.nextElementSibling?.classList.remove('hidden', 'md:block');
                            }}
                        />
                    )}

                    <h1 className={`font-bold text-xl text-gray-800 dark:text-white tracking-tight ${activeCalc ? 'block' : 'hidden md:block'} transition-colors`}>
                        {activeCalc ? t(activeCalc.nameKey) : 'AllCalculator'}
                    </h1>
                </div>

            </div>

            <div className="flex items-center gap-2">
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="relative group">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all text-sm font-medium text-gray-700 dark:text-gray-200">
                        <Globe size={16} />
                        <span className="uppercase">{language}</span>
                    </button>
                    
                    <div className="absolute right-0 top-full mt-2 w-40 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden hidden group-hover:block animate-fade-in z-50">
                        {[
                            { code: 'en', label: 'English' },
                            { code: 'es', label: 'Español' },
                            { code: 'hi', label: 'हिंदी' },
                            { code: 'zh', label: '中文' }
                        ].map(lang => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code as any)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 ${language === lang.code ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-900/20' : 'text-gray-600 dark:text-gray-400'}`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

const Sidebar: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    selectedCategory: Category | 'All';
    onSelectCategory: (c: Category | 'All') => void;
}> = ({ isOpen, onClose, selectedCategory, onSelectCategory }) => {
    const { t } = useLanguage();
    const categories: (Category | 'All')[] = ['All', 'Health', 'Finance', 'Math', 'Life'];

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />}
            
            <aside className={`fixed top-16 left-0 bottom-0 w-64 bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-r border-white/40 dark:border-gray-800 z-40 transition-all duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4">
                    <div className="space-y-1">
                        {categories.map(cat => {
                            const label = cat === 'All' ? 'All' : t(`cat_${cat.toLowerCase()}`);
                            return (
                                <button
                                    key={cat}
                                    onClick={() => { onSelectCategory(cat); onClose(); }}
                                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 font-medium
                                        ${selectedCategory === cat 
                                            ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-100 dark:border-indigo-800/50' 
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`}
                                >
                                    {cat === 'All' ? <LayoutGrid size={18} /> : 
                                        cat === 'Health' ? <Activity size={18} /> :
                                        cat === 'Finance' ? <DollarSign size={18} /> :
                                        cat === 'Math' ? <Calculator size={18} /> : <Coffee size={18} />}
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white shadow-lg">
                    <p className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">Pro Version</p>
                    <h3 className="font-bold mb-2">Unlock Unlimited</h3>
                    <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm backdrop-blur-sm transition-colors">
                        Upgrade
                    </button>
                </div>
            </aside>
        </>
    );
};

const MainContent: React.FC = () => {
    const { t } = useLanguage();
    const [activeCalcId, setActiveCalcId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const activeCalculator = useMemo(() => 
        CALCULATORS.find(c => c.id === activeCalcId) || null, 
    [activeCalcId]);

    const filteredCalculators = useMemo(() => {
        return CALCULATORS.filter(calc => {
            const matchesSearch = t(calc.nameKey).toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCat = selectedCategory === 'All' || calc.category === selectedCategory;
            return matchesSearch && matchesCat;
        });
    }, [searchQuery, selectedCategory, t]);

    const renderActiveCalculator = () => {
        switch (activeCalcId) {
            case 'sleep-pro': return <SleepCalculator />;
            case 'calc-bmi': return <BMICalculator />;
            case 'calc-bmr': return <BMRCalculator />;
            case 'calc-water': return <WaterCalculator />;
            case 'calc-mortgage': return <MortgageCalculator />;
            case 'calc-auto-loan': return <AutoLoanCalculator />;
            case 'calc-compound': return <CompoundInterestCalculator />;
            case 'calc-salary': return <SalaryConverter />;
            case 'calc-inflation': return <InflationCalculator />;
            case 'calc-tip': return <TipSplitter />;
            case 'calc-roi': return <ROICalculator />;
            case 'calc-vat': return <VATCalculator />;
            case 'calc-discount': return <DiscountCalculator />;
            case 'calc-breakeven': return <BreakEvenCalculator />;
            case 'calc-credit': return <CreditCardCalculator />;
            case 'calc-fuel': return <FuelCalculator />;
            case 'simple-math': return <SimpleCalculator />;
            case 'calc-scientific': return <ScientificCalculator />;
            case 'calc-percentage': return <PercentageCalculator />;
            case 'calc-fraction': return <FractionSimplifier />;
            case 'calc-lcm-gcd': return <LCMGCDCalculator />;
            case 'calc-prime': return <PrimeChecker />;
            case 'calc-quadratic': return <QuadraticSolver />;
            case 'calc-base': return <BaseConverter />;
            case 'calc-triangle': return <TriangleCalculator />;
            case 'calc-circle': return <CircleSolver />;
            case 'calc-volume': return <VolumeCalculator />;
            case 'calc-speed': return <SpeedCalculator />;
            case 'calc-force': return <ForceCalculator />;
            case 'calc-ohm': return <OhmsLaw />;
            case 'calc-density': return <DensityCalculator />;
            case 'calc-frequency': return <FrequencyCalculator />;
            case 'calc-energy': return <EnergyCalculator />;
            case 'calc-random': return <RandomGenerator />;
            case 'calc-rounding': return <RoundingTool />;
            case 'calc-age': return <ExactAge />;
            case 'calc-date-diff': return <DateDifference />;
            case 'calc-timezone': return <TimeZoneConverter />;
            case 'calc-work': return <WorkHours />;
            case 'calc-pomodoro': return <PomodoroTimer />;
            case 'calc-countdown': return <CountdownTimer />;
            case 'calc-reading': return <ReadingTime />;
            case 'calc-password': return <PasswordGenerator />;
            case 'calc-aspect': return <AspectRatio />;
            case 'calc-word': return <WordCounter />;
            case 'calc-cost-delay': return <CostOfDelay />;
            case 'calc-screen': return <ScreenTime />;
            case 'calc-unit': return <UnitConverter />;
            case 'calc-retirement': return <RetirementEstimator />;
            case 'calc-movie': return <MovieRuntime />;
            default: return (
                <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8 animate-fade-in">
                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-gray-400 dark:text-gray-500">
                        <Activity size={40} /> 
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{t('coming_soon')}</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        This calculator is not implemented yet.
                    </p>
                    <button 
                        onClick={() => setActiveCalcId(null)}
                        className="mt-8 px-6 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                    >
                        {t('back_to_home')}
                    </button>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen pt-16 lg:pl-64 transition-all duration-300">
            <Header 
                onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
                activeCalc={activeCalculator}
                onBack={() => setActiveCalcId(null)}
            />
            
            <Sidebar 
                isOpen={isSidebarOpen} 
                onClose={() => setSidebarOpen(false)}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <main className="p-4 md:p-8 max-w-7xl mx-auto">
                {activeCalcId ? (
                    <div className="animate-fade-in">
                        {renderActiveCalculator()}
                    </div>
                ) : (
                    <div className="space-y-8 animate-fade-in">
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder={t('search_placeholder')}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-gray-700 dark:text-gray-200 placeholder-gray-400"
                            />
                        </div>

                        <div className="lg:hidden flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 scrollbar-hide">
                            {['All', 'Health', 'Finance', 'Math', 'Life'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat as any)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-white/50 dark:border-gray-700'}`}
                                >
                                    {cat === 'All' ? 'All' : t(`cat_${cat.toLowerCase()}`)}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                            {filteredCalculators.map((calc) => {
                                const Icon = IconMap[calc.iconName] || Activity;
                                return (
                                    <button
                                        key={calc.id}
                                        onClick={() => setActiveCalcId(calc.id)}
                                        className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-4 border border-white/60 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-left flex flex-col h-full"
                                    >
                                        {!calc.isReady && (
                                            <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded-md opacity-60">
                                                Soon
                                            </span>
                                        )}
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${calc.isReady ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm md:text-base mb-1 leading-tight">{t(calc.nameKey)}</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">{t(calc.descriptionKey)}</p>
                                        
                                        <div className="mt-auto pt-3 flex items-center text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                                            {t(`cat_${calc.category.toLowerCase()}`)}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                        
                        {filteredCalculators.length === 0 && (
                            <div className="text-center py-20 text-gray-400">
                                <p>No calculators found.</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <MainContent />
        </LanguageProvider>
    );
};

export default App;