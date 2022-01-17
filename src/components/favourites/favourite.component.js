import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/favorites.context";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: ${(props) => props.theme.colors.text.primary};
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const theme = useTheme();
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find(
    (item) => item.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : theme.colors.text.primary}
      />
    </FavouriteButton>
  );
};
