import React, { ComponentProps } from 'react'
import { SelectContainer, SelectContent, SelectTrigger } from './styles'
import Icon, { IconNameProps } from '@sonicaweb3/icons'
import * as RadixSelect from '@radix-ui/react-select'
import classnames from 'classnames'

interface Item {
  value: string
  text: string
  icon: IconNameProps
}

export interface SelectProps extends ComponentProps<typeof SelectContainer> {
  options: Item[]
  label?: string
  placeholder?: string
}

export function Select({ label, placeholder, options, ...rest }: SelectProps) {
  return (
    <SelectContainer {...rest}>
      <SelectTrigger aria-label={label} className="Trigger" {...rest}>
        <RadixSelect.Value placeholder={placeholder} className="SelectValue" />
        <RadixSelect.Icon className="SelectIcon">
          <Icon name="chevron-down" size="sm" />
        </RadixSelect.Icon>
      </SelectTrigger>
      <SelectContent>
        <RadixSelect.ScrollUpButton className="SelectScrollButton">
          <Icon name="chevron-up" />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="SelectViewport">
          {options.map((option) => {
            return (
              <SelectItem key={option.value} value={option.value}>
                <Icon name={option.icon} size="sm" />
                {option.text}
              </SelectItem>
            )
          })}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="SelectScrollButton">
          <Icon name="chevron-down" size="sm" />
        </RadixSelect.ScrollDownButton>
      </SelectContent>
    </SelectContainer>
  )
}

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef<
  HTMLDivElement,
  RadixSelect.SelectItemProps
>(
  (
    { children, className, ...props }: RadixSelect.SelectItemProps,
    forwardedRef,
  ) => {
    return (
      <RadixSelect.Item
        className={classnames('SelectItem', className)}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        <RadixSelect.ItemIndicator className="SelectItemIndicator">
          <Icon name="check" size="sm" />
        </RadixSelect.ItemIndicator>
      </RadixSelect.Item>
    )
  },
)
