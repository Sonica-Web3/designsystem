import { styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  background: '$neutralColorWhite',
  width: '16px',
  height: '16px',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $neutralColor500',

  '.material-symbols-rounded': {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'transparent',
  },

  '&:hover': {
    borderColor: '$primaryColor500',
    '.material-symbols-rounded': {
      color: '$primaryColor500',
    },
  },

  '&[data-state="checked"]': {
    backgroundColor: '$primaryColor500',
    border: '1px solid $primaryColor500',
    '.material-symbols-rounded': {
      color: '$primaryColor100',
    },
  },

  '&[data-state="unchecked"]:hover': {
    backgroundColor: '$primaryColor700',
    border: '1px solid $primaryColor500',
    '.material-symbols-rounded': {
      color: '$primaryColor500',
    },
  },

  '&:not(:focus)&[data-state="checked"]:hover': {
    backgroundColor: '$primaryColor600',
    border: '1px solid $primaryColor600',
    '.material-symbols-rounded': {
      color: '$primaryColor100',
    },
  },

  '&[data-state="unchecked"]:hover&:focus': {
    backgroundColor: '$neutralColorWhite',
    border: '1px solid $neutralColor900',
  },

  '&:disabled': {
    cursor: 'not-allowed',

    '&:hover': {
      background: '$neutralColorWhite',
      border: '1px solid $neutralColor500',
    },
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  background: 'inherit',
})
