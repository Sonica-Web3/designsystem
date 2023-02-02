import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@sonica/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Conteúdo no elemento Box.</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
