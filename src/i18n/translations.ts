export const translations = {
  zh: {
    nav: { home: '首页', about: '关于我们', blog: '博客', contact: '联系我们', toggle: 'EN' },
  footer: {
      services: '我们的服务',
      quickLinks: '快速链接',
      contact: '联系信息',
      tagline: '专注于企业 AI 转型，提供从教育训练到技术实施的一站式服务。'
    },
    services: {
      heading: '我们的核心服务',
      subheading: '提供从 AI 教育培训到技术实施的全方位服务，助力企业实现智能化转型',
      learnMore: '了解详情',
      aiEducation: 'AI 教育训练',
      intelligentAutomation: '智能自动化',
      dataAnalysis: '数据分析',
      aiConsulting: 'AI 咨询',
      customDevelopment: '定制开发',
      technicalSupport: '技术支持'
    },
    cta: { contactUs: '联系咨询' },
    pages: {
      home: {
        hero: {
          titleBefore: '引领企业',
          titleEmphasis: 'AI 转型',
          titleAfter: '创造智慧未来',
          description: '以前沿 AI 技术重塑业务流程，提升效率与竞争力',
          metrics: [
            { value: '50+', label: '成功案例' },
            { value: '98%', label: '客户满意度' },
            { value: '25+', label: '专业团队' },
            { value: '24/7', label: '技术支持' }
          ]
        },
        services: {
          aiEducationDesc: '从入门到进阶，打造企业 AI 复合型人才',
          intelligentAutomationDesc: '通过流程自动化显著提升运营效率与准确性',
          dataAnalysisDesc: '从数据中洞察趋势，为决策提供科学依据',
          aiConsultingDesc: '从战略到落地，提供全方位 AI 咨询',
          customDevelopmentDesc: '按需定制 AI 系统，贴合业务场景',
          technicalSupportDesc: '为系统稳定运行提供专业技术保障'
        },
        achievements: {
          title: '我们的成就',
          description: '多年来在 AI 领域的深耕，助力各行业实现智能化升级',
          stats: [
            { value: '50+', label: '服务客户' },
            { value: '100+', label: '成功项目' },
            { value: '25+', label: '行业奖项' },
            { value: '98%', label: '客户满意度' }
          ]
        },
        testimonials: {
          title: '客户见证',
          items: [
            { quote: '借助 AI 自动化，我们的交付周期缩短了 40%，整体效率显著提升。', initial: 'L', name: '李华', role: '某制造企业 CTO' },
            { quote: '数据分析平台帮助我们精准识别增长机会，收入同比提升 35%。', initial: 'W', name: '王敏', role: '某零售集团 数据总监' }
          ]
        },
        news: {
          title: '最新资讯',
          description: '洞察 AI 最新趋势与实际应用',
          readMore: '阅读更多',
          viewMore: '查看更多资讯',
          articles: [
            { tag: 'AI', date: '2024年1月15日', title: '2024年人工智能发展趋势预测', excerpt: '从大模型到行业场景化应用，AI 将进一步走向深水区。' },
            { tag: '自动化', date: '2024年1月10日', title: '企业智能自动化实施指南', excerpt: '从流程梳理到系统搭建，一站式实现高效自动化。' },
            { tag: '数据', date: '2024年1月5日', title: 'AI驱动的数据分析最佳实践', excerpt: '用算法洞察业务关键指标，助力科学决策。' }
          ]
        }
      },
      blog: {
        hero: {
          title: 'AI技术博客',
          subtitle: '探索人工智能前沿技术，分享行业洞察与实践经验',
          stats: [
            { number: '10+', label: '技术文章' },
            { number: '15+', label: '技术标签' },
            { number: '25+', label: '技术分享' },
            { number: '24h', label: '更新频率' }
          ]
        },
        featured: {
          title: '精选文章',
          description: '深度解析AI技术趋势与应用实践'
        },
        loading: '加载中...',
        loadFailedTitle: '加载失败',
        loadErrorMessage: '加载博客文章失败，请稍后重试',
        badgeTechnical: '技术文章',
        readMore: '阅读更多',
        searchPlaceholder: '搜索文章、标签...',
        categoryAll: '全部',
        sort: { latest: '最新发布', popular: '最受欢迎', featured: '精选推荐' },
        allPostsTitle: '全部文章',
        emptyTitle: '暂无相关文章',
        emptyDescription: '请尝试调整搜索条件或浏览其他分类',
        tagsCloud: {
          title: '热门标签',
          description: '探索更多相关技术话题',
          tags: ['人工智能', '机器学习', '深度学习', '自然语言处理', '计算机视觉', '数据科学', '技术趋势']
        },
        newsletter: {
          title: '订阅我们的技术周刊',
          description: '每周获取最新的AI技术动态、行业洞察和实践案例',
          emailPlaceholder: '输入您的邮箱地址',
          button: '订阅'
        },
        readMinutes: '5分钟'
      },
      contact: {
        hero: {
          title: '联系我们',
          subtitle: '让我们一起探讨如何通过AI技术助力您的企业发展',
          stats: [
            { number: '50+', label: '服务客户' },
            { number: '24h', label: '响应时间' },
            { number: '98%', label: '客户满意度' },
            { number: '5年', label: '行业经验' }
          ]
        },
        form: {
          title: '免费咨询',
          description: '填写下方表单，我们的专家将在24小时内与您联系，为您提供专业的AI解决方案建议。',
          labels: {
            name: '姓名 *',
            email: '邮箱 *',
            phone: '电话',
            company: '公司名称',
            interestedService: '感兴趣的服务',
            message: '详细需求 *'
          },
          placeholders: {
            name: '请输入您的姓名',
            email: '请输入您的邮箱',
            phone: '请输入您的电话',
            company: '请输入公司名称',
            message: '请详细描述您的需求，我们将为您提供更精准的解决方案'
          },
          serviceOptions: ['AI教育培训','智能自动化','数据分析','AI咨询','定制开发','技术支持','其他服务'],
          selectPlaceholder: '请选择服务类型',
          submitIdle: '提交咨询',
          submitting: '提交中...',
          successMessage: '提交成功！我们将在24小时内与您联系。',
          errorMessage: '提交失败，请稍后重试或直接联系我们。',
          interestedServiceLabel: '感兴趣的服务'
        },
        info: {
          title: '联系信息',
          description: '多种联系方式，选择最适合您的沟通渠道。',
          items: [
            { title: '公司地址', content: '香港英皇道653-659地下B座', subContent: '' },
            { title: '邮箱地址', content: 'info@xrexp.io', subContent: '24小时内回复' },
            { title: '工作时间', content: '周一至周五 9:00-18:00', subContent: '周六 9:00-12:00' }
          ]
        },
        additional: {
          title: '为什么选择我们？',
          items: [
            '专业的AI技术团队，5年行业经验',
            '50+成功案例，覆盖多个行业',
            '24小时快速响应，全程跟踪服务',
            '定制化解决方案，满足个性需求'
          ]
        },
        map: {
          title: '公司位置',
          description: '欢迎您到访我们的办公室，面对面交流合作事宜',
          loading: '地图加载中...',
          address: '香港英皇道653-659地下B座'
        },
        cta: {
          title: '准备开始您的AI转型之旅？',
          description: '立即联系我们，获取专业的AI解决方案咨询服务',
          callNow: '立即致电',
          sendEmail: '发送邮件'
        }
      },
      about: {
        sectionTitles: {
          companyIntro: '企业简介',
          coreValues: '核心价值观',
          team: '核心团队',
          achievements: '荣誉资质',
          timeline: '发展历程'
        },
        hero: {
          title: '关于XRE-AI',
          subtitle: '专注人工智能技术创新，致力于为企业数字化转型提供智能解决方案',
          metrics: {
            customers: { value: '50+', label: '服务客户' },
            team: { value: '10+', label: '专业团队' },
            patents: { value: '10+', label: '专利软著' },
            experience: { value: '5年', label: '行业经验' }
          }
        },
        intro: {
          p1: 'XRE-AI成立于2020年，是一家专注于人工智能技术研发和应用的国家高新技术企业。我们致力于将前沿的AI技术转化为实用的商业解决方案，帮助企业实现智能化转型升级。',
          p2: '公司拥有一支由清华、北大、中科院等知名院校博士和行业专家组成的技术团队，在机器学习、深度学习、自然语言处理、计算机视觉等领域具有深厚的技术积累和丰富的项目经验。',
          p3: '我们秉承"技术创新、客户至上"的理念，已为金融、制造、教育、医疗等多个行业的50+企业客户提供了专业的AI解决方案，获得了客户的一致好评和行业的广泛认可。'
        },
        mission: {
          title: '我们的使命',
          text: '让人工智能技术普惠每一个企业，推动社会生产力的智能化升级'
        },
        vision: {
          title: '我们的愿景',
          text: '成为中国领先的企业AI解决方案提供商，引领行业技术创新发展'
        },
        values: [
          { title: '创新驱动', description: '持续投入研发，追求技术创新，为客户提供领先的AI解决方案' },
          { title: '客户至上', description: '以客户需求为导向，提供个性化服务，确保客户成功' },
          { title: '诚信合作', description: '秉承诚信原则，与合作伙伴建立长期互信的合作关系' },
          { title: '追求卓越', description: '精益求精，不断提升服务质量和技术水平，追求行业领先' }
        ],
        team: {
          subtitle: '我们拥有一支经验丰富、技术精湛的专业团队，致力于为客户提供最优质的AI解决方案',
          members: [
            { name: 'Angus', position: '香港分公司董事长' },
            { name: '王鲁民', position: '山东分公司董事长' },
            { name: 'Logan', position: '首席技术官' }
          ]
        },
        achievements: [
          { year: '2023', title: '国家高新技术企业', description: '获得国家高新技术企业认定，技术实力获得权威认可' },
          { year: '2023', title: 'AI 创新应用奖', description: '在人工智能创新应用领域获得行业权威奖项' },
          { year: '2022', title: 'ISO 27001 认证', description: '通过国际信息安全管理体系认证，保障数据安全' },
          { year: '2024', title: '技术专利 20+', description: '在 AI 核心技术领域拥有多项发明专利和软件著作权' }
        ],
        milestones: [
          { year: '2020', event: '公司成立，专注AI技术研发' },
          { year: '2021', event: '完成天使轮融资' },
          { year: '2022', event: '推出首个AI产品' },
          { year: '2023-2025', event: '业务覆盖全球包含上海北京香港伦敦新加坡等' }
        ]
      },
      aiEducation: {
        intro: '我们提供系统化的 AI 教育训练课程，涵盖人工智能基础、机器学习、深度学习、数据处理与工程化落地，帮助团队从零到一建立 AI 能力。',
        section1: {
          title: '课程模块',
          items: ['AI 基础与行业应用','机器学习与模型评估','深度学习与计算机视觉/NLP','数据工程与 MLOps 实践']
        },
        section2: {
          title: '交付形式',
          items: ['线上直播/录播课程','线下企业内训与工作坊','项目式实战与指导','认证与能力评估']
        },
        ctaText: '想为团队定制训练计划？联系我们获取课程大纲与排期。'
      },
      intelligentAutomation: {
        intro: '借助 AI 与自动化技术优化业务流程，减少人工重复劳动，提升效率与准确性，支持与现有系统无缝集成与扩展。',
        section1: {
          title: '应用场景',
          items: ['文档与表单自动处理','客服与运营机器人（RPA + LLM）','订单审批与风控自动化','监控报警与自动响应']
        },
        section2: {
          title: '实施方法',
          items: ['流程梳理与价值评估','自动化方案设计与验证','部署集成与权限治理','效能度量与持续优化']
        },
        ctaText: '需要落地自动化场景？我们可提供端到端方案与实施。'
      },
      dataAnalysis: {
        intro: '从数据采集、治理到分析建模与可视化洞察，帮助企业构建数据驱动的决策能力，沉淀可复用的数据资产与指标体系。',
        section1: {
          title: '能力组件',
          items: ['数据采集与清洗治理','特征工程与建模评估','可视化与指标体系','报表自动生成与分发']
        },
        section2: {
          title: '交付成果',
          items: ['数据质量与血缘报告','模型与实验记录','可视化仪表盘','业务洞察与优化建议']
        },
        ctaText: '需要构建数据分析体系？我们可协助从零到一搭建。'
      },
      aiConsulting: {
        intro: '从战略到落地的全链路咨询服务：评估现状、制定路线图、选择技术栈、设计治理与安全体系，确保 AI 转型可控、可量化、可迭代。',
        section1: {
          title: '咨询内容',
          items: ['AI 战略与目标设定','数据与平台能力评估','组织能力与人才培养','安全合规与风险治理']
        },
        section2: {
          title: '交付物',
          items: ['转型路线图与阶段目标','技术选型与架构建议','治理流程与度量指标','试点项目方案与 PoC 结果']
        },
        ctaText: '希望制定 AI 转型路线图？我们提供一对一咨询与评估。'
      },
      customDevelopment: {
        intro: '基于业务需求提供 AI/软件定制开发，包括原型设计、模型训练、前后端开发与系统集成，确保按时高质量交付可用产品。',
        section1: {
          title: '覆盖范围',
          items: ['LLM 应用与智能助手','计算机视觉与语音方案','数据平台与 API 服务','跨端前端与移动开发']
        },
        section2: {
          title: '开发流程',
          items: ['需求分析与原型设计','技术选型与架构设计','迭代开发与验收测试','上线交付与运维保障']
        },
        ctaText: '有明确开发需求？我们可提供快速原型与敏捷交付。'
      },
      technicalSupport: {
        intro: '为您的 AI 与软件系统提供稳定可靠的技术支持，覆盖运维、监控、故障排查、性能优化与安全合规，保障业务连续性。',
        section1: {
          title: '支持内容',
          items: ['上线部署与环境配置','监控报警与 SLO/SLA','疑难问题定位与修复','安全与合规加固']
        },
        section2: {
          title: '服务模式',
          items: ['按需支持与工单服务','驻场支持与远程协作','7x24 快速响应通道','定期巡检与优化报告']
        },
        ctaText: '需要稳定的技术保障？我们提供多层级支持方案。'
      }
    },
    blogDetail: {
      backToList: '返回博客列表',
      notFoundTitle: '文章未找到',
      authorLabel: '作者',
      likes: '点赞',
      comments: '评论',
      aboutAuthor: '关于作者',
      viewMoreArticles: '查看更多文章',
      followAuthor: '关注作者',
      relatedPosts: '相关文章',
      commentsTitle: '评论',
      reply: '回复',
      likeAction: '点赞'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', blog: 'Blog', contact: 'Contact', toggle: '中文' },
  footer: {
      services: 'Our Services',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      tagline: 'We focus on enterprise AI transformation with end-to-end services.'
  },
  blogDetail: {
    backToList: 'Back to Blog',
    notFoundTitle: 'Post Not Found',
    authorLabel: 'Author',
    likes: 'likes',
    comments: 'comments',
    aboutAuthor: 'About the Author',
    viewMoreArticles: 'View More Articles',
    followAuthor: 'Follow Author',
    relatedPosts: 'Related Posts',
    commentsTitle: 'Comments',
    reply: 'Reply',
    likeAction: 'Like'
  },
    services: {
      heading: 'Our Core Services',
      subheading: 'We provide end-to-end services from AI training to implementation to help enterprises transform intelligently.',
      learnMore: 'Learn More',
      aiEducation: 'AI Education',
      intelligentAutomation: 'Intelligent Automation',
      dataAnalysis: 'Data Analysis',
      aiConsulting: 'AI Consulting',
      customDevelopment: 'Custom Development',
      technicalSupport: 'Technical Support'
    },
    cta: { contactUs: 'Contact Us' },
    pages: {
      home: {
        hero: {
          titleBefore: 'Leading Enterprise',
          titleEmphasis: 'AI Transformation',
          titleAfter: 'Create an Intelligent Future',
          description: 'Transform operations with cutting-edge AI to boost efficiency and competitiveness',
          metrics: [
            { value: '50+', label: 'Successful Cases' },
            { value: '98%', label: 'Customer Satisfaction' },
            { value: '25+', label: 'Professional Team' },
            { value: '24/7', label: 'Technical Support' }
          ]
        },
        services: {
          aiEducationDesc: 'Build AI talent from foundational to advanced for your teams',
          intelligentAutomationDesc: 'Automate processes to significantly improve efficiency and accuracy',
          dataAnalysisDesc: 'Extract insights from data to inform smarter decisions',
          aiConsultingDesc: 'End-to-end AI consulting from strategy to implementation',
          customDevelopmentDesc: 'Tailor AI systems to fit your specific business needs',
          technicalSupportDesc: 'Provide professional support to keep systems reliable'
        },
        achievements: {
          title: 'Our Achievements',
          description: 'Years of AI expertise helping industries upgrade intelligently',
          stats: [
            { value: '50+', label: 'Clients Served' },
            { value: '100+', label: 'Successful Projects' },
            { value: '25+', label: 'Industry Awards' },
            { value: '98%', label: 'Customer Satisfaction' }
          ]
        },
        testimonials: {
          title: 'Client Testimonials',
          items: [
            { quote: 'With AI automation, our delivery cycle shortened by 40% and efficiency improved significantly.', initial: 'L', name: 'Li Hua', role: 'CTO, Manufacturing Company' },
            { quote: 'The data analytics platform helped us identify growth opportunities, increasing revenue by 35% year-over-year.', initial: 'W', name: 'Wang Min', role: 'Director of Data, Retail Group' }
          ]
        },
        news: {
          title: 'Latest News',
          description: 'Insights into the latest AI trends and real-world applications',
          readMore: 'Read More',
          viewMore: 'View More Articles',
          articles: [
            { tag: 'AI', date: 'Jan 15, 2024', title: 'AI Trends Forecast for 2024', excerpt: 'From foundation models to industry applications, AI moves deeper into the mainstream.' },
            { tag: 'Automation', date: 'Jan 10, 2024', title: 'Guide to Implementing Intelligent Automation in Enterprises', excerpt: 'From process mapping to system setup, achieve end-to-end automation.' },
            { tag: 'Data', date: 'Jan 5, 2024', title: 'Best Practices for AI-Driven Data Analytics', excerpt: 'Use algorithms to reveal key business metrics and support data-driven decisions.' }
          ]
        }
      },
      blog: {
        hero: {
          title: 'AI Tech Blog',
          subtitle: 'Explore cutting-edge AI, share industry insights and practices',
          stats: [
            { number: '10+', label: 'Technical Articles' },
            { number: '15+', label: 'Tech Tags' },
            { number: '25+', label: 'Tech Shares' },
            { number: '24h', label: 'Update Frequency' }
          ]
        },
        featured: {
          title: 'Featured Articles',
          description: 'In-depth analysis of AI trends and practical applications'
        },
        loading: 'Loading...',
        loadFailedTitle: 'Load Failed',
        loadErrorMessage: 'Failed to load blog posts. Please try again later.',
        badgeTechnical: 'Technical',
        readMore: 'Read More',
        searchPlaceholder: 'Search posts, tags...',
        categoryAll: 'All',
        sort: { latest: 'Latest', popular: 'Popular', featured: 'Featured' },
        allPostsTitle: 'All Posts',
        emptyTitle: 'No related posts',
        emptyDescription: 'Try adjusting search or browse other categories',
        tagsCloud: {
          title: 'Popular Tags',
          description: 'Explore more related topics',
          tags: ['AI', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Science', 'Tech Trends']
        },
        newsletter: {
          title: 'Subscribe to our weekly',
          description: 'Get the latest AI updates, industry insights, and case studies weekly',
          emailPlaceholder: 'Enter your email address',
          button: 'Subscribe'
        },
        readMinutes: '5 min'
      },
      contact: {
        hero: {
          title: 'Contact Us',
          subtitle: 'Let’s discuss how AI can accelerate your business.',
          stats: [
            { number: '50+', label: 'Customers' },
            { number: '24h', label: 'Response Time' },
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '5 years', label: 'Industry Experience' }
          ]
        },
        form: {
          title: 'Free Consultation',
          description: 'Fill out the form below and our experts will contact you within 24 hours with professional AI solution advice.',
          labels: {
            name: 'Name *',
            email: 'Email *',
            phone: 'Phone',
            company: 'Company',
            interestedService: 'Interested Service',
            message: 'Detailed Requirements *'
          },
          placeholders: {
            name: 'Enter your name',
            email: 'Enter your email',
            phone: 'Enter your phone',
            company: 'Enter your company',
            message: 'Please describe your requirements so we can provide a more precise solution'
          },
          serviceOptions: ['AI Education','Intelligent Automation','Data Analysis','AI Consulting','Custom Development','Technical Support','Other'],
          selectPlaceholder: 'Please select a service type',
          submitIdle: 'Submit Inquiry',
          submitting: 'Submitting...',
          successMessage: 'Submitted successfully! We will contact you within 24 hours.',
          errorMessage: 'Submission failed. Please retry later or contact us directly.',
          interestedServiceLabel: 'Interested Service'
        },
        info: {
          title: 'Contact Info',
          description: 'Multiple contact methods. Choose the one that suits you best.',
          items: [
            { title: 'Address', content: 'G/F, Shop B, 653-659 King’s Road, Hong Kong', subContent: '' },
            { title: 'Email', content: 'info@xrexp.io', subContent: 'Reply within 24 hours' },
            { title: 'Hours', content: 'Mon–Fri 9:00–18:00', subContent: 'Sat 9:00–12:00' }
          ]
        },
        additional: {
          title: 'Why Choose Us?',
          items: [
            'Professional AI team with 5 years of experience',
            '50+ successful cases across multiple industries',
            '24-hour rapid response with full lifecycle support',
            'Tailored solutions to meet specific needs'
          ]
        },
        map: {
          title: 'Our Location',
          description: 'Visit our office for in-person collaboration discussions.',
          loading: 'Loading map...',
          address: 'G/F, Shop B, 653-659 King’s Road, Hong Kong'
        },
        cta: {
          title: 'Ready to start your AI transformation?',
          description: 'Contact us now to get professional AI solution consulting.',
          callNow: 'Call Now',
          sendEmail: 'Send Email'
        }
      },
      about: {
        sectionTitles: {
          companyIntro: 'Company Introduction',
          coreValues: 'Core Values',
          team: 'Core Team',
          achievements: 'Achievements',
          timeline: 'Timeline'
        },
        hero: {
          title: 'About XRE-AI',
          subtitle: 'We focus on AI innovation and provide intelligent solutions for enterprise digital transformation.',
          metrics: {
            customers: { value: '50+', label: 'Customers' },
            team: { value: '10+', label: 'Team Members' },
            patents: { value: '10+', label: 'Patents' },
            experience: { value: '5 years', label: 'Industry Experience' }
          }
        },
        intro: {
          p1: 'Founded in 2020, XRE-AI is a national high-tech enterprise focusing on AI R&D and applications. We transform cutting-edge AI into practical business solutions to help enterprises upgrade intelligently.',
          p2: 'Our team consists of PhDs and industry experts from top institutions such as Tsinghua, Peking University, and CAS, with deep expertise in machine learning, deep learning, NLP, and computer vision.',
          p3: "Upholding 'technology innovation and customer-first', we have delivered professional AI solutions to 50+ enterprise customers across finance, manufacturing, education, and healthcare, earning broad industry recognition."
        },
        mission: {
          title: 'Our Mission',
          text: 'Make AI accessible to every enterprise and advance productivity through intelligent transformation.'
        },
        vision: {
          title: 'Our Vision',
          text: 'Become a leading enterprise AI solutions provider in China and drive industry innovation.'
        },
        values: [
          { title: 'Innovation Driven', description: 'Invest continuously in R&D and pursue technological innovation to deliver leading AI solutions.' },
          { title: 'Customer First', description: 'Be customer-oriented, provide personalized services, and ensure customer success.' },
          { title: 'Integrity & Partnership', description: 'Uphold integrity and build long-term trusted partnerships.' },
          { title: 'Pursuit of Excellence', description: 'Strive for excellence and continuously improve service quality and technical capability.' }
        ],
        team: {
          subtitle: 'We have an experienced, highly skilled team dedicated to delivering the best AI solutions for our clients.',
          members: [
            { name: 'Angus', position: 'Chairman, Hong Kong Branch' },
            { name: 'Wang Lumin', position: 'Chairman, Shandong Branch' },
            { name: 'Logan', position: 'Chief Technology Officer' }
          ]
        },
        achievements: [
          { year: '2023', title: 'National High-Tech Enterprise', description: 'Recognized as a national high-tech enterprise for strong technical capabilities.' },
          { year: '2023', title: 'AI Innovation Award', description: 'Awarded by industry authorities for innovation in AI applications.' },
          { year: '2022', title: 'ISO 27001 Certification', description: 'Certified for information security management to safeguard data.' },
          { year: '2024', title: '20+ Technology Patents', description: 'Own multiple invention patents and software copyrights in core AI technologies.' }
        ],
        milestones: [
          { year: '2020', event: 'Company founded, focusing on AI R&D' },
          { year: '2021', event: 'Completed angel round financing' },
          { year: '2022', event: 'Released first AI product' },
          { year: '2023-2025', event: 'Expanded globally to Shanghai, Beijing, Hong Kong, London, Singapore, etc.' }
        ]
      },
      aiEducation: {
        intro: 'We provide structured AI training covering AI fundamentals, ML, DL, data processing and engineering practices to help teams build AI capability from zero to one.',
        section1: {
          title: 'Course Modules',
          items: ['AI Fundamentals and Industry Applications','Machine Learning and Model Evaluation','Deep Learning with Computer Vision/NLP','Data Engineering and MLOps Practice']
        },
        section2: {
          title: 'Delivery Formats',
          items: ['Online live/recorded courses','Onsite corporate training and workshops','Project-based hands-on guidance','Certification and capability assessment']
        },
        ctaText: 'Want a tailored training plan? Contact us for syllabus and schedule.'
      },
      intelligentAutomation: {
        intro: 'Leverage AI and automation to optimize business processes, reduce repetitive work, improve efficiency and accuracy, and integrate seamlessly with existing systems.',
        section1: {
          title: 'Use Cases',
          items: ['Automated document and form processing','Customer service and operations bots (RPA + LLM)','Order approval and risk control automation','Monitoring alerts and automated responses']
        },
        section2: {
          title: 'Implementation Approach',
          items: ['Process mapping and value assessment','Automation solution design and validation','Deployment, integration, and access governance','Performance metrics and continuous improvement']
        },
        ctaText: 'Need to implement automation scenarios? We provide end-to-end solutions and delivery.'
      },
      dataAnalysis: {
        intro: 'From data ingestion and governance to modeling and visualization, we help build data-driven decision-making and reusable data assets and metrics.',
        section1: {
          title: 'Capability Components',
          items: ['Data ingestion and cleansing governance','Feature engineering and model evaluation','Visualization and metrics framework','Automated report generation and distribution']
        },
        section2: {
          title: 'Deliverables',
          items: ['Data quality and lineage reports','Model artifacts and experiment logs','Visualization dashboards','Business insights and optimization recommendations']
        },
        ctaText: 'Need to build a data analytics stack? We can help from zero to one.'
      },
      aiConsulting: {
        intro: 'End-to-end consulting from strategy to execution: assess current state, roadmap, tech stack selection, governance and security, ensuring controlled, measurable, iterative AI transformation.',
        section1: {
          title: 'Consulting Scope',
          items: ['AI strategy and goal setting','Data and platform capability assessment','Organizational capability and talent development','Security compliance and risk governance']
        },
        section2: {
          title: 'Deliverables',
          items: ['Transformation roadmap and phase goals','Technology selection and architecture recommendations','Governance processes and metrics','Pilot project plan and PoC outcomes']
        },
        ctaText: 'Want an AI transformation roadmap? We offer 1-on-1 consulting and assessment.'
      },
      customDevelopment: {
        intro: 'Custom AI/software development based on business needs, including prototyping, model training, front/back-end development and system integration, delivering usable products on time with high quality.',
        section1: {
          title: 'Coverage',
          items: ['LLM applications and intelligent assistants','Computer vision and speech solutions','Data platforms and API services','Cross-platform front-end and mobile development']
        },
        section2: {
          title: 'Development Process',
          items: ['Requirements analysis and prototyping','Technology selection and architecture design','Iterative development and acceptance testing','Release delivery and operations support']
        },
        ctaText: 'Have clear development needs? We provide rapid prototyping and agile delivery.'
      },
      technicalSupport: {
        intro: 'Reliable technical support for your AI and software systems, covering operations, monitoring, troubleshooting, performance tuning and compliance to ensure business continuity.',
        section1: {
          title: 'Support Scope',
          items: ['Release deployment and environment setup','Monitoring, alerts and SLO/SLA','Incident triage and resolution','Security hardening and compliance']
        },
        section2: {
          title: 'Service Models',
          items: ['On-demand support and ticketing','Onsite support and remote collaboration','24/7 rapid response','Regular health checks and optimization reports']
        },
        ctaText: 'Need reliable technical assurance? We offer multi-tier support plans.'
      }
    }
  }
} as const

export type Translations = typeof translations