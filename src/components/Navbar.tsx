'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { User } from 'next-auth'
import { Button } from './ui/button'
const Navbar = () => {
    const { data: session } = useSession()

    const user = session?.user as User

    return (
        <nav style={{fontFamily:'cursive' }} className=' p-4 md:p-5 shadow-md'>
            <div className=' container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <svg  className='  w-56' width="115" height="41" viewBox="0 0 170 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6841 40.138C31.7298 40.138 40.6841 31.1837 40.6841 20.138C40.6841 9.09234 31.7298 0.138031 20.6841 0.138031C9.63837 0.138031 0.684082 9.09234 0.684082 20.138C0.684082 31.1837 9.63837 40.138 20.6841 40.138ZM26.9234 9.45487C27.2271 8.37608 26.1802 7.73816 25.2241 8.41933L11.8772 17.9276C10.8403 18.6663 11.0034 20.138 12.1222 20.138H15.6368V20.1108H22.4866L16.9053 22.0801L14.4448 30.8212C14.1411 31.9 15.1879 32.5379 16.1441 31.8567L29.491 22.3485C30.5279 21.6098 30.3647 20.138 29.246 20.138H23.9162L26.9234 9.45487Z" fill="#F15757" />
                    <text x="26%" y="65%" font-size="18" fontFamily='cursive'   fontWeight={600}  fill="#340E0E">Mystery Message</text>

               
                </svg>

                {
                    session ? (
                        <>
                            <span className=' gradient-span transparent-text mr-4 text-lg'>Welcome, {user?.username || user?.email}</span>
                            <Button className=' w-full md:w-auto' onClick={() => signOut()}>Logout</Button>
                        </>
                    ) : (
                        <Link href="/sign-in">
                            <Button className=' w-full md:w-auto'>Sign In</Button>
                        </Link>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar