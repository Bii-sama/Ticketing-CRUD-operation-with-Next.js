import Link from "next/link"
import NotFound from "./not-found"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

async function getTickets() {

  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('tickets')
  .select()
 
  if(error){
    console.log(error.message)
  }

  return data;
}

export default async function TicketsList() {
    

    const tickets = await getTickets()
  return (
    <div>
      {tickets.map((ticket,index) => (
        <div key={index} className="bg-white 
        shadow-sm 
        rounded-md 
        py-3 px-4 my-4 
        relative 
        overflow-hidden;">
             <Link href={`/tickets/${ticket.id}`}>
              
            <h3 className="font-bold text-gray-700 text-sm 
      mb-0;">
    
        {ticket.title}</h3>
            <p className="my-4 text-sm leading-6">{ticket.body.slice(0, 200)}...</p>
            <div className={`pill absolute bottom-0 right-0 
      rounded-tl-md; ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
            </Link>
        </div>
        
       
      ))}

      {tickets.length === 0 && (
        <p className= "text-centre">There are no open tickets yay...!!!</p>
      )}
    </div>
  )
}
