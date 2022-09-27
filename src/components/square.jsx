import React, { Component } from "react";
import plot from "./plot";

class Square extends Component {
  drawClass = (value) => {
    if (value === "X") return "draw-x";
    else if (value === "O") return "draw-o";
  };

  squareClasses = (value) => {
    let classes = "square ";
    classes += "square-" + value;
    console.log(classes);
    return classes;
  };

  render() {
    //console.log(this.props);
    return (
      <button
        className={this.squareClasses(this.props.num)}
        onClick={this.props.onPress}
      >
        <div className={this.drawClass(this.props.value)}>
          <div className="line-container">
            <span className="line line-left"></span>
            <span className="line line-right"></span>
          </div>
        </div>
      </button>
    );
  }
}

export default Square;
