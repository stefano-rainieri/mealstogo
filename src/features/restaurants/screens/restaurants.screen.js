import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favorites.context";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -50px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants, errorRestaurants } =
    useContext(RestaurantsContext);
  const { error: errorLocation } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const goToDetail = (item) =>
    navigation.navigate("RestaurantDetail", { restaurant: item });

  return (
    <SafeAreaView>
      {isLoading && (
        <LoadingContainer>
          <Loading size={96} color={colors.brand.secondary} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onDetail={goToDetail} />
      )}

      {!!errorLocation || !!errorRestaurants ? (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving data.</Text>
        </Spacer>
      ) : (
        <RestaurantList
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Spacer position="top" size="large">
              <TouchableOpacity onPress={() => goToDetail(item)}>
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            </Spacer>
          )}
        />
      )}
    </SafeAreaView>
  );
};
