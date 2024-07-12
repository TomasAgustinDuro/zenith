import "./App.css";
import { Features } from "./components/Features";
import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";

function App() {
  return (
    <>
      <main>
        <section className="sectionUno ">
          <header className="header">
            <Navbar logo="Zenith" />
          </header>
          <Showcase />
        </section>
        <Features />
      </main>
    </>
  );
}

export default App;
