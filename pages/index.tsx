/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import * as React from 'react'
import Boost from '../components/Boost'
import Header from '../components/Header'
import NavComponent from '../components/NavComponent'

export default function Home() {
  return (
    <div className="min-h-screen w-full ">
      <div className="bg-[#EEF4FF] min-h-screen relative">
        <NavComponent />
        <Header />
      </div>

      <div className="grid sm:grid-cols-2 items-center">
        <div>
          <img src="Answer.png" />
        </div>
        <div className="max-w-xl px-4 ">
          <h1 className="font-jostBold text-4xl py-4 md:leading-[1.3] md:text-[60px]">
            Take Your Online marketing to the next level.
          </h1>

          <div className="flex">
            <div>
              <img src="Group14.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Direct Scheduling</h1>
              <p className="font-jostRegular text-[#61646B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="Group15.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Reminders</h1>
              <p className="font-jostRegular text-[#61646B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="Group16.png" />
            </div>
            <div>
              <h1 className="font-jostMedium text-3xl">Shop Grid</h1>
              <p className="font-jostRegular text-[#61646B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Boost />
    </div>
  )
}
