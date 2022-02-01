import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 65%;
  margin: 0 auto;

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`

const Text = styled.a`
  font-size: 30px;
  color: white;
  text-decoration: none;

  @media only screen and (max-width: 500px) {
    font-size: 24px;
  }
`

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('contact')} color="white" backgroundColor="#222222" ref={ref}>
      <ContentWrapper>
        <Text href="mailto:brunoluvizotto@gmail.com">brunoluvizotto@gmail.com</Text>
      </ContentWrapper>
    </Section>
  )
})
