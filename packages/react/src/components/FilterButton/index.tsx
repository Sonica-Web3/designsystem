import { ComponentProps, useCallback, useState } from 'react'
import Icon from '@sonicaweb3/icons'

import { FilterButtonContainer, FilterWrapper, Modal } from './styles'
import { Checkbox } from '../Checkbox'
import { Text } from '../Text'

interface OptionsProps {
  key: string | number
  name: string
  checked: boolean
}
export interface FilterButtonProps
  extends ComponentProps<typeof FilterButtonContainer> {
  buttonTitle: string
  modalTitle: string
  options: OptionsProps[]
  onOptionClick: (key: string | number) => void
  side: 'left' | 'right'
}

export function FilterButton({
  buttonTitle,
  modalTitle,
  options,
  onOptionClick,
  side = 'right',
  ...rest
}: FilterButtonProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = useCallback(
    (key: string | number) => {
      onOptionClick(key)
    },
    [onOptionClick],
  )

  const handleToggleModal = useCallback(() => {
    setModalOpen((state) => !state)
  }, [])
  return (
    <FilterWrapper>
      <FilterButtonContainer
        {...rest}
        onClick={handleToggleModal}
        selected={modalOpen}
      >
        <Icon name="filter" size="sm" />
        {buttonTitle}
      </FilterButtonContainer>
      {modalOpen && (
        <Modal side={side}>
          <header>
            <span>{modalTitle}</span>
            <button onClick={handleToggleModal}>
              <Icon name="x" size="sm" />
            </button>
          </header>
          <ul>
            {options.map((option) => {
              return (
                <li key={option.key}>
                  <button
                    className="item"
                    onClick={() => handleClick(option.key)}
                  >
                    <Checkbox checked={option.checked} />
                    <Text>{option.name}</Text>
                  </button>
                </li>
              )
            })}
          </ul>
        </Modal>
      )}
    </FilterWrapper>
  )
}
