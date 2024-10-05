"use client"
import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter();

  const handleDashboardClick = () => {
    router.push('/admin');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-xl mb-4">SMS v0.1</div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleDashboardClick}
      >
        Dashboard
      </button>
    </div>
  )
}

export default Page
