import Navbar from "../components/Navbar"

export default function DashboardLayout({ children }) {
  return (
    <>
     <Navbar className= "flex flex-row gap-7 items-['flex-start']" />
       {children}
    </>
  )
}
