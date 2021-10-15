import React, { Component } from "react";

export default class Operan extends Component {
  //   changeFood(new_food) {
  //     this.setState({
  //       makanan: new_food,
  //     });
  //   }

  render() {
    return (
      <div>
        <h2>Operan state yang menjadi props : {this.props.makanan}</h2>
        <button onClick={() => this.props.changeFood("Dugong")}>
          Ganti makanan
        </button>
      </div>
    );
  }
}
