import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/footer/Footer";
import Gallery from "./Component/Gallery/Gallery";

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
