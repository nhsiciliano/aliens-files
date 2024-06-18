import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

export const metadata = {
    title: 'Aliens Files | Contact Page',
    description: 'Contact Page Information',
    }

const Contact = () => {
    return (
        <div className=''>
            <h1 className='text-[30px] text-center mb-12 md:text-[50px]'>Let is Keep in Touch</h1>
            <div className='flex flex-col items-center gap-24 md:flex-row'>
                <div className='hidden lg:flex flex-1 h-[500px] relative'>
                    <Image
                        src="/contact.png"
                        alt=''
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className='flex flex-1 flex-col gap-5'>
                    <input type="text" placeholder='name' className={styles.input} />
                    <input type="text" placeholder='email' className={styles.input} />
                    <textarea className={styles.textArea} placeholder="message" cols="30" rows="10"></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>  
        </div>
    )
}

export default Contact