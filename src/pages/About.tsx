import React from 'react';
import { Award, Users, Target, TrendingUp, Globe, Shield, Lightbulb, Heart, Star, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: '国家高新技术企业',
      description: '获得国家高新技术企业认定，技术实力获得权威认可',
      year: '2023'
    },
    {
      icon: Star,
      title: 'AI 创新应用奖',
      description: '在人工智能创新应用领域获得行业权威奖项',
      year: '2023'
    },
    {
      icon: Shield,
      title: 'ISO 27001 认证',
      description: '通过国际信息安全管理体系认证，保障数据安全',
      year: '2022'
    },
    {
      icon: Globe,
      title: '技术专利 20+',
      description: '在 AI 核心技术领域拥有多项发明专利和软件著作权',
      year: '2024'
    }
  ];

  const teamMembers = [
    {
      name: '张博士',
      position: '首席技术官',
      description: '清华大学计算机博士，15年AI研发经验，曾任职于谷歌、微软等知名企业',
      expertise: ['机器学习', '深度学习', '计算机视觉']
    },
    {
      name: '李教授',
      position: '首席科学家',
      description: '中科院人工智能研究所教授，国际AI领域知名专家，发表论文100+篇',
      expertise: ['自然语言处理', '知识图谱', '智能推荐']
    },
    {
      name: '王总监',
      position: '产品总监',
      description: '10年产品管理经验，曾主导多个千万级用户AI产品的设计与运营',
      expertise: ['产品设计', '用户体验', '商业模式']
    },
    {
      name: '陈经理',
      position: '技术经理',
      description: '资深全栈工程师，精通多种编程语言和AI框架，项目交付成功率99%',
      expertise: ['系统架构', '算法优化', '项目管理']
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: '创新驱动',
      description: '持续投入研发，追求技术创新，为客户提供领先的AI解决方案'
    },
    {
      icon: Users,
      title: '客户至上',
      description: '以客户需求为导向，提供个性化服务，确保客户成功'
    },
    {
      icon: Heart,
      title: '诚信合作',
      description: '秉承诚信原则，与合作伙伴建立长期互信的合作关系'
    },
    {
      icon: Target,
      title: '追求卓越',
      description: '精益求精，不断提升服务质量和技术水平，追求行业领先'
    }
  ];

  const milestones = [
    { year: '2020', event: '公司成立，专注AI技术研发' },
    { year: '2021', event: '完成天使轮融资，团队扩展至50人' },
    { year: '2022', event: '推出首个AI产品，服务100+企业客户' },
    { year: '2023', event: '获得国家高新技术企业认定' },
    { year: '2024', event: '业务覆盖全国，服务客户超过500家' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">关于瑞比智慧</h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
              专注人工智能技术创新，致力于为企业数字化转型提供智能解决方案
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-white text-opacity-80">服务客户</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                <div className="text-white text-opacity-80">专业团队</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
                <div className="text-white text-opacity-80">技术专利</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">5年</div>
                <div className="text-white text-opacity-80">行业经验</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">企业简介</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                瑞比智慧成立于2020年，是一家专注于人工智能技术研发和应用的国家高新技术企业。我们致力于将前沿的AI技术转化为实用的商业解决方案，帮助企业实现智能化转型升级。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                公司拥有一支由清华、北大、中科院等知名院校博士和行业专家组成的技术团队，在机器学习、深度学习、自然语言处理、计算机视觉等领域具有深厚的技术积累和丰富的项目经验。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                我们秉承"技术创新、客户至上"的理念，已为金融、制造、教育、医疗等多个行业的500+企业客户提供了专业的AI解决方案，获得了客户的一致好评和行业的广泛认可。
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">我们的使命</h3>
              <p className="text-lg text-gray-700 mb-6">
                让人工智能技术普惠每一个企业，推动社会生产力的智能化升级
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">我们的愿景</h3>
              <p className="text-lg text-gray-700">
                成为中国领先的企业AI解决方案提供商，引领行业技术创新发展
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">核心价值观</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">核心团队</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              我们拥有一支经验丰富、技术精湛的专业团队，致力于为客户提供最优质的AI解决方案
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">荣誉资质</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-sm text-orange-600 font-medium mb-2">{achievement.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">发展历程</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;