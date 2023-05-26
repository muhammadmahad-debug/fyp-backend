import stripe from 'stripe';
import  ReservationSchema  from '../models/Reservations.js' 

const stripeInstance = stripe('sk_test_51H64odEGhJpVZtxXTBVcvT34NrAZp0A5x5gdA32IAgN6Ac6adoKrOPMqiKaaRmf0sQ8iUvFVbIIvjqn1UXjsixTC00hWhpxTvu');
export const createPayment = async (req, res, next) => {
 const {token , date , chargeBoxId } = req.body; // Token received from the client-side Stripe Checkout component
 console.log("🚀 ~ file: StripeController.js:7 ~ createPayment ~ chargeBoxId:", chargeBoxId)

  try {
     await stripeInstance.charges.create({
      amount: 1000, // Amount in cents
      currency: 'USD',
      source: token.id,
      description: 'Thanks for the Reservation'
    });
            const reserve = new ReservationSchema({
            chargeboxId:  chargeBoxId , reservationDate : date
    }); // Updated from Reserve to Reservations
    await reserve.save();   

    res.status(200).json({ message: 'Charge created successfully' });
  } catch (error) {
    console.log("🚀 ~ file: StripeController.js:22 ~ createPayment ~ error:", error)
    res.status(500).json({ error: 'Error creating charge' });
  }

};