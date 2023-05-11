import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

const Navbar = () => {
  return (
    <>
      <ul className={style.ul}>
        <li className={style.li}><Link className={style.link} to='/'>Home</Link></li>
        <li className={style.li}><Link className={style.link} to='/basket'>Basket</Link></li>
      </ul>
    </>
  )
}

export default Navbar