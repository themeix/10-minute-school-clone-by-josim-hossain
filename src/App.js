import React from "react";
import Footer from "./Components/HomePage/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import ProgramList from "./Components/HomePage/ProgramList/ProgramList";

function App() {
  return (
    <div className="App">
      <HomePage />

      <ProgramList />
      <Footer />
    </div>
  );
}

export default App;
