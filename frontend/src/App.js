import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />{' '}
            <Route path='/admin/userlist' element={<UserListScreen />} />{' '}
            <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
            <Route path='/admin/productlist' element={<ProductListScreen />} />
            {/* exact means that this route will only match the exact path */}
            <Route exact path='/' element={<HomeScreen />} />{' '}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
