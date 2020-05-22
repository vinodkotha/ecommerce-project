import React from "react";
import { Link } from "react-router-dom";
import "./header-styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase-utils.component";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-containter" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>

      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGNOUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser,
});

export default connect(mapStateToProps)(Header);
//connect is HOC
