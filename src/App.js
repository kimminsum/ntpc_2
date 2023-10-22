import styles from "./App.module.css";
import Warning from "./Components/Warning/Warning";
import Success from "./Components/Success/Success";
import Card from "./Components/Card/Card";
import UserContext from "./store/UserContext";
import ErrorContext from "./store/ErrorContext";
import React,{useState} from "react";
function App() {

   const [errorMessage, seterrorMessage] = useState(null)
   const [success, setsuccess] = useState(false)
   const [userDatas, setuserDatas] = useState({})

  return (
    <UserContext.Provider
      value={{
        userDatas: userDatas,
        setuserDatas : setuserDatas
      }}
    >
      <ErrorContext.Provider
      value ={{
        errorMessage : errorMessage,
        seterrorMessage : seterrorMessage,
        setsuccess : setsuccess,
      }}
      >
        <div className={styles.App}>
        {errorMessage != null && <Warning errorMessage={errorMessage}></Warning>}
        {success && <Success></Success>}
          <img
            className={styles.background}
            src="images/img-background.png"
          ></img>
          <Card></Card>
        </div>
      </ErrorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
