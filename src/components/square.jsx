import React, { Component } from "react";

class Square extends Component {
  render() {
    //console.log(this.props);

    return (
      <button className="square" onClick={this.props.onPress}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
