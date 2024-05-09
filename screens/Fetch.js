import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

const Fetch = () => {
  const [data, setData] = useState([]);

    // console.warn(data)

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let fresult = await fetch(url);
    let result = await fresult.json();
    // console.log(result);
    setData(result);
    console.warn(data);
  };

  return (
    <View>
      <Text>API Call</Text>
      {data ?
      <FlatList
        data={data}
        renderItem={({item}) => 
          <View>
            <Text>{item.userId} </Text>
            <Text>{item.id} </Text>
            <Text>{item.title} </Text>
          </View>
        }
      /> 
        // <View>
        //   <Text> {data.userId} </Text>
        //   <Text> {data.id} </Text>
        //   <Text> {data.title} </Text>
        // </View>
       : null}
    </View>
  );
};

export default Fetch;
