import { useState, useEffect } from "react";
import { Pressable } from "react-native";

function BigKey(props) {
  function checkMult(letter) {
    var color = "#bbb36e";
    var count = 0;
    for (var i = 0; i < props.word.length; i++) {
      if (props.word[i] === letter) {
        count += 1;
      }
    }

    var tempCount = 0;

    for (var k = 0; k < props.game.length; k++) {
      tempCount = 0;
      for (var j = 0; j < props.game[0].length; j++) {
        if (
          props.game[k][j][0] === letter &&
          props.game[k][j][1] === "#5da653"
        ) {
          tempCount += 1;
        }
      }
      if (count === tempCount) {
        color = "#5da653";
      }
    }
    return color;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function handlerClick() {
    if (!clickWait) {
      handler();
      setClickWait(true);
      sleep(500);
      setClickWait(false);
    }
  }

  function handler() {
    if (props.content === "ENTER") {
      if (
        (props.game.status === "2" || props.game.status === "5") &&
        props.game.colIndex === props.game.board[0].length
      ) {
        var word = props.game.word;
        var rowIndex = props.game.rowIndex;
        var entered = "";
        for (var i = 0; i < props.game.board[0].length; i++) {
          entered = entered + props.game.board[rowIndex][i][0];
        }

        if (!props.game.wordList.includes(entered.toLowerCase())) {
          props.setGame({ ...props.game, status: "5" });
          setTimeout(() => props.setGame({ ...props.game, status: "2" }), 1000);
        } else {
          var table = props.game.word.split("");
          for (i = 0; i < props.game.board[0].length; i++) {
            var newBoard = props.game.board;
            var letter = newBoard[rowIndex][i][0];
            var color = "";
            var newKeyInfo = props.keyInfo;
            var oldColor = newKeyInfo[letter];
            var index = 0;
            if (word.includes(letter) && table.includes(letter)) {
              index = table.indexOf(letter);
              if (index !== -1) {
                table.splice(index, 1);
              }
              if (letter === word[i]) {
                color = "#5da653";
                newBoard[rowIndex][i][1] = color;
                props.setGame({ ...props.game, board: newBoard, status: "2" });
              } else {
                color = "#bbb36e";
                newBoard[rowIndex][i][1] = color;
                props.setGame({ ...props.game, board: newBoard, status: "2" });
              }
            } else {
              color = "grey";
              newBoard[rowIndex][i][1] = color;
              props.setGame({ ...props.game, board: newBoard, status: "2" });
            }

            if (oldColor === "#afc0c3" || oldColor === "grey") {
              newKeyInfo[letter] = color;
            } else if (oldColor === "#bbb36e") {
              if (color === "#5da653") {
                newKeyInfo[letter] = color;
              }
            }

            props.setKeyInfo(newKeyInfo);
          }
          newKeyInfo = props.keyInfo;
          for (i = 0; i < props.game.multiples; i++) {
            if (entered.includes(props.game.multiples[i])) {
              if (props.word.includes(props.game.multiples[i])) {
                if (checkMult(letter)) {
                  newKeyInfo[letter] = "#5da653";
                } else {
                  newKeyInfo[letter] = "#bbb36e";
                }
              } else {
                newKeyInfo[letter] = "grey";
              }
            }
          }
          var won = true;
          for (var k = 0; k < props.game.board[0].length; k++) {
            if (props.game.board[props.game.rowIndex][k][1] !== "#5da653") {
              won = false;
              break;
            }
          }
          if (won) {
            props.setGame({ ...props.game, status: "3" });
          } else if (props.game.rowIndex === props.game.board.length - 1) {
            props.setGame({ ...props.game, status: "4" });
          } else {
            props.setGame({
              ...props.game,
              status: "2",
              rowIndex: props.game.rowIndex + 1,
              colIndex: 0,
            });
          }
        }
      }
    } else {
      if (props.game.status === "2" || props.game.status === "5") {
        if (props.game.colIndex !== 0) {
          newBoard = props.game.board;
          newBoard[props.game.rowIndex][props.game.colIndex - 1][0] = "";
          props.setGame({
            ...props.game,
            status: "2",
            board: newBoard,
            colIndex: props.game.colIndex - 1,
          });
        }
      }
    }
  }

  useEffect(() => {
    const helper = (event) => {
      console.log("event registered! Key down: " + event.key);
      if (
        (props.game.status === "2" || props.game.status === "5") &&
        ((event.key === "Backspace" && props.content === "DELETE") ||
          (event.key === "Enter" && props.content === "ENTER"))
      ) {
        handlerClick();
      }
    };
    document.addEventListener("keydown", helper);
    return () => document.removeEventListener("keydown", helper);
  });

  const [isActive, setIsActive] = useState(false);
  const [clickWait, setClickWait] = useState(false);

  return (
    <Pressable
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90px",
        height: "50px",
        margin: "2px",
        fontSize: "20px",
        color: props.text,
        backgroundColor: props.color,
        borderRadius: "6px",
        borderWidth: isActive ? "3px" : "1px",
      }}
      onPressIn={() => {
        setIsActive(true);
      }}
      onPressOut={() => {
        handlerClick();
        setIsActive(false);
      }}
    >
      <p>{props.content}</p>
    </Pressable>
  );
}

export default BigKey;
