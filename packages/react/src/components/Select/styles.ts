import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Root, {
  unset: 'all',
})

export const SelectTrigger = styled(Select.Trigger, {
  unset: 'all',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$md',
  padding: '$2',
  lineHeight: '$md',
  fontSize: '$sm',
  border: '1px solid $neutralColor500',

  height: '$8',
  width: '$64',
  gap: '$1',
  backgroundColor: '$neutralColorWhite',
  color: '$neutralColor700',
  boxShadow: '0 2px 10px $neutralColor100',

  span: {
    display: 'flex',
    alignItems: 'center',

    svg: {
      margin: '0 $2',
    },
  },

  '&:hover': {
    background: '$neutralColor100',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $neutralColor500',
  },

  '&:focus-visible': {
    outline: '1px solid $primaryColor50',
  },

  '&:[data-placeholder]': {
    color: '$neutralColor700',
  },

  '.SelectIcon svg': {
    margin: '$0',
    path: {
      stroke: '$neutralColor500',
    },
  },

  variants: {
    collapsed: {
      true: {
        margin: '$0',
        justifyContent: 'center',
        textIndent: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '$8',

        'span:not(.SelectIcon)': {
          position: 'absolute',
          left: '0',
          display: 'flex',
          alignItems: 'center',
        },
        '.SelectIcon': {
          display: 'none',
        },
      },
    },
  },
})

export const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '$neutralColorWhite',
  borderRadius: '$default',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',

  '.SelectViewport': {
    padding: '$2',
  },

  '.SelectItem': {
    fontFamily: '$default',
    fontSize: '$md',

    color: '$neutralColor700',
    borderRadius: '$xs',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    height: '$8',
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',

    span: {
      display: 'flex',
      alignItem: 'center',
      svg: {
        margin: '0 $2',
      },
    },

    '&:focus-visible': {
      outline: '1px solid $primaryColor50',
    },
  },

  '.SelectItemIndicator': {
    position: 'absolute',
    left: 0,
    width: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      path: {
        stroke: '$primaryColor500',
      },
    },
  },

  '.SelectScrollButton': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25px',
    backgroundColor: 'white',
    color: '$neutralColor500',
    cursor: 'default',
  },
})
