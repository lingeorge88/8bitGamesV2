import { render, fireEvent,screen } from '@testing-library/react';
import { Provider, } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../../store/root-reducer';
import CheckOutItem from '../checkout-item.component';


// Mock the Redux store
const mockStore = createStore(rootReducer);


describe('CheckOutItem component tests', () => {

  const mockCartItem = {
    imageUrl: 'http://example.com/image.jpg',
    price: 50,
    name: 'Test Item',
    quantity: 2
  };

  it('renders the item details correctly', () => {
    const { getByText, getByAltText } = render(
      <Provider store={mockStore}>
        <CheckOutItem cartItem={mockCartItem} />
      </Provider>
    );

    expect(screen.getByAltText('Test Item')).toHaveAttribute('src', 'http://example.com/image.jpg');
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });

});