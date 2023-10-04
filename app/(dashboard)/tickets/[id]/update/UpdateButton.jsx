"use client"

import { TiPen } from "react-icons/ti"
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function UpdateButton({ id }) {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const updateTicket = () =>{
    setIsLoading(true)
    router.push(`/tickets/${id}/update`)

  }
return (

    <button onClick={updateTicket} className="btn-primary ml-auto" >
<TiPen/>
Update Ticket
</button>


  )
}
