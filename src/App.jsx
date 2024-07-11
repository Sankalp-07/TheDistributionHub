import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import StartPage from './pages/StartPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import BillingDetails from './pages/BillingDetails';
import Brands from './pages/Brands';
import Profile from './pages/Profile';
import {responsiveVertical, responsiveHorizontal} from './styles/Responsive';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('Notifications')}>
        Home Screen
      </Text>
    </View>
  );
}

function Notifications({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        Notifications Screen
      </Text>
    </View>
  );
}

function JobScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                
                width: responsiveHorizontal(24),
                height: responsiveVertical(24),
                tintColor: focused
                  ? 'rgba(246, 86, 18, 1)'
                  : 'rgba(0, 0, 0, 1)',
              }}
              source={require('./assets/icons/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={ProductCategory}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                
                width: responsiveHorizontal(24),
                height: responsiveVertical(24),
                tintColor: focused
                  ? 'rgba(246, 86, 18, 1)'
                  : 'rgba(0, 0, 0, 1)',
              }}
              source={require('./assets/icons/category.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
               
                width: responsiveHorizontal(24),
                height: responsiveVertical(24),
                tintColor: focused
                  ? 'rgba(246, 86, 18, 1)'
                  : 'rgba(0, 0, 0, 1)',
              }}
              source={require('./assets/icons/brands.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        // component={Profile}
        component={BillingDetails}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
               
                width: responsiveHorizontal(24),
                height: responsiveVertical(24),
                tintColor: focused
                  ? 'rgba(246, 86, 18, 1)'
                  : 'rgba(0, 0, 0, 1)',
              }}
              source={require('./assets/icons/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Feed"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Article"
        component={Article}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="start">
      <Stack.Screen
        name="start"
        component={StartPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgotpassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product details"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="myTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      {/* <MyTabs /> */}
      <MyStack />
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
