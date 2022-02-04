import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    gap: 40px;
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

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    gap: 5px;
  }
`

type IconProps = {
  height: number
  width: number
  backgroundSize: string
  positionX: number
  positionY: number
}

const Icon = styled.div<IconProps>`
  background-image: url('https://storage.googleapis.com/brunoluvizotto-public/images/icons.webp');
  ${props => `height: ${props.height}`}px;
  ${props => `width: ${props.width}`}px;
  ${props => `background-size: ${props.backgroundSize}`};
  ${props => `background-position-x: ${props.positionX}`}px;
  ${props => `background-position-y: ${props.positionY}`}px;
`

export const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('contact')} color="white" backgroundColor="#222222" ref={ref}>
      <ContentWrapper>
        <InfoContainer>
          <Icon height={30} width={30} backgroundSize="180px 90px" positionX={-60} positionY={-30} />
          <Text href="mailto:brunoluvizotto@gmail.com">brunoluvizotto@gmail.com</Text>
        </InfoContainer>
        <InfoContainer>
          <Icon height={30} width={30} backgroundSize="180px 90px" positionX={-150} positionY={-30} />
          <Text href="https://www.linkedin.com/in/bruno-valdrighi-luvizotto/">Bruno Valdrighi Luvizotto</Text>
        </InfoContainer>
      </ContentWrapper>
    </Section>
  )
})
