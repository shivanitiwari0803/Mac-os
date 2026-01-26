import React from "react";
import "./app.scss";
import Doc from "./components/Doc";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";
import Github from "./components/windows/Github";
import Notes from "./components/windows/Notes";
import Resume from "./components/windows/Resume";

const App = () => {
  return (
    <main>
      <Nav />
      <Doc />
      <Github />
      <Notes />
      <Resume />
    </main>
  )
};

export default App;
