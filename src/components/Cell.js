function Cell(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        margin: "3px",
        fontSize: "22px",
        fontWeight: "bold",
        border: "solid black",
        borderWidth: "2px",
        color: props.text,
        backgroundColor: props.color,
      }}
    >
      <p>{props.content}</p>
    </div>
  );
}

export default Cell;
