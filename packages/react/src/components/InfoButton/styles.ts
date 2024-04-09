import { styled } from '../../styles'

export const InfoButtonContainer = styled('button', {
  all: 'unset',

  background: '$neutralColorWhite',
  borderRadius: '8px',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '$6',
  height: '$6',

  transition: 'all 0.1s',

  '.tooltiptext': {
    cursor: 'default',

    visibility: 'hidden',
    width: '200px',
    backgroundColor: 'rgb(0, 0, 0, 0.7)',
    color: '$neutralColorWhite',
    borderRadius: '6px',
    textAlign: 'center',
    padding: '5px 10px',
    position: 'absolute',
    zIndex: '1',
    margin: '0',
    whiteSpace: 'pre-wrap',

    '&::after': {
      content: '',
      position: 'absolute',
      top: '100%',
      left: '50%',
      marginLeft: '-5px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: 'rgb(0, 0, 0, 0.7) transparent transparent transparent',
    },
  },

  '&.bottom': {
    '.tooltiptext': {
      top: '150%',
      '&::after': {
        top: 'auto',
        bottom: '100%',
        borderColor: 'transparent transparent rgb(0, 0, 0, 0.7) transparent',
      },
    },
  },

  '&.top': {
    '.tooltiptext': {
      bottom: '150%',
      '&::after': {
        top: '100%',
        bottom: 'auto',
        borderColor: 'rgb(0, 0, 0, 0.7) transparent transparent transparent',
      },
    },
  },

  '&.left': {
    '.tooltiptext': {
      right: '150%',
      '&::after': {
        right: '-4.7%',
        top: 'auto',
        left: 'auto',
        bottom: 'calc(50% - 5px)',
        borderColor: 'transparent transparent transparent rgb(0, 0, 0, 0.7)',
      },
    },
  },

  '&.right': {
    '.tooltiptext': {
      left: '150%',
      '&::after': {
        right: 'auto',
        top: 'auto',
        left: '-2.5%',
        bottom: 'calc(50% - 5px)',
        borderColor: 'transparent rgb(0, 0, 0, 0.7) transparent transparent',
      },
    },
  },

  '&:hover': {
    '.tooltiptext': {
      visibility: 'visible',
    },
  },

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
        stroke: '$primaryColor100',
      },
    },
  },
})
