import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase-utils.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, displayName } = this.state;

    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      const { newUser } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(newUser, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error while createUserWithEmailAndPassword", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2>I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>

      //button and input supports 'submit' type
      //work "Sign In between custombutton tags is children"
    );
  }
}

export default SignIn;
