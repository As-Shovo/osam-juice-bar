import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import JuicyBar from './component/JuicyBar/JuicyBar';
import SingleJuicy from './component/SingleJuicy/SingleJuicy';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route exact path="/juicyBar">
            <JuicyBar></JuicyBar>
          </Route>
          <Route exact path="/juicyBar/:id">
            <SingleJuicy></SingleJuicy>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
