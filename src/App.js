import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Card from "./components/Card/card";
import Input from "./components/Input";
import Word from "./components/Word";

const StyledAppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StyledWordWrapper = styled.div`
  display: flex;
`;

const WORDS = "alperen kerem dokker";

const charArray = [
  ..."abcdefghijklmnopqrstuvwxyz ".split(""),
  ..."abcdefghijklmnopqrstuvwxyz ".toUpperCase().split(""),
];

function App() {
  const [written, setWritten] = React.useState("");
  const [wrongChar, setWrongChar] = React.useState("");

  const handleUserKeyPress = useCallback(
    (event) => {
      const RIGHT_WORDS = WORDS.slice(0, written.length + 1);
      const WRITTEN_WORDS = `${written}${event.key}`;

      // remove character by BACKSPACE
      if (event.keyCode === 8) setWritten(written.slice(0, written.length - 1));

      // Control render right char

      if (charArray.includes(event.key) && WRITTEN_WORDS === RIGHT_WORDS) {
        setWritten(`${written}${event.key}`);
      }

      // if (WRITTEN_WORDS !== RIGHT_WORDS) {
      //   setWrongChar(event.key);
      //   let w = written;
      //   w[w.length] = wrongChar;
      //   console.log(w);
      // }

      // if (WORDS[]) {
      //   console.log(event.key);
      // }
    },
    [written, wrongChar]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
  return (
    <StyledAppWrapper>
      <Card>
        <StyledWordWrapper>
          <Word written={written} theRighOne={WORDS} isWrote />
        </StyledWordWrapper>
        {/* <Input /> */}
      </Card>
    </StyledAppWrapper>
  );
}

export default App;
