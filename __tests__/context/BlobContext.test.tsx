import { render, act } from '@testing-library/react'
import { useEffect } from 'react'
import { BlobProvider, useBlobConfig, type BlobCircle } from '@/context/BlobContext'

const config: BlobCircle[] = [{ size: 200, top: 10, left: 20, delay: 0 }]

function Setter() {
  const { setConfig } = useBlobConfig()
  useEffect(() => {
    act(() => { setConfig(config) })
  }, [setConfig])
  return null
}

function Reader() {
  const { circles } = useBlobConfig()
  return <div data-testid="count">{circles.length}</div>
}

it('updates blob config via setConfig', async () => {
  const { getByTestId } = render(
    <BlobProvider>
      <Setter />
      <Reader />
    </BlobProvider>
  )
  // Wait for state update from Setter's useEffect
  await act(async () => {})
  expect(getByTestId('count')).toHaveTextContent('1')
})
