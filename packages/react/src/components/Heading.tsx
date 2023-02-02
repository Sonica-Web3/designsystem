import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import { generateColorPaletteVariants } from '../utils/generateColorPaletteVariants'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$md',
  margin: 0,
  color: '$neutralColor800',

  variants: {
    type: {
      bigTitle: {
        fontWeight: '$bold',
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      smallTitle: {
        fontWeight: '$semiBold',
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      smallerTitle: {
        fontWeight: '$bold',
        fontSize: '$xs',
        lineHeight: '$md',
      },
    },
    color: generateColorPaletteVariants({ color: '$' }),
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}
