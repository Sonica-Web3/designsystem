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
        fontWeight: '$bold',
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      title: {
        fontFamily: '$default',
        fontWeight: '$semiBold',
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      'small-title': {
        fontFamily: '$default',
        fontWeight: '$semiBold',
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
