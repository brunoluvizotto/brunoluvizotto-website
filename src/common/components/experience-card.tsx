import Image from 'next/image'
import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 1px 4px -2px;
  padding: 20px;
  background-color: white;
`

const ImageContainer = styled.div`
  height: 64px;
  width: 164px;
`

const CompanyName = styled.h2`
  font-size: 26px;
  font-weight: bold;
`

const JobTitle = styled.p`
  font-size: 22px;
`

const Date = styled.p`
  font-size: 18px;
`

const Skill = styled.li`
  font-size: 16px;
  list-style: none;
`

type Props = {
  title: string
  subTitle: string
  date: string
  skills: string[]
  imgSrc: string
  altText?: string
}

export const ExperienceCard: FC<Props> = ({ title, subTitle, date, skills, imgSrc, altText }) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imgSrc} height={64} width={164} layout="fixed" alt={altText} />
      </ImageContainer>
      <CompanyName>{title}</CompanyName>
      <JobTitle>{subTitle}</JobTitle>
      <Date>{date}</Date>
      <ul>
        {skills.map((skill, index) => (
          <Skill key={`${skill}-${index}`}>{skill}</Skill>
        ))}
      </ul>
    </Wrapper>
  )
}
