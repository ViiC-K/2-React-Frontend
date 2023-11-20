import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Gallery from "./Component/Gallery/Gallery";
import Footer from "./Component/footer/Footer";

function App() {
  return (
    <>
      <div className=" px-5 pt-4">
        <Navbar />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
