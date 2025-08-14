import { useRef, useState } from "react";
import "./input-section.css";

function InputUserInfo({ inputData }) {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const [flash, setFlash] = useState(false);
  const startAni = () => {
    setFlash(true);
  };

  const clickHandle = () => {
    if (
      nameRef.current.value.trim() === "" ||
      !nameRef.current.value ||
      ageRef.current.value < 6
    ) {
      alert("Input wrong information.");
      return;
    }
    const name = nameRef.current.value.trim();
    const age = ageRef.current.value;
    inputData(name, age);
    alert("Added.");
  };

  return (
    <section id="input-section">
      <div>
        <label htmlFor="user-name">Name:</label>
        <input
          type="text"
          minLength={1}
          required
          id="user-name"
          ref={nameRef}
          placeholder="Input your name here..."
        />
      </div>{" "}
      <div>
        <label htmlFor="user-age">Age:</label>
        <input
          type="number"
          min={6}
          required
          id="user-age"
          ref={ageRef}
          placeholder="Input your age here..."
        />
      </div>
      <button
        id="add-butt"
        onClick={() => {
          startAni();
          clickHandle();
        }}
        className={flash ? "animate" : ""}
        onAnimationEnd={() => {
          setFlash(false);
        }}
      >
        Add
      </button>
    </section>
  );
}
export default InputUserInfo;
