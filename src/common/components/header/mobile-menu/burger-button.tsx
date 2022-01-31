import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  height: 38px;
  width: 44px;
  padding: 4px;
  margin: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;

  @media only screen and (min-width: 871px) {
    display: none;
  }
`

const Line = styled.div`
  height: 6px;
  width: 100%;
  background-color: grey;
`

type Props = {
  onClick: () => void
}

export const BurgerButton: FC<Props> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  )
}
