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
            'conic-gradient(from 117deg at 50% 30%, rgba(165, 245, 0, 0), #233401 245deg)',
        },
      },

      error: {
        'div > ._1': {
          background:
            'conic-gradient(from 117deg at 50% 30%, rgba(151, 14, 13, 0.00), #970E0D 245deg)',
        },
      },
      neutral: {
        'div > ._1': {
          background:
            'conic-gradient(from 117deg at 50% 30%, rgba(165, 245, 0, 0), #233401 245deg)',
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
  '100%': {
    transform: 'rotate(360deg)',
  },
  '0%': {
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
