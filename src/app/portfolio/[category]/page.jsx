import Button from '@/components/Button/Button'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { items } from './data'
import styles from './page.module.css'

const getData = (cat) => {
    const data = items[cat];

    if (data) {
        return data;
    }

    return notFound();
};

const Category = ({ params }) => {
    const data = getData(params.category);
    return (
        <div>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {data.map((item) => (
                <div className='flex flex-col gap-12 md:flex-row mt-4 mb-4' key={item.id}>
                    <div className='flex flex-1 flex-col gap-5 justify-center'>
                        <h1 className='text-[30px] md:text-[50px]'>{item.title}</h1>
                        <p className='text-[18px] md:text-[20px]'>{item.desc}</p>
                        <Button url="#" text="See more" />
                    </div>
                    <div className='flex flex-1 relative h-[430px]'>
                        <Image
                            src={item.image}
                            fill={true}
                            alt=""
                            className='object-cover'
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category