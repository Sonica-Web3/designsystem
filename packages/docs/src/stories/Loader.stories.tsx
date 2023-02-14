import type { StoryObj, Meta } from '@storybook/react'
import { Loader, LoaderProps } from '@sonicaweb3/react'

export default {
  title: 'Complement/Loader',
  component: Loader,
  args: {
    children: 'Waiting approve',
  },
} as Meta<LoaderProps>

export const Primary: StoryObj<LoaderProps> = {}
