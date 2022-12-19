import Beginning from "./components/Beginning.js";
import Board from "./components/Board.js";
import Keyboard from "./components/Keyboard.js";
import { useState } from "react";

function MainPage(props) {
  const [keyInfo, setKeyInfo] = useState({
    Q: "#afc0c3",
    W: "#afc0c3",
    E: "#afc0c3",
    R: "#afc0c3",
    T: "#afc0c3",
    Y: "#afc0c3",
    U: "#afc0c3",
    I: "#afc0c3",
    O: "#afc0c3",
    P: "#afc0c3",
    A: "#afc0c3",
    S: "#afc0c3",
    D: "#afc0c3",
    F: "#afc0c3",
    G: "#afc0c3",
    H: "#afc0c3",
    J: "#afc0c3",
    K: "#afc0c3",
    L: "#afc0c3",
    Z: "#afc0c3",
    X: "#afc0c3",
    C: "#afc0c3",
    V: "#afc0c3",
    B: "#afc0c3",
    N: "#afc0c3",
    M: "#afc0c3",
  })
  const [game, setGame] = useState({
    status: '1',
    rowIndex: 0,
    colIndex: 0,
    word: "",
    multiples: [],
    wordList: [],
    board: [
      [
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
      ],
      [
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
      ],
      [
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
      ],
      [
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
      ],
      [
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
      ],
      [
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
        ["", "#afc0c3"],
      ],
    ],
  });
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "12px" }}>Custom Wordle</h1>
      <>
        <Beginning game={game} setGame={setGame} keyInfo={keyInfo} setKeyInfo={setKeyInfo}/>
        <br></br>
        <Board game={game} setGame={setGame}/>
        {game.status === '1' && (
          <p style={{ fontSize: "20px", textAlign: "center", margin: "10px" }}>&nbsp;</p>
        )}
        {game.status === '2' && (
          <p style={{ fontSize: "20px", textAlign: "center", margin: "10px" }}>Game Started</p>
        )}
        {game.status === '3' && (
          <p style={{ fontSize: "20px", textAlign: "center", margin: "10px" }}>You Won!</p>
        )}
        {game.status === '4' && (
          <p style={{ fontSize: "20px", textAlign: "center", margin: "10px" }}>Word Was: {game.word}</p>
        )}
        {game.status === '5' && (
          <p style={{ fontSize: "20px", textAlign: "center", margin: "10px" }}>Invalid Word!</p>
        )}
        <Keyboard game={game} setGame={setGame} keyInfo={keyInfo} setKeyInfo={setKeyInfo}/>
      </>
    </>
  );
}

export default MainPage;
