import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      min-height: 200px; // Adjust as needed
  }
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;


    img {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 800px) {
  width: 100%;
  margin-bottom: 10px;
}
`
export const BaseSpan = styled.span`
  width: 23%;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 10px;
}
`;
export const Value = styled.span`
  margin: 0 10px;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  align-items: center;
  width: 23%;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
}
`;

export const Arrow = styled.div`
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin: 0 10px;  // Making it touch friendly
}
`;

export const Price = styled(BaseSpan)`
width: 23%;
`
export const Name = styled(BaseSpan)`
font-size: 16px;
 @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`
