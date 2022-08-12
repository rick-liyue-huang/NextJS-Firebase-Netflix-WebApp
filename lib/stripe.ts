// config the stripe

import {
  createCheckoutSession,
  getStripePayments,
} from '@stripe/firestore-stripe-payments';
import app from '../firebase';

const payments = getStripePayments(app, {
  customersCollection: 'customers',
  productsCollection: 'products',
});

const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin, // can be any domain in production stage
    cancel_url: window.location.origin,
  })
    .then((snapshot) => window.location.assign(snapshot.url)) // if everything fine, will redirect to stripe portal, let customer see the secret page.
    .catch((err) => console.log(err.message));
};

export { loadCheckout, payments };
