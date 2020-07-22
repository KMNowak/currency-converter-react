import React, { useState } from 'react';
import Table from "./table";
import Form from "./form";
import Buttons from "./Buttons";
import Container from "./container";

function App() {
  const [hideTable, setHideTable] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);

  const toggleVisibilityTable = () => {
    setHideTable(hideTable => !hideTable);
  };

  const toggleBackground = () => {
    setChangeBackground(changeBackground => !changeBackground);
  }

  return (
    <Container changeBackground={changeBackground}>
      <Form />
      <Table
        hideTable={hideTable}
      />
      <Buttons
        hideTable={hideTable}
        toggleVisibilityTable={toggleVisibilityTable}
        toggleBackground={toggleBackground}
      />
    </Container>
  );
}

export default App;
