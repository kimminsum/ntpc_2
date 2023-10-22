import styles from "./InputField.module.css"
import React,{forwardRef,useImperativeHandle,useState} from "react";
const InputField = forwardRef((props,ref) =>{

  const [inputValue, setinputValue] = useState("")

  const clearValue = () =>{
    setinputValue("");
  }

  const handleInputChange = (e) =>{
    setinputValue(e.target.value)
  }

  useImperativeHandle(
    ref,
    () => {
      return{
        inputValue : inputValue,
        clearValue : clearValue
      }
    },
  )

  return (
    <input className={styles.input} placeholder={props.name} onChange={handleInputChange} ref = {ref} value={inputValue}/>
  );
}) 

export default InputField;

