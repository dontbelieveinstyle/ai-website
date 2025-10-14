import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold">瑞比智慧</span>
            </div>
            <p className="text-blue-200 mb-4">
              专注于企业 AI 转型，提供从教育训练到技术实施的一站式服务。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-orange-400 transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-orange-400 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-orange-400 transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-orange-400 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">我们的服务</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/service/ai-education" className="text-blue-200 hover:text-orange-400 transition-colors">
                  AI 教育训练
                </Link>
              </li>
              <li>
                <Link to="/service/intelligent-automation" className="text-blue-200 hover:text-orange-400 transition-colors">
                  智能自动化
                </Link>
              </li>
              <li>
                <Link to="/service/data-analysis" className="text-blue-200 hover:text-orange-400 transition-colors">
                  数据分析
                </Link>
              </li>
              <li>
                <Link to="/service/ai-consulting" className="text-blue-200 hover:text-orange-400 transition-colors">
                  AI 咨询
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系信息</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-orange-400" />
                <span className="text-blue-200 text-sm">
                  台北市信义区信义路五段7号
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <span className="text-blue-200 text-sm">
                  +886-2-1234-5678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <span className="text-blue-200 text-sm">
                  contact@airabbi.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            &copy; 2024 瑞比智慧 airabbi. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;