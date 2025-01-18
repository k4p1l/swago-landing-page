import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
    </div>
  );
};
function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
