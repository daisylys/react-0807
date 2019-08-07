import React from "react";
import "./App.css";
import { HashRouter, Switch, Redirect, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Music from "./views/Music";
import { connect } from "react-redux";

const routerMap = [
  { path: "/", name: Home, component: Home },
  { path: "/login", name: Login, component: Login },
  { path: "/about", name: About, component: About, auth: true },
  { path: "/music", name: Music, component: Music, auth: false },
  // { path: "/form", name: Form, component: Form },
  // { path: "/video", name: Video, component: Video, auth: true }
];
// function App() {
class App extends React.Component {
  render() {
    const { token } = this.props;
    return (
      <div className="App">
        <HashRouter>
          <nav>
            <Link to="/">home</Link>
            <Link to="/about">About</Link>
            <Link to="/music">Music</Link>
          </nav>
          <Switch>
            {/* <Route path="/" component={Home} />
          <Route path="/about" component={About} /> */}
            {routerMap.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  exact
                  render={v =>
                    !item.auth ? (
                      <item.component {...v} />
                    ) : token ? (
                      <item.component {...v} />
                    ) : (
                      <Redirect
                        to={{
                          pathname: "/login",
                          state: { from: v.location }
                        }}
                      />
                    )
                  }
                />
              );
            })}
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

// export default App;
const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token
  };
};
export default connect(mapStateToProps)(App);
