import React, { ComponentProps } from 'react'
import { Heading } from '../Heading'

import { Container, Tooltip } from './styles'

export interface CardOptionProps extends ComponentProps<typeof Container> {
  icon: React.ReactNode
  text: string
}

export function CardOption({ icon, text }: CardOptionProps) {
  return (
    <Container>
      <Tooltip />

      {icon}
      <Heading type="smallTitle" color="neutralColor800">
        {text}
      </Heading>
    </Container>
  )
}
