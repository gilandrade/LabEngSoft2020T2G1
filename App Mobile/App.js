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
import LoginScreen from './screens/LoginScreen';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './screens/modulos_extra/context';
import AsyncStorage from '@react-native-community/async-storage';

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
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'PEGAR_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [LoginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      //setUserToken('qwerty');
      //setIsLoading(false);

      let userToken;
      userToken = null;
      if (userName == 'teste' && password == 'senha') {
        userToken = 'poiuy';
        try{
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
          console.log(e);
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      //setUserToken(null);
      //setIsLoading(false);
      try{
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },

  }), []);

  React.useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'PEGAR_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (LoginState.isLoading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { LoginState.userToken !== null ? (
          <MyTabs />
        )
      :
        <LoginScreen />
      }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
