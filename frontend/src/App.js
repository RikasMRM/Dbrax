import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Prodcuts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
