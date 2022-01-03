import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
