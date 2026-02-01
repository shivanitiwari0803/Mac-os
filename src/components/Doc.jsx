import React from "react";
import "./doc.scss";

const Doc = ({ windowState, setWindowState }) => {
  return (
    <footer className="doc">
      <div
        onClick={() => {
          window.open("https://calendar.google.com/calendar/u/0/r", "_blank");
        }}
        className="icon calendar"
      >
        <img src="/Doc -icons/calender.svg" alt="" />
      </div>
      <div
        className="icon cli"
        onClick={() => setWindowState({ ...windowState, cli: true })}
      >
        <img src="/Doc -icons/cli.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState({ ...windowState, github: true });
        }}
        className="icon github"
      >
        <img src="/Doc -icons/github.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/shivani-tiwari-8571a729a/",
            "_blank",
          );
        }}
        className="icon link"
      >
        <img src="/Doc -icons/link.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("mailto:shivani.tiwari@example.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="/Doc -icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState({ ...windowState, notes: true });
        }}
        className="icon note"
      >
        <img src="/Doc -icons/note.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState({ ...windowState, spotify: true });
        }}
        className="icon spotify"
      >
        <img src="/Doc -icons/spotify.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowState({ ...windowState, resume: true });
        }}
        className="icon pdf"
      >
        <img src="/Doc -icons/pdf.svg" alt="" />
      </div>
    </footer>
  );
};

export default Doc;
