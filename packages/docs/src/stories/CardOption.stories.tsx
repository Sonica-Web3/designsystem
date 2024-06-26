import Icon from '@sonicaweb3/icons'
import { Box, CardOption, CardOptionProps } from '@sonicaweb3/react'
import type { Meta, StoryObj } from '@storybook/react'
export default {
  title: 'Surfaces/Card Option',
  component: CardOption,
  args: {
    text: 'Token',
    icon: <Icon name="nft" size="lg" color="neutralColor800" />,
    tooltip: 'This is a tooltip',
    align: 'bottom',
    isBranding: false,
  },
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right', 'top', 'bottom'],
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '500px',
          height: '250px',
          background: '$secondaryColor100',
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta<CardOptionProps>

export const Primary: StoryObj<CardOptionProps> = {
  args: {
    selected: false,
    pillText: '',
    disabled: false,
  },
}

export const Pill: StoryObj<CardOptionProps> = {
  args: {
    pillText: 'soon',
  },
}

export const Selected: StoryObj<CardOptionProps> = {
  args: {
    selected: true,
    pillText: '',
  },
}

export const Disabled: StoryObj<CardOptionProps> = {
  args: {
    disabled: true,
    pillText: '',
  },
}
