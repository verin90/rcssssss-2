import { useState } from 'react'
import {Photo} from '../Photo.ts'
import styles from './Manepg.module.scss'


function Manepg() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className={styles.section1}>
        <div className={styles.text}>
          <p><span style={{fontSize:'2rem', fontWeight:'700', }}>Creating a Better Tomorrow, One Home at a Time</span></p>
          <p>We've built a reputation for delivering exceptional results and exceeding our clients' expectations. From luxurious residential homes to state-of-the-art commercial properties, our team of experts is dedicated to bringing your vision to life.</p>
          <div></div>
        </div>
        <div className={styles.img}></div>
    </section>
    </>
  )
}

export default Manepg