import { ComponentProps } from 'react'
import { Container, Input, Label, Message, Wrapper } from './styles'
export interface TextInputProps extends ComponentProps<typeof Input> {
  name: string
  message?: string
  hasError?: boolean
  disabled?: boolean
}

export function TextInput({
  name,
  hasError,
  message,
  disabled,
  ...rest
}: TextInputProps) {
  return (
    <>
      <Container disabled={disabled}>
        <Wrapper>
          <Input type="text" {...rest} hasError={hasError} />
          <Label>{name}</Label>
        </Wrapper>
        {message && <Message hasError={hasError}>{message}</Message>}
      </Container>
    </>
  )
}
