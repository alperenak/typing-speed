import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
