import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeTeachers,
  SplashScreen,
  LogIn,
  SignUp,
  ForgotPassowrd,
  VerificationCode,
  ResetPassword,
  StudentsProfile,
  TeacherProfileForStudents,
  TeacherProfile,
  TeacherLearnersAdmin,
  CategoryAdd,
  Analysis,
  CategoryAddThenSave
} from "./../Screens/index";
function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassowrd"
          component={ForgotPassowrd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeTeachers"
          component={HomeTeachers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentsProfile"
          component={StudentsProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeacherProfileForStudents"
          component={TeacherProfileForStudents}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="TeacherProfile"
          component={TeacherProfile}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="TeacherLearnersAdmin"
          component={TeacherLearnersAdmin}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="CategoryAdd"
          component={CategoryAdd}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Analysis"
          component={Analysis}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="CategoryAddThenSave"
          component={CategoryAddThenSave}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
