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

const ImageContainer = styled.div`
  height: 394px;
  width: 700px;
  margin: 0 auto 80px auto;
`

export enum MediaType {
  VIDEO = 'video',
  IMAGE = 'image',
}

export enum MediaOrientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
}

type Media = {
  type: MediaType
  src: string
  orientation: MediaOrientation
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
          <iframe
            height={media.orientation === MediaOrientation.PORTRAIT ? 700 : 394}
            width={media.orientation === MediaOrientation.PORTRAIT ? 394 : 700}
            src={media.src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"
            allowFullScreen
          />
        ) : (
          <ImageContainer>
            <Image
              src={media.src}
              height={media.orientation === MediaOrientation.PORTRAIT ? 700 : 394}
              width={media.orientation === MediaOrientation.PORTRAIT ? 394 : 700}
              layout="fixed"
            />
          </ImageContainer>
        ))}
    </>
  )
}
