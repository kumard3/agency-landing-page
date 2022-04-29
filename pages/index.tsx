/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import * as React from 'react'
import Header from '../components/Header'
import NavComponent from '../components/NavComponent'

export default function Home() {
  return (
    <div className="min-h-screen w-full ">
      <div className="bg-[#EEF4FF] min-h-screen relative">
        <NavComponent />
        <Header />
      </div>
    </div>
  )
}
