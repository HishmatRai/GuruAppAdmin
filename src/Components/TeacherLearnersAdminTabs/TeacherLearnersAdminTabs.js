import React, { Component } from "react";
import { Tab, Tabs } from "native-base";
import Students from './Students';
import Teachers from './Teachers'
import { Text, View, ImageBackground } from "react-native";
export default class TeacherLearnersAdminTabs extends Component {
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
          heading="Teachers"
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
            <Teachers/>
          </View>
        </Tab>
        <Tab
          heading="Students"
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
            <Students />
          </View>
        </Tab>
      </Tabs>
    );
  }
}
