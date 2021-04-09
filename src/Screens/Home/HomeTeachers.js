import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import {
  Fontisto,
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from "./../../Components/BottomSheet/BottomSheet";
class HomeTeachers extends React.Component {
  _menu = null;
  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    let Recently_Joined = [
      { name: "Anne", des: "publishing and graphic" },
      { name: "Josica", des: "publishing and graphic" },
      { name: "Anne", des: "publishing and graphic" },
    ];
  
    let FeedsData = [
      { comment: "Salsa Dance", commentCounter: "1.5K" },
      { comment: "Bachata", commentCounter: "1.5K" },
    ];
    return (
      <View style={styles.container}>
      {/* <<<<<<<< StatusBar >>>>>>>>> */}
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#013D6F"
        translucent={true}
      />
      <ImageBackground
        source={require("./../../img/login_background.png")}
        style={styles._image}
      >
        {/* <<<<<<<< Body >>>>>>>>> */}
        <ScrollView style={styles.scrollView}>
          <View style={{ margin: 20 }}>
          <View style={styles._header_main}>
                <Menu
                  ref={this.setMenuRef}
                  button={
                    <MaterialCommunityIcons
                      onPress={this.showMenu}
                      name="select-group"
                      size={34}
                      color="white"
                    />
                  }
                >
                
           
                  <MenuItem
                    onPress={() => this.props.navigation.navigate("LogIn")}
                  >
                    Sign Out
                  </MenuItem>
                </Menu>
              </View>
            {/* <<<<<<<< Heading >>>>>>>>> */}
            <Text style={styles._heading}>Welcome User</Text>
            <Text style={styles._sub_heading}>Find Your Guru</Text>

            {/* <<<<<<<< Search Main >>>>>>>>> */}
            <TouchableOpacity style={styles._search_city_main}>
              <Text style={styles._input}>Search by Guru or City</Text>
              <AntDesign name="search1" size={24} color="#D3D3D3" />
            </TouchableOpacity>

            {/* <<<<<<<< Recently Joined >>>>>>>>> */}
            <View style={styles._Recently_Joined_main}>
              <AntDesign name="adduser" size={20} color="#0085FF" />
              <Text style={styles._Recently_Joined_text}>Recently Joined</Text>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles._Recently_Joined_Card_main}>
                {Recently_Joined.map((v, i) => {
                  return (
                    <View style={styles._Recently_Joined_Card}>
                      <Image
                        source={require("./../../img/recent.png")}
                        style={styles._recent_img}
                      />
                      <View style={styles._Recently_Joined_User_Data}>
                        <Text style={styles._Recently_Joined_Name}>
                          {v.name}
                        </Text>
                        <Text style={styles._Recently_Joined_des}>{v.des}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>

            {/* <<<<<<<< Recently Added Classes >>>>>>>>> */}
            <View style={styles._Recently_Joined_main}>
              <MaterialCommunityIcons
                name="google-classroom"
                size={20}
                color="#0085FF"
              />
              <Text style={styles._Recently_Joined_text}>
                Recently Added Classes
              </Text>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles._Recently_Added_Classes_Card_main}>
                {Recently_Joined.map((v, i) => {
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
                          style={styles._Recently_Added_Classes_User_Data_Main}
                        >
                          <Text style={styles.__Recently_Added_Classes_Name}>
                            Salsa
                          </Text>
                          <Text
                            style={styles.__Recently_Added_Classes_profession}
                          >
                            Arun Jasse
                          </Text>
                        </View>
                        <View
                          style={styles._Recently_Added_Classes_Rating_Main}
                        >
                          <FontAwesome name="star" size={14} color="#FFC700" />
                          <Text style={styles._rating_show}>4.5</Text>
                        </View>
                      </View>
                      <Text style={styles.__Recently_Added_Classes_user_des}>
                        Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a
                      </Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>

            {/* <<<<<<<< Feeds >>>>>>>>> */}
            <View style={styles._Feeds_main}>
              <View style={styles._Feeds_fst_portion}>
                <FontAwesome name="feed" size={20} color="#0085FF" />
                <Text style={styles._Recently_Joined_text}>Feeds</Text>
              </View>

              <View style={styles._Feeds_fst_portion}>
                <Text style={styles._Sort_Reacently_text}>
                  Sort by Reacently
                </Text>
                <TouchableOpacity onPress={() => this.RBSheet.open()}>
                  <FontAwesome name="sort-amount-asc" size={16} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {FeedsData.map((v, i) => {
              return (
                <ImageBackground
                  source={require("./../../img/feedsbg1.png")}
                  style={styles._feedsbg1_image}
                >
                  <View style={styles._Feeds_header}>
                    <Image
                      source={require("./../../img/addedclass.png")}
                      style={styles._addedclass_img}
                    />
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles._feeds_counter}>
                        {v.commentCounter}
                      </Text>
                      <Feather name="heart" size={20} color="white" />
                    </View>
                  </View>
                  <View style={styles._Feeds_footer}>
                    <Text style={styles._feeds_counter}>{v.comment}</Text>
                    <FontAwesome name="whatsapp" size={20} color="white" />
                  </View>
                </ImageBackground>
              );
            })}
          </View>
        </ScrollView>
        {/* =================> Tab Bar <================== */}
        <View style={styles._tab_bar_main}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeTeachers")}>
            <FontAwesome name="qrcode" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Analysis")}
          >
          <Fontisto name="equalizer" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles._add_btn}
           onPress={() => this.props.navigation.navigate("CategoryAdd")}>
            <AntDesign name="plus" size={24} color="#004382" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LogIn")}
          >
            <MaterialCommunityIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TeacherLearnersAdmin")}
          >
            <AntDesign name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
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
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#014F92",
  },
  _image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
  },

  button: {
    // backgroundColor: "green",
    borderRadius: 50,
    width: "30%",
    alignSelf: "center",
    backgroundColor: "#1ED760",
  },
  _heading: {
    fontSize: 30,
    color: "white",
    marginTop: 60,
  },
  _sub_heading: {
    fontSize: 18,
    color: "white",
  },

  _search_city_main: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 3,
    paddingBottom: 3,
    marginBottom: 5,
    marginTop: 30,
    width: "90%",
    alignSelf: "center",
  },
  _input: {
    width: "90%",
    marginLeft: 0,
    padding: 10,
    fontSize: 15,
  },
  _search_btn: {
    backgroundColor: "#0085FF",
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    marginBottom: 5,
  },
  _Recently_Joined_main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  _Recently_Joined_text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginLeft: 10,
  },
  _Recently_Joined_Card_main: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  _Recently_Joined_Card: {
    backgroundColor: "#020B0E",
    borderRadius: 15,
    width: 130,
    marginRight: 20,
  },
  _recent_img: {
    width: 130,
    height: 100,
    borderRadius: 15,
  },
  _Recently_Joined_Name: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  _Recently_Joined_des: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 10,
  },
  _Recently_Joined_User_Data: {
    margin: 5,
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
  _Feeds_main: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _Feeds_fst_portion: {
    flexDirection: "row",
    alignItems: "center",
  },
  _Sort_Reacently_text: {
    color: "white",
    fontSize: 12,
    marginRight: 5,
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
    justifyContent: "space-between",
  },
  _feeds_counter: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
  },
  _Feeds_footer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 90,
  },
  // tabs
  _tab_bar_main: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "transparent",
  },
  _add_btn: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  _header_main: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});

export default HomeTeachers;
