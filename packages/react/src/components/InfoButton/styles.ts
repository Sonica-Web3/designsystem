import { styled } from '../../styles'

export const InfoButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',
  borderRadius: '$xs',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$6',
  height: '$6',

  transition: 'all 0.1s',

  svg: {
    transition: 'all 0.1s',
    path: {
      stroke: '$neutralColor600',
    },
  },

  '&:not(:active)&:hover': {
    cursor: 'pointer',
    background: '$primaryColor500',
    svg: {
      path: {
        stroke: '$neutralColor700',
      },
    },
  },

  '&:active': {
    cursor: 'pointer',
    background: '$primaryColor500',
    svg: {
      path: {
        stroke: '$neutralColorWhite',
      },
    },
  },
})
