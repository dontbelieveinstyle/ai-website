import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, BookOpen, Zap, BarChart3, MessageSquare, Code, Headphones } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                引领企业
                <span className="text-orange-400"> AI 转型</span>
                <br />创造智慧未来
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                瑞比智慧 airabbi 专注于为企业提供全方位的人工智能解决方案，
                从教育培训到技术实施，助力您的企业在数字化时代脱颖而出。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg flex items-center justify-center group"
                >
                  免费咨询
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-medium text-lg text-center"
                >
                  了解更多
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm text-orange-100">成功案例</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm text-orange-100">客户满意度</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm text-orange-100">专业团队</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm text-orange-100">技术支持</div>
                  </div>
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
              我们的核心服务
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              提供从 AI 教育培训到技术实施的全方位服务，助力企业实现智能化转型
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
                  AI 教育训练
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  为企业提供全面的 AI 知识培训，帮助员工掌握人工智能基础概念和应用技能。
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  了解详情 <ArrowRight size={16} className="ml-2" />
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
                  智能自动化
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  利用 AI 技术实现业务流程自动化，提高工作效率和准确性。
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  了解详情 <ArrowRight size={16} className="ml-2" />
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
                  数据分析
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  深度挖掘企业数据价值，提供智能化的数据分析和洞察服务。
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  了解详情 <ArrowRight size={16} className="ml-2" />
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
                  AI 咨询
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  提供专业的 AI 战略咨询服务，帮助企业制定 AI 转型路线图。
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  了解详情 <ArrowRight size={16} className="ml-2" />
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
                  定制开发
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  根据企业特定需求，开发定制化的 AI 解决方案和应用系统。
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  了解详情 <ArrowRight size={16} className="ml-2" />
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
                  技术支持
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  提供全方位的 AI 技术支持服务，确保系统稳定运行和持续优化。
                </p>
                <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                  了解详情 <ArrowRight size={16} className="ml-2" />
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
              我们的成就
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多年来在 AI 领域的深耕细作，获得了客户和行业的广泛认可
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">服务客户</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">1000+</div>
              <div className="text-gray-600">成功项目</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">行业奖项</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={40} />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
          </div>
          
          {/* Client Testimonials */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">客户见证</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-600 mb-4 italic">
                  "瑞比智慧的 AI 教育培训帮助我们团队快速掌握了人工智能技术，显著提升了工作效率。"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    张
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">张总</div>
                    <div className="text-sm text-gray-500">某科技公司 CEO</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-600 mb-4 italic">
                  "通过智能自动化解决方案，我们的业务流程效率提升了 300%，成本降低了 40%。"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    李
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">李经理</div>
                    <div className="text-sm text-gray-500">制造业企业 运营总监</div>
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
              最新资讯
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              关注 AI 行业动态，分享最新技术趋势和应用案例
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* News Article 1 */}
            <Link to="/blog" className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">AI</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-medium mb-2">2024年1月15日</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                    2024年人工智能发展趋势预测
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    深度分析2024年AI技术发展方向，包括大语言模型、多模态AI、边缘计算等关键领域的突破性进展...
                  </p>
                  <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                    阅读更多 <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </article>
            </Link>
            
            {/* News Article 2 */}
            <Link to="/blog" className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-20">自动化</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-medium mb-2">2024年1月10日</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                    企业智能自动化实施指南
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    从零开始构建企业智能自动化系统，涵盖需求分析、技术选型、实施步骤和效果评估的完整流程...
                  </p>
                  <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                    阅读更多 <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </article>
            </Link>
            
            {/* News Article 3 */}
            <Link to="/blog" className="group">
              <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-20">数据</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-500 font-medium mb-2">2024年1月5日</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-orange-500 transition-colors">
                    AI驱动的数据分析最佳实践
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    探索如何利用人工智能技术提升数据分析效率，包括机器学习算法选择、数据预处理和结果解释...
                  </p>
                  <div className="flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform">
                    阅读更多 <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              查看更多资讯 <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;