import React, { FC } from "react";
import styled from "styled-components";

interface WrapperProps {
  color: string;
  backgroundColor: string;
}

const Wrapper = styled.section<WrapperProps>`
  width: 100%;
  text-align: center;
  background-color: #222222;
  padding: 120px;
  ${(props) =>
    props.color &&
    `
        color: ${props.color};
      `};
  ${(props) =>
    props.backgroundColor &&
    `
      background-color: ${props.backgroundColor};
    `};

  @media only screen and (max-width: 600px) {
    padding: 100px 20px;
  }
`;

const Title = styled.p`
  font-size: 55px;
  margin-bottom: 80px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 40px;
    font-size: 40px;
  }
`;

type Props = WrapperProps & {
  title: string;
};

export const Section: FC<Props> = ({
  title,
  color,
  backgroundColor,
  children,
}) => {
  return (
    <Wrapper color={color} backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
