import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { StripeCardElement } from '@stripe/stripe-js';
import  { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector'
import { PaymentFormContainer, FormContainer, PaymentButton, StyledCardElementContainer, cardElementStyles, PaymentFormInput } from './payment-form.styles';
import { emptyCart } from '../../store/cart/cart.action';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

export const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [ isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    if(!stripe || !elements) {
        return;
    }
    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }).then((res) => {
        return res.json();
      });
      const { paymentIntent: {client_secret} }= response;
     
      const cardDetails = elements.getElement(CardElement);
      if( !ifValidCardElement(cardDetails) ) return;
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest',
          }
        }
      })

      setIsProcessingPayment(false);
      if(paymentResult.error){
        alert(paymentResult.error)
      } else {
        if(paymentResult.paymentIntent.status === 'succeeded'){
          setFullName("");
    setEmail("");
    setAddress("");
    setZip("");
    dispatch(emptyCart());
    
    navigate('/success', { state: { name: fullName } });
        }
      }
    }

    return (
    <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>

        <PaymentFormInput label="Name on Card" type="text" id="fullName"  value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required />
        <PaymentFormInput label="Email" type="email" id="email"  value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required />

    <StyledCardElementContainer>
      <CardElement options={cardElementStyles} className='cardElement'/>
      </StyledCardElementContainer>

      <PaymentFormInput label="Billing Address" type="text" id="address" value={address}
            onChange={(e) => setAddress(e.target.value)} required />

      <PaymentFormInput label="Postal Code" type= "num" id="zip" value={zip}
            onChange={(e) => setZip(e.target.value)}  required />
   

        <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </PaymentButton>
    </FormContainer>
    </PaymentFormContainer>
    )
}