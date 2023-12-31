import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import {CheckoutItemContainer, ImageContainer,Name, Quantity, Arrow, Value, Price, RemoveButton}from'./checkout-item.styles';
import { CartItem } from '../../store/cart/cart.types';

type CheckOutItemProps = {
  cartItem: CartItem
}

const CheckOutItem: FC<CheckOutItemProps> =memo (({ cartItem }) => {
    const {name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  


  return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <Name> {name} </Name>
        <Quantity>
            <Arrow onClick={removeItemHandler }> &#10134; </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={ addItemHandler }> &#10133; </Arrow> 
            </Quantity>
        <Price> {price} </Price>
        <RemoveButton onClick={clearItemHandler}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
});

export default CheckOutItem;