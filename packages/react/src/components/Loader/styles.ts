import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

export const LoaderContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  h4: {
    fontFamily: '$default',
    fontWeight: '$semiBold',
    fontSize: '1.125rem',
    lineHeight: '$lg',
    color: '$primaryColor500',
  },
})

const spinner = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: ' rotate(360deg)' },
})

export const LoaderSpin = styled('span', {
  //   animation: `1.5s linear infinite ${spinner}`,
  //   display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '41px',
  height: '41px',
  borderRadius: '99999px',

  overflow: 'hidden',
  backgroundColor: '#9747FF',

  animation: `${spinner} 1s infinite linear`,

  '.spinner-circle-inner, .spinner-circle-gradient': {
    position: 'absolute',
    width: '46px',
    height: '46px',
    transform: 'translate(-50%, -50%)',
  },

  '.spinner-circle-inner': {
    top: '50%',
    left: '50%',
    backgroundColor: '#FFF',
    borderRadius: '100%',
  },

  '.spinner-circle-gradient': {
    top: '-24px',
    left: '6px',
    backgroundColor: '#9747FF',
    backgroundImage:
      '-moz-linear-gradient(0deg,$primaryColor 0%,$secondaryColor 60%)',
    transform: 'rotate(-45deg)',
  },
})
