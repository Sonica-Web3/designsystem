import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Loading as LoadingComponent,
  LoadingProps,
} from '@sonicaweb3/react'

export default {
  title: 'Complement/Loading',
  component: LoadingComponent,
} as Meta<LoadingProps>

export const Primary: StoryObj<LoadingProps> = {
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            padding: '16px',
            width: '200px',
            alignItems: 'center',
            height: '200px',
            background: '$neutralColorWhite',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
}

export const Neutral: StoryObj<LoadingProps> = {
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            padding: '16px',
            width: '200px',
            alignItems: 'center',
            height: '200px',
            background: '$primaryColor500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    variant: 'neutral',
  },
}

export const Error: StoryObj<LoadingProps> = {
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            padding: '16px',
            width: '200px',
            alignItems: 'center',
            height: '200px',
            background: '$neutralColorWhite',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    variant: 'error',
  },
}
