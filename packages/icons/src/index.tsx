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
