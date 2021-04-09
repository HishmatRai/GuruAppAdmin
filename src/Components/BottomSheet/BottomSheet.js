import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import DropDownPicker from "react-native-dropdown-picker";
const HomeTeachers = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [activeBtn, setActiveBtn] = useState(0);

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  return (
    <View style={styles.container}>
      {/* <<<<<<<<<<<<<<<<<<<<<<<  bottom sheet >>>>>>>>>>>>>>>>>>>>> */}
      <ScrollView>
        <View style={{ marginRight: 30, marginLeft: 30, marginTop: 10 }}>
          <Text style={{ color: "black", fontSize: 12 }}>March 15</Text>
          <View
            style={{ marginTop: 10, flexDirection: "row", alignSelf: "center" }}
          >
            <View style={{ width: "10%" }}>
              <Ionicons
                name="md-notifications"
                size={24}
                color="#1ED760"
                style={{ marginTop: 5 }}
              />
            </View>
            <View style={{ width: "90%" }}>
              <DropDownPicker
                items={[
                  { label: "Salsa class booking success.", value: "whoareyou" },
                  { label: "Deutsch", value: "de" },
                  { label: "French", value: "fr" },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => console.log(item.label, item.value)}
                placeholder="Salsa class booking success."
                itemStyle={{ justifyContent: "flex-start" }}
                style={{ backgroundColor: "transparent", color: "white" }}
                arrowColor="#404040"
                labelStyle={{
                  fontSize: 14,
                  textAlign: "left",
                  color: "#404040",
                  fontWeight: "bold",
                }}
                selectedLabelStyle={{
                  color: "white",
                }}
                dropDownStyle={{ backgroundColor: "#015093" }}
              />
            </View>
          </View>
          <View
            style={{ marginTop: 10, flexDirection: "row", alignSelf: "center" }}
          >
            <View style={{ width: "10%" }}>
              <Ionicons
                name="md-notifications"
                size={24}
                color="#0094FF"
                style={{ marginTop: 5 }}
              />
            </View>
            <View style={{ width: "90%" }}>
              <DropDownPicker
                items={[
                  { label: "Salsa class booking success.", value: "whoareyou" },
                  { label: "Deutsch", value: "de" },
                  { label: "French", value: "fr" },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => console.log(item.label, item.value)}
                placeholder="Salsa class booking success."
                itemStyle={{ justifyContent: "flex-start" }}
                style={{ backgroundColor: "transparent", color: "white" }}
                arrowColor="#D3D3D3"
                labelStyle={{
                  fontSize: 14,
                  textAlign: "left",
                  color: "#D3D3D3",
                  fontWeight: "bold",
                  border: "none",
                }}
                selectedLabelStyle={{
                  color: "#39739d",
                }}
                dropDownStyle={{ backgroundColor: "#015093" }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 40 }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default HomeTeachers;
