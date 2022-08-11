import * as React from 'react';
import { View, Image } from 'react-native'
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { stores } from './src/stores/index';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// // import screens
import Home from "./src/screens/Home"
import EventPage from './src/screens/Event'
import PublicDocuments from "./src/screens/PublicDocuments"
import LibraryPage from './src/screens/LibraryPage'
import Scholarship from './src/screens/Scholarship'
import AboutUS from './src/screens/AboutUS';
import NewsScreen from './src/screens/NewsScreen';
import Login from './src/screens/Login'
import Organitation from './src/screens/Organitation';
import OrganitationScreen from './src/components/OrganitationScreen';

// // Screen names
const homeName = 'PERHIMAGI'
const event = 'Event'
const publicDocouments = 'Private Documents'

/**
 * 
 * @param {*} route 
 * @returns name of Route
 */

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? homeName;

  switch (routeName) {
    case homeName:
      return homeName;
    case event:
      return event;
    case publicDocouments:
      return publicDocouments;
  }
}

/**
 * 
 * @param {*} route 
 * @returns boolean
 */

const hiddenHeader = (route) => {
  const hidden = getFocusedRouteNameFromRoute(route) ?? homeName

  switch (hidden) {
    case homeName:
      return false;
    case event:
      return true;
    case publicDocouments:
      return false;
  }

}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  const [navBar, setNavBar] = useState({
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#fffff',
      height: 0,
      margin: -8,
      paddingBottom: 5,
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setNavBar({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fffff',
          height: 70,
          margin: -8,
          paddingBottom: 5,
        },
      })
    }, 4000);
  }, [])

  return (
    <Tab.Navigator
      screenOptions={navBar}
    >

      <Tab.Screen
        name={homeName}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ top: 10 }}>
              <Image
                source={require('./src/assets/icons/homepage.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#80d6ff' : '#748c94'
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name={event}
        component={EventPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ top: 10 }}>
              <Image
                source={require('./src/assets/icons/timetable.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#80d6ff' : '#748c94'
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name={publicDocouments}
        component={PublicDocuments}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ top: 10 }}>
              <Image
                source={require('./src/assets/icons/data-protection.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#80d6ff' : '#748c94'
                }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              headerShown: hiddenHeader(route)
            })}
          />
          <Stack.Screen name="Library" component={LibraryPage} />
          <Stack.Screen name="Scholarship" component={Scholarship} />
          <Stack.Screen name="About Us" component={AboutUS} />
          <Stack.Screen name="News" component={NewsScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Organitation" component={Organitation} />
          <Stack.Screen name="Organitation Screen" component={OrganitationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}