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
      <Container>
        <Input disabled={disabled} {...rest} type="text" hasError={hasError} />
        {message && (
          <Message disabled={disabled} hasError={hasError}>
            {message}
          </Message>
        )}
      </Container>
    </>
  )
}
