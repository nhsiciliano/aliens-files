"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
]

const Navbar = () => {
    const session = useSession();
    return (
        <div className='h-[100px] py-3'>
            <div className='flex justify-between items-center'>
                <div className='dropdown -ml-8 lg:hidden'>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content gap-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links.map((link) => (
                            <Link key={link.id} href={link.url} className='text-teal-500 font-semibold'>
                                {link.title}
                            </Link>
                        ))}
                        <DarkModeToggle />
                        {session.status === "authenticated" && (
                            <button
                                className='p-3 border-none bg-teal-600 text-white font-semibold cursor-pointer rounded hover:bg-teal-800 transition-all'
                                onClick={signOut}>
                                Logout
                            </button>
                        )}
                    </ul>
                </div>
                <Link href="/" className='font-extrabold text-[22px]'>AliensFiles</Link>
                <div className='hidden lg:flex items-center gap-5'>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <Link key={link.id} href={link.url} className='flex items-center gap-5'>
                            {link.title}
                        </Link>
                    ))}
                    {session.status === "authenticated" && (
                        <button
                            className='p-3 border-none bg-teal-600 text-white font-semibold cursor-pointer rounded hover:bg-teal-800 transition-all'
                            onClick={signOut}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar