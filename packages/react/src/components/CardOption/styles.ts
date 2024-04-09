import { styled } from '../../styles'

export const Container = styled('div', {
  position: 'relative',
  width: '160px !important',
  height: '12.5rem',
  backgroundColor: '$neutralColorWhite',
  borderRadius: '16px',
  boxShadow:
    '0px 9px 21px -10px rgba(20, 20, 20, 0.10), 0px 2px 3px -2px rgba(20, 20, 20, 0.07)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  textAlign: 'center',

  border: '1px solid transparent',
  boxSizing: 'border-box',
  padding: '$2',

  button: {
    position: 'absolute',
    top: '$2',
    right: '$2',
  },

  h2: {
    color: '$neutralColor900',
    wordBreak: 'break-word',
  },

  '.pill': {
    minWidth: 'fit-content',
  },

  variants: {
    selected: {
      true: {
        border: '1px solid $primaryColor500',
        h2: {
          color: '$neutralColor900',
        },
        div: {
          background: 'transparent',

          svg: {
            path: {
              stroke: '$neutralColor900',
              fill: '',
            },
          },
        },
        span: {
          background: '$primaryColor500',
          color: '$neutralColor900',
          '> svg': {
            path: {
              stroke: '$neutralColor900',
            },
          },
        },
      },
    },

    disabled: {
      true: {
        cursor: '$not-allowed',
        background: '$neutralColorWhite',
        borderColor: '$neutralColor300',
        h2: {
          color: '$neutralColor300',
        },
        svg: {
          opacity: 0.3,
          path: {
            stroke: '',
          },
        },

        span: {
          background: '$neutralColor100',
          color: '$neutralColor300',
          '> svg': {
            opacity: 1,
            path: {
              stroke: '$neutralColor600',
            },
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
              stroke: 'none !important',
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
          stroke: '$primaryColor900',
        },
      },
    },
    {
      selected: false,
      disabled: false,
      css: {
        '&:hover': {
          cursor: 'pointer',
          background: '$primaryColor900',
          border: '1px solid $primaryColor500',

          span: {
            background: '$primaryColor700',
            color: '$neutralColor900',
            '> svg': {
              path: {
                stroke: '$neutralColor900',
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
  top: '$2',
  right: '$2',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',

  background: '$neutralColor100',
  svg: {
    path: {
      stroke: '$neutralColor600',
    },
  },
})
