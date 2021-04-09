import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, TextInput, StatusBar } from "react-native";
import { FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Specialities = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [text, setText] = React.useState("");
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };
    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });


    let CategoryData = [
        { column1: "Slasa 01", column2: "Slasa 02", column3: "Salsa Cuban", },
        { column1: "Kizomba", column2: "Bachata", column3: "Zouk", },
    ]
    return (
        <View style={styles.container}>

            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar barStyle="white" hidden={false} backgroundColor="#013D6F" translucent={true} />
            {/* <<<<<<<< Body >>>>>>>>> */}
            <ScrollView style={styles.scrollView}>
                <View style={{ margin: 20 }}>
                    <View style={styles._card_main}>
                        <View style={styles._edit_main}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={styles._edit_text}>Dance</Text>
                            </View>
                            <TouchableOpacity>
                                <FontAwesome5 name="pen" size={18} color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles._Specialities}>Specialities </Text>

                        <View style={styles._Categories_main}>
                            {CategoryData.map((v, i) => {
                                return (
                                    <View style={styles._Categories_row_main}>
                                        <View style={styles._Categories_columns}>
                                            <FontAwesome name="circle" size={15} color="#004382" />
                                            <Text style={styles._Categories_columns_data}>{v.column1}</Text>
                                        </View>
                                        <View style={styles._Categories_columns}>
                                            <FontAwesome name="circle" size={15} color="#004382" />
                                            <Text style={styles._Categories_columns_data}>{v.column2}</Text>
                                        </View>
                                        <View style={styles._Categories_columns}>
                                            <FontAwesome name="circle" size={15} color="#004382" />
                                            <Text style={styles._Categories_columns_data}>{v.column3}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={styles._add_main}>
                            <View style={styles._email_input_main}>
                                <TextInput
                                    placeholder="Enter New Speciality"
                                    value={text}
                                    onChangeText={(text) => setText(text)}
                                    style={styles._input}
                                    underlineColor="white"
                                    placeholderTextColor="gray"
                                />
                            </View>
                            <TouchableOpacity style={styles.add_new_button}>
                                <Text style={styles.add_new_button_text}>Add new</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.add_new_catagory_button}>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    _card_main: {
        backgroundColor: "#011623",
        marginTop: 50,
        borderRadius: 5,
        padding: 20
    },
    _ToggleButtons: {
        // alignSelf: "flex-end",
        // backgroundColor:"green"
    },
    _edit_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _edit_text: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginRight: 20
    },
    _Specialities: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5
    },
    _Categories_row_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10
    },
    _Categories_columns: {
        flexDirection: "row",
        alignItems: "center",
        width: "30%"
    },
    _Categories_columns_data: {
        color: "white",
        fontSize: 12,
        paddingLeft: 10
    },
    add_new_button: {
        padding: 10,
        backgroundColor:"#0085FF",
        marginLeft:"5%",
        borderRadius:5,
        width: "30%"
    },
    add_new_button_text: {
        color: "white",
        fontSize: 15,
        fontWeight:"bold",
        textAlign:"center"
    },
    add_new_catagory_button: {
        flexDirection: "row",
        alignItems: "center",
        width: "70%",
        padding: 10,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 160
    },
    add_new_catagory_button_text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    _email_input_main: {
        borderBottomWidth: 2,
        borderBottomColor: "gray",
        marginTop: 10,
        width:"60%"
    },
    _input: {
        padding: 5,
        color: "gray",
    },
    _add_main:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20
    }
});

export default Specialities;



