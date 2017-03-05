import React from 'react'
import styles from './styles.module.css'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const Header = () => {
  return (
    <nav className={styles.navigationFixed}>
      <ul className={styles.navigation}>
        <li className={styles.logo}>
          <Link to="/"><img src="../../utils/img/Kazimir_sygnet.png"/></Link>
        </li>
        <li><Link to="/map"><img src="../../utils/img/map_icon.svg"/></Link></li>
      </ul>
    </nav>

  )
}

export default Header;
