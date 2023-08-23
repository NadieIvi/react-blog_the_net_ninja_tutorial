import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDateils';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
          <Switch>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
      
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;