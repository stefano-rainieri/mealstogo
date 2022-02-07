module.exports.payRequest = async (request, response, client) => {
  const { amount, token } = JSON.parse(request.body);
  try {
    const paymentIntent = await client.paymentIntents.create({
      amount,
      currency: "EUR",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    });

    return response.json(paymentIntent);
  } catch (err) {
    response.status(400);
    response.send(err);
  }
};
