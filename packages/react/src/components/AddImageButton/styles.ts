import { styled } from '../../styles'

export const AddImageButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',
  borderRadius: '$md',

  border: '1px solid $neutralColor500',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '230px',

  h4: {
    marginTop: '$3',
    color: '$neutralColor700',
  },

  p: {
    margin: '$3 0px $2',
    color: '$neutralColor500',
  },

  transition: 'all 0.1s',

  svg: {
    marginTop: 'calc($6 - 0.125rem)',
    path: {
      stroke: '$neutralColor600',
    },
  },

  '&:hover': {
    cursor: 'pointer',
  },
})
