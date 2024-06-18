import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row p-3 justify-center items-center gap-24'>
      <div className='flex flex-1 flex-col gap-12'>
        <h1 className='text-[54px] md:text-[64px] text-green-400'>Exploring the Unexplained</h1>
        <p className='text-lg text-gray-300'>Welcome to a realm where the extraordinary becomes the ordinary, 
          and the unexplained finds its voice. Dive into the mysterious world of 
          extraterrestrial encounters, paranormal phenomena, and the enigmatic unknown.</p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div className='flex items-center gap-24'>
        <Image src={Hero} alt='' className={styles.image} />
      </div>
    </div>
  )
}
