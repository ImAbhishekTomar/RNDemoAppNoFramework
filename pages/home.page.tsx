import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function HomePage({navigation}: Props): React.JSX.Element {
  const [getData, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <FlatList
      bounces={true}
      horizontal={false}
      data={getData}
      renderItem={({item}) => <Item item={item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />
  );
}

interface TodoItem {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface ItemProps {
  item: TodoItem;
  navigation: Props['navigation'];
}

function Item({item, navigation}: ItemProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={styles.item}
      key={item.id}
      onPress={() => navigation.navigate('Profile', {data: item})}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* <Text style={{fontWeight: 900}}>{item.albumId} - </Text> */}
        <Image
          source={{uri: item.thumbnailUrl}}
          style={{width: 50, height: 50, marginRight: 10, borderRadius: 100}}
        />
        <Text>{item.title}</Text>
      </View>
      {/* {item.completed ? <Text>✅</Text> : <Text>❌</Text>} */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.2,
  },
});
