import { styled } from '../../styles'

export const AddImageButtonContainer = styled('label', {
  all: 'unset',
  position: 'relative',
  background: '$neutralColorWhite',
  borderRadius: '$md',

  border: '1px solid $neutralColor500',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '230px',
  height: '100%',

  h4: {
    marginTop: '$3',
    color: '$neutralColor700',
  },

  p: {
    color: '$neutralColor500',
    position: 'absolute',
    bottom: '$2',
  },

  transition: 'all 0.1s',

  svg: {
    path: {
      stroke: '$neutralColor700',
    },
  },

  '&:hover': {
    cursor: 'pointer',
  },
})
