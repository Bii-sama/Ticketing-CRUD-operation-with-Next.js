import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import DelButton from "./DelButton"
import { notFound } from "next/navigation"
import Link from "next/link"


export const dynamicParams = true

export async function generateMetadata({ params }){
 const supabase = createServerComponentClient({ cookies })

 const { data: ticket } = await supabase.from('tickets')
 .select()
 .eq('id', params.id)
 .single()

  return{
    title: `ADO | ${ticket?.title || "Ticket Not Found"}`
  }
}


async function getTicket(id) {

  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from('tickets')
  .select()
  .eq('id', id)
  .single()
 

  if(!data){
      notFound()
  }
  
  
  return data
}

export default  async function TicketDetails({ params }) {

  const ticket = await getTicket(params.id)

  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.auth.getSession()

  // const id = params.id

  
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email  === ticket.user_email && (
            <>
            <DelButton id={ticket.id}/>
            </>
          )}
        </div>
<Link href={`/tickets/${ticket.id}/update`} className="text-primary underline">Update</Link>
        </nav>

        <div className="bg-white 
      shadow-sm 
      rounded-md 
      py-3 px-4 my-4 
      relative 
      overflow-hidden;">

<h3 className="font-bold text-gray-700 text-sm 
      mb-0;">{ticket.title}</h3>
      <small>Created by {ticket.user_email}</small>
      <p className="my-4 text-sm leading-6">{ticket.body}</p>

      <div className={`pill absolute bottom-0 right-0 
      rounded-tl-md; ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
      </div>

      
    </main>
  )
}
