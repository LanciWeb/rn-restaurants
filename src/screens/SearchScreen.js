import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useYelpResults from '../hooks/useYelpResults';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  const [searchApi, results, errorMessage] = useYelpResults();

  const filterByPrice = (priceRange) =>
    results.filter((r) => r.price === priceRange);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList title="I più economici" data={filterByPrice('€')} />
        <ResultsList title="Nella media" data={filterByPrice('€€')} />
        <ResultsList title="I più cari" data={filterByPrice('€€€')} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({ container: { flex: 1 } });
