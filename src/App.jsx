import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Gallery from "./Component/Gallery/Gallery";
import Footer2 from "./Component/Footer2/Footer2";

function App() {
  return (
    <>
      <div className=" px-5 pt-4">
        <Navbar />
        <Gallery />
        <Footer2 />
      </div>
    </>
  );
}

export default App;
