import { createContext, FC, useEffect, useState } from 'react'
import { localStorageKeys } from '../../contants/local-storage-keys'
import { Language, translations } from './translations'

type LocalizationFunction = (text: string) => string

type UseLocalizationType = {
  localization: LocalizationFunction
  language: Language
  setLanguage: (language: Language) => void
}

const defaultLanguage = Language.PT_BR

const defaultReturnObject = {
  localization: (value: string) => value,
  language: defaultLanguage,
  setLanguage: () => {},
}

export const LocalizationContext = createContext<UseLocalizationType>(defaultReturnObject)

type Props = {
  children?: React.ReactNode
}

export const LocalizationProvider: FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  useEffect(() => {
    const language = localStorage.getItem(localStorageKeys.LANGUAGE) as Language
    setLanguage(language || defaultLanguage)
  }, [])

  useEffect(() => {
    if (!language) {
      return
    }

    localStorage.setItem(localStorageKeys.LANGUAGE, language)
  }, [language])

  function localization(textReference: string) {
    return translations[language][textReference]
  }

  return (
    <LocalizationContext.Provider value={{ localization, language, setLanguage }}>
      {children}
    </LocalizationContext.Provider>
  )
}
