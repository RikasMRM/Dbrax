import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Prodcuts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:productId" exact component={Products} />
          <Route> 404 Not Found </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
