import Link from 'next/link'
import React from 'react'
import Logo from './dojo-logo.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex flex-row gap-6 items-center'>
        <Image 
        src= {Logo}
        alt = 'Dojo'
        width ={70}
        quality = {100}
        />
      <Link href= "/">Dashboard</Link>
        <Link href= "/tickets">Tickets</Link>
        <button className='bg-primary text-white;'>
        <Link href= "/tickets/create">Add Ticket</Link>
        </button>
    </div>
  )
}
