import React from "react";

import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";

export const CheckoutSuccessScreen = () => (
  <SafeAreaView>
    <CartIconContainer>
      <CartIcon icon="check-bold" bg={colors.ui.success} />
      <Spacer position="top" size="large" />
      <Text>Success!</Text>
    </CartIconContainer>
  </SafeAreaView>
);
