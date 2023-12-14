import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import "./Quiz.css";
const Quiz = ({
  data,
  setQuestionNumber,
  questionNumber,
  tOut,
  setTOut,
  setTimeRunning,
}) => {
  console.log(data);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnwer] = useState(null);
  const [className, setClassname] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleAnswer = (ans) => {
    setTimeRunning(false);
    console.log(ans);
    setSelectedAnwer(ans);
    setClassname("answer active");
    // setTimeout(() => {
    //   setClassname(ans.correct ? "answer correct" : "answer wrong");
    // }, 3000);
    delay(3000, () =>
      setClassname(ans.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
      if (ans.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((pre) => pre + 1);
          setClassname(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTOut(true);
        });
      }
    });
  };
  // useEffect(() => {
  //   letsPlay();
  // }, [letsPlay]);

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ele, i) => (
          <div
            className={selectedAnswer === ele ? className : "answer"}
            key={i}
            onClick={() => handleAnswer(ele)}
          >
            {ele.text}
          </div>
        ))}
        {/* <div className="answer"> Sleeping </div>
        <div className="answer"> Working </div>
        <div className="answer"> Playing </div>
        <div className="answer"> Asking others to do his work</div> */}
      </div>
    </div>
  );
};

export default Quiz;
