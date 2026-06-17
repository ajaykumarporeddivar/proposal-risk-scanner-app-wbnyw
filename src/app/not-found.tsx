import Link from 'next/link'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 text-zinc-900 p-6 text-center">
      <h2 className="text-4xl font-bold tracking-tight mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-zinc-600 mb-8">
        We could not find the page you were looking for.
      </p>
      <Link href="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  )
}