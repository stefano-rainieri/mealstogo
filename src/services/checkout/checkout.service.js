import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KPTUZLauRFBrc3PYMKo8xWJmPUq8BrGK3GBylTsnqkkTbknvUvrMptloi3nCHo89d7XDWqeAlelohCwEggJ59On007wcwVP7Q"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
