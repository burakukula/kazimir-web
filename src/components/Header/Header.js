import React from 'react'
import styles from './styles.module.css'

const Header = () => {
  return (
    <nav className={styles.navigationFixed}>
      <ul className={styles.navigation}>
        <li className={styles.logo}>
          <a href="#"><img src="../../utils/img/Kazimir_sygnet.png"/></a>
        </li>
        <li className={styles.navLink}><a href="#">About</a></li>
        <li className={styles.navLink}><a href="#">Team</a></li>
        <li className={styles.navLink}><a href="#">Press</a></li>
        <li className={styles.navLink}><a href="#">PL</a></li>
      </ul>
    </nav>

  )
}
export default Header;
