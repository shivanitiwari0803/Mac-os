import React, { useState } from "react";
import "./app.scss";
import Doc from "./components/Doc";
import Nav from "./components/Nav";
import MacWindow from "./components/windows/MacWindow";
import Github from "./components/windows/Github";
import Notes from "./components/windows/Notes";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App = () => {
  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  return (
    <main>
      <Nav />
      <Doc windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && (
        <Github windowName="github" setWindowState={setWindowState} />
      )}
      {windowState.notes && (
        <Notes windowName="notes" setWindowState={setWindowState} />
      )}
      {windowState.resume && (
        <Resume windowName="resume" setWindowState={setWindowState} />
      )}
      {windowState.spotify && (
        <Spotify windowName="spotify" setWindowState={setWindowState} />
      )}
      {windowState.cli && (
        <Cli windowName="cli" setWindowState={setWindowState} />
      )}
    </main>
  );
};

export default App;
