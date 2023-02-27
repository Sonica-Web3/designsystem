import type { StoryObj, Meta } from '@storybook/react'
import { Box, FilterButton, FilterButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Filter Button',
  component: FilterButton,

  args: {
    side: 'right',
    buttonTitle: 'Filters',
    modalTitle: 'Title',
    options: [
      {
        key: 1,
        name: 'NTF Collection',
        checked: false,
      },
      {
        key: 2,
        name: 'NTF Collection',
        checked: false,
      },
      {
        key: 3,
        name: 'NTF Collection',
        checked: false,
      },
      {
        key: 4,
        name: 'NTF Collection',
        checked: false,
      },
    ],
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
            justifyContent: 'center',
            height: '500px',
            background: '$errorColor200',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<FilterButtonProps>

export const Primary: StoryObj<FilterButtonProps> = {}
