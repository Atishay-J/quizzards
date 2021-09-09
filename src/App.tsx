import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import QuizCategories from "./Components/Pages/QuizCategories";
import Login from "./Components/Pages/Login";
import Quiz from "./Components/Quiz/Quiz";
import Homepage from "./Components/Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<QuizCategories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
