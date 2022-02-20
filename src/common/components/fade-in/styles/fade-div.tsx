import styled from 'styled-components'
import { getFromPosition } from '../logic/get-from-position'

export type From = 'top' | 'bottom' | 'left' | 'right'

type FadeDivProps = {
  isVisible: boolean
  from: From
  positionOffset: number
  delayInMilliseconds: number
  durationInMilliseconds: number
}

export const FadeDiv = styled.div<FadeDivProps>`
  position: relative;
  ${props => `${getFromPosition(props.from)}: ${props.isVisible ? 0 : props.positionOffset}px`};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: ${props => getFromPosition(props.from)} ${props => props.durationInMilliseconds}ms,
    opacity ${props => props.durationInMilliseconds}ms;
  transition-delay: ${props => props.delayInMilliseconds}ms;
`
