import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

export const LoadingContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  variants: {
    variant: {
      primary: {
        'div > ._1': {
          background:
            'conic-gradient(from 250deg at 30% 70%, $primaryColor500 100deg, rgba(255, 255, 255, 0) 230deg)',
        },
      },

      error: {
        'div > ._1': {
          background:
            'conic-gradient(from 250deg at 30% 70%, $errorColor500 100deg, rgba(255, 255, 255, 0) 230deg)',
        },
      },
      neutral: {
        'div > ._1': {
          background:
            'conic-gradient(from 250deg at 30% 70%, $neutralColorWhite 100deg, rgba(255, 255, 255, 0) 230deg)',
        },
        'div > ._2': {
          background: '$primaryColor500',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
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

export const LoadingSpin = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '2rem',
  height: '2rem',
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
  },
  '._2': {
    top: '3px',
    position: 'absolute',
    width: 'calc(100% - 6px)',
    height: 'calc(100% - 6px)',
    border: '0px',
    background: '#fff',
    borderRadius: '50%',
  },
  '._3': {
    display: 'none',
  },
})
