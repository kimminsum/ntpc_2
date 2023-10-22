import styles from "./Success.module.css";
import  ReactDOM  from "react-dom";
import React, { useRef,useEffect } from "react";
const Success = () => {

  const successRef = useRef(null)

  useEffect(() => {

    requestAnimationFrame(() => {
      successRef.current.style.transform = `translateY(0px)`;
      successRef.current.style.opacity = 1;
    });

  }, [])

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.body}>
        <div className={styles.background}/>
          <div className={styles.successFrame} ref = {successRef}>
            <img className={styles.icSuccess} src="/images/ic-success.png" />
            <div className={styles.title}>로그인 성공!</div>
            <div className={styles.message}>멋져요~! 시험기간에 수고 많으셨습니다!</div>
          </div>
          </div>
          ,
        document.getElementById("message-root")
      )}
    </>
  );
};

export default Success;
