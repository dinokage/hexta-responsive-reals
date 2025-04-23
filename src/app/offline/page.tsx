// import Image from 'next/image'
import Link from 'next/link'
import { Wifi } from 'lucide-react'

export const metadata = {
  title: 'You are Offline | HextaSphere',
  description: 'Currently offline. Some content may be unavailable.'
}

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Wifi size={64} className="text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold text-dark mb-4">You&apos;re Offline</h1>
        
        <p className="text-gray-600 mb-8">
          It seems you&apos;re not connected to the internet. Some features may be limited until you reconnect.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-opacity-90 transition"
          >
            Try Again
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>You can still access cached pages from your previous visits.</p>
          </div>
        </div>
      </div>
    </div>
  )
}