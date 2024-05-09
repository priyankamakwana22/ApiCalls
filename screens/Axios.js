import axios from 'axios';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Axios = () => {
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    let resp = await axios.get('https://reactnative.dev/movies.json');
    console.warn(resp.data.movies);
    setStateData(resp.data.movies);
  };
  return (
    <View>
      {stateData ? (
        <View>
            {stateData.map((item) => <View>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.releaseYear}</Text>
            </View> )}
        </View>
      ) : null}
    </View>
  );
};

export default Axios;
