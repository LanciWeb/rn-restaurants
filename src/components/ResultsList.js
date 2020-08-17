import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ResultsList = ({ data, title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        // horizontal
        data={data}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  titleStyle: { fontSize: 18, fontWeight: 'bold' },
});
