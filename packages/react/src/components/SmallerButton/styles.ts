import { styled } from '../../styles'

export const SmallerButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',
  border: '1px solid $neutralColor400',
  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$4',
  height: '$4',

  transition: 'all 0.1s',

  svg: {
    transition: 'all 0.1s',
    path: {
      stroke: '$neutralColor600',
    },
  },

  '&:not(:focus)&:hover': {
    cursor: 'pointer',
    background: '$primaryColor500',
    borderColor: '$primaryColor500',
    svg: {
      path: {
        stroke: '$neutralColor700',
      },
    },
  },

  '&:focus': {
    cursor: 'pointer',
    background: '$primaryColor500',
    borderColor: '$primaryColor500',
    svg: {
      path: {
        stroke: '$neutralColorWhite',
      },
    },
  },
})
