import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Root, {
  unset: 'all',
})

export const SelectTrigger = styled(Select.Trigger, {
  unset: 'all',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$md',
  padding: '$4 $2',
  lineHeight: '$md',
  fontSize: '$sm',
  border: '1px solid $neutralColor500',

  background: '$neutralColorWhite',

  fontFamily: '$default',

  height: '$8',
  width: '100%',

  color: '$neutralColor700',

  '&[aria-expanded="true"]': {
    'span:last-child': {
      transform: 'rotate(3.142rad)',
    },
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '$1',
    svg: {
      width: '$4',
      height: '$4',
    },
  },

  '&:hover': {
    background: '$primaryColor50',
    cursor: 'pointer',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $neutralColor500',
  },

  '&:focus-visible': {
    outline: '1px solid $primaryColor50',
  },

  '&:[data-placeholder]': {
    color: '$neutralColor700',
  },

  '.SelectIcon svg': {
    margin: '$0',
    width: '$4',
    height: '$4',
    path: {
      stroke: '$neutralColor500',
    },
  },

  variants: {
    collapsed: {
      true: {
        margin: '$0',
        justifyContent: 'center',
        textIndent: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '$8',

        'span:not(.SelectIcon)': {
          position: 'absolute',
          left: '7px',

          display: 'flex',
          alignItems: 'center',
        },
        '.SelectIcon': {
          display: 'none',
        },
      },
    },
    side: {
      bottom: {
        '&[aria-expanded="true"]': {
          borderBottom: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
      top: {
        '&[aria-expanded="true"]': {
          borderTop: 'none',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
      },
    },
  },
})

export const SelectContent = styled(Select.Content, {
  backgroundColor: '$neutralColorWhite',
  borderRadius: '$default',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$neutralColor500',
  borderTop: 'none',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  width: '100%',

  '.SelectLabel': {
    padding: '$2',
    color: '$neutralColor500',
    fontSize: '$xxs',
    fontFamily: '$default',
    lineHeight: '$xs',
  },

  '.SelectItem': {
    fontFamily: '$default',
    fontSize: '$sm',
    lineHeight: '$md',

    color: '$neutralColor800',

    padding: '$3 $2',
    position: 'relative',
    userSelect: 'none',

    transition: 'all 0.1s',

    svg: {
      marginRight: '$1',
      width: '$4',
      height: '$4',
    },

    span: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    '&:focus-visible': {
      outline: 'none',
    },

    '&:not(:last-child)': {
      borderBottomColor: '$neutralColor200',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
    },

    zIndex: 0,

    '&:hover': {
      '> span::before': {
        content: `''`,
        position: 'absolute',
        display: 'block',
        width: '4px',
        height: '100%',
        background: '$primaryColor100',
        left: 0,
        top: 0,
      },

      background: '$primaryColor50',
      cursor: 'pointer',
    },
  },

  variants: {
    sideEffect: {
      top: {
        borderBottom: 'none',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,

        '.SelectGroup:last-child': {
          '.SelectItem:last-child': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,

            '> span::before': {
              borderBottomLeftRadius: 0,
            },
          },
        },
      },

      bottom: {
        borderTop: 'none',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',

        '.SelectGroup:last-child': {
          '.SelectItem:last-child': {
            borderBottomLeftRadius: '$default',
            borderBottomRightRadius: '$default',

            '> span::before': {
              borderBottomLeftRadius: '$default',
            },
          },
        },
      },
    },
  },
})
