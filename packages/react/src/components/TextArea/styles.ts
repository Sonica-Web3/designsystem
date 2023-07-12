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
          '&:placeholder': { color: '$neutralColor700' },

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

export const TextArea = styled('textarea', {
  unset: 'all',
  width: '100%',
  background: '$neutralColorWhite',
  padding: '$3 $2',
  border: '1px solid transparent',
  borderRadius: '10px',
  fontSize: '$md',
  lineHeight: '$lg',
  color: '$neutralColor700',
  fontFamily: '$default',
  fontWeight: '$regular',
  height: '6.75rem',
  boxShadow:
    '0px 9px 21px -10px rgba(20, 20, 20, 0.10), 0px 2px 3px -2px rgba(20, 20, 20, 0.07)',

  '&::placeholder': {
    opacity: 0,
  },

  transition: 'all 0.5s ease-in-out',

  '&:focus': {
    outline: 'none',

    '& + label': {
      transform: 'scale(0.75) translateY(-1.2rem) translateX(-0.125rem)',
      padding: '0 2px',
    },
  },

  '&:not(:placeholder-shown)': {
    '& + label': {
      transform: 'scale(0.75) translateY(-1.2rem) translateX(-0.125rem)',
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
  left: '0.5625rem',
  top: '0.375rem',

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
