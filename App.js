// In App.js in a new project

import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0B3954" }}>
        <Button color="#BFD7EA" title="Go to Details" onPress={() => this.props.navigation.navigate("Details")} />
      </View>;
  }
}

class DetailsScreen extends React.Component {
  render() {
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#087E8B" }}>
        <Button color="#BFD7EA" title="Go to Home" onPress={() => this.props.navigation.navigate("Home")} />
      </View>;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
