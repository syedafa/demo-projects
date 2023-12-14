import { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import UserName from "./components/UserName";
// import data from "./data.json";
import money from "./money.json";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [tOut, setTOut] = useState(false);
  const [earned, setEarned] = useState("0 rs");
  const [timeRunning, setTimeRunning] = useState(true);
  const [timer, setTimer] = useState(30);
  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  useEffect(() => {
    setTimeRunning(true);
    questionNumber > 1 &&
      setEarned(
        money.find((amount) => amount.id === questionNumber - 1).amount
      );
  }, [questionNumber]);
  useEffect(() => {
    const getData = async () => {
      const dat = await axios.get("http://localhost:3001/qna");
      setData(getRandom(dat.data, 15));
    };
    getData();
  }, []);
  // console.log();
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {tOut ? (
              <h1 className="amount">
                Hi {userName}, you earned : {earned}
              </h1>
            ) : (
              <>
                <div className="top">
                  {/* <div className="timer">30</div> */}
                  <div className="timer">
                    {timeRunning ? (
                      <Timer
                        setTOut={setTOut}
                        questionNumber={questionNumber}
                        timer={timer}
                        setTimer={setTimer}
                        setTimeRunning={setTimeRunning}
                      />
                    ) : (
                      timer
                    )}
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                    tOut={tOut}
                    setTOut={setTOut}
                    setTimeRunning={setTimeRunning}
                    // timer={timer}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {/* <li className="moneyListItem active">
            <span className="moneyListNumber">1</span>
            <span className="moneyListAmount">1000 rs</span>
          </li> */}
              {money
                .sort((a, b) => b.id - a.id)
                .map((ele) => (
                  <li
                    className={
                      questionNumber === ele.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                    key={ele.id}
                  >
                    <span className="moneyListNumber">{ele.id}</span>
                    <span className="moneyListAmount">{ele.amount}</span>
                  </li>
                ))}
              {/* <li className="moneyListItem">
            <span className="moneyListNumber">2</span>
            <span className="moneyListAmount">2000 rs</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">3</span>
            <span className="moneyListAmount">5000 rs</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">4</span>
            <span className="moneyListAmount">10000 rs</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">5</span>
            <span className="moneyListAmount">20000 rs</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">6</span>
            <span className="moneyListAmount">50000 rs</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">7</span>
            <span className="moneyListAmount">100000 rs</span>
          </li>
          <li className="moneyListItem">
            <span className="moneyListNumber">8</span>
            <span className="moneyListAmount">500000 rs</span>
          </li> */}
            </ul>
          </div>
        </>
      ) : (
        <UserName setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
