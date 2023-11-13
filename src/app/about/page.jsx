import Button from '@/components/Button/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

export const metadata = {
    title: 'Aliens Files | About Page',
    description: 'About Page Information',
    }

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/7527879/pexels-photo-7527879.jpeg"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital files</h1>
                    <h2 className={styles.imgDesc}>Updated information on the latest events and news</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>Welcome to Unearthly Enigmas, your trusted source for the latest and most captivating
                        information on aliens, paranormal phenomena, and the mysteries that
                        defy conventional understanding. We are a passionate team of researchers,
                        writers, and enthusiasts dedicated to exploring the uncharted realms of our world and beyond.
                        <br />
                        <br />
                        Our mission is to shed light on the enigmatic and the otherworldly,
                        providing you with a platform where the extraordinary becomes accessible.
                        We believe that curiosity is the key to unlocking the secrets of the universe,
                        and through in-depth research, compelling stories, and expert analysis,
                        we aim to satisfy your thirst for knowledge about all things mysterious.</p>
                </div>
                <div className={styles.item}>
                <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>At Unearthly Enigmas, we are committed to presenting well-researched,
                        fact-based content while respecting the boundaries of skepticism and
                        wonder. Our goal is to inspire open-minded exploration,
                        foster discussion, and fuel your imagination. Whether you are a
                        seasoned paranormal enthusiast or a newcomer to the unexplained,
                        join us on this journey as we navigate the uncharted waters of
                        the strange, the mystical, and the unknown.</p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About