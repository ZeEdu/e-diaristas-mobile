import React from "react";
import { View, Text } from "react-native";

export default function Index() {
  const handlePress = () => {
    console.log("hello World");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button mode={"contained"} onPress={handlePress}>
        Encontrar Diarista
      </Button>
    </View>
  );
}
