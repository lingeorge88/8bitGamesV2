import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Directory, { DirectoryCategory } from '../directory.component'; 

describe('Directory Component', () => {
  
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Directory />
        </MemoryRouter>
      );
    });
  
    it('renders all the categories', () => {
      const categoriesTitles = [
        'Accessories', 'Apparel', 'Collectibles', 'Retro Games', 'Retro Systems'
      ];
      categoriesTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    it('renders "Shop Now" for all items', () => {
      const shopNowElements = screen.getAllByText('Shop Now');
      expect(shopNowElements).toHaveLength(5);
    });
  
    // If you wish to test navigation or other behaviors, you can add more test cases here.
  
  });