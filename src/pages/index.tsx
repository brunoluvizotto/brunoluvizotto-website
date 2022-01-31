import type { NextPage } from 'next'
import Image from 'next/image'
import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
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

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <GlobalStyle />
    </>
  )
}

export default Home
