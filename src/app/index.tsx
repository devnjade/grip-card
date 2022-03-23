import React from "react";
import styles from './index.module.scss'
import gsap from "gsap";

const App: React.FC = () => {
  
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <div className={styles.header}>
          <img className={styles.img} src="https://trygrip.co/_nuxt/logo.svg" alt="logo" />
          <p className={styles.starter}><span>you</span> only</p>
          <p className={styles.starter}>need one</p>
          <p className={styles.starter}><span className={styles.blue}>grip</span> card</p>
          {/* <div className={styles.auth}>
            <a href="">sign up</a>
            <a href="">Log in</a>
          </div> */}
        </div>
        <div className={styles.footer}>
          <a>About</a>
          <a>Careers</a>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Help</a>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.content}>
          <img className={styles.img2} src="https://res.cloudinary.com/dudhmrdin/image/upload/v1647999057/Group_3_1_lb8en5.png" alt="card_1" />
          <img className={styles.img1} src="https://res.cloudinary.com/dudhmrdin/image/upload/v1647999094/Group_5_2_y48fkm.png" alt="card_2" />
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.barcode}>
          <p>Scan to get grip now!</p>
          <img src="https://res.cloudinary.com/dudhmrdin/image/upload/v1647999864/qr_armbph.png" alt="qr"/>
        </div>
      </div>
    </div>
  );
}

export default App;