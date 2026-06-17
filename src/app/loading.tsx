import { Spinner } from '@/components/ui'

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <Spinner size="lg" />
    </div>
  )
}