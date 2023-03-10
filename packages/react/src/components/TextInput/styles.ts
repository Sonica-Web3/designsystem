import { styled } from '../../styles'
export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',

        input: {
          cursor: 'not-allowed',
          pointerEvents: 'none',
          color: '$neutralColor700',
          '&::placeholder': { color: '$neutralColor700' },

          '&:not(:placeholder-shown)': {
            borderColor: '$neutralColor700',

            '&:placeholder': {
              opacity: 1,
            },

            '& + label': {
              color: '$neutralColor700',
            },
          },
        },
        label: {
          color: '$neutralColor700',
        },

        p: {
          color: '$neutralColor700',
        },
      },
    },
  },
})

export const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
})

export const Input = styled('input', {
  unset: 'all',
  width: '100%',
  background: '$neutralColorWhite',
  padding: '0 $2',
  height: '40px',
  border: '1px solid $neutralColor500',
  borderRadius: '$md',
  fontSize: '$md',
  lineHeight: '$lg',
  color: '$neutralColor700',
  fontFamily: '$default',
  fontWeight: '$regular',

  transition: 'all 0.2s ease-in-out',

  '&:focus': {
    outline: 'none',

    '& + label': {
      transform: 'scale(0.75) translateY(-1.5rem) translateX(-0.125rem)',
      padding: '0 2px',
    },
  },

  '&:not(:placeholder-shown)': {
    '&:placeholder': {
      opacity: 1,
    },

    '& + label': {
      transform: 'scale(0.75) translateY(-1.5rem) translateX(-0.125rem)',
      padding: '0 2px',
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

          '& + label': {
            color: '$errorColor500',
          },
        },

        '&:placeholder-shown': {
          '&:placeholder': {
            opacity: 0,
          },
        },
        '&:not(:placeholder-shown)': {
          borderColor: '$errorColor500',

          '&:placeholder': {
            opacity: 1,
          },

          '& + label': {
            color: '$errorColor500',
          },
        },
      },
      false: {
        '&:focus': {
          outline: 'none',
          borderColor: '$primaryColor500',

          '& + label': {
            color: '$primaryColor500',
          },
        },
        '&:placeholder-shown': {
          '&:placeholder': {
            opacity: 0,
          },
        },
        '&:not(:placeholder-shown)': {
          borderColor: '$primaryColor500',

          '&:placeholder': {
            opacity: 1,
          },

          '& + label': {
            color: '$primaryColor500',
          },
        },
      },
    },
  },
  defaultVariants: {
    hasError: false,
  },
})

export const Label = styled('label', {
  position: 'absolute',
  margin: '0 auto',
  left: '9px',
  top: '9.5px',

  background: '$neutralColorWhite',

  pointerEvents: 'none',
  transformOrigin: ' 0 0',
  transition: ' opacity .1s ease-in-out,transform .1s ease-in-out',

  fontSize: '$md',
  lineHeight: '$lg',
  color: '$neutralColor700',
  fontFamily: '$default',
  fontWeight: '$regular',
})

export const Message = styled('p', {
  fontSize: '$xxs',
  lineHeight: '$xs',
  color: '$neutralColor700',
  fontFamily: '$default',
  fontWeight: '$regular',
  marginTop: '$1',
  marginLeft: '$3',

  variants: {
    hasError: {
      true: {
        color: '$errorColor500',
      },
    },
  },
})
