import React, { Fragment } from 'react';
import "./style.css";

const Buttons = ({hideTable, toggleVisibilityTable, toggleBackground}) => (
  <Fragment>
    <button onClick={toggleVisibilityTable} className="button">
      {hideTable ? "Ukryj" : "Pokaż"} tabelę z kursami wymiany
      </button>
    <button onClick={toggleBackground} className="button">Zmień tło</button>
  </Fragment>
);

export default Buttons;