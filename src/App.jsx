import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Footer />
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
