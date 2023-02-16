import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import { generateColorPaletteVariants } from '../utils/generateColorPaletteVariants'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$md',
  margin: 0,
  color: '$neutralColor800',

  variants: {
    variant: {
      'over-text': {
        fontWeight: '$semiBold',
        fontSize: '$sm',
        lineHeight: '$md',
      },
      'CTA-text': {
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
      'table-text': {
        fontWeight: '$regular',
        fontSize: '$sm',
        lineHeight: '$lg',
      },
      'table-text-uppercase': {
        fontWeight: '$regular',
        fontSize: '$xxs',
        lineHeight: '$xs',
        textTransform: 'uppercase',
      },
      'tiny-link-text': {
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
      'body-tiny': {
        fontWeight: '$regular',
        fontSize: '$sm',
        lineHeight: '$md',
      },
    },

    color: generateColorPaletteVariants({ color: '$' }),
  },
  defaultVariants: {
    variant: 'text',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}
