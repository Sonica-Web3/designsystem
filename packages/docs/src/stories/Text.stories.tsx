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
    variant: 'tiny-link-text',
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

export const BodySmall: StoryObj<TextProps> = {
  args: {
    variant: 'body-small',
    children: 'This is a Body text',
  },
}

export const Body: StoryObj<TextProps> = {
  args: {
    variant: 'body',
    children: 'This is a Body text',
  },
}

export const CTAText: StoryObj<TextProps> = {
  args: {
    variant: 'CTA-text',
    children: 'This is a CTA text',
  },
}

export const OverText: StoryObj<TextProps> = {
  args: {
    variant: 'over-text',
    children: 'This is a over text',
  },
}

export const Highlight: StoryObj<TextProps> = {
  args: {
    variant: 'highlight',
    children: 'This is a text highlight',
  },
}

export const TableText: StoryObj<TextProps> = {
  args: {
    variant: 'table-text',
    children: 'This is a table text',
  },
}

export const TableTextUppercase: StoryObj<TextProps> = {
  args: {
    variant: 'table-text-uppercase',
    children: 'This is a table text uppercase',
  },
}

export const TinyLinkText: StoryObj<TextProps> = {
  args: {
    variant: 'tiny-link-text',
    children: 'This is a tiny link text',
  },
}
