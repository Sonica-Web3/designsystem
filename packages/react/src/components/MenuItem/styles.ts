import { styled } from '../../styles'

export const MenuItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$md',
  fontWeight: '400',
  color: '#F7F6F8',
  width: '100%',
  height: '$10',
  position: 'relative',
  transition: 'all .1s',
  borderRadius: 10,
  paddingLeft: '12px',

  '&::before': {
    content: `''`,
    position: 'absolute',
    display: 'block',
    width: '2px',
    height: '32px',
    left: 0,
    top: 0,
    zIndex: 2,
  },

  svg: {
    path: {
      stroke: '$neutralColorWhite',
    },
  },

  '.material-symbols-rounded': {
    fontSize: '24px',
  },

  span: {
    whiteSpace: 'nowrap',
    overflowY: 'hidden',
  },

  variants: {
    selected: {
      true: {
        '&::before': {
          background: '$greenColor70',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          boxShadow: '0px 0px 5px 0px #A6F60099',
          marginLeft: '-8px',
          marginTop: '4px',
          height: '32px',
          width: '2px',
          display: 'flex',
          alignItems: 'center',
        },
        color: '$greenColor70',
        fontWeight: '500',
        background: '#242324',
        svg: {
          path: {
            stroke: '$greenColor70',
          },
        },
      },
    },

    collapsed: {
      true: {
        width: '60px',
        i: {
          marginLeft: '12px',
        },
        svg: {
          width: '120%',
          marginLeft: '16px',
        },
        span: {
          visibility: 'hidden',
        },
      },
    },
  },

  compoundVariants: [
    {
      css: {
        '&:hover': {
          cursor: 'pointer',
          background: '#242324',
          color: '$greenColor70',

          svg: {
            path: {
              stroke: '$greenColor70',
            },
          },
        },

        '&:hover::before': {
          background: '$greenColor70',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          boxShadow: '0px 0px 5px 0px #A6F60099',
          marginLeft: '-8px',
          marginTop: '4px',
          height: '32px',
          width: '2px',
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
  ],
})
