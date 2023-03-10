import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@sonicaweb3/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet.',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const BigTitle: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    variant: 'big-title',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the title will always be a `h2`, but we can change that with the `as` property.',
      },
    },
  },
}

export const SmallTitle: StoryObj<HeadingProps> = {
  args: {
    variant: 'small-title',
  },
}

export const SmallerTitle: StoryObj<HeadingProps> = {
  args: {
    variant: 'smaller-title',
  },
}
