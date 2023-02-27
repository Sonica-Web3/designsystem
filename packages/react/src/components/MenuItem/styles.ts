import { styled } from '../../styles'

export const MenuItemContainer = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$md',
  color: '$neutralColor800',
  width: '100%',
  height: '$10',
  position: 'relative',
  transition: 'all .1s',

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
    marginLeft: '$4',
    width: '$6',
    height: '$6',
  },

  variants: {
    selected: {
      true: {
        '&::before': {
          background: '$primaryColor500',
        },

        color: '$neutralColorBlack',
        fontWeight: '$medium',
        background: '$primaryColor50',

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
          background: '$primaryColor50',
          color: '$neutralColor900',
          '&:before': {
            background: '$primaryColor100',
          },
        },

        '&:hover::before': {
          transition: 'all .1s',
        },
      },
    },
  ],
})
