import React, { ComponentProps } from 'react'
import { Heading } from '../Heading'

import Icon from '@sonica/icons'

import { Container, Tooltip } from './styles'

export interface CardOptionProps extends ComponentProps<typeof Container> {
  icon: React.ReactNode
  text: string
}

export function CardOption({ icon, text, ...rest }: CardOptionProps) {
  return (
    <Container {...rest}>
      <Tooltip>
        <Icon name="info" size="sm" />
      </Tooltip>

      {icon}
      <Heading
        type="smallTitle"
        color="neutralColor800"
        css={{ marginTop: '$10', color: '$neutralColor800' }}
      >
        {text}
      </Heading>
    </Container>
  )
}
