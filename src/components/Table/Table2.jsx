import React from "react";
const data = [
  { fname: "Khushi2", sname: "Ujjawal", age: 19, gender: "Male" },
  { fname: "Megha2", sname: "Gupta", age: 19, gender: "Female" },
  { fname: "Anubha2", sname: "Ujjawal", age: 25, gender: "Male" },
];

const Table2 = () => {
  return (
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
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
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
  );
};

export default Table2;
