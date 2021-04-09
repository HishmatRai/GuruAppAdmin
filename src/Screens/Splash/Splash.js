
import React from "react";
import { View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image, StatusBar } from "react-native";
class SplashScreen extends React.Component {

    render() {
        setTimeout(() => {
            this.props.navigation.navigate("LogIn");
           }, 3000);
        return (
            <View style={styles.container}>

                {/* <<<<<<<< StatusBar >>>>>>>>> */}
                <StatusBar barStyle="white" hidden={false} backgroundColor="#013D6F" translucent={true} />
                <ImageBackground source={require('./../../img/splash.png')} style={styles._image}>
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
        resizeMode: 'cover',
        height: "100%"
    },
});

export default SplashScreen;