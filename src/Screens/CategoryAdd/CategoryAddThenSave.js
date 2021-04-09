import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import CategoryAddTabs from './../../Components/CategoryAddTabs/CategoryAddTabs'
const CategoryAddThenSave = (props) => {
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
                            <Text style={styles._header_heading}>Add</Text>
                        </View>
                    </View>
                        {/* <<<<<<<<<<<  TeacherLearnersAdminTabs >>>>>>>>>>>>>>>>>>*/}
                        <View style={styles._TeacherLearnersAdminTabs}>
                            <CategoryAddTabs path={props.navigation}/>
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
    _TeacherLearnersAdminTabs:{
        marginTop:30
    }
});

export default CategoryAddThenSave;



