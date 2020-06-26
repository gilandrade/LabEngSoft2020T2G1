import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FAQScreen from './screens/FAQScreen';
import ExerciciosScreen from './screens/ExerciciosScreen';
import HomeScreen from './screens/HomeScreen';
import MetasScreen from './screens/MetasScreen';
import FormulariosScreen from './screens/FormulariosScreen';
import SettingsScreen from './screens/SettingsScreen';

const ExerciciosStack = createStackNavigator();
const FAQStack = createStackNavigator();
const FormulariosStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MetasStack = createStackNavigator();
/*const SettingsStack = createStackNavigator();*/

const ExerciciosStackScreen = ({navigation}) => (
    <ExerciciosStack.Navigator>
        <ExerciciosStack.Screen name="Exercícios" component={ExerciciosScreen} options={{
          headerRight: () => (
            <Ionicons.Button name='md-settings' size={30}
            backgroundColor='white' color='gray' onPress={() => navigation.navigate('Settings')}></Ionicons.Button>
          )
        }} />
        <ExerciciosStack.Screen name="Settings" component={SettingsScreen} />
    </ExerciciosStack.Navigator>
);
const FAQStackScreen = ({navigation}) => (
    <FAQStack.Navigator>
        <FAQStack.Screen name="FAQ" component={FAQScreen} options={{
          headerRight: () => (
            <Ionicons.Button name='md-settings' size={30}
            backgroundColor='white' color='gray' onPress={() => navigation.navigate('Settings')}></Ionicons.Button>
          )
        }} />
        <FAQStack.Screen name="Settings" component={SettingsScreen} />
    </FAQStack.Navigator>
);
const FormulariosStackScreen = ({navigation}) => (
    <FormulariosStack.Navigator>
        <FormulariosStack.Screen name="Formulários" component={FormulariosScreen} options={{
          headerRight: () => (
            <Ionicons.Button name='md-settings' size={30}
            backgroundColor='white' color='gray' onPress={() => navigation.navigate('Settings')}></Ionicons.Button>
          )
        }} />
        <FormulariosStack.Screen name="Settings" component={SettingsScreen} />
    </FormulariosStack.Navigator>
);
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          headerRight: () => (
            <Ionicons.Button name='md-settings' size={30}
            backgroundColor='white' color='gray' onPress={() => navigation.navigate('Settings')}></Ionicons.Button>
          )
        }} />
        <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
);
const MetasStackScreen = ({navigation}) => (
    <MetasStack.Navigator>
        <MetasStack.Screen name="Metas" component={MetasScreen} options={{
          headerRight: () => (
            <Ionicons.Button name='md-settings' size={30}
            backgroundColor='white' color='gray' onPress={() => navigation.navigate('Settings')}></Ionicons.Button>
          )
        }} />
        <MetasStack.Screen name="Settings" component={SettingsScreen} />
    </MetasStack.Navigator>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
           iconName = focused ? 'md-home' : 'md-home';
          } else if (route.name === 'Exercicios') {
           iconName = focused ? 'md-fitness' : 'md-fitness';
          } else if (route.name === 'FAQ') {
            iconName = focused ? 'md-help-circle' : 'md-help-circle';
          } else if (route.name === 'Formularios') {
            iconName = focused ? 'md-list-box' : 'md-list-box';
          } else if (route.name === 'Metas') {
            iconName = focused ? 'md-trophy' : 'md-trophy';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#99ff33',
        inactiveTintColor: 'gray',
      }}
      initialRouteName = 'Home'
    >
      <Tab.Screen name="FAQ" component={FAQStackScreen} />
      <Tab.Screen name="Exercicios" component={ExerciciosStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Metas" component={MetasStackScreen} />
      <Tab.Screen name="Formularios" component={FormulariosStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
