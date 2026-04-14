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
    { size: 360, top: 2,  left: 18, delay: 0   },
    { size: 290, top: 12, left: 44, delay: 1.3 },
    { size: 240, top: 0,  left: 64, delay: 3.1 },
    { size: 190, top: 28, left: 30, delay: 0.7 },
    { size: 160, top: 24, left: 56, delay: 2.4 },
    { size: 130, top: 8,  left: 8,  delay: 4.2 },
    { size: 110, top: 34, left: 72, delay: 1.8 },
  ],
  work: [
    { size: 320, top: 4,  left: 14, delay: 0   },
    { size: 260, top: 10, left: 40, delay: 1.6 },
    { size: 210, top: 2,  left: 62, delay: 3.2 },
    { size: 170, top: 24, left: 26, delay: 0.6 },
    { size: 140, top: 22, left: 52, delay: 2.1 },
    { size: 110, top: 18, left: 74, delay: 1.1 },
  ],
  about: [
    { size: 310, top: 8,  left: 22, delay: 0   },
    { size: 250, top: 4,  left: 50, delay: 1.5 },
    { size: 200, top: 20, left: 36, delay: 2.8 },
    { size: 160, top: 26, left: 62, delay: 0.9 },
    { size: 130, top: 14, left: 10, delay: 3.4 },
    { size: 110, top: 30, left: 72, delay: 1.7 },
  ],
  contact: [
    { size: 280, top: 12, left: 32, delay: 0   },
    { size: 220, top: 6,  left: 56, delay: 1.6 },
    { size: 180, top: 26, left: 20, delay: 2.8 },
    { size: 150, top: 28, left: 54, delay: 0.9 },
    { size: 120, top: 18, left: 72, delay: 1.9 },
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
