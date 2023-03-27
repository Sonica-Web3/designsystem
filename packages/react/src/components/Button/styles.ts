import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
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

  transition: 'all .1s',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {},

  variants: {
    variant: {
      solid: {
        background: '$primaryColor500',
      },

      outline: {
        background: 'transparent',
        border: '1px solid $primaryColor500',
        color: '$primaryColor500',
      },
      error: {
        background: 'transparent',
        border: '1px solid $errorColor500',
        color: '$errorColor500',
      },
    },

    loading: {
      true: {},
    },
    disabled: {
      true: {},
      false: {},
    },
  },

  defaultVariants: {
    variant: 'solid',
  },

  compoundVariants: [
    {
      disabled: true,
      variant: 'solid',
      css: {
        cursor: 'not-allowed',
        background: '$neutralColor300',
      },
    },
    {
      disabled: false,
      variant: 'solid',
      css: {
        '&:hover': {
          background: '$primaryColor400',
          cursor: 'pointer',
        },

        '&:active': {
          background: '$primaryColor700',
        },
      },
    },
    {
      disabled: true,
      variant: 'outline',
      css: {
        cursor: 'not-allowed',
        background: 'transparent',
        border: '1px solid $neutralColor300',
        color: '$neutralColor400',
      },
    },
    {
      disabled: false,
      variant: 'outline',
      css: {
        '&:hover': {
          background: '$primaryColor100',
          cursor: 'pointer',
        },

        '&:active': {
          background: '$primaryColor500',
          color: '$neutralColorWhite',
        },
      },
    },
    {
      disabled: true,
      variant: 'error',
      css: {
        cursor: 'not-allowed',
        background: 'transparent',
        border: '1px solid $neutralColor300',
        color: '$neutralColor400',
      },
    },
    {
      disabled: false,
      variant: 'error',
      css: {
        '&:hover': {
          background: '$errorColor100',
          cursor: 'pointer',
        },

        '&:active': {
          background: '$errorColor500',
          color: '$neutralColorWhite',
        },
      },
    },
    {
      loading: true,
      disabled: false,
      variant: 'solid',
      css: {
        pointerEvents: 'none',
      },
    },
    {
      loading: true,
      variant: 'outline',
      css: {
        pointerEvents: 'none',
      },
    },
    {
      loading: true,
      variant: 'error',
      css: {
        pointerEvents: 'none',
      },
    },
  ],
})
