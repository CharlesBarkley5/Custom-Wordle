import words2 from "../words/2-letter-words.json";
import words3 from "../words/3-letter-words.json";
import words4 from "../words/4-letter-words.json";
import words5 from "../words/5-letter-words.json";
import words6 from "../words/6-letter-words.json";
import words7 from "../words/7-letter-words.json";
import words8 from "../words/8-letter-words.json";
import words9 from "../words/9-letter-words.json";
import words10 from "../words/10-letter-words.json";
import words11 from "../words/11-letter-words.json";
import words12 from "../words/12-letter-words.json";
import words13 from "../words/13-letter-words.json";
import words14 from "../words/14-letter-words.json";
import words15 from "../words/15-letter-words.json";

function Beginning(props) {
  var starter = [
    words2,
    words3,
    words4,
    words5,
    words6,
    words7,
    words8,
    words9,
    words10,
    words11,
    words12,
    words13,
    words14,
    words15,
  ];
  var wordLists = [];
  var list = [];
  var current = "";
  for (var n = 0; n < starter.length; n++) {
    list = [];
    current = starter[n];
    for (var m = 0; m < current.length; m++) {
      list.push(current[m].word);
    }
    wordLists.push(list);
  }
  function changeStatus() {
    if (props.game.status === "1") {
      var size = props.game.board[0].length;
      var words = wordLists[size - 2];
      var randomWord =
        words[parseInt(Math.random() * words.length)].toUpperCase();
      var game = props.game;
      props.setGame({});
      props.setGame({
        ...game,
        word: randomWord,
        status: "2",
        multiples: [],
        wordList: words,
      });
      console.log("Random word: " + randomWord);
      var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var count = 0;
      var newMult = props.game.multiples;
      for (var i = 0; i < alphabet.length; i++) {
        count = randomWord.split(alphabet[i]).length - 1;
        if (count > 1) {
          newMult = props.game.multiples;
          newMult.push(alphabet[i]);
          props.setGame({ ...props.game, multiples: newMult });
        }
      }

    } else {
      props.setGame({
        status: "1",
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
      props.setKeyInfo({
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
      });
    }
  }

  function subtractColumnHandler() {
    if (props.game.board[0].length > 2) {
      var newBoard = props.game.board;
      for (var i = 0; i < newBoard.length; i++) {
        newBoard[i].pop();
      }
      props.setGame({ ...props.game, board: newBoard });
    }
  }

  function addColumnHandler() {
    if (props.game.board[0].length < 15) {
      var newBoard = props.game.board;
      for (var i = 0; i < newBoard.length; i++) {
        newBoard[i].push(["", "#afc0c3"]);
      }
      props.setGame({ ...props.game, board: newBoard });
    }
  }

  function subtractRowHandler() {
    if (props.game.board.length > 1) {
      var newBoard = props.game.board;
      newBoard.pop();
      props.setGame({ ...props.game, board: newBoard });
    }
  }

  function addRowHandler() {
    if (props.game.board.length < 15) {
      var newBoard = props.game.board;
      newBoard.push(Array(props.game.board[0].length).fill(["", "#afc0c3"]));
      props.setGame({ ...props.game, board: newBoard });
    }
  }

  return (
    <>
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            fontWeight: "bold",
            fontFamily: "Open Sans",
            fontSize: "20px",
          }}
          onClick={changeStatus}
        >
          {props.game.status === "1" && <>Start Game</>}
          {props.game.status === "2" && <>Restart Game</>}
          {props.game.status === "5" && <>Restart Game</>}
          {props.game.status === "3" && <>Start New Game</>}
          {props.game.status === "4" && <>Start New Game</>}
        </button>
      </div>
      &nbsp; &nbsp; &nbsp;
      {props.game.status === "1" && (
        <div
          style={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          
        >
          &nbsp; &nbsp;
          <button onClick={subtractColumnHandler} type="button">
            -
          </button>
          &nbsp;
          {"Word size (column count): "}
          {props.game.board[0].length}&nbsp;
          <button onClick={addColumnHandler} type="button">
            +
          </button>
          &nbsp; &nbsp;
          <button onClick={subtractRowHandler} type="button">
            -
          </button>
          &nbsp;
          {"Amount of tries (row count): "}
          {props.game.board.length}&nbsp;
          <button onClick={addRowHandler} type="button">
            +
          </button>
        </div>
      )}
    </>
  );
}

export default Beginning;
