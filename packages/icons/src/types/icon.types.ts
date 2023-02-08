/* eslint-disable no-unused-vars */
export type IconName = 'nft' | 'check' | 'info'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg'

export interface IconProps {
  name: IconName
  title?: string
  id?: string
  width?: number
  size?: IconSize
}

export type IconSizeOptions = { [key in IconSize]: number }
export type IconTypeOptions = { [key in IconName]: any }
