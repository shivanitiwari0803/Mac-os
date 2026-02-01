import { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowState }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const commands = {
  welcome: {
    fn: () =>
      "Welcome to Shivani's Portfolio!\nType 'help' to see all available commands.",
  },

  about: {
    fn: () =>
      "Hi! I'm Shivani Tiwari, a full-stack developer passionate about building web applications.",
  },

  skills: {
    fn: () =>
      "JavaScript, React, Node.js, HTML, CSS, Git, MongoDB, PostgreSQL",
  },

  projects: {
    fn: () =>
      "1. Portfolio Website\n2. Chat Application\n3. E-commerce Platform",
  },

  experience: {
    fn: () =>
      "Senior Developer at Tech Corp (2021–Present)\nJunior Developer at StartUp Inc (2019–2021)",
  },

  contact: {
    fn: () =>
      "Email: shivani@example.com\nGitHub: github.com/shivani\nLinkedIn: linkedin.com/in/shivani",
  },

  echo: {
    fn: (...args) => args.join(" "),
  },
};


  if (!mounted) return null; 

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage="Welcome to Shivani's Portfolio!\nType 'help' to see all available commands."
          promptLabel="shivaniTiwari:~$"
          promptLabelStyle={{ color: "#00ff00" }}
          contentStyle={{ color: "#e5e5e5" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
