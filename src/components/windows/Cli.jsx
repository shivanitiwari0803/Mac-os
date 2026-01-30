import MacWindow from "./MacWindow";

import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = () => {
  const commands = {
    commands: {
      description: "List all available commands",
      usage: "commands",
      fn: () =>
        Object.keys(commands)
          .map((cmd) => `${cmd}: ${commands[cmd].description}`)
          .join("\n"),
    },
    welcome: {
      description: "Show welcome message",
      usage: "welcome",
      fn: () =>
        "Welcome to Shivani's Portfolio! Type 'commands' to see all available commands.",
    },
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        `Hi! I'm Shivani Tiwari, a full-stack developer passionate about building web applications.`,
    },
    skills: {
      description: "Display technical skills",
      usage: "skills",
      fn: () =>
        `JavaScript, React, Node.js, CSS, HTML, Git, MongoDB, PostgreSQL`,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () =>
        `1. Portfolio Website\n2. Chat Application\n3. E-commerce Platform`,
    },
    experience: {
      description: "Work experience",
      usage: "experience",
      fn: () =>
        `Senior Developer at Tech Corp (2021-Present)\nJunior Developer at StartUp Inc (2019-2021)`,
    },
    contact: {
      description: "Contact information",
      usage: "contact",
      fn: () =>
        `Email: shivani@example.com\nGitHub: github.com/shivani\nLinkedIn: linkedin.com/in/shivani`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={
            "Welcome to Shivani's Portfolio!\nType 'commands' to see all available commands."
          }
          promptLabel={"shivaniTiwari:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;