import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',

        input: {
          background: '$neutralColor200',
          borderColor: '$neutralColor200',
          cursor: 'not-allowed',
          pointerEvents: 'none',
          color: '$neutralColor200',
          '&::placeholder': { color: '$neutralColor400' },

          '&:not(:placeholder-shown)': {
            borderColor: '$neutralColor200',

            '&:placeholder': {
              opacity: 1,
            },

            '& + label': {
              color: '$neutralColor300',
            },
          },
        },
        label: {
          color: '$neutralColor400',
          background: 'transparent',
        },

        p: {
          color: '$neutralColor400',
        },
      },
    },
  },

  defaultVariants: {
    disabled: false,
  },
})

export const Input = styled('input', {
  unset: 'all',
  width: '100%',
  height: '31px',
  background: '$neutralColorWhite',
  padding: '0px 4px',
  border: 'none',
  borderBottom: '1px solid transparent',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$md',
  color: '$neutralColor800',
  fontFamily: '$default',

  transition: 'all 0.2s ease-in-out',

  '&:focus': {
    outline: 'none',
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
  },

  defaultVariants: {
    hasError: false,
  },
})

export const Message = styled('p', {
  fontSize: '$xxs',
  lineHeight: '$xs',
  color: '$secondaryColor500',
  fontFamily: '$default',
  fontWeight: '$regular',
  marginTop: '$1',
  marginLeft: '$1',

  variants: {
    hasError: {
      true: {
        color: '$errorColor500',
      },
    },
  },
})
