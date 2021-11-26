import { Image, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react';

import AppLoading from 'expo-app-loading';
import ContainerList from "./components/ContainerList.js";
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from './assets/super.png'
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  const [loaded] = useFonts({
    roboto: require('./assets/fonts/Roboto-Medium.ttf')
  });
  
  if(!loaded) return <AppLoading />

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen"
          options={{
            headerLeft: () => <Image source={ logo } style={style.logo} />,
            headerTitle: () => <Text style={style.title}>Supermarket</Text>,
            headerStyle: {
              backgroundColor: '#d52b1e',
              fontFamily: 'roboto'
            },
            headerRight: () => <Text
            onPress={() => setOpenSearch(!openSearch)}
            >
              {openSearch ? "Close" : "Search"}
            </Text>
          }}
        >
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}

        </Stack.Screen>
        <Stack.Screen name='DetailScreen' component={DetailScreen} />
        <Stack.Screen name='ContainerList' component={ContainerList} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
  },
  title: {
    fontSize: 20, color: "black", fontFamily: 'roboto'
  }
})
