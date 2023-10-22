// App.tsx
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Gyms from "./components/gyms/Gyms";
import Promotions from "./components/promotions/Promotions";
import Trainers from "./components/trainers/Trainers";
import Calendar from "./components/calendar/Calendar";
import Equipment from "./components/equipment/Equipment";
import Work from "./components/work/Work";

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <div className="main">
          <Routes>
            <Route path="/gyms" element={<Gyms />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/work" element={<Work />} />
            <Route path="/" element={<Promotions />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
