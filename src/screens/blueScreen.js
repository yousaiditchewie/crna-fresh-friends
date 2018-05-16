import React from "react";
import { View, Button } from "react-native";

export default class BlueScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B3954"
        }}
      >
        <Button
          color="#BFD7EA"
          title="Go to Events"
          onPress={() => this.props.navigation.navigate("Events")}
        />
      </View>
    );
  }
}
