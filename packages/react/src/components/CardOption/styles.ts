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
  transition: 'all .2s',

  padding: '$2',

  '&:not(disabled)&:hover': {
    cursor: 'pointer',
    background: '$primaryColor100',
    borderColor: '$primaryColor500',

    span: {
      background: '$primaryColor500',

      '>svg': {
        path: {
          stroke: '$neutralColorWhite',
        },
      },
    },
  },

  variants: {
    selected: {
      true: {
        background: '$primaryColor500',
        borderColor: '$primaryColor500',
        h2: {
          color: '$neutralColorWhite',
        },
        span: {
          background: '$primaryColor500',
        },

        svg: {
          path: {
            stroke: '$neutralColorWhite',
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
          path: {
            stroke: '$neutralColor300',
          },
        },

        'span svg': {
          path: {
            stroke: '$neutralColor600',
          },
        },
      },
    },
  },
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
  transition: 'all .2s',

  background: '$neutralColor100',
})
