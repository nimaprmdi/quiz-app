import Header from "./components/common/Header";
import Tests from "./components/Tests";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import NotFound from "./components/NotFound";
import Score from "./components/Score";
import Stats from "./components/Stats";
import QuestionProvider from "./context/QuestionContext";
import SwiperProvider from "./context/SwiperContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/App.scss";

function App() {
  return (
    <main className="App bg-primary">
      <QuestionProvider>
        <SwiperProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Tests redirectPage="welcome" title="Take a test" />} />
            <Route path="/welcome/:slug" element={<Welcome />} />
            <Route path="/question/:slug" element={<Question />} />
            <Route path="/score/:slug" element={<Score />} />
            <Route path="/stats/:slug" element={<Stats />} />
            <Route path="/stats" element={<Tests redirectPage="stats" title="Select a category" />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
          <ToastContainer />
        </SwiperProvider>
      </QuestionProvider>
    </main>
  );
}

export default App;
