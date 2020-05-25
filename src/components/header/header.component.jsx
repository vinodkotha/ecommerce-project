import React from "react";
import { Link } from "react-router-dom";
import "./header-styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { auth } from "../../firebase/firebase-utils.component";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { currentUserSelector } from "../../redux/user/user.selectors";
import { cartHiddenSelector } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {!hidden ? <CartDropDown /> : ""}
  </div>
  //Toggle cart dropdown based on flag
);

// const mapStateToProps = (state) => ({
//   currentUser: state.userReducer.currentUser,
//   toggleHidden: state.cartToggleReducer.hidden,
// });

///OR
// const mapStateToProps = ({
//   userReducer: { currentUser },
//   cartReducer: { hidden },
// }) => ({
//   currentUser,
//   hidden,
//   });
//OR

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: cartHiddenSelector,
});

export default connect(mapStateToProps)(Header);
//connect is HOC
