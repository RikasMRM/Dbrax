import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Prodcuts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/" exact component={Footer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
