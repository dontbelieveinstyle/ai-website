import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Users, Award, BookOpen, Zap, BarChart3, MessageSquare, Code, Headphones, Target, TrendingUp, Shield, Clock } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // Comprehensive service data
  const services: Record<string, any> = {
    'ai-education': {
      title: 'AI 教育训练',
      subtitle: '专业的人工智能教育培训服务',
      description: '为企业提供全面的 AI 知识培训，帮助员工掌握人工智能基础概念和应用技能，加速企业数字化转型进程。',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      features: [
        { title: '基础 AI 概念培训', desc: '涵盖机器学习、深度学习、自然语言处理等核心概念' },
        { title: '实践项目指导', desc: '通过真实项目案例，让学员掌握 AI 技术应用' },
        { title: '工具平台使用', desc: '教授主流 AI 开发工具和平台的使用方法' },
        { title: '行业应用案例', desc: '分析不同行业的 AI 应用场景和成功案例' },
        { title: '定制化课程', desc: '根据企业需求定制专属的培训内容' },
        { title: '持续技术支持', desc: '培训后提供长期的技术咨询和支持服务' }
      ],
      benefits: [
        { title: '提升团队 AI 素养', desc: '全面提升员工对人工智能技术的理解和应用能力' },
        { title: '加速数字化转型', desc: '帮助企业快速适应数字化时代的发展需求' },
        { title: '增强创新能力', desc: '培养员工的创新思维和技术应用能力' },
        { title: '提高工作效率', desc: '通过 AI 技术应用显著提升工作效率和质量' }
      ],
      process: [
        '需求调研与分析',
        '定制培训方案',
        '理论知识讲解',
        '实践项目演练',
        '效果评估反馈',
        '持续跟踪支持'
      ],
      stats: [
        { number: '1000+', label: '培训学员' },
        { number: '200+', label: '企业客户' },
        { number: '95%', label: '满意度' },
        { number: '50+', label: '课程模块' }
      ]
    },
    'intelligent-automation': {
      title: '智能自动化',
      subtitle: '业务流程智能化解决方案',
      description: '利用 RPA、AI 和机器学习技术实现业务流程自动化，显著提高工作效率，降低运营成本，减少人为错误。',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      features: [
        { title: '流程分析与优化', desc: '深入分析现有业务流程，识别自动化机会' },
        { title: 'RPA 机器人部署', desc: '部署智能机器人执行重复性任务' },
        { title: '智能决策系统', desc: '基于 AI 的智能决策和规则引擎' },
        { title: '异常处理机制', desc: '自动识别和处理业务流程中的异常情况' },
        { title: '集成现有系统', desc: '无缝集成企业现有的 IT 系统和应用' },
        { title: '监控与维护', desc: '实时监控自动化流程运行状态和性能' }
      ],
      benefits: [
        { title: '降低人工成本', desc: '减少重复性工作，释放人力资源用于更有价值的工作' },
        { title: '提高处理速度', desc: '自动化处理速度比人工操作快 5-10 倍' },
        { title: '减少错误率', desc: '消除人为错误，提高数据准确性和一致性' },
        { title: '24/7 不间断服务', desc: '全天候自动化服务，不受时间和地点限制' }
      ],
      process: [
        '业务流程调研',
        '自动化方案设计',
        '系统开发部署',
        '测试与优化',
        '上线运行',
        '持续监控维护'
      ],
      stats: [
        { number: '300%', label: '效率提升' },
        { number: '60%', label: '成本降低' },
        { number: '99.9%', label: '准确率' },
        { number: '100+', label: '成功案例' }
      ]
    },
    'data-analysis': {
      title: '数据分析',
      subtitle: '智能数据洞察与分析服务',
      description: '运用先进的数据科学技术和 AI 算法，深度挖掘企业数据价值，提供精准的商业洞察和预测分析。',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      features: [
        { title: '数据清洗与整理', desc: '专业的数据预处理和质量控制服务' },
        { title: '预测性分析', desc: '基于机器学习的趋势预测和风险评估' },
        { title: '可视化报表', desc: '直观的数据可视化和交互式仪表板' },
        { title: '实时监控系统', desc: '实时数据监控和异常预警机制' },
        { title: '客户行为分析', desc: '深入分析客户行为模式和偏好' },
        { title: '业务智能报告', desc: '定制化的商业智能分析报告' }
      ],
      benefits: [
        { title: '数据驱动决策', desc: '基于数据洞察制定更精准的商业策略' },
        { title: '发现业务机会', desc: '识别潜在的市场机会和增长点' },
        { title: '优化运营效率', desc: '通过数据分析优化业务流程和资源配置' },
        { title: '预测市场趋势', desc: '提前预测市场变化，抢占先机' }
      ],
      process: [
        '数据需求分析',
        '数据收集整理',
        '模型构建训练',
        '分析结果验证',
        '报告生成交付',
        '持续优化改进'
      ],
      stats: [
        { number: 'TB级', label: '数据处理量' },
        { number: '85%', label: '预测准确率' },
        { number: '40%', label: '决策效率提升' },
        { number: '150+', label: '分析项目' }
      ]
    },
    'ai-consulting': {
      title: 'AI 咨询',
      subtitle: '人工智能战略咨询服务',
      description: '提供专业的 AI 战略咨询服务，帮助企业制定 AI 转型路线图，评估技术可行性，规划实施方案。',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      features: [
        { title: 'AI 战略规划', desc: '制定符合企业发展的 AI 战略和实施路线图' },
        { title: '技术可行性评估', desc: '评估 AI 技术在企业中的应用可行性' },
        { title: '投资回报分析', desc: '分析 AI 项目的投资成本和预期回报' },
        { title: '风险评估管理', desc: '识别和管理 AI 实施过程中的潜在风险' },
        { title: '团队能力建设', desc: '评估和提升企业 AI 团队的技术能力' },
        { title: '合规性指导', desc: '确保 AI 应用符合相关法规和标准' }
      ],
      benefits: [
        { title: '战略清晰化', desc: '明确 AI 发展方向和优先级' },
        { title: '降低实施风险', desc: '通过专业咨询降低项目失败风险' },
        { title: '优化资源配置', desc: '合理配置人力和资金资源' },
        { title: '加速转型进程', desc: '缩短 AI 转型的时间周期' }
      ],
      process: [
        '现状调研分析',
        '战略规划制定',
        '实施方案设计',
        '风险评估管理',
        '执行指导监督',
        '效果评估优化'
      ],
      stats: [
        { number: '500+', label: '咨询项目' },
        { number: '90%', label: '项目成功率' },
        { number: '50%', label: '时间节省' },
        { number: '30+', label: '行业覆盖' }
      ]
    },
    'custom-development': {
      title: '定制开发',
      subtitle: 'AI 解决方案定制开发服务',
      description: '根据企业特定需求，开发定制化的 AI 解决方案和应用系统，提供从需求分析到部署维护的全流程服务。',
      icon: Code,
      color: 'from-red-500 to-red-600',
      features: [
        { title: '需求分析设计', desc: '深入了解业务需求，设计最优技术方案' },
        { title: '算法模型开发', desc: '开发适合业务场景的机器学习模型' },
        { title: '系统架构设计', desc: '设计可扩展、高性能的系统架构' },
        { title: '用户界面开发', desc: '开发直观易用的用户交互界面' },
        { title: '系统集成测试', desc: '确保系统稳定性和兼容性' },
        { title: '部署运维支持', desc: '提供系统部署和运维技术支持' }
      ],
      benefits: [
        { title: '完全定制化', desc: '完全符合企业特定业务需求' },
        { title: '技术先进性', desc: '采用最新的 AI 技术和最佳实践' },
        { title: '可扩展性强', desc: '支持业务增长和功能扩展' },
        { title: '长期技术支持', desc: '提供持续的技术支持和维护服务' }
      ],
      process: [
        '需求调研分析',
        '技术方案设计',
        '原型开发验证',
        '系统开发测试',
        '部署上线运行',
        '维护升级优化'
      ],
      stats: [
        { number: '200+', label: '定制项目' },
        { number: '99%', label: '交付成功率' },
        { number: '6个月', label: '平均开发周期' },
        { number: '24/7', label: '技术支持' }
      ]
    },
    'technical-support': {
      title: '技术支持',
      subtitle: '全方位 AI 技术支持服务',
      description: '提供全方位的 AI 技术支持服务，包括系统维护、性能优化、故障排除和技术升级，确保系统稳定运行。',
      icon: Headphones,
      color: 'from-indigo-500 to-indigo-600',
      features: [
        { title: '系统监控维护', desc: '7x24小时系统监控和预防性维护' },
        { title: '性能优化调优', desc: '持续优化系统性能和响应速度' },
        { title: '故障快速响应', desc: '快速响应和解决系统故障问题' },
        { title: '技术升级服务', desc: '定期进行技术升级和功能更新' },
        { title: '培训指导服务', desc: '为用户提供系统使用培训和指导' },
        { title: '远程技术支持', desc: '提供远程技术支持和问题解决' }
      ],
      benefits: [
        { title: '系统稳定运行', desc: '确保 AI 系统持续稳定运行' },
        { title: '快速问题解决', desc: '快速响应和解决技术问题' },
        { title: '降低维护成本', desc: '专业维护降低企业技术成本' },
        { title: '技术持续更新', desc: '保持技术的先进性和竞争力' }
      ],
      process: [
        '服务需求确认',
        '支持方案制定',
        '监控系统部署',
        '日常维护服务',
        '问题响应处理',
        '服务质量评估'
      ],
      stats: [
        { number: '99.9%', label: '系统可用性' },
        { number: '< 2小时', label: '响应时间' },
        { number: '300+', label: '支持客户' },
        { number: '24/7', label: '服务时间' }
      ]
    }
  };

  const service = services[serviceId || ''] || {
    title: '服务未找到',
    subtitle: '',
    description: '抱歉，您访问的服务页面不存在。',
    icon: MessageSquare,
    color: 'from-gray-500 to-gray-600',
    features: [],
    benefits: [],
    process: [],
    stats: []
  };

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${service.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full">
                <IconComponent className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-2">{service.subtitle}</p>
            <p className="text-lg text-white text-opacity-80 max-w-3xl mx-auto">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {service.stats && service.stats.length > 0 && (
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {service.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features & Benefits */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              核心功能
            </h2>
            <div className="space-y-6">
              {service.features.map((feature: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 text-orange-500 mr-3" />
              核心优势
            </h2>
            <div className="space-y-6">
              {service.benefits.map((benefit: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        {service.process && service.process.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
              <Clock className="w-8 h-8 text-purple-600 mr-3" />
              服务流程
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {service.process.map((step: string, index: number) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-white text-opacity-80" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">准备开始您的 AI 转型之旅？</h3>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            联系我们的专家团队，获取个性化的解决方案和免费咨询服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <Users className="w-5 h-5 mr-2" />
              免费咨询
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              查看更多服务
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;