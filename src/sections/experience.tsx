import React, { forwardRef, useContext } from 'react'
import { FadeIn } from 'react-slide-fade-in'
import styled from 'styled-components'
import { ExperienceCard } from '../common/components/experience-card'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1100;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 24px;
  gap: 50px;
  margin: 0 auto;

  @media only screen and (max-width: 1500px) {
    width: 90%;
  }

  @media only screen and (max-width: 1350px) {
    width: 345px;
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`

export const ExperienceSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('experiencesSectionTitle')} color="black" backgroundColor="white" ref={ref}>
      <ContentWrapper>
        <FadeIn from="bottom" positionOffset={400} triggerOffset={300} delayInMilliseconds={0}>
          <ExperienceCard
            title="Liv Up"
            subTitle={localization('livupJobTitle')}
            date={localization('livupJobDate')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/livup.webp"
            skills={[localization('livupSkill1'), localization('livupSkill2'), localization('livupSkill3')]}
          />
        </FadeIn>
        <FadeIn from="bottom" positionOffset={400} triggerOffset={300} delayInMilliseconds={200}>
          <ExperienceCard
            title="Omnilink"
            subTitle={localization('omnilinkJobTitle')}
            date={localization('omnilinkJobDate')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/omnilink.webp"
            skills={[localization('omnilinkSkill1'), localization('omnilinkSkill2'), localization('omnilinkSkill3')]}
          />
        </FadeIn>
        <FadeIn from="bottom" positionOffset={400} triggerOffset={300} delayInMilliseconds={400}>
          <ExperienceCard
            title={localization('bnlCompanyName')}
            subTitle={localization('bnlJobTitle')}
            date={localization('bnlJobDate')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/bnl.webp"
            skills={[localization('bnlSkill1'), localization('bnlSkill2'), localization('bnlSkill3')]}
          />
        </FadeIn>
      </ContentWrapper>
    </Section>
  )
})
