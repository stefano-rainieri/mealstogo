import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCard = ({ name = "Ste" }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const expiry = values.expiry.split("/");

    const isIncomplete = Object.values(status).includes("incomplete");
    const isInvalid = Object.values(status).includes("invalid");
    if (isIncomplete || isInvalid) {
      return;
    }

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name,
    };

    const info = await cardTokenRequest(card);
    console.log(info);
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
