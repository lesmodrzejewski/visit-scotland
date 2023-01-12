import { Link } from 'gatsby'
import React from 'react'
import flag from '../images/flag.jpeg'
import * as styles from './navigation.module.css'

const Navigation = () => (
  <div className={styles.navContainer}>
    <div className={styles.logo}>
      <Link to="/">
        <img className={styles.flag} src={flag} alt="scottish flag" />
      </Link>
    </div>
    <ul className={styles.navItemsContainer}>
      <li className={styles.navItem}>
        {' '}
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        {' '}
        <Link to="/attractions/" activeClassName="active">
          Attractions
        </Link>
      </li>
      <li className={styles.navItem}>
        {' '}
        <Link to="/trivias/" activeClassName="active">
          Trivias
        </Link>
      </li>
    </ul>
  </div>
)

export default Navigation
