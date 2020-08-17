import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useYelpResults from '../hooks/useYelpResults';
import { StyleSheet, Text, View } from 'react-native';
const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  const [searchApi, results, errorMessage] = useYelpResults();

  const filterByPrice = (priceRange) =>
    results.filter((r) => r.price === priceRange);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Restaurants found: {results.length}</Text>
      <ResultsList title="I più economici" data={filterByPrice('€')} />
      <ResultsList title="Nella media" data={filterByPrice('€€')} />
      <ResultsList title="I più cari" data={filterByPrice('€€€')} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
