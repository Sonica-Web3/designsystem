import { styled } from '../../styles'

export const MenuItemContainer = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$md',
  color: '$neutralColor800',
  width: '$80',
  background: '$errorColor100',
  padding: '$3',

  variants: {
    selected: {
      true: {
        '&::before': {
          content: '',
          width: '3px',
          height: '20px',
          background: '$primaryColor500',
        },
      },
    },
  },
})
