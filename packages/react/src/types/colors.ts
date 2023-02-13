import type * as Stitches from '@stitches/react'
import { config } from '../styles'

export type ColorsPropTypes = Stitches.PropertyValue<'color', typeof config>

export type ColorsPropKeysTypes = keyof ColorsPropTypes
