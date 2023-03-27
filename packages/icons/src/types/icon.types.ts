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
  | 'log-out'
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
  | 'plus'
  | 'search'
  | 'settings'
  | 'upload'
  | 'wallet-connect'
  | 'code'
  | 'unpin'
  | 'refresh'
  | 'pined'
  | 'order'
  | 'chain'
  | 'external-link'
  | 'copy'
  | 'check-circle'
  | 'defi'
  | 'edit'
  | 'free-plan'
  | 'premium-plan'
  | 'payments'
  | 'calendar'

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
