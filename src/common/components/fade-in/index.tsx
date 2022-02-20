import { FC } from 'react'
import { useIsVisible } from '../../hooks/use-is-visible'
import { FadeDiv, From } from './styles/fade-div'

type Props = {
  from: From
  positionOffset: number
  triggerOffset: number
  delay?: number
}

export const FadeIn: FC<Props> = ({ from, positionOffset, triggerOffset, delay = 0, children }) => {
  const [isVisible, isVisibleRef] = useIsVisible<HTMLDivElement>({
    offset: triggerOffset,
  })

  return (
    <FadeDiv isVisible={isVisible} from={from} positionOffset={positionOffset} delay={delay} ref={isVisibleRef}>
      {children}
    </FadeDiv>
  )
}
