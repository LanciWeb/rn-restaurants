import React from 'react';
import yelp from '../api/yelp';
import { StyleSheet, FlatList, Image, Text, View } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = React.useState(null);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({ image: { height: 200, width: 300 } });
