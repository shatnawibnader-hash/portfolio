import React from 'react';
import { Phone, MessageCircle, ChevronDown, User, Check, Star, ArrowLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import { 
  CMP011_DATA, 
  CMP012_DATA, 
  FEATURES_LIST, 
  CHALLENGES_LIST, 
  STEPS_LIST,
  PHONE_NUMBER,
  PHONE_DISPLAY,
  WHATSAPP_URL
} from './constants';

const App: React.FC = () => {

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToCourses = () => {
    document.getElementById('cmp011')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
            د. أبو سلطان
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-accent-400 mb-4">
            مُدرّس جامعي متخصص لمقررات CMP011 و CMP012  
  
          </h2>
          <p className="text-xl md:text-2xl font-light text-slate-100 mb-2">
            خبرة أكاديمية وعملية – دعم شامل للنجاح والتفوق
          </p>
          <p className="text-lg md:text-xl font-medium text-slate-300 mb-12">
          </p>
          
          <div className="max-w-3xl mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-lg md:text-xl leading-relaxed">
مرحبًا بطلاب جامعة الأمير سلطان!
هذا الموقع مخصص فقط للتواصل معنا عبر الواتساب أو الاتصال الهاتفي للحصول على أفضل الدروس الخصوصية والدعم في مقررات الحاسب حضوري أو عن بعد             </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-accent-500/30 transition-all transform hover:-translate-y-1"
            >
              ابدأ الآن وميّز نفسك
            </button>
            <button 
              onClick={scrollToCourses}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-full text-lg transition-all"
            >
              تعرّف على الدروس المتاحة
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-800 rounded-full mb-4">
              <User className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">من هو د. أبو سلطان؟</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed text-justify">
            <p className="mb-6 font-medium text-xl text-primary-900 text-center">
              د. أبو سلطان (أردني الجنسية)
            </p>
            <p className="mb-6">
              مدرس جامعي متخصص في مقررات <strong>CMP011</strong> و <strong>CMP012</strong>، أتمتع بخبرة أكاديمية وعملية واسعة في تدريس هذه المواد لطلاب جامعة الأمير سلطان. هدفي هو ليس فقط الشرح، بل توجيهك بالطريقة الصحيحة للتفوق والنجاح بإذن الله تعالى وتوفيقه.
            </p>
            <p className="mb-6">
              أركز بشكل كبير على <strong>الجزء العملي (Simulation Training)</strong>، وهو التحدي الأكبر لكثير من الطلاب، بالإضافة إلى تبسيط المفاهيم النظرية لتصبح سهلة الفهم والحفظ، مما يمنحك الثقة الكاملة قبل الاختبارات.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border-r-4 border-accent-500 mt-8">
              <h3 className="font-bold text-slate-800 mb-3">نقاط القوة والخبرة:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-accent-500 ml-2" />
                  خبرة تدريسية خاصة بمناهج جامعة الأمير سلطان.
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-accent-500 ml-2" />
                  احترافية عالية في التدريب العملي لأنظمة المحاكاة.
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-accent-500 ml-2" />
                  أسلوب مبسط يضمن استيعاب الطالب مهما كان مستواه.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">المقررات المتاحة للتدريس والتدريب</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              برامج تدريبية مصممة خصيصاً لتلبية متطلبات مناهج جامعة الأمير سلطان
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            <CourseCard data={CMP011_DATA} />
            <CourseCard data={CMP012_DATA} />
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">لماذا تختار دروسي؟</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES_LIST.map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 hover:bg-white group">
                <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHALLENGES SECTION --- */}
      <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">هل تواجه هذه التحديات في المقرر؟</h2>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <ul className="space-y-6">
              {CHALLENGES_LIST.map((challenge, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center mt-1 ml-4">
                    <span className="font-bold text-white text-lg">?</span>
                  </div>
                  <p className="text-xl md:text-2xl font-light">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-accent-400 mb-8">
              ابدأ الآن ... وميّز نفسك عن الآخرين في مقرري CMP011 و CMP012
            </p>
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-bold rounded-full text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              تغلب على التحديات وتواصل معنا
              <ArrowLeft className="mr-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- HOW TO START --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">كيف تبدأ؟</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS_LIST.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-full flex flex-col items-center text-center relative z-10">
                  <div className="w-14 h-14 bg-primary-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{step}</p>
                </div>
                {/* Connector Line for Desktop */}
                {idx < STEPS_LIST.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-x-1/2 -z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            للاستفسار عن تفاصيل الدروس 
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            لا تتردد في التواصل للحصول على الدعم الذي تحتاجه لتحقيق النجاح.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
            {/* Call Button */}
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-5 bg-primary-900 hover:bg-primary-800 text-white rounded-xl text-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary-900/30"
            >
              <Phone className="w-6 h-6" />
              <span>اتصال مباشر</span>
            </a>

            {/* WhatsApp Button */}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/30"
            >
              <MessageCircle className="w-6 h-6" />
              <span>مراسلة عبر الواتساب</span>
            </a>
          </div>

          <div className="inline-block bg-slate-50 px-8 py-4 rounded-lg border border-slate-200">
            <p className="text-slate-500 text-sm mb-1">رقم التواصل</p>
            <p className="text-3xl font-bold text-slate-800 font-mono" dir="ltr">{PHONE_DISPLAY}</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-white mb-2">د. أبو سلطان</p>
          <p className="mb-6 opacity-80">دروس خصوصية وتدريب عملي لطلاب جامعة الأمير سلطان (CMP011 & CMP012)</p>
          <div className="w-full h-px bg-slate-800 my-6"></div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;