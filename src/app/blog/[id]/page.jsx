"use client"

import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id)
    return {
        title: post.title + " || Aliens Files",
        description: post.desc,
    };
}


const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.desc}>
                        {data.desc}
                    </p>
                    <div className={styles.author}>
                        <span>Author:</span>
                        <span className={styles.username}>{data.username}</span>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src={data.img}
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data.content}
                </p>
            </div>
        </div>
    )
}

export default BlogPost