import { ComponentProps } from 'react'
import { ActionButtonContainer } from './styles'

export interface ActionButtonProps
  extends ComponentProps<typeof ActionButtonContainer> {
  iconName: string
}

export function ActionButton({ iconName, ...rest }: ActionButtonProps) {
  return (
    <ActionButtonContainer {...rest}>
      <i className="material-symbols-rounded notranslate">{iconName}</i>
    </ActionButtonContainer>
  )
}
