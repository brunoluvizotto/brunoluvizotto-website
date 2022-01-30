import React, { forwardRef } from "react";
import styled from "styled-components";
import { ExperienceCard } from "../common/components/experience-card";
import { FadeIn } from "../common/components/fade-in";
import { Section } from "../common/components/section";

const ContentWrapper = styled.div`
  width: 80%;
  max-width: 1100;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 24px;
  gap: 50px;
  margin: 0 auto;

  @media only screen and (max-width: 1500px) {
    width: 90%;
  }

  @media only screen and (max-width: 1350px) {
    width: 345px;
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const ExperienceSection = forwardRef<HTMLElement>((_props, ref) => (
  <Section
    title="Últimas Experiências Profissionais"
    color="black"
    backgroundColor="white"
    ref={ref}
  >
    <ContentWrapper>
      <FadeIn from="bottom" offsetPosition={400} offsetTrigger={300} delay={0}>
        <ExperienceCard
          title="Liv Up"
          subTitle="Engenheiro de Software"
          date="Desde 10/2019"
          imgSrc="/images/livup.webp"
          skills={[
            "Software (JS/TS, Python)",
            "Computação em nuvem (GCP / AWS)",
            "Dados: Mongo, Redis e Bigquery",
          ]}
        />
      </FadeIn>
      <FadeIn
        from="bottom"
        offsetPosition={400}
        offsetTrigger={300}
        delay={200}
      >
        <ExperienceCard
          title="Omnilink"
          subTitle="Dev. de Firmware Sr."
          date="De 07/2018 a 08/2019"
          imgSrc="/images/omnilink.webp"
          skills={[
            "Firmware em C / C++",
            "Scripts em Python",
            "Software em JS / TS e C++ (Qt)",
          ]}
        />
      </FadeIn>
      <FadeIn
        from="bottom"
        offsetPosition={400}
        offsetTrigger={300}
        delay={400}
      >
        <ExperienceCard
          title="BNL (EUA)"
          subTitle="Controls Engineer"
          date="De 03/2016 a 02/2018"
          imgSrc="/images/bnl.webp"
          skills={[
            "Drivers C / C++",
            "Software em Python com GUI",
            "Processamento distr. de dados",
          ]}
        />
      </FadeIn>
    </ContentWrapper>
  </Section>
));
