import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Section } from '../common/components/section'

const ContentWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`

const Text = styled.p`
  font-size: 30px;
`

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => (
  <Section title="Contato" color="white" backgroundColor="#222222" ref={ref}>
    <ContentWrapper>
      <Text>brunoluvizotto@gmail.com</Text>
    </ContentWrapper>
  </Section>
))
