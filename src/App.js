import { Routes, Route} from 'react-router-dom';
import {  useEffect, lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';
import "nes.css/css/nes.min.css";
import { Spinner } from './components/spinner/spinner.component';
import { GlobalStyle } from './global.styles';
const PaymentSuccess = lazy(() => import('./routes/paymentPage/paymentSuccess.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(()=> import('./routes/authentication/authentication.component'));
const Navigation = lazy(()=> import('./routes/navigation/navigation.component'));
const Shop = lazy(()=> import('./routes/shop/shop.component'));
const CheckOut = lazy(()=> import('./routes/checkout/checkout.component'));


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

    return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path = '/' element = {<Navigation />}>
        <Route index element={<Home />} />
        <Route path = '/auth' element= {<Authentication />}/>
        <Route path = '/shop/*' element ={<Shop />}/>
        <Route path = '/checkout' element = {<CheckOut />}/>
        <Route path = '/success' element = {<PaymentSuccess />}/>
        </Route>
      </Routes>
    </Suspense>
    )
};

export default App;