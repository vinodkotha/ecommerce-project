import React from "react";
import { connect } from "react-redux";
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
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUserData } = this.props; //destructring
    //auth.onAuthStateChanged is a user signin state from firebase backend
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userDocRefObj = createUserProfileDocument(userAuth); //create userDocument if not exists in firestore database
        (await userDocRefObj).onSnapshot((snapshot) => {
          setCurrentUserData({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUserData(userAuth);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserData: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
