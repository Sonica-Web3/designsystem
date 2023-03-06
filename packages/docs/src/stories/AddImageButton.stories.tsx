import type { StoryObj, Meta } from '@storybook/react'
import { AddImageButton, AddImageButtonProps, Box } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Add Image Button',
  component: AddImageButton,
  args: {
    title: 'Add image',
    subtitle: 'Max size 10MB',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$2',
            width: '500px',
            height: '200px',

            background: '$primaryColor50',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<AddImageButtonProps>

export const Primary: StoryObj<AddImageButtonProps> = {}
