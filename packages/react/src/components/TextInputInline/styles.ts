import { styled } from '../../styles'

export const Container = styled('div', {
  width: '100%',
  display: 'flex',

  position: 'relative',
})

export const Input = styled('input', {
  unset: 'all',
  width: '100%',
  height: '32px',
  background: '$neutralColorWhite',
  padding: '0px 4px',
  border: 'none',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$md',
  color: '$neutralColor800',
  fontFamily: '$default',

  '&:focus': {
    outline: 'none',
    height: '31px',
    borderBottom: '1px solid $secondaryColor500',
  },

  '&:not(:placeholder-shown)': {
    '&placeholder': {
      opacity: 1,
    },
  },

  variants: {
    hasError: {
      true: {
        outline: 'none',
        borderColor: '$errorColor500',

        '&:focus': {
          outline: 'none',
          borderColor: '$errorColor500',
        },
        '&:placeholder-shown': {
          '&:placeholder': {
            opacity: 0,
          },
        },
        '&:not(:placeholder-shown)': {
          borderColor: '$errorColor500',

          '&placeholder': {
            opacity: 1,
          },
        },
      },
      false: {
        '&:focus': {
          outline: 'none',
          borderColor: '$secondaryColor500',
        },
        '&:placeholder-shown': {
          '&:placeholder': {
            opacity: 0,
          },
          '&:not(:placeholder-shown)': {
            borderColor: '$secondaryColor500',

            '&:placeholder': {
              opacity: 1,
            },
          },
        },
      },
    },
    disabled: {
      true: {
        disabled: true,
        cursor: 'not-allowed',

        '&:focus': {
          outline: 'none',
          borderColor: '$neutralColor500',
        },
      },

      false: {
        pointerEvents: 'auto',
      },
    },
  },
  defaultVariants: {
    hasError: false,
    disabled: false,
  },
})

export const Message = styled('p', {
  fontSize: '$xxs',
  lineHeight: '$xs',
  color: '$neutralColor700',
  fontFamily: '$default',
  fontWeight: '$regular',
  marginTop: '$1',
  marginLeft: '$1',

  position: 'absolute',
  bottom: '-24px',

  variants: {
    hasError: {
      true: {
        color: '$errorColor500',
      },
    },
    disabled: {
      true: {
        color: '$neutralColor500',
      },

      false: {
        color: '$neutralColor700',
      },
    },
  },
})
