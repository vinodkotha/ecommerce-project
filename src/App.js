import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/signinpage/signinpage.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase-utils.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    //auth.onAuthStateChanged is a user signin state from firebase backend
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userDocRefObj = createUserProfileDocument(userAuth); //create userDocument if not exists in firestore database
        (await userDocRefObj).onSnapshot((snapshot) => {
          this.setState(
            { currentUser: { id: snapshot.id, ...snapshot.data() } },
            () => {
              console.log("state afte setting data", this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
        console.log("userAuth", userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="body">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
