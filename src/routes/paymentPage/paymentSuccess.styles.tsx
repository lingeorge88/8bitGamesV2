import styled from 'styled-components';

export const CenteredContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;  
    border: none;

`;

export const MessageContainer = styled.section`
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
    flex-direction: column-reverse;
    width: 100%; 
    margin-bottom: 10px; 
      }
`;

export const MessageDiv = styled.div`
margin-left: 20px;

`