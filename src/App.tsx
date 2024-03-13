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
import Router from './Router/Router'

const App = () => {
  return (
    <View style={styles.container}>
      <Router />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height: '100%',
 
  }
  
})