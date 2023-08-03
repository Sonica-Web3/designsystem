import { styled } from '../../styles'

export const ActionButtonContainer = styled('button', {
  all: 'unset',

  background: '{bgColor}',

  borderRadius: '10px',
  boxShadow:
    '0px 9px 21px -10px rgba(20, 20, 20, 0.10), 0px 2px 3px -2px rgba(20, 20, 20, 0.07)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.1s',

  '.material-symbols-rounded': {
    fontSize: '1.3rem',
  },

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$10',
        height: '$10',
      },
      lg: {
        width: '$12',
        height: '$12',
      },
    },

    variant: {
      default: {
        border: '1px solid transparent',

        svg: {
          path: {
            stroke: '$neutralColor900',
          },
        },

        '&:hover': {
          cursor: 'pointer',
          background: '$primaryColor900',
          borderColor: '$primaryColor500',
        },

        '&:active': {
          cursor: 'pointer',
          background: '$primaryColor500',
          /*  borderColor: '$primaryColor200', */
        },

        '&:disabled': {
          cursor: 'not-allowed',
          background: '$neutralColorWhite',
          borderColor: '$neutralColor200',
          svg: {
            path: {
              stroke: '$neutralColor400',
            },
          },
        },
      },

      remove: {
        /*  border: '1px solid $errorColor500', */

        svg: {
          transition: 'all 0.1s',
          path: {
            stroke: '$errorColor500',
          },
        },

        '&:hover': {
          cursor: 'pointer',
          background: '$errorColor100',
          /* borderColor: '$errorColor500', */
          svg: {
            path: {
              stroke: '$errorColor500',
            },
          },
        },

        '&:active': {
          cursor: 'pointer',
          background: '$errorColor300',
          /* borderColor: '$errorColor500', */
          svg: {
            path: {
              stroke: '$errorColor500',
            },
          },
        },

        '&:disabled': {
          cursor: 'not-allowed',
          background: '$neutralColorWhite',
          /*   borderColor: '$neutralColor400', */
          svg: {
            path: {
              stroke: '$neutralColor400',
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
    variant: 'default',
  },
})
