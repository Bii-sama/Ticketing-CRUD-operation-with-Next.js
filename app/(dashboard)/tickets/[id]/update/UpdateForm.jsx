"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"






export default function UpdateForm({ id, title, body, priority }) {

const router = useRouter()

const [Istitle, setTitle] = useState(title)
const [Isbody, setBody] = useState(body)
const [Ispriority, setPriority] = useState(priority)
const [isLoading, setIsloading] = useState(false)


const handleSubmit = async(e)=>{
e.preventDefault()

setIsloading(true)

const Updatedticket ={
  title: Istitle,
  body: Isbody,
  priority: Ispriority,
}

const res = await fetch(`http://localhost:3000/api/tickets/${id}/update`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(Updatedticket)

})

const json = await res.json()

if(json.error){
    console.log(error.message)
}

if(json.data){
  router.refresh()
  router.push('/tickets')
  
}


}

  return (
    
   <form onSubmit={handleSubmit} className="w-1/2">

    <h2>Update-{id}</h2>

<label>


        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={Istitle}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={Isbody}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select 
          onChange={(e) => setPriority(e.target.value)}
          value={Ispriority}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Updating...</span>}
      {!isLoading && <span>Update Ticket</span>}
    </button>
   </form>
  )
}
