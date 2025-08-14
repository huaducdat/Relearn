import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import InputUserInfo from "./components/InputInfo";
import OutPutInfo from "./components/OutputInfo";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const inputInfo = (inputName, inputAge) => {
    setUserInfo((prev) => [
      ...prev,
      { name: inputName, age: Number(inputAge) },
    ]);
  };
  const removeUser = (removeIndex) => {
    setUserInfo((prev) => prev.filter((_, index) => index !== removeIndex));
    alert('Removed.');
  };
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <>
      <InputUserInfo inputData={inputInfo} />
      <OutPutInfo userList={userInfo} removeAction={removeUser} />
    </>
  );
}

export default App;
