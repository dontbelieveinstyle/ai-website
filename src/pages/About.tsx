import React, { useEffect } from 'react';
import { Award, Users, Target, TrendingUp, Globe, Shield, Lightbulb, Heart, Star, CheckCircle } from 'lucide-react';
import angusImg from '../assets/angus.jpg';
import loganImg from '../assets/logan.jpg';
import xxxImg from '../assets/xxx.jpg';
import edwinImg from '../assets/edwin.jpg';
import jinImg from '../assets/jin.jpg';
import { useI18n } from '../i18n/LanguageProvider';
import { translations } from '../i18n/translations';

const About: React.FC = () => {
  // 强制Vite在构建时包含这些图片
  useEffect(() => {
    // 预加载图片，确保它们被包含在构建中
    const preloadImages = [angusImg, loganImg, xxxImg, edwinImg, jinImg];
    preloadImages.forEach(img => {
      const image = new Image();
      image.src = img;
    });
  }, []);
  const { language } = useI18n();
  const dict = translations[language].pages.about;
  const valueIcons = [Lightbulb, Users, Heart, Target];
  const achievementIcons = [Award, Star, Shield, Globe];
  const teamImages = [angusImg, xxxImg, edwinImg, loganImg, jinImg];
  const teamMembers = dict.team.members;
  const topMembers = teamMembers.slice(0, 3);
  const bottomMembers = teamMembers.slice(3);
  const topImages = teamImages.slice(0, 3);
  const bottomImages = teamImages.slice(3);

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
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{dict.hero.metrics.customers.value}</div>
                <div className="text-white text-opacity-80">{dict.hero.metrics.customers.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{dict.hero.metrics.team.value}</div>
                <div className="text-white text-opacity-80">{dict.hero.metrics.team.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{dict.hero.metrics.patents.value}</div>
                <div className="text-white text-opacity-80">{dict.hero.metrics.patents.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{dict.hero.metrics.experience.value}</div>
                <div className="text-white text-opacity-80">{dict.hero.metrics.experience.label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.sectionTitles.companyIntro}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{dict.intro.p1}</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{dict.intro.p2}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{dict.intro.p3}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{dict.mission.title}</h3>
              <p className="text-lg text-gray-700 mb-6">{dict.mission.text}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{dict.vision.title}</h3>
              <p className="text-lg text-gray-700">{dict.vision.text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.sectionTitles.coreValues}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.values.map((value, index) => {
              const IconComponent = valueIcons[index];
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.sectionTitles.team}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{dict.team.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {topMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img src={topImages[index]} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {bottomMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img src={bottomImages[index]} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.sectionTitles.achievements}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.achievements.map((achievement, index) => {
              const IconComponent = achievementIcons[index];
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dict.sectionTitles.timeline}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
            {dict.milestones.map((milestone, index) => (
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
