import { useState } from "react";
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

  // ✅ State (NOT ref) – this is the key fix
  const [position, setPosition] = useState({ x: 150, y: 100 });
  const [size, setSize] = useState({ width, height });

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
          size,
          position,
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
      onDragStop={(_, d) => {
        if (mode === "normal") {
          setPosition({ x: d.x, y: d.y });
        }
      }}
      onResizeStop={(_, __, ref, ___, pos) => {
        if (mode === "normal") {
          setSize({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
          });
          setPosition(pos);
        }
      }}
    >
      <div className={`window ${mode !== "normal" ? "maximized" : ""}`}>
        <div className="nav">
          <div className="dots">
            {/* Close */}
            <div
              className="dot red"
              data-title="Close"
              onClick={() =>
                setWindowState((s) => ({ ...s, [windowName]: false }))
              }
            />

            {/* Fullscreen */}
            <div
              className="dot yellow"
              data-title="Full Screen"
              onClick={() =>
                setMode((m) =>
                  m === "fullscreen" ? "normal" : "fullscreen"
                )
              }
            />

            {/* Split */}
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
