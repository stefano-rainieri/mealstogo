import createStripe from "stripe-client";

import { HOST } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51KPTUZLauRFBrc3PYMKo8xWJmPUq8BrGK3GBylTsnqkkTbknvUvrMptloi3nCHo89d7XDWqeAlelohCwEggJ59On007wcwVP7Q"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = async (token, amount) => {
  const response = await fetch(`${HOST}/pay`, {
    body: JSON.stringify({
      token,
      amount,
    }),
    method: "POST",
  });

  if (response.status > 200) {
    throw new Error("Something went wrong processing your payment.");
  }

  return response.json();
};
