import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Navbar from "./components/navbar/navbar";
import TopBar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/article/:article" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
