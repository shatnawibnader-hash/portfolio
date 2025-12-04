import { 
  BookOpen, 
  MonitorPlay, 
  FileCheck, 
  Clock, 
  Award, 
  HelpCircle,
  BarChart,
  Target
} from 'lucide-react';
import { CourseData, FeatureItem, NavItem } from './types';

export const PHONE_NUMBER = "966559510082";
export const PHONE_DISPLAY = "966 55 951 0082";
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'about', label: 'من هو د. أبو سلطان؟' },
  { id: 'cmp011', label: 'CMP011' },
  { id: 'cmp012', label: 'CMP012' },
  { id: 'features', label: 'المميزات' },
  { id: 'contact', label: 'تواصل معنا' },
];

export const CMP011_DATA: CourseData = {
  id: 'cmp011',
  code: 'CMP011',
  title: 'مقدمة في الحاسب الآلي',
  description: 'تغطية شاملة للمقرر مع التركيز المكثف على الجانب العملي والتدريب لضمان الفهم العميق.',
  features: [
    'شرح مبسط وسلس لمفاهيم المقرر النظرية',
    'تلخيص مختصر يركز على نقاط التفوق والاختبارات',
    'أوراق عمل وتمارين تطبيقية لفهم الواجبات وتسليمها في الوقت المحدد',
    'نماذج متعددة لاختبارات سابقة تحاكي الاختبار الحقيقي'
  ],
  software: [
    { name: 'Microsoft Excel', levels: '1A - 3B' },
    { name: 'Microsoft Word', levels: '1A - 3B' }
  ]
};

export const CMP012_DATA: CourseData = {
  id: 'cmp012',
  code: 'CMP012',
  title: 'مقدمة في الحاسب الآلي',
  description: 'دعم أكاديمي متكامل للنجاح في المقرر النظري والعملي بأعلى الدرجات.',
  features: [
    'شرح المفاهيم النظرية وتلخيصها بشكل يضمن الدرجات العالية',
    'تدريب عملي منظم خطوة بخطوة',
    'مساعدة شاملة في فهم الواجبات التطبيقية',
    'تحضير جيد للاختبارات عبر حل نماذج سابقة'
  ],
  software: [
    { name: 'Microsoft Access', levels: '1A - 3B' },
    { name: 'Microsoft PowerPoint', levels: '1A - 3B' }
  ]
};

export const FEATURES_LIST: FeatureItem[] = [
  {
    icon: BookOpen,
    title: 'شرح نظري مبسط',
    description: 'شرح منظم للمفاهيم النظرية مع تلخيص يركز على ما يهمك في الاختبارات.'
  },
  {
    icon: MonitorPlay,
    title: 'تدريب عملي (Simulation)',
    description: 'تدريب خطوة بخطوة على برامج الأوفيس (Excel, Word, Access, PPT) حسب المقرر.'
  },
  {
    icon: FileCheck,
    title: 'أوراق عمل وواجبات',
    description: 'دعم كامل في فهم وحل التمارين التطبيقية والواجبات لضمان التسليم في الوقت.'
  },
  {
    icon: Clock,
    title: 'تحضير للاختبارات',
    description: 'نماذج متعددة وأسئلة سابقة تحاكي الاختبار الحقيقي لتدخل الاختبار بثقة.'
  },
  {
    icon: Award,
    title: 'تميز وتفوق',
    description: 'الهدف ليس النجاح فقط، بل تحقيق أعلى الدرجات والتميز عن الآخرين.'
  },
  {
    icon: HelpCircle,
    title: 'دعم شخصي',
    description: 'متابعة مستمرة للإجابة على استفساراتك وتوجيهك بالطريقة الصحيحة.'
  }
];

export const CHALLENGES_LIST = [
  "هل يحتاج المقرر إلى شرح أوضح ومبسط؟",
  "هل تشعر أنك قادر على التفوق لكنك تحتاج لمن يوجهك بالطريقة الصحيحة؟",
  "هل تواجه صعوبة تحديداً في الجزء العملي (Simulation Training)؟",
  "هل تريد التدرب على نماذج أسئلة تحاكي الاختبار الحقيقي؟"
];

export const STEPS_LIST = [
  "تواصل معنا عبر الواتس آب أو الاتصال المباشر للاستفسار عن التفاصيل.",
  "حدد المقرر (CMP011 أو CMP012) ونوع الدعم الذي تحتاجه.",
  "يتم تنسيق المواعيد (فردي أو مجموعات) بما يتناسب مع جدولك الجامعي.",
  "نبدأ الشرح والتدريب العملي مع المتابعة المستمرة حتى ليلة الاختبار."
];