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

  '&[disabled]': {
    cursor: 'not-allowed',
  },

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
    customDisabled: {
      true: {},
      false: {},
    },
  },

  defaultVariants: {
    variant: 'solid',
  },

  compoundVariants: [
    {
      customDisabled: true,
      variant: 'solid',
      css: {
        // pointerEvents: 'none',
        background: '$neutralColor300',
      },
    },
    {
      customDisabled: false,
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
      customDisabled: true,
      variant: 'outline',
      css: {
        background: 'transparent',
        border: '1px solid $neutralColor300',
        color: '$neutralColor400',
      },
    },
    {
      customDisabled: false,
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
      customDisabled: true,
      variant: 'error',
      css: {
        background: 'transparent',
        border: '1px solid $neutralColor300',
        color: '$neutralColor400',
      },
    },
    {
      customDisabled: false,
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
      customDisabled: false,
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
