import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favorites.context";

const List = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: ~~props.theme.space[3].replace("px", ""),
  },
}))``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const goToDetail = (item) =>
    navigation.navigate("RestaurantDetail", { restaurant: item });

  return (
    <SafeAreaView>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} color={Colors.red400} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar favourites={favourites} onDetail={goToDetail} />
      )}
      <List
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Spacer position="top" size="large">
            <TouchableOpacity onPress={() => goToDetail(item)}>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          </Spacer>
        )}
      />
    </SafeAreaView>
  );
};
