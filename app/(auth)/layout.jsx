import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function AuthLayout({ children }) {

  const supabase = createServerComponentClient({ cookies })
   const { data } = await supabase.auth.getSession()

   if(data.session){
    redirect('/')
   }

  return (
    <>
      <nav className= "flex flex-row gap-7 items-['flex-start'] border-0">
        <h1>ADO</h1>

<Link href= '/signup'>Sign Up</Link>
<Link href= '/login'>Log In</Link>
      </nav>

      {children}
    </>
  )
}
