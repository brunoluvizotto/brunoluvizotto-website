import React, { FC } from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 650px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/images/coding-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Name = styled.p`
  color: white;
  font-size: 60px;
`;

const Profession = styled.p`
  color: #ffffff99;
  font-size: 40px;
`;

export const NameSection: FC = () => {
  return (
    <Section>
      <Name>Bruno Luvizotto</Name>
      <Profession>Engenheiro de Software</Profession>
    </Section>
  );
};
