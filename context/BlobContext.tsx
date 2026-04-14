'use client'
import { createContext, useContext, useState } from 'react'

export type BlobCircle = {
  size: number    // px
  top: number     // % from top of viewport
  left: number    // % from left of viewport
  delay: number   // animation-delay in seconds
}

type BlobContextValue = {
  circles: BlobCircle[]
  setConfig: (circles: BlobCircle[]) => void
}

const BlobContext = createContext<BlobContextValue>({ circles: [], setConfig: () => {} })

export const BLOB_CONFIGS = {
  home: [
    { size: 380, top: 28, left: 15, delay: 0   },
    { size: 300, top: 38, left: 42, delay: 1.3 },
    { size: 250, top: 22, left: 62, delay: 3.1 },
    { size: 200, top: 48, left: 28, delay: 0.7 },
    { size: 170, top: 44, left: 56, delay: 2.4 },
    { size: 140, top: 32, left: 76, delay: 4.2 },
    { size: 120, top: 55, left: 68, delay: 1.8 },
  ],
  work: [
    { size: 340, top: 30, left: 12, delay: 0   },
    { size: 270, top: 38, left: 40, delay: 1.6 },
    { size: 220, top: 24, left: 62, delay: 3.2 },
    { size: 180, top: 50, left: 26, delay: 0.6 },
    { size: 150, top: 46, left: 54, delay: 2.1 },
    { size: 120, top: 36, left: 76, delay: 1.1 },
  ],
  about: [
    { size: 320, top: 32, left: 20, delay: 0   },
    { size: 260, top: 26, left: 50, delay: 1.5 },
    { size: 210, top: 44, left: 36, delay: 2.8 },
    { size: 170, top: 50, left: 62, delay: 0.9 },
    { size: 140, top: 36, left: 8,  delay: 3.4 },
    { size: 120, top: 54, left: 74, delay: 1.7 },
  ],
  contact: [
    { size: 300, top: 34, left: 30, delay: 0   },
    { size: 230, top: 28, left: 56, delay: 1.6 },
    { size: 190, top: 48, left: 18, delay: 2.8 },
    { size: 160, top: 52, left: 54, delay: 0.9 },
    { size: 130, top: 40, left: 74, delay: 1.9 },
  ],
}

export function BlobProvider({ children }: { children: React.ReactNode }) {
  const [circles, setCircles] = useState<BlobCircle[]>(BLOB_CONFIGS.home)
  return (
    <BlobContext.Provider value={{ circles, setConfig: setCircles }}>
      {children}
    </BlobContext.Provider>
  )
}

export function useBlobConfig() {
  return useContext(BlobContext)
}
