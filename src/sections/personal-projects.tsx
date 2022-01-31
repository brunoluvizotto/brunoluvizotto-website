import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { MediaType, Project } from '../common/components/project'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'
import { useWindowDimensions } from '../common/hooks/use-window-dimensions'

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
  const { width: windowWidth } = useWindowDimensions()

  const { height, width } = getMediaSize(windowWidth)

  return (
    <Section title={localization('personalProjects')} color="black" backgroundColor="#F2F2F2" ref={ref}>
      <ContentWrapper>
        <Project
          name={localization('gotOnFloppy')}
          description={localization('gotOnFloppyDescription')}
          media={{
            type: MediaType.VIDEO,
            src: 'https://www.youtube.com/embed/La2Ose7cvFg',
            height: `${height}px`,
            width: `${width}px`,
          }}
        />
        <Project
          name={localization('battleCity')}
          description={localization('battleCityDescription')}
          media={{
            type: MediaType.VIDEO,
            src: 'https://www.youtube.com/embed/heNCDyjuWeg',
            height: `${height}px`,
            width: `${width}px`,
          }}
        />
        <Project
          name={localization('priWebsite')}
          description={localization('priWebsiteDescription')}
          media={{
            type: MediaType.IMAGE,
            src: '/images/priscilla-luvizotto.webp',
            height: `${width * 0.46}px`,
            width: `${width}px`,
          }}
        />
        <Project
          name={localization('luvimedical')}
          description={localization('luvimedicalDescription')}
          media={{
            type: MediaType.VIDEO,
            src: 'https://www.youtube.com/embed/TqKsAquhKgU',
            height: `${height}px`,
            width: `${width}px`,
          }}
        />
      </ContentWrapper>
    </Section>
  )
})

function getMediaSize(windowWidth: number) {
  switch (true) {
    case windowWidth > 1340:
      return { width: 700, height: 394 }
    case windowWidth > 820:
      return { width: 500, height: 281 }
    case windowWidth > 590:
      return { width: 350, height: 197 }
    default:
      return { width: 250, height: 140 }
  }
}
