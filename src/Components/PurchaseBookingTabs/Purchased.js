import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import TeachersRating from "../../Components/TeachersRating/TeachersRating";
import BottomSheet from "./../../Components/BottomSheet/BottomSheet";
class Purchased extends React.Component {
  render() {
    let CardData = [
      {
        name: "Salsa",
        title: "Arun Jasse",
        des: "Lorem ipsum is a placeholder text commonly used",
        date: "26th March",
        country: "Italy",
        time: "09AM - 01PM",
      },
      {
        name: "Salsa",
        title: "Arun Jasse",
        des: "Lorem ipsum is a placeholder text commonly used",
        date: "26th March",
        country: "Italy",
        time: "09AM - 01PM",
      },
      {
        name: "Salsa",
        title: "Arun Jasse",
        des: "Lorem ipsum is a placeholder text commonly used",
        date: "26th March",
        country: "Italy",
        time: "09AM - 01PM",
      },
      {
        name: "Salsa",
        title: "Arun Jasse",
        des: "Lorem ipsum is a placeholder text commonly used",
        date: "26th March",
        country: "Italy",
        time: "09AM - 01PM",
      },
    ];

    return (
      <View style={styles.container}>
          {/* <<<<<<<< Body >>>>>>>>> */}
          <ScrollView style={styles.scrollView}>
            <View style={{ margin: 20 }}>
              {/* <<<<<<<< Comming Classes >>>>>>>>> */}
              <View style={styles._Recently_Joined_main}>
                <Text style={styles._Recently_Joined_text}>Upcoming Classes</Text>
              </View>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles._Recently_Added_Classes_Card_main}>
                  {CardData.map((v, i) => {
                    return (
                      <View style={styles._Recently__Added_Classes__Card}>
                        <View style={styles.__Recently_Added_Classes_header}>
                          <View
                            style={styles._Recently_Added_Classes_Profile_Main}
                          >
                            <Image
                              source={require("./../../img/addedclass.png")}
                              style={styles._addedclass_img}
                            />
                          </View>
                          <View
                            style={
                              styles._Recently_Added_Classes_User_Data_Main
                            }
                          >
                            <Text style={styles.__Recently_Added_Classes_Name}>
                              {v.name}
                            </Text>
                            <Text
                              style={styles.__Recently_Added_Classes_profession}
                            >
                              {v.title}
                            </Text>
                          </View>
                          <View
                            style={styles._Recently_Added_Classes_Rating_Main}
                          >
                            <FontAwesome
                              name="star"
                              size={14}
                              color="#FFC700"
                            />
                            <Text style={styles._rating_show}>4.5</Text>
                          </View>
                        </View>
                        <Text style={styles.__Recently_Added_Classes_user_des}>
                          {v.des}
                        </Text>
                        <View style={styles._card_footer}>
                          <TouchableOpacity style={styles._view_btn}>
                            <Text style={styles._view_btn_text}>View</Text>
                          </TouchableOpacity>
                          <View style={styles._card_footer_text_main}>
                            <Text style={styles._card_footer_text}>
                              {v.date}
                            </Text>
                            <Text style={styles._card_footer_text}>
                              {v.country}
                            </Text>
                            <Text style={styles._card_footer_text}>
                              {v.time}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>

              {/* >>>>>>>>>>>> Completed Classes <<<<<<<< */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text style={styles._Recently_Joined_text}>
                  Completed Classes
                </Text>
                <TouchableOpacity onPress={() => this.RBSheet.open()}>
                  <FontAwesome name="sort-amount-asc" size={16} color="white" />
                </TouchableOpacity>
              </View>

              {/* <<<<<<<< User Data  >>>>>>>>> */}
              <View style={styles._Booking_Recently__Added_Classes__Card}>
                <View style={styles._Booking__Recently_Added_Classes_header}>
                  <TouchableOpacity
                    style={styles._Booking_Recently_Added_Classes_Profile_Main}
                    onPress={() => this.props.path.navigate("TeacherProfile")}
                  >
                    <Image
                      source={require("./../../img/profile.png")}
                      style={styles._Booking_profile_img}
                    />
                  </TouchableOpacity>

                  <View
                    style={
                      styles._Booking_Recently_Added_Classes_User_Data_Main
                    }
                  >
                    <Text style={styles._Booking__Recently_Added_Classes_Name}>
                      Amie Janes Bachata Class
                    </Text>
                    <Text style={styles._Booking_user_Des}>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </Text>
                    {/* <<<<<<<< Location  >>>>>>>>> */}
                    <View style={styles._Booking_location_main}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={styles._groups_text}>Group Class</Text>
                        <Text style={styles._groups_price}>$ 5.9</Text>
                      </View>
                      <View style={styles._Booking_location_row}>
                        <Ionicons name="ios-location" size={15} color="white" />
                        <Text style={styles._Booking_location_show}>
                          Via Arona, 15/9, 20149, Milano MI, Italy.
                        </Text>
                      </View>
                      <View style={styles._Booking_location_row}>
                        <Ionicons name="time" size={15} color="white" />
                        <Text style={styles._Booking_location_show}>
                          09 AM to 12 PM
                        </Text>
                      </View>
                      <View style={styles._Booking_location_row}>
                        <Entypo name="calendar" size={15} color="white" />
                        <Text style={styles._Booking_location_show}>
                          From January 12 To March 11
                        </Text>
                      </View>

                      {/* ==================> Teachers Review <================= */}
                      <View style={{ marginTop: 20 }}>
                        <View
                          style={styles._Booking__Recently_Added_Classes_header}
                        >
                          <View
                            style={
                              styles._Teachers_Recently_Added_Classes_Profile_Main
                            }
                          >
                            <Image
                              source={require("./../../img/profile.png")}
                              style={styles._teacher_profile_img}
                            />
                          </View>
                          <View
                            style={
                              styles._Teachers_Recently_Added_Classes_User_Data_Main
                            }
                          >
                            <Text
                              style={
                                styles._Teachers__Recently_Added_Classes_Name
                              }
                            >
                              Teacher’s review
                            </Text>
                            <View style={styles._Teachers__Review_Show}>
                              <Text style={styles._Teachers_user_Des}>
                                Typically, Lorem Ipsum text consists of a
                                jumbled
                              </Text>
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  marginTop: 5,
                                }}
                              >
                                <TeachersRating />
                                <Text style={styles._Teachers_Rating_date}>
                                  12th March
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  marginTop: 5,
                                }}
                              >
                                <TouchableOpacity>
                                  <AntDesign
                                    name="like2"
                                    size={20}
                                    color="#0085FF"
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={{ marginLeft: 20, marginRight: 20 }}
                                >
                                  <AntDesign
                                    name="dislike2"
                                    size={20}
                                    color="white"
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                  <FontAwesome5
                                    name="share"
                                    size={20}
                                    color="white"
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>

                      {/* ==================> Student Review <================= */}
                      <View style={{ marginTop: 20 }}>
                        <View
                          style={styles._Booking__Recently_Added_Classes_header}
                        >
                          <View
                            style={
                              styles._Teachers_Recently_Added_Classes_Profile_Main
                            }
                          >
                            <Image
                              source={require("./../../img/profile.png")}
                              style={styles._teacher_profile_img}
                            />
                          </View>
                          <View
                            style={
                              styles._Teachers_Recently_Added_Classes_User_Data_Main
                            }
                          >
                            <Text
                              style={
                                styles._Teachers__Recently_Added_Classes_Name
                              }
                            >
                              Studend name
                            </Text>
                            <View style={styles._Teachers__Review_Show}>
                              <Text style={styles._Teachers_user_Des}>
                                Typically, Lorem Ipsum text consists of a
                                jumbled
                              </Text>
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  marginTop: 5,
                                }}
                              >
                                <TeachersRating />
                                <Text style={styles._Teachers_Rating_date}>
                                  12th March
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  marginTop: 5,
                                }}
                              >
                                <TouchableOpacity>
                                  <AntDesign
                                    name="like2"
                                    size={20}
                                    color="#0085FF"
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 20 }}>
                                  <AntDesign
                                    name="dislike2"
                                    size={20}
                                    color="white"
                                  />
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
            </View>
          </ScrollView>

          {/* <<<<<<<<<<<<<<<<<<<<<<<  bottom sheet >>>>>>>>>>>>>>>>>>>>> */}
          <RBSheet
            ref={(ref) => {
              this.RBSheet = ref;
            }}
            height={400}
            openDuration={250}
            customStyles={{
              container: {
                borderTopEndRadius: 20,
                borderTopLeftRadius: 20,
              },
            }}
          >
            <BottomSheet />
          </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  _Recently_Joined_main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  _Recently_Joined_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  _Recently_Added_Classes_Card_main: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  _Recently__Added_Classes__Card: {
    backgroundColor: "#020B0E",
    borderRadius: 15,
    width: 250,
    marginRight: 10,
    padding: 10,
  },
  addedclass: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  __Recently_Added_Classes_header: {
    flexDirection: "row",
    alignItems: "center",
  },
  __Recently_Added_Classes_Name: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  __Recently_Added_Classes_profession: {
    color: "white",
    fontSize: 14,
  },
  _Recently_Added_Classes_Profile_Main: {
    width: "25%",
  },
  _Recently_Added_Classes_User_Data_Main: {
    width: "50%",
    paddingLeft: 5,
  },
  _Recently_Added_Classes_Rating_Main: {
    width: "25%",
    borderWidth: 2,
    borderColor: "#FFC700",
    flexDirection: "row",
    borderRadius: 20,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  _rating_show: {
    color: "#FFC700",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },
  __Recently_Added_Classes_user_des: {
    color: "white",
    fontSize: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  _card_footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  _view_btn: {
    backgroundColor: "#1ED760",
    width: "50%",
    borderRadius: 20,
  },
  _view_btn_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  _card_footer_text_main: {},
  _card_footer_text: {
    color: "white",
    fontSize: 10,
    alignSelf: "flex-end",
  },
  _addedclass_img: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  _profile_img: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  _Booking_Recently__Added_Classes__Card: {
    borderRadius: 15,
    width: "100%",
    padding: 10,
    marginTop: 30,
    backgroundColor: "#011421",
    borderRadius: 5,
  },
  _Booking__Recently_Added_Classes_header: {
    flexDirection: "row",
  },
  _Booking__Recently_Added_Classes_Name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 5,
  },
  _Teachers__Recently_Added_Classes_Name: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
  },
  __Recently_Added_Classes_profession: {
    color: "white",
    fontSize: 14,
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
    alignSelf: "center",
  },
  _teacher_profile_img: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
  },
  _Booking_user_Des: {
    color: "white",
    fontSize: 12,
    marginTop: 20,
  },
  _Teachers_user_Des: {
    color: "white",
    fontSize: 10,
  },
  _Booking_location_main: {
    marginTop: 10,
  },
  _Booking_location_row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  _Booking_location_show: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  _groups_text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  _groups_price: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  _Teachers__Review_Show: {
    backgroundColor: "#020605",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  _Teachers_Rating_date: {
    color: "white",
    fontSize: 10,
  },
 
});

export default Purchased;
