import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import PropertySection from "./components/PropertySection";
import PropertyDetailsSection from "./components/property/PropertyDetailsSection";

const HeaderLayout = () => (
  <>
    <Header />
    <SearchSection />
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          {/* <Route path="/search" element={<SearchSection />} /> */}

          <Route path="/" element={<PropertySection />} />
        </Route>
        <Route path="/property" element={<PropertyDetailsSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
