import Image from 'next/image'
import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
import { LocalizationContext } from '../../contexts/localization-context'
import { Language } from '../../contexts/localization-context/translations'

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
`

type ImageContainerProps = {
  isVisible: boolean
}

const ImageContainer = styled.div<ImageContainerProps>`
  height: 25px;
  width: 40px;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: 0.4s;
`

export const LanguageSelector: FC = () => {
  const { language, setLanguage } = useContext(LocalizationContext)
  const [isVisible, setIsVisible] = useState(false)

  const flags = getFlags(language)

  const handleClick = (isClickable: boolean, newLanguage: Language) => () => {
    if (isClickable && isVisible) {
      setLanguage(newLanguage)
      setIsVisible(false)
    }
  }

  return (
    <Wrapper onMouseLeave={() => setIsVisible(false)}>
      {flags.map((flag, index) => {
        const isClickable = index > 0
        return (
          <ImageContainer
            key={flag.language + index}
            isVisible={index === 0 ? true : isVisible}
            onMouseEnter={() => index === 0 && setIsVisible(true)}
          >
            <Image
              src={flag.imgSrc}
              height={25}
              width={40}
              layout="fixed"
              onClick={handleClick(isClickable, flag.language)}
            />
          </ImageContainer>
        )
      })}
    </Wrapper>
  )
}

function getFlags(currentLanguage: Language) {
  const brazilianFlag = { language: Language.PT_BR, imgSrc: '/images/brazilian-flag.webp' }
  const americanFlag = { language: Language.EN_US, imgSrc: '/images/american-flag.webp' }

  if (currentLanguage === Language.PT_BR) {
    return [brazilianFlag, americanFlag]
  }

  return [americanFlag, brazilianFlag]
}
