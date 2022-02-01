import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { LocalizationContext } from '../common/contexts/localization-context'

type SectionProps = {
  imageOffset: number
}

const Section = styled.section.attrs(({ imageOffset }: SectionProps) => ({
  style: {
    backgroundPosition: `50% ${imageOffset}%`,
  },
}))<SectionProps>`
  height: 650px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://storage.googleapis.com/brunoluvizotto-public/images/coding-background.webp');
  background-repeat: no-repeat;
  background-size: cover;
`

const Name = styled.p`
  color: white;
  font-size: 60px;
  text-align: center;
`

const Profession = styled.p`
  color: #ffffff99;
  font-size: 40px;
  text-align: center;
`

export const NameSection: FC = () => {
  const horizontalOffset = 20
  const horizontalPositionFactor = 0.035
  const [imageOffset, setImageOffset] = useState(50)
  const ref = useRef<HTMLElement>(null)

  const { localization } = useContext(LocalizationContext)

  const calculateOffset = () => {
    if (!ref.current) {
      return
    }

    const { top, bottom } = ref.current.getBoundingClientRect()
    const centerPosition = (top + bottom) / 2

    const newOffset = 50 + horizontalOffset - (window.innerHeight - centerPosition) * horizontalPositionFactor
    setImageOffset(newOffset)
  }

  useEffect(() => {
    calculateOffset()
    document.addEventListener('scroll', calculateOffset, true)
    return () => document.removeEventListener('scroll', calculateOffset, true)
  })

  return (
    <Section imageOffset={imageOffset} ref={ref}>
      <Name>Bruno Luvizotto</Name>
      <Profession>{localization('jobTitle')}</Profession>
    </Section>
  )
}
