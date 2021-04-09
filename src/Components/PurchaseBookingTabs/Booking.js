import React, { Component } from "react";
import { StyleSheet, Text, View ,ScrollView,Image,TouchableOpacity} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
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
        <CalendarPicker
          onDateChange={this.onDateChange}
          selectedDayColor="#0D5DE8"
          selectedDayTextColor="white"
          todayTextStyle={{ fontWeight: "bold", color: "white" }}
          todayBackgroundColor="#0085FF"
          color={"white"}
          textStyle={{
            color:"white",
            backgroundColor:"#004382"
          }}
        />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004382",
    marginTop:40
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
});