import type { StoryObj, Meta } from '@storybook/react'
import { FilterButton, FilterButtonProps } from '@sonica/react'

export default {
  title: 'Buttons/Filter Button',
  component: FilterButton,
  args: {
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
} as Meta<FilterButtonProps>

export const Primary: StoryObj<FilterButtonProps> = {}
