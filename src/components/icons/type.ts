// Copyright 2024 The RSM Authors

import { SVGProps } from 'react'

export type IconSvgProps = Omit<
  SVGProps<SVGSVGElement>,
  'width' | 'height' | 'viewBox'
> & {
  size?: number
}
