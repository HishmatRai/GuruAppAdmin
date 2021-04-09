import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
const Analysis = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [activeBtn, setActiveBtn] = useState(1);

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };
    let Buttons = [
        { value: "1 month" },
        { value: "3 months" },
        { value: "6 months" },
        { value: "1 year" },
    ];
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
                            <Text style={styles._header_heading}>Analysis</Text>

                        </View>
                        <View style={styles._online_btn_main}>
                            {Buttons.map((v, i) => {
                                return (
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => setActiveBtn(i)}
                                        style={
                                            activeBtn === i
                                                ? {
                                                    backgroundColor: "#0085FF",
                                                    borderRadius: 5,
                                                    width: "24%",
                                                    paddingTop: 0,
                                                    borderRadius: 20,
                                                    borderColor: "#0085FF",
                                                    borderWidth: 2,
                                                }
                                                : {
                                                    borderColor: "#0085FF",
                                                    borderWidth: 2,
                                                    width: "24%",
                                                    padding: 0,
                                                    borderRadius: 20,
                                                }
                                        }
                                    >
                                        <Text style={styles._button_txt}>{v.value}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                    <View>
                        <LineChart
                            data={{
                                //   labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            // yAxisLabel="$"
                            // yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#e26a00",
                                backgroundGradientFrom: "#0085FF",
                                backgroundGradientTo: "#0085FF",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                    <View style={styles._new_button_main}>
                        <TouchableOpacity style={styles._new_button}>
                            <Feather name="user" size={24} color="white" />
                            <Text style={styles._new_button_text}>Connecting users</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._new_button2}>
                            <MaterialCommunityIcons name="google-classroom" size={24} color="white" />
                            <Text style={styles._new_button_text}>New Classes</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

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
    _TeacherLearnersAdminTabs: {
        marginTop: 30
    },
    _online_btn_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25,
        marginBottom:20
    },
    _button_txt: {
        fontWeight: "bold",
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: "center",
        color: "white",
        fontSize: 13,
    },
    _new_button_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        alignSelf: "center",
        marginTop: 50
    },
    _new_button: {
        backgroundColor: "#FFC700",
        padding: 15,
        borderRadius: 5,
        width: "45%",
        flexDirection: "row",
        alignItems: "center"
    },
    _new_button2: {
        backgroundColor: "#FF3B53",
        padding: 15,
        borderRadius: 5,
        width: "45%",
        flexDirection: "row",
        alignItems: "center"
    },
    _new_button_text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        margin: 5,
    }
});

export default Analysis;



