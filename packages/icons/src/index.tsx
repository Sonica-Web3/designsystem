import React, { Suspense, FunctionComponent } from 'react'
import {
  IconName,
  IconProps,
  IconSize,
  IconSizeOptions,
  IconTypeOptions,
} from './types/icon.types'

const geIcon = (avatarType: IconName) => {
  const icons: IconTypeOptions = {
    nft: React.lazy(() => import(`./icons/Nft`)),
    check: React.lazy(() => import(`./icons/Check`)),
    info: React.lazy(() => import(`./icons/Info`)),
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
