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

interface GroupItem {
  description: string
  items: Item[]
}

export interface SelectProps extends ComponentProps<typeof SelectTrigger> {
  options: GroupItem[]
  label?: string
  placeholder?: string
}

export function Select({ label, placeholder, options, ...rest }: SelectProps) {
  return (
    <SelectContainer defaultOpen>
      <SelectTrigger aria-label={label} className="Trigger" {...rest}>
        <RadixSelect.Value placeholder={placeholder} className="SelectValue" />
        <RadixSelect.Icon className="SelectIcon">
          <Icon name="chevron-down" size="sm" />
        </RadixSelect.Icon>
      </SelectTrigger>
      <RadixSelect.Portal>
        <SelectContent>
          <RadixSelect.Viewport className="SelectViewport">
            {options.map((group) => {
              return (
                <RadixSelect.Group
                  key={group.description}
                  className="SelectGroup"
                >
                  <RadixSelect.Label className="SelectLabel">
                    {group.description}
                  </RadixSelect.Label>
                  {group.items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <Icon name={item.icon} size="sm" />
                      {item.text}
                    </SelectItem>
                  ))}
                </RadixSelect.Group>
              )
            })}
          </RadixSelect.Viewport>
        </SelectContent>
      </RadixSelect.Portal>
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
      </RadixSelect.Item>
    )
  },
)
