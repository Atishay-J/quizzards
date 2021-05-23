import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import QuizCategories from "./Components/Pages/QuizCategories";
import Login from "./Components/Pages/Login";
import Quiz from "./Components/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <h1>Hello Type</h1>
      <Routes>
        <Route path="/categories" element={<QuizCategories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
