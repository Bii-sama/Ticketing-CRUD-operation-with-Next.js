
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs" //This is used to connect to supabase from a next route handler
import { cookies } from "next/headers"
import { NextResponse } from "next/server"


export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (code){
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(url.origin)
}