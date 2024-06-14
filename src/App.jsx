import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Parcours from "./components/Parcours";
import Main from "./components/Main";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    document.body.className = `${theme}-mode`;
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Main theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/parcours"
          element={<Parcours theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
