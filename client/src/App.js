import NavbarTwo from "./components/dashboard/Navbar";
import Navbar from "./components/Navbar"
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavbarTwo/>
     <AllRoutes/>
    </div>
  );
}

export default App;
