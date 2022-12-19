import { useState, useEffect } from "react";
import { Pressable } from "react-native";

function Key(props) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function addLetter() {
    var letter = props.content;
    if (
      props.game.status === "2" &&
      props.game.colIndex < props.game.board[0].length
    ) {
      var newBoard = JSON.parse(JSON.stringify(props.game.board));
      newBoard[props.game.rowIndex][props.game.colIndex][0] = letter;
      props.setGame({
        ...props.game,
        board: newBoard,
        colIndex: props.game.colIndex + 1,
        status: "2",
      });
    }
  }
  function addLetterClick() {
    if (!clickWait) {
      addLetter();
      setClickWait(true);
      sleep(500);
      setClickWait(false);
    }
  }

  useEffect(() => {
    const helper = (event) => {
      if (
        (props.game.status === "2" || props.game.status === "5") &&
        (event.key === props.content ||
          event.key === props.content.toLowerCase())
      ) {
        addLetterClick();
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
        width: "35px",
        height: "50px",
        margin: "2px",
        fontSize: "20px",
        color: props.text,
        backgroundColor: props.keyInfo[props.content],
        borderRadius: "6px",
        borderWidth: isActive ? "3px" : "1px",
      }}
      onPressIn={() => {
        setIsActive(true);
      }}
      onPressOut={() => {
        addLetterClick();
        setIsActive(false);
      }}
    >
      <p>{props.content}</p>
    </Pressable>
  );
}

export default Key;
