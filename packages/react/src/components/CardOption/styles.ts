import { styled } from '../../styles'

export const Container = styled('div', {
  position: 'relative',
  width: '10rem',
  height: '12.5rem',
  backgroundColor: '$neutralColorWhite',
  borderRadius: '$default',
  border: '1px solid $neutralColor500',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  padding: '$2',

  variants: {
    selected: {
      true: {
        background: '$primaryColor500',
        borderColor: '$primaryColor500',
        h2: {
          color: '$neutralColorWhite',
        },
        span: {
          background: 'transparent',

          svg: {
            path: {
              stroke: '$neutralColorWhite',
            },
          },
        },
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        background: '$neutralColorWhite',
        borderColor: '$neutralColor300',
        h2: {
          color: '$neutralColor300',
        },
        svg: {
          opacity: 0.3,
        },

        'span svg': {
          path: {
            stroke: '$neutralColor600',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      selected: undefined,
      disabled: undefined,
      css: {
        '&:hover': {
          cursor: 'pointer',
          background: '$primaryColor100',
          borderColor: '$primaryColor500',
          span: {
            background: '$primaryColor500',
            '> svg': {
              path: {
                stroke: '$neutralColorWhite',
              },
            },
          },
        },
      },
    },
  ],
})

export const Tooltip = styled('span', {
  position: 'absolute',
  top: '$1',
  right: '$1',
  width: '$6',
  height: '$6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',

  background: '$neutralColor100',
})
