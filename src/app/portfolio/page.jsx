import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a gallery</h1>
            <div className='flex flex-col items-center gap-12 md:flex-row'>
                <Link href="/portfolio/pics" className={styles.item}>
                    <span className={styles.title}>AliensPics</span>
                </Link>
                <Link href="/portfolio/sites" className={styles.item}>
                    <span className={styles.title}>AliensSites</span>
                </Link>
                <Link href="/portfolio/apps" className={styles.item}>
                    <span className={styles.title}>AliensApps</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio