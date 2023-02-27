import type { StoryObj, Meta } from '@storybook/react'
import { Box, Select, SelectProps } from '@sonicaweb3/react'

export default {
  title: 'Form/Select',
  component: Select,

  args: {
    side: 'top',
    options: [
      {
        description: 'Selecione uma rede',
        items: [
          {
            icon: 'eth-logo',
            text: 'Ethereum',
            value: 'ethereum',
          },
          {
            icon: 'polygon-logo',
            text: 'Polygon',
            value: 'polygon',
          },
          {
            icon: 'fantom',
            text: 'Fantom',
            value: 'fantom',
          },
        ],
      },
      {
        description: 'Redes de testes',
        items: [
          {
            icon: 'eth-logo',
            text: 'Goerli',
            value: 'goerli',
          },
          {
            icon: 'polygon-logo',
            text: 'Mumbai',
            value: 'mumbai',
          },
          {
            icon: 'fantom',
            text: 'Fantom testnet',
            value: 'fantom-test',
          },
        ],
      },
    ],
    placeholder: 'Select',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            padding: '16px',
            width: '200px',
            alignItems: 'center',
            height: '800px',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}

export const Collapsed: StoryObj<SelectProps> = {
  args: {
    collapsed: 'true',
  },
}
