import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation';
import React from 'react'
import styles from './page.module.css'

async function getData() {
    const res = await fetch("https://aliens-files.vercel.app/api/posts", {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}

export const metadata = {
    title: 'Aliens Files | Blog Page',
    description: 'Blog Page with all the articles',
    }

const Blog = async () => {
    const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {data.map((item) => ( 
                <Link href={`/blog/${item._id}`} className='flex flex-col items-center mb-3 gap-8 md:flex-row' key={item.id}>
                    <div className='max-h-[250px] max-w-[320px] overflow-hidden'>
                        <Image
                            src={item.img}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                            />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog