import React from "react";
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { View, StyleSheet, Text, Dimensions, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar, TextInput, ShadowPropTypesIOS } from "react-native";
import { MaterialCommunityIcons, FontAwesome, Ionicons, Entypo, AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import TeachersRating from './../../Components/TeachersRating/TeachersRating';
import * as ImagePicker from 'expo-image-picker';
class StudentsProfile extends React.Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    render() {

  
        let ReviewCardData = [
            {
                UserName: 'Amie Janes Bachata',
                userDes: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
                techersName: "Teacher’s",
                teachersReview: "Typically, Lorem Ipsum text consists of a jumbled",
                teachersReviewDate: "12th March",
                studentName: "Studend name",
                studentReview: "Typically, Lorem Ipsum text consists of a jumbled",
                studentReviewDate: "12th March"
            },
            {
                UserName: 'Amie Janes Bachata',
                userDes: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
                techersName: "Teacher’s",
                teachersReview: "Typically, Lorem Ipsum text consists of a jumbled",
                teachersReviewDate: "12th March",
                studentName: "Studend name",
                studentReview: "Typically, Lorem Ipsum text consists of a jumbled",
                studentReviewDate: "12th March"
            }
        ]    
        let openGallert = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
    
            console.log(result);
    
            if (!result.cancelled) {
                setGalleryPic(result.uri);
            }
        }
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
                        <Menu
                                    ref={this.setMenuRef}
                                    button={<MaterialCommunityIcons onPress={this.showMenu} name="select-group" size={34} color="white" />}
                                >
                                     <MenuItem onPress={() => this.props.navigation.navigate("MyWallet")}>My Wallet</MenuItem>
                                    <MenuItem onPress={() => this.props.navigation.navigate("LogIn")}>Sign Out</MenuItem>
                                </Menu>
                        </View>

                        {/* <<<<<<<< Comming Classes >>>>>>>>> */}

                        <View style={styles._Recently_Added_Classes_Card_main}>
                            <View style={styles._Recently__Added_Classes__Card}>

                                <View style={styles.__Recently_Added_Classes_header}>
                                    <View style={styles._Recently_Added_Classes_Profile_Main}>
                                        <ImageBackground source={require('./../../img/profileBack.png')} style={styles.profileBack_image}>
                                            <TouchableOpacity style={styles._camera_btn} onPress={() => openGallert()}>
                                                <FontAwesome name="camera" size={24} color="white" />
                                            </TouchableOpacity>
                                        </ImageBackground>
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
                                            <Feather name="rotate-ccw" size={14} color="#00C064" />
                                            <Text style={styles._rating_show4}>255</Text>
                                        </View>
                                        <Text style={styles._rating_heading}>Followed</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* <<<<<<<< User Data  >>>>>>>>> */}
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
                                            {/* <<<<<<<< Location  >>>>>>>>> */}
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
                                                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                                                <TouchableOpacity >
                                                                    <AntDesign name="like2" size={20} color="#0085FF" />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{ marginLeft: 20, marginRight: 20 }}>
                                                                    <AntDesign name="dislike2" size={20} color="white" />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity>
                                                                    <FontAwesome5 name="share" size={20} color="white" />
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>

                                                {/* ==================> Student Review <================= */}
                                                <View style={{ marginTop: 20 }}>
                                                    <View style={styles._Booking__Recently_Added_Classes_header}>
                                                        <View style={styles._Teachers_Recently_Added_Classes_Profile_Main}>
                                                            <Image source={require('./../../img/profile.png')} style={styles._teacher_profile_img} />
                                                        </View>
                                                        <View style={styles._Teachers_Recently_Added_Classes_User_Data_Main}>
                                                            <Text style={styles._Teachers__Recently_Added_Classes_Name}>{v.studentName}</Text>
                                                            <View style={styles._Teachers__Review_Show}>
                                                                <Text style={styles._Teachers_user_Des}>{v.studentReview}</Text>
                                                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
                                                                    <TeachersRating />
                                                                    <Text style={styles._Teachers_Rating_date}>{v.studentReviewDate}</Text>
                                                                </View>
                                                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                                                    <TouchableOpacity >
                                                                        <AntDesign name="like2" size={20} color="#0085FF" />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity style={{ marginLeft: 20 }}>
                                                                        <AntDesign name="dislike2" size={20} color="white" />
                                                                    </TouchableOpacity>
                                                                </View>
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
                    </View>
                </ScrollView>
                 
                            {/* =================> Tab Bar <================== */}
                   <View style={styles._tab_bar_main}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeStudents")}>
                        <FontAwesome name="qrcode" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BookingStudents")}>
                        <AntDesign name="book" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._add_btn}>
                        <AntDesign name="plus" size={24} color="#004382" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("NotificationsStudents")}>
                        <Ionicons name="md-notifications" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("StudentsProfile")}>
                        <AntDesign name="user" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
    }
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
    profileBack_image: {
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "center"
    },
    _header_main: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end"
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
        width: "100%",
        padding: 10,
        marginTop: 30,
        backgroundColor: "#011421",
        borderRadius: 5
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
        // tabs
        _tab_bar_main: {
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: 10,
            paddingTop: 10,
            backgroundColor:"transparent"
        },
        _add_btn: {
            backgroundColor: "white",
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20
    
        },
});

export default StudentsProfile;