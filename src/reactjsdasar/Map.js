import React from "react";

const foods = [
  {
    name: "Soto",
    price: 12000,
  },
  {
    name: "Bakso",
    price: 10000,
  },
  {
    name: "Mie Ayam",
    price: 16000,
  },
  {
    name: "Nasi Goreng",
    price: 15000,
  },
];

// (REDUCE)
const total_pay = foods.reduce(
  (total_price, food) => total_price + food.price,
  0
);

const Map = () => {
  return (
    <div>
      {/* (MAP) */}
      <h2>Map</h2>
      <ul>
        {foods.map((food) => (
          <li>
            {food.name} - Price {food.price}
          </li>
        ))}
      </ul>
      {/* (FILTER) */}
      <h2>Map filter harga yang lebih dari 11000</h2>
      <ul>
        {foods
          .filter((food) => food.price > 11000)
          .map((food) => (
            <li>
              {food.name} - Price {food.price}
            </li>
          ))}
      </ul>

      <h3>Total Pay : {total_pay}</h3>
    </div>
  );
};

export default Map;
