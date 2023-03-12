import './App.css';
import Listings from './components/Listings';
import Background from './components/Background';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Background/>
      <Listings/>
    </div>
  );
}

export default App;
