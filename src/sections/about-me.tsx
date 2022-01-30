import Image from 'next/image'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Section } from '../common/components/section'

const ContentWrapper = styled.div`
  width: 65%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 50px;
  line-height: 1.6em;

  @media only screen and (max-width: 600px) {
    width: 95%;
    flex-direction: column;
    font-size: 22px;
    line-height: 1.4em;
  }
`

const PictureContainer = styled.div`
  height: 320px;
  width: 320px;
`

export const AboutMeSection = forwardRef<HTMLElement>((_props, ref) => (
  <Section title="Sobre mim" color="white" backgroundColor="#222222" ref={ref}>
    <ContentWrapper>
      <PictureContainer>
        <Image
          src="/images/bruno.webp"
          height={320}
          width={320}
          layout="fixed"
          alt="Foto do Bruno com um farol ao fundo, em uma praia de pedras mostrando o mar ao fundo"
        />
      </PictureContainer>
      <p>
        Meu nome é Bruno Luvizotto. Sou programador, formado em engenharia elétrica pela UNICAMP e estou sempre em busca
        de aprimorar meus conhecimentos. Tenho experiência com programação em JavaScript / Typescript (React,
        React-Native e Node), Python, C e C++ (Qt). Também já trabalhei com desenvolvimento de aplicativos mobile.
      </p>
    </ContentWrapper>
  </Section>
))
