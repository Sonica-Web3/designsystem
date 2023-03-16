import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInputInline, TextInputInlineProps } from '@sonicaweb3/react'

export default {
  title: 'Form/TextInputInline',
  component: TextInputInline,

  args: {
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

export const Primary: StoryObj<TextInputInlineProps> = {}

export const HasError: StoryObj<TextInputInlineProps> = {
  args: {
    hasError: true,
    value: '0x0000000',
  },
}

export const Disabled: StoryObj<TextInputInlineProps> = {
  args: {
    disabled: true,
  },
}
