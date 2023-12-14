import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { context } from "../utils/context";
import "./battle.css";
import BattleCard from "./BattleCard";
import PreviousCard from "./PreviousCard";
import UnknowCard from "./UnknowCard";
const Battle = () => {
  const { pokemon } = useContext(context);
  const [numberOfCards, setNumberOfCards] = useState();
  const [number, setNumber] = useState();
  const [error, setError] = useState(false);

  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom : more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  // const checkwinner = () => {
  //   if (player1?.length === 0) {
  //     setWinner("player 2");
  //   } else if (player2?.length === 0) {
  //     setWinner("player 1");
  //   }
  // };
  const checkResult = (data) => {
    const cards = [player1[0], player2[0]];
    setPreviousCard(cards);
    if (player1[0].data[data] > player2[0].data[data]) {
      player1.shift();
      player2.shift();
      setPlayer2([...player2]);
      setPlayer1([...player1, ...cards]);
      setPlayer1Turn(true);
    } else {
      player1.shift();
      player2.shift();
      setPlayer1([...player1]);
      setPlayer2([...player2, ...cards]);
      setPlayer1Turn(false);
    }

    // console.log("player2", player2);
    // console.log("player1", player1);
  };

  const [resetBoard, setResetBoard] = useState(false);
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [player1Turn, setPlayer1Turn] = useState(true);
  // const [winner, setWinner] = useState();
  const [previousCard, setPreviousCard] = useState(null);

  const resetGame = () => {
    setNumberOfCards(null);
    setResetBoard(!resetBoard);
  };
  const totalCardHandler = (e) => {
    e.preventDefault();
    if (isNaN(number)) {
      return setError(true);
    }

    setNumberOfCards(number);
  };
  useEffect(() => {
    const array1 = pokemon.length > 9 ? getRandom(pokemon, number) : [];
    setPlayer1(array1);
    const array2 = pokemon.length > 9 ? getRandom(pokemon, number) : [];
    setPlayer2(array2);
  }, [resetBoard, numberOfCards]);

  // console.log(previousCard);
  console.log("player2", player2);
  console.log("player1", player1);
  console.log(numberOfCards);
  return (
    <>
      {numberOfCards ? (
        <div>
          <div className="top">
            <div className="top-left">
              <div>card remaining:{player1?.length}</div>
              <h2>player 1</h2>
            </div>

            <div className="middle">
              <div className="title">previous cards</div>
              <div className="previous-cards">
                {previousCard &&
                  previousCard.map((ele) => (
                    <PreviousCard key={ele.id} data={ele.data} />
                  ))}
              </div>
            </div>
            <div className="top-right">
              <div>{player2?.length}:card remaining</div>
              <h2>player 2</h2>
            </div>
          </div>
          {player1?.length > 0 && player2?.length > 0 ? (
            <div className="btw">
              <div className="left">
                {player1Turn ? (
                  <BattleCard player1={player1} checkResult={checkResult} />
                ) : (
                  <UnknowCard />
                )}
              </div>

              <div className="right">
                {!player1Turn ? (
                  <BattleCard player2={player2} checkResult={checkResult} />
                ) : (
                  <UnknowCard />
                )}
              </div>
            </div>
          ) : (
            <div className="winner-parent">
              <div className="winner">
                {`${player1Turn ? "player 1" : "player 2"} is the winner`}
              </div>
              <button onClick={resetGame} className="rst-game">
                play again
              </button>
            </div>
          )}

          <Link to="/">
            <button className="go-back">go back</button>
          </Link>
        </div>
      ) : (
        <div className="form">
          <form onSubmit={totalCardHandler}>
            <h2>Please enter the number of card</h2>
            <input
              type="text"
              placeholder="Enter the number of card "
              className="total-card"
              onChange={(e) => {
                setNumber(e.target.value);
                setError(false);
              }}
            />
          </form>
          {error && <p>Please enter a valid number</p>}
        </div>
      )}
    </>
  );
};

export default Battle;
