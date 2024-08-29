import About from './components/About';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import'./index.css'
function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Profile/>
     <About/>
    </div>
  );
}

export default App;
