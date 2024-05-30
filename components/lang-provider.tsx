import { createContext } from "react"
import { i18n, Locale } from "@/i18n-config"
import { getDictionary } from "@/lib/dictionary"

interface LangContextProps {
  lang: Locale
}
export const LangContext = createContext<LangContextProps>({
  lang: i18n.defaultLocale
})

interface LangProviderProps {
  children: React.ReactNode
  lang: Locale
}

export const LangProvider = ({ children, lang }: LangProviderProps) => {
  const dictionary = async () => {
    return await getDictionary(lang)
  }

  const hero = async () => {
    const dic = await dictionary()
    return dic.landing.hero
  }

  const values = {
    lang,
    hero
  }

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>
}
