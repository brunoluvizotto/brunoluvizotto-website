import React, { FC, RefObject, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { LanguageSelector } from './language-selector'
import { MobileMenu } from './mobile-menu'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
`

type WrapperDesktopProps = {
  isOnTop: boolean
}

const WrapperDesktop = styled.header<WrapperDesktopProps>`
  width: 100%;
  position: fixed;
  top: 0;
  color: #404040a0;
  background-color: #e5e5e5f9;
  text-align: center;
  z-index: 1;
  transition-duration: 0.4s;
  ${props =>
    props.isOnTop &&
    `
      color: #FFFFFF80;
      background-color: transparent;
    `};

  @media only screen and (max-width: 870px) {
    display: none;
  }
`

const UnorderedList = styled.ul`
  height: 50px;
  display: inline-flex;
  align-items: center;
  gap: 50px;
  list-style: none;
`

type MenuItemProps = {
  isVisible: boolean
}

const DesktopMenuItem = styled.li<MenuItemProps>`
  cursor: pointer;
  position: relative;
  &:after {
    content: ' ';
    width: 0;
    height: 3px;
    background-color: #f44336;
    position: absolute;
    top: 110%;
    left: 50%;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
  }
  &:hover {
    color: #ff0000a0;
  }
  ${props =>
    props.isVisible &&
    `
      color: #ff0000a0;
      &:after {
        width: 130%;
        left: -15%;
      }
    `};
`

const LanguageSelectorWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 32px;
`

const MobileMenuList = styled.ul`
  height: 50px;
  list-style: none;
  margin-top: 20px;
`

const MobileMenuItems = styled.li<MenuItemProps>`
  font-size: 26px;
  color: #ffffff80;
  cursor: pointer;
  padding: 18px 0 22px 50px;
  border-bottom: 2px solid #ffffff10;
  ${props =>
    props.isVisible &&
    `
      color: #ff0000a0;
      &:after {
        width: 130%;
        left: -15%;
      }
    `};
`

type MenuElement = {
  label: string
  isVisible: boolean
  ref: RefObject<HTMLElement>
}

type Props = {
  menuElements: MenuElement[]
}

export const Header: FC<Props> = ({ menuElements }) => {
  const [isOnTop, setIsOnTop] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY === 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <GlobalStyle />
      <WrapperDesktop isOnTop={isOnTop}>
        <nav>
          <UnorderedList>
            {menuElements.map(({ label, isVisible, ref }) => (
              <DesktopMenuItem
                key={label}
                isVisible={isVisible}
                onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                {label}
              </DesktopMenuItem>
            ))}
          </UnorderedList>
        </nav>
        <LanguageSelectorWrapper>
          <LanguageSelector />
        </LanguageSelectorWrapper>
      </WrapperDesktop>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setOpen={() => setIsMobileMenuOpen(true)}
        setClosed={() => setIsMobileMenuOpen(false)}
      >
        <nav>
          <MobileMenuList>
            {menuElements.map(({ label, isVisible, ref }) => (
              <MobileMenuItems
                key={label}
                isVisible={isVisible}
                onClick={() => {
                  ref.current?.scrollIntoView({ behavior: 'smooth' })
                  setIsMobileMenuOpen(false)
                }}
              >
                {label}
              </MobileMenuItems>
            ))}
          </MobileMenuList>
        </nav>
      </MobileMenu>
    </>
  )
}
