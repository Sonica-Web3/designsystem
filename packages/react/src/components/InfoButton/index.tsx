import { ComponentProps } from 'react'
import Icon from '@sonicaweb3/icons'

import { InfoButtonContainer } from './styles'

export interface InfoButtonProps
  extends ComponentProps<typeof InfoButtonContainer> {}

export function InfoButton({ ...rest }: InfoButtonProps) {
  return (
    <InfoButtonContainer {...rest}>
      <Icon name="info" size="xs" />
    </InfoButtonContainer>
  )
}
