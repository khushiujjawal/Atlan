import { useState } from "react";
import Table from "../Table/Table";

import { Form, TextArea } from "semantic-ui-react";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 5px;
  border-radius: 5px;
  margin: 5px 5px;
  cursor: pointer;
  display: flex;
`;
const Input = ({ id, text, setText }) => {
  const [flag, setFlag] = useState(false);
  const [buttonText, setButtonText] = useState("SHOW TABLE");
  function handleClick() {
    if (flag == false) {
      setButtonText("HIDE TABLE");
    }
    if (flag == true) {
      setButtonText("SHOW TABLE");
    }
    setFlag(!flag);
  }

  return (
    <Form>
      <TextArea
        placeholder="Write Your Query Here"
        style={{ minHeight: 200, minWidth: 400 }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button onClick={handleClick}>{buttonText}</Button>
      {flag && <Table id={id} />}
    </Form>
  );
};

export default Input;
