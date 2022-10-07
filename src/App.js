import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was created by Mariia Chorna and is{" "}
        <a
          href="https://github.com/Chmasha/reactweather"
          target="_blank"
          rel="noreferrer"
        >
          open sources on GitHub
        </a>
      </footer>
    </div>
  );
}
