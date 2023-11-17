import UpdateForm from "./UpdateForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";


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


export default async function Update({ params }) {

  

  const ticket = await getTicket(params.id)

    return (
      <main>
          <h2 className="mb-4 pb-2 text-base">Update ticket</h2>
         <UpdateForm id={ticket.id} title={ticket.title} body={ticket.body} priority={ticket.priority} />
      </main>
    )
  }
  