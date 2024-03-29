import { styled } from '../../styles'
import IconReact from '@sonicaweb3/icons'

export const PillContainer = styled('span', {
  borderRadius: '1px',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  padding: '0.125rem',

  background: '#E7D6FC',

  color: '$neutralColor900',
  fontFamily: '$default',

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    svg: {
      path: {
        stroke: '$primaryColor100',
      },
    },
  },

  variants: {
    small: {
      true: {
        fontSize: '0.5rem',
        lineHeight: '0.5rem',
        textTransform: 'uppercase',
      },
      false: {
        fontSize: '$sm',
        lineHeight: '$md',
      },
    },
  },
})

export const Button = styled('button', {
  all: 'unset',
  width: '$6',
  height: '$6',
})

export const Icon = styled(IconReact, {})
