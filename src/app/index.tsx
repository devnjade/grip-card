import React from "react";
import styles from './index.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <div className={styles.header}>

        </div>
        <div className={styles.logo}>

        </div>
        <div className={styles.footer}>

        </div>
      </div>
      <div className={styles.second}>

      </div>
      <div className={styles.third}>
        <div className={styles.barcode}>

        </div>
      </div>
    </div>
  );
}

export default App;