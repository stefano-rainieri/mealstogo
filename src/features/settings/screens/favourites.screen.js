import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { Text } from "../../../components/typography/text.component";
import { FavouritesSafeArea } from "../components/settings.styles";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return !favourites?.length ? (
    <FavouritesSafeArea>
      <Text center>No favourites yet.</Text>
    </FavouritesSafeArea>
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
