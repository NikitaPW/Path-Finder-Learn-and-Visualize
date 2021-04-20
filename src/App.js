import logo from './logo.svg';
import './App.css';
import PathFindingVisulization from "./PathFindingVisualization/PathFindingVisualization";
import Welcome from "./components/Welcome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Algorithm from "./components/Algorithms";
import About from './components/About';
import { HashRouter, Route, Switch } from 'react-router-dom';

library.add(fas);

function App() {
  return (
    
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/visualization" component={PathFindingVisulization} />
        <Route exact path="/" component={Welcome} />
        <Route path="/algorithms" component={Algorithm} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    
  );
}

export default App;
