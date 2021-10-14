import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { View } from "react-native";
import Button from "ui/components/inputs/Button/Button";
import { RootStackParamList } from "ui/router/Router";

type NavigationProp = StackNavigationProp<RootStackParamList, "Index">;

interface IndexProps {
  navigation: NavigationProp;
}

const Index: FC<IndexProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("EncontrarDiaristas");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button mode={"contained"} onPress={handlePress}>
        Encontrar Diarista
      </Button>
    </View>
  );
};
export default Index;
