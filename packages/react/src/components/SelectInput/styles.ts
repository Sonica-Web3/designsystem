import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectGroup = styled(Select.Group, {
  maxHeight: '150px',
  overflowY: 'auto',
})

export const SelectContainer = styled(Select.Root, {
  unset: 'all',
  position: 'relative',
})

export const SelectSeparator = styled(Select.Separator, {
  borderTop: '1px solid $neutralColor200',

  '&[selected-value="true"]': {
    borderColor: '$primaryColor800',
  },

  variants: {
    hasError: {
      true: {
        borderTop: '1px solid $errorColor100',

        '&[selected-value="true"]': {
          borderColor: '$errorColor100',
        },
      },
    },
  },
})

export const SelectTrigger = styled(Select.Trigger, {
  unset: 'all',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $2',
  lineHeight: '$lg',
  fontSize: '$md',
  boxShadow:
    '0px 9px 21px -10px rgba(20, 20, 20, 0.10), 0px 2px 3px -2px rgba(20, 20, 20, 0.07)',

  borderRadius: '10px',
  border: '1px solid $neutralColor700',

  background: '$neutralColorWhite',

  fontFamily: '$default',

  height: '$10',
  width: 'inherit',

  color: '$neutralColor700',

  '&[selected-value="true"]': {
    borderColor: '$primaryColor500',
  },

  '&[aria-expanded="true"]': {
    'span:last-child': {
      transform: 'rotate(3.142rad)',
    },
    borderBottom: '1px solid $neutralColorWhite',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  '&:hover': {
    cursor: 'pointer',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $neutralColor700',
  },

  '&:focus-visible': {
    outline: '1px solid $primaryColor800',
  },

  '&:[data-placeholder]': {
    color: '$neutralColor700',
  },

  '.SelectIcon svg': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '$0',
    width: '$4',
    height: '$4',
    path: {
      stroke: '$neutralColor700',
    },
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $errorColor500',

        '&[selected-value="true"]': {
          borderColor: '$errorColor500',
        },

        '&[aria-expanded="true"]': {
          'span:last-child': {
            transform: 'rotate(3.142rad)',
          },
          borderBottom: '1px solid $neutralColorWhite',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
  },
})

export const SelectContent = styled(Select.Content, {
  backgroundColor: '$neutralColorWhite',
  borderRadius: '10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$neutralColor700',
  borderTop: 'none',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  minWidth: '100%',
  boxShadow:
    '0px 9px 21px -10px rgba(20, 20, 20, 0.10), 0px 2px 3px -2px rgba(20, 20, 20, 0.07)',

  '&[selected-value="true"]': {
    borderColor: '$primaryColor500',
  },

  '.SelectLabel': {
    padding: '$2',
    color: '$neutralColor700',
    fontSize: '$xxs',
    fontFamily: '$default',
    lineHeight: '$xs',
  },

  '.SelectItem': {
    fontFamily: '$default',
    fontSize: '$sm',
    lineHeight: '$md',

    color: '$neutralColor700',

    padding: '$3 $2',
    position: 'relative',
    userSelect: 'none',

    transition: 'all 0.1s',

    '&:focus-visible': {
      outline: 'none',
    },

    '&:hover': {
      background: '$primaryColor800',
      cursor: 'pointer',
    },
  },

  variants: {
    hasError: {
      true: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '$errorColor500',
        borderTop: 'none',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',

        '&[selected-value="true"]': {
          borderColor: '$errorColor500',
        },

        '.SelectItem': {
          fontFamily: '$default',
          fontSize: '$sm',
          lineHeight: '$md',

          color: '$neutralColor700',

          padding: '$3 $2',
          position: 'relative',
          userSelect: 'none',

          transition: 'all 0.1s',

          '&:focus-visible': {
            outline: 'none',
          },

          '&:hover': {
            background: '$errorColor200',
            cursor: 'pointer',
          },
        },
      },
    },
    disabled: {
      true: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '$neutralColor500',
        borderTop: 'none',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',

        '&[selected-value="true"]': {
          borderColor: '$neutralColor500',
        },
      },
    },
  },
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  minWidth: '100%',
})

export const Label = styled('label', {
  position: 'absolute',
  margin: '0 auto',
  left: '9px',
  top: '8px',

  background:
    'linear-gradient(to bottom, $neutralColor100 50%, $neutralColorWhite 50%)',

  pointerEvents: 'none',
  transformOrigin: ' 0 0',
  transition: 'all 0.2s ease-in-out',

  '&[selected-value="true"]': {
    color: '$primaryColor300',

    transform: 'scale(0.75) translateY(-1.4rem) translateX(-0.125rem)',
    padding: '0 2px',
  },

  fontSize: '$md',
  lineHeight: '$lg',
  color: '$neutralColor700',
  fontFamily: '$default',
  fontWeight: '$regular',

  variants: {
    hasError: {
      true: {
        '&[selected-value="true"]': {
          fontSize: '$xxs',
          lineHeight: '$xs',
          color: '$errorColor500',

          transform: 'translateY(-0.75rem) translateX(-0.125rem)',
          padding: '0 2px',
        },
      },
    },
    disabled: {
      true: {
        color: '$neutralColor500',

        '&[selected-value="true"]': {
          fontSize: '$xxs',
          lineHeight: '$xs',
          color: '$neutralColor500',

          transform: 'translateY(-0.75rem) translateX(-0.125rem)',
          padding: '0 2px',
        },
      },
    },
  },
})

export const Message = styled('p', {
  fontSize: '$xxs',
  lineHeight: '$xs',
  color: '$neutralColor700',
  fontFamily: '$default',
  fontWeight: '$regular',
  marginTop: '$1',
  marginLeft: '$3',

  variants: {
    hasError: {
      true: {
        color: '$errorColor500',
      },
    },
    disabled: {
      true: {
        color: '$neutralColor500',
      },
    },
  },
})
