import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Eye, ThumbsUp, MessageCircle } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  authorBio: string;
  authorAvatar: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // 模拟博客文章数据
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'AI在教育领域的革命性应用：个性化学习的未来',
      content: `
        <h2>引言</h2>
        <p>人工智能技术正在深刻改变教育行业的面貌。从传统的"一刀切"教学模式到个性化学习体验，AI技术为教育领域带来了前所未有的变革机遇。本文将深入探讨AI在教育领域的具体应用，以及它如何塑造未来的学习方式。</p>
        
        <h2>个性化学习路径</h2>
        <p>AI技术能够根据每个学生的学习习惯、能力水平和兴趣偏好，为其量身定制个性化的学习路径。通过分析学生的学习数据，AI系统可以：</p>
        <ul>
          <li>识别学生的知识薄弱点</li>
          <li>推荐适合的学习内容和难度</li>
          <li>调整学习节奏和方式</li>
          <li>提供实时的学习反馈</li>
        </ul>
        
        <h2>智能评估系统</h2>
        <p>传统的考试评估方式往往只能反映学生在特定时间点的表现，而AI驱动的智能评估系统能够：</p>
        <ul>
          <li>持续监测学生的学习进度</li>
          <li>提供多维度的能力评估</li>
          <li>预测学生的学习困难</li>
          <li>生成详细的学习报告</li>
        </ul>
        
        <h2>自适应教学内容</h2>
        <p>AI技术使得教学内容能够根据学生的实际需求进行动态调整。这包括：</p>
        <ul>
          <li>根据学习进度调整内容难度</li>
          <li>提供多种形式的学习材料</li>
          <li>智能推荐相关学习资源</li>
          <li>创建互动式学习体验</li>
        </ul>
        
        <h2>实际应用案例</h2>
        <p>目前，已有多家教育机构成功应用AI技术：</p>
        <ul>
          <li><strong>Khan Academy</strong>：使用AI为学生提供个性化练习推荐</li>
          <li><strong>Coursera</strong>：通过机器学习优化课程推荐系统</li>
          <li><strong>Duolingo</strong>：利用AI技术个性化语言学习体验</li>
        </ul>
        
        <h2>未来展望</h2>
        <p>随着AI技术的不断发展，我们可以期待：</p>
        <ul>
          <li>更加精准的学习分析</li>
          <li>虚拟现实与AI的结合</li>
          <li>情感智能在教育中的应用</li>
          <li>跨学科知识的智能整合</li>
        </ul>
        
        <h2>结论</h2>
        <p>AI在教育领域的应用正在开启一个全新的时代。通过个性化学习、智能评估和自适应内容，AI技术不仅提高了学习效率，更重要的是为每个学生提供了实现其潜能的机会。随着技术的不断进步，我们有理由相信，AI将继续推动教育行业向更加智能化、个性化的方向发展。</p>
      `,
      date: '2024-01-15',
      category: 'AI教育',
      author: '张博士',
      readTime: '8分钟',
      views: 1250,
      likes: 89,
      comments: 23,
      tags: ['人工智能', '教育科技', '个性化学习', '智能评估'],
      authorBio: '教育技术专家，专注于AI在教育领域的应用研究，拥有10年教育行业经验。',
      authorAvatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20doctor%20portrait%20headshot%20smiling%20confident%20academic%20researcher&image_size=square'
    },
    {
      id: 2,
      title: '企业数字化转型的关键成功要素与实施策略',
      content: `
        <h2>数字化转型的重要性</h2>
        <p>在当今快速变化的商业环境中，数字化转型已不再是选择题，而是企业生存和发展的必答题。成功的数字化转型能够帮助企业提高运营效率、增强客户体验、创新商业模式，并在激烈的市场竞争中保持领先地位。</p>
        
        <h2>关键成功要素</h2>
        <h3>1. 领导层的坚定承诺</h3>
        <p>数字化转型需要从高层开始，领导层必须：</p>
        <ul>
          <li>制定清晰的数字化愿景和战略</li>
          <li>投入足够的资源和预算</li>
          <li>建立跨部门协作机制</li>
          <li>持续推动变革进程</li>
        </ul>
        
        <h3>2. 技术架构的合理选择</h3>
        <p>选择合适的技术架构是成功的基础：</p>
        <ul>
          <li>云计算平台的选择和部署</li>
          <li>数据架构的设计和优化</li>
          <li>API和微服务架构</li>
          <li>安全性和合规性考虑</li>
        </ul>
        
        <h3>3. 组织变革管理</h3>
        <p>技术变革必须伴随组织变革：</p>
        <ul>
          <li>重新设计业务流程</li>
          <li>培养数字化人才</li>
          <li>建立敏捷工作方式</li>
          <li>创造创新文化</li>
        </ul>
        
        <h2>实施策略</h2>
        <h3>阶段性推进</h3>
        <p>数字化转型应该采用阶段性推进的策略：</p>
        <ol>
          <li><strong>评估现状</strong>：全面分析当前的技术和业务状况</li>
          <li><strong>制定规划</strong>：设定明确的目标和时间表</li>
          <li><strong>试点项目</strong>：选择关键业务进行试点</li>
          <li><strong>全面推广</strong>：基于试点经验进行全面部署</li>
          <li><strong>持续优化</strong>：不断改进和完善系统</li>
        </ol>
        
        <h2>常见挑战与解决方案</h2>
        <h3>技术挑战</h3>
        <ul>
          <li><strong>遗留系统整合</strong>：采用渐进式迁移策略</li>
          <li><strong>数据质量问题</strong>：建立数据治理体系</li>
          <li><strong>技能缺口</strong>：加强培训和外部合作</li>
        </ul>
        
        <h3>组织挑战</h3>
        <ul>
          <li><strong>变革阻力</strong>：加强沟通和培训</li>
          <li><strong>资源限制</strong>：合理规划和分配资源</li>
          <li><strong>文化冲突</strong>：逐步培养数字化文化</li>
        </ul>
        
        <h2>成功案例分析</h2>
        <p>许多企业已经成功完成了数字化转型：</p>
        <ul>
          <li><strong>制造业</strong>：通过IoT和AI实现智能制造</li>
          <li><strong>零售业</strong>：构建全渠道客户体验</li>
          <li><strong>金融业</strong>：开发数字化金融服务</li>
          <li><strong>医疗业</strong>：实现远程医疗和智能诊断</li>
        </ul>
        
        <h2>结论</h2>
        <p>数字化转型是一个复杂而长期的过程，需要企业在技术、组织、文化等多个层面进行深度变革。只有制定合理的策略、选择合适的技术、管理好变革过程，企业才能在数字化转型中获得成功，实现可持续发展。</p>
      `,
      date: '2024-01-12',
      category: '数字化转型',
      author: '李专家',
      readTime: '12分钟',
      views: 980,
      likes: 67,
      comments: 15,
      tags: ['数字化转型', '企业管理', '技术架构', '变革管理'],
      authorBio: '企业数字化转型顾问，帮助多家大型企业成功完成数字化转型。',
      authorAvatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20consultant%20portrait%20confident%20expert%20suit&image_size=square'
    }
  ];
  
  const post = blogPosts.find(p => p.id === parseInt(id || '1'));
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-4">文章未找到</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            返回博客列表
          </Link>
        </div>
      </div>
    );
  }
  
  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回博客列表
          </Link>
          
          <div className="mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center">
              <img 
                src={post.authorAvatar} 
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-500">作者</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
            
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              {post.views} 阅读
            </div>
            
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-2" />
              {post.likes} 点赞
            </div>
            
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              {post.comments} 评论
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">标签</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 cursor-pointer transition-colors"
                  >
                    <Tag className="w-4 h-4 inline mr-2" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    点赞 ({post.likes})
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    分享
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Author Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">关于作者</h3>
          <div className="flex items-start space-x-4">
            <img 
              src={post.authorAvatar} 
              alt={post.author}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.author}</h4>
              <p className="text-gray-600 mb-4">{post.authorBio}</p>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  查看更多文章
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  关注作者
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">相关文章</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {relatedPost.author}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Comments Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">评论 ({post.comments})</h3>
          
          {/* Comment Form */}
          <div className="mb-8">
            <textarea 
              placeholder="写下您的评论..."
              rows={4}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="mt-4 flex justify-end">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                发表评论
              </button>
            </div>
          </div>
          
          {/* Sample Comments */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  王
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">王先生</span>
                    <span className="text-gray-500 text-sm">2024-01-16</span>
                  </div>
                  <p className="text-gray-700">
                    非常有见地的文章！AI在教育领域的应用确实前景广阔，期待看到更多实际案例的分享。
                  </p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <button className="hover:text-blue-600">回复</button>
                    <button className="hover:text-blue-600">点赞 (5)</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  李
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">李老师</span>
                    <span className="text-gray-500 text-sm">2024-01-16</span>
                  </div>
                  <p className="text-gray-700">
                    作为一名教育工作者，我深有感触。个性化学习确实是未来的趋势，但实施过程中还需要考虑更多实际问题。
                  </p>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <button className="hover:text-blue-600">回复</button>
                    <button className="hover:text-blue-600">点赞 (3)</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;