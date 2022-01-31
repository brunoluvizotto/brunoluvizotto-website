import React, { FC } from 'react'
import styled from 'styled-components'
import { BurgerButton } from './burger-button'

type MenuProps = {
  isOpen: boolean
}

const ClickableBackground = styled.div<MenuProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  height: 100%;
  width: ${props => (props.isOpen ? 'calc(100vw - 300px)' : '0px')};
  right: 0;
`

const Menu = styled.div<MenuProps>`
  position: fixed;
  height: 100%;
  width: 300px;
  z-index: 1;
  background-color: #373a47;
  transition: 0.4s;
  left: ${props => (props.isOpen ? 0 : -300)}px;
`

type Props = {
  isOpen: boolean
  setOpen: () => void
  setClosed: () => void
}

export const MobileMenu: FC<Props> = ({ isOpen, setOpen, setClosed, children }) => {
  return (
    <>
      <BurgerButton onClick={setOpen} />
      <Menu isOpen={isOpen}>{children}</Menu>
      <ClickableBackground isOpen={isOpen} onClick={setClosed} />
    </>
  )
}
