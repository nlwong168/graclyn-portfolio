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
    { size: 440, top: 26, left: 12, delay: 0   },
    { size: 360, top: 36, left: 40, delay: 1.3 },
    { size: 300, top: 20, left: 60, delay: 3.1 },
    { size: 240, top: 48, left: 26, delay: 0.7 },
    { size: 200, top: 44, left: 56, delay: 2.4 },
    { size: 160, top: 30, left: 76, delay: 4.2 },
    { size: 140, top: 54, left: 68, delay: 1.8 },
  ],
  work: [
    { size: 400, top: 28, left: 10, delay: 0   },
    { size: 320, top: 36, left: 38, delay: 1.6 },
    { size: 270, top: 22, left: 60, delay: 3.2 },
    { size: 220, top: 50, left: 24, delay: 0.6 },
    { size: 180, top: 46, left: 54, delay: 2.1 },
    { size: 150, top: 34, left: 76, delay: 1.1 },
  ],
  about: [
    { size: 380, top: 30, left: 18, delay: 0   },
    { size: 310, top: 24, left: 48, delay: 1.5 },
    { size: 260, top: 44, left: 34, delay: 2.8 },
    { size: 210, top: 50, left: 62, delay: 0.9 },
    { size: 170, top: 34, left: 6,  delay: 3.4 },
    { size: 150, top: 54, left: 74, delay: 1.7 },
  ],
  contact: [
    { size: 360, top: 32, left: 28, delay: 0   },
    { size: 280, top: 26, left: 54, delay: 1.6 },
    { size: 230, top: 48, left: 16, delay: 2.8 },
    { size: 190, top: 52, left: 54, delay: 0.9 },
    { size: 160, top: 38, left: 74, delay: 1.9 },
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
