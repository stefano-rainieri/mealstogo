import React from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Favourite } from "../../../components/favourites/favourite.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Info,
  Rating,
  Reviews,
  Star,
  Times,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    address = "100 some random street",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    isClosedTemporarily = true,
    name = "Some Restaurant",
    isOpenNow = true,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking.jpg",
    ],
    placeId,
    rating = 4.5,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <Favourite restaurant={restaurant} />
      <Card.Title title={name} subtitle={address} />
      <Card.Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Reviews>
          {ratingArray.map((_, index) => (
            <Star
              xml={star}
              width={20}
              height={20}
              key={`star-${placeId}-${index}`}
            />
          ))}
          <Rating>&nbsp;&nbsp;({rating})</Rating>
        </Reviews>
        <Times>
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && (
            <Spacer position="left" size="large">
              <SvgXml xml={open} width={20} height={20} />
            </Spacer>
          )}
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </Times>
      </Info>
      <Card.Actions />
    </Card>
  );
};
