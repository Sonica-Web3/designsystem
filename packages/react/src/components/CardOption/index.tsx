import React, { ComponentProps } from 'react'
import { Heading } from '../Heading'

import Icon from '@sonicaweb3/icons'

import { Container, Tooltip, SvgContainer } from './styles'
import { Pill } from '../Pill'

export interface CardOptionProps extends ComponentProps<typeof Container> {
  icon: React.ReactNode
  text: string
  pillText?: string
}

export function CardOption({ icon, text, pillText, ...rest }: CardOptionProps) {
  return (
    <Container {...rest}>
      <Tooltip>
        <Icon name="info" size="sm" color="neutralColor800" />
      </Tooltip>
      <SvgContainer>{icon}</SvgContainer>
      <Heading variant="small-title" color="neutralColor800">
        {text}
      </Heading>
      {pillText && (
        <Pill {...rest} small onClick={() => {}} style={{ padding: '2px 6px' }}>
          {pillText as string}
        </Pill>
      )}
    </Container>
  )
}
