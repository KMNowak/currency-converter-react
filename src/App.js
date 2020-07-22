import React, { useState } from 'react';
import Table from "./table";
import Form from "./form";
import Buttons from "./Buttons";
import Container from "./container";

function App() {
  const [hideTable, setHideTable] = useState(false);

  const toggleVisabilityTable = () => {
    setHideTable(hideTable => !hideTable);
  };

  return (
    <Container>
      <Form />
      <Table
        hideTable={hideTable}
      />
      <Buttons
        hideTable={hideTable}
        toggleVisabilityTable={toggleVisabilityTable}
      />
    </Container>
  );
}

export default App;
