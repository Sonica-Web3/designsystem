import { styled } from '../../styles'

export const ActionButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',

  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.1s',

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
        border: '1px solid $neutralColor400',

        svg: {
          transition: 'all 0.2s',
          path: {
            stroke: '$neutralColor600',
          },
        },

        '&:not(:active)&:hover': {
          cursor: 'pointer',
          background: '$primaryColor100',
          borderColor: '$primaryColor500',
          svg: {
            path: {
              stroke: '$neutralColor700',
            },
          },
        },

        '&:active': {
          cursor: 'pointer',
          background: '$primaryColor500',
          borderColor: '$primaryColor500',
          svg: {
            path: {
              stroke: '$neutralColorWhite',
            },
          },
        },
      },

      remove: {
        border: '1px solid $errorColor500',

        svg: {
          transition: 'all 0.2s',
          path: {
            stroke: '$errorColor500',
          },
        },

        '&:not(:active)&:hover': {
          cursor: 'pointer',
          background: '$errorColor100',
          borderColor: '$errorColor500',
          svg: {
            path: {
              stroke: '$errorColor500',
            },
          },
        },

        '&:active': {
          cursor: 'pointer',
          background: '$errorColor500',
          borderColor: '$errorColor500',
          svg: {
            path: {
              stroke: '$neutralColorWhite',
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
