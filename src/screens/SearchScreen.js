import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = React.useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(term) => setTerm(term)}
        onTermSubmit={() => console.log('submitted')}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
