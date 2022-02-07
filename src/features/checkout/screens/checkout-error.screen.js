import React from "react";

import { CartIcon, CartIconContainer } from "../components/checkout.styles";
import { Text } from "../../../components/typography/text.component";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CheckoutErrorScreen = ({ route }) => {
  const { error } = route.params;

  return (
    <SafeAreaView>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Spacer position="top" size="large" />
        <Text>{error.toString()}</Text>
      </CartIconContainer>
    </SafeAreaView>
  );
};
