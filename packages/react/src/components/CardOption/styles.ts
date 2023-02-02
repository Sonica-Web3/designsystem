import { styled } from '../../styles'

export const Container = styled('div', {
  width: '10rem',
  height: '12.5rem',
  backgroundColor: '$neutralColor500',
  borderRadius: '$default',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  padding: '$2',

  svg: {
    color: '$errorColor100',
  },
})
export const Tooltip = styled('span', {})
