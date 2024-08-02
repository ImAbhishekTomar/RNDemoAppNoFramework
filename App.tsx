import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomePage from './pages/home.page';
import ProfilePage from './pages/profile.page';
import SettingsPage from './pages/settings.page';

export type RootStackParamList = {
  Home: undefined;
  Profile: {data: any};
  Settings: {userId: string};
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={styles.appFrame}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Profile" component={ProfilePage} />
            <Stack.Screen name="Settings" component={SettingsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
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
