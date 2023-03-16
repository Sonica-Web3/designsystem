import React, { Suspense, FunctionComponent } from 'react'
import {
  Avalanche,
  BrazilFlag,
  Nft,
  Check,
  Info,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CoinbaseWallet,
  Contracts,
  DarkMode,
  Dashboard,
  EmailWallet,
  EthLogo,
  Eye,
  Fantom,
  Filter,
  LightMode,
  LogOut,
  MetamaskLogo,
  NftCollection,
  NftMktPlace,
  Plus,
  PlusCircle,
  PolygonLogo,
  Search,
  Settings,
  Sliders,
  Split,
  Token,
  Trash,
  Upload,
  Vote,
  WalletConnect,
  X,
} from './icons'
import {
  IconColor,
  IconNameProps,
  IconProps,
  IconSize,
  IconSizeOptions,
  IconTypeOptions,
} from './types/icon.types'
import { colors } from '@sonicaweb3/tokens'

const geIcon = (avatarType: IconNameProps) => {
  const icons: IconTypeOptions = {
    avalanche: Avalanche,
    'brazil-flag': BrazilFlag,
    nft: Nft,
    check: Check,
    info: Info,
    'chevron-down': ChevronDown,
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    'chevron-up': ChevronUp,
    split: Split,
    token: Token,
    vote: Vote,
    'eth-logo': EthLogo,
    'email-wallet': EmailWallet,
    'polygon-logo': PolygonLogo,
    x: X,
    contracts: Contracts,
    'dark-mode': DarkMode,
    dashboard: Dashboard,
    filter: Filter,
    icon: Icon,
    sliders: Sliders,
    trash: Trash,
    eye: Eye,
    fantom: Fantom,
    'light-mode': LightMode,
    'metamask-logo': MetamaskLogo,
    'nft-collection': NftCollection,
    'nft-market-place': NftMktPlace,
    'plus-circle': PlusCircle,
    plus: Plus,
    search: Search,
    settings: Settings,
    upload: Upload,
    'wallet-connect': WalletConnect,
    'coinbase-wallet': CoinbaseWallet,
    'log-out': LogOut,
  }

  if (icons[avatarType]) {
    return icons[avatarType]
  }
  return null
}

const getSize = (size: IconSize) => {
  const sizes: IconSizeOptions = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 56,
  }
  return sizes[size]
}

const getColor = (color: IconColor) => {
  return colors[color]
}

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name, size = 'md', width = null, color: colorProp } = props
  const TrComponent = geIcon(name)
  const TrWidth = width || getSize(size)

  const color = colorProp ? getColor(colorProp) : 'none'

  if (!name) {
    return null
  }

  return <TrComponent {...props} width={TrWidth} color={color} stroke={color} />
}
export default Icon

export * from './types/icon.types'
