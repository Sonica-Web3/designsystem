import { ComponentProps } from 'react'
import { Container, Input, Message } from './styles'

export interface TextInputInlineProps extends ComponentProps<typeof Input> {
  message?: string
  hasError?: boolean
  disabled?: boolean
}

export function TextInputInline({
  message,
  hasError,
  disabled,
  ...rest
}: TextInputInlineProps) {
  return (
    <>
      <Container disabled={disabled}>
        <Input {...rest} type="text" hasError={hasError} />
        {message && <Message hasError={hasError}>{message}</Message>}
      </Container>
    </>
  )
}
