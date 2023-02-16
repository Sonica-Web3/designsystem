import React, { Suspense, FunctionComponent } from 'react'
import {
  IconNameProps,
  IconProps,
  IconSize,
  IconSizeOptions,
  IconTypeOptions,
} from './types/icon.types'

const geIcon = (avatarType: IconNameProps) => {
  const icons: IconTypeOptions = {
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
    'matamask-logo': React.lazy(() => import(`./icons/MetamaskLogo`)),
    'nft-collection': React.lazy(() => import(`./icons/NftCollection`)),
    'nft-market-place': React.lazy(() => import(`./icons/NftCollection`)),
    'plus-circle': React.lazy(() => import(`./icons/PlusCircle`)),
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

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name, size = 'md', width = null } = props
  const TrComponent = geIcon(name)
  const TrWidth = width || getSize(size)

  if (!name) {
    return null
  }

  return (
    <Suspense fallback="">
      <TrComponent {...props} width={TrWidth} />
    </Suspense>
  )
}
export default Icon

export * from './types/icon.types'
