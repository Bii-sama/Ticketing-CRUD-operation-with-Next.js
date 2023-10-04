"use client"

import { useState } from "react";
import { TiDelete } from "react-icons/ti"
import { useRouter } from "next/navigation";

export default function DelButton({ id }) {

    const [isLoading, setIsloading] = useState(false)
    const router = useRouter()

    

 const deleteTicket = async () =>{
    setIsloading(true)
    
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: 'DELETE'
    })

    const json = await res.json()

    if (json.error){
        console.log(error)
        setIsloading(false)
    }

    if(!json.error){
        router.refresh()
        router.push('/tickets')
    }
 }

  return (
    <button className="btn-primary"
    onClick={deleteTicket}
    disabled={isLoading}
    >
{isLoading &&
(<>
<TiDelete/>
Deleting...
</>)}


{!isLoading && (
<>
<TiDelete/>
Delete Ticket
</>
)}

    </button>
  )
}
