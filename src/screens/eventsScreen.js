import React from "react";
import { View, Button } from "react-native";

export default class EventsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#087E8B"
        }}
      >
        <Button
          color="#BFD7EA"
          title="Go to Blue"
          onPress={() => this.props.navigation.navigate("Blue")}
        />
      </View>
    );
  }
}
