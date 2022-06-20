import React, { useState } from "react";
import Input from "../Input/Input";
import "font-awesome/css/font-awesome.min.css";

const Predefinedquery = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("");
  const options = [
    { id: 1, name: "Predefined Query 1" },
    { id: 2, name: "Predefined Query 2" },
    { id: 3, name: "Predefined Query 3" },
  ];
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected.name}
          <span className="fa fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                  if (option.id === 1) {
                    setText("SELECT * FROM Customers;");
                  }
                  if (option.id === 2) {
                    setText("SELECT * FROM Customer;");
                  }
                  if (option.id === 3) {
                    setText("SELECT * FROM Students;");
                  }
                }}
                className="dropdown-item"
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <Input id={selected.id} text={text} setText={setText} />
    </>
  );
};

export default Predefinedquery;
