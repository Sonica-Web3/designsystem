import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

export const LoaderContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  h4: {
    marginTop: '1rem',
    fontFamily: '$default',
    fontWeight: '$semiBold',
    fontSize: '1.125rem',
    lineHeight: '$lg',
    color: '$neutralColor900',
  },
})

const rotate = keyframes({
  '0%': {
    transform: 'rotate(360deg)',
  },
  '100%': {
    transform: 'rotate(0deg)',
  },
})

export const LoaderSpin = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '3rem',
  height: '3rem',
  'align-items': 'center',
  'justify-content': 'center',

  '._1': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '0px',
    animation: `${rotate} 1s linear infinite`,
    top: '0px',
    borderRadius: '50%',

    background:
      'conic-gradient(from 300.31deg at 30.87% 50%, #A6F600 0deg, rgba(255, 255, 255, 0) 250deg)',
  },
  '._2': {
    top: '5px',
    position: 'absolute',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    border: '0px',
    background: '$neutralColor100',
    borderRadius: '50%',
  },
  '._3': {
    display: 'none',
  },
})
