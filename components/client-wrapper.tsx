"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Import ClientPage with no SSR to avoid hydration mismatches
const ClientPage = dynamic(() => import("@/components/client-page"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full flex items-center justify-center bg-emerald-800">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
})

export default function ClientWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show loading state until client-side code is hydrated
  if (!mounted) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-emerald-800">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return <ClientPage />
}

