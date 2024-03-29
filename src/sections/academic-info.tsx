import Image from 'next/image'
import { forwardRef, useContext } from 'react'
import { FadeIn } from 'react-slide-fade-in'
import styled from 'styled-components'
import { Section } from '../common/components/section'
import { LocalizationContext } from '../common/contexts/localization-context'

const ContentWrapper = styled.div`
  width: 65%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 100px;

  @media only screen and (max-width: 800px) {
    font-size: 22px;
    gap: 50px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 20px;
    gap: 30px;
  }
`

const LogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`

const LogoContainer = styled.div`
  height: 120px;
  width: 120px;
`

const AcademicList = styled.ul`
  width: 100vw;
  overflow-x: hidden;
`

const AcademicItem = styled.li`
  width: 80vw;
  margin: 0 auto;
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
export const AcademicInfoSection = forwardRef<HTMLElement>((_props, ref) => {
  const { localization } = useContext(LocalizationContext)

  return (
    <Section title={localization('education')} color="black" backgroundColor="white" ref={ref}>
      <ContentWrapper>
        <LogosWrapper>
          <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
            <LogoContainer>
              <Image
                src="https://storage.googleapis.com/brunoluvizotto-public/images/unicamp.webp"
                height={120}
                width={120}
                layout="fixed"
                alt={localization('unicampLogoAltText')}
              />
            </LogoContainer>
          </FadeIn>
          <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={100}>
            <LogoContainer>
              <Image
                src="https://storage.googleapis.com/brunoluvizotto-public/images/inpg.webp"
                height={120}
                width={120}
                layout="fixed"
                alt={localization('inpgLogoAltText')}
              />
            </LogoContainer>
          </FadeIn>
          <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={200}>
            <LogoContainer>
              <Image
                src="https://storage.googleapis.com/brunoluvizotto-public/images/tera.webp"
                height={120}
                width={120}
                layout="fixed"
                alt={localization('teraLogoAltText')}
              />
            </LogoContainer>
          </FadeIn>
          <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={300}>
            <LogoContainer>
              <Image
                src="https://storage.googleapis.com/brunoluvizotto-public/images/embedded.webp"
                height={120}
                width={120}
                layout="fixed"
                alt={localization('embeddedLabworksLogoAltText')}
              />
            </LogoContainer>
          </FadeIn>
        </LogosWrapper>
        <AcademicList>
          <AcademicItem>
            <FadeIn from="left" positionOffset={300} triggerOffset={-100}>
              {localization('degree')}
            </FadeIn>
          </AcademicItem>
          <AcademicItem>
            <FadeIn from="right" positionOffset={300} triggerOffset={-100}>
              {localization('businessPostGratuation')}
            </FadeIn>
          </AcademicItem>
          <AcademicItem>
            <FadeIn from="left" positionOffset={300} triggerOffset={-100}>
              {localization('machineLearningBootcamp')}
            </FadeIn>
          </AcademicItem>
          <AcademicItem>
            <FadeIn from="right" positionOffset={300} triggerOffset={-100}>
              {localization('linux')}
            </FadeIn>
          </AcademicItem>
        </AcademicList>
      </ContentWrapper>
    </Section>
  )
})
