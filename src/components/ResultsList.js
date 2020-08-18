import React from 'react';
import ResultsDetail from './ResultsDetail';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ResultsList = ({ data, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  titleStyle: { fontSize: 18, fontWeight: 'bold', margin: 15, marginBottom: 5 },
});
