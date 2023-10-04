import Link from 'next/link'
import React from 'react'
import Logo from './Logo-fotor-bg-remover-2023051319917.png'
import Image from 'next/image'
import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
  return (
    <nav className='flex flex-row gap-6 items-center'>
        <Image 
        src= {Logo}
        alt = 'Dojo'
        width ={150}
        quality = {100}
        placeholder='blur'
        />
      <Link href= "/">Dashboard</Link>
        <Link href= "/tickets" className='mr-auto'>Tickets</Link>


        <button className="btn-primary">
        <Link href= "/tickets/create">Add Ticket</Link>
        </button>
        {user &&  <span>Hello, {user.email}</span>}

        <LogoutButton />
    </nav>
  )
}
