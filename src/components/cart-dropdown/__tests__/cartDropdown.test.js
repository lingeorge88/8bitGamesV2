import { screen, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {createStore} from 'redux';
import CartDropdown from '../cart-dropdown.component';
const mockReducer = (state = { cart: { cartItems: [] } }, action) => state;
describe("Tests that the cart dropdown component renders and functions correctly", ()=> {
    test('renders cart items when cart is not empty', () => {
        // Mock the Redux store with initial state
        const mockStore = createStore(mockReducer, {
          cart: { cartItems: [{ id: '1', name: 'testItem' }] } // Mocked cart items
        });
    
        const { getByText } = render(
          <Provider store={mockStore}>
            <MemoryRouter>
              <CartDropdown />
            </MemoryRouter>
          </Provider>
        );
    
        expect(screen.getByText('testItem')).toBeInTheDocument();
      });

    test('renders the empty message when the cart is empty', ()=>{
        const mockStore = createStore(mockReducer, {
            cart: { cartItems: [] } // Empty cart
          });

          const { getByText } = render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <CartDropdown/>
                </MemoryRouter>
            </Provider>
          );

          expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    })
})