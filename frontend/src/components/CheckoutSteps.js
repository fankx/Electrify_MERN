import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>
              <i className='fas fa-user-circle'></i>
              <span className='ml-2'>Login</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i className='fas fa-user-circle'></i>
            <span className='ml-2'>Login</span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>
              <i className='fas fa-map-marker-alt'></i>
              <span className='ml-2'>Shipping</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i className='fas fa-map-marker-alt'></i>
            <span className='ml-2'>Shipping</span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>
              <i className='fas fa-credit-card'></i>
              <span className='ml-2'>Payment</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i className='fas fa-credit-card'></i>
            <span className='ml-2'>Payment</span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>
              <i className='fas fa-check-circle'></i>
              <span className='ml-2'>Place Order</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <i className='fas fa-check-circle'></i>
            <span className='ml-2'>Place Order</span>
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
