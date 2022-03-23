import React from "react";
import { useApp } from "./hooks";
import styles from './index.module.scss'

const App: React.FC = () => {
  const { 
    cardOneRef,
    cardTwoRef,
    textRef,
    textRef2,
    textRef3,
    isMobile,
    onHover,
    onLeave,
  } = useApp();

  if (isMobile) {
    return (
      <div className={styles.under}>
        <p>Not Responsive</p>
      </div>
    )
  } else {
    return (
      <div className={styles.main}>
        <div className={styles.first}>
          <div className={styles.header}>
            <img className={styles.img} src="https://res.cloudinary.com/dudhmrdin/image/upload/v1648059281/logo_1_3_o3dmdj.png" alt="logo" />
            <div className={styles.cover}>
              <p ref={textRef} className={styles.starter}><span>you</span> only</p>
            </div>
            <div className={styles.cover}>
              <p ref={textRef2} className={styles.starter}>need one</p>
            </div>
            <div className={styles.cover}>
              <p ref={textRef3} className={styles.starter}><span className={styles.blue}>grip</span> card</p>  
            </div>
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
            <img 
              ref={cardOneRef} 
              onMouseEnter={onHover} 
              onMouseLeave={onLeave} 
              className={styles.img2} 
              src="https://res.cloudinary.com/dudhmrdin/image/upload/v1647999057/Group_3_1_lb8en5.png" 
              alt="card_1" 
            />
            <img 
              ref={cardTwoRef} 
              onMouseEnter={onHover} 
              onMouseLeave={onLeave} 
              className={styles.img1} 
              src="https://res.cloudinary.com/dudhmrdin/image/upload/v1647999094/Group_5_2_y48fkm.png" 
              alt="card_2" 
            />
          </div>
        </div>
        <div className={styles.third}>
          <div className={styles.barcode}>
            <p>Scan to get grip now!</p>
            <img 
              onMouseEnter={onHover} 
              onMouseLeave={onLeave} 
              src="https://res.cloudinary.com/dudhmrdin/image/upload/v1647999864/qr_armbph.png" 
              alt="qr"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;