import React from 'react';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import { StyleSheet, Text, View } from 'react-native';
const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const searchRestaurants = async () => {
    try {
      const response = await yelp.get(`/search`, {
        params: { term, limit: 50, location: 'Lamezia Terme' },
      });
      const restaurants = response.data.businesses;
      setResults(restaurants);
    } catch (err) {
      setErrorMessage('Something went wrong, try later.');
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchRestaurants}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
