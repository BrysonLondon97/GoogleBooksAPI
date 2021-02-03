import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({results, navigation}) => {
    //console.log(navigation);
    if (results == undefined) {
        return null;
    } else {
        return <View>
            <FlatList 
                numColumns={2}
                data={results}
                keyExtractor={(result => result.id)}
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
        
                            <ResultsDetail 
                                result={item}
                                navigation={navigation}
                            />
                            
                        </View>
                    )
                }}
                
            />
        </View>
    }

    

   
    

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1,
    }
})

export default ResultsList;