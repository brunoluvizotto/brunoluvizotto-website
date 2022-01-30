import React, { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

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
  background-image: url('/images/coding-background.webp');
  background-repeat: no-repeat;
  background-size: cover;
`

const Name = styled.p`
  color: white;
  font-size: 60px;
`

const Profession = styled.p`
  color: #ffffff99;
  font-size: 40px;
`

export const NameSection: FC = () => {
  const horizontalOffset = 20
  const horizontalPositionFactor = 0.035
  const [imageOffset, setImageOffset] = useState(50)
  const ref = useRef<HTMLElement>(null)

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
      <Profession>Engenheiro de Software</Profession>
    </Section>
  )
}
