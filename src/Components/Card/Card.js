import styles from "./Card.module.css";
import Frontframe from "./FrontFrame/Frontframe";
import Backframe from "./BackFrame/Backframe";
import React,{useRef,useEffect,useState} from "react";
import SpinContext from "../../store/SpinContext";
import UserContext from "../../store/UserContext";
function Card() {
  const cardRef = useRef(null)
  const [faceState, setfaceState] = useState("front")

  useEffect(() => {
    if(faceState == "back"){
        cardRef.current.style.transform = 'rotateY(180deg)';
    }

    else if(faceState == "front"){
      cardRef.current.style.transform = 'rotateY(0deg)';
    }
  
  }, [faceState])

  return (
    <SpinContext.Provider 
    value={{
      faceState : faceState,
      setfaceState : setfaceState
    }}
    >
    <div className={styles.Card} ref = {cardRef}>
    <Frontframe></Frontframe>
    <Backframe></Backframe>
    </div>
    </SpinContext.Provider>
  );
}

export default Card;
