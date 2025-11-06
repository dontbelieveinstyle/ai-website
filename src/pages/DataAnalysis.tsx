import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageProvider'
import { translations } from '../i18n/translations'

function DataAnalysis() {
  const { t, language } = useI18n()
  const dict = translations[language].pages.dataAnalysis
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">{t('services.dataAnalysis')}</h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          {dict.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">{dict.section1.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {dict.section1.items.map((item: string) => (<li key={item}>{item}</li>))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">{dict.section2.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {dict.section2.items.map((item: string) => (<li key={item}>{item}</li>))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-green-50 border border-green-100 rounded-xl p-6">
          <p className="text-green-800 text-center sm:text-left">{dict.ctaText}</p>
          <Link to="/contact" className="w-full sm:w-auto text-center px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">{t('cta.contactUs')}</Link>
        </div>
      </div>
    </div>
  )
}

export default DataAnalysis