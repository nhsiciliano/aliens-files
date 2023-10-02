"use client"

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import DarkModeToggle from '../DarkModeToggle/darkModeToggle'
import styles from './navbar.module.css'

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
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>AliensFiles</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated" && (
                    <button 
                        className={styles.logout}
                        onClick={signOut}>
                            Logout
                    </button>
                )}
            </div>
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
            <div className={styles.menu} onClick={() => setOpen(false)} style={{ right: open ? "0px" : "-50vw" }}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.hamlink}>
                        {link.title}
                    </Link>
                ))}
                <DarkModeToggle />
                {session.status === "authenticated" && (
                    <button 
                        className={styles.hamlogout}
                        onClick={signOut}>
                            Logout
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar