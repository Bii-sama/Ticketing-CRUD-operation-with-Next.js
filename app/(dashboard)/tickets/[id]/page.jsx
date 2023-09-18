

export const dynamicParams = true

export async function generateMetadata({ params }){
  const id = params.id

  const res = await fetch (`http://localhost:4000/tickets/${id}`)

  const ticket = await res.json()

  return{
    title: `ADO | ${ticket.title}`
  }
}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()

  return tickets.map((ticket) =>({
    id: ticket.id
  }))
}

async function getTicket(id) {

  await new Promise (resolve =>{setTimeout(resolve, 3000)})
  const res = await fetch('http://localhost:4000/tickets/' + id, {
    next: {
      revalidate: 60
    }
  })

  if(!res.ok){
      notFound()
  }
  
  
  return res.json()
}

export default  async function TicketDetails({ params }) {

  const ticket = await getTicket(params.id)

  // const id = params.id
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
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
