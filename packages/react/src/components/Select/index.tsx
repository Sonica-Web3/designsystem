import React, { ComponentProps, useCallback } from 'react'
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
  side: 'bottom' | 'top'
}

export function Select({
  label,
  placeholder,
  side,
  options,
  ...rest
}: SelectProps) {
  const handleOpenChange = useCallback(() => {
    const box = document.querySelector<HTMLButtonElement>('.Trigger')
    const body = document.querySelector<HTMLDivElement>('.SelectViewport')

    if (body && box) {
      const BORDERS_WIDTH = 2
      const parsedWidth = String(box.offsetWidth - BORDERS_WIDTH)
      body.style.width = `${parsedWidth}px`
    }
  }, [])

  return (
    <SelectContainer onOpenChange={handleOpenChange}>
      <SelectTrigger
        aria-label={label}
        side={side}
        className="Trigger"
        {...rest}
      >
        <RadixSelect.Value placeholder={placeholder} className="SelectValue" />
        <RadixSelect.Icon className="SelectIcon">
          <Icon name="chevron-down" size="sm" />
        </RadixSelect.Icon>
      </SelectTrigger>
      <RadixSelect.Portal>
        <SelectContent
          position="popper"
          avoidCollisions={false}
          sideEffect={side}
          side={side}
        >
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
