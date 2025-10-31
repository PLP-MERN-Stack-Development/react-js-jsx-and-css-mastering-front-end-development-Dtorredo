import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Posts from "./pages/Posts";
import { ThemeProvider } from "./context/ThemeContext";

const AppShell = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
