import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`

export const PersonalProjectsSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('personalProjects')} color="black" backgroundColor="#F2F2F2" ref={ref}>
      <ContentWrapper></ContentWrapper>
    </Section>
  )
})
