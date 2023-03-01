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
