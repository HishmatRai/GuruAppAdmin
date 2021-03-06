import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import VerificationCode1 from './../../Components/VerificationCode/VerificationCode'
const VerificationCode = (props) => {
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
                            <Text style={styles._header_heading}>Verify</Text>
                        </View>

                        {/* <<<<<<<< Heading >>>>>>>>> */}
                        <Text style={styles._sub_heading}>We Sent Verification Code To Your Email. Please Check Your Email.</Text>

                        {/* <<<<<<<< Register >>>>>>>>> */}
                        <View style={styles._register_main}>
                            <Text style={styles._new_user}>Didn???t Get The Code ? </Text>

                            {/* <<<<<<<< Sign up >>>>>>>>> */}
                            <TouchableOpacity>
                                <Text style={styles._register}> Resend Code.</Text>
                            </TouchableOpacity>
                        </View>

                        {/* <<<<<<<< VerificationCode >>>>>>>>> */}
                        <View style={styles._VerificationCode1}>
                            <VerificationCode1 />
                        </View>
                        {/* <<<<<<<< Login Button >>>>>>>>> */}
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("ResetPassword")}>
                            <Text style={styles._button_txt}>Verify</Text>
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

    _sub_heading: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        letterSpacing: 0.5,
        marginTop: 50,
        marginBottom: 20,
        
    },
    _register_main: {
        flexDirection: "row",
        marginTop: 30
    },
    _new_user: {
        color: "white",
        fontSize: 12
    },
    _register: {
        fontSize: 12,
        color: "#1ED760",
        borderBottomColor: "#1ED760",
        borderBottomWidth: 1

    },
    _VerificationCode1:{
        width: "70%",
        alignSelf:"center",
        marginTop:30
    
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
        color: "black",
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
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },
    _step_seven: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10
    },

});

export default VerificationCode;



