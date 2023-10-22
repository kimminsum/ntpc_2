import styles from "./Wraning.module.css";
import  ReactDOM  from "react-dom";
import React, { useContext,useRef,useEffect } from "react";
import ErrorContext from "../../store/ErrorContext";
const Warning = ({ errorMessage }) => {

  const errorRef = useRef(null)

  const errorCtx = useContext(ErrorContext)

  useEffect(() => {

    requestAnimationFrame(() => {
      errorRef.current.style.transform = `translateY(0px)`;
      errorRef.current.style.opacity = 1;
    });

  }, [errorCtx.errorMessage])

  const handleClose = () =>{
      errorCtx.seterrorMessage(null);
  }

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.body}>
        <div className={styles.background}/>
          <div className={styles.errorFrame} ref = {errorRef}>
            <img className={styles.closeButton} src="/images/ic-close.png" onClick={handleClose}/>
            <img className={styles.icWarning} src="/images/ic-warning.png" />
            <div className={styles.title}>이런! 에러가 발생했어요</div>
            <div className={styles.message}>{errorMessage}</div>
          </div>
          </div>
          ,
        document.getElementById("message-root")
      )}
    </>
  );
};

export default Warning;
