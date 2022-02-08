import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { LocalizationContext } from '../../contexts/localization-context'
import { Language } from '../../contexts/localization-context/translations'

const Wrapper = styled.div`
  height: 50px;
`

const Select = styled.select`
  height: 100%;
  color: #ffffff80;
  background-color: #373a47;
`

export const MobileLanguageSelector: FC = () => {
  const { language, setLanguage } = useContext(LocalizationContext)
  const flags = getFlags(language)

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language)
  }

  return (
    <Wrapper>
      <Select onChange={handleOnChange}>
        {flags.map(flag => (
          <option key={flag.language} label={flag.translatedLanguage}>
            {flag.language}
          </option>
        ))}
      </Select>
    </Wrapper>
  )
}

function getFlags(currentLanguage: Language) {
  const brazilianFlag = {
    language: Language.PT_BR,
    translatedLanguage: '🇧🇷 Português (Brasil)',
  }
  const americanFlag = {
    language: Language.EN_US,
    translatedLanguage: '🇺🇸 English (USA)',
  }

  if (currentLanguage === Language.PT_BR) {
    return [brazilianFlag, americanFlag]
  }

  return [americanFlag, brazilianFlag]
}
