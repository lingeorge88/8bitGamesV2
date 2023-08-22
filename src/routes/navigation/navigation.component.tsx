import { Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {ReactComponent as CtrlLogo} from '../../assets/game-controller.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import { signOutStart } from '../../store/user/user.action';


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
    return (
      <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CtrlLogo />
        </LogoContainer>
        <NavLinks>
        
          <NavLink to='/shop' className='shop-button nes-btn is-success'>SHOP</NavLink>

          {currentUser ? (
            <NavLink to='/' className='signIn-button nes-btn is-warning' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth' className='signIn-button nes-btn is-primary'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
    )
  };

  export default Navigation;