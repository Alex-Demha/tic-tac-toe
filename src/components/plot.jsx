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
          in a world where humans are Xs and Os, the Os grow ever so jelous over
          the fact they're under-represnted and under-appreciated, they feel
          like they should also be on multiple game controllers, why should the
          X be present on Playstations, Xboxs, and even Nintendos Controllers,
          while the Os are subjected to only Playstaion? the battle ahead will
          determine the rest of their fate... so choose your side carrefully.
        </div>

        <button className="plot-button" onClick={() => this.setplotClasses()}>
          Start the War
        </button>
      </div>
    );
  }
}

export default Plot;
