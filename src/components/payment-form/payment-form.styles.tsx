import styled from 'styled-components';
import Button  from '../button/button.component'

export const PaymentFormContainer = styled.div`
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-contnet: center;
`

export const FormContainer = styled.form`
height: 100px;
min-width: 500px;

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
`