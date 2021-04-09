import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput, ShadowPropTypesIOS } from "react-native";
import { MaterialCommunityIcons, FontAwesome, Ionicons, Entypo, AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import TeachersRating from './../../Components/TeachersRating/TeachersRating';
import { Video, AVPlaybackStatus } from "expo-av";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const TeacherProfileForStudents = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [status, setStatus] = useState(true);
    const video = React.useRef(null);
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });


    let ReviewCardData = [
        {
            UserName: 'Amie Janes Bachata',
            userDes: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            techersName: "Teacher’s",
            teachersReview: "Typically, Lorem Ipsum text consists of a jumbled",
            teachersReviewDate: "12th March",
            
        },
        {
            UserName: 'Amie Janes Bachata',
            userDes: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            techersName: "Teacher’s",
            teachersReview: "Typically, Lorem Ipsum text consists of a jumbled",
            teachersReviewDate: "12th March",
        },
    ]
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
                            <TouchableOpacity >
                                <Ionicons name="heart" size={34} color="#F63232" />
                            </TouchableOpacity>
                        </View>

                        {/* <<<<<<<< Comming Classes >>>>>>>>> */}

                        <View style={styles._Recently_Added_Classes_Card_main}>
                            <View style={styles._Recently__Added_Classes__Card}>

                                <View style={styles.__Recently_Added_Classes_header}>
                                    <View style={styles._Recently_Added_Classes_Profile_Main}>
                                        <Image source={require('./../../img/TeacherProfileForStudents.png')} style={styles.TeacherProfileForStudents_img} />
                                    </View>
                                    <View style={styles._Recently_Added_Classes_Rating_Main}>
                                        <View style={styles._Recently_Added_Classes_Rating_Main2}>
                                            <FontAwesome name="star" size={14} color="#FFC700" />
                                            <Text style={styles._rating_show}>4.5</Text>
                                        </View>
                                        <Text style={styles._rating_heading}>Overall Rate</Text>
                                    </View>
                                    <View style={styles._Recently_Added_Classes_Rating_Main}>
                                        <View style={styles._Recently_Added_Classes_Rating_Main23}>
                                            <Feather name="user-check" size={14} color="#0094FF" />
                                            <Text style={styles._rating_show2}>4K</Text>
                                        </View>
                                        <Text style={styles._rating_heading}>Followers</Text>
                                    </View>
                                    <View style={styles._Recently_Added_Classes_Rating_Main}>
                                        <View style={styles._Recently_Added_Classes_Rating_Main24}>
                                            <Feather name="user-plus" size={14} color="#5200FF" />
                                            <Text style={styles._rating_show3}>5K</Text>
                                        </View>
                                        <Text style={styles._rating_heading}>Following</Text>
                                    </View>
                                </View>
                                <View style={styles._card_footer}>
                                    <View style={styles._student_des_main}>
                                        <Text style={styles._student_name}>Student’s name</Text>
                                        <Text style={styles.__Recently_Added_Classes_user_des}>In publishing and graphic design, Lorem
                                                ipsum is a placeholder text commonly used to demonstrate the visual</Text>
                                    </View>
                                    <View style={styles._Recently_Added_Classes_Rating_Main}>
                                        <View style={styles._Recently_Added_Classes_Rating_Main25}>
                                            <Feather name="user-check" size={14} color="#00C064" />
                                            <Text style={styles._rating_show4}>255</Text>
                                        </View>
                                        <Text style={styles._rating_heading}>Booked</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style={{ color: "white", fontSize: 30 }}>Rate and Reviews</Text>
                        {/* <<<<<<<< Review Card  >>>>>>>>> */}
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {ReviewCardData.map((v, i) => {
                                return (

                                    <View style={styles._Booking_Recently__Added_Classes__Card}>
                                        <View style={styles._Booking__Recently_Added_Classes_header}>
                                            <View style={styles._Booking_Recently_Added_Classes_Profile_Main}>
                                                <Image source={require('./../../img/profile.png')} style={styles._Booking_profile_img} />
                                            </View>

                                            <View style={styles._Booking_Recently_Added_Classes_User_Data_Main}>
                                                <Text style={styles._Booking__Recently_Added_Classes_Name}>{v.UserName}</Text>
                                                <Text style={styles._Booking_user_Des}>{v.userDes}</Text>

                                                {/* ==================> Teachers Review <================= */}
                                                <View style={{ marginTop: 20 }}>
                                                    <View style={styles._Booking__Recently_Added_Classes_header}>
                                                        <View style={styles._Teachers_Recently_Added_Classes_Profile_Main}>
                                                            <Image source={require('./../../img/profile.png')} style={styles._teacher_profile_img} />
                                                        </View>
                                                        <View style={styles._Teachers_Recently_Added_Classes_User_Data_Main}>
                                                            <Text style={styles._Teachers__Recently_Added_Classes_Name}>{v.techersName}</Text>
                                                            <View style={styles._Teachers__Review_Show}>
                                                                <Text style={styles._Teachers_user_Des}>{v.teachersReview}</Text>
                                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
                                                                    <TeachersRating />
                                                                    <Text style={styles._Teachers_Rating_date}>{v.teachersReviewDate}</Text>
                                                                </View>
                                                            </View>
                                                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                                                <TouchableOpacity >
                                                                    <AntDesign name="like2" size={20} color="#0085FF" />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{ marginLeft: 20 }}>
                                                                    <AntDesign name="dislike2" size={20} color="white" />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <View style={styles._Teachers__Review_Show}>
                                                                <View style={styles._type_review}>
                                                                    <Ionicons name="add" size={24} color="#707070" />
                                                                    <TextInput
                                                                        placeholder="Add Comment"
                                                                        style={styles._input}
                                                                        underlineColor="#707070"
                                                                        placeholderTextColor="#707070"
                                                                    />
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                )
                            })}
                        </ScrollView>

                        {/* <<<<<<<< Feeds >>>>>>>>> */}
                        <View style={styles._Feeds_main}>
                            <View style={styles._Feeds_fst_portion}>
                                <FontAwesome name="feed" size={20} color="#0085FF" />
                                <Text style={styles._Sort_Reacently_text}>“Teacher’s name” Posts</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={styles._card}>
                                <View style={styles._card_data}></View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10, backgroundColor: "white", paddingBottom: 10, paddingLeft: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity>
                                        <Ionicons name="heart" size={20} color="#F63232" />
                                        </TouchableOpacity>
                                        <Text style={styles._feeds_counter}>102K</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity>
                                            <FontAwesome name="whatsapp" size={20} color="#707070" />
                                        </TouchableOpacity>
                                        <Text style={styles._feeds_counter}>432</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles._card}>
                            <View style={styles._card_data}></View>
                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10, backgroundColor: "white", paddingBottom: 10, paddingLeft: 10 }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity>
                                            <Feather name="heart" size={20} color="#707070" />
                                        </TouchableOpacity>
                                        <Text style={styles._feeds_counter}>102K</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity>
                                            <FontAwesome name="whatsapp" size={20} color="#707070" />
                                        </TouchableOpacity>
                                        <Text style={styles._feeds_counter}>432</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* ===========> Video <============= */}
                        <View style={styles._video_main}>
                            <Video
                                ref={video}
                                style={styles.list_video}
                                source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
                                useNativeControls
                                resizeMode="cover"
                                isLooping
                                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                            />
                            <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10, backgroundColor: "white", paddingBottom: 10, paddingLeft: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <TouchableOpacity>
                                        <Feather name="heart" size={20} color="#707070" />
                                    </TouchableOpacity>
                                    <Text style={styles._feeds_counter}>102K</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <TouchableOpacity>
                                        <FontAwesome name="whatsapp" size={20} color="#707070" />
                                    </TouchableOpacity>
                                    <Text style={styles._feeds_counter}>432</Text>
                                </View>
                            </View>
                        </View>

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
        alignItems: "center",
        justifyContent: "space-between"
    },
    _Recently_Joined_main: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center"
    },
    _Recently_Added_Classes_Card_main: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    _Recently__Added_Classes__Card: {
        borderRadius: 15,
        width: "100%",
        marginRight: 10,
        padding: 10
    },
    addedclass: {
        width: 50,
        height: 50,
        borderRadius: 15
    },
    __Recently_Added_Classes_header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    _Recently_Added_Classes_Profile_Main: {
        width: "30%",
    },


    __Recently_Added_Classes_user_des: {
        color: "white",
        fontSize: 12,
        marginBottom: 20,
        fontWeight: "bold"
    },
    _card_footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },

    _profile_img: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2
    },
    _Booking_Recently__Added_Classes__Card: {
        borderRadius: 15,
        width: 280,
        padding: 10,
        marginTop: 30,
        backgroundColor: "#011421",
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 20
    },
    _Booking__Recently_Added_Classes_header: {
        flexDirection: "row",
    },

    _Bookingaddedclass: {
        width: 50,
        height: 50,
        borderRadius: 15
    },

    _Booking__Recently_Added_Classes_Name: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingTop: 5
    },
    _student_name: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    _Teachers__Recently_Added_Classes_Name: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5
    },
    _Booking_Recently_Added_Classes_Profile_Main: {
        width: "20%",
    },
    _Booking_Recently_Added_Classes_User_Data_Main: {
        width: "80%",
        paddingRight: 10,
    },
    _Teachers_Recently_Added_Classes_Profile_Main: {
        width: "15%",
    },
    _Teachers_Recently_Added_Classes_User_Data_Main: {
        width: "85%",
        paddingRight: 10,
    },
    _Booking_profile_img: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        alignSelf: "center"
    },
    TeacherProfileForStudents_img: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },
    _teacher_profile_img: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
    },
    _Booking_view_details_btn: {
        backgroundColor: "#1ED760",
        borderRadius: 5,
        marginBottom: 10,
        width: "100%",
        alignSelf: "center",
        marginTop: 10
    },
    _Booking_user_Des: {
        color: "white",
        fontSize: 12,
        marginTop: 20
    },
    _Teachers_user_Des: {
        color: "white",
        fontSize: 10,
    },
    _Booking_list_footer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 10,
        marginTop: 10,
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10
    },
    _Booking_listf_Title_main: {
        width: "50%"
    },
    _Booking_listf_Price_main: {
        width: "50%"
    },
    _Booking_Ftitle_value: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    _Booking_Fprice: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-end"
    },
    _Booking_sub_heading: {
        color: "white",
        fontSize: 26,
        marginTop: 20,
        marginBottom: 20
    },
    _Booking_class_name: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5
    },
    _Booking_history_text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        paddingLeft: 10
    },

    _Teachers__Review_Show: {
        backgroundColor: "#020605",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
    },
    _Teachers_Rating_date: {
        color: "white",
        fontSize: 10
    },
    _camera_btn: {
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    _Recently_Added_Classes_Rating_Main: {
        width: "20%"
    },
    _Recently_Added_Classes_Rating_Main2: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#FFC700",
        borderRadius: 20,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF0BA"
    },
    _rating_heading: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3
    },
    _rating_show: {
        color: "#FFC700",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 5
    },
    _Recently_Added_Classes_Rating_Main23: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#0094FF",
        borderRadius: 20,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C5E6FF"
    },
    _Recently_Added_Classes_Rating_Main24: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#5200FF",
        borderRadius: 20,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DECEFF"
    },
    _Recently_Added_Classes_Rating_Main25: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#00C064",
        borderRadius: 20,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B1FFDA"
    },
    _rating_show2: {
        color: "#0094FF",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 5
    },
    _rating_show2: {
        color: "#0094FF",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 5
    },
    _rating_show3: {
        color: "#5200FF",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 5
    },
    _rating_show4: {
        color: "#00C064",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 5
    },
    _student_des_main: {
        width: "78%"
    },
    list_video: {
        width: "100%",
        height: 170,
    },
    _type_review: {
        flexDirection: "row",
        alignItems: "center"
    },
    _input: {
        width: "80%",
        color: "#707070"
    },
    _video_main: {
        width: "100%",
        height: 200,
    },
    _Feeds_main: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    _Feeds_fst_portion: {
        flexDirection: "row",
        alignItems: "center"
    },
    _Sort_Reacently_text: {
        color: "white",
        fontSize: 18,
        marginLeft: 15,
        fontWeight: "bold"
    },
    _feedsbg1_image: {
        width: "100%",
        height: 200,
        marginTop: 20,
        borderRadius: 15,
    },
    _Feeds_header: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _feeds_counter: {
        color: "#707070",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10
    },
    _Feeds_footer: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 90
    },
    _card:{
        backgroundColor:"white",
        borderRadius:10,
        width:"48%",
        marginBottom:10,
        marginTop:10,
        padding:5
     

    },
    _card_data:{
        height:150,
        width:"100%"
    }
});

export default TeacherProfileForStudents;



