import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements'

const ResultsDetail = ({result, navigation}) => {
    //console.log(navigation);

    return <TouchableOpacity onPress={() => {navigation.navigate('Details', {item: result})}}>
        <View style={styles.container}>
            {result.volumeInfo.imageLinks != undefined 
                ? <Image 
                    style={styles.image} 
                    source={{uri: result.volumeInfo.imageLinks.thumbnail}} 
                    PlaceholderContent={<ActivityIndicator />}
                />
                : <Image 
                    style={styles.image} 
                    source={require('../../assets/images/NoImage.jpg')} 
                    PlaceholderContent={<ActivityIndicator />}
                />
            }
        </View>
    </TouchableOpacity>
    
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 250,
        resizeMode: 'cover'
    },
    books: {
        flex: 2  
    }, 
    container: {
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center'
    }
});

export default ResultsDetail;