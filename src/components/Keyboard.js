import Key from "./Key.js";
import BigKey from "./BigKey.js";

function Keyboard(props) {

  function enterHandler() {
    if (
      props.game.status === "2" &&
      props.game.colIndex === props.game.board[0].length
    ) {
      var word = props.word;
      for (var i = 0; i < props.game.board[0].length; i++) {
        var colIndex = props.game.colIndex;
        var newBoard = props.game.board;
        var letter = newBoard[colIndex][i][0];
        var color = "#afc0c3"
        if (letter in word) {
          if (letter === word[i]) {
            color = "#5da653";
            newBoard[colIndex][i][1] = color;
            props.setGame({ ...props.game, board: newBoard });
          } else {
            color = "#bbb36e";
            newBoard[colIndex][i][1] = color;
            props.setGame({ ...props.game, board: newBoard });
          }
        } else {
          color = "grey";
          newBoard[colIndex][i][1] = color;
          props.setGame({ ...props.game, board: newBoard });
        }

        var newKeyInfo = props.keyInfo;
        newKeyInfo[letter] = color;
        props.setKeyInfo(newKeyInfo);
      }
      props.setGame({ ...props.game, rowIndex: props.rowIndex + 1 });
      if (props.game.rowIndex === props.game.board.length) {
        var won = true;
        for (var k = 0; k < props.game.board[0].length; k++) {
          if (
            props.game.board[props.game.board.length - 1][k][1] !== "#5da653"
          ) {
            won = false;
            break;
          }
        }
        if (won) {
          props.setGame({ ...props.game, status: "3" });
        } else {
          props.setGame({ ...props.game, status: "4" });
        }
      }
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Key
          content="Q"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="W"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="E"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="R"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="T"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="Y"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="U"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="I"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="O"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="P"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Key
          content="A"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="S"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="D"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="F"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="G"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="H"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="J"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="K"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="L"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BigKey
          color="#bac9cc"
          text="black"
          content="ENTER"
          onClick={enterHandler}
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
        />
        <Key
          content="Z"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="X"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="C"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="V"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="B"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="N"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <Key
          content="M"
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          text="black"
        />
        <BigKey
          game={props.game}
          setGame={props.setGame}
          keyInfo={props.keyInfo}
          setKeyInfo={props.setKeyInfo}
          color="#bac9cc"
          text="black"
          content="DELETE"
        />
      </div>
    </>
  );
}

export default Keyboard;
