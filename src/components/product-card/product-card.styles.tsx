import styled from 'styled-components';

export const ProductCardContainer = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    height: 400px;
    align-items: center;
    position: relative;
    border: 4px dashed black;
    border-width: 4px;
    border-radius: 5px;
    overflow: auto;
  
    img {
      width: 100%;
      height: 80%;
      object-fit: contain;
      margin-bottom: 5px;
    }
  
    button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;
    }
  
    &:hover {
      img {
        opacity: 0.8;
      }
  
      button {
        opacity: 0.85;
        display: flex;
      }
    }

    @media screen and (max-width: 980px){
      width: 40vw;
      button {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;

        &:hover {
          .image{
            opacity: unset;
          }
          button {
            opacity: unset;
          }
        }
      }
    }

    @media screen and (max-width: 400px){
      width: 80vw;
    }
`

export const Footer = styled.div`
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
`
export const Name = styled.span`
  width: 90%;
  margin-left: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const Price = styled.span`
  width: 10%;
  margin-top: 10px;
  @media screen and (max-width: 800px){
    font-size: 12px;
  }
`;
  