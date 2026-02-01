import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "40%",
  height = "40%",
  windowName,
  setWindowState,
}) => {
  const [mode, setMode] = useState("normal");

  const getRndProps = () => {
    switch (mode) {
      case "fullscreen":
        return {
          size: { width: "100%", height: "100%" },
          position: { x: 0, y: 0 },
          disableDragging: true,
          enableResizing: false,
        };

      case "left":
        return {
          size: { width: "50%", height: "100%" },
          position: { x: 0, y: 0 },
        };

      case "right":
        return {
          size: { width: "50%", height: "100%" },
          position: { x: window.innerWidth / 2, y: 0 },
        };

      default:
        return {
          size: { width, height },
        };
    }
  };

  const handleSplit = () => {
    setMode((prev) => {
      if (prev === "normal") return "left";
      if (prev === "left") return "right";
      return "normal";
    });
  };

  return (
    <Rnd bounds="window" {...getRndProps()}>
      <div className={`window ${mode !== "normal" ? "maximized" : ""}`}>
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              data-title="Close"
              onClick={() =>
                setWindowState((s) => ({ ...s, [windowName]: false }))
              }
            />

            <div
              className="dot yellow"
              data-title="Full Screen"
              onClick={() =>
                setMode((m) =>
                  m === "fullscreen" ? "normal" : "fullscreen"
                )
              }
            />

            
            <div
              className="dot green"
              data-title="Split Screen"
              onClick={handleSplit}
            />
          </div>

          <div className="title">
            <p>shivanitiwari - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
