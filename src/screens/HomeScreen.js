import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
//import { set } from 'react-native-reanimated';
import useSearch from '../hooks/useSearch';
import ResultsList from '../components/ResultsList';
import {SafeAreaView} from 'react-navigation';
import SearchBar from '../components/SearchBar';


const HomeScreen = ({navigation}) => {
    const [searchAPI, results, errorMessage, bookCollection] = useSearch();
    const [searchValue, setSearchValue] = useState('');
    //console.log(results);
    //console.log(navigation);
    
    if (results.items != undefined){
        return (
                <>
                    <SearchBar 
                        searchValue={searchValue}
                        onValueChange={newValue => setSearchValue(newValue)}
                        onValueSubmit={() => 
                            {setSearchValue('')
                            searchAPI(searchValue)}
                        }
                    />
                    
                    <ScrollView style={styles.container}>
                        <ResultsList 
                            results={results.items}
                            navigation={navigation}
                        />
                    </ScrollView>
                    
                </>
        );
    }
    else{
        return null;
    }
       
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        flex: 1,
        marginBottom: 10
    }
});

export default HomeScreen;