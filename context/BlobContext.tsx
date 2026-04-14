'use client'
import { createContext, useContext, useState } from 'react'

export type BlobCircle = {
  size: number    // px
  top: number     // % from top
  left: number    // % from left
  delay: number   // animation-delay in seconds
}

type BlobContextValue = {
  circles: BlobCircle[]
  setConfig: (circles: BlobCircle[]) => void
}

const BlobContext = createContext<BlobContextValue>({ circles: [], setConfig: () => {} })

// Default configs per page — imported and used by each page's BlobConfigSetter
export const BLOB_CONFIGS = {
  home: [
    { size: 320, top: -8,  left: -6,  delay: 0   },
    { size: 220, top: 4,   left: 18,  delay: 1.2 },
    { size: 180, top: -4,  left: 38,  delay: 2.5 },
    { size: 140, top: 18,  left: 52,  delay: 0.8 },
    { size: 100, top: 12,  left: 70,  delay: 1.8 },
  ],
  work: [
    { size: 260, top: -6,  left: -4,  delay: 0   },
    { size: 200, top: 2,   left: 22,  delay: 1.5 },
    { size: 160, top: -2,  left: 44,  delay: 2.8 },
    { size: 120, top: 14,  left: 64,  delay: 0.5 },
  ],
  about: [
    { size: 280, top: 10,  left: 30,  delay: 0   },
    { size: 200, top: -4,  left: 52,  delay: 1.2 },
    { size: 150, top: 20,  left: 14,  delay: 2.0 },
  ],
  contact: [
    { size: 220, top: 30,  left: 50,  delay: 0   },
    { size: 160, top: 50,  left: 68,  delay: 1.4 },
    { size: 100, top: 42,  left: 36,  delay: 0.7 },
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
