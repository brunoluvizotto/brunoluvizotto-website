import Image from 'next/image'
import React, { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-top: 120px;
  margin-bottom: 20px;
`

const Description = styled.h3`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 40px;
`

const MediaContainer = styled.div`
  height: 394px;
  width: 700px;
  margin: 0 auto 80px auto;

  @media only screen and (max-width: 1340px) {
    height: 281px;
    width: 500px;
  }

  @media only screen and (max-width: 820px) {
    height: 197px;
    width: 350px;
  }

  @media only screen and (max-width: 590px) {
    height: 140px;
    width: 250px;
  }
`

export enum MediaType {
  VIDEO = 'video',
  IMAGE = 'image',
}

type Media = {
  type: MediaType
  src: string
}

type Props = {
  name: string
  description: string
  media?: Media
}

export const Project: FC<Props> = ({ name, description, media }) => {
  return (
    <>
      <Title>{name}</Title>
      <Description>{description}</Description>

      {media &&
        (media.type === MediaType.VIDEO ? (
          <MediaContainer>
            <iframe
              src={media.src}
              height="100%"
              width="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"
              allowFullScreen
            />
          </MediaContainer>
        ) : (
          <MediaContainer>
            <Image src={media.src} height="394" width="700" layout="responsive" />
          </MediaContainer>
        ))}
    </>
  )
}
