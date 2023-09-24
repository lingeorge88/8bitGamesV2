import styled from 'styled-components';
import Button  from '../button/button.component'
import FormInput from '../form-input/form-input.component';

export const PaymentFormInput = styled(FormInput)`
        border: 4px solid black;  
        border-radius: 5px; 
        margin: 4px 0;
        padding: 0.8rem;
        color:black;

        & label {  // Targeting the label inside PaymentFormInput
            left: 10px;
            
        }
`;

export const PaymentFormContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
justify-contnet: center;
padding-bottom: 500px;

@media screen and (max-width: 800px) {
    width: 100%; 
}
`

export const FormContainer = styled.form`
height: 100px;
min-width: 500px;

    h2 {
        margin-top: 30px;
    }

    @media screen and (max-width: 800px) {
        width: 100%; 
        min-width: unset; 
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
@media screen and (max-width: 800px) {
    width: 90%; 
    margin-left: 5%; 
    margin-right: 5%;
}
`

export const StyledCardElementContainer = styled.div`
width: 100%;
padding: 1rem;  // Provide space inside the Stripe Card container
    border: 4px solid black;  // Match border with PaymentFormInput
    border-radius: 4px;
font-size: 16px;
margin: 4px 0;
transition: border-color 0.3s ease;

&:focus {
    border-color: #007bff;  // Change to a color that matches your theme
    outline: none;
}

&::placeholder {
    color: #888;
}
margin-top: 20px; // Keep your margin-top value
`;


export const cardElementStyles = {
    style: {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
};
