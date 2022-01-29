import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { FadeIn } from "../common/components/fade-in";
import { Section } from "../common/components/section";

const ContentWrapper = styled.div`
  width: 65%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 100px;

  @media only screen and (max-width: 800px) {
    font-size: 22px;
    gap: 50px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 20px;
    gap: 30px;
  }
`;

const LogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
`;

const LogoContainer = styled.div`
  height: 120px;
  width: 120px;
`;

const AcademicItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const AcademicInfoSection: FC = () => {
  return (
    <Section title="Formação" color="black" backgroundColor="white">
      <ContentWrapper>
        <LogosWrapper>
          <FadeIn
            from="bottom"
            offsetPosition={400}
            offsetTrigger={200}
            delay={0}
          >
            <LogoContainer>
              <Image
                src="/images/unicamp.webp"
                height={120}
                width={120}
                layout="fixed"
                alt="Logotipo da Unicamp"
              />
            </LogoContainer>
          </FadeIn>
          <FadeIn
            from="bottom"
            offsetPosition={400}
            offsetTrigger={200}
            delay={100}
          >
            <LogoContainer>
              <Image
                src="/images/inpg.webp"
                height={120}
                width={120}
                layout="fixed"
                alt="Logotipo do INPG"
              />
            </LogoContainer>
          </FadeIn>
          <FadeIn
            from="bottom"
            offsetPosition={400}
            offsetTrigger={200}
            delay={200}
          >
            <LogoContainer>
              <Image
                src="/images/tera.webp"
                height={120}
                width={120}
                layout="fixed"
                alt="Logotipo da Tera"
              />
            </LogoContainer>
          </FadeIn>
          <FadeIn
            from="bottom"
            offsetPosition={400}
            offsetTrigger={200}
            delay={300}
          >
            <LogoContainer>
              <Image
                src="/images/embedded.webp"
                height={120}
                width={120}
                layout="fixed"
                alt="Logotipo da Embedded Labworks"
              />
            </LogoContainer>
          </FadeIn>
        </LogosWrapper>
        <ul>
          <AcademicItem>
            <FadeIn from="left" offsetPosition={300} offsetTrigger={-100}>
              Graduação: Engenharia Elétrica na UNICAMP
            </FadeIn>
          </AcademicItem>
          <AcademicItem>
            <FadeIn from="right" offsetPosition={300} offsetTrigger={-100}>
              Pós-graduação: Gestão Estratégica de Negócios no INPG
            </FadeIn>
          </AcademicItem>
          <AcademicItem>
            <FadeIn from="left" offsetPosition={300} offsetTrigger={-100}>
              Bootcamp de Machine Learning na Tera
            </FadeIn>
          </AcademicItem>
          <AcademicItem>
            <FadeIn from="right" offsetPosition={300} offsetTrigger={-100}>
              Curso de Linux Device Drivers na Embedded Labworks
            </FadeIn>
          </AcademicItem>
        </ul>
      </ContentWrapper>
    </Section>
  );
};
