import React, { useContext, useEffect, useRef, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const PHOTO_KEY = "@photo";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (!cameraRef) {
      return;
    }

    const photo = await cameraRef.current.takePictureAsync();
    await AsyncStorage.setItem(`${PHOTO_KEY}-${user.uid}`, photo.uri);
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera.</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ratio={"16:9"}
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
