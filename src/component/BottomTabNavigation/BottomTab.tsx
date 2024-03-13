import React from 'react'
import Dashboard from '../../screens/Dashboard/Dashboard';
import Profile from '../../screens/Profile/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EntypoFont from 'react-native-vector-icons/Entypo';

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  return (
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon:(focused,size,color)=>
        {
            let iconName;
            if(route.name=='Home'){
            iconName='home';
            size=30;
            color=focused?"#fff":"#c3c3c3";
            return(<EntypoFont name={iconName} size={size} color={color} />)
        }
    }
        })}>
          <Tab.Screen name="Home" component={Dashboard} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      );
}

export default BottomTab