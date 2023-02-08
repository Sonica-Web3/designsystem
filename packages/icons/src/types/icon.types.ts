/* eslint-disable no-unused-vars */
export type IconNameProps = 'nft' | 'check' | 'info'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg'

export interface IconProps {
  name: IconNameProps
  title?: string
  id?: string
  width?: number
  size?: IconSize
}

export type IconSizeOptions = { [key in IconSize]: number }
export type IconTypeOptions = { [key in IconNameProps]: any }
