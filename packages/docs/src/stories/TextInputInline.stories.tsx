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
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            padding: '16px',
            width: '500px',
            alignItems: 'center',

            height: '400px',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputInlineProps>

export const Primary: StoryObj<TextInputInlineProps> = {
  args: {
    hasError: false,
    message: '',
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
