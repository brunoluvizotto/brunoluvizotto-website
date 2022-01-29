import React, { FC } from "react";
import styled from "styled-components";
import { Section } from "../common/components/section";

const ContentWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 30px;
`;

export const ContactSection: FC = () => {
  return (
    <Section title="Contato" color="white" backgroundColor="#222222">
      <ContentWrapper>
        <Text>brunoluvizotto@gmail.com</Text>
      </ContentWrapper>
    </Section>
  );
};
