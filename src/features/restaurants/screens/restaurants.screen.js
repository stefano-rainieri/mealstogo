import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

const List = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    console.log("[DEBUG] query:", query);
    setSearchQuery(query);
  };

  return (
    <SafeAreaView>
      <Search>
        <Searchbar onChangeText={onChangeSearch} value={searchQuery} />
      </Search>
      <List>
        <RestaurantInfoCard />
      </List>
    </SafeAreaView>
  );
};
