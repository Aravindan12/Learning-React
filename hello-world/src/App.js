import './App.css';
import Greet from './components/Greet';
import Create from './components/Create';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main">
     <Greet></Greet>
     <div>
        <Create/>
      </div>
    </div>
  );
}

export default App;
