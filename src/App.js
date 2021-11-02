import "./App.css";
import CardSection from "./components/CardSection";
import FormSection from "./components/FormSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subzero from "./components/Subzero";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <Navbar />
      <Hero />
      <CardSection />
      <FormSection />
      <Subzero />
    </div>
  );
}

export default App;
