import styled from "styled-components/native";
import {
  ActivityIndicator,
  Avatar,
  Button,
  TextInput,
} from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 96,
})`
  background-color: ${(props) => props.bg || colors.brand.secondary};
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[2]};
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
  dark: true,
})`
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => `${props.theme.space[2]} ${props.theme.space[2]}`};
`;

export const ClearButton = styled(Button).attrs({
  color: colors.brand.primary,
  dark: true,
})`
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => `${props.theme.space[2]} ${props.theme.space[2]}`};
  border: 1px solid
    ${(props) =>
      props.disabled
        ? props.theme.colors.ui.disabled
        : props.theme.colors.brand.primary};
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: colors.brand.secondary,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
