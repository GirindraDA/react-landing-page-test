import Hero from "./components/Hero";
import About from "./components/About";
import Villa from "./components/VillaCard";
import Facilities from "./components/Facilities";
import Customers from "./components/Customers";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const villaCategories = [
    "4 Bedroom villa",
    "2 Bedroom villa",
    "Joglo house",
    "Kudus house",
    "Bamboo house",
    "Bamboo studio",
  ];

  return (
    <>
      <Hero villaCategories={villaCategories} />
      <About />
      <Villa />
      <Facilities />
      <Customers />
      <Gallery />
      <Footer villaCategories={villaCategories} />
    </>
  );
}

export default App;
