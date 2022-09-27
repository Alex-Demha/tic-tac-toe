import React, { Component } from "react";

class Square extends Component {
  drawClass = (value) => {
    if (value === "X") return "draw-x";
    else if (value === "O") return "draw-o";
  };

  render() {
    //console.log(this.props);

    return (
      <button className="square" onClick={this.props.onPress}>
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
