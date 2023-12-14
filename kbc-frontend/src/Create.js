import React, { useState } from "react";
import "./create.css";
import data from "./data.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const navigate = useNavigate();
  const addQuestion = async () => {
    console.log(data);
    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }
    const qna = {
      id: Date.now(),
      question: question,
      answers: shuffle([
        { text: option1, correct: false },
        { text: option2, correct: false },
        { text: option3, correct: false },
        { text: option4, correct: true },
      ]),
    };
    console.log(qna);
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    const res = await axios.post("http://localhost:3001/create-question", qna, {
      "Content-type": "application/json",
    });
    console.log(res);
  };
  const goBackHandler = () => {
    navigate("/");
  };
  return (
    <div className="create">
      <div className="addQuestion">
        <input
          className="quest"
          placeholder="Write your Question"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          value={question}
        />
        <input
          className="ans"
          placeholder="option 1"
          onChange={(e) => {
            setOption1(e.target.value);
          }}
          value={option1}
        />
        <input
          className="ans"
          placeholder="option 2"
          onChange={(e) => {
            setOption2(e.target.value);
          }}
          value={option2}
        />
        <input
          className="ans"
          placeholder="option 3"
          onChange={(e) => {
            setOption3(e.target.value);
          }}
          value={option3}
        />
        <input
          className="ans"
          placeholder="option 4"
          onChange={(e) => {
            setOption4(e.target.value);
          }}
          value={option4}
        />
        <button className="ans" onClick={addQuestion}>
          add
        </button>
        <div>Add your correct answer in the option 4</div>
      </div>
      <button className="ans" onClick={goBackHandler}>
        start the game
      </button>
    </div>
  );
};

export default Create;
