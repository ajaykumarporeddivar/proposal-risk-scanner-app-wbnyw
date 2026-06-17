'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 text-red-800 p-6">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-lg text-red-700 mb-6">{error.message}</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant="primary"
        className="bg-red-700 hover:bg-red-600 text-white"
      >
        Try again
      </Button>
    </div>
  )
}