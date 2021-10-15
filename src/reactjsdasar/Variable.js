import React from "react";

let harga = 1000;
if (true) {
  harga = 10000;
}

const Variable = () => {
  return (
    <div>
      <h2>Harga {harga}</h2>
    </div>
  );
};

export default Variable;
