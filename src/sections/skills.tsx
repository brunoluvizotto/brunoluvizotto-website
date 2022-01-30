import React, { forwardRef } from "react";
import styled from "styled-components";
import { FadeIn } from "../common/components/fade-in";
import { Section } from "../common/components/section";
import { SkillCard } from "../common/components/skill-card";

const ContentWrapper = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 24px;
  gap: 50px;
  margin: 0 auto;

  @media only screen and (max-width: 1500px) {
    width: 75%;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 800px) {
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillsSection = forwardRef<HTMLElement>((_props, ref) => (
  <Section
    title="Conhecimentos"
    color="black"
    backgroundColor="#F2F2F2"
    ref={ref}
  >
    <ContentWrapper>
      <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={0}>
        <SkillCard
          title="Programação"
          subTitle="JS/TS, Python, C e C++"
          imgSrc="/images/c-coding.webp"
          altText="Imagem da tela de um computador com código de programação"
          description="Tenho experiência em programação em Javascript / Typescript, Python, C e C++. Já desenvolvi software web - backend e frontend - utilizando ferramentas de computação em nuvem (GCP e AWS), firmware bare-metal e software para sistemas embarcados, além de scripts para automação de tarefas sempre que necessário."
        />
      </FadeIn>
      <FadeIn
        from="bottom"
        offsetPosition={400}
        offsetTrigger={200}
        delay={100}
      >
        <SkillCard
          title="Projetos"
          subTitle="Metodologias Ágeis / Scrum"
          imgSrc="/images/scrum.webp"
          altText="Imagem que representa o desenvolvimento ágil com Scrum"
          description="Após trabalhar por algum tempo com metodologias ágeis, passei a considerá-las muito importantes para o planejamento e gerenciamento dos times. Sistemas de tickets como Scrum e Kanban ajudam a manter o controle. Integração contínua (continuous integration - CI) também agiliza bastante a entrega de um excelente produto."
        />
      </FadeIn>
      <FadeIn
        from="bottom"
        offsetPosition={400}
        offsetTrigger={200}
        delay={200}
      >
        <SkillCard
          title="UI / Front-end"
          subTitle="React, Vue e Qt/Qml"
          imgSrc="/images/ui-front.webp"
          altText="Imagem que mostra uma interface gráfica de front end"
          description="Desenvolvimento de interfaces do usuário bonitas, responsivas e com boa usabilidade. Gosto bastante de front-end web (HTML, CSS, React e Vue - este site foi feito usando React para o front-end e Node.js para o back-end). Com Qt, quase sempre trabalho com Qml, que permite criar interfaces bonitas de maneira simples."
        />
      </FadeIn>
      <FadeIn from="bottom" offsetPosition={400} offsetTrigger={200} delay={0}>
        <SkillCard
          title="Versionamento"
          subTitle="Git, Mercurial e SVN"
          imgSrc="/images/git.webp"
          altText="Logotipo que representa sistemas de versionamento de código"
          description="Nos diversos projetos onde trabalhei, já utilizei estas três ferramentas de versionamento: Git (Github, Gitlab, BitBucket), Mercurial e SVN. As três cumprem seu papel de versionar, mas a minha preferência, pelas ferramentas que oferece, é o Git."
        />
      </FadeIn>
      <FadeIn
        from="bottom"
        offsetPosition={400}
        offsetTrigger={200}
        delay={100}
      >
        <SkillCard
          title="Dispositivos IOT"
          subTitle="Comunicação Celular"
          imgSrc="/images/iot.webp"
          altText="Imagem semelhante a uma antena com diversos dispositivos conectados"
          description="A internet das coisas é o futuro dos dispositivos inteligentes. Já trabalhei em projetos com dispositivos conectados via rede celular 2G (GSM), 3G (UMTS) e 4G (LTE) e via comunicação satelital (aplicações mais sensíveis) trocando mensagens com protocolos definidos para os servidores da aplicação."
        />
      </FadeIn>
      <FadeIn
        from="bottom"
        offsetPosition={400}
        offsetTrigger={200}
        delay={200}
      >
        <SkillCard
          title="Habilidades Pessoais"
          subTitle="Comunicação / Trabalho em equipe"
          imgSrc="/images/english-speaking.webp"
          altText="Bandeira dos Estados Unidos em formato de balão de fala"
          description="Além de saber e gostar de trabalhar em equipe, a boa comunicação é outra qualidade. Sou capaz de me expressar bem e me fazer entendido mesmo quando explico algo técnico a uma pessoa não-técnica. Além disso, após dois anos trabalhando nos EUA, também compreendo e me expresso com facilidade em inglês."
        />
      </FadeIn>
    </ContentWrapper>
  </Section>
));
