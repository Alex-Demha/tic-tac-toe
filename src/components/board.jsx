import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tic: ["", "", "", "", "", "", "", "", ""],
      current: "X",
      win: false,
      draw: false,
    };
  }
  renderSquare = (i) => {
    return <Square value={i}></Square>;
  };

  checkWinner = (e) => {
    //e is the array containing X's and O's.
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    let i;
    for (i = 0; i < 8; i++) {
      const [a, b, c] = winners[i];
      if (e[a] !== "" && e[a] === e[b] && e[a] === e[c]) {
        this.state.current === "X"
          ? this.setState({ current: "X" })
          : this.setState({ current: "O" });
        this.setState({ win: true });
      }
    }

    let wc = 0; //win counter
    for (i = 0; i < 9; i++) {
      if (e[i] !== "") {
        wc++;
      }
    }

    if (wc === 9) this.setState({ draw: true });
  };

  handlePress = (e) => {
    const array = [...this.state.tic];

    if (array[e] === "" && !this.state.win) {
      array[e] = this.state.current;
      this.setState({ tic: array });
      console.log(array);
      if (this.state.current === "X") this.setState({ current: "O" });
      else this.setState({ current: "X" });
    }
    this.checkWinner(array);
  };

  render() {
    let status = this.state.current;
    let winner = this.state.win ? "the winner is:" + this.state.current : "";
    if (this.state.draw) winner = "It's a DRAW!";
    return (
      <div>
        <div className="status">Next player: {status}</div>
        <div className="board">
          {this.state.values.map((value) => (
            <Square
              key={value}
              onPress={() => this.handlePress(value)}
              value={this.state.tic[value]}
            />
          ))}
        </div>

        <span className="win">{winner}</span>
      </div>
    );
  }
}

export default Board;
