import { 
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme, 
    
 } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

//Navigation
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Login from '../screens/Login/Login.tsx'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SignUp from '../screens/SignIn/SignUp'
import ConfirmEmail from '../screens/ConfirmEmail/ConfirmEmail.tsx'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword.tsx'
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen.tsx'
import ChangePass from '../screens/changePassword/ChangePass.tsx'
import BottomTab from '../component/BottomTabNavigation/BottomTab.tsx'


export type RootStackParamList = {
    Login: undefined;
    HomeScreen: undefined;
    SignUp: undefined;
    ConfirmEmail: undefined;
    ForgotPassword: undefined;
    NewPasswordScreen: undefined;
    ChangePass: undefined;
    BottomTab: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                title:"Home",
                headerShown: false,
            }}
            />
            <Stack.Screen
            name='Login'
            component={Login}
            options={{
                title:"Login",
                headerShown: false,
            }}
            />
            <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{
                title:"SignUp",
                headerShown: false,
            }}
            />
            <Stack.Screen
            name='ConfirmEmail'
            component={ConfirmEmail}
            options={{
                title:"ConfrimEmail",
                headerShown: false,
            }}
            />

           <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{
                title:"ForgotPassword",
                headerShown: false,
            }}
            />

           <Stack.Screen
            name='NewPasswordScreen'
            component={NewPasswordScreen}
            options={{
                title:"NewPasswordScreen",
                headerShown: false,
            }}
            />
                 <Stack.Screen
            name='ChangePass'
            component={ChangePass}
            options={{
                title:"ChangePass",
                headerShown: false,
            }}
            />
                <Stack.Screen
            name='BottomTab'
            component={BottomTab}
            options={{
                title:"BottomTab",
                headerShown: false,
            }}
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({

})