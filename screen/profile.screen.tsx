import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Album, RootStackParamList} from '../App';
import {NetworkService} from '../services/network.service';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const networkService: NetworkService = new NetworkService();

export default function ProfileScreen({route}: Props): React.JSX.Element {
  const [data, setData] = useState<Album | undefined>(route.params?.data);
  const [album, setAlbum] = useState<Album | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(async () => {
    setLoading(true);
    await NetworkService.photos(data?.id);
  }, [data]);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={{flex: 1, height: '100%'}}>
          <Image
            source={{uri: album?.url}}
            style={{
              width: '100%',
              height: '60%',
            }}
          />
          <Text>{JSON.stringify(album)}</Text>
          <Text>Success!</Text>
        </View>
      )}
    </View>
  );
}
