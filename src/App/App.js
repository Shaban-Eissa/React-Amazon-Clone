import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";
import Orders from '../Orders/Orders'
import { useEffect } from "react";
import { auth } from "../Firebase/firebase";
import { useStateValue } from "../ContextAPI/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JZzi5CNDITX1wEnWeEpIpwUhRFUWYsNMCCxcDXAFemDJnWIri0PnY1Km5LK8GE3KOR5EQSYJIlTrAQAxvZDYk7c00WAkF9JVr"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is => ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route> 
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
