import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@sonicaweb3/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,

  args: {
    name: 'Royalties wallet',
    placeholder: 'Royalties wallet',
    message: 'You can use a split contract to distribute better the royalties',
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
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const HasError: StoryObj<TextInputProps> = {
  args: {
    hasError: true,
    value: '0x0000000',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
