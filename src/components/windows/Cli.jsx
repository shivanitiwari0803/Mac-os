import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = () => {
  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
          }}
          welcomeMessage={"Welcome to the React terminal!"}
          promptLabel={"shivaniTiwari:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
