import Link from "next/link"

export default function NotFound() {
  return (
    <main>
        <h2 className="font-bold text-primary text-lg">We Hit A Brick Wall</h2>
        <p>We could not find the ticket you are looking for.</p>
        <p>Go back to all <Link href="/tickets">Tickets</Link></p>
    </main>
  )
}