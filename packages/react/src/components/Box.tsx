import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray200',
  border: '1px solid $gray200',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
