import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-repeat: no-repeat;
`
export const Body = styled.div`
    height: auto;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 4px solid black;
    border-width: 4px;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 20px;
      color: #4a4a4a;
      text-transform: uppercase;
      text-align: center;
    }

    p {
      font-weight: lighter;
      font-size: 16px;
    }

    @media screen and (max-width: 800px){
       h2 {
        font-size: 13.5px;
      }
    
      p {
        font-size: 12px;
      }
    }
`
export const DirectoryItemContainer = styled.div`
position: relative;
min-width: 30%;
height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 4px solid black;
overflow: hidden;
margin: 0 7.5px 15px;
border-width: 4px;
border-radius: 3px;

&:hover {
  cursor: pointer;

  & ${BackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  & ${Body}{
    opacity: 0.9;
  }

 

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px){
    height: 200px;
    
  }
  
`

