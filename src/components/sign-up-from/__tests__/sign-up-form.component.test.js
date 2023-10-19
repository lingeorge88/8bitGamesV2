import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SignUpForm from '../sign-up-form.component';
import { signUpStart } from '../../../store/user/user.action';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}));

const store = createStore(() => ({}));

describe('<SignUpForm />', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
  });


  it('dispatches signUpStart on valid form submission', () => {
    const { container } = render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );
  
      const displayNameInput = container.querySelector('input[name="displayName"]');
      const emailInput = container.querySelector('input[name="email"]');
      const passwordInput = container.querySelector('input[name="password"]');
      const confirmPasswordInput = container.querySelector('input[name="confirmPassword"]');
  
      if (displayNameInput && emailInput && passwordInput && confirmPasswordInput) {
        fireEvent.change(displayNameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
      }
  
      fireEvent.click(screen.getByText('Sign Up'));
  
      expect(mockDispatch).toHaveBeenCalledWith(signUpStart('johndoe@example.com', 'password123', 'John Doe'));
    });
});