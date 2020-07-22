import React from 'react';
import "./style.css";

const Container = ({ children, changeBackground }) => (
  <main className={`main ${changeBackground ? "main--changeColor" : ""}`}>
    {children}
  </main>
);
export default Container;