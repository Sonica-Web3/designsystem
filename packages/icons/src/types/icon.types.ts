/* eslint-disable no-unused-vars */

import { colors } from '@sonicaweb3/tokens'

export type IconNameProps =
  | 'nft'
  | 'avalanche'
  | 'brazil-flag'
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
  | 'email-wallet'
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
  | 'search'
  | 'settings'
  | 'upload'
  | 'wallet-connect'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg'

export type IconColor = keyof typeof colors

export interface IconProps {
  name: IconNameProps
  title?: string
  id?: string
  width?: number
  size?: IconSize
  color?: IconColor
}

export type IconSizeOptions = { [key in IconSize]: number }
export type IconTypeOptions = { [key in IconNameProps]: any }
