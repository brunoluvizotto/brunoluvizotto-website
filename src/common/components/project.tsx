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

type ImageContainerProps = {
  height: string
  width: string
}
const ImageContainer = styled.div<ImageContainerProps>`
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 0 auto 80px auto;
`

export enum MediaType {
  VIDEO = 'video',
  IMAGE = 'image',
}

type Media = {
  type: MediaType
  src: string
  width: string
  height: string
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
            src={media.src}
            height={media.height}
            width={media.width}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"
            allowFullScreen
          />
        ) : (
          <ImageContainer height={media.height} width={media.width}>
            <Image src={media.src} height={media.height} width={media.width} layout="fixed" />
          </ImageContainer>
        ))}
    </>
  )
}
