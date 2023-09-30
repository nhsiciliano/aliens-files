import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Exploring the Unexplained</h1>
        <p className={styles.desc}>Welcome to a realm where the extraordinary becomes the ordinary, 
          and the unexplained finds its voice. Dive into the mysterious world of 
          extraterrestrial encounters, paranormal phenomena, and the enigmatic unknown.</p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.image} />
      </div>
    </div>
  )
}
