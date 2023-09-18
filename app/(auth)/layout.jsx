import Link from "next/link"

export default function AuthLayout({ children }) {
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
