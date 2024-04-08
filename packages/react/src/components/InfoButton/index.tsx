import { ComponentProps } from 'react'
import Icon from '@sonicaweb3/icons'

import { InfoButtonContainer } from './styles'
import { Text } from '../Text'

export interface InfoButtonProps
  extends ComponentProps<typeof InfoButtonContainer> {
  text: string
  align?: 'left' | 'right' | 'top' | 'bottom'
}

export function InfoButton({ align, text, ...rest }: InfoButtonProps) {
  return (
    <InfoButtonContainer className={`${align ?? 'top'}`} {...rest}>
      <Icon name="info" size="xs" />
      <Text variant={'body-small'} className="tooltiptext">
        {text}
      </Text>
    </InfoButtonContainer>
  )
}
