import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, BookOpen } from 'lucide-react';
import { useI18n } from '../i18n/LanguageProvider';
import { blogAPI, BlogPost } from '../services/api';
import { translations } from '../i18n/translations';

// 使用后端的 BlogPost 类型定义

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useI18n();
  const blogDict = translations[language].pages.blog;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const data = await blogAPI.getPost(slug);
        setPost(data);
        setError(null);
      } catch (e) {
        console.error('Failed to fetch blog post:', e);
        setError(blogDict.loadErrorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug, language]);

  const dateLocale = language === 'zh' ? 'zh-CN' : 'en-US';
  const tagsLabel = language === 'zh' ? '标签' : 'Tags';
  
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{blogDict.loading}</p>
        </div>
      </div>
    );
  }

  if (!post || error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-4">{t('blogDetail.notFoundTitle')}</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            {t('blogDetail.backToList')}
          </Link>
        </div>
      </div>
    );
  }
  
  // 仅使用后端提供的字段，避免引用不存在的属性
  
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
            {t('blogDetail.backToList')}
          </Link>
          
          <div className="mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {translations[language].pages.blog.badgeTechnical}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-3 bg-blue-600 text-white flex items-center justify-center font-semibold">
                {(post.author && post.author[0].toUpperCase()) || ''}
              </div>
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-500">{t('blogDetail.authorLabel')}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.created_at).toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' })}
            </div>
            
            {null}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none break-words"
              style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}
            >
              {post.content || post.excerpt}
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{tagsLabel}</h3>
              <div className="flex flex-wrap gap-3">
                {/* 后端暂未提供标签，预留占位 */}
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;