import React, { Suspense, FunctionComponent } from 'react'
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
    avalanche: React.lazy(() => import(`./icons/Avalanche`)),
    'brazil-flag': React.lazy(() => import(`./icons/BandeiraBrasil`)),
    nft: React.lazy(() => import(`./icons/Nft`)),
    check: React.lazy(() => import(`./icons/Check`)),
    info: React.lazy(() => import(`./icons/Info`)),
    'chevron-down': React.lazy(() => import(`./icons/ChevronDown`)),
    'chevron-left': React.lazy(() => import(`./icons/ChevronLeft`)),
    'chevron-right': React.lazy(() => import(`./icons/ChevronRight`)),
    'chevron-up': React.lazy(() => import(`./icons/ChevronUp`)),
    split: React.lazy(() => import(`./icons/Split`)),
    token: React.lazy(() => import(`./icons/Token`)),
    vote: React.lazy(() => import(`./icons/Vote`)),
    'eth-logo': React.lazy(() => import(`./icons/EthLogo`)),
    'email-wallet': React.lazy(() => import(`./icons/EmailWallet`)),
    'polygon-logo': React.lazy(() => import(`./icons/PolygonLogo`)),
    x: React.lazy(() => import(`./icons/X`)),
    contracts: React.lazy(() => import(`./icons/Contracts`)),
    'dark-mode': React.lazy(() => import(`./icons/DarkMode`)),
    dashboard: React.lazy(() => import(`./icons/Dashboard`)),
    filter: React.lazy(() => import(`./icons/Filter`)),
    icon: React.lazy(() => import(`./icons/Icon`)),
    sliders: React.lazy(() => import(`./icons/Sliders`)),
    trash: React.lazy(() => import(`./icons/Trash`)),
    eye: React.lazy(() => import(`./icons/Eye`)),
    fantom: React.lazy(() => import(`./icons/Fantom`)),
    'light-mode': React.lazy(() => import(`./icons/LightMode`)),
    'metamask-logo': React.lazy(() => import(`./icons/MetamaskLogo`)),
    'nft-collection': React.lazy(() => import(`./icons/NftCollection`)),
    'nft-market-place': React.lazy(() => import(`./icons/NftMktPlace`)),
    'plus-circle': React.lazy(() => import(`./icons/PlusCircle`)),
    search: React.lazy(() => import(`./icons/Search`)),
    settings: React.lazy(() => import(`./icons/Settings`)),
    upload: React.lazy(() => import(`./icons/Upload`)),
    'wallet-connect': React.lazy(() => import(`./icons/Walletconnect`)),
    'coinbase-wallet': React.lazy(() => import(`./icons/CoinbaseWallet`)),
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
  console.log(colors[color])
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

  return (
    <Suspense fallback="">
      <TrComponent {...props} width={TrWidth} color={color} stroke={color} />
    </Suspense>
  )
}
export default Icon

export * from './types/icon.types'
