import React from 'react';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultsList = ({ data, title, navigation }) => {
  const { navigate } = navigation;
  if (!data.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigate('ResultsShow', { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  titleStyle: { fontSize: 18, fontWeight: 'bold', margin: 15, marginBottom: 5 },
});
