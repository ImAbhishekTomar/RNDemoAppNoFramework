import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './screen/ home.screen';
import ProfileScreen from './screen/profile.screen';

export interface Album {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type RootStackParamList = {
  Home: undefined;
  Profile: {data: Album} | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appFrame: {
    flex: 1,
  },
  safePadding: {
    paddingRight: 20,
    paddingLeft: 20,
    display: 'flex',
    height: '100%',
  },
});

export default App;
