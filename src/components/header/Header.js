import React from 'react';

import logo from '../../images/icons/coruja-72x72.png';
import styles from './styles.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <figure>
        <img src={logo} alt="Logo brand" />
      </figure>
      <h1>AgilePoker</h1>
    </div>
  </header>
);

export default Header;
