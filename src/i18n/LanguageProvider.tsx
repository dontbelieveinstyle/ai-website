import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
// Use explicit .ts extension to satisfy TS "bundler" moduleResolution
import { translations } from './translations.ts'

type Lang = 'zh' | 'en'

type I18nContextValue = {
  language: Lang
  setLanguage: (lang: Lang) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    return saved ?? 'zh'
  })

  useEffect(() => {
    localStorage.setItem('lang', language)
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
  }, [language])

  const t = useMemo(() => {
    return (key: string) => {
      const dict = translations[language] || {}
      return (key.split('.').reduce((acc: any, k) => (acc ? acc[k] : undefined), dict) as string) || key
    }
  }, [language])

  const value: I18nContextValue = {
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh')),
    t,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}