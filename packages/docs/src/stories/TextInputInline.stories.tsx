import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInputInline, TextInputInlineProps } from '@sonicaweb3/react'

export default {
  title: 'Form/TextInputInline',
  component: TextInputInline,

  args: {
    name: 'Admin wallet',
    placeholder: 'Add admin wallet',
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '500px',
          height: '250px',
          background: '$neutralColor100',
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta<TextInputInlineProps>

export const Primary: StoryObj<TextInputInlineProps> = {
  args: {
    hasError: false,
    message: 'TextInputInline message',
  },
}

export const HasError: StoryObj<TextInputInlineProps> = {
  args: {
    hasError: true,
    message: 'Invalid address',
  },
}

export const Disabled: StoryObj<TextInputInlineProps> = {
  args: {
    hasError: false,
    message: '',
    disabled: true,
  },
}
