import React, { FC } from 'react'
import styled from 'styled-components'
import { Media, MediaComponent } from './media-component'

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

const UrlLink = styled.a`
  display: block;
  margin-bottom: 20px;
`

type Props = {
  name: string
  description: string
  media?: Media
  url?: string
}

export const Project: FC<Props> = ({ name, description, media, url }) => {
  return (
    <>
      <Title>{name}</Title>
      <Description>{description}</Description>

      {url && <UrlLink href={url}>{url}</UrlLink>}

      <MediaComponent media={media} />
    </>
  )
}
