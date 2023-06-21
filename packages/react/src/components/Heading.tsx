import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import { generateColorPaletteVariants } from '../utils/generateColorPaletteVariants'

export const Heading = styled('h2', {
  lineHeight: '$md',
  margin: 0,
  color: '$neutralColor800',

  variants: {
    variant: {
      'big-title': {
        fontFamily: '$bigTitle',
        fontWeight: '$regular',
        fontSize: '$2xl',
        lineHeight: '$2xl',
        textTransform: 'uppercase',
      },
      title: {
        fontFamily: '$default',
        fontWeight: '$medium',
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      'small-title': {
        fontFamily: '$default',
        fontWeight: '$medium',
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      'smaller-title': {
        fontFamily: '$default',
        fontWeight: '$bold',
        fontSize: '$xs',
        lineHeight: '$md',
      },
    },
    color: generateColorPaletteVariants({ color: '$' }),
  },

  defaultVariants: {
    variant: 'title',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
