import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PostsList />
              <AddPostForm />
            </div>
          )}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
