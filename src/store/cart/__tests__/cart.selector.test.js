import { selectCartCount, selectIsCartOpen, selectCartTotal, selectCartItems } from "../cart.selector";

const mockState = {
    cart: {
      cartItems: [
        {
          id: 1,
          imageUrl: "https://example.com/item1.jpg",
          name: "Item 1",
          price: 50,
          quantity: 2
        },
        {
          id: 2,
          imageUrl: "https://example.com/item2.jpg",
          name: "Item 2",
          price: 30,
          quantity: 3
        }
      ],
      isCartOpen: true
    }
  };

  describe('Cart selectors', ()=>{
    test('selectCartItems should return the cart items', ()=>{
        const cartItemsSlice = selectCartItems(mockState);
        expect(cartItemsSlice).toEqual(mockState.cart.cartItems);
    });

    test('selectIsCartOpen should return the cart open state', ()=>{
        const isOpen = selectIsCartOpen(mockState);
        expect(isOpen).toEqual(mockState.cart.isCartOpen);
    });

    test('selectCartCount should return the count of items in the cart', ()=>{
        const cartCount = selectCartCount(mockState);
        expect(cartCount).toEqual(5);
    });

    test('selectCartTotal should return the total price of the items in the cart', ()=>{
        const cartTotal = selectCartTotal(mockState);
        expect(cartTotal).toEqual(190);
    })
  })