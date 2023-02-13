import { styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  background: '$neutralColorWhite',
  width: '$4',
  height: '$4',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  borderRadius: '$xxs',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $neutralColor500',

  '&:hover': {
    borderColor: '$primaryColor500',
    svg: {
      visibility: 'visible',
    },
  },

  '&[data-state="checked"]': {
    backgroundColor: '$primaryColor500',
    border: '1px solid $primaryColor500',
  },

  '&[data-state="unchecked"]:hover': {
    backgroundColor: '$primaryColor100',
    svg: {
      visibility: 'visible',
    },
  },

  '&:not(:focus)&[data-state="checked"]:hover': {
    backgroundColor: '$primaryColor100',
    svg: {
      visibility: 'hidden',
    },
  },

  '&[data-state="unchecked"]:hover&:focus': {
    backgroundColor: '$neutralColorWhite',
    border: '1px solid $primaryColor500',
    svg: {
      visibility: 'visible',
    },
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
