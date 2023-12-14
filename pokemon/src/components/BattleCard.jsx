import React from "react";
import "./battleCard.css";
const BattleCard = ({ player1, player2, checkResult }) => {
  // console.log(player1);
  // console.log(player2);
  // const checkResultHp = () => {
  //   return player1[0].data.hp > player2[0].data.hp;
  // };
  // const checkResultAttack = () => {
  //   return player1[0].data.hp > player2[0].data.hp;
  // };
  // const checkResultdefense = () => {
  //   return player1[0].data.hp > player2[0].data.hp;
  // };
  // const checkResultSpecialAttack = () => {
  //   return player1[0].data.hp > player2[0].data.hp;
  // };
  // const checkResultHpSpecialDefense = () => {
  //   return player1[0].data.hp > player2[0].data.hp;
  // };
  // const checkResultSpeed = () => {
  //   return player1[0].data.hp > player2[0].data.hp;
  // };
  console.log(player1, ": player 1");
  console.log(player2, ": player 2");
  return (
    <>
      <div className="crd">
        <h1>
          {player1
            ? player1[0]?.data.name
            : player2
            ? player2[0]?.data.name
            : "dgeded"}
        </h1>
        <img
          src={
            player1
              ? player1[0]?.data.img
              : player2
              ? player2[0]?.data.img
              : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          }
          alt=""
        />
        <h3 onClick={() => checkResult("hp")}>
          hp:
          {player1 ? player1[0]?.data.hp : player2 ? player2[0]?.data.hp : 56}
        </h3>
        <h3 onClick={() => checkResult("attack")}>
          attack:
          {player1
            ? player1[0]?.data.attack
            : player2
            ? player2[0]?.data.attack
            : 67}
        </h3>
        <h3 onClick={() => checkResult("defence")}>
          defence:
          {player1
            ? player1[0]?.data.defence
            : player2
            ? player2[0]?.data.defence
            : 78}
        </h3>
        <h3 onClick={() => checkResult("special_attack")}>
          special-attack:
          {player1
            ? player1[0]?.data.special_attack
            : player2
            ? player2[0]?.data.special_attack
            : 56}
        </h3>
        <h3 onClick={() => checkResult("special_defense")}>
          special-defence:
          {player1
            ? player1[0]?.data.special_defense
            : player2
            ? player2[0]?.data.special_defense
            : 89}
        </h3>
        <h3 onClick={() => checkResult("speed")}>
          speed:
          {player1
            ? player1[0]?.data.speed
            : player2
            ? player2[0]?.data.speed
            : 90}
        </h3>
      </div>
    </>
  );
};

export default BattleCard;
