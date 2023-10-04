import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// export const dynamic = "force-dynamic"

// export async function GET(_, { params }) {

//     const id = params.id
//     const res =  await fetch (`http://localhost:4000/tickets/${id}`)

//     const ticket = await res.json()

//     if(!res.ok){
//       return NextResponse.json({error: "Cannot find the ticket"}, {
//         status: 404
//       })
//     }

//     return NextResponse.json(ticket, {
//         status: 200
//     })
// }


export async function DELETE (_, { params }){
    const id = params.id

    const supabase = createRouteHandlerClient({ cookies })

    const { error } =  await supabase.from('tickets')
    .delete()
    .eq('id', id)

    return NextResponse.json({ error })
}


// export async function PATCH(_, { params }){

//     const id = params.id
//     const title = params.title
//     const body = params.body
//     const priority = params.priority

//     if (!id || !title || !body || !priority) {
//         return NextResponse.error('Missing required parameters.');
//       }

//     const supabase = createRouteHandlerClient({ cookies })

//     const { data, error } = await supabase.from('tickets')
//     .update({
//         title,body,priority
//     })
//     .eq('id', id)
//     .select()

//     return NextResponse.json({
//         data,
//         error
//     })
// }