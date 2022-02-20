import { FC } from 'react'
import { useIsVisible } from '../../hooks/use-is-visible'
import { FadeDiv, From } from './styles/fade-div'

type Props = {
  from: From
  positionOffset: number
  triggerOffset: number
  delayInMilliseconds?: number
  durationInMilliseconds?: number
}

const defaultProps = {
  delayInMilliseconds: 0,
  durationInMilliseconds: 1200,
}

export const FadeIn: FC<Props> = ({ triggerOffset, children, ...containerProps }) => {
  const [isVisible, isVisibleRef] = useIsVisible<HTMLDivElement>({
    offset: triggerOffset,
  })

  return (
    <FadeDiv isVisible={isVisible} ref={isVisibleRef} {...defaultProps} {...containerProps}>
      {children}
    </FadeDiv>
  )
}
