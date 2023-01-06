import React from 'react'
import { Link } from 'gatsby'
// import Image from 'gatsby-image'
import flag from '../images/flag.jpeg'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
    <img className={styles.flag} src={flag} alt="Scottish Flag" />

      {/* <span className={styles.logo} /> */}
      <span className={styles.navigationItem}>Scotland</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/attractions/" activeClassName="active">
          Attractions
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/trivias/" activeClassName="active">
          Trivias
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
