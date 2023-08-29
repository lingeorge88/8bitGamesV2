import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px){
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 80px;
  padding: 5px;

  @media screen and (max-width: 800px){
    width: 50px;
    padding: 0px;
  }
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &.shop-button,
  &.signIn-button {
    &.nes-btn {
      border-image-width: 0;
      border: 5px solid black;
      border-radius: 16px;
      &::after {
        box-shadow: none !important;  
      }
    }
  }
  @media screen and (max-width: 800px){
    font-size: 13px;
  }

  @media screen and (max-width: 800px){
    font-size: 10px;
    padding: 8px;
    margin: 8px;
  }
`;