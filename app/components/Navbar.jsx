import Link from 'next/link'
import React from 'react'
import Logo from './Logo-fotor-bg-remover-2023051319917.png'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex flex-row gap-6 items-center'>
        <Image 
        src= {Logo}
        alt = 'Dojo'
        width ={150}
        quality = {100}
        placeholder='blur'
        />
      <Link href= "/">Dashboard</Link>
        <Link href= "/tickets">Tickets</Link>
        <button className='bg-primary text-white; rounded-tl-md'>
        <Link href= "/tickets/create">Add Ticket</Link>
        </button>
    </div>
  )
}
