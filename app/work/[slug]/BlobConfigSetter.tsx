'use client'
import { useEffect } from 'react'
import { useBlobConfig, BLOB_CONFIGS } from '@/context/BlobContext'

export default function BlobConfigSetter() {
  const { setConfig } = useBlobConfig()
  useEffect(() => { setConfig(BLOB_CONFIGS.work) }, [setConfig])
  return null
}
