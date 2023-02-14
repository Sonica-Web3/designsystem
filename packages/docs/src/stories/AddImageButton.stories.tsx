import type { StoryObj, Meta } from '@storybook/react'
import { AddImageButton, AddImageButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Add Image Button',
  component: AddImageButton,
  args: {
    title: 'Add image',
    subtitle: 'Max size 10MB',
  },
} as Meta<AddImageButtonProps>

export const Primary: StoryObj<AddImageButtonProps> = {}
