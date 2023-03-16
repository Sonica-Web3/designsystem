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
          color: '$neutralColor800',
          '&::placeholder': { color: '$neutralColor700' },

          '&:not(:placeholder-shown)': {
            '&:placeholder': {
              opacity: 1,
            },
          },
        },
        p: {
          color: '&neutralColor800',
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
  padding: '8px 4px',
  border: 'none',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$md',
  color: '$neutralColor800',
  fontFamily: '$default',

  transition: 'all 0.2s ease-in-out',

  '&:focus': {
    borderBottom: '1px solid $primaryColor500',
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
          borderColor: '$primaryColor500',
        },
        '&:placeholder-shown': {
          '&:placeholder': {
            opacity: 0,
          },
          '&:not(:placeholder-shown)': {
            borderColor: '$primaryColor500',

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
