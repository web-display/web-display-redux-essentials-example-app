import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <PostsList />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
