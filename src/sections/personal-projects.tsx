import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { MediaType, Project } from '../common/components/project'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 65%;
  margin: 0 auto;

  @media only screen and (max-width: 1350px) {
    width: 90%;
  }

  @media only screen and (max-width: 590px) {
    width: 95%;
  }
`

export const PersonalProjectsSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('personalProjects')} color="black" backgroundColor="#F2F2F2" ref={ref}>
      <ContentWrapper>
        <Project
          name={localization('gotOnFloppy')}
          description={localization('gotOnFloppyDescription')}
          media={{
            type: MediaType.VIDEO,
            src: 'https://www.youtube.com/embed/La2Ose7cvFg',
          }}
        />
        <Project
          name={localization('battleCity')}
          description={localization('battleCityDescription')}
          media={{
            type: MediaType.VIDEO,
            src: 'https://www.youtube.com/embed/heNCDyjuWeg',
          }}
        />
        <Project
          name={localization('priWebsite')}
          description={localization('priWebsiteDescription')}
          media={{
            type: MediaType.IMAGE,
            src: '/images/priscilla-luvizotto.webp',
          }}
        />
        <Project
          name={localization('luvimedical')}
          description={localization('luvimedicalDescription')}
          media={{
            type: MediaType.VIDEO,
            src: 'https://www.youtube.com/embed/TqKsAquhKgU',
          }}
        />
      </ContentWrapper>
    </Section>
  )
})
