import React, { Component } from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: "Bakso",
      data: {},
      displaySubPage: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  changeFood(value) {
    this.setState({
      food: value,
    });
  }

  render() {
    // console.log("Data : ", this.state.data);
    return (
      <div>
        <h2>{this.state.food}</h2>

        {this.state.displaySubPage && (
          <Sublifecycle changeFood={(value) => this.changeFood(value)} />
        )}

        <button
          onClick={() =>
            this.setState({ displaySubPage: !this.state.displaySubPage })
          }
        >
          Show Sublifecycle Page
        </button>
      </div>
    );
  }
}
