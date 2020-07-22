import React, { Fragment } from 'react';
import "./style.css";

const Buttons = ({hideTable, toggleVisabilityTable}) => (
  <Fragment>
    <button onClick={toggleVisabilityTable} className="button">
      {hideTable ? "Ukryj" : "Pokaż"} tabelę z kursami wymiany
      </button>
    <button className="button">Zmień tło</button>
  </Fragment>
);

export default Buttons;