import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import GridTable from "./components/GridTable";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Banner />
        <GridTable />
      </div>
    </>
  );
}

export default App;
