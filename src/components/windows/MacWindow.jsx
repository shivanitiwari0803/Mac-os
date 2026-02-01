import React, { useState, useRef } from "react";
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

  
  const lastPos = useRef({
    x: 150,
    y: 100,
    width,
    height,
  });

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
          disableDragging: true,
          enableResizing: false,
        };

      case "right":
        return {
          size: { width: "50%", height: "100%" },
          position: { x: window.innerWidth / 2, y: 0 },
          disableDragging: true,
          enableResizing: false,
        };

      default:
        return {
          size: { width: lastPos.current.width, height: lastPos.current.height },
          position: { x: lastPos.current.x, y: lastPos.current.y },
          disableDragging: false,
          enableResizing: true,
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
    <Rnd
      bounds="window"
      {...getRndProps()}
      onDragStop={(e, d) => {
        if (mode === "normal") {
          lastPos.current.x = d.x;
          lastPos.current.y = d.y;
        }
      }}
      onResizeStop={(e, dir, ref, delta, pos) => {
        if (mode === "normal") {
          lastPos.current = {
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            x: pos.x,
            y: pos.y,
          };
        }
      }}
    >
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
                setMode((m) => (m === "fullscreen" ? "normal" : "fullscreen"))
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
