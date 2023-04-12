import { ComponentProps } from 'react'
import Icon from '@sonicaweb3/icons'

import { AddImageButtonContainer } from './styles'
import { Text } from '../Text'
import { Loading } from '../Loading'

export interface AddImageButtonProps
  extends ComponentProps<typeof AddImageButtonContainer> {
  title: string
  subtitle: string
  isLoading?: boolean
}

export function AddImageButton({
  title,
  subtitle,
  isLoading,
  ...rest
}: AddImageButtonProps) {
  return (
    <AddImageButtonContainer {...rest}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Icon name="upload" size="md" color="neutralColor700" />
          <Text as={'h4'} variant="highlight">
            {title}
          </Text>
          <Text variant="caption">{subtitle}</Text>
        </>
      )}
    </AddImageButtonContainer>
  )
}
