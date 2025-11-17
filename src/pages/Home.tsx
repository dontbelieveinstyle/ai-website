import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, BookOpen, Zap, BarChart3, MessageSquare, Code, Headphones } from 'lucide-react';
import { useI18n } from '../i18n/LanguageProvider';
import { translations } from '../i18n/translations';
import { blogAPI, BlogPost } from '../services/api';

const Home: React.FC = () => {
  const { t, language } = useI18n();
  const dict = translations[language].pages.home;
  const blogDict = translations[language].pages.blog;
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Helper to resolve image URLs (supports absolute and backend-relative paths)
  const placeholderImage = 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20technology%20abstract%20digital%20background&image_size=landscape_4_3';
  const apiBase = import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? 'https://ai.xrexp.io/api' : '/api');
  const backendBase = apiBase.startsWith('http')
    ? apiBase.replace(/\/api\/?$/, '')
    : (import.meta.env.PROD ? 'https://ai.xrexp.io' : 'http://localhost:8000');
  const getImageUrl = (image?: string) => {
    if (!image) return placeholderImage;
    if (/^https?:\/\//.test(image)) return image;
    const cleaned = image.startsWith('/') ? image : `/${image}`;
    return `${backendBase}${cleaned}`;
  };

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        const all = await blogAPI.getPosts();
        setPosts(all.slice(0, 3));
        setError(null);
      } catch (e) {
        console.error('Failed to load featured posts for Home:', e);
        setError(blogDict.loadErrorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, [language]);

  const dateLocale = language === 'zh' ? 'zh-CN' : 'en-US';
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {dict.hero.titleBefore}
                <span className="text-orange-400"> {dict.hero.titleEmphasis}</span>
                <br />{dict.hero.titleAfter}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                <a href="https://www.xrexp.io/" target="_blank" rel="noopener noreferrer" className="underline"><span className="underline">XRE</span></a>-AI {dict.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg flex items-center justify-center group"
                >
                  {t('cta.contactUs')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-medium text-lg text-center"
                >
                  {t('services.learnMore')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  {dict.hero.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold mb-2">{m.value}</div>
                      <div className="text-sm text-orange-100">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {t('services.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subheading')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI 教育训练 */}
            <Link to="/service/ai-education" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border-2 border-transparent hover:border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {t('services.aiEducation')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dict.services.aiEducationDesc}
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* 智能自动化 */}
            <Link to="/service/intelligent-automation" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border-2 border-transparent hover:border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {t('services.intelligentAutomation')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dict.services.intelligentAutomationDesc}
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* 数据分析 */}
            <Link to="/service/data-analysis" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border-2 border-transparent hover:border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {t('services.dataAnalysis')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dict.services.dataAnalysisDesc}
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* AI 咨询 */}
            <Link to="/service/ai-consulting" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border-2 border-transparent hover:border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {t('services.aiConsulting')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dict.services.aiConsultingDesc}
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* 定制开发 */}
            <Link to="/service/custom-development" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border-2 border-transparent hover:border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {t('services.customDevelopment')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dict.services.customDevelopmentDesc}
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* 技术支持 */}
            <Link to="/service/technical-support" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border-2 border-transparent hover:border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Headphones className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {t('services.technicalSupport')}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dict.services.technicalSupportDesc}
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {dict.achievements.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {dict.achievements.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{dict.achievements.stats[0].value}</div>
              <div className="text-gray-600">{dict.achievements.stats[0].label}</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{dict.achievements.stats[1].value}</div>
              <div className="text-gray-600">{dict.achievements.stats[1].label}</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{dict.achievements.stats[2].value}</div>
              <div className="text-gray-600">{dict.achievements.stats[2].label}</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">{dict.achievements.stats[3].value}</div>
              <div className="text-gray-600">{dict.achievements.stats[3].label}</div>
            </div>
          </div>
          
          {/* Client Testimonials */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">{dict.testimonials.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-600 mb-4 italic">
                  "{dict.testimonials.items[0].quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {dict.testimonials.items[0].initial}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">{dict.testimonials.items[0].name}</div>
                    <div className="text-sm text-gray-500">{dict.testimonials.items[0].role}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-600 mb-4 italic">
                  "{dict.testimonials.items[1].quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {dict.testimonials.items[1].initial}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">{dict.testimonials.items[1].name}</div>
                    <div className="text-sm text-gray-500">{dict.testimonials.items[1].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              {dict.news.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {dict.news.description}
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-10">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">{blogDict.loading}</p>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-700 mb-1">{blogDict.loadFailedTitle}</h3>
              <p className="text-gray-500">{error}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post, index) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="h-48 bg-gray-100">
                      <img
                        src={getImageUrl(post.image)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-orange-500 font-medium mb-2">
                        {new Date(post.created_at).toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                        {blogDict.readMore} <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
          
          <div className="text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {dict.news.viewMore} <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;