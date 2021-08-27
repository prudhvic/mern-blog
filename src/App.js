import './App.css';
import List from "./components/List";
import Todo from "./components/Todo"
import {Route,Switch} from "react-router-dom"
import Nav from './utils/Nav';
import Create from './components/Create';
import Edit from './components/edit';
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/todos">
 <List />


        </Route>
        <Route exact path="/todos/create">
          <Create />
        </Route>
        <Route exact path="/todos/edit/:id">
<Edit />
        </Route>
        <Route exact path="/todos/:id">
          <Todo />
        </Route>
        
      </Switch>
     
    </div>
  );
};

export default App;
