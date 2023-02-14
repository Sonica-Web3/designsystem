import type { StoryObj, Meta } from '@storybook/react'
import { Text as TextComponent, TextProps } from '@sonicaweb3/react'

export default {
  title: 'Typography/Text',
  component: TextComponent,
  args: {
    children:
      'This is a text uses parameter type="text" in default configuration.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    type: 'tinyLinkText',
    color: 'neutralColor800',
    children: 'This is a tiny link text with a tag',
    as: 'a',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the text will always be a `p`, but we can change that with the `as` property.',
      },
    },
  },
}

export const CTAText: StoryObj<TextProps> = {
  args: {
    type: 'CTAText',
    children: 'This is a CTA text',
  },
}

export const OverText: StoryObj<TextProps> = {
  args: {
    type: 'overText',
    children: 'This is a over text',
  },
}

export const Highlight: StoryObj<TextProps> = {
  args: {
    type: 'highlight',
    children: 'This is a text highlight',
  },
}

export const TableText: StoryObj<TextProps> = {
  args: {
    type: 'tableText',
    children: 'This is a table text',
  },
}

export const TableTextUppercase: StoryObj<TextProps> = {
  args: {
    type: 'tableTextUppercase',
    children: 'This is a table text uppercase',
  },
}

export const TinyLinkText: StoryObj<TextProps> = {
  args: {
    type: 'tinyLinkText',
    children: 'This is a tiny link text',
  },
}
