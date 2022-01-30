import React, { forwardRef } from "react";
import styled from "styled-components";
import { Section } from "../common/components/section";

const ContentWrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export const PersonalProjectsSection = forwardRef<HTMLElement>(
  (_props, ref) => (
    <Section
      title="Projetos Pessoais"
      color="black"
      backgroundColor="#F2F2F2"
      ref={ref}
    >
      <ContentWrapper></ContentWrapper>
    </Section>
  )
);
