import React from "react";
import "./assets/css/App.scss";
import Header from "./components/common/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Tests from "./components/Tests";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import NotFound from "./components/NotFound";
import Score from "./components/Score";
import Stats from "./components/Stats";

function App() {
  return (
    <main className="App bg-primary">
      <Header />

      <Routes>
        <Route path="/" element={<Tests />} />
        <Route path="/welcome/:slug" element={<Welcome />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/score" element={<Score />} />
        <Route path="/statistics" element={<Stats />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </main>
  );
}

export default App;
