import { ComponentProps } from 'react'
import { Container, Input, Message, Wrapper } from './styles'

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
        <Wrapper>
          <Input type="text" {...rest} hasError={hasError} />
        </Wrapper>
        {message && <Message hasError={hasError}>{message}</Message>}
      </Container>
    </>
  )
}
