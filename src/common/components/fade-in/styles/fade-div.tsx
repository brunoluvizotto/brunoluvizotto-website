import styled from 'styled-components'
import { getFromPosition } from '../logic/get-from-position'

export type From = 'top' | 'bottom' | 'left' | 'right'

type FadeDivProps = {
  isVisible: boolean
  from: From
  positionOffset: number
  delay: number
}

export const FadeDiv = styled.div<FadeDivProps>`
  position: relative;
  ${props => `${getFromPosition(props.from)}: ${props.isVisible ? 0 : props.positionOffset}px`};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: ${props => getFromPosition(props.from)} 1.2s, opacity 1.2s;
  transition-delay: ${props => props.delay || 0}ms;
`
