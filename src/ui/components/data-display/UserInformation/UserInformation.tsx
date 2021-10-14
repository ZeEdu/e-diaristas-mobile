import React, { FC } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";
import {
  InformationContainer,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  Username,
} from "./UserInformation.style";

export interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
  darker?: boolean;
}

const UserInformation: FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
  darker,
}) => {
  return (
    <UserInformationContainer darker={Boolean(darker)}>
      <Avatar.Image source={{ uri: picture }} />
      <InformationContainer>
        <Username>{name}</Username>
        <RatingStyled defaultRating={rating} />
        <UserDescription>{description}</UserDescription>
      </InformationContainer>
    </UserInformationContainer>
  );
};

export default UserInformation;
