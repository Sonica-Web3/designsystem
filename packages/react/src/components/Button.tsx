import { styled } from '../styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  all: 'unset',
  fontWeight: '$semiBold',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$md',
  color: '$neutralColorWhite',
  borderRadius: '$md',
  textAlign: 'center',
  minWidth: 200,
  minHeight: 48,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  transition: 'all .1s',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      solid: {
        background: '$primaryColor500',

        '&:not(:disabled):hover': {
          background: '$primaryColor400',
        },

        '&:not(:disabled):active': {
          background: '$primaryColor700',
        },

        '&:disabled': {
          background: '$neutralColor300',
        },
      },

      outline: {
        background: 'transparent',
        border: '1px solid $primaryColor500',
        color: '$primaryColor500',

        '&:not(:disabled):hover': {
          background: '$primaryColor100',
        },

        '&:not(:disabled):active': {
          background: '$primaryColor500',
          color: '$neutralColorWhite',
        },
        '&:disabled': {
          background: 'transparent',
          border: '1px solid $neutralColor300',
        },
      },
      error: {
        background: 'transparent',
        border: '1px solid $errorColor500',
        color: '$errorColor500',

        '&:not(:disabled):hover': {
          background: '$errorColor100',
        },
        '&:not(:disabled):active': {
          background: '$errorColor500',
          color: '$neutralColorWhite',
        },

        '&:disabled': {
          background: 'transparent',
          border: '1px solid $neutralColor300',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
