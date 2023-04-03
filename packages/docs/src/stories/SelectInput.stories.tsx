import type { StoryObj, Meta } from '@storybook/react'
import { Box, SelectInput, SelectInputProps } from '@sonicaweb3/react'

export default {
  title: 'Form/SelectInput',
  component: SelectInput,

  args: {
    placeholder: 'Gasless',
    message:
      'A relayer can be used to make the transaction gasless for the user',
    options: ['Enabled', 'Disabled'],
    disabled: false,
    hasError: false,
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
} as Meta<SelectInputProps>

export const Primary: StoryObj<SelectInputProps> = {}
