import React from "react";
const data = [
  {
    CustomerID: 1,
    CustomerName: "Alfreds Futterkiste",
    ContactName: "Maria Anders",
    Age: 21,
    Address: "Obere Str. 57",
    City: "Obere Str. 57	Berlin",
    PostalCode: 12209,
    Country: "Germany",
  },
  {
    CustomerID: 2,
    CustomerName: "Ana Trujillo Emparedados y helados",
    ContactName: "Ana Trujillo",
    Age: 23,
    Address: "Avda. de la Constitución 2222",
    City: "México D.F.",
    PostalCode: 52099,
    Country: "Mexico",
  },
  {
    CustomerID: 3,
    CustomerName: "Antonio Moreno Taquería",
    ContactName: "Antonio Moreno",
    Age: 24,
    Address: "Mataderos 2312",
    City: " 	México D.F.",
    PostalCode: 50239,
    Country: "Mexico",
  },
  {
    CustomerID: 4,
    CustomerName: "Alfreds Kontan",
    ContactName: "Kontan",
    Age: 26,
    Address: "120 Hanover Sq.",
    City: "	London",
    PostalCode: "WA1 1DP",
    Country: "UK",
  },
  {
    CustomerID: 5,
    CustomerName: "Around the Horn",
    ContactName: "Thomas Hardy",
    Age: 28,
    Address: " Berguvsvägen 8",
    City: "Luleå",
    PostalCode: "S-958 22",
    Country: "	Sweden",
  },
  {
    CustomerID: 6,
    CustomerName: "	Berglunds snabbköp",
    ContactName: "Christina Berglund",
    Age: 21,
    Address: "Obere Str. 57",
    City: "Obere Str. 67	Berlin",
    PostalCode: 12209,
    Country: "Germany",
  },
];

const Table1 = () => {
  return (
    <div className="Table">
      <div
        className="table"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>CustomerId</th>
              <th>CustomerName</th>
              <th>ContactName</th>
              <th>Age</th>
              <th>Address</th>
              <th>City</th>
              <th>PostalCode</th>
              <th>Country</th>
            </tr>
          </thead>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.CustomerID}</td>
                <td>{val.CustomerName}</td>
                <td>{val.ContactName}</td>
                <td>{val.Age}</td>
                <td>{val.Address}</td>
                <td>{val.City}</td>
                <td>{val.PostalCode}</td>
                <td>{val.Country}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table1;
