import { ComponentProps } from 'react'
import {
  Container,
  TextArea as TextAreaComponent,
  Label,
  Message,
  Wrapper,
} from './styles'
export interface TextAreaProps
  extends ComponentProps<typeof TextAreaComponent> {
  name: string
  message?: string
  hasError?: boolean
  disabled?: boolean
}

export function TextArea({
  name,
  hasError,
  message,
  disabled,
  ...rest
}: TextAreaProps) {
  return (
    <>
      <Container disabled={disabled}>
        <Wrapper>
          <TextAreaComponent {...rest} hasError={hasError} />
          <Label>{name}</Label>
        </Wrapper>
        {message && <Message hasError={hasError}>{message}</Message>}
      </Container>
    </>
  )
}
