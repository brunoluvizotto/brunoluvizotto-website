import Image from 'next/image'
import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 65%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 50px;
  line-height: 1.6em;

  @media only screen and (max-width: 600px) {
    width: 95%;
    flex-direction: column;
    font-size: 22px;
    line-height: 1.4em;
  }
`

const PictureContainer = styled.div`
  height: 320px;
  width: 320px;
`

export const AboutMeSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('aboutMe')} color="white" backgroundColor="#222222" ref={ref}>
      <ContentWrapper>
        <PictureContainer>
          <Image
            src="https://storage.googleapis.com/brunoluvizotto-public/images/bruno.webp"
            height={320}
            width={320}
            layout="fixed"
            alt={localization('profilePictureAlt')}
          />
        </PictureContainer>
        <p>{localization('aboutMeText')}</p>
      </ContentWrapper>
    </Section>
  )
})
