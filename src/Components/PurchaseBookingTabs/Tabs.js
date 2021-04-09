import React, { Component } from "react";
import { Tab, Tabs } from "native-base";
import Purchased from "./Purchased.js";
import Booking from "./Booking";
import { Text, View, ImageBackground } from "react-native";
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Tabs
        tabBarUnderlineStyle={{
          backgroundColor: "transparent",
          alignSelf: "center",
          height: 6,
        }}
      >
        <Tab
          heading="Purchased"
          tabStyle={{ backgroundColor: "#023055", width: 50 }}
          textStyle={{ color: "gray", fontWeight: "bold" }}
          activeTabStyle={{ backgroundColor: "#004382" }}
          activeTextStyle={{
            color: "white",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          <View style={{ backgroundColor: "#004382" }}>
            <Purchased path={this.props.path}/>
          </View>
        </Tab>
        <Tab
          heading="Booking"
          tabStyle={{ backgroundColor: "#023055", width: 50 }}
          textStyle={{ color: "gray", fontWeight: "bold" }}
          activeTabStyle={{ backgroundColor: "#004382" }}
          activeTextStyle={{
            color: "white",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          <View style={{ backgroundColor: "#004382" }}>
            <Booking path={this.props.path}/>
          </View>
        </Tab>
      </Tabs>
    );
  }
}
