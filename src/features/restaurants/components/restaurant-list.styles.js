import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: ~~props.theme.space[3].replace("px", ""),
  },
}))``;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
  dark: true,
  icon: "cash",
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;
