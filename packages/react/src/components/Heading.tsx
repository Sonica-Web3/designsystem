import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import { generateColorPaletteVariants } from '../utils/generateColorPaletteVariants'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$md',
  margin: 0,
  color: '$neutralColor800',

  variants: {
    variant: {
      'big-title': {
        fontWeight: '$bold',
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      'small-title': {
        fontWeight: '$semiBold',
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      'smaller-title': {
        fontWeight: '$bold',
        fontSize: '$xs',
        lineHeight: '$md',
      },
    },
    color: generateColorPaletteVariants({ color: '$' }),
  },

  defaultVariants: {
    variant: 'small-title',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
