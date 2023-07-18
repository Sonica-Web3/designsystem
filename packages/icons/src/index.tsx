import React, { FunctionComponent } from 'react'
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
  Calendar,
  Code,
  Copy,
  ExternalLink,
  Order,
  Pined,
  Refresh,
  Unpin,
  Chain,
  CheckCircle,
  Defi,
  Edit,
  FreePlan,
  PremiumPlan,
  Payments,
  Menu,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Binance,
  Arbitrum,
  Optimism,
  Browser,
  MoneyGrowth,
  Multitasking,
  Folder,
  DefiV2,
  CrmV2,
  BrowserV2,
  Backup,
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
    arbitrum: Arbitrum,
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
    plus: Plus,
    'plus-circle': PlusCircle,
    search: Search,
    settings: Settings,
    upload: Upload,
    'wallet-connect': WalletConnect,
    'coinbase-wallet': CoinbaseWallet,
    'log-out': LogOut,
    calendar: Calendar,
    code: Code,
    copy: Copy,
    'external-link': ExternalLink,
    order: Order,
    pined: Pined,
    refresh: Refresh,
    unpin: Unpin,
    chain: Chain,
    'check-circle': CheckCircle,
    defi: Defi,
    edit: Edit,
    'free-plan': FreePlan,
    'premium-plan': PremiumPlan,
    payments: Payments,
    menu: Menu,
    'arrow-down': ArrowDown,
    'arrow-left': ArrowLeft,
    'arrow-right': ArrowRight,
    'arrow-up': ArrowUp,
    binance: Binance,
    optimism: Optimism,
    browser: Browser,
    'money-growth': MoneyGrowth,
    multitasking: Multitasking,
    folder: Folder,
    'defi-v2': DefiV2,
    'crm-v2': CrmV2,
    'browser-v2': BrowserV2,
    backup: Backup,
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
