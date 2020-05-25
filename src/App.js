import React from "react";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import CheckOutPage from "./pages/checkoutpage/checkoutpage.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/signinpage/signinpage.component";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase-utils.component";
import { setCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "./redux/user/user.selectors";

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
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.setCurrentUser ? <Redirect to="/" /> : <SignInPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  setCurrentUser: currentUserSelector,
});

/////OR////
// const mapStateToProps = ({ userReducer: { currentUser } }) => ({
//   setCurrentUser: currentUser,
// });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserData: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
