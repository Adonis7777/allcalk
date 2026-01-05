import { CalculatorConfig, Category } from '../types';

const CATEGORIES: Category[] = ['Health', 'Finance', 'Math', 'Life'];
const ICONS = ['Activity', 'DollarSign', 'Calculator', 'Coffee', 'Heart', 'Percent', 'Sun', 'Moon'];

// Helper to generate fillers (only if needed, but we have 48 specific ones now + 2 fillers)
const generateFillers = (count: number, startId: number): CalculatorConfig[] => {
  return Array.from({ length: count }).map((_, i) => {
    const catIndex = (i + startId) % CATEGORIES.length;
    return {
      id: `calc-generic-${startId + i}`,
      nameKey: 'calc_simple_name', 
      descriptionKey: 'calc_simple_desc',
      category: CATEGORIES[catIndex],
      iconName: ICONS[(startId + i) % ICONS.length],
      isReady: false
    };
  });
};

export const CALCULATORS: CalculatorConfig[] = [
  // --- HEALTH (4) ---
  { id: 'sleep-pro', nameKey: 'calc_sleep_name', descriptionKey: 'calc_sleep_desc', category: 'Health', iconName: 'Moon', isReady: true },
  { id: 'calc-bmi', nameKey: 'calc_bmi_name', descriptionKey: 'calc_bmi_desc', category: 'Health', iconName: 'Activity', isReady: true },
  { id: 'calc-bmr', nameKey: 'calc_bmr_name', descriptionKey: 'calc_bmr_desc', category: 'Health', iconName: 'Heart', isReady: true },
  { id: 'calc-water', nameKey: 'calc_water_name', descriptionKey: 'calc_water_desc', category: 'Health', iconName: 'Coffee', isReady: true },

  // --- FINANCE (12) ---
  { id: 'calc-mortgage', nameKey: 'calc_mortgage_name', descriptionKey: 'calc_mortgage_desc', category: 'Finance', iconName: 'DollarSign', isReady: true },
  { id: 'calc-auto-loan', nameKey: 'calc_auto_name', descriptionKey: 'calc_auto_desc', category: 'Finance', iconName: 'DollarSign', isReady: true },
  { id: 'calc-compound', nameKey: 'calc_compound_name', descriptionKey: 'calc_compound_desc', category: 'Finance', iconName: 'Percent', isReady: true },
  { id: 'calc-salary', nameKey: 'calc_salary_name', descriptionKey: 'calc_salary_desc', category: 'Finance', iconName: 'DollarSign', isReady: true },
  { id: 'calc-inflation', nameKey: 'calc_inflation_name', descriptionKey: 'calc_inflation_desc', category: 'Finance', iconName: 'Activity', isReady: true },
  { id: 'calc-tip', nameKey: 'calc_tip_name', descriptionKey: 'calc_tip_desc', category: 'Finance', iconName: 'Coffee', isReady: true },
  { id: 'calc-roi', nameKey: 'calc_roi_name', descriptionKey: 'calc_roi_desc', category: 'Finance', iconName: 'Percent', isReady: true },
  { id: 'calc-vat', nameKey: 'calc_vat_name', descriptionKey: 'calc_vat_desc', category: 'Finance', iconName: 'DollarSign', isReady: true },
  { id: 'calc-discount', nameKey: 'calc_discount_name', descriptionKey: 'calc_discount_desc', category: 'Finance', iconName: 'Percent', isReady: true },
  { id: 'calc-breakeven', nameKey: 'calc_breakeven_name', descriptionKey: 'calc_breakeven_desc', category: 'Finance', iconName: 'Activity', isReady: true },
  { id: 'calc-credit', nameKey: 'calc_credit_name', descriptionKey: 'calc_credit_desc', category: 'Finance', iconName: 'DollarSign', isReady: true },
  { id: 'calc-fuel', nameKey: 'calc_fuel_name', descriptionKey: 'calc_fuel_desc', category: 'Finance', iconName: 'Coffee', isReady: true },

  // --- MATH & SCIENCE (19) ---
  { id: 'simple-math', nameKey: 'calc_simple_name', descriptionKey: 'calc_simple_desc', category: 'Math', iconName: 'Calculator', isReady: true },
  { id: 'calc-scientific', nameKey: 'calc_scientific_name', descriptionKey: 'calc_scientific_desc', category: 'Math', iconName: 'Calculator', isReady: true },
  { id: 'calc-percentage', nameKey: 'calc_percentage_name', descriptionKey: 'calc_percentage_desc', category: 'Math', iconName: 'Percent', isReady: true },
  { id: 'calc-fraction', nameKey: 'calc_fraction_name', descriptionKey: 'calc_fraction_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-lcm-gcd', nameKey: 'calc_lcm_gcd_name', descriptionKey: 'calc_lcm_gcd_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-prime', nameKey: 'calc_prime_name', descriptionKey: 'calc_prime_desc', category: 'Math', iconName: 'Calculator', isReady: true },
  { id: 'calc-quadratic', nameKey: 'calc_quadratic_name', descriptionKey: 'calc_quadratic_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-base', nameKey: 'calc_base_name', descriptionKey: 'calc_base_desc', category: 'Math', iconName: 'Calculator', isReady: true },
  { id: 'calc-triangle', nameKey: 'calc_triangle_name', descriptionKey: 'calc_triangle_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-circle', nameKey: 'calc_circle_name', descriptionKey: 'calc_circle_desc', category: 'Math', iconName: 'Sun', isReady: true },
  { id: 'calc-volume', nameKey: 'calc_volume_name', descriptionKey: 'calc_volume_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-speed', nameKey: 'calc_speed_name', descriptionKey: 'calc_speed_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-force', nameKey: 'calc_force_name', descriptionKey: 'calc_force_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-ohm', nameKey: 'calc_ohm_name', descriptionKey: 'calc_ohm_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-density', nameKey: 'calc_density_name', descriptionKey: 'calc_density_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-frequency', nameKey: 'calc_frequency_name', descriptionKey: 'calc_frequency_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-energy', nameKey: 'calc_energy_name', descriptionKey: 'calc_energy_desc', category: 'Math', iconName: 'Activity', isReady: true },
  { id: 'calc-random', nameKey: 'calc_random_name', descriptionKey: 'calc_random_desc', category: 'Math', iconName: 'Calculator', isReady: true },
  { id: 'calc-rounding', nameKey: 'calc_rounding_name', descriptionKey: 'calc_rounding_desc', category: 'Math', iconName: 'Calculator', isReady: true },

  // --- LIFE & TIME (15) ---
  { id: 'calc-age', nameKey: 'calc_age_name', descriptionKey: 'calc_age_desc', category: 'Life', iconName: 'Calendar', isReady: true },
  { id: 'calc-date-diff', nameKey: 'calc_date_diff_name', descriptionKey: 'calc_date_diff_desc', category: 'Life', iconName: 'Calendar', isReady: true },
  { id: 'calc-timezone', nameKey: 'calc_timezone_name', descriptionKey: 'calc_timezone_desc', category: 'Life', iconName: 'Globe', isReady: true },
  { id: 'calc-work', nameKey: 'calc_work_name', descriptionKey: 'calc_work_desc', category: 'Life', iconName: 'Coffee', isReady: true },
  { id: 'calc-pomodoro', nameKey: 'calc_pomodoro_name', descriptionKey: 'calc_pomodoro_desc', category: 'Life', iconName: 'Coffee', isReady: true },
  { id: 'calc-countdown', nameKey: 'calc_countdown_name', descriptionKey: 'calc_countdown_desc', category: 'Life', iconName: 'Activity', isReady: true },
  { id: 'calc-reading', nameKey: 'calc_reading_name', descriptionKey: 'calc_reading_desc', category: 'Life', iconName: 'Coffee', isReady: true },
  { id: 'calc-password', nameKey: 'calc_password_name', descriptionKey: 'calc_password_desc', category: 'Life', iconName: 'Activity', isReady: true },
  { id: 'calc-aspect', nameKey: 'calc_aspect_name', descriptionKey: 'calc_aspect_desc', category: 'Life', iconName: 'Activity', isReady: true },
  { id: 'calc-word', nameKey: 'calc_word_name', descriptionKey: 'calc_word_desc', category: 'Life', iconName: 'Activity', isReady: true },
  { id: 'calc-cost-delay', nameKey: 'calc_cost_delay_name', descriptionKey: 'calc_cost_delay_desc', category: 'Life', iconName: 'DollarSign', isReady: true },
  { id: 'calc-screen', nameKey: 'calc_screen_name', descriptionKey: 'calc_screen_desc', category: 'Life', iconName: 'Activity', isReady: true },
  { id: 'calc-unit', nameKey: 'calc_unit_name', descriptionKey: 'calc_unit_desc', category: 'Life', iconName: 'Activity', isReady: true },
  { id: 'calc-retirement', nameKey: 'calc_retirement_name', descriptionKey: 'calc_retirement_desc', category: 'Life', iconName: 'DollarSign', isReady: true },
  { id: 'calc-movie', nameKey: 'calc_movie_name', descriptionKey: 'calc_movie_desc', category: 'Life', iconName: 'Coffee', isReady: true }
];