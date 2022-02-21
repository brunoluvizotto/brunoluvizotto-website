import Image from 'next/image'
import React, { FC } from 'react'
import styled from 'styled-components'

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

export type Media = {
  type: MediaType
  src: string
}

type Props = {
  media?: Media
}

export const MediaComponent: FC<Props> = ({ media }) => {
  if (!media) {
    return null
  }

  if (media.type === MediaType.VIDEO) {
    return (
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
    )
  }

  return (
    <MediaContainer>
      <Image src={media.src} height="394" width="700" layout="responsive" />
    </MediaContainer>
  )
}
