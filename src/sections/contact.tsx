import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    gap: 40px;
  }
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  cursor: pointer;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    gap: 5px;
  }

  a {
    font-size: 30px;
    color: #ffffffaa;
    text-decoration: none;
    transition-duration: 0.3s;

    @media only screen and (max-width: 500px) {
      font-size: 24px;
    }
  }

  &:hover {
    a {
      color: white;
    }
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
          <a href="mailto:brunoluvizotto@gmail.com">brunoluvizotto@gmail.com</a>
        </InfoContainer>
        <InfoContainer>
          <Icon height={30} width={30} backgroundSize="180px 90px" positionX={-150} positionY={-30} />
          <a href="https://www.linkedin.com/in/bruno-valdrighi-luvizotto/">Bruno Valdrighi Luvizotto</a>
        </InfoContainer>
      </ContentWrapper>
    </Section>
  )
})
