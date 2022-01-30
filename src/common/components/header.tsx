import React, { FC, RefObject, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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

type WrapperProps = {
  isOnTop: boolean
}

const Wrapper = styled.header<WrapperProps>`
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
`

const UnorderedList = styled.ul`
  height: 50px;
  display: inline-flex;
  align-items: center;
  gap: 50px;
  list-style: none;
`

type ListItemProps = {
  isVisible: boolean
}

const ListItem = styled.li<ListItemProps>`
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
      <Wrapper isOnTop={isOnTop}>
        <nav>
          <UnorderedList>
            {menuElements.map(({ label, isVisible, ref }) => (
              <ListItem key={label} isVisible={isVisible} onClick={() => ref.current?.scrollIntoView()}>
                {label}
              </ListItem>
            ))}
          </UnorderedList>
        </nav>
      </Wrapper>
    </>
  )
}
