import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePickUpTime } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { pickUpTime } = cart
  // might have to create two seperate functions for pickUpTime and shippingAddress
  // if it doesn't work combine the two forms, create a note on frontend that says to fill in arbituray values inside "Shipping Address"

  const [month, setMonth] = useState(pickUpTime.month)
  const [day, setDay] = useState(pickUpTime.day)
  const [year, setYear] = useState(pickUpTime.year)
  const [time, setTime] = useState(pickUpTime.time)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePickUpTime({ month, day, year, time }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Pick Up Time</h1>
      <Form onSubmit={submitHandler} className="mb-5">
        <Form.Group controlId="month">
          <Form.Label>Month</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter month"
            value={month}
            required
            onChange={(e) => setMonth(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="day">
          <Form.Label>Day</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter day"
            value={day}
            required
            onChange={(e) => setDay(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year"
            value={year}
            required
            onChange={(e) => setYear(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
