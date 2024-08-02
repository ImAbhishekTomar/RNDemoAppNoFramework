// ProfilePage.tsx
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfilePage({route}: Props): React.JSX.Element {
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: data.url}} style={{width: '100%', height: '20%'}} />
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-between',
    // alignItems: 'center',
  },
});
