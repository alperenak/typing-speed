import React from "react";
import styled from "styled-components";

const StyledWordWrapper = styled.div`
  display: flex;
  padding: 10px 2px;
  transition: 0.2s;
  font-size: 32px;
  border-radius: 4px;
  background-color: ${({ isFalse }) => (isFalse ? "#FFCDCD" : "#D5FFCC")};
  color: ${({ isFalse, isWrote }) =>
    isFalse ? "#DF6D6D" : isWrote ? "#80DF6D" : "black"};
  font-weight: 600;
  width: min-content;
  margin: 0 1px;
  min-width: 18px;
`;

export default function Word({ written, theRighOne, isWrote }) {
  return theRighOne.split("").map((item, index) => {
    console.log(isWrote);
    return (
      <StyledWordWrapper isWrote={isWrote} isFalse={!(item === written[index])}>
        {item}
      </StyledWordWrapper>
    );
  });
}
