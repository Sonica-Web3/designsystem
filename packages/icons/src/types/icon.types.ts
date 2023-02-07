/* eslint-disable no-unused-vars */
export type IconName = 'nft' | 'check'

export type IconSize = 'xs' | 'sm' | 'md'

export interface IconProps {
  name: IconName
  title?: string
  id?: string
  width?: number
  size?: IconSize
}

export type IconSizeOptions = { [key in IconSize]: number }
export type IconTypeOptions = { [key in IconName]: any }
