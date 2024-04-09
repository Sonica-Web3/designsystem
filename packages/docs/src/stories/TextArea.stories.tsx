import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps } from '@sonicaweb3/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,

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
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const HasError: StoryObj<TextAreaProps> = {
  args: {
    hasError: true,
    value: '0x0000000',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
