import styles from './Avatar.module.css';

import React from 'react';

export default function Avatar(props) {
  return (
    <div className={styles.avatar}>
      <img src={props.src} alt='user avatar' />
    </div>
  );
}
