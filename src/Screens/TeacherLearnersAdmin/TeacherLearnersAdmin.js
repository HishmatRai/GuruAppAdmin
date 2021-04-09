import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput } from "react-native";
import {
    Fontisto,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome,
    Feather,
    Ionicons
  } from "@expo/vector-icons";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import TeacherLearnersAdminTabs from './../../Components/TeacherLearnersAdminTabs/TeacherLearnersAdminTabs'
const TeacherLearnersAdmin = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');

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

            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar barStyle="white" hidden={false} backgroundColor="#013D6F" translucent={true} />
            <ImageBackground source={require('./../../img/login_background.png')} style={styles._image}>

                {/* <<<<<<<< Body >>>>>>>>> */}
                <ScrollView style={styles.scrollView}>
                    <View style={{ margin: 20 }}>

                        {/* <<<<<<<< Header >>>>>>>>> */}
                        <View style={styles._header_main}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <Ionicons name="ios-chevron-back-outline" size={34} color="white" />
                            </TouchableOpacity>
                            <Text style={styles._header_heading}>Users</Text>
                        </View>
                    </View>
                        {/* <<<<<<<<<<<  TeacherLearnersAdminTabs >>>>>>>>>>>>>>>>>>*/}
                        <View style={styles._TeacherLearnersAdminTabs}>
                            <TeacherLearnersAdminTabs />
                        </View>
                </ScrollView>
{/* tab bar */}
<View style={styles._tab_bar_main}>
          <TouchableOpacity onPress={() => props.navigation.navigate("HomeTeachers")}>
            <FontAwesome name="qrcode" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Analysis")}
          >
          <Fontisto name="equalizer" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._add_btn}
           onPress={() => props.navigation.navigate("CategoryAdd")}>
            <AntDesign name="plus" size={24} color="#004382" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>props.navigation.navigate("LogIn")}
          >
            <MaterialCommunityIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("TeacherLearnersAdmin")}
          >
            <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#014F92"

    },
    _image: {
        flex: 1,
        resizeMode: 'cover',
        height: "100%"
    },
    _header_main: {
        marginTop: 40,
        flexDirection: "row",
        // alignItems:"center"
    },
    _header_heading: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 20
    },
    _TeacherLearnersAdminTabs:{
        marginTop:30
    },
      // tabs
  _tab_bar_main: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "transparent",
  },
  _add_btn: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default TeacherLearnersAdmin;



