import React, { Component } from "react";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Table";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
      name: "",
      description: "",
      price: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      // Kode di bawah dinamis, ketika isi yg name nanti event.target.value nya name klo deskripsi deskripsi
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // preventDefault() = biar ketika button d klik dia ga relod pagenya
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        foods: [
          ...this.state.foods,
          {
            id: this.state.foods.length + 1,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
          },
        ],
      });
    } else {
      const notSelectedFood = this.state.foods
        .filter((food) => food.id !== this.state.id)
        .map((filterFood) => {
          return filterFood;
        });

      this.setState({
        foods: [
          ...notSelectedFood,
          {
            id: this.state.foods.length + 1,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
          },
        ],
      });
    }

    this.setState({
      id: "",
      name: "",
      description: "",
      price: 0,
    });
  };

  updateData = (id) => {
    const selectedFood = this.state.foods
      .filter((food) => food.id === id)
      .map((filterFood) => {
        return filterFood;
      });

    this.setState({
      id: selectedFood[0].id,
      name: selectedFood[0].name,
      description: selectedFood[0].description,
      price: selectedFood[0].price,
    });
  };

  deleteData = (id) => {
    const newFood = this.state.foods
      .filter((food) => food.id !== id)
      .map((filterFood) => {
        return filterFood;
      });

    this.setState({
      foods: newFood,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel
            foods={this.state.foods}
            updateData={this.updateData}
            deleteData={this.deleteData}
          />
          {/* {...this.state} dia akan import semua statenya */}
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
