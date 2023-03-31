import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Root, {
  unset: 'all',
  position: 'relative',
})

export const SelectSeparator = styled(Select.Separator, {
  borderTop: '1px solid $neutralColor200',

  '&[selected-value="enabled"]': {
    borderColor: '$primaryColor100',
  },

  '&[selected-value="disabled"]': {
    borderColor: '$primaryColor100',
  },

  variants: {
    hasError: {
      true: {
        borderTop: '1px solid $errorColor100',

        '&[selected-value="enabled"]': {
          borderColor: '$errorColor100',
        },

        '&[selected-value="disabled"]': {
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
  padding: '$4 $2',
  lineHeight: '$md',
  fontSize: '$sm',

  borderRadius: '$md',
  border: '1px solid $neutralColor500',

  background: '$neutralColorWhite',

  fontFamily: '$default',

  height: '$8',
  width: 'inherit',

  color: '$neutralColor700',

  '&[selected-value]': {
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
    hasError: {
      true: {
        border: '1px solid $errorColor500',

        '&[selected-value]': {
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
  borderRadius: '$default',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$neutralColor500',
  borderTop: 'none',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: '$md',
  borderBottomRightRadius: '$md',
  minWidth: '100%',

  '&[selected-value]': {
    borderColor: '$primaryColor500',
  },

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

    '&:focus-visible': {
      outline: 'none',
    },

    '&:hover': {
      background: '$primaryColor50',
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
        borderBottomLeftRadius: '$md',
        borderBottomRightRadius: '$md',

        '&[selected-value]': {
          borderColor: '$errorColor500',
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
        borderBottomLeftRadius: '$md',
        borderBottomRightRadius: '$md',

        '&[selected-value]': {
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
  top: '5px',

  background: '$neutralColorWhite',

  pointerEvents: 'none',
  transformOrigin: ' 0 0',
  transition: 'all 0.2s ease-in-out',

  '&[selected-value]': {
    fontSize: '$xxs',
    lineHeight: '$xs',
    color: '$primaryColor500',

    transform: 'translateY(-0.70rem) translateX(-0.125rem)',
    padding: '0 2px',
  },

  fontSize: '$sm',
  lineHeight: '$lg',
  color: '$neutralColor800',
  fontFamily: '$default',
  fontWeight: '$regular',

  variants: {
    hasError: {
      true: {
        '&[selected-value]': {
          fontSize: '$xxs',
          lineHeight: '$xs',
          color: '$errorColor500',

          transform: 'translateY(-0.70rem) translateX(-0.125rem)',
          padding: '0 2px',
        },
      },
    },
    disabled: {
      true: {
        color: '$neutralColor500',

        '&[selected-value]': {
          fontSize: '$xxs',
          lineHeight: '$xs',
          color: '$neutralColor500',

          transform: 'translateY(-0.70rem) translateX(-0.125rem)',
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
