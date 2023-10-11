import { render, screen } from "@testing-library/react";
import CartItem from "../cart-item.component";

describe("tests for the cartItem component", ()=>{
    const mockCartItem = {
        imageUrl: 'http://example.com/image.jpg',
        price: 50,
        name: 'Test Item',
        quantity: 2
      };
    
      test('renders the image with correct attributes', () => {
        const { getByAltText } = render(<CartItem cartItem={mockCartItem} />);
        
        const img = screen.getByAltText('Test Item');
        expect(img).toHaveAttribute('src', 'http://example.com/image.jpg');
        expect(img).toHaveAttribute('alt', 'Test Item');
      });
    
      test('displays the correct item name', () => {
        const { getByText } = render(<CartItem cartItem={mockCartItem} />);
        expect(screen.getByText('Test Item')).toBeInTheDocument();
      });
    
      test('displays the correct quantity and price', () => {
        const { getByText } = render(<CartItem cartItem={mockCartItem} />);
        expect(screen.getByText('2 x $50')).toBeInTheDocument();
      });
})