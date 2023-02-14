import { ComponentProps } from 'react'
import Icon from '@sonicaweb3/icons'

import { AddImageButtonContainer } from './styles'
import { Text } from '../Text'

export interface AddImageButtonProps
  extends ComponentProps<typeof AddImageButtonContainer> {
  title: string
  subtitle: string
}

export function AddImageButton({
  title,
  subtitle,
  ...rest
}: AddImageButtonProps) {
  return (
    <AddImageButtonContainer {...rest}>
      <Icon name="upload" size="md" />

      <Text as={'h4'} type="highlight">
        {title}
      </Text>
      <Text type="caption">{subtitle}</Text>
    </AddImageButtonContainer>
  )
}
