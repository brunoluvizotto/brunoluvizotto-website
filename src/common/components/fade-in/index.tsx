import { FC } from "react";
import useIsVisible from "./hooks/use-is-visible";
import { FadeDiv, From } from "./styles/fade-div";

type Props = {
  from: From;
  offsetPosition: number;
  offsetTrigger: number;
  delay?: number;
};

export const FadeIn: FC<Props> = ({
  from,
  offsetPosition,
  offsetTrigger,
  delay = 0,
  children,
}) => {
  const [isVisible, isVisibleRef] = useIsVisible<HTMLDivElement>(offsetTrigger);

  return (
    <FadeDiv
      isVisible={isVisible}
      from={from}
      offsetPosition={offsetPosition}
      delay={delay}
      ref={isVisibleRef}
    >
      {children}
    </FadeDiv>
  );
};
