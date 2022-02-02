import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: ~~props.theme.space[3].replace("px", ""),
  },
}))``;
