import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { pickUpTime } = cart
  // might have to create two seperate functions for pickUpTime and shippingAddress
  // if it doesn't work combine the two forms, create a note on frontend that says to fill in arbituray values inside "Shipping Address"

  if (!pickUpTime) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler} className="mb-5">
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
