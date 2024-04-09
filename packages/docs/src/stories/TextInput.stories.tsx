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
