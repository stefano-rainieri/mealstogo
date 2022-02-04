import React, { useContext } from "react";

import { CreditCard } from "../components/credit-card.component";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { Text } from "../../../components/typography/text.component";

export const CheckoutScreen = () => {
  const { cart } = useContext(CartContext);

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(cart)}</Text>
      <CreditCard />
    </SafeAreaView>
  );
};
