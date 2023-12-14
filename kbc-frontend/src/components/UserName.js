import React, { useRef } from "react";
import "./User.css";
import { useNavigate } from "react-router-dom";
const UserName = ({ setUserName }) => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleUserName = () => {
    if (inputRef.current.value.trim().length < 1) {
      return;
    }
    setUserName(inputRef.current.value);
  };
  const addQuestions = () => {
    navigate("/create-question");
  };
  return (
    <div className="start">
      <input
        placeholder="Enter Your Name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleUserName}>
        Start
      </button>
      <button className="startButton" onClick={addQuestions}>
        Wants to add questions?
      </button>
    </div>
  );
};

export default UserName;
