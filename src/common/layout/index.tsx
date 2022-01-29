import React, { FC, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
`;

interface HeaderProps {
  isOnTop: boolean;
}

const Header = styled.header<HeaderProps>`
  width: 100%;
  position: fixed;
  top: 0;
  color: #404040a0;
  background-color: #e5e5e5f9;
  text-align: center;
  z-index: 1;
  transition-duration: 0.4s;
  ${(props) =>
    props.isOnTop &&
    `
      color: #FFFFFF80;
      background-color: transparent;
    `};
`;

const UnorderedList = styled.ul`
  height: 50px;
  display: inline-flex;
  align-items: center;
  gap: 40px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #ff0000a0;
  }
`;

export const Layout: FC = ({ children }) => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header isOnTop={isOnTop}>
        <nav>
          <UnorderedList>
            <ListItem>Sobre mim</ListItem>
            <ListItem>Formação</ListItem>
            <ListItem>Conhecimentos</ListItem>
            <ListItem>Experiência</ListItem>
            <ListItem>Projetos</ListItem>
            <ListItem>Contato</ListItem>
          </UnorderedList>
        </nav>
      </Header>
      {children}
    </>
  );
};
