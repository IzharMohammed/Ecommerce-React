import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
function App() {
  return (
    <>
      <Header color='dark' light={true} dark={true} expand='md' container='sm' />
      
      <Home />
    </>
  );
}

export default App;
