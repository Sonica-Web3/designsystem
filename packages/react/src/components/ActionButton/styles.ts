import { styled } from '../../styles'

export const ActionButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',

  borderRadius: '10px',
  boxShadow:
    '0px 9px 21px -10px rgba(20, 20, 20, 0.10), 0px 2px 3px -2px rgba(20, 20, 20, 0.07)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.1s',

  variants: {
    size: {
      sm: {
        width: '32px',
        height: '32px',
        '.material-symbols-rounded': {
          fontSize: '16px',
        },
      },
      md: {
        width: '40px',
        height: '40px',
        '.material-symbols-rounded': {
          fontSize: '20px',
        },
      },
      lg: {
        width: '48px',
        height: '48px',
        '.material-symbols-rounded': {
          fontSize: '24px',
        },
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
          background: '$errorColor500',
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
