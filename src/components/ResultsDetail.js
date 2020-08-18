import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  const { name, rating, image_url, review_count } = result;

  const renderImage = () =>
    image_url ? (
      <Image style={styles.image} source={{ uri: image_url }} />
    ) : (
      <Image
        style={styles.image}
        source={require('../../assets/images/placeholder.png')}
      />
    );

  return (
    <View style={styles.container}>
      {renderImage()}
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stelle, {review_count} Recension
        {review_count === 1 ? 'e' : 'i'}
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  name: { fontWeight: 'bold', fontSize: 16 },
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});
