import React, { useCallback, useState } from 'react'
import {
  Container,
  Label,
  Message,
  SelectContainer,
  SelectContent,
  SelectTrigger,
  SelectSeparator,
} from './styles'
import Icon from '@sonicaweb3/icons'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'

export interface SelectInputProps {
  label: string
  placeholder?: string
  options: string[]
  message?: string
  hasError?: boolean
  disabled?: boolean
}

export function SelectInput({
  label,
  placeholder,
  options,
  message,
  hasError,
  disabled,
  ...rest
}: SelectInputProps) {
  const handleOpenChange = useCallback(() => {
    const box = document.querySelector<HTMLButtonElement>('.Trigger')
    const body = document.querySelector<HTMLDivElement>('.SelectViewport')

    if (body && box) {
      const BORDERS_WIDTH = 2

      let parsedWidth: any = getComputedStyle(box!).width.replace('px', '')
      parsedWidth = parseInt(parsedWidth) - BORDERS_WIDTH
      body.style.width = `${parsedWidth}px`
    }
  }, [])

  const [selected, setSelected] = useState<string | undefined>(undefined)

  return (
    <Container>
      <SelectContainer
        value={selected}
        onValueChange={setSelected}
        onOpenChange={handleOpenChange}
        disabled={disabled}
      >
        <SelectTrigger
          hasError={hasError}
          disabled={disabled}
          selected-value={selected}
          className="Trigger"
          {...rest}
        >
          <Select.Value aria-label={label} />
          <Select.Icon className="SelectIcon">
            <Icon name="chevron-down" size="sm" />
          </Select.Icon>
        </SelectTrigger>
        <Select.Portal>
          <SelectContent
            style={{ zIndex: 50 }}
            position="popper"
            avoidCollisions={false}
            selected-value={selected}
            hasError={hasError}
          >
            <Select.Viewport className="SelectViewport">
              <Select.Group className="SelectGroup">
                {options.map((option) => (
                  <>
                    <SelectSeparator
                      hasError={hasError}
                      selected-value={selected}
                    />
                    <SelectItem value={option} textValue={option}>
                      {option}
                    </SelectItem>
                  </>
                ))}
              </Select.Group>
            </Select.Viewport>
          </SelectContent>
        </Select.Portal>
        <Label
          selected-value={selected}
          hasError={hasError}
          disabled={disabled}
        >
          {placeholder}
        </Label>
      </SelectContainer>
      <Message hasError={hasError} disabled={disabled}>
        {message}
      </Message>
    </Container>
  )
}

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef<HTMLDivElement, Select.SelectItemProps>(
  ({ children, className, ...props }: Select.SelectItemProps, forwardedRef) => {
    return (
      <Select.Item
        className={classnames('SelectItem', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  },
)

export default SelectInput
