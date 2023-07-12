import { styled } from '../../styles'

export const AddImageButtonContainer = styled('label', {
  all: 'unset',
  position: 'relative',
  background: '$neutralColorWhite',
  borderRadius: '20px',

  border: '1px solid $neutralColor400',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: '230px',
  height: '100%',

  h4: {
    marginTop: '$3',
    color: '$neutralColor900',
  },

  p: {
    color: '$neutralColor500',
    position: 'absolute',
    bottom: '$2',
  },

  transition: 'all 0.1s',

  svg: {
    path: {
      stroke: '$neutralColor900',
    },
  },

  '&:hover': {
    cursor: 'pointer',
    border: '1px solid $primaryColor500',

    h4: {
      color: '$primaryColor400',
    },
    svg: {
      path: {
        stroke: '$primaryColor400',
      },
    },
  },
})
