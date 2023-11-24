
import { getServerSession } from 'next-auth'
import LoginBtn from './components/LoginBtn'
import './globals.css'
import Link from 'next/link'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogoutBtn from './components/LogoutBtn'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body>
      <div className="navbar"> 
        <Link href="/" className="logo">Appleforum</Link> 
        <Link href="/list">List</Link>
        {session ? <span>{session.user.name}<LogoutBtn/></span> :<LoginBtn/> }
        
      </div> 
      {children} 
      </body>
    </html>
  )
}
