import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DirectoryItem from '../directory-item.component';
import '@testing-library/jest-dom/extend-expect';

describe('DirectoryItem Component', () => {
  const mockCategory= {
    category: {
      id: 1,
      title: 'Accessories',
      imageUrl: 'https://i.imgur.com/6C7Eo4C.jpg',
      route: 'shop/accessories',
    }
  };

  it('renders the component', () => {
    render(
      <MemoryRouter>
        <DirectoryItem {...mockCategory} />
      </MemoryRouter>
    );

    expect(screen.getByText('Accessories')).toBeInTheDocument();
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
    expect(screen.getByTestId('background-image')).toHaveStyle(`backgroundImage: url(${mockCategory.category.imageUrl})`);
  });

  it('navigates to the correct route on click', () => {

    render(
      <MemoryRouter>
        <Routes>
          <Route path={mockCategory.category.route} element={<div>Accessories Page</div>} />
          <Route path="*" element={<DirectoryItem {...mockCategory} />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Shop Now'));

    expect(screen.getByText('Accessories Page')).toBeInTheDocument();
  });
});