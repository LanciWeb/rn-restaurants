import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        value={term}
        placeholder="Cerca"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
        onEndEditing={onTermSubmit}
        onChangeText={onTermChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
  },
  textInput: { flex: 1, fontSize: 18 },
  iconStyle: { alignSelf: 'center', fontSize: 35, marginHorizontal: 15 },
});
