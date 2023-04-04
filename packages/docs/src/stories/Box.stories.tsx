import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@sonicaweb3/react'
import Icon from '@sonicaweb3/icons'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: '$2',
          background: '$neutralColor400',
          padding: '$2',
          borderRadius: '$xs',
        }}
      >
        <Icon name="log-out" color="successColor500" />
        Testando o elemento Box
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
