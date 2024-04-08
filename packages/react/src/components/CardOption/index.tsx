import React, { ComponentProps } from 'react'
import { Heading } from '../Heading'

import { InfoButton } from '../InfoButton'
import { Pill } from '../Pill'
import { Container, SvgContainer } from './styles'

export interface CardOptionProps extends ComponentProps<typeof Container> {
  icon: React.ReactNode
  text: string
  pillText?: string
  tooltip?: string
  align?: 'left' | 'right' | 'top' | 'bottom'
}

export function CardOption({
  icon,
  text,
  pillText,
  tooltip,
  align,
  ...rest
}: CardOptionProps) {
  return (
    <Container {...rest}>
      {tooltip && <InfoButton text={tooltip} align={align} />}
      <SvgContainer>{icon}</SvgContainer>
      <Heading variant="small-title" color="neutralColor800">
        {text}
      </Heading>
      {pillText && (
        <Pill
          {...rest}
          small
          onClick={() => {}}
          style={{ padding: '2px 6px' }}
          className="pill"
        >
          {pillText as string}
        </Pill>
      )}
    </Container>
  )
}
