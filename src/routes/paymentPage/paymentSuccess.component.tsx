import { useLocation } from 'react-router-dom';
import { MessageDiv, MessageContainer, CenteredContainer } from './paymentSuccess.styles';

const PaymentSuccess: React.FC = () => {
  const location = useLocation();
    const name = location.state?.name || 'Guest';

  return (
      <CenteredContainer  className="nes-container">
          <section className="message-list">
              <MessageContainer className="message -left">
                  <i className="nes-bcrikko"></i>
                  <MessageDiv className="nes-balloon from-left">
                      <p>Thank you for your purchase,{name} !</p>
                      <p> We hope to see you again soon!</p>
                  </ MessageDiv>
              </MessageContainer>
          </section>
      </CenteredContainer >
  );
}

export default PaymentSuccess;