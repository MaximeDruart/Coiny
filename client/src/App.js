import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import userRegister from './components/UserRegister'

function App() {
  return (
    <Router>
      <div className="App">
          <Link component={userRegister}>Go to login</Link>
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/userregister" component={userRegister} />
          {/* <Route exact path="/login" component={Login} /> */}
      </div>
    </Router>
  );
}

export default App;
