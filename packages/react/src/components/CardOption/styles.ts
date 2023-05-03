import { styled } from '../../styles'

export const Container = styled('div', {
  position: 'relative',
  width: '10rem',
  height: '12.5rem',
  backgroundColor: '$neutralColorWhite',
  borderRadius: '$default',
  border: '1px solid $neutralColor500',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  textAlign: 'center',

  padding: '$2',

  h2: {
    color: '$neutralColor800',
    wordBreak: 'break-word',
  },

  variants: {
    selected: {
      true: {
        background: '$primaryColor500',
        borderColor: '$primaryColor500',
        h2: {
          color: '$neutralColorWhite',
        },
        div: {
          background: 'transparent',

          svg: {
            path: {
              stroke: '$neutralColorWhite',
              fill: '',
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
          path: {
            stroke: 'none',
          },
        },

        'span svg': {
          path: {
            stroke: 'none',
          },
        },
      },
    },
    isBranding: {
      true: {
        div: {
          background: 'transparent',

          svg: {
            path: {
              stroke: 'none',
              fill: '',
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    disabled: false,
    isBranding: false,
    selected: false,
  },
  compoundVariants: [
    {
      selected: true,
      isBranding: false,
      css: {
        '> svg': {
          stroke: '$neutralColorWhite',
        },
      },
    },
    {
      selected: false,
      disabled: false,
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

export const SvgContainer = styled('div', {
  height: '50%',
  display: 'flex',
  alignItems: 'flex-center',
  justifyContent: 'space-evenly',
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
