import { styled } from '../../styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
})

export const Container = styled('div', {
  width: '100%',
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
        pointerEvents: 'none',

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
  color: '$secondaryColor500',
  fontFamily: '$default',
  fontWeight: '$regular',
  margin: '$0',
  marginLeft: '$1',

  position: 'absolute',
  bottom: '-$4',

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
