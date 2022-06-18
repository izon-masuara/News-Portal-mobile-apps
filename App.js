import * as React from 'react';
import { View, Image } from 'react-native'
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // import screens
import Home from "./src/screens/Home"
import EventPage from './src/screens/Event'
import PublicDocuments from "./src/screens/PublicDocuments"
import LibraryPage from './src/screens/LibraryPage'
import Scholarship from './src/screens/Scholarship'
import AboutUS from './src/screens/AboutUS';
import NewsScreen from './src/screens/NewsScreen';

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
      return true;
    case event:
      return true;
    case publicDocouments:
      return false;
  }

}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel : false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fffff',
          height: 60,
        },
      })}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}