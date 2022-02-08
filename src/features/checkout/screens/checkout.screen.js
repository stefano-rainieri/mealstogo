import React, { Fragment, useContext, useState } from "react";
import { ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";

import { CreditCard } from "../components/credit-card.component";
import {
  CartIcon,
  CartIconContainer,
  ClearButton,
  NameInput,
  PayButton,
  PaymentProcessing,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CartContext } from "../../../services/cart/cart.context";
import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onError = (error) => {
    navigation.navigate("CheckoutError", {
      error: error || "Something went wrong with your credit card.",
    });
  };

  const onPay = async () => {
    if (!card || !card.id) {
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });

      return;
    }

    try {
      setIsLoading(true);
      await payRequest(card.id, sum);

      clearCart();
      navigation.navigate("CheckoutSuccess");
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!cart || !restaurant) {
    return (
      <SafeAreaView>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Spacer position="top" size="large">
            <Text>Your cart is empty!</Text>
          </Spacer>
        </CartIconContainer>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="large">
          <Spacer position="top" size="large" />
          <Text>Your Order</Text>
          <List.Section>
            {cart.map(({ item, price }, index) => (
              <Fragment key={`${item}-${index}`}>
                <List.Item
                  title={
                    <Text variant="label">
                      {item} - {price / 100}€
                    </Text>
                  }
                />
                <Divider />
              </Fragment>
            ))}
          </List.Section>
          <Spacer position="right" size="large">
            <Spacer position="top" size="medium" />
            <Text variant="summary">Total: {sum / 100}€</Text>
            <Spacer position="top" size="medium" />
          </Spacer>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(value) => setName(value || "")}
        />
        <Spacer position="top" size="medium" />
        {name.length > 0 && (
          <CreditCard name={name} onSuccess={setCard} onError={onError} />
        )}
        <Spacer position="top" size="medium" />
        <ClearButton
          disabled={isLoading}
          icon="cart-off"
          mode="outline"
          onPress={clearCart}
        >
          Clear cart
        </ClearButton>
        <PayButton
          disabled={isLoading}
          icon="cash"
          mode="contained"
          onPress={onPay}
        >
          Order now!
        </PayButton>
      </ScrollView>
    </SafeAreaView>
  );
};
