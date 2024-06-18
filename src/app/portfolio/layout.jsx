import React from 'react'
import styles from './page.module.css'

export const metadata = {
    title: 'Aliens Files | Portfolio Page',
    description: 'Portfolio Page Information',
    }

const Layout = ({children}) => {
    return (
        <div>
            <h1 className='text-[54px] md:text-[92px]'>Our Works</h1>
            {children}
        </div>
    )
}

export default Layout