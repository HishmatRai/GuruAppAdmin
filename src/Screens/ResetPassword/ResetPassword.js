import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import AsyncStorage from "@react-native-async-storage/async-storage";
const ResetPassword = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [text, setText] = React.useState('');
    const [text2, setText2] = React.useState('');
    const [eyeIcon, setEyeIcon] = useState(false);
    const [reEnter, setReEnter] = useState(false);
    const [remember, setRemember] = useState(false);
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    const handler_Done = async () => {
        try {
          var userValue = await AsyncStorage.getItem("user");
          userValue = JSON.parse(userValue);
          if (userValue === "Student") {
            props.navigation.navigate("HomeTeachers");
          } else if (userValue === "Teacher") {
            props.navigation.navigate("HomeTeachers");
          }
        } catch (e) {
          console.log(e.message);
        }
      };
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
                            <Text style={styles._header_heading}>Password Reset</Text>
                        </View>

                        {/* <<<<<<<< Heading >>>>>>>>> */}
                        <Text style={styles._heading}>Enter new password</Text>

                        {/* <<<<<<<< Password >>>>>>>>> */}
                        <View style={styles._email_input_main}>
                            <View style={styles.passwordInputView}>
                                <TextInput
                                    style={styles._input2}
                                    placeholder="New password"
                                    secureTextEntry={eyeIcon}
                                    placeholderTextColor="white"
                                />
                                {eyeIcon ? (
                                    <Ionicons name="eye" size={24} color="white" onPress={() => setEyeIcon(!eyeIcon)} />
                                ) : (
                                    <Ionicons name="eye-off" size={24} color="white" onPress={() => setEyeIcon(!eyeIcon)} />
                                )}
                            </View>
                        </View>

                        {/* <<<<<<<< Re-enter Password >>>>>>>>> */}
                        <View style={styles._email_input_main}>
                            <View style={styles.passwordInputView}>
                                <TextInput
                                    style={styles._input2}
                                    placeholder="Re-enter new password"
                                    secureTextEntry={reEnter}
                                    placeholderTextColor="white"
                                />
                                {reEnter ? (
                                    <Ionicons name="eye" size={24} color="white" onPress={() => setReEnter(!reEnter)} />
                                ) : (
                                    <Ionicons name="eye-off" size={24} color="white" onPress={() => setReEnter(!reEnter)} />
                                )}
                            </View>
                        </View>


                        {/* <<<<<<<< Remember >>>>>>>>> */}
                        <View style={styles._forgot_remember_main}>

                            {/* <<<<<<<< Remember >>>>>>>>> */}
                            <View style={styles._remember_main}>
                                {remember ? (
                                    <MaterialCommunityIcons name="checkbox-multiple-marked-outline" size={24} color="white" onPress={() => setRemember(!remember)} />
                                ) : (
                                    <MaterialCommunityIcons name="checkbox-multiple-marked" size={24} color="white" onPress={() => setRemember(!remember)} />
                                )}
                                <Text style={styles._remember_text}>Remember Password</Text>
                            </View>

                        </View>


                        {/* <<<<<<<< Login Button >>>>>>>>> */}
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("HomeTeachers")}>
                            <Text style={styles._button_txt}>Done</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                {/* <<<<<<<< Step >>>>>>>>> */}
                <View style={styles._step_main}>
                    <View style={styles._step_one}>
                        <Text style={styles._step_one_text}>1</Text>
                    </View>
                    <View style={styles._step_two}></View>
                    <View style={styles._step_three}></View>
                    <View style={styles._step_four}>
                        <Text style={styles._step_four_text}>2</Text>
                    </View>
                    <View style={styles._step_five}></View>
                    <View style={styles._step_six}></View>
                    <View style={styles._step_seven}>
                        <Text style={styles._step_seven_text}>3</Text>
                    </View>
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

    button: {
        // backgroundColor: "green",
        borderRadius: 50,
        width: "50%",
        alignSelf: "center",
        marginTop: 50,
        backgroundColor: "#1ED760"
    },
    _button_txt: {
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
        color: "white",
        fontSize: 20,
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


    _heading: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 50,
        letterSpacing: 0.5,
        marginBottom:40

    },
    _email_input_main: {
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    _input: {
        padding: 5,
        color: "black"
    },
    _remember_main: {
        flexDirection: "row",
        alignItems: "center",
    },
    _remember_text: {
        color: "white",
        marginLeft: 10,
    },
    _step_main: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        bottom: 20
    },
    _step_one: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        backgroundColor: "#1ED760",
        alignItems: "center",
        justifyContent: "center"
    },
    _step_one_text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    },
    _step_four_text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    },
    _step_seven_text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    },
    _step_two: {
        height: 10,
        width: 60,
        borderRadius: 5,
        backgroundColor: "#1ED760",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    _step_three: {
        height: 10,
        width: 60,
        borderRadius: 5,
        backgroundColor: "#1ED760",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    _step_four: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        backgroundColor: "#1ED760",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    _step_five: {
        height: 10,
        width: 60,
        borderRadius: 5,
        backgroundColor: "#1ED760",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    _step_six: {
        height: 10,
        width: 60,
        borderRadius: 5,
        backgroundColor: "#1ED760",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    _step_seven: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        backgroundColor: "#1ED760",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    passwordInputView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _input2: {
        padding: 5,
        color: "white",
        width: "80%"
    },
    _forgot_remember_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
});

export default ResetPassword;



