import Button from "@restart/ui/esm/Button";
import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ foods, updateData, deleteData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Food Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {foods.map((food, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{food.name}</td>
              <td>{food.description}</td>
              <td>Rp. {food.price}</td>
              <td>
                <Button
                  className="btn btn-warning mr-2"
                  onClick={() => updateData(food.id)}
                >
                  Update
                </Button>
                <Button
                  className="btn btn-danger ml-2"
                  onClick={() => deleteData(food.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
