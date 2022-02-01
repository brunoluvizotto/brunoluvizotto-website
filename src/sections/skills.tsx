import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { FadeIn } from '../common/components/fade-in'
import { Section } from '../common/components/section'
import { SkillCard } from '../common/components/skill-card'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 24px;
  gap: 50px;
  margin: 0 auto;

  @media only screen and (max-width: 1500px) {
    width: 75%;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 800px) {
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const SkillsSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('skills')} color="black" backgroundColor="#F2F2F2" ref={ref}>
      <ContentWrapper>
        <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={0}>
          <SkillCard
            title={localization('programming')}
            subTitle={localization('programmingSubtitle')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/c-coding.webp"
            altText={localization('programmingThumbnailAltText')}
            description={localization('programmingDescription')}
          />
        </FadeIn>
        <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={100}>
          <SkillCard
            title={localization('projects')}
            subTitle={localization('projectsSubtitle')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/scrum.webp"
            altText={localization('projectsThumbnailAltText')}
            description={localization('projectsDescription')}
          />
        </FadeIn>
        <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={200}>
          <SkillCard
            title={localization('uiFrontend')}
            subTitle={localization('uiFrontendSubtitle')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/ui-front.webp"
            altText={localization('uiFrontendThumbnailAltText')}
            description={localization('uiFrontendDescription')}
          />
        </FadeIn>
        <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={0}>
          <SkillCard
            title={localization('versioning')}
            subTitle={localization('versioningSubtitle')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/git.webp"
            altText={localization('versioningThumbnailAltText')}
            description={localization('versioningDescription')}
          />
        </FadeIn>
        <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={100}>
          <SkillCard
            title={localization('iot')}
            subTitle={localization('iotSubtitle')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/iot.webp"
            altText={localization('iotThumbnailAltText')}
            description={localization('iotDescription')}
          />
        </FadeIn>
        <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={200}>
          <SkillCard
            title={localization('personalSkills')}
            subTitle={localization('personalSkillsSubtitle')}
            imgSrc="https://storage.googleapis.com/brunoluvizotto-public/images/english-speaking.webp"
            altText={localization('personalSkillsThumbnailAltText')}
            description={localization('personalSkillsDescription')}
          />
        </FadeIn>
      </ContentWrapper>
    </Section>
  )
})
