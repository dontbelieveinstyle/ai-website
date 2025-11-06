import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, Clock, ArrowRight, Filter, BookOpen, TrendingUp } from 'lucide-react';
import { blogAPI, BlogPost } from '../services/api';
import { useI18n } from '../i18n/LanguageProvider';
import { translations } from '../i18n/translations';

// BlogPost interface is now imported from api.ts

const Blog: React.FC = () => {
  const { t, language } = useI18n();
  const dict = translations[language].pages.blog;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('latest');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const posts = await blogAPI.getPosts();
        setBlogPosts(posts);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        setError(t('pages.blog.loadErrorMessage'));
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [t]);

  // 语言切换时同步分类默认值
  useEffect(() => {
    setSelectedCategory(dict.categoryAll);
  }, [language]);

  const categories = [dict.categoryAll, ...Array.from(new Set(blogPosts.map(() => dict.badgeTechnical)))];
  const allTags = Array.from(dict.tagsCloud.tags);

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // 分类筛选 (暂时跳过，因为后端数据没有category字段)
    // if (selectedCategory !== '全部') {
    //   filtered = filtered.filter(post => post.category === selectedCategory);
    // }

    // 搜索筛选
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 排序
    switch (sortBy) {
      case 'latest':
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'popular':
      case 'featured':
        // 保持原有顺序
        break;
    }

    return filtered;
  }, [blogPosts, searchTerm, selectedCategory, sortBy]);

  const featuredPosts = blogPosts.slice(0, 3);
  const stats = dict.hero.stats.map((s, i) => ({
    number: s.number,
    label: s.label,
    icon: [BookOpen, Tag, TrendingUp, Clock][i]
  }));

  const dateLocale = language === 'zh' ? 'zh-CN' : 'en-US';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{dict.hero.title}</h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
              {dict.hero.subtitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-2 text-white text-opacity-80" />
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white text-opacity-80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.featured.title}</h2>
            <p className="text-lg text-gray-600">{dict.featured.description}</p>
          </div>
          
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">{dict.loading}</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">{dict.loadFailedTitle}</h3>
              <p className="text-gray-500">{error}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                        {dict.badgeTechnical}
                      </span>

                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                  
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        {dict.readMore} <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={dict.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="latest">{dict.sort.latest}</option>
                  <option value="popular">{dict.sort.popular}</option>
                  <option value="featured">{dict.sort.featured}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {dict.allPostsTitle} ({filteredPosts.length})
            </h2>
          </div>
          
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">{dict.loading}</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">{dict.loadFailedTitle}</h3>
              <p className="text-gray-500">{error}</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">{dict.emptyTitle}</h3>
              <p className="text-gray-500">{dict.emptyDescription}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <img 
                    src={post.image || 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20technology%20abstract%20digital%20background&image_size=landscape_4_3'} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {dict.badgeTechnical}
                      </span>

                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {Array.from(dict.tagsCloud.tags).slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.created_at).toLocaleDateString(dateLocale)}
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.tagsCloud.title}</h2>
            <p className="text-lg text-gray-600">{dict.tagsCloud.description}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {allTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(tag)}
                className="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-md hover:shadow-lg"
              >
                <Tag className="w-4 h-4 inline mr-2" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {dict.newsletter.title}
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
            {dict.newsletter.description}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={dict.newsletter.emailPlaceholder}
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              {dict.newsletter.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;