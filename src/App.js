import React, { useState } from 'react';
import Table from "./table";
import Form from "./form";
import Buttons from "./Buttons";
import Container from "./container";

function App() {
  const [hideTable, setHideTable] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const [amount, setAmount] = useState("");
  const [yourCurrency, setYourCurrency] = useState("");
  const [finalCurrency, setFinalCurrency] = useState("");
  


  const toggleVisibilityTable = () => {
    setHideTable(hideTable => !hideTable);
  };

  const toggleBackground = () => {
    setChangeBackground(changeBackground => !changeBackground);
  }

  const onInputChange = ({ target }) => setAmount(target.value);
  const onSelectYourCurrencyChange = ({ target }) => setYourCurrency(target.value);
  const onSelectFinalCurrencyChange = ({ target }) => setFinalCurrency(target.value);

  const calculateToPLN = () => {
    switch (yourCurrency) {
      case "Wybierz walutę":
        return;
      case "PLN":
        return amount;
      case "GBP":
        return amount * 4.9551;
      case "EUR":
        return amount * 4.4534;
      case "USD":
        return amount * 3.9589;
    };
  };

  const exchangeToFinalCurrency = () => {
    switch (finalCurrency) {
      case "Wybierz walutę":
        return;
      case "PLN":
        return calculateToPLN() / 1
      case "GBP":
        return calculateToPLN() / 4.9551;
      case "EUR":
        return calculateToPLN() / 4.4534;
      case "USD":
        return calculateToPLN() / 3.9589;
    };
  };

  

  return (
    <Container changeBackground={changeBackground}>
      <Form
       exchangeToFinalCurrency={exchangeToFinalCurrency}
        amount={amount}
        yourCurrency={yourCurrency}
        finalCurrency={finalCurrency}
        onInputChange={onInputChange}
        onSelectYourCurrencyChange={onSelectYourCurrencyChange}
        onSelectFinalCurrencyChange={onSelectFinalCurrencyChange}
      />
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
