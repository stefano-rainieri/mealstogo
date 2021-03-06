import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 0;
`;

export const FavouritesBar = ({ favourites, onDetail }) => {
  if (!favourites?.length) {
    return null;
  }

  return (
    <FavouritesWrapper elevation={5}>
      <Spacer position="left" size="medium">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <Spacer
            key={restaurant.name.split(" ").join("")}
            position="left"
            size="medium"
          >
            <TouchableOpacity onPress={() => onDetail(restaurant)}>
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};
