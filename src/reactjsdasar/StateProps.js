import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
    };
  }

  // Syarat kalau mau kirim data function harus di bikin arrow function
  changeFood = (new_food) => {
    this.setState({
      makanan: new_food,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.changeFood("Soto")}>Ganti makanan</button>
        <Operan makanan={this.state.makanan} changeFood={this.changeFood} />
      </div>
    );
  }
}
