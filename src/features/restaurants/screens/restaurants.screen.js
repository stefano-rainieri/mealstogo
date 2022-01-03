import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaView } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

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

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeAreaView>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} color={Colors.red400} />
        </LoadingContainer>
      )}

      <Search />
      <List
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Spacer position="top" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
      />
    </SafeAreaView>
  );
};
