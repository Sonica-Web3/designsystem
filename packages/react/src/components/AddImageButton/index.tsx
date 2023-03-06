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
      <Icon name="upload" size="md" color="neutralColor700" />
      <Text as={'h4'} variant="highlight">
        {title}
      </Text>
      <Text variant="caption">{subtitle}</Text>
    </AddImageButtonContainer>
  )
}
