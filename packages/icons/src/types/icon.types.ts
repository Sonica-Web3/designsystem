/* eslint-disable no-unused-vars */
export type IconNameProps =
  | 'nft'
  | 'check'
  | 'info'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'coinbase-wallet'
  | 'split'
  | 'token'
  | 'vote'
  | 'eth-logo'
  | 'polygon-logo'
  | 'x'
  | 'contracts'
  | 'dark-mode'
  | 'dashboard'
  | 'filter'
  | 'icon'
  | 'sliders'
  | 'trash'
  | 'eye'
  | 'fantom'
  | 'light-mode'
  | 'metamask-logo'
  | 'nft-collection'
  | 'nft-market-place'
  | 'plus-circle'
  | 'upload'
  | 'wallet-connect'

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
