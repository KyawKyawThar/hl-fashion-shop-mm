import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import CustomButtom from '../custom-buttom/custom-buttom';
import FormInput from '../form-input/form-input';
import './sign-in.scss';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onFormSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email, password });
    } catch (err) {
      console.error(err);
    }
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <div className='title'>
          <h1>I already have an account</h1>
          <span>Sign in with your email and password</span>
        </div>

        <form onSubmit={this.onFormSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.onHandleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.onHandleChange}
            label='password'
            required
          />

          <div className='buttons'>
            <CustomButtom type='Submit' value='Submit Form'>
              Sign In
            </CustomButtom>

            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
