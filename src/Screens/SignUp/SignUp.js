import React, { useState, useEffect } from "react";
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
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const SignUp = (props) => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [eyeIcon, setEyeIcon] = useState(false);
  const [reEnter, setReEnter] = useState(false);
  const [remember, setRemember] = useState(false);
  const [selectedValue, setSelectValue] = useState("");
  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const handler_signup = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(selectedValue));
      if (selectedValue === "Student") {
        props.navigation.navigate("HomeStudents");
      } else if (selectedValue === "Teacher") {
        props.navigation.navigate("HomeTeachers");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* <<<<<<<< StatusBar >>>>>>>>> */}
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="#014F92"
        translucent={true}
      />
      <ImageBackground
        source={require("./../../img/loginbc.png")}
        style={styles._image}
      >
        {/* <<<<<<<< Body >>>>>>>>> */}
        <ScrollView style={styles.scrollView}>
          <View style={{ margin: 20 }}>
            {/* <<<<<<<< Heading >>>>>>>>> */}
            <Text style={styles._heading}>Sign Up</Text>

            {/* <<<<<<<< First Name Last Name >>>>>>>>> */}
            <View style={styles._first_and_last_name}>
              <View style={styles._email_input_main2}>
                <TextInput
                  placeholder="First Name"
                  style={styles._input}
                  underlineColor="white"
                  placeholderTextColor="white"
                />
              </View>
              <View style={styles._email_input_main2}>
                <TextInput
                  placeholder="First Name"
                  style={styles._input}
                  underlineColor="white"
                  placeholderTextColor="white"
                />
              </View>
            </View>
            {/* <<<<<<<< Email >>>>>>>>> */}
            <View style={styles._email_input_main}>
              <TextInput
                placeholder="Email@gmail.com"
                style={styles._input}
                underlineColor="white"
                placeholderTextColor="white"
              />
            </View>

            {/* <<<<<<<< Password >>>>>>>>> */}
            <View style={styles._email_input_main}>
              <View style={styles.passwordInputView}>
                <TextInput
                  style={styles._input2}
                  placeholder="Password"
                  secureTextEntry={eyeIcon}
                  placeholderTextColor="white"
                />
                {eyeIcon ? (
                  <Ionicons
                    name="eye"
                    size={24}
                    color="white"
                    onPress={() => setEyeIcon(!eyeIcon)}
                  />
                ) : (
                  <Ionicons
                    name="eye-off"
                    size={24}
                    color="white"
                    onPress={() => setEyeIcon(!eyeIcon)}
                  />
                )}
              </View>
            </View>

            {/* <<<<<<<< Re-enter Password >>>>>>>>> */}
            <View style={styles._email_input_main}>
              <View style={styles.passwordInputView}>
                <TextInput
                  style={styles._input2}
                  placeholder="Re-enter Password"
                  secureTextEntry={reEnter}
                  placeholderTextColor="white"
                />
                {reEnter ? (
                  <Ionicons
                    name="eye"
                    size={24}
                    color="white"
                    onPress={() => setReEnter(!reEnter)}
                  />
                ) : (
                  <Ionicons
                    name="eye-off"
                    size={24}
                    color="white"
                    onPress={() => setReEnter(!reEnter)}
                  />
                )}
              </View>
            </View>
            {/* <<<<<<<< Dropwown >>>>>>>>> */}
            <View style={{ marginTop: 10 }}>
              <DropDownPicker
                items={[
                  // { label: '- - - -  Who you are - - - -', value: 'whoareyou', },
                  { label: "Student", value: "Student" },
                  { label: "Teacher", value: "Teacher" },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={(item) => console.log(item.label, item.value)}
                placeholder="- - - -  Who you are - - - -"
                itemStyle={{ justifyContent: "flex-start" }}
                style={{ backgroundColor: "transparent", color: "white" }}
                arrowColor="white"
                labelStyle={{
                  fontSize: 14,
                  textAlign: "left",
                  color: "white",
                }}
                selectedLabelStyle={{
                  color: "#39739d",
                }}
                dropDownStyle={{ backgroundColor: "#014379" }}
                onChangeItem={(item) => setSelectValue(item.value)}
              />
            </View>

            {/* <<<<<<<< Remember >>>>>>>>> */}
            <View style={styles._forgot_remember_main}>
              {/* <<<<<<<< Remember >>>>>>>>> */}
              <View style={styles._remember_main}>
                {remember ? (
                  <MaterialCommunityIcons
                    name="checkbox-multiple-marked-outline"
                    size={24}
                    color="white"
                    onPress={() => setRemember(!remember)}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="checkbox-multiple-marked"
                    size={24}
                    color="white"
                    onPress={() => setRemember(!remember)}
                  />
                )}
                <Text style={styles._remember_text}>Remember Password</Text>
              </View>
            </View>

            {/* <<<<<<<< Login Button >>>>>>>>> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate("HomeTeachers")}
            >
              <Text style={styles._button_txt}>Sign up</Text>
            </TouchableOpacity>

            {/* <<<<<<<< Social Button >>>>>>>>> */}
            <View style={styles._socail_login_main}>
              <Text style={styles._socail_login_heading}>Sign up with</Text>

              {/* <<<<<<<< Google >>>>>>>>> */}
              <TouchableOpacity style={styles._google_login_btn}>
                <Image
                  source={require("./../../img/Google.png")}
                  style={styles._google_icon}
                />
                <Text style={styles._google_login_btn_text}>Google</Text>
              </TouchableOpacity>

              {/* <<<<<<<< Facebook >>>>>>>>> */}
              <TouchableOpacity style={styles._google_login_btn}>
                <FontAwesome5 name="facebook-f" size={20} color="#005CB1" />
                <Text style={styles._google_login_btn_text}>Facebook</Text>
              </TouchableOpacity>

              {/* <<<<<<<< Apple >>>>>>>>> */}
              <TouchableOpacity style={styles._google_login_btn}>
                <AntDesign name="apple1" size={20} color="#000000" />
                <Text style={styles._google_login_btn_text}>Apple</Text>
              </TouchableOpacity>
            </View>

            {/* <<<<<<<< Register >>>>>>>>> */}
            <View style={styles._register_main}>
              <Text style={styles._new_user}>Already have an account ? </Text>

              {/* <<<<<<<< Sign up >>>>>>>>> */}
              <TouchableOpacity
                onPress={() => props.navigation.navigate("LogIn")}
              >
                <Text style={styles._register}> Sign in now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

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
  _heading: {
    color: "white",
    fontSize: 50,
    marginTop: 30,
    marginBottom: 40,
  },
  _input: {
    padding: 5,
    color: "white",
  },
  button: {
    // backgroundColor: "green",
    borderRadius: 50,
    width: "50%",
    alignSelf: "center",
    marginTop: 50,
    backgroundColor: "#1ED760",
  },
  _button_txt: {
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  _socail_login_main: {
    marginTop: 30,
  },
  _google_icon: {
    borderRadius: 100,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  _register_main: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  _new_user: {
    color: "white",
    fontSize: 12,
  },
  _register: {
    fontSize: 12,
    color: "#1ED760",
    borderBottomColor: "#1ED760",
    borderBottomWidth: 1,
  },
  _email_input_main: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  _email_input_main2: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: "48%",
  },
  _forgot_remember_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  _remember_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _remember_text: {
    color: "white",
    marginLeft: 10,
  },
  _socail_login_heading: {
    color: "white",
  },
  _google_login_btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  _google_login_btn_text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#303030",
    marginLeft: 10,
  },
  _first_and_last_name: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  passwordInputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _input2: {
    padding: 5,
    color: "white",
    width: "80%",
  },
});

export default SignUp;
