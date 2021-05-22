import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { QuizDataProvider } from "./Context/quizDataContext";
import { AuthProvider } from "./Context/authContext";
import { QuizProvider } from "./Context/quizContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <QuizDataProvider>
        <QuizProvider>
          <Router>
            <App />
          </Router>
        </QuizProvider>
      </QuizDataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
