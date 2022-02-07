import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCard = ({ name, onSuccess, onError }) => {
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

    try {
      const info = await cardTokenRequest(card);
      onSuccess(info);
    } catch (error) {
      onError();
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
