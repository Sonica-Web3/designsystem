import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import { generateColorPaletteVariants } from '../utils/generateColorPaletteVariants'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$md',
  margin: 0,
  color: '$neutralColor800',

  variants: {
    type: {
      overText: {
        fontWeight: '$semiBold',
        fontSize: '$sm',
        lineHeight: '$md',
      },
      CTAText: {
        fontWeight: '$semiBold',
        fontSize: '$sm',
        lineHeight: '$md',
      },
      text: {
        fontWeight: '$regular',
        fontSize: '$sm',
        lineHeight: '$md',
      },
      highlight: {
        fontWeight: '$medium',
        fontSize: '$sm',
        lineHeight: '$md',
      },
      tableText: {
        fontWeight: '$regular',
        fontSize: '$sm',
        lineHeight: '$lg',
      },
      tableTextUppercase: {
        fontWeight: '$regular',
        fontSize: '$xxs',
        lineHeight: '$xs',
        textTransform: 'uppercase',
      },
      tinyLinkText: {
        fontWeight: '$regular',
        fontSize: '$xxs',
        lineHeight: '$md',
        textDecoration: 'underline',
      },

      caption: {
        fontWeight: '$regular',
        fontSize: '$xs',
        lineHeight: '$sm',
      },
    },
    variant: {},
    color: generateColorPaletteVariants({ color: '$' }),
  },
  defaultVariants: {
    type: 'text',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
