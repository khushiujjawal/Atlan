import React from "react";
const data = [
  { fname: "Khushi", sname: "Ujjawal", age: 19, gender: "Female" },
  { fname: "Megha", sname: "Gupta", age: 19, gender: "Female" },
  { fname: "Anubhav", sname: "Ujjawal", age: 25, gender: "Male" },
];

const Table0 = () => {
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.fname}</td>
                <td>{val.sname}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table0;
