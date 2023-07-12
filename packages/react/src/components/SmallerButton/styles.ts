import { styled } from '../../styles'

export const SmallerButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',
  border: '1px solid $neutralColor400',
  borderRadius: '4px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$4',
  height: '$4',

  transition: 'all 0.1s',

  '.material-symbols-rounded': {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '$neutralColor900',
  },

  '&:not(:focus)&:hover': {
    cursor: 'pointer',
    background: '$primaryColor900',
    borderColor: '$primaryColor500',

    '.material-symbols-rounded': {
      color: '$neutralColor700',
    },
  },

  '&:focus': {
    cursor: 'pointer',
    background: '$primaryColor700',
    borderColor: '$primaryColor500',
    svg: {
      path: {
        stroke: '$neutralColorWhite',
      },
    },
  },
})
