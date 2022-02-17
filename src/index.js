import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import store from "./components/store";
import reportWebVitals from "./reportWebVitals";
import { routes, site } from "./settings/common";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header {...site} />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.link}
              path={route.link}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
