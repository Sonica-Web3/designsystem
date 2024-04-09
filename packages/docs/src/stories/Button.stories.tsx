import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, ButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/CTA Button',
  component: Button,
  args: {
    children: 'CTA Button',
    onClick: () => {
      console.log('clicked')
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '500px',
            height: '200px',
            background: '$secondaryColor100',
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'row',
              gap: '$2',
              background: '$neutralColorWhite',
            }}
          >
            <Story />
          </Box>
        </Box>
      )
    },
  ],
} as Meta<ButtonProps>

export const Solid: StoryObj<ButtonProps> = {
  args: {
    disabled: false,
    loading: false,
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
    disabled: false,
    loading: false,
  },
}

export const Error: StoryObj<ButtonProps> = {
  args: {
    variant: 'error',
    disabled: false,
    loading: false,
  },
}
