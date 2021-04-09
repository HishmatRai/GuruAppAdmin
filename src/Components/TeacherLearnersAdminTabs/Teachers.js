import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, Image, StatusBar } from "react-native";
import { Entypo } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Teachers = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };
    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });


    let CardData = [
        {TeacherName :"Teacher’s name"},
        {TeacherName :"Teacher’s name"},

    ]
    return (
        <View style={styles.container}>

            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar barStyle="white" hidden={false} backgroundColor="#013D6F" translucent={true} />
            {/* <<<<<<<< Body >>>>>>>>> */}
            <ScrollView style={styles.scrollView}>
                <View style={{ margin: 20 }}>

                    {/* >>>>>>>>>>>> Card Main >>>>>>>>>>>>>>>> */}
                    <View style={styles._card_main}>
                        {CardData.map((v,i)=>{
                            return(

                        <TouchableOpacity style={styles._card_btn}>
                            <View style={styles._card_header}>
                                <Image source={require('./../../img/TeacherProfileForStudents.png')} style={styles._teacher_profile_img} />
                                <Text style={styles._teacher_name}>{v.TeacherName}</Text>
                            </View>
                            <View style={styles._rating_main}>
                                <Entypo name="star" size={14} color="#FFC700" />
                                <Text style={styles._rating_show}>4.5</Text>
                            </View>
                        </TouchableOpacity>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4E6574"

    },
    _card_main: {
    },
    _teacher_profile_img: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    _card_header: {
        flexDirection: "row",
        alignItems: "center"
    },
    _teacher_name: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 10
    },
    _rating_main: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF0BA",
        borderColor: "#FFC700",
        borderWidth: 2,
        width: "20%",
        borderRadius: 20,
        padding: 1,
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: -20
    },
    _rating_show: {
        color: "#FFC700",
        fontWeight: "bold"
    },
    _card_btn: {
        paddingBottom: 5,
        paddingTop: 5,
        marginTop:10
    }
});

export default Teachers;



