import type { StoryObj, Meta } from '@storybook/react'
import { CardOption, CardOptionProps } from '@sonicaweb3/react'
import Icon from '@sonicaweb3/icons'
export default {
  title: 'Surfaces/Card Option',
  component: CardOption,
  args: {
    text: 'Token',
    icon: <Icon name="nft" size="lg" color="neutralColor800" />,
  },
} as Meta<CardOptionProps>

export const Primary: StoryObj<CardOptionProps> = {
  args: {
    selected: false,
    isBranding: false,
  },
}

export const Selected: StoryObj<CardOptionProps> = {
  args: {
    selected: true,
    isBranding: true,
  },
}

export const Disabled: StoryObj<CardOptionProps> = {
  args: {
    disabled: true,
    selected: false,
    isBranding: false,
  },
}
