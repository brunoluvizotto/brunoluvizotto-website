import Image from 'next/image'
import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
import { LocalizationContext } from '../../contexts/localization-context'
import { Language } from '../../contexts/localization-context/translations'

type ImageContainerProps = {
  isVisible: boolean
  isClickable?: boolean
}

const Wrapper = styled.div<ImageContainerProps>`
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${props => (props.isVisible ? 'white' : 'transparent')};
  transition: 0.4s;
  box-shadow: ${props => (props.isVisible ? '0px 1px 8px -2px' : '')};
`

const ImageContainer = styled.div<ImageContainerProps>`
  height: 25px;
  width: 40px;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  cursor: ${props => (props.isClickable && props.isVisible ? 'pointer' : 'default')};
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
    <Wrapper isVisible={isVisible} onMouseLeave={() => setIsVisible(false)}>
      {flags.map((flag, index) => {
        const isClickable = index > 0
        return (
          <ImageContainer
            key={flag.language + index}
            isVisible={index === 0 ? true : isVisible}
            isClickable={index > 0}
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
  const brazilianFlag = {
    language: Language.PT_BR,
    imgSrc: 'https://storage.googleapis.com/brunoluvizotto-public/images/brazilian-flag.webp',
  }
  const americanFlag = {
    language: Language.EN_US,
    imgSrc: 'https://storage.googleapis.com/brunoluvizotto-public/images/american-flag.webp',
  }

  if (currentLanguage === Language.PT_BR) {
    return [brazilianFlag, americanFlag]
  }

  return [americanFlag, brazilianFlag]
}
