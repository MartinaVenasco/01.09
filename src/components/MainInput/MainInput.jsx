import { useEffect, useState } from "react";
import {RiSearchLine} from 'react-icons/ri'
import "./index.css";

const MainInput = ({
  inputValue,
  setInputValue,
  isRendered,
  onFormsubmit,
}) => {
  // const inputRef = useRef(null);
  const [isInputVisibile, setInputVisibility] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () =>
    (window.scrollY >= 700)
      ? setInputVisibility(true)
      : setInputVisibility(false))}, [])
    
    // console.log(inputRef.current.value)
    // inputRef.current.focus()
  // }, []);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onFormsubmit(!isRendered);
  };

  const onHandleInput = (e) => setInputValue(e.target.value);

  // console.log(inputValue);

  return (
    <form className="MainInput" onSubmit={onHandleSubmit}> {
      isInputVisibile && (
        <>
      <input
        value={inputValue}
        onChange={onHandleInput}
        maxLength="6"
        placeholder="search by ID: 324688"
        type="text"
      />
      <button type="submit"> <RiSearchLine size={16}/></button>
      </>
        )
      }
    </form>
  );
};


export default MainInput;
