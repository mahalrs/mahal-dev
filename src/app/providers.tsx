// Copyright 2024 The RSM Authors

'use client'

import { NextUIProvider } from '@nextui-org/system'

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>
}
