import { TranslationDictionary } from '../types';

export const TRANSLATIONS: TranslationDictionary = {
  // General App
  app_title: {
    en: "AllCalculator Global",
    es: "AllCalculator Global",
    hi: "ऑल-कैलकुलेटर ग्लोबल",
    zh: "全球万能计算器"
  },
  search_placeholder: {
    en: "Find tool...",
    es: "Buscar herramienta...",
    hi: "खोजें...",
    zh: "搜索工具..."
  },
  coming_soon: {
    en: "Coming Soon",
    es: "Próximamente",
    hi: "जल्द आ रहा है",
    zh: "即将推出"
  },
  back_to_home: {
    en: "Dashboard",
    es: "Tablero",
    hi: "डैशबोर्ड",
    zh: "仪表板"
  },
  hint_number: {
    en: "Enter a number",
    es: "Ingresa un número",
    hi: "एक संख्या दर्ज करें",
    zh: "输入数字"
  },
  hint_date: {
    en: "Select a date",
    es: "Selecciona fecha",
    hi: "तारीख चुनें",
    zh: "选择日期"
  },
  tooltip_info: {
    en: "Calculation Result",
    es: "Resultado del cálculo",
    hi: "गणना परिणाम",
    zh: "计算结果"
  },
  
  // Categories
  cat_health: { en: "Health", es: "Salud", hi: "स्वास्थ्य", zh: "健康" },
  cat_finance: { en: "Finance", es: "Finanzas", hi: "वित्त", zh: "金融" },
  cat_math: { en: "Math", es: "Matemáticas", hi: "गणित", zh: "数学" },
  cat_life: { en: "Life", es: "Vida", hi: "जीवन शैली", zh: "生活" },

  // --- EXISTING HEALTH & FINANCE TRANSLATIONS (Shortened for context, strictly keeping necessary ones) ---
  calc_sleep_name: { en: "Sleep Cycle Pro", es: "Ciclo de Sueño Pro", hi: "स्लीप साइकिल प्रो", zh: "睡眠周期专业版" },
  calc_sleep_desc: { en: "Optimize your rest with REM cycle tracking.", es: "Optimiza tu descanso con seguimiento REM.", hi: "REM चक्र ट्रैकिंग के साथ अपने आराम को अनुकूलित करें।", zh: "通过快速眼动周期跟踪优化您的休息。" },
  sleep_input_wake: { en: "I want to wake up at", es: "Quiero despertarme a las", hi: "मैं उठना चाहता हूँ", zh: "我想起床的时间" },
  sleep_input_sleep: { en: "I plan to sleep at", es: "Planeo dormir a las", hi: "मैं सोने की योजना बना रहा हूँ", zh: "我打算睡觉的时间" },
  sleep_btn_calc: { en: "Calculate Best Times", es: "Calcular Mejores Horas", hi: "सर्वोत्तम समय की गणना करें", zh: "计算最佳时间" },
  sleep_result_title: { en: "Recommended Times", es: "Horarios Recomendados", hi: "अनुशंसित समय", zh: "推荐时间" },
  status_optimal: { en: "Optimal", es: "Óptimo", hi: "सर्वोत्तम", zh: "最佳" },
  status_suboptimal: { en: "Suboptimal", es: "Subóptimo", hi: "कम इष्टतम", zh: "次佳" },
  status_critical: { en: "Critical", es: "Peligro", hi: "गंभीर", zh: "危险" },
  sleep_cycles_label: { en: "Cycles", es: "Ciclos", hi: "चक्र", zh: "周期" },
  sleep_hours_label: { en: "Hours", es: "Horas", hi: "घंटे", zh: "小时" },
  
  // Simple Calc
  calc_simple_name: { en: "Simple Calculator", es: "Calculadora Simple", hi: "साधारण कैलकुलेटर", zh: "简易计算器" },
  calc_simple_desc: { en: "Basic arithmetic operations.", es: "Operaciones aritméticas básicas.", hi: "बुनियादी अंकगणितीय संचालन।", zh: "基本算术运算。" },

  // --- MATH & SCIENCE CALCULATORS ---
  calc_scientific_name: { en: "Scientific Calculator", es: "Calculadora Científica", hi: "वैज्ञानिक कैलकुलेटर", zh: "科学计算器" },
  calc_scientific_desc: { en: "Sin, Cos, Tan, Log, Sqrt.", es: "Sen, Cos, Tan, Log, Raíz.", hi: "Sin, Cos, Tan, Log, Sqrt.", zh: "三角函数、对数、平方根。" },
  
  calc_percentage_name: { en: "Percentage Calculator", es: "Calculadora de Porcentajes", hi: "प्रतिशत कैलकुलेटर", zh: "百分比计算器" },
  calc_percentage_desc: { en: "Solve for X, Y, or %.", es: "Resolver para X, Y o %.", hi: "X, Y या % के लिए हल करें।", zh: "求解 X, Y 或 %。" },

  calc_fraction_name: { en: "Fraction Simplifier", es: "Simplificador de Fracciones", hi: "भिन्न सरलीकरण", zh: "分数简化器" },
  calc_fraction_desc: { en: "Reduce fractions to simplest form.", es: "Reducir fracciones.", hi: "भिन्नों को सरलतम रूप में छोटा करें।", zh: "将分数化简为最简形式。" },

  calc_lcm_gcd_name: { en: "LCM & GCD", es: "MCM y MCD", hi: "लघुत्तम और महत्तम", zh: "最小公倍数 & 最大公约数" },
  calc_lcm_gcd_desc: { en: "Least Common Multiple / Greatest Divisor.", es: "Mínimo Común Múltiplo / Máximo Divisor.", hi: "लघुत्तम समापवर्त्य / महत्तम समापवर्तक।", zh: "最小公倍数 / 最大公约数。" },

  calc_prime_name: { en: "Prime Checker", es: "Verificador de Primos", hi: "अभाज्य संख्या जांचकर्ता", zh: "质数检查器" },
  calc_prime_desc: { en: "Check if a number is prime.", es: "Verificar si es número primo.", hi: "जांचें कि क्या कोई संख्या अभाज्य है।", zh: "检查数字是否为质数。" },

  calc_quadratic_name: { en: "Quadratic Solver", es: "Ecuación Cuadrática", hi: "द्विघात समीकरण", zh: "一元二次方程求解" },
  calc_quadratic_desc: { en: "Solve ax² + bx + c = 0.", es: "Resolver ax² + bx + c = 0.", hi: "ax² + bx + c = 0 हल करें।", zh: "求解 ax² + bx + c = 0。" },

  calc_base_name: { en: "Base Converter", es: "Conversor de Base", hi: "आधार परिवर्तक", zh: "进制转换器" },
  calc_base_desc: { en: "Binary, Decimal, Hexadecimal.", es: "Binario, Decimal, Hexadecimal.", hi: "बाइनरी, दशमलव, हेक्साडेसिमल।", zh: "二进制、十进制、十六进制。" },

  calc_triangle_name: { en: "Triangle Calculator", es: "Calculadora de Triángulos", hi: "त्रिभुज कैलकुलेटर", zh: "三角形计算器" },
  calc_triangle_desc: { en: "Calculate Area using Base/Height or Sides.", es: "Calcular Área.", hi: "क्षेत्रफल की गणना करें।", zh: "计算面积。" },

  calc_circle_name: { en: "Circle Solver", es: "Calculadora de Círculos", hi: "वृत्त कैलकुलेटर", zh: "圆形计算器" },
  calc_circle_desc: { en: "Area, Circumference, Diameter.", es: "Área, Circunferencia, Diámetro.", hi: "क्षेत्रफल, परिधि, व्यास।", zh: "面积、周长、直径。" },

  calc_volume_name: { en: "Volume Calculator", es: "Calculadora de Volumen", hi: "आयतन कैलकुलेटर", zh: "体积计算器" },
  calc_volume_desc: { en: "Cylinder, Cube, Sphere.", es: "Cilindro, Cubo, Esfera.", hi: "बेलन, घन, गोला।", zh: "圆柱体、立方体、球体。" },

  calc_speed_name: { en: "Speed Distance Time", es: "Velocidad Distancia Tiempo", hi: "गति दूरी समय", zh: "速度 距离 时间" },
  calc_speed_desc: { en: "Calculate the missing variable.", es: "Calcular la variable faltante.", hi: "लापता चर की गणना करें।", zh: "计算缺失变量。" },

  calc_force_name: { en: "Force Calculator", es: "Calculadora de Fuerza", hi: "बल कैलकुलेटर", zh: "力学计算器" },
  calc_force_desc: { en: "Newton's Second Law (F=ma).", es: "Segunda Ley de Newton (F=ma).", hi: "न्यूटन का दूसरा नियम (F=ma)।", zh: "牛顿第二定律 (F=ma)。" },

  calc_ohm_name: { en: "Ohm's Law", es: "Ley de Ohm", hi: "ओम का नियम", zh: "欧姆定律" },
  calc_ohm_desc: { en: "Voltage, Current, Resistance, Power.", es: "Voltaje, Corriente, Resistencia.", hi: "वोल्टेज, करंट, रेजिस्टेंस।", zh: "电压、电流、电阻、功率。" },

  calc_density_name: { en: "Density Calculator", es: "Calculadora de Densidad", hi: "घनत्व कैलकुलेटर", zh: "密度计算器" },
  calc_density_desc: { en: "Mass, Volume, Density.", es: "Masa, Volumen, Densidad.", hi: "द्रव्यमान, आयतन, घनत्व।", zh: "质量、体积、密度。" },

  calc_frequency_name: { en: "Wavelength Frequency", es: "Longitud de Onda", hi: "तरंग दैर्ध्य आवृत्ति", zh: "波长频率" },
  calc_frequency_desc: { en: "Using speed of light.", es: "Usando la velocidad de la luz.", hi: "प्रकाश की गति का उपयोग करना।", zh: "利用光速计算。" },

  calc_energy_name: { en: "Kinetic Energy", es: "Energía Cinética", hi: "गतिज ऊर्जा", zh: "动能计算器" },
  calc_energy_desc: { en: "Based on Mass and Velocity.", es: "Basado en Masa y Velocidad.", hi: "द्रव्यमान और वेग पर आधारित।", zh: "基于质量和速度。" },

  calc_random_name: { en: "Random Generator", es: "Generador Aleatorio", hi: "रैंडम जनरेटर", zh: "随机数生成器" },
  calc_random_desc: { en: "Generate random numbers.", es: "Generar números aleatorios.", hi: "रैंडम नंबर जेनरेट करें।", zh: "生成随机数。" },

  calc_rounding_name: { en: "Rounding Tool", es: "Herramienta de Redondeo", hi: "राउंडिंग टूल", zh: "舍入工具" },
  calc_rounding_desc: { en: "Round decimals.", es: "Redondear decimales.", hi: "दशमलव को राउंड करें।", zh: "小数舍入。" },

  // --- LIFE & TIME CALCULATORS ---
  calc_age_name: { en: "Exact Age", es: "Edad Exacta", hi: "सटीक आयु", zh: "精确年龄" },
  calc_age_desc: { en: "Years, months, days lived.", es: "Años, meses, días vividos.", hi: "वर्ष, महीने, दिन।", zh: "年、月、日。" },

  calc_date_diff_name: { en: "Date Difference", es: "Diferencia de Fechas", hi: "तारीख अंतर", zh: "日期差异" },
  calc_date_diff_desc: { en: "Days between two dates.", es: "Días entre dos fechas.", hi: "दो तारीखों के बीच के दिन।", zh: "两个日期之间的天数。" },

  calc_timezone_name: { en: "Time Zone Converter", es: "Conversor de Zona Horaria", hi: "समय क्षेत्र परिवर्तक", zh: "时区转换器" },
  calc_timezone_desc: { en: "Check time across zones.", es: "Verificar hora entre zonas.", hi: "ज़ोन में समय जांचें।", zh: "跨时区时间查询。" },

  calc_work_name: { en: "Work Hours", es: "Horas de Trabajo", hi: "काम के घंटे", zh: "工作工时" },
  calc_work_desc: { en: "Billable hours calculator.", es: "Calculadora de horas facturables.", hi: "बिल योग्य घंटे कैलकुलेटर।", zh: "计费工时计算器。" },

  calc_pomodoro_name: { en: "Pomodoro Timer", es: "Temporizador Pomodoro", hi: "पोमोडोरो टाइमर", zh: "番茄钟" },
  calc_pomodoro_desc: { en: "Focus and break timer.", es: "Temporizador de enfoque y descanso.", hi: "फोकस और ब्रेक टाइमर।", zh: "专注与休息计时器。" },

  calc_countdown_name: { en: "Countdown Timer", es: "Cuenta Regresiva", hi: "उल्टी गिनती", zh: "倒计时" },
  calc_countdown_desc: { en: "Set a custom timer.", es: "Configurar temporizador.", hi: "टाइमर सेट करें।", zh: "设置倒计时。" },

  calc_reading_name: { en: "Reading Time", es: "Tiempo de Lectura", hi: "पढ़ने का समय", zh: "阅读时间" },
  calc_reading_desc: { en: "Estimate reading duration.", es: "Estimar duración de lectura.", hi: "पढ़ने की अवधि का अनुमान लगाएं।", zh: "估算阅读时长。" },

  calc_password_name: { en: "Password Generator", es: "Generador de Contraseñas", hi: "पासवर्ड जनरेटर", zh: "密码生成器" },
  calc_password_desc: { en: "Secure random passwords.", es: "Contraseñas aleatorias seguras.", hi: "सुरक्षित रैंडम पासवर्ड।", zh: "生成安全随机密码。" },

  calc_aspect_name: { en: "Aspect Ratio", es: "Relación de Aspecto", hi: "आस्पेक्ट रेश्यो", zh: "纵横比" },
  calc_aspect_desc: { en: "Calculate dimensions.", es: "Calcular dimensiones.", hi: "आयामों की गणना करें।", zh: "计算尺寸。" },

  calc_word_name: { en: "Word Counter", es: "Contador de Palabras", hi: "शब्द गणक", zh: "字数统计" },
  calc_word_desc: { en: "Count words and characters.", es: "Contar palabras y caracteres.", hi: "शब्द और अक्षर गिनें।", zh: "统计字数和字符。" },

  calc_cost_delay_name: { en: "Cost of Delay", es: "Costo del Retraso", hi: "देरी की लागत", zh: "延误成本" },
  calc_cost_delay_desc: { en: "Calculate revenue loss.", es: "Calcular pérdida de ingresos.", hi: "राजस्व हानि की गणना करें।", zh: "计算收入损失。" },

  calc_screen_name: { en: "Screen Time Annualizer", es: "Tiempo de Pantalla", hi: "स्क्रीन समय", zh: "屏幕时间" },
  calc_screen_desc: { en: "Time lost per year.", es: "Tiempo perdido por año.", hi: "प्रति वर्ष बर्बाद समय।", zh: "每年损失的时间。" },

  calc_unit_name: { en: "Unit Converter", es: "Conversor de Unidades", hi: "इकाई परिवर्तक", zh: "单位转换器" },
  calc_unit_desc: { en: "Length, Weight, Volume, Temp.", es: "Longitud, Peso, Volumen, Temp.", hi: "लंबाई, वजन, आयतन, तापमान।", zh: "长度、重量、体积、温度。" },

  calc_retirement_name: { en: "Retirement Estimator", es: "Estimador de Jubilación", hi: "सेवानिवृत्ति अनुमानक", zh: "退休估算器" },
  calc_retirement_desc: { en: "Savings growth projection.", es: "Proyección de ahorros.", hi: "बचत वृद्धि प्रक्षेपण।", zh: "储蓄增长预测。" },

  calc_movie_name: { en: "Movie Runtime", es: "Duración de Película", hi: "फिल्म की अवधि", zh: "电影时长" },
  calc_movie_desc: { en: "Total minutes and % of day.", es: "Minutos totales y % del día.", hi: "कुल मिनट और दिन का %।", zh: "总分钟数和全天占比。" },

  // --- HEALTH & FINANCE ADDITIONAL ---
  calc_bmi_name: { en: "BMI Calculator", es: "Calculadora IMC", hi: "बीएमआई कैलकुलेटर", zh: "BMI 计算器" },
  calc_bmi_desc: { en: "Body Mass Index & Weight Status.", es: "Índice de Masa Corporal.", hi: "बॉडी मास इंडेक्स और वजन की स्थिति।", zh: "身体质量指数和体重状况。" },
  calc_bmr_name: { en: "BMR Calculator", es: "Calculadora TMB", hi: "बीएमआर कैलकुलेटर", zh: "基础代谢率计算器" },
  calc_bmr_desc: { en: "Basal Metabolic Rate (Calories).", es: "Tasa Metabólica Basal (Calorías).", hi: "बेसल मेटाबोलिक दर (कैलोरी)।", zh: "基础代谢率（卡路里）。" },
  calc_water_name: { en: "Water Intake", es: "Consumo de Agua", hi: "पानी का सेवन", zh: "饮水计算器" },
  calc_water_desc: { en: "Daily hydration recommendation.", es: "Recomendación diaria de hidratación.", hi: "दैनिक जलयोजन सिफारिश।", zh: "每日饮水推荐。" },

  calc_mortgage_name: { en: "Mortgage Calculator", es: "Calculadora de Hipoteca", hi: "बंधक कैलकुलेटर", zh: "房贷计算器" },
  calc_mortgage_desc: { en: "Estimate monthly mortgage payments.", es: "Estima pagos mensuales de hipoteca.", hi: "मासिक बंधक भुगतान का अनुमान लगाएं।", zh: "估算每月房贷还款额。" },
  calc_auto_name: { en: "Auto Loan Calculator", es: "Calculadora de Auto", hi: "ऑटो लोन कैलकुलेटर", zh: "车贷计算器" },
  calc_auto_desc: { en: "Calculate car payments with trade-in.", es: "Calcula pagos de auto con intercambio.", hi: "ट्रेड-इन के साथ कार भुगतान की गणना करें।", zh: "计算包含以旧换新的购车付款。" },
  calc_compound_name: { en: "Compound Interest", es: "Interés Compuesto", hi: "चक्रवृद्धि ब्याज", zh: "复利计算器" },
  calc_compound_desc: { en: "Grow your savings over time.", es: "Haz crecer tus ahorros con el tiempo.", hi: "समय के साथ अपनी बचत बढ़ाएं।", zh: "随时间增加您的储蓄。" },
  calc_salary_name: { en: "Salary Converter", es: "Conversor de Salario", hi: "वेतन परिवर्तक", zh: "薪资转换器" },
  calc_salary_desc: { en: "Convert Hourly to Annual income.", es: "Convierte ingresos por hora a anuales.", hi: "प्रति घंटा को वार्षिक आय में बदलें।", zh: "转换时薪为年薪。" },
  calc_inflation_name: { en: "Inflation Calculator", es: "Calculadora de Inflación", hi: "मुद्रास्फीति कैलकुलेटर", zh: "通货膨胀计算器" },
  calc_inflation_desc: { en: "Calculate purchasing power change.", es: "Calcula el cambio de poder adquisitivo.", hi: "क्रय शक्ति परिवर्तन की गणना करें।", zh: "计算购买力变化。" },
  calc_tip_name: { en: "Tip Splitter", es: "Dividir Propina", hi: "टिप स्प्लिट", zh: "小费计算器" },
  calc_tip_desc: { en: "Split bills and tips easily.", es: "Divide facturas y propinas fácilmente.", hi: "बिल और टिप्स आसानी से विभाजित करें।", zh: "轻松分摊账单和小费。" },
  calc_roi_name: { en: "ROI Calculator", es: "Calculadora ROI", hi: "ROI कैलकुलेटर", zh: "投资回报率计算器" },
  calc_roi_desc: { en: "Return on Investment percentage.", es: "Porcentaje de Retorno de Inversión.", hi: "निवेश पर वापसी प्रतिशत।", zh: "投资回报率百分比。" },
  calc_vat_name: { en: "VAT / Sales Tax", es: "IVA / Impuesto", hi: "वैट / बिक्री कर", zh: "增值税 / 销售税" },
  calc_vat_desc: { en: "Add or remove tax from price.", es: "Añadir o quitar impuestos del precio.", hi: "कीमत से कर जोड़ें या हटाएं।", zh: "价格含税或去税计算。" },
  calc_discount_name: { en: "Discount Calculator", es: "Calculadora de Descuentos", hi: "छूट कैलकुलेटर", zh: "折扣计算器" },
  calc_discount_desc: { en: "Calculate savings and final price.", es: "Calcula ahorros y precio final.", hi: "बचत और अंतिम मूल्य की गणना करें।", zh: "计算节省金额和最终价格。" },
  calc_breakeven_name: { en: "Break-Even Point", es: "Punto de Equilibrio", hi: "लाभ-हानि संतुलन बिंदु", zh: "盈亏平衡点" },
  calc_breakeven_desc: { en: "Units to sell to cover costs.", es: "Unidades a vender para cubrir costos.", hi: "लागत को कवर करने के लिए बेचने वाली इकाइयाँ।", zh: "覆盖成本所需的销售量。" },
  calc_credit_name: { en: "Credit Card Payoff", es: "Pago de Tarjeta", hi: "क्रेडिट कार्ड भुगतान", zh: "信用卡还款" },
  calc_credit_desc: { en: "Months to be debt free.", es: "Meses para estar libre de deudas.", hi: "ऋण मुक्त होने के लिए महीने।", zh: "还清债务所需的月数。" },
  calc_fuel_name: { en: "Fuel Cost", es: "Costo de Combustible", hi: "ईंधन लागत", zh: "燃油成本" },
  calc_fuel_desc: { en: "Calculate trip expenses.", es: "Calcula gastos de viaje.", hi: "यात्रा खर्च की गणना करें।", zh: "计算旅行费用。" },

  // --- COMMON LABELS ---
  label_numerator: { en: "Numerator", es: "Numerador", hi: "अंश", zh: "分子" },
  label_denominator: { en: "Denominator", es: "Denominador", hi: "हर", zh: "分母" },
  label_number_1: { en: "Number 1", es: "Número 1", hi: "संख्या 1", zh: "数字 1" },
  label_number_2: { en: "Number 2", es: "Número 2", hi: "संख्या 2", zh: "数字 2" },
  label_base: { en: "Base", es: "Base", hi: "आधार", zh: "底数" },
  label_height: { en: "Height", es: "Altura", hi: "ऊंचाई", zh: "高度" },
  label_radius: { en: "Radius", es: "Radio", hi: "त्रिज्या", zh: "半径" },
  label_mass: { en: "Mass", es: "Masa", hi: "द्रव्यमान", zh: "质量" },
  label_acceleration: { en: "Acceleration", es: "Aceleración", hi: "त्वरण", zh: "加速度" },
  label_voltage: { en: "Voltage (V)", es: "Voltaje (V)", hi: "वोल्टेज (V)", zh: "电压 (V)" },
  label_current: { en: "Current (I)", es: "Corriente (I)", hi: "करंट (I)", zh: "电流 (I)" },
  label_resistance: { en: "Resistance (R)", es: "Resistencia (R)", hi: "रेजिस्टेंस (R)", zh: "电阻 (R)" },
  label_frequency: { en: "Frequency (Hz)", es: "Frecuencia (Hz)", hi: "आवृत्ति (Hz)", zh: "频率 (Hz)" },
  label_velocity: { en: "Velocity", es: "Velocidad", hi: "वेग", zh: "速度" },
  label_min: { en: "Min", es: "Mín", hi: "न्यूनतम", zh: "最小" },
  label_max: { en: "Max", es: "Máx", hi: "अधिकतम", zh: "最大" },
  label_birthdate: { en: "Birth Date", es: "Fecha de Nacimiento", hi: "जन्म तिथि", zh: "出生日期" },
  label_start_date: { en: "Start Date", es: "Fecha Inicio", hi: "आरंभ करने की तिथि", zh: "开始日期" },
  label_end_date: { en: "End Date", es: "Fecha Fin", hi: "अंतिम तिथि", zh: "结束日期" },
  label_text: { en: "Text Content", es: "Contenido del Texto", hi: "पाठ सामग्री", zh: "文本内容" },
  label_length: { en: "Length", es: "Longitud", hi: "लंबाई", zh: "长度" },
  label_width: { en: "Width", es: "Ancho", hi: "चौड़ाई", zh: "宽度" },
  label_daily_loss: { en: "Daily Loss", es: "Pérdida Diaria", hi: "दैनिक हानि", zh: "每日损失" },
  label_days: { en: "Days", es: "Días", hi: "दिन", zh: "天" },
  label_hours: { en: "Hours", es: "Horas", hi: "घंटे", zh: "小时" },
  label_minutes: { en: "Minutes", es: "Minutos", hi: "मिनट", zh: "分钟" },
  label_value: { en: "Value", es: "Valor", hi: "मूल्य", zh: "数值" },
  
  btn_calculate: { en: "Calculate", es: "Calcular", hi: "गणना करें", zh: "计算" },
  btn_generate: { en: "Generate", es: "Generar", hi: "उत्पन्न करें", zh: "生成" },
  btn_start: { en: "Start", es: "Iniciar", hi: "शुरू करें", zh: "开始" },
  btn_stop: { en: "Stop", es: "Detener", hi: "रुकें", zh: "停止" },
  btn_reset: { en: "Reset", es: "Reiniciar", hi: "रीसेट", zh: "重置" },

  result_area: { en: "Area", es: "Área", hi: "क्षेत्रफल", zh: "面积" },
  result_volume: { en: "Volume", es: "Volumen", hi: "आयतन", zh: "体积" },
  result_force: { en: "Force", es: "Fuerza", hi: "बल", zh: "力" },
  result_energy: { en: "Energy", es: "Energía", hi: "ऊर्जा", zh: "能量" },
  result_age: { en: "Age", es: "Edad", hi: "आयु", zh: "年龄" },
  result_diff: { en: "Difference", es: "Diferencia", hi: "अंतर", zh: "差异" },
  result_reading_time: { en: "Reading Time", es: "Tiempo de Lectura", hi: "पढ़ने का समय", zh: "阅读时间" },
  result_words: { en: "Words", es: "Palabras", hi: "शब्द", zh: "字数" },
  result_chars: { en: "Characters", es: "Caracteres", hi: "अक्षर", zh: "字符" },
  result_loss: { en: "Total Loss", es: "Pérdida Total", hi: "कुल हानि", zh: "总损失" },
  result_converted: { en: "Converted", es: "Convertido", hi: "परिवर्तित", zh: "转换结果" },
  
  label_weight: { en: "Weight", es: "Peso", hi: "वजन", zh: "体重" },
  label_loan_amount: { en: "Loan Amount", es: "Monto del Préstamo", hi: "ऋण राशि", zh: "贷款金额" },
  label_principal: { en: "Principal Amount", es: "Capital Principal", hi: "मूल राशि", zh: "本金金额" },
  label_interest_rate: { en: "Interest Rate (%)", es: "Tasa de Interés (%)", hi: "ब्याज दर (%)", zh: "利率 (%)" },
  label_years: { en: "Term (Years)", es: "Plazo (Años)", hi: "अवधि (वर्ष)", zh: "期限 (年)" },
  label_down_payment: { en: "Down Payment", es: "Pago Inicial", hi: "डाउन पेमेंट", zh: "首付" },
  result_monthly_payment: { en: "Monthly Payment", es: "Pago Mensual", hi: "मासिक भुगतान", zh: "月供" },
  result_total_payment: { en: "Total Payment", es: "Pago Total", hi: "कुल भुगतान", zh: "总付款" },
  result_total_interest: { en: "Total Interest", es: "Interés Total", hi: "कुल ब्याज", zh: "总利息" },
  result_future_value: { en: "Future Value", es: "Valor Futuro", hi: "भविष्य मूल्य", zh: "未来价值" },
  result_principal_paid: { en: "Principal Paid", es: "Capital Pagado", hi: "मूलधन भुगतान", zh: "已付本金" },
  
  // Health
  label_height_cm: { en: "Height (cm)", es: "Altura (cm)", hi: "ऊंचाई (सेमी)", zh: "身高 (cm)" },
  label_age: { en: "Age", es: "Edad", hi: "उम्र", zh: "年龄" },
  label_gender: { en: "Gender", es: "Género", hi: "लिंग", zh: "性别" },
  gender_male: { en: "Male", es: "Hombre", hi: "पुरुष", zh: "男性" },
  gender_female: { en: "Female", es: "Mujer", hi: "महिला", zh: "女性" },
  result_bmi: { en: "Your BMI", es: "Tu IMC", hi: "आपका बीएमआई", zh: "您的 BMI" },
  result_calories: { en: "Calories / Day", es: "Calorías / Día", hi: "कैलोरी / दिन", zh: "卡路里 / 天" },
  result_water: { en: "Daily Water", es: "Agua Diaria", hi: "दैनिक पानी", zh: "每日需水量" },
  bmi_underweight: { en: "Underweight", es: "Bajo peso", hi: "कम वजन", zh: "体重过轻" },
  bmi_normal: { en: "Normal Weight", es: "Peso normal", hi: "सामान्य वजन", zh: "正常体重" },
  bmi_overweight: { en: "Overweight", es: "Sobrepeso", hi: "अधिक वजन", zh: "超重" },
  bmi_obese: { en: "Obese", es: "Obeso", hi: "मोटापा", zh: "肥胖" },
  
  // Finance specific
  label_trade_in: { en: "Trade-in Value", es: "Valor de Intercambio", hi: "ट्रेड-इन मूल्य", zh: "抵扣价值" },
  label_months: { en: "Term (Months)", es: "Plazo (Meses)", hi: "अवधि (महीने)", zh: "期限 (月)" },
  label_monthly_contrib: { en: "Monthly Contribution", es: "Contribución Mensual", hi: "मासिक योगदान", zh: "每月供款" },
  label_hourly_rate: { en: "Hourly Rate", es: "Tarifa por Hora", hi: "प्रति घंटा दर", zh: "时薪" },
  label_hours_per_week: { en: "Hours/Week", es: "Horas/Semana", hi: "घंटे/सप्ताह", zh: "每周工时" },
  result_annual_salary: { en: "Annual Salary", es: "Salario Anual", hi: "वार्षिक वेतन", zh: "年薪" },
  label_start_amount: { en: "Initial Amount", es: "Monto Inicial", hi: "प्रारंभिक राशि", zh: "初始金额" },
  label_start_year: { en: "Start Year", es: "Año de Inicio", hi: "प्रारंभिक वर्ष", zh: "起始年份" },
  label_end_year: { en: "End Year", es: "Año Final", hi: "अंतिम वर्ष", zh: "结束年份" },
  label_inflation_rate: { en: "Inflation Rate (%)", es: "Inflación (%)", hi: "मुद्रास्फीति दर (%)", zh: "通货膨胀率 (%)" },
  result_purchasing_power: { en: "New Value", es: "Nuevo Valor", hi: "नया मूल्य", zh: "新价值" },
  result_power_loss: { en: "Purchasing Power Loss", es: "Pérdida de Poder", hi: "क्रय शक्ति हानि", zh: "购买力损失" },
  label_bill_amount: { en: "Bill Amount", es: "Monto de la Factura", hi: "बिल राशि", zh: "账单金额" },
  label_tip_percent: { en: "Tip (%)", es: "Propina (%)", hi: "टिप (%)", zh: "小费 (%)" },
  label_people: { en: "Number of People", es: "Número de Personas", hi: "लोगों की संख्या", zh: "人数" },
  result_total_per_person: { en: "Total Per Person", es: "Total Por Persona", hi: "प्रति व्यक्ति कुल", zh: "人均总额" },
  result_tip_amount: { en: "Tip Amount", es: "Monto de Propina", hi: "टिप राशि", zh: "小费金额" },
  label_cost: { en: "Cost", es: "Costo", hi: "लागत", zh: "成本" },
  label_revenue: { en: "Ingresos", es: "Ingresos", hi: "राजस्व", zh: "收入" },
  result_roi: { en: "ROI", es: "ROI", hi: "ROI", zh: "投资回报率" },
  label_price: { en: "Price", es: "Precio", hi: "कीमत", zh: "价格" },
  label_tax_rate: { en: "Tax Rate (%)", es: "Impuesto (%)", hi: "कर दर (%)", zh: "税率 (%)" },
  result_tax_amount: { en: "Tax Amount", es: "Monto de Impuesto", hi: "कर राशि", zh: "税额" },
  result_total_price: { en: "Total Price", es: "Precio Total", hi: "कुल कीमत", zh: "总价" },
  label_discount_percent: { en: "Discount (%)", es: "Descuento (%)", hi: "छूट (%)", zh: "折扣 (%)" },
  result_saved: { en: "You Save", es: "Ahorras", hi: "आप बचाते हैं", zh: "节省" },
  result_final_price: { en: "Final Price", es: "Precio Final", hi: "अंतिम मूल्य", zh: "最终价格" },
  label_fixed_cost: { en: "Fixed Costs", es: "Costos Fijos", hi: "निश्चित लागत", zh: "固定成本" },
  label_sell_price: { en: "Selling Price", es: "Precio Venta", hi: "विक्रय मूल्य", zh: "售价" },
  label_var_cost: { en: "Variable Cost", es: "Costo Variable", hi: "परिवर्तनीय लागत", zh: "变动成本" },
  result_breakeven_units: { en: "Units to Sell", es: "Unidades a Vender", hi: "बेचने वाली इकाइयाँ", zh: "需售出数量" },
  label_card_balance: { en: "Card Balance", es: "Saldo de Tarjeta", hi: "कार्ड शेष", zh: "信用卡余额" },
  label_monthly_payment: { en: "Monthly Payment", es: "Pago Mensual", hi: "मासिक भुगतान", zh: "月还款" },
  result_months_to_payoff: { en: "Months to Payoff", es: "Meses para Pagar", hi: "भुगतान के महीने", zh: "还清月数" },
  label_distance: { en: "Distance", es: "Distancia", hi: "दूरी", zh: "距离" },
  label_mpg: { en: "MPG", es: "Millas/Galón", hi: "माइलेज (MPG)", zh: "英里/加仑" },
  label_gas_price: { en: "Gas Price", es: "Precio Gasolina", hi: "पेट्रोल कीमत", zh: "油价" },
  result_trip_cost: { en: "Trip Cost", es: "Costo del Viaje", hi: "यात्रा लागत", zh: "旅行费用" }
};