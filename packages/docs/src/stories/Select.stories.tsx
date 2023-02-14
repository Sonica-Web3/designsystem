import type { StoryObj, Meta } from '@storybook/react'
import { Select, SelectProps } from '@sonicaweb3/react'

export default {
  title: 'Form/Select',
  component: Select,

  args: {
    options: [
      {
        icon: 'eth-logo',
        text: 'Ethereum',
        value: 'eth',
      },
      {
        icon: 'polygon-logo',
        text: 'Polygon',
        value: 'pol',
      },
    ],
    placeholder: 'Select',
  },
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}

// export const Selected: StoryObj<SelectProps> = {
//   args: {
//     selected: 'true',
//   },
// }

export const Collapsed: StoryObj<SelectProps> = {
  args: {
    collapsed: 'true',
    // value: 'eth-logo',
  },
}

// export const CollapsedSelected: StoryObj<SelectProps> = {
//   args: {
//     collapsed: 'true',
//     selected: 'true',
//   },
// }
