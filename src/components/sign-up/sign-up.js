import React from 'react';
import './sign-up.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import CustomButton from '../custom-buttom/custom-buttom';
import FormInput from '../form-input/form-input';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <div className='title '>
          <h1>I do not have an account</h1>
          <span>Sign Up with your email and password</span>
        </div>

        <form onSubmit={this.onFormSubmit}>
          <FormInput
            name='displayName'
            type='name'
            value={displayName}
            onChange={this.handleChange}
            label='displayName'
            required
          />

          <FormInput
            name='email'
            type='email'
            value={email}
            onChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            label='password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            label='confirmPassword'
            onChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
