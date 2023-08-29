import styled from 'styled-components';

export const CheckoutContainer = styled.div`
width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    @media screen and (max-width: 980px) and (min-width: 400px) {
      width: 90%; 
  }
`

export const CheckoutHeader = styled.div`
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;
      @media screen and (max-width: 980px) and (min-width: 400px) {
        flex-direction: column; 
        align-items: center; 
    }
`
    
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 980px) and (min-width: 400px) {
    width: 100%; 
    margin-bottom: 5px; 
    text-align: center; 
}
}
`;

      
  
export const Total = styled.span`
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
      @media screen and (max-width: 980px) and (min-width: 400px) {
        font-size: 28px;
    }
`
  