import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Switch>

        </Switch>
  
      </div>
    </Router>
  )
}

export default App
