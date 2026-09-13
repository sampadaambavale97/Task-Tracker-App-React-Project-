import { BrowserRouter, Routes, Route } from "react-router-dom";

import Day1 from "./day1";
import Day2 from "./day2";
import Day3 from "./day3";
import Day4 from "./day4";
import Day5 from "./day5";
import Day6 from "./day6";
import Day7 from "./day7";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="center-page">
              <Day1 />
            </div>
          }
        />

        <Route
          path="/day2"
          element={
            <div className="center-page">
              <Day2
                name="Sampada"
                course="BCA"
                semester="5th"
              />
            </div>
          }
        />

        <Route
          path="/day3"
          element={
            <div className="center-page">
              <Day3 />
            </div>
          }
        />

        <Route
          path="/day4"
          element={
            <div className="center-page">
              <Day4 />
            </div>
          }
        />

        <Route
          path="/day5"
          element={
            <div className="center-page">
              <Day5 />
            </div>
          }
        />

        <Route path="/day6" element={<Day6 />} />
        <Route path="/day7" element={<Day7 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;