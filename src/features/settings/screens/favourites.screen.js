import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const SafeArea = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return !favourites?.length ? (
    <SafeArea>
      <Text center>No favourites yet.</Text>
    </SafeArea>
  ) : (
    <RestaurantList
      data={favourites}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Spacer position="top" size="large">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        </Spacer>
      )}
    />
  );
};
