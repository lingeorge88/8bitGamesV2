import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SignInForm from '../sign-in-form.component';
import { emailSignInStart, googleSignInStart } from '../../../store/user/user.action';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}));

const store = createStore(() => ({}));

describe('<SignInForm />', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );
  });


  it('dispatches googleSignInStart on Google Sign In button click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );

    const googleSignInButton = screen.getByText('Google Sign In');

    fireEvent.click(googleSignInButton);

    expect(mockDispatch).toHaveBeenCalledWith(googleSignInStart());
  });
  

});
