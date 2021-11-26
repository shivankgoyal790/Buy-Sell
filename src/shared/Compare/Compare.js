import React from "react";
import Table from "react-bootstrap/Table";
function Compare(props) {
  return (

    <div>
        <h1 className="p-5">Comparision List</h1>
      <Table hover className="tableProducts">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price(Rs)</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.compareitems.map((product) => {
            return (
              <tr key={product.id}>
                <td>{Math.trunc(product.id*10000)}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Compare;
