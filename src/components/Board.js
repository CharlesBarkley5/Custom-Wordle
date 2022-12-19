import Cell from "./Cell.js";

function Board(props) {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  return props.game.board.map((row) => (
    <div
      key={makeid(15)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {row.map((cell) => (
        <Cell
          text="white"
          content={cell[0]}
          color={cell[1]}
          style={{ display: "inline" }}
          key={makeid(15)}
        />
      ))}
    </div>
  ));
}

export default Board;
