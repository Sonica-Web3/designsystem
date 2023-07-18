/* eslint-disable no-unused-vars */

import { colors } from '@sonicaweb3/tokens'

export type IconNameProps =
  | 'arbitrum'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'avalanche'
  | 'binance'
  | 'brazil-flag'
  | 'browser'
  | 'calendar'
  | 'chain'
  | 'check'
  | 'check-circle'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'code'
  | 'coinbase-wallet'
  | 'contracts'
  | 'copy'
  | 'dark-mode'
  | 'dashboard'
  | 'defi'
  | 'edit'
  | 'email-wallet'
  | 'eth-logo'
  | 'external-link'
  | 'eye'
  | 'fantom'
  | 'filter'
  | 'free-plan'
  | 'icon'
  | 'info'
  | 'light-mode'
  | 'log-out'
  | 'menu'
  | 'metamask-logo'
  | 'money-growth'
  | 'multitasking'
  | 'nft-collection'
  | 'nft-market-place'
  | 'nft'
  | 'optimism'
  | 'order'
  | 'payments'
  | 'pined'
  | 'plus'
  | 'plus-circle'
  | 'polygon-logo'
  | 'premium-plan'
  | 'refresh'
  | 'search'
  | 'settings'
  | 'sliders'
  | 'split'
  | 'token'
  | 'trash'
  | 'unpin'
  | 'upload'
  | 'vote'
  | 'wallet-connect'
  | 'x'
  | 'folder'
  | 'defi-v2'
  | 'crm-v2'
  | 'browser-v2'
  | 'backup'

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
