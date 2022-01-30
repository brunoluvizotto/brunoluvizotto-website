import Image from 'next/image'
import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
`

const ImageContainer = styled.div`
  height: 120px;
  width: 120px;
`

const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
`

const SubTitle = styled.h3`
  font-size: 22px;
  font-weight: 400;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
`

type Props = {
  title: string
  subTitle: string
  description: string
  imgSrc: string
  altText?: string
}

export const SkillCard: FC<Props> = ({ title, subTitle, description, imgSrc, altText }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imgSrc} height={120} width={120} layout="fixed" alt={altText} />
      </ImageContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Text>{description}</Text>
    </Wrapper>
  )
}
