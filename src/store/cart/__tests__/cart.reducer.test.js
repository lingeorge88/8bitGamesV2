import { cartReducer, CART_INITIAL_STATE } from "../cart.reducer";
import { setCartItems, setIsCartOpen } from "../cart.action";

describe('Cart Reducer tests', ()=>{
    test('SetIsCartOpen', ()=>{
        const expectedState={
            ...CART_INITIAL_STATE,
            isCartOpen: true,
        };
        expect(
            cartReducer(CART_INITIAL_STATE, setIsCartOpen(true))
        ).toEqual(expectedState);
    });

    test('setCartItems', ()=> {
        const mockCartItem = {
            id: 1,
            imageUrl: "https://example.com/image.jpg",
            name: "Sample Item",
            price: 100,
            quantity: 2
          };
        const expectedState={
            ...CART_INITIAL_STATE,
            cartItems:[ mockCartItem
            ]
        }
        expect(
            cartReducer(CART_INITIAL_STATE, setCartItems([mockCartItem]))
        ).toEqual(expectedState)
    });


})