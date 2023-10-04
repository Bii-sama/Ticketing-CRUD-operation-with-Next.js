import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
export const dynamic = "force-dynamic" //This prevents the server from serving the cached version of the page. Instead it returns the updated version.

//It works like the next: {revalidate: 0}



export async function POST(request) {


    const ticket = await request.json()

    const supabase = createRouteHandlerClient({cookies})

    const { data: { session } } = await supabase.auth.getSession()

    const { data, error } = await supabase.from('tickets')
    .insert({
        ...ticket,
        user_email: session.user.email
    })
    .select()
    .single()


    return NextResponse.json({
        data,
        error
    })
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