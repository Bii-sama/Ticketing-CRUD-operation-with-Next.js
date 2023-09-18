
"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthForm from "../AuthForm";



export default function SignUp() {
  const router = useRouter()

  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) =>{
    e.preventDefault()

    const supabase = createClientComponentClient()
   const { error } = await supabase.auth.signUp({
      email, 
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    if (error) {
      setError(error.message)
    }

    if (!error) {
      router.push('/verify')
    }
    // console.log('user signup',email, password)
  }

  return (
   <main>
    <h2 className="text-center">Sign Up</h2>
    <AuthForm handleSubmit={handleSubmit} />

    {error && (
      <div className="error">{error}</div>
    )}
   </main>
  )
}
