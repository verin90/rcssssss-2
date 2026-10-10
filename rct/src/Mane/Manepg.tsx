import { useState } from 'react'
import {Photo} from '../Photo.ts'
import styles from './Manepg.module.scss'
import { NavLink, Link } from 'react-router-dom'

function Manepg() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className={styles.section1}>
        <div className={styles.text}>

        </div>
        <div className={styles.img}>
          <img src={Photo.tower} alt="" />
        </div>
    </section>
    </>
  )
}

export default Manepg