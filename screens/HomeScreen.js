import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen / Feed</Text>
      <Button
        title="new tweet"
        onPress={() => navigation.navigate("New Tweet")}
      />
      <Button
        title="tweet screen"
        onPress={() => navigation.navigate("Tweet Screen")}
      />
      <Button
        title="profile screen"
        onPress={() => navigation.navigate("Profile Screen")}
      />
    </View>
  );
};

export default HomeScreen;
