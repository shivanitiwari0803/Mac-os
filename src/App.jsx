import React from "react";
import "./app.scss";
import Doc from "./components/Doc";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";

const App = () => {
  return (
    <main>
      <Nav />
      <Doc />
      <MacWindow /> 
    </main>
  )
};

export default App;
