import { styled } from '../../styles'

export const MenuItemContainer = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$md',
  color: '$neutralColor800',
  width: '100%',
  height: '$10',
  position: 'relative',

  '&::before': {
    content: `''`,
    position: 'absolute',
    display: 'block',
    width: '4px',
    height: '40px',
    left: 0,
    top: 0,
    zIndex: 2,
  },

  svg: {
    marginLeft: '$3',
  },

  variants: {
    selected: {
      true: {
        '&::before': {
          background: '$primaryColor500',
        },

        color: '$neutralColorBlack',

        background: '$primaryColor100',

        svg: {
          path: {
            stroke: '$neutralColorBlack',
          },
        },
      },
    },

    collapsed: {
      true: {
        width: '71px',
        justifyContent: 'center',
        textIndent: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',

        svg: {
          position: 'absolute',
          marginLeft: '$0',
        },
      },
    },
  },

  compoundVariants: [
    {
      selected: undefined,
      css: {
        '&:hover': {
          cursor: 'pointer',
          '&:before': {
            background: '$primaryColor100',
          },
        },

        '&:hover::before': {
          transition: 'all .2s',
        },
      },
    },
  ],
})
