import { styled } from '../../styles'

export const FilterButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',
  borderRadius: '$md',

  fontFamily: '$default',
  color: '$neutralColor600',
  fontSize: '$md',
  padding: '$2',

  border: '1px solid $neutralColor300',

  gap: '$1',

  display: 'flex',
  alignItems: 'center',

  transition: 'all 0.1s',

  svg: {
    transition: 'all 0.1s',
    path: {
      stroke: '$neutralColor600',
    },
  },

  '&:hover': {
    cursor: 'pointer',
    background: '$neutralColor200',
    borderColor: '$neutralColor500',
    color: '$neutralColor900',
    svg: {
      path: {
        stroke: '$neutralColor900',
      },
    },
  },

  variants: {
    selected: {
      true: {
        cursor: 'pointer',
        background: '$neutralColor200',
        borderColor: '$neutralColor500',
        color: '$neutralColor900',
        svg: {
          path: {
            stroke: '$neutralColor900',
          },
        },
      },
    },
  },
})

export const Modal = styled('div', {
  background: '$neutralColorWhite',
  maxWidth: '200px',
  padding: '$4',
  borderRadius: '$md',
  marginTop: '$2',
  border: '1px solid $neutralColor500',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  span: {
    fontFamily: '$default',
    color: '$neutralColor600',
    fontSize: '$sm',
    lineHeight: '$md',
    fontWeight: '$regular',
  },

  'header button': {
    all: 'unset',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '$1',

    cursor: 'pointer',

    svg: {
      transition: 'all 0.1s',
      path: {
        stroke: '$neutralColor600',
      },
    },

    '&:hover': {
      path: {
        stroke: '$neutralColor800',
      },
    },
  },

  ul: {
    all: 'unset',
    display: 'inline-block',
    marginTop: '$2',
    listStyleType: 'none',
    width: '100%',
  },

  'ul li button.item': {
    all: 'unset',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: '$2',
    marginTop: '$4',
  },
  'ul li button.item p': {
    color: '$neutralColor800',
  },
})
