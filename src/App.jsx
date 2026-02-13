import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import PropertySection from "./components/PropertySection";
import PropertyDetailsSection from "./components/property/PropertyDetailsSection";
import BookInpection from "./components/booking/BookInpection";
import StartPage from "./components/StartPage";

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
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HeaderLayout />}>
          {/* <Route path="/search" element={<SearchSection />} /> */}

          <Route index element={<PropertySection />} />
        </Route>
        <Route path="/property/:id" element={<PropertyDetailsSection />} />
        <Route path="/book-inspection" element={<BookInpection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
