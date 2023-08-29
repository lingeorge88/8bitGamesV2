import styled from 'styled-components';
import Button  from '../button/button.component'

export const PaymentFormContainer = styled.div`
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-contnet: center;

@media screen and (max-width: 800px) and (min-width: 400px) {
    width: 100%; // Ensures it takes the full width on smaller screens
}
`

export const FormContainer = styled.form`
height: 100px;
min-width: 500px;

    h2 {
        margin-top: 30px;
    }

    @media screen and (max-width: 800px) and (min-width: 400px) {
        width: 100%; // Ensures it takes the full width on smaller screens
        min-width: unset; // Removes the minimum width requirement
    }
`
export const PaymentButton = styled(Button)`
margin-left: auto;
margin-top: 30px;
border: 4px solid black;
border-radius: 16px;
padding: 10px 15px;
background: rgb(182,140,187);
background: linear-gradient(90deg, rgba(182,140,187,0.9864320728291317) 0%, rgba(226,137,232,1) 29%, rgba(83,103,247,1) 74%, rgba(0,198,255,1) 100%);
color: white;
height: 60%;
@media screen and (max-width: 800px) and (min-width: 400px) {
    width: 90%; // Adjust as needed for smaller screens
    margin-left: 5%; // Center the button with equal margins on both sides
    margin-right: 5%;
}
`

export const StyledCardElementContainer = styled.div`
    margin-top: 20px;
`;