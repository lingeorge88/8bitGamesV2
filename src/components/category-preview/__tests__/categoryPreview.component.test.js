import { render,screen } from "@testing-library/react";
import CategoryPreview from "../category-preview.component";    
import ProductCard from "../../product-card/product-card.component";
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../product-card/product-card.component', () => (props) => <div data-testid="product-card">{props.product.name}</div>);

describe('Category preview component tests', () => {
    test('renders the title correctly', () => {
        const { getByText } = render(
            <BrowserRouter>
                <CategoryPreview title="Test Title" products={[]} />
            </BrowserRouter>
        );
        expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
    });

    test('renders up to 4 ProductCard components', () => {
        const mockProducts = [
          { id: '1', name: 'Product 1' },
          { id: '2', name: 'Product 2' },
          { id: '3', name: 'Product 3' },
          { id: '4', name: 'Product 4' },
          { id: '5', name: 'Product 5' },
        ];
        const { getAllByTestId } = render(
            <BrowserRouter>
        <CategoryPreview title="Test Title" products={mockProducts} />
        </BrowserRouter>);
        const products = screen.getAllByTestId('product-card');
        expect(products).toHaveLength(4);
      });

      it('passes the correct product details to each ProductCard', () => {
        const mockProducts = [
          { id: '1', name: 'Product 1' },
          { id: '2', name: 'Product 2' },
          { id: '3', name: 'Product 3' },
          { id: '4', name: 'Product 4' },
        ];
        const { getByText } = render(
        <BrowserRouter>
        <CategoryPreview title="Test Title" products={mockProducts} />
        </BrowserRouter>);
        mockProducts.forEach((product) => {
          expect(screen.getByText(product.name)).toBeInTheDocument();
        });
})
});

