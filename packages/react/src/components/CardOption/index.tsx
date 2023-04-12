import React, { ComponentProps } from 'react'
import { Heading } from '../Heading'

import Icon from '@sonicaweb3/icons'

import { Container, Tooltip, SvgContainer } from './styles'

export interface CardOptionProps extends ComponentProps<typeof Container> {
  icon: React.ReactNode
  text: string
}

export function CardOption({ icon, text, ...rest }: CardOptionProps) {
  return (
    <Container {...rest}>
      <Tooltip>
        <Icon name="info" size="sm" color="errorColor600" />
      </Tooltip>
      <SvgContainer>{icon}</SvgContainer>
      <Heading variant="small-title" color="neutralColor800">
        {text}
      </Heading>
    </Container>
  )
}
