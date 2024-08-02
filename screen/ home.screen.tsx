import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Album, RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function HomeScreen({navigation}: Props): React.JSX.Element {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Item data={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

type props = {
  data: Album;
  navigation: Props['navigation'];
};

function Item({data, navigation}: props): React.JSX.Element {
  return (
    <TouchableOpacity
      key={data.id}
      onPress={() => navigation.navigate('Profile', {data: data})}
      style={{
        flex: 1,
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        padding: 10,
      }}>
      <Image
        source={{uri: data.thumbnailUrl}}
        style={{width: 40, height: 40, borderRadius: 50, marginRight: 10}}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <Text style={{fontWeight: 900}}>{data.title}</Text>
        <Text>{data.url}</Text>
      </View>

      <Text>▶︎</Text>
    </TouchableOpacity>
  );
}
