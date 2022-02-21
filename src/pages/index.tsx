import type { NextPage } from 'next'
import { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from '../common/components/header'
import { LocalizationContext } from '../common/contexts/localization-context'
import { useIsVisible } from '../common/hooks/use-is-visible'
import { AboutMeSection } from '../sections/about-me'
import { AcademicInfoSection } from '../sections/academic-info'
import { ContactSection } from '../sections/contact'
import { ExperienceSection } from '../sections/experience'
import { NameSection } from '../sections/name'
import { PersonalProjectsSection } from '../sections/personal-projects'
import { SkillsSection } from '../sections/skills'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
`

const Footer = styled.footer`
  padding: 6px 0;
  color: #9a9191;
  background-color: #e5e5e1;
  text-align: center;
`

const Home: NextPage = () => {
  const isVisibleConfig = {
    persistent: false,
    offset: 200,
    minVisibleHeight: 500,
  }

  const [isAboutVisible, aboutRef] = useIsVisible<HTMLElement>(isVisibleConfig)
  const [isAcamidecInfoVisible, academicInfoRef] = useIsVisible<HTMLElement>(isVisibleConfig)
  const [isSkillsVisible, skillsRef] = useIsVisible<HTMLElement>(isVisibleConfig)
  const [isExperienceVisible, experienceRef] = useIsVisible<HTMLElement>(isVisibleConfig)
  const [isProjectsVisible, projectsRef] = useIsVisible<HTMLElement>(isVisibleConfig)
  const [isContactVisible, contactRef] = useIsVisible<HTMLElement>({
    persistent: false,
    offset: 100,
    minVisibleHeight: 400,
  })

  const { localization } = useContext(LocalizationContext)

  return (
    <>
      <main>
        <Header
          menuElements={[
            { label: localization('aboutMe'), isVisible: isAboutVisible, ref: aboutRef },
            {
              label: localization('education'),
              isVisible: isAcamidecInfoVisible,
              ref: academicInfoRef,
            },
            {
              label: localization('skills'),
              isVisible: isSkillsVisible,
              ref: skillsRef,
            },
            {
              label: localization('experience'),
              isVisible: isExperienceVisible,
              ref: experienceRef,
            },
            {
              label: localization('projects'),
              isVisible: isProjectsVisible,
              ref: projectsRef,
            },
            { label: localization('contact'), isVisible: isContactVisible, ref: contactRef },
          ]}
        />
        <NameSection />
        <AboutMeSection ref={aboutRef} />
        <AcademicInfoSection ref={academicInfoRef} />
        <SkillsSection ref={skillsRef} />
        <ExperienceSection ref={experienceRef} />
        <PersonalProjectsSection ref={projectsRef} />
        <ContactSection ref={contactRef} />
      </main>

      <Footer className="footer">
        <p>
          Copyright © Luvitronics - {localization('allRightsReserved')} - {new Date().getFullYear()}
        </p>
      </Footer>
      <GlobalStyle />
    </>
  )
}

export default Home
