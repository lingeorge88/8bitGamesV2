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
})