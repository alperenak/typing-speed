import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #8eb6d8;
  padding: 10px;
`;

export default function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}
