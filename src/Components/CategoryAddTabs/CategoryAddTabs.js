import React, { Component } from "react";
import { Tab, Tabs } from "native-base";
import Specialities from './Specialities';
import Categories from './Categories'
import { Text, View, ImageBackground } from "react-native";
export default class CategoryAddTabs extends Component {
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
          heading="Categories"
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
            <Categories path={this.props.path}/>
          </View>
        </Tab>
        <Tab
          heading="Specialities"
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
            <Specialities path={this.props.path}/>
          </View>
        </Tab>
      </Tabs>
    );
  }
}
