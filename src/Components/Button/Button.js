import styles from "./Button.module.css"
import React,{useRef, useEffect} from 'react';

function Button({iconSrc,title,backgroundColor,titleColor,onClick}) {

 const buttonRef = useRef(null);
 
 useEffect(() => {
 buttonRef.current.style.backgroundColor = backgroundColor
 buttonRef.current.style.color = titleColor
 }, [])

  return (
<div className={styles.registerbutton} ref = {buttonRef} onClick={onClick}>
<div className={styles.placeholder}>
  <img className={styles.icIcon} alt="" src={iconSrc} />
  <div className={styles.textWrapper}>
    <div className={styles.text}>{title}</div>
  </div>
</div>
</div>
  );
}

export default Button;
