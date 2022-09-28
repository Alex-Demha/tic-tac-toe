import React, { Component } from "react";

class Plot extends Component {
  state = {
    plotClasses: "plot ",
  };
  setplotClasses = () => {
    this.setState({
      plotClasses: this.state.plotClasses + "plot-button-clicked ",
    });
  };
  render() {
    return (
      <div className={this.state.plotClasses}>
        <div className="plot-text">
          in a world where humans are Xs and Os, the Os grow ever so jealous
          over the fact they're under-represented and under-appreciated, they
          strongly feel like they should also be on multiple game
          controllers,after all why should the Xs be present on Playstation's,
          Xbox's, and even Nintendo's game pads and controllers, while the Os
          are subjected to only Playstaion's? the battle ahead will determine
          the rest of their fate... so choose your side carefully. (O's play
          with the disadvantage of being second to play)
        </div>

        <button className="plot-button" onClick={() => this.setplotClasses()}>
          Start the War
        </button>
      </div>
    );
  }
}

export default Plot;
